import { useState } from "react";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logout from "../components/logout/Logout";

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        setIsOpen(false); // close the popup
        setIsLoggedIn(true); // set the user as logged in
        navigate("/success"); // navigate to the success page
      });
    } else {
      alert("invalid input");
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
    // Clear any user-related information from your app's state or local storage
  };

  return (
    <>
      {isLoggedIn ? ( // Conditionally render the Logout component if the user is logged in
        <Logout onLogout={handleLogout} />
      ) : (
        <a
          href="#"
          onClick={() => setIsOpen(true)}
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Sign up
        </a>
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-[400px]">
            <h2 className="text-lg font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                  className="form-input mt-1 block w-full rounded-md"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Email:</span>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                  className="form-input mt-1 block w-full rounded-md"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Password:</span>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Your Password"
                  onChange={handleChange}
                  required
                  className="form-input mt-1 block w-full rounded-md"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700"> confirm Password:</span>
                <input
                  type="password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  placeholder="Re-enter Password"
                  onChange={handleChange}
                  required
                  className="form-input mt-1 block w-full rounded-md"
                />
              </label>

              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-md py-2 px-4"
                onClick={register}
              >
                Sign Up
              </button>

              <button
            type="button"
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-md py-2 px-4 ml-4"
           
          >
            Already have an account
          </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;

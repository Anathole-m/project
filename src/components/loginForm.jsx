import { useState } from "react";

 function Login() {
    const Email="admin@gmail.com";
    const Pass="admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === Email && password === Pass) {
      setMessage(" Login Successful!");
    } else {
      setMessage(" Invalid Email or Password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            className="mr-2"
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword" className="text-gray-700 text-sm">
            Show Password
          </label>
        </div>

        <button 
          onClick={handleLogin} 
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
          SIGN IN
        </button>

        {message && (
          <p className={`mt-4 text-center text-sm ${message ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <div className="text-center mt-4 text-sm">
          <a href="#" className="text-teal-600 hover:underline">Forgot Username / Password?</a>
          <p className="mt-2">
            Don't have an account? <a href="#" className="text-teal-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
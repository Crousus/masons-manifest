import {useState} from "react";

export default function RequestApiKeyBox() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@(student\.unisg\.ch|unisg\.ch)$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(e.target.value) || !email) {
      // Handle invalid submission attempt here
      setError("Please use a valid @student.unisg.ch or @unisg.ch email address.")
    } else {
      setError(null)
      // Handle valid submission here
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4 pb-2 space-y-4 max-w-sm ml-2">
      <label htmlFor="email" className="block text-lg">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className="block w-full rounded-md border-gray-200 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="you@student.unisg.ch"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  )

}
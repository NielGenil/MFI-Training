import { useRef } from "react";
import { postRegister } from "../api";

export default function RegisterPage() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
      password_confirm: confirmPasswordRef.current.value,
    };
    console.log("DATA", postData)
    postRegister(postData).then((res) => {
      console.log("Success:", res);
    });
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-500">
      <form className="mx-auto ml-20 mr-20 shadow-2xl bg-white shadow-xl/30 border border-gray-300 p-6 rounded-2xl">
        <h2 className="block uppercase tracking-wide text-gray-700 font-bold mb-2">
          Register Account
        </h2>

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          User Name
        </label>
        <input ref={userNameRef}
          className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          type="text"
        />

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Password
        </label>
        <input ref={passwordRef}
          className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-non"
          type="text"
        />

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Confirm Password
        </label>
        <input ref={confirmPasswordRef}
          className="appearance-none block w-full rounded-sm border border-gray-400 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-non"
          type="text"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-3 hover:bg-white hover:text-cyan-700 border hover:border-cyan-700 text-white bg-cyan-700 rounded md:rounded-lg p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

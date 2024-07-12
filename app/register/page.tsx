"use client";

import { signUp } from "../actions/actions";
const SignUpPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 ">
      <h1 className="text-center">Register</h1>
      <form
        className="flex flex-col max-w-lg items-center space-y-2"
        action={signUp}
      >
        <input type="text" placeholder="First Name" name="firstname" />
        <input type="text" placeholder="Last Name" name="lastname" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button className="text-md">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

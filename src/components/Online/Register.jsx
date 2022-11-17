import React, { useState } from 'react';
import { styles } from "../../constants";
// import { registerWith } from 'firebase/auth';
import { auth } from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error);
    //   });
  }
  return (
    <div className="max-w-[400px] w-full mx-auto my-20">
      <h1 className="text-center text-[28px] mb-[40px] font-normal">
        Create an account
      </h1>
      <form className="w-full" onSubmit={formSubmit}>
        <div className="mb-4 w-full">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-brand-stroke rounded-lg p-3"
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-brand-stroke rounded-lg p-3"
          />
        </div>
        <button className={`${styles.button} w-full`}>Login to store</button>
        <div className="w-full flex justify-between items-center mt-2">
          <Link to="">
            <button
                className="text-brand-gray font-normal text-[14px]"
                type="button"
                >
                Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
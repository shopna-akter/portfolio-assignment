"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import loginPageAnimation from "../../../public/Animation - 1715749319003.json";

const LoginPage = () => {
  const handleOAuthLogin = async (provider: "google" | "github") => {
    await signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Login <span className="text-[#ff014f]">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <Lottie animationData={loginPageAnimation} />
        </div>

        <div className="w-[80%] mx-auto bg-[#2a2a2b] p-6 shadow-lg rounded-lg">
          <p className="text-center text-lg text-white mb-4">Sign In Using</p>

          {/* OAuth Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => handleOAuthLogin("google")}
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => handleOAuthLogin("github")}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import loginPageAnimation from "../../../Animation - 1715749319003.json"
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Login <span className="text-[#ff014f]">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
        <Lottie
                        animationData={loginPageAnimation}
                        aria-aria-labelledby="use lottie animation"
                    />
        </div>

        <div className="w-[80%] mx-auto bg-[#2a2a2b] p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border bg-white border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full border border-[#ff014f] text-[#ff014f] font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#ff014f] hover:text-white"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm text-white">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#ff014f] hover:underline">
              Create an account
            </Link>
          </p>

          <p className="text-center mt-6 text-sm text-white">
            Or Sign Up Using
          </p>

          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200">
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200">
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

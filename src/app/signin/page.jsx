"use client";
import AuthFormButtons from "@/components/authform/AuthFormButtons";
import AuthFromBanner from "@/components/authform/AuthFromBanner";
import AuthHeader from "@/components/authform/AuthHeader";
import Container from "@/components/ui/Container";
import { setUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";


import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


const signIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);


  const dispatch = useDispatch()
  const router = useRouter()

  const handleSignIn = async (userData) => {
    console.log(userData);
    try {
      const res = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        return;
      }
      console.log(result);
      if(result.success){
        dispatch(setUser(result.user))
        router.push("/")
      }
      alert(result.message);
      // reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className=" flex justify-center items-center bg-surface-container-low py-10">
      <div className="w-full max-w-md bg-white rounded-xl overflow-hidden">
        <AuthFromBanner />
        <section className="px-4">
          <AuthFormButtons pathName="signin" />
          <AuthHeader
            title="Join the Hut"
            description="Create an account to start ordering."
          />
          <section>
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3">
              <div>
                <label className="block font-label-bold">Email Address</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      format: (value) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                        "Invalid email address",
                      domain: (value) =>
                        /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|aol\.com)$/.test(
                          value,
                        ) ||
                        "Only Gmail, Yahoo, Outlook, or AOL emails are allowed",
                    },
                  })}
                  type="text"
                  placeholder="name@example.com"
                  className="border border-outline-variant bg-surface-container-low rounded-lg w-full"
                />
                {errors?.email?.message && (
                  <p className="text-base text-red-600 mx-2">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-label-bold">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{8,30}$/,
                      message:
                        "Password must be at least 8-30 characters long, include uppercase, lowercase, number, and special character",
                    },
                  })}
                  type="password"
                  placeholder="••••••••"
                  className="border border-outline-variant bg-surface-container-low rounded-lg w-full"
                />
                {errors?.password?.message && (
                  <p className="text-base text-red-600 mx-2">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="font-label-bold py-4 bg-primary text-white rounded-xl w-full  transition-all duration-300 active:scale-105 cursor-pointer"
              >
                Create Account
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
};

export default signIn;

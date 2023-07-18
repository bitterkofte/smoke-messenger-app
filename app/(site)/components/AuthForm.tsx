"use client";

import Button from "@/app/components/inputs/Button";
import InputBar from "@/app/components/inputs/InputBar";
import AuthSocialButton from "./AuthSocialButton";
import { useCallback, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") setVariant("REGISTER");
    else setVariant("LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // axios register
    }
    if (variant === "LOGIN") {
      //nextauth signin
    }
  };

  const socialConnect = (action: string) => {
    setIsLoading(true);
    //nextauth social signin
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <motion.div
        // key={variant}
        // initial={{ height: "100%" }}
        animate={{ height: variant === "REGISTER" ? 520 : 430 }}
        // exit={{ height: "100%" }}
        // transition={{ duration: 10 }}
        className="px-4 py-8 shadow sm:rounded-lg sm:px-10 bg-white transition-all duration-200"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence>
            {variant === "REGISTER" && (
              <InputBar
                id="name"
                label="Name"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            )}
          </AnimatePresence>
          <InputBar
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <InputBar
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div className="">
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Log in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          {/* ANCHOR - HR */}
          <div className="relative">
            {/* SECTION - Line */}
            <div className="absolute inset-0 flex items-center ">
              <div className="w-full border-t border-gray-300" />
            </div>
            {/* SECTION - Header */}
            <div className="relative flex justify-center text-sm ">
              <span className="bg-white px-2 text-gray-500 select-none">
                Or continue with
              </span>
            </div>
          </div>

          {/* ANCHOR - Social Platforms */}
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialConnect("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialConnect("google")}
            />
          </div>
        </div>

        {/* ANCHOR - Toggle Menu */}
        <div className="mt-6 px-2 flex gap-2 justify-center text-sm text-gray-500">
          <div className="">
            {variant === "LOGIN" ? "Are you a newbie?" : "Already a Smoker?"}
          </div>
          <div
            onClick={toggleVariant}
            className="text-sky-600 font-bold cursor-pointer hover:drop-shadow-lg"
          >
            {variant === "LOGIN" ? "Better create an account" : "This way sir"}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;

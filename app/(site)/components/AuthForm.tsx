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
      <motion.div //NOTE 0
        // key={variant} 
        initial={{ height: 200 }}
        animate={{ height: variant === "LOGIN" ? 412 : 505 }}
        exit={{ height: 100 }}
        transition={{ duration: 0.3 }}
        className="px-4 py-8 shadow sm:rounded-lg sm:px-10 bg-white overflow-hidden transition-all duration-200"
      >
        <motion.form //NOTE 1
          // key={variant}
          // initial={{ height: "100%" }}
          // animate={{ y: variant === "REGISTER" ? 100 : 0 }}
          // exit={{ height: "100%" }}
          // transition={{ duration: 2 }}
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          {/* <motion.div //NOTE 2
          // key={variant}
          // initial={{ y: variant === "REGISTER" ? 200 : -20 }}
          // animate={{ y: variant === "REGISTER" ? 0 : 0  }}
          // exit={{ y: 30 }}
          // transition={{ duration: 0.3 }}
          > */}
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
          {/* </motion.div> */}
        </motion.form>

        <motion.div //NOTE 3
          // key={variant}
          // initial={{ height: "100%" }}
          // animate={{ y: variant === "REGISTER" ? 100 : 0 }}
          // exit={{ height: "100%" }}
          // transition={{ duration: 2 }}
        >
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
              {variant === "LOGIN"
                ? "Better create an account"
                : "This way sir"}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthForm;

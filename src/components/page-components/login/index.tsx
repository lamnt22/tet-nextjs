import { login } from "@/services/auth";
import { AuthStoreState, useAuthStore } from "@/stores";
import { LoginForm } from "@/types";
import { useFormik } from "formik";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import * as Yup from "yup";

export const LoginComponent = () => {
  const state: AuthStoreState = useAuthStore<any>((_state) => _state);
  const [typePassword, setTypePassword] = useState<string>("password");
  const router = useRouter();
  const pathName = usePathname();

  const formLogin = useFormik<LoginForm>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().trim().required(),
      password: Yup.string().trim().required(),
    }),
    onSubmit: async (data: LoginForm) => {
      let res = await login(data);
      
      if (res && res.data) {
        state.setToken(res.data.access_token)
        router.push('/');
      }
    },
  });

  return (
    <div className="min-h-screen h-screen grid grid-rows-[1fr] bg-[#444444] overflow-auto py-4">
      <div className="bg-white rounded-xl mx-4 md:m-auto relative">
        <div className="h-full flex justify-center">
          <div className="h-full flex justify-center">
            <div
              className={`w-full md:max-w-[700px] md:min-w-[700px] px-5 py-10 md:px-24 md:py-28 text-center flex items-center justify-center md:block
          `}
            >
              <div className="py-5">
                <div
                  className={`relative overflow-hidden mx-auto w-full lazy-img-wrapper `}
                >
                  <div>
                    <img src="/images/logo-fan-club-sp.png" alt="login image" />
                  </div>
                </div>
                <form
                  onSubmit={formLogin.handleSubmit}
                  className="flex flex-col space-y-4  px-4 py-8 sm:px-16"
                >
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className={`block text-xs text-gray-600
                  ${formLogin?.errors?.username ? "text-red-600" : ""} 
            `}
                    >
                      User name
                    </label>
                    <input
                      onChange={formLogin.handleChange}
                      id="username"
                      name="username"
                      type="text"
                      className={`mt-1 block w-full appearance-none rounded-md border 
                        px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm
                        ${
                          formLogin?.errors?.username
                            ? "border-red-300"
                            : "border-gray-300"
                        }
                    `}
                    />
                    <div
                      className="absolute"
                      style={{ top: "30px", right: "15px" }}
                    >
                      <span
                        className="input-group-text text-red-600"
                        style={{ cursor: "pointer" }}
                      >
                        {formLogin?.errors?.username ? (
                          <RiErrorWarningFill />
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    {formLogin?.errors?.username && (
                      <p className="text-red-600">
                        {formLogin?.errors?.username + ""}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className={`block text-xs text-gray-600 ${
                        formLogin?.errors?.password ? "text-red-600" : ""
                      } }`}
                    >
                      Password
                    </label>
                    <input
                      value={formLogin?.values?.password + ""}
                      onChange={formLogin.handleChange}
                      id="password"
                      name="password"
                      type={typePassword}
                      className={`mt-1 block w-full appearance-none rounded-md border  
                    px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm
                    ${
                      formLogin?.errors?.password
                        ? "border-red-300"
                        : "border-gray-300"
                    } 
                    `}
                    />
                    {formLogin.values.password && (
                      <div
                        className="absolute"
                        style={
                          formLogin?.errors?.password
                            ? { top: "30px", right: "40px" }
                            : { top: "30px", right: "15px" }
                        }
                      >
                        <span
                          onClick={() =>
                            setTypePassword(
                              typePassword === "text" ? "password" : "text"
                            )
                          }
                          className="input-group-text"
                          style={{ cursor: "pointer" }}
                        >
                          {typePassword === "text" ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute"
                      style={{ top: "30px", right: "15px" }}
                    >
                      <span
                        className="input-group-text text-red-600"
                        style={{ cursor: "pointer" }}
                      >
                        {formLogin?.errors?.password ? (
                          <RiErrorWarningFill />
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    {formLogin?.errors?.password && (
                      <div className="error text-red-600">
                        {formLogin?.errors?.password + ""}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 text-right">
                    <Link href="">Forgot password?Click here</Link>
                  </div>

                  <button
                    type="submit"
                    className={`${
                      formLogin?.isSubmitting
                        ? "cursor-not-allowed border-gray-200 bg-gray-100"
                        : "border-black bg-black text-white hover:bg-white hover:text-black"
                    } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
                  >
                    Login
                  </button>
                  <Link href="/register">Don't have an account? Sign up</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

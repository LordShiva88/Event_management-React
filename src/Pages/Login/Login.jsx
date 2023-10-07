import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>

      <form className="my-20 border p-10 w-full md:w-1/2 lg:1/3 mx-auto">
        <h2 className="text-2xl font-bold mb-5">Login Your Account</h2>
        
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            // type={showPassword?"text":"password"}
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
          {/* <button onClick={()=>handleShowPass(!showPassword)} className="absolute top-1/2 right-2">
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye> 
            }
          </button> */}
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <input type="checkbox" name="checked" className="mr-2" required />
              <span>Remember Me</span>
            </div>
            <div>
              <Link href="" className="text-[#eb347a] hover:underline">
                Forget Password
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#eb347a] text-white w-full p-3  font-semibold"
          >
            Login
          </button>

          <div>
            <span>
              Already have an account?{" "}
              <Link to="/register" className="text-[#eb347a] hover:underline">
                Register
              </Link>
            </span>
          </div>

          <hr />
          <p className="text-center">Or</p>

          <div className="grid space-y-4">
            <button
              className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
            <button
              className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute left-0 w-5 text-gray-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Github
                </span>
              </div>
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Login;

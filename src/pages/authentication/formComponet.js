import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";

const FormComponet = (props) => {
  const { register, handleSubmit } = useForm();
  console.log(props.valid.usernameIsValid);
  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      onChange={handleSubmit(props.isValid)}
      className="mt-20 space-y-6"
      method="POST"
    >
      <input type="hidden" name="remember" defaultValue="true" />

      <div className="flex space-x-5 mt-3">
        <div className="w-1/2 mb-6">
          <label
            htmlFor="username"
            className="block uppercase tracking-wide text-grаy-700 text-xs font-bold mb-2"
          >
            <span className="text-red-500">&nbsp;*</span>username
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <input
              id="username"
              className={
                props.valid.usernameIsValid
                  ? "block appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-300 ease-in-out "
                  : "block appearance-none  text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-orange-500 transition duration-300 ease-in-out bg-red-100"
              }
              placeholder="example.Alex"
              autoComplete="off"
              {...register("username")}
            />
          </div>
          <strong className="text-red-500 text-xs italic">
            username is require
          </strong>
        </div>
        <div className="w-1/2 mb-6">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              className={
                props.valid.passwordIsValid
                  ? "block appearance-none border-2 border-orange-100 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-300 ease-in-out"
                  : "block appearance-none border-2 border-orange-100 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none  focus:border-orange-500 transition duration-300 ease-in-out bg-red-100"
              }
              id="grid-password"
              type="password"
              placeholder="******************"
              {...register("password")}
            />
            <p className="text-grey-dark text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            {...register("rememberMe")}
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default FormComponet;

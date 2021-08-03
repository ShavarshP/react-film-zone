import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../..";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Headers({ login }) {
  const [isSearch, setSearche] = useState(true);
  const { auth } = useContext(Context);

  console.log("sis", useAuthState(auth));
  const toSearch = () => {
    setSearche(!isSearch);
  };
  return (
    <Popover className="relative bg-gray-900 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  bg-gray-900 py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <div className="p-2">
                  <div className="bg-white flex items-center rounded-full shadow-xl">
                    <input
                      className={
                        isSearch
                          ? "w-0 px-0"
                          : "w-full px-6" +
                            "transition ease-linear duration-700 rounded-l-full py-1 bg-indigo-600 leading-tight focus:outline-none"
                      }
                      id="search"
                      type="text"
                      placeholder="Search"
                    />
                    <div className="p-1">
                      <button
                        onClick={() => toSearch()}
                        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex  items-center justify-end md:flex-1 lg:w-0">
                {/* <NavLink
                  to={
                    localStorage.getItem("auth")
                      ? "/blog/CreatPost"
                      : "/blog/auth"
                  }
                  className="whitespace-nowrap cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Create Post
                </NavLink> */}
                <a
                  onClick={() => auth.signOut()}
                  className="ml-8 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}

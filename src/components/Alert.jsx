import React, { useState } from "react";

function Alert() {
  let [alertStatus, setAlertStatus] = useState(false);
  const alertHandler = () => {
    setAlertStatus((prev) => !prev);
  };
  return (
    <>
      <div className="mx-auto max-w-md">
        <div className="px-5 py-20">
          <h1 className="text-3xl font-bold pb-2">This is an Simple Alert app</h1>
          <p className="tet-2xl">
            The Alert App is a simple React application that demonstrates the
            use of React's useState hook for managing component state
            interactively.
          </p>
        </div>
        <div className="relative">
          {alertStatus ? (
            <div className="w-[200px] absolute left-120 bottom-20 text-xl rounded-lg  border-gray-200 border-[0.5px] p-2 ">
              
              🚨 Show Warning
            </div>
          ) : (
            ""
          )}
        </div>
        <button onClick={alertHandler} className="pt-2">
          {alertStatus ? (
            <div className="text-2xl bg-violet-300 hover:bg-violet-700 text-white cursor-pointer mt-8 p-6">
              Hide Alert
            </div>
          ) : (
            <div className="text-2xl bg-violet-300 hover:bg-violet-700 text-white cursor-pointer mt-8 p-6">
              Show Alert
            </div>
          )}
        </button>
      </div>
    </>
  );
}

export default Alert;

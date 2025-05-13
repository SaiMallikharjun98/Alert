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
          <h1 className="text-3xl font-bold pb-4">
            This is an Simple Alert app
          </h1>
          <p className="tet-2xl">
            The Alert App is a simple React application that demonstrates the
            use of React's useState hook for managing component state
            interactively.
          </p>
        </div>
        <div className="mt-1">
          <button onClick={alertHandler}>
            {alertStatus ? (
              <div className="text-2xl bg-violet-300 hover:bg-violet-700 text-white cursor-pointer p-5">
                Hide Alert
              </div>
            ) : (
              <div className="text-2xl bg-violet-300 hover:bg-violet-700 text-white cursor-pointer p-5">
                Show Alert
              </div>
            )}
          </button>
        </div>

        <div className="relative">
          {alertStatus ? (
            <div className="w-[200px] absolute left-120 bottom-50 text-xl rounded-lg  border-gray-200 border-[0.5px] p-2 ">
              🚨 Show Warning
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Alert;

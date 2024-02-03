import React from "react";
import { Spinner } from "flowbite-react";

function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center">
      {/* <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600"></div> */}

      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}

export default SpinnerLoader;

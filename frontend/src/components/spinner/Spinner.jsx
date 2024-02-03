import React from "react";
import Oval from "react-spinners";

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      {/* <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600"></div> */}

      <Oval
        visible={true}
        height="80"
        width="80"
        color="#40A2E3"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spinner;

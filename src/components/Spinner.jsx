import React from "react";
const Spinner = () => {
  return (
    <div className="absolute top-[50%] right-[50%]">
      <div className=" spinner font-lg"></div>
      <div className="mt-2 text-sm font-bold">Loading</div>
    </div>
  );
};

export default Spinner;

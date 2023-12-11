import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute flex justify-center text-zinc-500 top-[5%] font-semibold text-2xl w-full py-10">
          Documents
        </div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] leading-none tracking-tight font-semibold">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;

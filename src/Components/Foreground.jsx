import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null)
    
    const data = [
      {
      desc: "This is a description of the card you are trying to develope.",
      filesize: ".7mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "This is a description of the card you are trying to develope.",
      filesize: ".8mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "This is a description of the card you are trying to develope.",
      filesize: ".10mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}
    }
  ]
  return (
    <>
      <div ref={ref} className="fixed flex gap-5 flex-wrap w-full h-full z-[3] top-0 left-0 p-10">
        {data.map((item)=>(
          <Card data={item} reference={ref} />
        ))}  
      </div>
    </>
  );
};

export default Foreground;

// import React from "react";

const Heading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div>
      <div className="text-3xl text-black font-bold">{heading}</div>
      <div className="text-sm  text-black">{subheading} </div>
    </div>
  );
};

export default Heading;

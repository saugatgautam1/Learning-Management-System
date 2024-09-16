const Stayupdated = ({
  heading,
  time,
  subheading,
  image,
}: {
  heading: string;
  time: string;
  subheading: string;
  image:string;
}) => {
  return (
    <div style= {{
        backgroundImage:`url(${image})`, backgroundPosition: "right top"
    }} className="bg-white flex flex-col gap-[43px] p-[29px]  rounded-xl h-[200px] border border-black/40 bg-no-repeat  ">
      <div>{heading}</div>

      <div className="flex flex-col gap-4">
        <div>{time}</div>

        <div>{subheading}</div>
      </div>
    </div>
  );
};

export default Stayupdated;

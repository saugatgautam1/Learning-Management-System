const Dashboardcard = ({
  image,
  tags,
  title,
  author,
  authorimg,
}: {
  image: string;
  tags: string[];
  title: string;
  author: string;
  authorimg: string;
}) => {
  return (
    <div className="gap-[16px] flex flex-col w-min bg-white p-4 ml-[40px] border  border-black/20 rounded-lg">
      <div className="h-[218px] w-[333px]">
        <img src={image} className="h-full w-full object-cover rounded-[8px]" />{" "}
      </div>

      <div className="flex gap-4 ">
        {tags.map((tags, index) => {
          return (
            <div
              key={index}
              className="bg-blue-700 py-2 px-4 rounded-lg text-white"
            >
              {tags}
            </div>
          );
        })}
      </div>

      <div className=" flex flex-col gap-[16px]">
        <h1 className="text-lg font-bold">{title}</h1>

        <div className="flex items-center gap-[12px] ">
          <div className="size-[41px]">
            <img
              src={authorimg}
              className="size-full object-cover rounded-full"
            />{" "}
          </div>
          <div> {author} </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardcard;

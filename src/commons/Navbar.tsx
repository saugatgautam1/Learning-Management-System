import { Link, useLocation } from "react-router-dom";
import MainLogo from "../assets/Logo.svg";
import {
  Dashboardsvg,
  Communitysvg,
  Mentorsvg,
  BrowseVideosvg,
} from "../components/icons/Dashboardsvg";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";

const Navbar = () => {
  let path = useLocation();
  console.log(path);
  let navitems = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: Dashboardsvg,
    },
    {
      label: "Community",
      link: "/community",
      icon: Communitysvg,
    },
    {
      label: "Mentors",
      link: "/mentors",
      icon: Mentorsvg,
    },
    {
      label: "Browse Videos",
      link: "/browse-videos",
      icon: BrowseVideosvg,
    },
  ];

  return (
    <nav className="flex items-centern justify-between gap-[64px] pt-[40px] pb-[33px] bg-[#021826] text-white">
      <div className="flex items-center">
        <img src={MainLogo} alt="" className="pl-[40px]" />
        <ul className="flex gap-[16px] ">
          {navitems.map((item, index) => {
            return (
              <Link key={index} to={item.link}>
                <li
                  className={`hover:bg-white/20 py-[8px] px-[16px] rounded-lg flex gap-2 ${
                    path.pathname == item.link && "bg-white/20"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-2 pr-[41px]">
        <label
          htmlFor="searchbar"
          className="bg-white flex rounded-md items-center h-[40px] px-[16px] w-[370px]"
        >
          <input
            type="text"
            id="searchbar"
            placeholder="Search Skillset, Mentors, Classrooms and many more"
            className="text-black outline-none bg-transparent w-full placeholder:text-black placeholder:text-[10px]"
          />
          <IoSearchOutline className="text-black" />
        </label>
        <div className="rounded-full h-[41px] w-[41px] flex justify-center items-center bg-white/20">
          <IoMdNotifications size={24} />
        </div>
        <div className="rounded-full h-[41px] w-[41px] flex justify-center items-center bg-white/20">
          <MdOutlineMessage size={24} />
        </div>

        <div className="flex items-center gap-4">
          <p className="font-medium text-[18px]">
            <span className="text-[14px] text-white/50 ">Hi,</span> Alexander
          </p>

          <p className="bg-white/10 rounded-full h-[41px] w-[41px] flex justify-center items-center">A</p>
        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;

import { Link, useLocation } from "react-router-dom";
import MainLogo from "../assets/Logo.svg";
import {
  Dashboardsvg,
  Communitysvg,
  Mentorsvg,
  BrowseVideosvg,
} from "../components/icons/Dashboardsvg";

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
    <nav className="flex items-center gap-[64px] pt-[40px] pb-[33px] bg-[#021826] text-white">
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
    </nav>
  );
};

export default Navbar;

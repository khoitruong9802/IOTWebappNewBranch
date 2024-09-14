import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { CiClock1 } from "react-icons/ci";
import { GrSchedule } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FcSupport } from "react-icons/fc";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Monitor",
    link: "/#",
  },
  {
    id: 3,
    name: "Timing",
    link: "/#",
  },
  {
    id: 4,
    name: "Scheduler",
    link: "/#",
  },
  {
    id: 5,
    name: "Contacts",
    link: "/#",
  },
  {
    id: 6,
    name: "Supports",
    link: "/#",
  },
];

const Home = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img
                src="/src/assets/images/icon.png"
                alt="logo"
                className="w-10"
              />
              KKS Management Scheduler
            </a>
          </div>

          {/* search bar and buttons */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search your schedule ..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* {order buttons} */}
          <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
            <span
              className="group-hover:block hidden transition-all duration-200"
              onClick={() => alert("Monitoring...")}
            >
              Monitoring
            </span>
            <FiMonitor className="text-xl text-white drop-shadow-sm cursor-pointer"></FiMonitor>

            <span
              className="group-hover:block hidden transition-all duration-200"
              onClick={() => alert("Timing...")}
            >
              Timing
            </span>
            <CiClock1 className="text-xl text-white drop-shadow-sm cursor-pointer"></CiClock1>

            <span
              className="group-hover:block hidden transition-all duration-200"
              onClick={() => alert("Scheduling...")}
            >
              Schedule
            </span>
            <GrSchedule className="text-xl text-white drop-shadow-sm cursor-pointer"></GrSchedule>

            <span
              className="group-hover:block hidden transition-all duration-200"
              onClick={() => alert("Please contact to me...")}
            >
              Contact
            </span>
            <IoIosContact className="text-xl text-white drop-shadow-sm cursor-pointer"></IoIosContact>

            <span
              className="group-hover:block hidden transition-all duration-200"
              onClick={() => alert("Take me suppoting...")}
            >
              Support
            </span>
            <FcSupport className="text-xl text-white drop-shadow-sm cursor-pointer"></FcSupport>
          </button>
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* simple dropdown */}
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

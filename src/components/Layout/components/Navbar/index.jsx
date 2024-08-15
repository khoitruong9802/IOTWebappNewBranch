
import { useState } from "react";
import { Link } from "react-router-dom";

const routes = [
  {
    path: "/overview",
    name: "Overview",
  },
  {
    path: "/system",
    name: "System Management",
  },
  {
    path: "/scheduling",
    name: "Scheduling",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/settings",
    name: "Settings",
  },
  {
    path: "/about",
    name: "About Us",
  },
  {
    path: "/example",
    name: "Example",
  },
];

const currentPage = () => {
  return routes.findIndex((item) => item.path === window.location.pathname);
};

const Navbar = () => {
  const [route, setRoute] = useState(currentPage);

  return (
    <div
      className="flex flex-col fixed top-0 left-0 w-44 bg-blue-200 gap-y-8 py-4 gap-x-8 h-screen shrink-0 overflow-y-auto">
      {routes.map((item, index) => (
        <div
          className={`p-2 w-full font-medium ${index === route
              ? "bg-red-500 text-white rounded-md font-medium"
              : "text-blue-900"
            }`}
          key={index}
        >
          <Link
            onClick={() => setRoute(index)}
            className="w-full inline-block"
            to={item.path}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

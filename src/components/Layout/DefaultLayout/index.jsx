import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex justify-start ">
      <Navbar />
      <div className="ml-44 w-full mt-20">{children}</div>
      <Hero />
    </div>
  );
};

export default DefaultLayout;

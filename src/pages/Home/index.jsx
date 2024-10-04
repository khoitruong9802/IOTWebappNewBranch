import Header from "./Header";
import MainContent1 from "./MainContent1";
// import MainContent2 from "./MainContent2";
import Banner from "./Banner";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-start w-full bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Header />
      <MainContent1 />
      {/* <MainContent2 /> */}
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

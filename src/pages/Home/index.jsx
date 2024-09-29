import Header from "./Header";
import MainContent1 from "./MainContent1";
import MainContent2 from "./MainContent2";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-start w-full">
      <Header />
      <MainContent1 />
      <MainContent2 />
      <Footer />
    </div>
  );
};

export default Home;

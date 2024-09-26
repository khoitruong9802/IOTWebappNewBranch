import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-start w-full">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home;
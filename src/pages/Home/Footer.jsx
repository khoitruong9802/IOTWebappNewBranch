import FooterLogo from "../../assets/images/logo.svg";
import Banner from "../../assets/images/footer-banner.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  height: "100%",
  width: "100%",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const FooterLinks = [
  {
    title: "Home",
    links: "/#",
  },
  {
    title: "About",
    links: "/#about",
  },
  {
    title: "Contact",
    links: "/#contact",
  },
  {
    title: "Blog",
    links: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              KKS
            </h1>
            <p>Lorem, ipsum.</p>
          </div>

          {/* links details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl"></FaInstagram>
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl"></FaFacebook>
                </a>
                <a href="#">
                  <FaLinkedinIn className="text-3xl"></FaLinkedinIn>
                </a>
                <a href="#">
                  <FaYoutube className="text-3xl"></FaYoutube>
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+84 336147090</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

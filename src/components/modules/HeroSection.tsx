import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiWalkingBoot } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdSportsGymnastics } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="">
        <div className="">
          <div className="">
            <h5>Follow on:</h5>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
          <div className="">
            <h4>OUR SPECIALTY</h4>
            <div className="">
              <div className="">
                <GiWalkingBoot />
                <h5>Ground running</h5>
              </div>
              <div className="">
                <GrYoga />
                <h5>Yoga Assistance</h5>
              </div>
              <div className="">
                <MdSportsGymnastics />
                <h5>Personal Trainer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
            width={500}
            height={500}
            alt=""
          />
          <h1>
            POWER YOUR <br />
            PONTETIALE
          </h1>
          <div className="">
            <button>SHOP NOW </button>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

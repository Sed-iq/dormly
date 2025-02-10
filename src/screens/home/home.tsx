import Apartment_card from "../../components/apartment_card";
import ApartmentImage from "../../assets/IMG-20250121-WA0065.jpg";
import ApartmentImage2 from "../../assets/IMG-20250121-WA0066.jpg";
import Service_card from "../../components/service_card";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail, MdOutlineMyLocation, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
//
export default () => {
  return (
    <div className="">
      <HeroSection />
      <div className="flex mb-5 flex-col items-center justify-center">
        <div className="w-[80%]">
          <LodgeAdvert />
          <UpdateSection />
        </div>
      </div>
      <FeaturesAdvertSection />
    </div>
  );
};

function HeroSection() {
  return (
    <div
      id="bg-hero"
      className="w-full mb-[4em] bg-center flex items-center justify-center bg-cover h-[30em]"
    >
      <div
        id="content"
        className="z-20 flex text-white flex-col items-center relative"
      >
        <p className="">Afforable Lodges</p>
        <div className="w-[2em] mb-[0.5em] bg-white h-[0.5px]"></div>
        <p className="text-[4em] font-bold">
          Affordable housing at your location...
        </p>
        <Link to={"/signup"} className="bg-transparent hover-btn mb-[0.8em] text-lg  rounded-none border-2 border-white px-3 py-1">
          Get started
        </Link>
      </div>
    </div>
  );
}
function LodgeAdvert() {
  return (
    <div className="flex pb-[1em] mb-[2em] justify-center items-center">
      <div className="">
        {/* header */}
        <div className="flex mb-[3em] flex-col items-center justify-center">
          <p className="text-4xl font-medium">
            Find apartments at your desired location
          </p>
          <p className="text-center mb-[1em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ullam fugit magnam vel, quibusdam ducimus in voluptatum modi,
            excepturi eum cumque vitae omnis officia ea unde quidem aliquam illo
            quaerat. Facere.
          </p>
          <div className="w-[3em] mb-[0.5em] bg-blue-700 h-[2px]"></div>
        </div>

        <div className="space-y-4">
          <Apartment_card
            id="1"
            details="Self contain with tiles, nice kitchen and clean bathroom, safe neighborhood"
            image={ApartmentImage}
            title="Self-contain apartment available"
          />
          <Apartment_card
            id="2"
            details="Self contain with tiles, nice kitchen and clean bathroom, safe neighborhood"
            image={ApartmentImage2}
            title="Cozy Studio Apartment"
          />
        </div>
      </div>
    </div>
  );
}

function UpdateSection() {
  return (
    <div className="mb-[5em]">
      <div className="flex mb-[1em] flex-col items-center justify-center">
        <p className="text-4xl font-medium">Get updated</p>
        <p className="text-center text-sm text-gray-700 mb-[1em]">
          Stay updated on new openings at your location
        </p>
        <div className="w-[3em] mb-[0.5em] bg-blue-700 h-[2px]"></div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <input
          type="email"
          className="w-[70%] border-2 focus:border-blue-700 duration-100 outline-none border-gray-500 p-2 text-sm rounded-none "
          placeholder="Enter your email address to recieve updates"
        />
        <button className="text-blue-700 border-2 p-2  hover:bg-blue-800 hover:text-white border-blue-600 text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}

function FeaturesAdvertSection() {
  return (
    <div className="bg-[#252a2e] flex items-center justify-center p-[2em] min-h-[10em] text-white">
      <div className="w-[80%] ">
        <div className="flex mb-[2.3em] flex-col items-center justify-center">
          <p className="text-4xl font-medium">What we offer?</p>
          <p className="text-center text-sm mb-[1em]">
            Stay updated on new openings at your location
          </p>
          <div className="w-[3em] mb-[0.5em] bg-white h-[2px]"></div>
        </div>
        <div className="flex flex-wrap ">
            <Service_card icon={<MdOutlineMyLocation />} description={<p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit exercitationem molestias accusantium enim eos fuga ipsum repellat unde ipsam!
            </p>} title="Location Based searches"/>
            <Service_card icon={<MdEmail />} description={<p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit exercitationem molestias accusantium enim eos fuga ipsum repellat unde ipsam!
            </p>} title="Email reachout"/>
            <Service_card icon={<MdPerson />} description={<p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit exercitationem molestias accusantium enim eos fuga ipsum repellat unde ipsam!
            </p>} title="Personalized Viewpoint"/>
        </div>
      </div>
    </div>
  );
}

import { HiMiniUser } from "react-icons/hi2";
import Logo from "../../assets/dormly-high-resolution-logo-transparent.png";
import Apartment_card from "../../components/apartment_card";
import { NewApartments } from "../../components/apartment_card";
import ApartmentImage from "../../assets/IMG-20250121-WA0065.jpg";
import ApartmentImage2 from "../../assets/IMG-20250121-WA0066.jpg";

import img1 from "../../assets/images/IMG-20250305-WA0040.jpg";
import img2 from "../../assets/images/IMG-20250305-WA0041.jpg";
import img3 from "../../assets/images/IMG-20250305-WA0042.jpg";
import img4 from "../../assets/images/IMG-20250305-WA0043.jpg";
import img5 from "../../assets/images/IMG-20250305-WA0044.jpg";
import img6 from "../../assets/images/IMG-20250305-WA0045.jpg";
import img7 from "../../assets/images/IMG-20250305-WA0046.jpg";
import img8 from "../../assets/images/IMG-20250305-WA0047.jpg";
import img9 from "../../assets/images/IMG-20250305-WA0048.jpg";
import img10 from "../../assets/images/IMG-20250305-WA0049.jpg";

const apartments = [
  {
    id: "1",
    details:
      "Self contain with tiles, nice kitchen and clean bathroom, safe neighborhood",
    image: img1,
    title: "Self-contain apartment available",
  },
  {
    id: "2",
    details: "Spacious one-bedroom with modern design, 24/7 security",
    image: img2,
    title: "One-bedroom apartment",
  },
  {
    id: "3",
    details: "Two-bedroom flat, ample parking space, and good road network",
    image: img3,
    title: "Two-bedroom apartment",
  },
  {
    id: "4",
    details:
      "Affordable mini-flat with steady water supply and serene environment",
    image: img4,
    title: "Mini-flat for rent",
  },
  {
    id: "5",
    details: "Luxury self-contain with premium finishing and gated compound",
    image: img5,
    title: "Luxury Self-contain",
  },
  {
    id: "6",
    details: "Studio apartment with open kitchen and easy transport access",
    image: img6,
    title: "Studio Apartment",
  },
  {
    id: "7",
    details: "Furnished apartment with AC, TV, and standby generator",
    image: img7,
    title: "Furnished Apartment",
  },
  {
    id: "8",
    details: "Brand new two-bedroom with POP ceiling and spacious compound",
    image: img8,
    title: "Newly Built Two-bedroom",
  },
  {
    id: "9",
    details:
      "Affordable shared apartment with individual rooms and common spaces",
    image: img9,
    title: "Shared Apartment",
  },
  {
    id: "10",
    details: "Executive one-bedroom apartment in a high-class neighborhood",
    image: img10,
    title: "Executive Apartment",
  },
];

export default function Listings() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col pb-6 items-center">
        <div className="flex w-[80%] flex-col">
          <p className="font-semibold text-xl mb-4">Popular Listings</p>
          <div className="space-y-6">
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
              title="Self-contain apartment available"
            />
          </div>
          <div className="mt-20">
            <p className="font-semibold text-xl mb-4">Other listings</p>
            <div className="flex flex-wrap gap-4">
              {apartments.map((apartment) => (
                <NewApartments
                  key={apartment.id}
                  id={apartment.id}
                  details={apartment.details}
                  image={apartment.image}
                  title={apartment.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="py-4 top-5 bg-white sticky m-5 rounded-full justify-between border-2 border-gray-300 shadow-md px-5 flex items-center">
      <img srcSet={Logo} className="w-[4.2em]" alt="Dormly Logo" />
      <div className="flex items-center space-x-3">
        <p className="text-gray-500 font-bold text-sm">Welcome, user</p>
        <div className="bg-gray-400 rounded-full p-1">
          <HiMiniUser className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
}

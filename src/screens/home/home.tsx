import React, { useEffect, useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Star,
  ArrowLeft,
  Phone,
  Mail,
  User,
  Building,
} from "lucide-react";
import Lodge1 from "../../assets/Fno9IaEXgAAFtn1.jpeg";
import Lodge2 from "../../assets/Fno9IaEXoAIdAUJ.jpeg";
import Lodge3 from "../../assets/IMG-20250121-WA0065.jpg";
import Lodge4 from "../../assets/IMG-20250121-WA0066.jpg";
import Lodge5 from "../../assets/FlYsB2DXkAAQXSv.jpeg";
import IMG20250305WA0040 from "../../assets/images/IMG-20250305-WA0040.jpg";
import IMG20250305WA0041 from "../../assets/images/IMG-20250305-WA0041.jpg";
import IMG20250305WA0042 from "../../assets/images/IMG-20250305-WA0042.jpg";
import IMG20250305WA0043 from "../../assets/images/IMG-20250305-WA0043.jpg";
import IMG20250305WA0044 from "../../assets/images/IMG-20250305-WA0044.jpg";
import IMG20250305WA0045 from "../../assets/images/IMG-20250305-WA0045.jpg";
import IMG20250305WA0046 from "../../assets/images/IMG-20250305-WA0046.jpg";
import IMG20250305WA0047 from "../../assets/images/IMG-20250305-WA0047.jpg";
import IMG20250305WA0048 from "../../assets/images/IMG-20250305-WA0048.jpg";
import IMG20250305WA0049 from "../../assets/images/IMG-20250305-WA0049.jpg";
import IMG20250815WA0001 from "../../assets/images/IMG-20250815-WA0001.jpg";
import IMG20250815WA0007 from "../../assets/images/IMG-20250815-WA0007.jpg";
import IMG20250815WA0008 from "../../assets/images/IMG-20250815-WA0008.jpg";
import IMG20250815WA0009 from "../../assets/images/IMG-20250815-WA0009.jpg";

import { Link } from "react-router-dom";
import PaymentFlow from "./payment_flow";

interface Lodge1 {
  id: string;
  name: string;
  location: string;
  yearlyRent: number;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  rating: number;
  description: string;
  university: string;
  available: boolean;
}

interface RentalApplication {
  lodgeId: string;
  fullName: string;
  email: string;
  phone: string;
  university: string;
  studentId: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const mockLodges: Lodge1[] = [
  {
    id: "1",
    name: "Royal Heights Lodge",
    location: "Anyigba Kogi State",
    yearlyRent: 150000,
    images: [IMG20250305WA0040, IMG20250305WA0041, IMG20250305WA0042],
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Security", "Parking", "Generator", "Water Supply"],
    rating: 4.5,
    description:
      "Modern student accommodation with excellent facilities near University.",
    university: "Prince Abubakar Audu University",
    available: true,
  },
  {
    id: "2",
    name: "Elite Student Suites",
    location: "Anyigba Kogi State",
    yearlyRent: 170000,
    images: [IMG20250305WA0043, IMG20250305WA0044, IMG20250305WA0045],
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Security", "Study Room", "Laundry"],
    rating: 4.2,
    description: "Comfortable single rooms perfect for focused studying.",
    university: "Prince Abubakar Audu University",
    available: true,
  },
  {
    id: "3",
    name: "Campus View Lodge",
    location: "Anyigba Kogi State",
    yearlyRent: 280000,
    images: [IMG20250305WA0046, IMG20250305WA0047, IMG20250305WA0048],
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Security", "Parking", "Kitchen"],
    rating: 4.0,
    description:
      "Spacious accommodation with great views of university campus.",
    university: "Prince Abubakar Audu University",
    available: true,
  },
  {
    id: "4",
    name: "Premium Student Residence",
    location: "Anyigba Kogi State",
    yearlyRent: 200000,
    images: [IMG20250305WA0049, IMG20250815WA0001, IMG20250815WA0007],
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Security", "Generator", "Water Supply", "Parking"],
    rating: 4.3,
    description: "Well-furnished accommodation with modern amenities.",
    university: "Prince Abubakar Audu University",
    available: true,
  },
  {
    id: "5",
    name: "Comfort Lodge",
    location: "Anyigba Kogi State",
    yearlyRent: 120000,
    images: [IMG20250815WA0008, IMG20250815WA0009],
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Security", "Study Room"],
    rating: 4.1,
    description: "Affordable and comfortable student accommodation.",
    university: "Prince Abubakar Audu University",
    available: true,
  },
  {
    id: "6",
    name: "Royal Heights Lodge",
    location: "Anyigba Kogi State",
    yearlyRent: 150000,
    images: [Lodge1, Lodge2],
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Security", "Parking", "Generator", "Water Supply"],
    rating: 4.5,
    description:
      "Modern student accommodation with excellent facilities near University of Lagos.",
    university: "Anyigba",
    available: true,
  },
  {
    id: "7",
    name: "Elite Student Suites",
    location: "Anyigba Kogi State",
    yearlyRent: 170000,
    images: [Lodge3, Lodge5, Lodge4],
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Security", "Study Room", "Laundry"],
    rating: 4.2,
    description:
      "Comfortable single rooms perfect for focused studying at ABU.",
    university: "Prince Abubakar Audu University",
    available: true,
  },
  // {
  //   id: '3',
  //   name: 'Campus View Lodge',
  //   location: 'Nsukka, Enugu',
  //   yearlyRent: 280000,
  //   images: [],
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   amenities: ['WiFi', 'Security', 'Parking', 'Kitchen'],
  //   rating: 4.0,
  //   description: 'Spacious accommodation with great views of UNN campus.',
  //   university: 'University of Nigeria, Nsukka',
  //   available: true
  // }
];

const DormlyApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "lodge" | "rent" | "payment"
  >("home");
  const [selectedLodge, setSelectedLodge] = useState<Lodge1 | null>(null);
  const [rentalApplication, setRentalApplication] = useState<RentalApplication>(
    {
      lodgeId: "",
      fullName: "",
      email: "",
      phone: "",
      university: "",
      studentId: "",
      emergencyContact: "",
      emergencyPhone: "",
    }
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [profile_details, setProfile] = useState({});

  useEffect(() => {
    const cache = localStorage.getItem("profile-details");
    console.log(cache == null);
    if (cache != null) setProfile(JSON.parse(cache));
    setProfile(null);
    // console.log(profile_details);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleViewLodge = (lodge: Lodge1) => {
    setSelectedLodge(lodge);
    setCurrentImageIndex(0);
    setCurrentView("lodge");
  };

  const handleRentNow = (lodge: Lodge1) => {
    setSelectedLodge(lodge);
    setRentalApplication((prev) => ({ ...prev, lodgeId: lodge.id }));
    setCurrentView("rent");
  };

  const handleApplicationSubmit = (e: React.FormEvent, copyRental: any) => {
    e.preventDefault();
    setRentalApplication(copyRental);
    setCurrentView("payment");
  };

  const handlePayment = () => {
    alert(
      "Payment successful! Your application has been submitted. You will receive a confirmation email shortly."
    );
    setCurrentView("home");
    setRentalApplication({
      lodgeId: "",
      fullName: "",
      email: "",
      phone: "",
      university: "",
      studentId: "",
      emergencyContact: "",
      emergencyPhone: "",
    });
  };

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Dormly</h1>
            </div>

            {profile_details ? (
              <div className="flex items-center space-x-4">
                <button className="bg-red-700 px-3 py-1.5 rounded text-white text-xs font-bold">
                  Logout
                </button>
                <Link to={"/profile"}>
                  <button className="bg-gray-200 p-1.5 rounded-full">
                    <User className="w-[20px] h-[20px]" />
                  </button>
                </Link>
              </div>
            ) : (
              <nav className="hidden md:flex space-x-3">
                <Link to={"/signin"}>
                  <button className="px-4 py-1 bg-indigo-800 rounded text-white text-sm">
                    Signin
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="px-4 py-1 border-2 border-indigo-700 rounded text-indigo-800 text-sm">
                    Signup
                  </button>
                </Link>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {" "}
              Student Lodge
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover comfortable, secure, and affordable student accommodation
            across Nigerian universities. Your home away from home awaits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-2xl font-bold text-indigo-600">500+</span>
              <p className="text-gray-600">Properties</p>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-2xl font-bold text-indigo-600">50+</span>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-2xl font-bold text-indigo-600">10k+</span>
              <p className="text-gray-600">Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Properties
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockLodges.map((lodge) => (
              <div
                key={lodge.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={lodge.images[0]}
                    alt={lodge.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{lodge.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {lodge.name}
                  </h4>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{lodge.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{lodge.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{lodge.bathrooms} bath</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">
                      {formatCurrency(lodge.yearlyRent)}
                    </span>
                    <span className="text-sm text-gray-500">/year</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewLodge(lodge)}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleRentNow(lodge)}
                      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const LodgeView = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => setCurrentView("home")}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Properties
          </button>
        </div>
      </div>

      {selectedLodge && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative mb-6">
                <img
                  src={selectedLodge.images[currentImageIndex]}
                  alt={selectedLodge.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {selectedLodge.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedLodge.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{selectedLodge.location}</span>
                  <div className="flex items-center ml-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span>{selectedLodge.rating} rating</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {selectedLodge.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{selectedLodge.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{selectedLodge.bathrooms} Bathrooms</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedLodge.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-indigo-600">
                    {formatCurrency(selectedLodge.yearlyRent)}
                  </span>
                  <span className="text-gray-500 ml-2">/year</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">University:</span>
                    <span className="font-medium">
                      {selectedLodge.university}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="text-green-600 font-medium">
                      Available
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleRentNow(selectedLodge)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Rent This Property
                </button>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+234 800 DORMLY</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>hello@dormly.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const RentView = () => {
    const [copyRental, setCopyRental] = useState({
      ...rentalApplication,
    });
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button
              onClick={() => setCurrentView("lodge")}
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Property
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Rental Application
            </h2>

            {selectedLodge && (
              <div className="bg-indigo-50 rounded-lg p-4 mb-8">
                <h3 className="font-semibold text-indigo-900 mb-2">
                  {selectedLodge.name}
                </h3>
                <p className="text-indigo-700 text-sm">
                  {selectedLodge.location}
                </p>
                <p className="text-2xl font-bold text-indigo-600 mt-2">
                  {formatCurrency(selectedLodge.yearlyRent)} /year
                </p>
              </div>
            )}

            <form
              onSubmit={(event) => handleApplicationSubmit(event, copyRental)}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={rentalApplication.fullName}
                      onChange={(e) =>
                        setRentalApplication((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={copyRental.email}
                      onChange={(e) =>
                        setCopyRental((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={copyRental.phone}
                      onChange={(e) =>
                        setCopyRental((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={copyRental.emergencyContact}
                    onChange={(e) =>
                      setCopyRental((prev) => ({
                        ...prev,
                        emergencyContact: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Emergency contact full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={copyRental.emergencyPhone}
                    onChange={(e) =>
                      setCopyRental((prev) => ({
                        ...prev,
                        emergencyPhone: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 mb-2">
                  Important Notes:
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Rent is paid annually in advance</li>
                  <li>
                    • A security deposit equal to one month's rent is required
                  </li>
                  <li>• All information provided will be verified</li>
                  <li>• You will receive a rental agreement upon approval</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  // Main render function
  switch (currentView) {
    case "lodge":
      return <LodgeView />;
    case "rent":
      return <RentView />;
    case "payment":
      return (
        <PaymentFlow
          selectedLodge={selectedLodge}
          rentalApplication={rentalApplication}
          setCurrentView={setCurrentView}
        />
      );
    default:
      return <HomeView />;
  }
};

export default DormlyApp;

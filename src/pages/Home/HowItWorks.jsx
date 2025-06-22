import React from "react";
import {
  FaTruckPickup,
  FaMoneyBillWave,
  FaStoreAlt,
  FaBriefcase,
} from "react-icons/fa";

const howItWorksData = [
  {
    icon: FaTruckPickup,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Cash On Delivery",
    description:
      "Hassle-free cash handling on doorstep delivery — securely collected and transferred.",
  },
  {
    icon: FaStoreAlt,
    title: "Delivery Hub",
    description:
      "Reliable parcel handover at designated delivery hubs across Bangladesh.",
  },
  {
    icon: FaBriefcase,
    title: "Booking SME & Corporate",
    description:
      "Custom logistics for small businesses and corporate clients, tailored to your scale.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <div className=" container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className=" container flex flex-wrap gap-5 justify-center mx-auto">
          {howItWorksData.map((item, index) => (
            <div
              key={index}
              className=" card bg-white hover:scale-105 w-80 shadow-md hover:shadow-lg transition p-6 text-left"
            >
              <div className="flex flex-col  items-start gap-4 space-y-5 ">
                <item.icon size={50} />
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

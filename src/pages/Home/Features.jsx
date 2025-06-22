import React from "react";
import svs1 from "../../assets/Illustration.svg";
import svs2 from "../../assets/Group 4.svg";

const features = [
  {
    icon: svs1,
    title: "Live Parcel Tracking",
    description:
      "Track your parcels in real-time from pickup to delivery using our smart tracking system.",
  },
  {
    icon: svs2,
    title: "100% Safe Delivery",
    description:
      "We ensure your packages are handled with care and delivered securely to your customers.",
  },
  {
    icon: svs2,
    title: "24/7 Call Center Support",
    description:
      "Our friendly support team is available round the clock to assist you anytime.",
  },
];

const Features = () => {
  return (
    <div>
      <hr className="w-full border-t-2 border-dashed border-gray-300 my-4" />
      <div className=" p-6 flex flex-col md:flex-row gap-6">
        <div className="mx-auto">
          <div className=" space-y-4 overflow-y-auto pr-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md p-4 bg-white"
              >
                <div className="flex flex-col items-center md:flex-row md:items-start  gap-4 relative">
                  {/* Icon with vertical line */}
                  <div className="relative flex justify-center my-auto  items-center">
                    <img src={feature.icon} alt={feature.title} />
                  </div>

                  <div className="border md:h-50 md:border-l-2  sm:border-t-2 md:w-0 w-full  border-dashed border-gray-400 mx-4" />
                  <div className="space-y-5">
                    <h4 className="text-2xl font-bold">{feature.title}</h4>
                    <p className=" text-gray-600 ">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full border-t-2 border-dashed border-gray-300 my-4" />
    </div>
  );
};

export default Features;

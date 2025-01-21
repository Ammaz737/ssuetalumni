import React from "react";
export default function Feature() {
    const features = [
      { icon: "🏛️", title: "About Us" },
      { icon: "👁️", title: "Vision" },
      { icon: "🎯", title: "Mission" },
      { icon: "💡", title: "Inspiration" },
      { icon: "🎓", title: "Chancellors" },
    ];
  
    return (
      <section className="bg-purple-700 py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
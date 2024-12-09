import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SERVICES FINANCIERS ET MONETIQUES",
    image: "/services/ServiceFM.jpg",
  },
  {
    title: "SERVICES DE PROXIMITÉ",
    image: "/services/Prox.jpg",
  },
  {
    title: "SERVICE BARIDI PAY",
    image: "/services/BaridiP.jpg",
  },
];

const ServicesCorporate = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Services Coorperates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col hover:scale-105 hover:duration-150 cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCorporate;

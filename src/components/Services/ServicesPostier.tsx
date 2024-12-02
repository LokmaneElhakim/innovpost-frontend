import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Appels à candidatures",
    description:
      "Algerie Poste offre une opportunité pour les talents et les idées de se faire connaître et d’accéder à des ressources ou des collaborations enrichissantes.",
  },
  {
    title: "Bill Payment",
    description:
      "Say goodbye to long queues and late fees. Our efficient bill payment service allows you to settle your utilities, subscriptions, and other bills quickly and conveniently.",
  },
];

const ServicesPostier = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Services Postier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  {service.description}
                  {/* bullet points */}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPostier;

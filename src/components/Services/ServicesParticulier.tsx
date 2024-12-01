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
    title: "Online Banking",
    description:
      "Access your accounts, transfer funds, and manage your finances securely from anywhere, at any time. Our user-friendly platform ensures a seamless banking experience tailored to your needs.",
  },
  {
    title: "Bill Payment",
    description:
      "Say goodbye to long queues and late fees. Our efficient bill payment service allows you to settle your utilities, subscriptions, and other bills quickly and conveniently.",
  },
  {
    title: "Money Transfer",
    description:
      "Send money to friends, family, or business partners effortlessly. Our fast and reliable transfer service ensures your funds reach their destination safely and promptly.",
  },
];

const ServicesParticulier = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Services Particuliers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
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
        <div className="mt-10 text-center">
          <Link href="/services" passHref>
            <Button size="lg">
              {" "}
              See All <span className="ml-0.5">&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesParticulier;

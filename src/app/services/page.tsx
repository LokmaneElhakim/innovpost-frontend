import ServicesCoorperate from "@/components/Services/ServicesCoorperate";
import ServicesParticulier from "@/components/Services/ServicesParticulier";
import ServicesPostier from "@/components/Services/ServicesPostier";
import React from "react";

const Services = () => {
  return (
    <>
      <ServicesParticulier />
      <ServicesCoorperate />
      <ServicesPostier />
    </>
  );
};

export default Services;

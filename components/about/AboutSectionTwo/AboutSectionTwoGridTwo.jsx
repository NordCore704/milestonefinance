import { tablePeople, } from "@/exports/image-exports";
import Image from "next/image";
import React from "react";

const AboutSectionTwoGridTwo = () => {
  return (
    <div className=' flex flex-col gap-4 bg-scheme-purpleThree px-3 pt-3 sm:w-1/2 justify-between'>
    <div className="flex flex-col gap-3"> 
  <h3 className="text-2xl font-bold text-center">
    Our Vision
  </h3>
  <p className="text-center">
  Our vision is to be a trusted leader in the investment industry, recognized for our expertise, integrity, and unwavering commitment to client success. We envision a future where our clients can rely on us as their primary partner in wealth creation, benefiting from our innovative strategies and comprehensive investment solutions. By staying ahead of market trends and leveraging the latest financial technologies, we aim to set new standards of excellence in the industry. We aspire to create lasting value for our clients, employees, and the communities we serve, contributing to a more prosperous and sustainable world.
  </p>
    </div>
    <Image src={tablePeople} alt='person' className='self-center' />
  </div>
  );
};

export default AboutSectionTwoGridTwo;

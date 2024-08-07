import Link from "next/link";
import React from "react";

const ContactText = () => {
  return (
    <div className="flex flex-col gap-16">
      <h3 className="sm:text-5xl md:text-6xl lg:text-8xl text-2xl uppercase font-bold text-black">
        Contact
      </h3>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm">
            Call us
          </h4>
          <p className="underline">+27 88 30 94 17</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm">
            chat support 
          </h4>
          <Link href={'https://t.me/milestonefinance'} className="underline">t.me/milestonefinance</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm">
            visit us
          </h4>
          <div className="flex flex-col">
            <p className="">123 Design Street,</p>
            <p className="">Imaginary City, IM 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;

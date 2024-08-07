import Link from "next/link";
import React from "react";

const ContactText = () => {
  return (
    <div className="min-h-screen items-start flex flex-col gap-16 sm:w-[40%]">
      <h3 className="sm:text-5xl md:text-6xl lg:text-8xl text-2xl uppercase font-bold text-black">
        Contact
      </h3>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm sm:text-base">
          whatsapp contact
          </h4>
          <Link href={'https://wa.me/milestonefinance/447586551360'} className="underline">+447586551360</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm sm:text-base">
            chat support 
          </h4>
          <Link href={'https://t.me/milestonefinance'} className="underline">milestonefinance</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm sm:text-base">
            Talk to us
          </h4>
          <div className="flex flex-col">
            {/* <p className=""></p> */}
            <p className="">For any questions or support, please use the channels provided above. We're here to help!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;

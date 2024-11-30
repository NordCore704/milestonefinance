'use client'
import { elizabeth, houseOne, houseThree, houseTwo, peterson, thompson } from "@/exports/image-exports";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import {
  RiCloseCircleFill,
  RiStackFill,
  RiStarFill,
  RiUserLocationFill,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";

const TestimonialsMain = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-28 mt-28">
      <div className="flex flex-col sm:flex-row sm:gap-5 gap-32 justify-around items-center">
        <div className="self-center flex flex-col gap-2 sm:hidden">
          <h2 className="font-bold text-xl text-center sm:text-2xl ">
          {t('testimonials')}
          </h2>
          <p className="text-center">{t('whatPeopleSay')}</p>
        </div>
        <article className="">
          <h1 className="sr-only">Glassy Profile</h1>
          <input
            type="checkbox"
            id="data"
            className="sr-only peer/data"
            role="switch"
            aria-label="Data Toggle"
          />
          <input
            type="checkbox"
            id="content"
            className="sr-only peer/content"
            role="switch"
            aria-label="Content Toggle"
          />
          <div
            className="z-10 rounded-xl overflow-hiddenS group relative
        before:absolute
        before:w-32
        before:aspect-square
        before:rounded-full
        before:bg-blue-600
        before:blur-lg 
        before:right-3
        before:top-0
        before:-z-10

        after:absolute
        after:w-32
        after:aspect-square
        after:rounded-full
        after:bg-teal-300
        after:blur-lg 
        after:left-4
        after:bottom-0
        after:-z-10

        peer-checked/data:first:[&_#toggle-data>span]:scale-0
        peer-checked/data:last:[&_#toggle-data>span]:scale-100

        peer-checked/data:[&_#panel-data]:-translate-y-14
        peer-checked/data:[&_#panel-social]:translate-y-12

        peer-checked/content:[&_#panel-content]:opacity-100
        peer-checked/content:[&_#panel-content]:pointer-events-auto
       "
          >
            <div className="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-8 text-center shadow-md">
              <Image
                src={peterson}
                className="rounded-full mx-auto w-20 h-20 border-4 border-white/70  opacity-70 group-hover:opacity-100 object-cover transition" alt="headshot"
              />

              <h3 className="font-bold mt-6">{t('names.john')}</h3>
              <p className="flex items-center justify-center gap-1 text-sm">
                <span className="material-symbols-outlined text-lg">
                  <RiUserLocationFill />
                </span>
                {t('locations.atlanta')}
              </p>

              <label
                htmlFor="content"
                className="block mt-4 cursor-pointer  text-xs rounded-full p-2 px-3 bg-scheme-purple text-white transition hover:shadow-xl hover:scale-110"
              >
               {t('viewTestimonial')}
              </label>
            </div>

            <label
              id="toggle-data"
              htmlFor="data"
              className="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition 
            *:[grid-area:stack]
            *:transition-all
            *:duration-300
            *:text-sm
            last:*:scale-0
        "
            >
              <span className="material-symbols-outlined">
                <FaPlus />
              </span>
              <span className="material-symbols-outlined">
                <RiCloseCircleFill />
              </span>
            </label>

            <div
              id="panel-data"
              className="absolute -top-4 left-8 right-8 w-8/10 h-40  -z-20 bg-scheme-purple rounded-t-md text-white p-6 pt-4 transition duration-300 text-center flex justify-center"
            >
              <p>{t('names.john')}</p>
            </div>

            <div
              id="panel-social"
              className="absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-scheme-purple text-white rounded-b-md flex items-center justify-center gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition"
            >
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            <div className="absolute bg-white inset-0 -z-20 rounded-xl"></div>

            <div
              id="panel-content"
              className="absolute bg-white inset-0 opacity-0 pointer-events-none transition-all duration-500 rounded-xl p-5 space-y-4"
            >
              <h2 className="font-bold">{t('names.john')}</h2>
              <p className="text-sm">
              {t('testimonialsContent.john')}
              </p>
              <label
                htmlFor="content"
                className="cursor-pointer absolute top-0 right-4  w-6 h-6 text-base text-gray-500 grid place-items-center material-symbols-outlined hover:scale-150  transition"
              >
                <RiCloseCircleFill />
              </label>
            </div>
          </div>
        </article>

        <div className="self-center flex-col gap-2 hidden sm:flex">
          <h2 className="font-bold text-xl text-center sm:text-2xl ">
          {t('testimonials')}
          </h2>
          <p className="text-center">{t('whatPeopleSay')}</p>
        </div>

        <article className="relative">
          <h1 className="sr-only">Glassy Profile</h1>

          {/* Toggle checkbox for data */}
          <input
            type="checkbox"
            id="data3"
            className="sr-only peer/data3"
            role="switch"
            aria-label="Data Toggle"
          />

          {/* Toggle checkbox for content */}
          <input
            type="checkbox"
            id="content3"
            className="sr-only peer/content3"
            role="switch"
            aria-label="Content Toggle"
          />

          <div
            className="z-10 rounded-xl overflow-hiddenS group relative
    before:absolute
    before:w-32
    before:aspect-square
    before:rounded-full
    before:bg-blue-600
    before:blur-lg 
    before:right-3
    before:top-0
    before:-z-10

    after:absolute
    after:w-32
    after:aspect-square
    after:rounded-full
    after:bg-teal-300
    after:blur-lg 
    after:left-4
    after:bottom-0
    after:-z-10

    peer-checked/data3:first:[&_#toggle-data3>span]:scale-0
    peer-checked/data3:last:[&_#toggle-data3>span]:scale-100

    peer-checked/data3:[&_#panel-data3]:-translate-y-14
    peer-checked/data3:[&_#panel-social3]:translate-y-12

    peer-checked/content3:[&_#panel-content3]:opacity-100
    peer-checked/content3:[&_#panel-content3]:pointer-events-auto
  "
          >
            <div className="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-8 text-center shadow-md">
              
              <Image
                src={elizabeth}
                alt="Profile"
                className="rounded-full mx-auto w-20 h-20 border-4 border-white/70  opacity-70 group-hover:opacity-100 object-cover transition"
              />

              <h3 className="font-bold mt-6">{t('names.elizabeth')}</h3>
              <p className="flex items-center justify-center gap-1 text-sm">
                <span className="material-symbols-outlined text-lg">
                  <RiUserLocationFill />
                </span>
                {t('locations.losAngeles')}
              </p>

              {/* Label to view content */}
              <label
                htmlFor="content3"
                className="block mt-4 cursor-pointer  text-xs rounded-full p-2 px-3 bg-scheme-purple text-white transition hover:shadow-xl hover:scale-110"
              >
                {t('viewTestimonial')}
              </label>
            </div>

            {/* Toggle data panel */}
            <label
              id="toggle-data3"
              htmlFor="data3"
              className="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition 
        *:[grid-area:stack]
        *:transition-all
        *:duration-300
        *:text-sm
        last:*:scale-0
      "
            >
              <span className="material-symbols-outlined">
                <FaPlus />
              </span>
              <span className="material-symbols-outlined">
                <RiCloseCircleFill />
              </span>
            </label>

            {/* Data panel */}
            <div
              id="panel-data3"
              className="absolute -top-4 left-8 right-8 w-8/10 h-40  -z-20 bg-scheme-purple rounded-t-md text-white p-6 pt-4 transition duration-300 text-center flex justify-center"
            >
              <p> {t('names.elizabeth')}</p>
            </div>

            {/* Social panel */}
            <div
              id="panel-social3"
              className="absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-scheme-purple text-white rounded-b-md flex items-center justify-center gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition"
            >
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            {/* Background overlay */}
            <div className="absolute bg-white inset-0 -z-20 rounded-xl"></div>

            {/* Content panel */}
            <div
              id="panel-content3"
              className="absolute bg-white inset-0 opacity-0 pointer-events-none transition-all duration-500 rounded-xl p-5 space-y-4"
            >
              <h2 className="font-bold"> {t('names.elizabeth')}</h2>
              <p className="text-sm">
              {t('testimonialsContent.elizabeth')}
              </p>
              <label
                htmlFor="content3"
                className="cursor-pointer absolute top-0 right-4  w-6 h-6 text-base text-gray-500 grid place-items-center material-symbols-outlined hover:scale-150  transition"
              >
                <RiCloseCircleFill />
              </label>
            </div>
          </div>
        </article>
      </div>

      <div className="flex items-center justify-center">
        <article className="relative">
          {/* Toggle checkbox for data */}
          <input
            type="checkbox"
            id="data2"
            className="sr-only peer/data2"
            role="switch"
            aria-label="Data Toggle"
          />

          {/* Toggle checkbox for content */}
          <input
            type="checkbox"
            id="content2"
            className="sr-only peer/content2"
            role="switch"
            aria-label="Content Toggle"
          />

          <div
            className="z-10 rounded-xl overflow-hiddenS group relative
    before:absolute
    before:w-32
    before:aspect-square
    before:rounded-full
    before:bg-blue-600
    before:blur-lg 
    before:right-3
    before:top-0
    before:-z-10

    after:absolute
    after:w-32
    after:aspect-square
    after:rounded-full
    after:bg-teal-300
    after:blur-lg 
    after:left-4
    after:bottom-0
    after:-z-10

    peer-checked/data2:first:[&_#toggle-data2>span]:scale-0
    peer-checked/data2:last:[&_#toggle-data2>span]:scale-100

    peer-checked/data2:[&_#panel-data2]:-translate-y-14
    peer-checked/data2:[&_#panel-social2]:translate-y-12

    peer-checked/content2:[&_#panel-content2]:opacity-100
    peer-checked/content2:[&_#panel-content2]:pointer-events-auto
  "
          >
            <div className="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-8 text-center shadow-md">
              {/* Replace with your image component */}
              <Image
                src={thompson}
                alt="Profile"
                className="rounded-full mx-auto w-20 h-20 border-4 border-white/70  opacity-70 group-hover:opacity-100 object-cover transition"
              />

              <h3 className="font-bold mt-6"> {t('names.david')}</h3>
              <p className="flex items-center justify-center gap-1 text-sm">
                <span className="material-symbols-outlined text-lg">
                  <RiUserLocationFill />
                </span>
                {t('locations.newYork')}
              </p>

              {/* Label to view content */}
              <label
                htmlFor="content2"
                className="block mt-4 cursor-pointer  text-xs rounded-full p-2 px-3 bg-scheme-purple text-white transition hover:shadow-xl hover:scale-110"
              >
                 {t('viewTestimonial')}
              </label>
            </div>

            {/* Toggle data panel */}
            <label
              id="toggle-data2"
              htmlFor="data2"
              className="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition 
        *:[grid-area:stack]
        *:transition-all
        *:duration-300
        *:text-sm
        last:*:scale-0
      "
            >
              <span className="material-symbols-outlined">
                <FaPlus />
              </span>
              <span className="material-symbols-outlined">
                <RiCloseCircleFill />
              </span>
            </label>

            {/* Data panel */}
            <div
              id="panel-data2"
              className="absolute -top-4 left-8 right-8 w-8/10 h-40  -z-20 bg-scheme-purple rounded-t-md text-white p-6 pt-4 transition duration-300 text-center flex justify-center"
            >
              <p> {t('names.david')}</p>
            </div>

            {/* Social panel */}
            <div
              id="panel-social2"
              className="absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-scheme-purple text-white rounded-b-md flex items-center justify-center gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition"
            >
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            {/* Background overlay */}
            <div className="absolute bg-white inset-0 -z-20 rounded-xl"></div>

            {/* Content panel */}
            <div
              id="panel-content2"
              className="absolute bg-white inset-0 opacity-0 pointer-events-none transition-all duration-500 rounded-xl p-5 space-y-4"
            >
              <h2 className="font-bold"> {t('names.david')}</h2>
              <p className="text-sm">
              {t('testimonialsContent.david')}
              </p>
              <label
                htmlFor="content2"
                className="cursor-pointer absolute top-0 right-4  w-6 h-6 text-base text-gray-500 grid place-items-center material-symbols-outlined hover:scale-150  transition"
              >
                <RiCloseCircleFill />
              </label>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TestimonialsMain;

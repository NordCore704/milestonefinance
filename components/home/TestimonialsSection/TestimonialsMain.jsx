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

const TestimonialsMain = () => {
  return (
    <section className="flex flex-col gap-28 mt-28">
      <div className="flex flex-col sm:flex-row sm:gap-5 gap-32 justify-around items-center">
        <div className="self-center flex flex-col gap-2 sm:hidden">
          <h2 className="font-bold text-xl text-center sm:text-2xl ">
            Testimonials
          </h2>
          <p className="text-center">What our people say</p>
        </div>
        <article className="">
          <h1 class="sr-only">Glassy Profile</h1>
          <input
            type="checkbox"
            id="data"
            class="sr-only peer/data"
            role="switch"
            aria-label="Data Toggle"
          />
          <input
            type="checkbox"
            id="content"
            class="sr-only peer/content"
            role="switch"
            aria-label="Content Toggle"
          />
          <div
            class="z-10 rounded-xl overflow-hiddenS group relative
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
            <div class="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-8 text-center shadow-md">
              <Image
                src={peterson}
                class="rounded-full mx-auto w-20 h-20 border-4 border-white/70  opacity-70 group-hover:opacity-100 object-cover transition" alt="headshot"
              />

              <h3 class="font-bold mt-6">John Peterson</h3>
              <p class="flex items-center justify-center gap-1 text-sm">
                <span class="material-symbols-outlined text-lg">
                  <RiUserLocationFill />
                </span>
                Atlanta, GA
              </p>

              <label
                for="content"
                class="block mt-4 cursor-pointer  text-xs rounded-full p-2 px-3 bg-scheme-purple text-white transition hover:shadow-xl hover:scale-110"
              >
                View Testimonial
              </label>
            </div>

            <label
              id="toggle-data"
              for="data"
              class="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition 
            *:[grid-area:stack]
            *:transition-all
            *:duration-300
            *:text-sm
            last:*:scale-0
        "
            >
              <span class="material-symbols-outlined">
                <FaPlus />
              </span>
              <span class="material-symbols-outlined">
                <RiCloseCircleFill />
              </span>
            </label>

            <div
              id="panel-data"
              class="absolute -top-4 left-8 right-8 w-8/10 h-40  -z-20 bg-scheme-purple rounded-t-md text-white p-6 pt-4 transition duration-300 text-center flex justify-center"
            >
              <p>John Peterson</p>
            </div>

            <div
              id="panel-social"
              class="absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-scheme-purple text-white rounded-b-md flex items-center justify-center gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition"
            >
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            <div class="absolute bg-white inset-0 -z-20 rounded-xl"></div>

            <div
              id="panel-content"
              class="absolute bg-white inset-0 opacity-0 pointer-events-none transition-all duration-500 rounded-xl p-5 space-y-4"
            >
              <h2 class="font-bold">John Peterson</h2>
              <p class="text-sm">
                Choosing Milestone Financial Management was a game-changer for
                me. Their expertise across crypto, stocks, and real estate
                helped me navigate the markets with confidence. Thanks to their
                strategic advice, my investments have flourished.
              </p>
              <label
                for="content"
                class="cursor-pointer absolute top-0 right-4  w-6 h-6 text-base text-gray-500 grid place-items-center material-symbols-outlined hover:scale-150  transition"
              >
                <RiCloseCircleFill />
              </label>
            </div>
          </div>
        </article>

        <div className="self-center flex-col gap-2 hidden sm:flex">
          <h2 className="font-bold text-xl text-center sm:text-2xl ">
            Testimonials
          </h2>
          <p className="text-center">What our people say</p>
        </div>

        <article className="relative">
          <h1 class="sr-only">Glassy Profile</h1>

          {/* Toggle checkbox for data */}
          <input
            type="checkbox"
            id="data3"
            class="sr-only peer/data3"
            role="switch"
            aria-label="Data Toggle"
          />

          {/* Toggle checkbox for content */}
          <input
            type="checkbox"
            id="content3"
            class="sr-only peer/content3"
            role="switch"
            aria-label="Content Toggle"
          />

          <div
            class="z-10 rounded-xl overflow-hiddenS group relative
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
            <div class="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-8 text-center shadow-md">
              
              <Image
                src={elizabeth}
                alt="Profile"
                class="rounded-full mx-auto w-20 h-20 border-4 border-white/70  opacity-70 group-hover:opacity-100 object-cover transition"
              />

              <h3 class="font-bold mt-6">Elizabeth Nguyen</h3>
              <p class="flex items-center justify-center gap-1 text-sm">
                <span class="material-symbols-outlined text-lg">
                  <RiUserLocationFill />
                </span>
                Los Angeles, CA
              </p>

              {/* Label to view content */}
              <label
                for="content3"
                class="block mt-4 cursor-pointer  text-xs rounded-full p-2 px-3 bg-scheme-purple text-white transition hover:shadow-xl hover:scale-110"
              >
                View Testimonial
              </label>
            </div>

            {/* Toggle data panel */}
            <label
              id="toggle-data3"
              for="data3"
              class="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition 
        *:[grid-area:stack]
        *:transition-all
        *:duration-300
        *:text-sm
        last:*:scale-0
      "
            >
              <span class="material-symbols-outlined">
                <FaPlus />
              </span>
              <span class="material-symbols-outlined">
                <RiCloseCircleFill />
              </span>
            </label>

            {/* Data panel */}
            <div
              id="panel-data3"
              class="absolute -top-4 left-8 right-8 w-8/10 h-40  -z-20 bg-scheme-purple rounded-t-md text-white p-6 pt-4 transition duration-300 text-center flex justify-center"
            >
              <p>Elizabeth Nguyen</p>
            </div>

            {/* Social panel */}
            <div
              id="panel-social3"
              class="absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-scheme-purple text-white rounded-b-md flex items-center justify-center gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition"
            >
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            {/* Background overlay */}
            <div class="absolute bg-white inset-0 -z-20 rounded-xl"></div>

            {/* Content panel */}
            <div
              id="panel-content3"
              class="absolute bg-white inset-0 opacity-0 pointer-events-none transition-all duration-500 rounded-xl p-5 space-y-4"
            >
              <h2 class="font-bold">Elizabeth Nguyen</h2>
              <p class="text-sm">
                Choosing Milestone Financial Management was a game-changer.
                Their strategic advice across various sectors like crypto and
                stocks has consistently delivered excellent results. Trustworthy
                and knowledgeable, they've exceeded my expectations.
              </p>
              <label
                for="content3"
                class="cursor-pointer absolute top-0 right-4  w-6 h-6 text-base text-gray-500 grid place-items-center material-symbols-outlined hover:scale-150  transition"
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
            class="sr-only peer/data2"
            role="switch"
            aria-label="Data Toggle"
          />

          {/* Toggle checkbox for content */}
          <input
            type="checkbox"
            id="content2"
            class="sr-only peer/content2"
            role="switch"
            aria-label="Content Toggle"
          />

          <div
            class="z-10 rounded-xl overflow-hiddenS group relative
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
            <div class="relative bg-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-8 text-center shadow-md">
              {/* Replace with your image component */}
              <Image
                src={thompson}
                alt="Profile"
                class="rounded-full mx-auto w-20 h-20 border-4 border-white/70  opacity-70 group-hover:opacity-100 object-cover transition"
              />

              <h3 class="font-bold mt-6">David Thompson</h3>
              <p class="flex items-center justify-center gap-1 text-sm">
                <span class="material-symbols-outlined text-lg">
                  <RiUserLocationFill />
                </span>
                New York, NY
              </p>

              {/* Label to view content */}
              <label
                for="content2"
                class="block mt-4 cursor-pointer  text-xs rounded-full p-2 px-3 bg-scheme-purple text-white transition hover:shadow-xl hover:scale-110"
              >
                View Testimonial
              </label>
            </div>

            {/* Toggle data panel */}
            <label
              id="toggle-data2"
              for="data2"
              class="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition 
        *:[grid-area:stack]
        *:transition-all
        *:duration-300
        *:text-sm
        last:*:scale-0
      "
            >
              <span class="material-symbols-outlined">
                <FaPlus />
              </span>
              <span class="material-symbols-outlined">
                <RiCloseCircleFill />
              </span>
            </label>

            {/* Data panel */}
            <div
              id="panel-data2"
              class="absolute -top-4 left-8 right-8 w-8/10 h-40  -z-20 bg-scheme-purple rounded-t-md text-white p-6 pt-4 transition duration-300 text-center flex justify-center"
            >
              <p>David Thompson</p>
            </div>

            {/* Social panel */}
            <div
              id="panel-social2"
              class="absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-scheme-purple text-white rounded-b-md flex items-center justify-center gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition"
            >
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>

            {/* Background overlay */}
            <div class="absolute bg-white inset-0 -z-20 rounded-xl"></div>

            {/* Content panel */}
            <div
              id="panel-content2"
              class="absolute bg-white inset-0 opacity-0 pointer-events-none transition-all duration-500 rounded-xl p-5 space-y-4"
            >
              <h2 class="font-bold">David Thompson</h2>
              <p class="text-sm">
                Milestone Financial Management has transformed my investments.
                Their focus on responsible strategies in real estate and
                agriculture aligns perfectly with my values. I confidently
                endorse them for anyone looking to build a secure financial
                future.
              </p>
              <label
                for="content2"
                class="cursor-pointer absolute top-0 right-4  w-6 h-6 text-base text-gray-500 grid place-items-center material-symbols-outlined hover:scale-150  transition"
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

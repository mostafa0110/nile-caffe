import React from "react";

const AboutUs = () => {
  return (
    <div className="h-full w-full bg-zinc-900 flex flex-col">
      <div className="text-center mb-8 pt-40">
        <p className="text-2xl text-green-500 mb-4">About Us</p>
        <div className="h-0.5 w-10 bg-green-500 mx-auto"></div>
      </div>
      <div className="md:pt-20 flex flex-col md:flex-row justify-center gap-11">
        <div className="text-white md:p-8 p-6">
          <h2 className="font-extrabold text-2xl">About Nile Café</h2>
          <br />
          <p className="text-base md:text-2xl md:w-[31.25rem]">
            Welcome to Nile Café, your all-in-one management solution designed
            specifically for restaurants and cafés. We understand the fast-paced
            nature of the food and beverage industry and have crafted a system
            that simplifies operations, optimizes workflow, and enhances
            customer experiences. Whether you&apos;re managing a cozy coffee
            shop or a bustling restaurant, Nile Café streamlines everything from
            table reservations, order processing, and inventory management to
            staff scheduling and financial reporting. Our user-friendly
            interface and powerful features ensure that your business runs
            smoothly, allowing you to focus on what matters
            most&mdash;delivering exceptional service to your customers. At Nile
            Café, we are not just a software provider; we are passionate about
            helping food businesses thrive. With real-time insights, automation
            tools, and top-notch support, we empower you to operate efficiently
            and grow with confidence. Join us, and let Nile Café take your
            restaurant or café to the next level!
          </p>
        </div>
        <div className="text-white md:p-8 p-6 flex justify-center">
          <img
            src="/assets/images/AboutUs.jpg"
            alt="About Us"
            className="w-full max-w-[31.25rem] h-auto rounded-2xl" // Adjusted for responsiveness
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

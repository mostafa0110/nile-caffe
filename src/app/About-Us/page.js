import React from "react";

const AboutUs = () => {
  return (
    <div className="h-full w-full  bg-zinc-900 flex flex-col">
      <h1 className="text-center pt-40 font-extrabold text-6xl text-white">
        About-Us
      </h1>
      <div className="md:pt-20 flex md:flex-row flex-col justify-evenly">
        <div className="text-white md:p-8 p-6 ">
          <h2 className=" font-extrabold text-2xl">About Nile Café</h2>
          <br />
          <p className="w-[31.25rem]">
            Welcome to Nile Café, your all-in-one management solution designed
            specifically for restaurants and cafés. We understand the fast-paced
            nature of the food and beverage industry and have crafted a system
            that simplifies operations, optimizes workflow, and enhances
            customer experiences. Whether you're managing a cozy coffee shop or
            a bustling restaurant, Nile Café streamlines everything from table
            reservations, order processing, and inventory management to staff
            scheduling and financial reporting. Our user-friendly interface and
            powerful features ensure that your business runs smoothly, allowing
            you to focus on what matters most—delivering exceptional service to
            your customers. At Nile Café, we are not just a software provider;
            we are passionate about helping food businesses thrive. With
            real-time insights, automation tools, and top-notch support, we
            empower you to operate efficiently and grow with confidence. Join
            us, and let Nile Café take your restaurant or café to the next
            level!
          </p>
        </div>
        <div className="text-white md:p-8 p-6 ">
          <img
            src="/assets/images/AboutUs.jpg "
            className="w-[31.25rem] h-[31.25rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

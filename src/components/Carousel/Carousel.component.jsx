import React from "react";
import { Carousel } from "flowbite-react";
import "./Carousel.css"; // Ensure your custom CSS is being loaded if necessary

const Carouselcomponent = () => {
  return (
    <div className="h-64 sm:h-96 xl:h-[500px] 2xl:h-[600px] bg-zinc-900">
      <Carousel>
        {/* First image with text overlay */}
        <div className="relative h-full w-full">
          <img
            src="/assets/images/Carousel_image_1.png"
            className="object-cover w-full h-full"
            alt="First dish"
          />
          {/* Positioned H2 and P on top of the first image */}
          <div className="absolute top-10 md:top-20 right-6 md:right-10 flex flex-col z-10">
            <h2 className="text-[#34C759] font-extrabold text-2xl sm:text-3xl md:w-[32.75rem]">
              Check out our latest dishes
            </h2>
            <p className="text-white text-base sm:text-xl mt-2 md:w-[32.75rem]">
              Quasi sit dolorum quas autem fuga eum sit enim inventore. Qui esse
              saepe qui cumque laboriosam. Laudantium iure sunt.
            </p>
            <button className="btn btn-outline btn-success w-40 h-8 mt-5">
              Order Now
            </button>
          </div>
        </div>

        {/* Other images */}
        <div>
          <img
            src="/assets/images/burger.jpg"
            className="object-cover w-full h-full"
            alt="Second dish"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div>
          <img
            src="/assets/images/juice.jpg"
            className="object-cover w-full h-full"
            alt="Third dish"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div>
          <img
            src="/assets/images/beans.jpg"
            className="object-cover w-full h-full"
            alt="Fourth dish"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div>
          <img
            src="/assets/images/cheese_cake.jpg"
            className="object-cover w-full h-full"
            alt="Fifth dish"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselcomponent;

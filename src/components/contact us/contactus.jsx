import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-zinc-900 text-white p-28 md:p-10 flex flex-col   items-center">
        <div className="text-center mb-8">
          <p className="text-lg mb-4">Contact Us</p>
          <div className="h-0.5 w-10 bg-green-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl">
          <div className="space-y-4 mb-8 md:mb-0 md:w-1/3">
            <div className="space-y-4">
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 text-green-500 mr-2"
                />
                <a href="mailto:elvlfy9@Gmail.com" className="text-green-500">
                  ourEmail@NileCafe.com
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="w-6 h-6 text-green-500 mr-2"
                />
                <a href="https://t.me/mymeal" className="text-green-500">
                  @NileCafe
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-6 h-6 text-green-500 mr-2"
                />
                <a href="tel:+79581332415" className="text-green-500">
                  01235464644
                </a>
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-green-500 p-2 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-transparent border border-green-500 p-2 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                placeholder="Message"
                className="bg-transparent border border-green-500 p-2 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-transparent border border-green-500 p-2 rounded-md text-white hover:bg-green-500 transition duration-300 w-32"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

"use client";
import { ChangeEvent, FormEvent, useState } from "react";
const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxGmI8ZssYAdA47VytcBuSHS6A-S4djKNMhJT8MIfMqDuaPjBpGM2T_egQXtUxvwrjm/exec";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      if (response.ok) {
        setResponseMessage("Your message has been sent Successfully !");
      } else {
        setResponseMessage("Error! Something went wrong.");
      }
    } catch (error) {
      console.error("Error!", error);
      setResponseMessage("Error! Something went wrong.");
    }
  };
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <form onSubmit={handleSubmit} name="submit-to-google-sheet">
        <h1 className=" lg:mt-10 lg:mb-20 mb-10 text-2xl text-center font-serif font-extrabold md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-200">
            Get in Touch
          </span>
        </h1>
        <div className="lg:mx-10 ">
          <div className="lg:absolute lg:ml-auto lg:right-40 ">
            <p className="lg:text-3xl md:text-4xl text-2xl">
              Contact Information
            </p>
            <address className="lg:mt-16 lg:mb-12 lg:text-2xl md:text-2xl md:mt-8 text-xl mt-5 md:mb-8 mb-5">
              NIT Rourkela,769010 <br /> Odisha
            </address>
            <a href="https://maps.app.goo.gl/DWfDfXmwexWiTp9R7" target="_blank">
              <img
                className="lg:size-80 lg:mb-0 md:mb-8 mb-5 "
                src="NIT.png"
                alt="NIT"
              />
            </a>
          </div>
          <div className="lg:px-16">
            <p className="lg:text-3xl lg:text-start md:text-4xl text-2xl text-center ">
              Just Say Hello !
            </p>
            <p className="text-xl mt-4 lg:text-start text-center">
              Let&apos;s know more about you !
            </p>
            <div className="flex flex-col my-16 lg:mx-0 lg:justify-normal lg:items-baseline justify-center items-center ">
              <div className="lg:flex lg:flex-row lg:space-x-11 lg:space-y-0 space-y-11 md:flex md:flex-row md:space-x-11 md:space-y-0">
                <ul className="lg:flex lg:flex-row lg:space-x-11 lg:space-y-0 space-y-11 md:flex md:flex-row md:space-x-11 md:space-y-0 ">
                  <li>
                    <input
                      className="py-4 px-6 rounded-2xl bg-black-300 "
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      className="py-4 px-6 rounded-2xl bg-black-300 "
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </li>
                </ul>
              </div>

              <div className="lg:mt-6 lg:flex lg:flex-row lg:space-x-11 lg:space-y-0 space-y-11 mt-11 md:flex md:flex-row md:space-x-11 md:space-y-0 ">
                <ul className="lg:flex lg:flex-row lg:space-x-11 lg:space-y-0 space-y-11 md:flex md:flex-row md:space-x-11 md:space-y-0">
                  <li>
                    <input
                      className="py-4 px-6 rounded-2xl bg-black-300"
                      type="email"
                      name="email"
                      placeholder="eg:abc@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      className="py-4 px-6 rounded-2xl bg-black-300 "
                      type="number"
                      name="number"
                      placeholder="Phone"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </li>
                </ul>
              </div>
              <div className="lg:mt-6 mt-11">
                <textarea
                  className="px-6 lg:pr-96 md:pr-96 pr-12 py-4 pb-40 rounded-2xl bg-black-300"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  className="py-4 px-8 text-xl rounded-2xl bg-black-300 hover:text-purple hover:underline font-serif"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <ul className="grid grid-cols-3 gap-10 lg:px-16 md:px-16 px-8 py-3 border-2 border-purple rounded-xl bg-black-300">
            <li>
              <a href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bo2V0x4UbS3Or4Wi3POe5hA%3D%3D" target="_blank">
                <img src="linkedin.png" alt="Linkedin" width={45} />
              </a>
            </li>
            <li>
              <a href="https://x.com/123NITR/" target="_blank">
                <img src="x.png" alt="X" width={45} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sanchita_priyadarshinee/#" target="_blank" >
                <img src="instagram.png" alt="Instagram" width={45} />
              </a>
            </li>
          </ul>
        </div>
        {responseMessage && (
          <p className="mt-5 text-center text-xl text-purple transition  duration-100 ease-in-out transform hover:scale-125">
            {responseMessage}
          </p>
        )}
        <div className="mt-16 md:flex-row flex-col justify-between items-center pb-10 text-center grid grid-cols-1">
          <p className="md:text-base text-sm md:font-normal font-light text-gray-500  ">
            Copyright @ 2024 Sanchita Priyadarshinee
          </p>
        </div>
      </form>
    </footer>
  );
};
export default Footer;

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
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        setResponseMessage("Error! Something went wrong.");
      }
    } catch (error) {
      console.error("Error!", error);
      setResponseMessage("Error! Something went wrong.");
    }
  };

  return (
    <div
      id="contact"
      className=""
      style={{
        background:
          "linear-gradient(to bottom, #000 10%, #1B3A5B 75%, #2A6A8D)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-8"
        name="submit-to-google-sheet"
      >
        <h1 className="md:mb-20 mb-5 lg:text-7xl md:text-6xl text-3xl text-center font-serif font-extrabold text-cyan-200">
          Get in Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <input
            className="w-full p-4 rounded-xl bg-gray-800 placeholder-gray-400"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-4 rounded-xl bg-gray-800 placeholder-gray-400"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-4 rounded-xl bg-gray-800 placeholder-gray-400"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-4 rounded-xl bg-gray-800 placeholder-gray-400"
            type="number"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="w-full p-4 h-40 rounded-xl bg-gray-800 placeholder-gray-400"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="flex justify-center">
          <button
            className="px-6 py-3 text-lg font-semibold bg-[#1B3A5B] border border-cyan-800 hover:bg-cyan-600 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            type="submit"
          >
            Submit
          </button>
        </div>
        {responseMessage && (
          <p className="mt-5 text-center text-lg text-green-300 animate-pulse">
            {responseMessage}
          </p>
        )}
      </form>
      <div className="mt-5 text-center">
        <p className="text-lg font-semibold">Follow Me</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/"
            target="_blank"
          >
            <img
              src="linkedin.png"
              alt="LinkedIn"
              className="w-10 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://x.com/123NITR/" target="_blank">
            <img
              src="x.png"
              alt="Twitter"
              className="w-10 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/sanchita_priyadarshinee/"
            target="_blank"
          >
            <img
              src="instagram.png"
              alt="Instagram"
              className="w-10 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-400 text-sm pb-5">
        © 2025 Sanchita Priyadarshinee. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

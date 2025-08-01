"use client";
import React, { useState } from "react";
import axios from "axios";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://skella.riyadvisoftwaretechnologies.com/contact.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (err: unknown) {
      if (
        axios.isAxiosError(err) &&
        err.response?.data?.error &&
        Array.isArray(err.response.data.error)
      ) {
        alert("Error: " + err.response.data.error.join("\n"));
      } else {
        alert("Server error. Try again later.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="banner-image px-4 py-20 sm:px-6 lg:px-20 ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div data-aos="fade-right" data-aos-duration="2000">
            <h2 className="text-[16px]  uppercase text-[#D4AF37] font-bold mb-4">
              Get a Free Business Audit Report
            </h2>
            <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl mb-6">
              Get a Personalized Analysis of your Digital Presence + Growth
              Roadmap.
            </h1>
            <p className="text-white text-md xl:text-lg  font-[500] leading-relaxed">
              Looking for expert product development and IT solutions? We create
              smart, scalable digital solutions to help businesses grow. From
              AI-driven automation to seamless web development, we&apos;ve got
              you covered. Contact us today and letss drive your success
              forward!
            </p>
          </div>

          {/* Right Section - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-full max-w-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                required
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />

              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600"
              >
                <option value="">Select a Service</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-white font-semibold hover:from-yellow-500 hover:to-yellow-600"
            >
              {loading ? "Sending..." : "Get My Free Business Audit Report"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

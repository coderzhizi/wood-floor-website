"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

// Data Constants
const REASONS_CONTENT_MAP = [
  {
    imgPath: "/reason_1.svg",
    title: "Why Choose WoodFloor Pro",
    subTitle:
      "All our products are FSC certified, ensuring sustainable forest management practices",
    altInfo: "FSC认证",
  },
  {
    imgPath: "/reason_2.svg",
    title: "100% Natural Wood",
    subTitle:
      "All our products are FSC certified, ensuring sustainable forest management practices",
    altInfo: "FSC认证",
  },
  {
    imgPath: "/reason_3.svg",
    title: "Why Choose WoodFloor Pro",
    subTitle:
      "All our products are FSC certified, ensuring sustainable forest management practices",
    altInfo: "FSC认证",
  },
];

const WOOD_EXMAPLE_MAP = [
  {
    imgPath: "/wood_exmaple_1.webp",
    title: "Classic Oak Collection",
    price: "$58.99/sqm",
    linkText: "Learn More →",
  },
  {
    imgPath: "/wood_exmaple_1.webp",
    title: "Classic Oak Collection",
    price: "$58.99/sqm",
    linkText: "Learn More →",
  },
  {
    imgPath: "/wood_exmaple_1.webp",
    title: "Classic Oak Collection",
    price: "$58.99/sqm",
    linkText: "Learn More →",
  },
  {
    imgPath: "/wood_exmaple_1.webp",
    title: "Classic Oak Collection",
    price: "$58.99/sqm",
    linkText: "Learn More →",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/header_img_1.png",
    "/header_img_1.webp",
    "/header_img_1.webp",
    "/header_img_1.webp",
  ];

  const nextImage = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-white shadow-lg">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/nav_logo.webp"
              alt="Wood Flooring Logo"
              width={170}
              height={32}
              priority
            />
          </div>
          <nav className="flex space-x-6 text-gray-700">
            {["Home", "Products", "About", "Cases", "News", "Contact Us"].map(
              (text) => (
                <motion.a
                  key={text}
                  href={`#${text.toLowerCase().replace(" ", "")}`}
                  className="hover:text-[#92400E] transition-all"
                  whileHover={{ scale: 1.1, color: "#92400E" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {text}
                </motion.a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto ">
        {/* Banner */}
        <section className="relative mb-20">
          <div className="w-full h-[700px] overflow-hidden relative group">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[currentIndex]}
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-all duration-500"
              />
            </motion.div>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/60 p-3 rounded-full transition-all"
            >
              <span className="text-3xl">&lt;</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/60 p-3 rounded-full transition-all"
            >
              <span className="text-3xl">&gt;</span>
            </button>
          </div>
        </section>

        {/* Reasons to Choose WoodFloor Pro */}
        <section className="text-center  h-[532px] bg-[#F9FAFB]">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-gray-900 mb-16"
          >
            Why Choose WoodFloor Pro
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {REASONS_CONTENT_MAP.map((item) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center p-6 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }, // 缩短动画的时间，使得体验更加平滑
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }, // 短暂的点击动画
                }}
              >
                <Image
                  src={item.imgPath}
                  alt={item.altInfo}
                  width={160}
                  height={160}
                  className="mb-6"
                />
                <p className="text-xl font-semibold text-gray-800 mb-1.5">
                  {item.title}
                </p>
                <p className="text-[#4B5563]">{item.subTitle}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section className="h-[688px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-[30px] text-[#111827] font-bold mb-16"
          >
            Featured Collections
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WOOD_EXMAPLE_MAP.map((item) => (
              <motion.div
                key={item.title}
                className="flex flex-col p-6 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", // 替换掉 heavy shadow 动画，避免重排
                  transition: { duration: 0.3 }, // 设置动画的持续时间，避免过于急促
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }, // 点击时动画快速回缩
                }}
              >
                <Image
                  src={item.imgPath}
                  alt="Wood Floor Example"
                  width={288}
                  height={320}
                  className="mb-6 rounded-md overflow-hidden"
                />
                <p className="text-xl font-semibold text-gray-800 mb-1.5">
                  {item.title}
                </p>
                <p className="text-[#4B5563] text-base font-normal leading-6">
                  {item.price}
                </p>
                <p className="text-[14px] font-normal leading-6 text-[#92400E]">
                  {item.linkText}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="bg-gray-50 px-12 py-12 mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gray-900 text-center mb-8"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Hear from our happy clients and see why they trust WoodFloor Pro for
            their flooring needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Sarah L.", "Mark T.", "Linda W."].map((name) => (
              <motion.div
                key={name}
                className="bg-white p-8 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // 轻量化阴影
                  transition: { duration: 0.3 }, // 平滑过渡动画
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }, // 快速回缩动画
                }}
              >
                <p className="text-gray-600 italic mb-4">
                  "I couldn’t be more pleased with the flooring I purchased from
                  WoodFloor Pro. The installation was seamless, and the quality
                  of the wood is unmatched."
                </p>
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-gray-500">Homeowner</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#F5F5F5] text-gray-900 py-16 mb-16">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-[#111827] mb-8"
            >
              Get in Touch
            </motion.h2>
            <p className="text-xl text-[#4B5563] mb-12">
              We’d love to hear from you! Whether you have questions about our
              products or need a quote, feel free to reach out.
            </p>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#92400E]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-[#4B5563]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#92400E]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-[#4B5563]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#92400E]"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-[#4B5563]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-2 w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#92400E]"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-[#92400E] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#6B3A1F] transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-12">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <Image
                src="/nav_logo.webp"
                alt="Wood Flooring Logo"
                width={170}
                height={32}
                priority
              />
              <p className="text-[#E5E7EB] mt-4 text-sm text-center md:text-left">
                Sustainable, high-quality wood flooring solutions for your home.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 md:mb-0">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-[#92400E] transition-all"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-[#92400E] transition-all"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#92400E] transition-all"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#92400E] transition-all"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Phone:</span> (123) 456-7890
                  </li>
                  <li>
                    <span className="font-medium">Email:</span>{" "}
                    support@woodfloorpro.com
                  </li>
                  <li>
                    <span className="font-medium">Address:</span> 123 Wood St,
                    City, Country
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="text-[#E5E7EB] hover:text-[#92400E] transition-all"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-[#E5E7EB] mb-4">
                Subscribe to our newsletter to receive the latest updates on our
                products and offers.
              </p>
              <form className="flex items-center justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 text-black rounded-l-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#92400E] text-white px-6 py-2 rounded-r-lg hover:bg-[#7e350b] transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#444] mt-8 pt-6 text-center text-sm text-[#E5E7EB]">
            <p>&copy; 2023 木地板公司. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

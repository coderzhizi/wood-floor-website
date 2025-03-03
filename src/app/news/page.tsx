"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <Header />
      <main className="h-[1000px]"></main>
      <Footer />
    </div>
  );
}

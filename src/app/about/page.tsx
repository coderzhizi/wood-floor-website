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

  const tedianMap = [
    {
      path: "",
      label: "严选优质原材",
      value:
        "精选 A 级实木原料，全程质量追溯，确保每块地板都源自可持续发展的森林资源。",
    },
    {
      path: "",
      label: "严格品控",
      value: "采用德国进口检测设备，18 道工序严格把关，确保产品品质稳定可靠。",
    },
    {
      path: "",
      label: "环保工艺",
      value: "采用水性环保涂料，零甲醛添加，为您打造健康安全的居住环境。",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <Header />
      <main>
        <div className="h-[600px]">
          <img height="600px" width="100%" src="/about1.png"></img>
        </div>

        <div className="h-[500px] mt-[80px] mb-[80px] mx-[112px] bg-[#F9FAFB]">
          <div className="text-[#0a0a0a] text-center font-bold h-[36px] leading-[36px] text-[30px] mb-[64px]">
            企业简介
          </div>
          <div className="flex gap-[48px]">
            <img src="/about2.png" width="584px" height="400px" />
            <div className="my-[30px]">
              <div className="text-[#0a0a0a] text-[24px] weight-bold leading-[32px] h-[32px] mb-[24px]">
                传承二十载 品质始终如一
              </div>
              <div className="text-[#4b5563] text-[16px] font-normal leading-[26px] h-[76px] mb-[24px]">
                森泰木业成立于 2003
                年，是一家专注于高端木地板研发、生产与销售的现代化企
                业。二十年来，我们始终坚持"质量第一、顾客至上"的经营理念，以精湛的工艺和
                创新的设计，为全球客户提供优质的木地板产品。
              </div>
              <div className="text-[#4b5563] text-[16px] font-normal leading-[26px] h-[76px] mb-[32px]">
                公司拥有现代化生产基地 50000
                平方米，引进德国先进生产设备，年产能达 200 万
                平方米。我们的产品远销欧美、澳洲等 30
                多个国家和地区，深受国内外客户的信 赖与好评。
              </div>
              <div className="flex gap-[32px]">
                <div>
                  <div className="text-[#d97706] font-bold text-[36px] leading-[40px]">
                    20+
                  </div>
                  <div className="text-[#4B5563] font-normal text-[16px] leading-[24px]">
                    年行业经验
                  </div>
                </div>
                <div>
                  <div className="text-[#d97706] font-bold text-[36px] leading-[40px]">
                    200万
                  </div>
                  <div className="text-[#4B5563] font-normal text-[16px] leading-[24px]">
                    年产能（平方米）
                  </div>
                </div>
                <div>
                  <div className="text-[#d97706] font-bold text-[36px] leading-[40px]">
                    30+
                  </div>
                  <div className="text-[#4B5563] font-normal text-[16px] leading-[24px]">
                    出口国家
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <div className="text-[#0a0a0a] text-center font-bold h-[36px] leading-[36px] text-[30px] mb-[64px]">
            精工制造
          </div>
          <div className="flex gap-[64px] items-center justify-center">
            {tedianMap.map((item, index) => {
              return (
                <div
                  key={item.label}
                  className="pt-[28px] px-[25px] w-[25%] flex flex-col mt-[16px] h-[366px] rounded-[12px] opacity-[1]  bg-opacity-[0.001] border border-[#E5E5E5] box-border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
                >
                  <img src={`/jinggong${index + 1}.png`}></img>
                  <div className="mb-[16px] mt-[24px] text-[20px] font-bold text-[#0a0a0a] leading-[28px]">
                    {item.label}
                  </div>
                  <div className="text-[16px] font-normal text-[#4B5563] leading-[28px]">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="text-[#0a0a0a] text-center font-bold h-[36px] leading-[36px] text-[30px] mb-[64px]">
            资质认证
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

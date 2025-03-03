"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/header_img_1.webp",
    "/header_img_1.webp",
    "/header_img_1.webp",
  ];

  const tedianMap = [
    {
      path: "",
      label: "上海静安豪宅设计",
      value: "采用简约现代风格设计，通过实木地板营造温馨舒适的居住空间",
      desc: "面积：280平米",
      tag: "家居",
    },
    {
      path: "",
      label: "上海静安豪宅设计",
      value: "采用简约现代风格设计，通过实木地板营造温馨舒适的居住空间",
      desc: "面积：280平米",
      tag: "家居",
    },
    {
      path: "",
      label: "上海静安豪宅设计",
      value: "采用简约现代风格设计，通过实木地板营造温馨舒适的居住空间",
      desc: "面积：280平米",
      tag: "家居",
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <Header />
      <main>
        <div className="h-[800px] mt-[100px]">
          <div className="mb-[80px]">
            <div className="text-[#0a0a0a] text-center font-bold h-[36px] leading-[36px] text-[30px] mb-[64px] mt-[24px]">
              客户案例展示
            </div>
            <div className="text-[#4b5563] text-[14px] text-center mb-[32px]">
              展示我们在住宅、商业空间等领域的精选案例，每一个项目都凝聚着我们的匠心精神
            </div>
            <div className="flex gap-[64px] items-center justify-center">
              {tedianMap.map((item, index) => {
                return (
                  <div
                    key={item.label + index}
                    className="pt-[28px] px-[25px] w-[25%] flex flex-col mt-[16px] h-[386px] rounded-[12px] opacity-[1]  bg-opacity-[0.001] border border-[#E5E5E5] box-border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
                  >
                    <img src={`/anli${index + 1}.png`}></img>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data Constants
export default function Home() {
  const canshu1Map = [
    {
      label: "环保等级",
      value: "E0级",
    },
    {
      label: "防滑等级",
      value: "R10",
    },
    {
      label: "耐磨等级",
      value: "AC5",
    },
    {
      label: "使用年限",
      value: "15年以上",
    },
    {
      label: "适用空间",
      value: "客厅、卧室、书房等",
    },
  ];

  const canshu2Map = [
    {
      label: "品牌",
      value: "北欧印象",
    },
    {
      label: "材质",
      value: "A级橡木",
    },
    {
      label: "规格",
      value: "1220×165×15mm",
    },
    {
      label: "表层厚度",
      value: "4mm",
    },
    {
      label: "含水率",
      value: "7%-9%",
    },
  ];

  const tedianMap = [
    {
      path: "",
      label: "超强防潮",
      value: "采用先进防潮技术，防潮系数达99.9%",
    },
    {
      path: "",
      label: "环保健康",
      value: "甲醛释放量远低于国家标准，E0级环保",
    },
    {
      path: "",
      label: "耐磨持久",
      value: "表层耐磨层达0.6mm，使用寿命15年以上",
    },
    {
      path: "",
      label: "隔音降噪",
      value: "独特夹层设计，有效降低生活噪音",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <Header />
      <main>
        <div className="flex mt-[100px] px-[16px] ">
          <div className="w-[70%] ">
            <img src="/products.png" className="w-[100%] h-[500px]" />
            <div className="flex ml-[16px]">
              <img src="/products.png" className="w-[25%] h-[164px]" />
              <img src="/products.png" className="w-[25%] h-[164px]" />
              <img src="/products.png" className="w-[25%] h-[164px]" />
            </div>
          </div>
          <div className="w-[30%] flex gap-[16px] flex-col ml-[16px]">
            <div className="h-[36px] text-[#0A0A0A] text-[30px] font-bold mb-[16px]">
              北欧橡木实木地板
            </div>
            <div className="h-[24px] text-[16px] text-[#6B7280] mb-[16px]">
              产品型号：NORDIC-OAK-2023
            </div>
            <div className="h-[32px] mb-[24px] text-[#DC2626] text-[24px] font-bold">
              ¥ 688.00
            </div>
            <div className="h-[24px]">
              <span className="text-[16px] text-[#6B7280] font-normal">
                规格尺寸：
              </span>
              <span className="text-base font-normal leading-6 tracking-normal text-[#0A0A0A]">
                1220×165×15mm
              </span>
            </div>
            <div className="h-[24px]">
              <span className="h-[24px] text-[16px] text-[#6B7280] font-normal">
                材质：
              </span>
              <span className="text-base font-normal leading-6 tracking-normal text-[#0A0A0A]">
                A级橡木
              </span>
            </div>
            <div className="h-[24px]">
              <span className="h-[24px] text-[16px] text-[#6B7280] font-normal">
                产地：
              </span>
              <span className="text-base font-normal leading-6 tracking-normal text-[#0A0A0A]">
                浙江省杭州市
              </span>
            </div>
            <div className="h-[24px]">
              <span className="h-[24px] text-[16px] text-[#6B7280] font-normal">
                环保等级：
              </span>
              <span className="text-base font-normal leading-6 tracking-normal text-[#0A0A0A]">
                E0级
              </span>
            </div>

            <div className="bg-[#F3F4F6] h-[140px] px-[24px]">
              <div className="h-[52px] mb-[16px] mt-[16px] ">
                <div className="h-[24px] text-[16px] font-[600] text-[#0A0A0A]">
                  咨询热线
                </div>
                <div className="h-[28px] text-[#0A0A0A] font-bold text-[18px]">
                  400-888-9999
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001))",
                }}
                className="w-[80%] h-[40px] leading-[40px]  text-center rounded-[4px] opacity-100 bg-white border border-[#E5E5E5] shadow-sm box-border"
              >
                在线客服
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[24px] px-[20px] flex mt-[32px] mx-[32px]  h-[272px] border border-solid border-[#E5E5E5] rounded-[12px]">
          <div className="w-[50%]">
            <div className="mb-[16px] h-[24px] text-[16px] text-[#0A0A0A] font-bold">
              基础参数
            </div>
            <div className="flex flex-col gap-[16px]">
              {canshu1Map.map((item) => {
                return (
                  <div key={item.label} className="w-[100%] flex">
                    <div className="w-[50%] text-[#6B7280] text-[16px]">
                      {item.label}:
                    </div>
                    <div className="w-[50%] text-[#0A0A0A] text-[16px]">
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[50%] border-[#f1f2f3]">
            <div className="mb-[16px] h-[24px] text-[16px] text-[#0A0A0A] font-bold">
              性能参数
            </div>
            <div className="flex flex-col gap-[16px]">
              {canshu2Map.map((item) => {
                return (
                  <div key={item.label} className="w-[100%] flex">
                    <div className="w-[50%] text-[#6B7280] text-[16px]">
                      {item.label}:
                    </div>
                    <div className="w-[50%] text-[#0A0A0A] text-[16px]">
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-[32px] h-[250px]">
          <div className="mt-[48px] h-[32px] text-[#0a0a0a] leading-[32px] text-[24px] font-bold">
            产品特点
          </div>
          <div className="flex gap-[24px]">
            {tedianMap.map((item) => {
              return (
                <div
                  key={item.path}
                  className="pt-[28px] px-[25px] w-[25%] flex flex-col mt-[16px] h-[186px] rounded-[12px] opacity-[1]  bg-opacity-[0.001] border border-[#E5E5E5] box-border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
                >
                  <div className="mb-[24px] font-roboto text-[20px] font-bold leading-[28px] tracking-[0px] text-[#0A0A0A]">
                    {item.label}
                  </div>
                  <div className="font-roboto text-[16px] font-normal leading-[24px] tracking-[0px] text-[#4B5563]">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" mx-[32px] h-[391px]">
          <div className="mt-[48px] h-[32px] text-[#0a0a0a] leading-[32px] text-[24px] font-bold">
            产品特点
          </div>
          <div className="flex gap-[24px]">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  key={item}
                  className="w-[33.3%] flex flex-col mt-[16px] h-[295px] rounded-[12px] opacity-[1]  bg-opacity-[0.001] border border-[#E5E5E5] box-border "
                >
                  <img src={`shijing${index + 1}.png`}></img>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

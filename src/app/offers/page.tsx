"use client";

import { useState } from "react";
import Image from "next/image";
import { CircleQuestionMark, Info, SlidersHorizontal } from "lucide-react";

import data from "./data.json";

const offer=data.data.getUserDiscountCodes.data;

console.log(offer)

console.log(offer)

const offers = [
  {
    id: 1,
    title: "Salaried? Get FREE Tax Help+ 40% on Tax Services",
    coins: 9000,
    logo: "/logo.jpg",
  },
];

export default function Offers() {
  const [filter, setFilter] = useState("all");
  return (
    <div className="min-g-screen bg-gradient-to-b from-pink-100 to bg-purple-100 px-4 py-2 text-sm font-sans flex flex-col items-center">
      {/* Header */}
      <div className="relative mb-3 w-full flex flex-col items-center">
        <button className="absolute top-0 right-0 flex items-center gap-1 text-xs shadow px-3 py-3 rounded-full bg-white font-bold">
          <CircleQuestionMark className="w-4 h-4" /> How it Works?
        </button>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-full mt-8"
            src="/logo.jpg"
            alt="Recipto"
            width={80}
            height={80}
          />
          <h1 className="font-bold text-lg mt-2 text-center">Recip.to</h1>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center w-full">
        <div className="bg-white rounded-full flex justify-between items-center mb-4 max-w-[230px] mx-auto shadow">
          <button className="bg-purple-800 text-white px-4 py-2 rounded-full text-s font-semibold">
            Offers ✨
          </button>
          <button className="px-5 py-2 rounded-full text-s font-semibold mr-3">
            My Coupons
          </button>
        </div>
        <SlidersHorizontal className="rounded-full bg-white p-2 h-9 w-9 ml-2" />
      </div>

      {/* Banner */}
      <div className="flex justify-center w-full">
        <div className="bg-white p-3 rounded-xl shadow mb-4 max-w-[350px]">
          <Image
            src={"/tax.webp"}
            alt="tax"
            width={400}
            height={150}
            className="rounded mb-2"
          />
          <div className="flex items-center justify-between font-bold">
            <span>Tax Services Offer</span>
            <span className="ml-2 mt-3 font-bold">^</span>
          </div>
          <div className="text-gray-500 text-xs">14 Offers</div>
        </div>
      </div>
      {/* Filter */}
      <div className="flex justify-center items-center w-full mb-4">
        <div className="flex space-x-2 min-w-[400px] justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-full font-semibold text-md ${
              filter === "all"
                ? " bg-white border border-purple-600"
                : "bg-white text-gray-700"
            }`}
          >
            ✨ All
          </button>

          <button
            onClick={() => setFilter("salaried")}
            className={`px-3 py-1 rounded-full font-semibold text-md ${
              filter === "salaried"
                ? " border border-purple-600"
                : "bg-white text-gray-700"
            }`}
          >
            🙍🏾‍♂️ For Salaried Professionals
          </button>
          <button
            onClick={() => setFilter("")}
            className={`px-3 py-1 rounded-full font-semibold text-md ${
              filter === "a"
                ? " border border-purple-600"
                : "bg-white text-gray-700"
            }`}
          >
            💼
          </button>
        </div>
      </div>
      {/* Offer cards */}
      <div className="flex flex-col items-center w-full">
        {offer
          .filter((o) => filter === "all" || filter === "salaried")
          .map((offers) => (
            <div
              key={offers.store._id}
              className="bg-white rounded-xl font-semibold p-3 shadow mb-2 w-full max-w-md"
            >
              <div className="flex items-center gap-2 mb-1 justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-md"
                    alt="offerlogo"
                    src={"/logo.jpg"}
                    width={44}
                    height={44}
                  />
                  <span className="text-sm text-gray-500">Recip.to</span>
                </div>
                <Info color="gray" className="h-5 w-5" />
              </div>
              <div className="mt-3 text-lg font-bold leading-tight mb-2">
                {offers.brandproduct.name}
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-1 text-sm  px-2 py-1 rounded-xs shadow">
                  Earn 🪙 {(offers.brandproduct.customer_cashback)*10} Coins
                </div>
                <button className="bg-purple-600 text-white text-xs px-7 py-2 rounded-md">
                  VIEW
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

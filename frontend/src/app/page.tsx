"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "react-hot-toast";
import React from "react";
export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 text-center">
      {/* Hero Section */}
      <div className="mb-6">
        <Image 
          src="/grocery-hero.png" 
          alt="Grocery Delivery" 
          width={250} 
          height={250} 
          className="rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Fresh Point - Your Daily Essentials Delivered 🍏
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-md">
        Order fresh groceries, fruits, and vegetables from the comfort of your home. Fast delivery at the best prices!
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button 
          className="w-full text-lg p-4 bg-green-600 hover:bg-green-700"
          onClick={() => router.push("/signin")}
        >
          Get Started
        </Button>
        <Button 
          className="w-full text-lg p-4 bg-white text-green-600 border border-green-600 hover:bg-green-100"
          onClick={() => toast.success("Browse as Guest Coming Soon!")}
        >
          Browse as Guest
        </Button>
      </div>
    </div>
  );
}

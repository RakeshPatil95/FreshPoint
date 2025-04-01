"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-hot-toast";

export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const router = useRouter();

  const sendOtp = () => {
    if (phone.length === 10) {
      toast.success(`OTP sent to ${phone}`, { position: "top-center" });
      setStep(2);
    } else {
      toast.error("Enter a valid 10-digit phone number", { position: "top-center" });
    }
  };

  const verifyOtp = () => {
    if (otp === "123456") { // Mock OTP for now
      toast.success("OTP Verified!", { position: "top-center" });
      router.push("/home"); // Redirect to Home
    } else {
      toast.error("Invalid OTP, try again!", { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
      <Card className="w-full max-w-sm p-6 shadow-xl rounded-2xl bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-green-700">
            {step === 1 ? "Sign In" : "Enter OTP"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <>
              <Input 
                type="tel" 
                placeholder="Enter phone number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                maxLength={10}
                className="mb-4 text-lg p-3 border border-green-300 focus:border-green-500"
              />
              <Button className="w-full text-lg p-3 bg-green-600 hover:bg-green-700 text-white" onClick={sendOtp}>
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <Input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                maxLength={6}
                className="mb-4 text-lg p-3 border border-green-300 focus:border-green-500"
              />
              <Button className="w-full text-lg p-3 bg-green-600 hover:bg-green-700 text-white" onClick={verifyOtp}>
                Verify OTP
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

'use client'
import Button from "@/components/button";
import { useRouter } from 'next/navigation'

export default function WelcomePage() {
  const router= useRouter();
  return (
    <div className="w-[380px] mx-auto p-6 h-[800px] bg-gray-50 shadow border mt-10 text-center place-content-end">
      <h1 className="text-[28px] font-medium text-left font-semibold text-[#1D2226]">Welcome to PopX</h1>
      <p className="text-gray-500 justify-self-start ">Lorem ipsum dolor sit amet,</p>
      <p className="text-gray-500 justify-self-start mb-6">consectetur adipiscing elit</p>


      <div className="space-y-4">
        <Button label="Create Account" className="bg-[#6C25FF]"  onClick={() => router.push('/signup')} />
        <Button label="Already Registered? Login" className="bg-[#6C25FF4B] text-[#1D2226]" onClick={() => router.push('/signin')} />
      </div>
    </div>
  );
}
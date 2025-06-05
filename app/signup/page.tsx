'use client'

import { ReactElement } from "react"
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import InputBox from "@/components/InputBox";
import RadioGroup from "@/components/radio";
import Button from "@/components/button";

export default function Signup(): ReactElement {
    const router= useRouter();

    const [formData, setFormData] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        password: "",
        companyname: "",
        isAgency: "yes"
    });
     
  const handleSignup = async () => {

    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.fullname,
              phone: formData.phonenumber,
              email: formData.email,
              password: formData.password,
              company: formData.companyname,
            }),
          });
      const data = await res.json();

      if (res.ok) {
        console.log("Signup successful:", data);
        alert("Created Account Successfully");
        router.push("/signin"); 

      } else {
        console.error("Signup failed:", data);
        alert(data.msg || "Signup Failed");
      }

    } catch (err) {
      console.error("Error signing up:", err);
      alert("Error while creating account");
    }
  };


    return <div className="w-[380px] flex flex-col justify-between mx-auto p-6 h-[800px] bg-gray-50 shadow border mt-10 text-center">
        <div>
        <h2 className="text-3xl font-sans text-gray-900 text-left mb-6">Create your<br /> PopX account</h2>
        <InputBox label="Full Name" placeholder="Enter your Full Name" onChange={(e) => {
            setFormData({ ...formData, fullname: e.target.value })
        }} />
        <InputBox label="Phone Number" placeholder="Enter your Phone Number" onChange={(e) => {
            setFormData({ ...formData, phonenumber: e.target.value })
        }} />
        <InputBox label="Email Address" placeholder="Enter Email Address" onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
        }} />

        <InputBox label="Password" placeholder="Enter Password" onChange={(e) => {
            setFormData({ ...formData, password: e.target.value })
        }} />
        <InputBox label="Company Name" placeholder="Enter Company Name" onChange={(e) => {
            setFormData({ ...formData, companyname: e.target.value })
        }} />
        <RadioGroup
            name="agency"
            value={formData.isAgency}
            onChange={(value) => setFormData({ ...formData, isAgency: value })}
        />
        </div>

           <Button label="Create Account" className="mt-6 w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold py-3 rounded-md transition"
           onClick={handleSignup}
           />
        
    </div>
}
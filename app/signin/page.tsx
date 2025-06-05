'use client'
import Button from "@/components/button"
import InputBox from "@/components/InputBox"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function signin() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  console.log("reched here")
 
  const handleSignin = async () => {
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signed in successfully!");
        router.push('/profile');
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error("Error signing in:", err);
      alert("Something went wrong!");
    }
  }
    return <div className="w-[380px] flex flex-col mx-auto p-6 h-[800px] bg-gray-50 shadow border mt-10 text-center">
            <h2 className="text-3xl font-sans text-gray-900 text-left ">Signin to your<br /> PopX account</h2>
            <p className="text-gray-500 text-left mt-4 ">Lorem ipsum dolor sit amet,</p>
            <p className="text-gray-500 text-left">consectetur adipiscing elit,</p>
            <InputBox label="Email Address" placeholder="Enter Email Address" onChange={(e) => {
               setFormData({ ...formData, email: e.target.value})
            }} />

            <InputBox label="Password" placeholder="Enter Password" onChange={(e) => {
               setFormData({ ...formData,password: e.target.value})
            }} />
        <Button label="Login" className="mt-6 w-full bg-gray-300 hover:bg-gray-500 text-white font-semibold py-3 rounded-md transition"
        onClick={handleSignin}
        />
    </div>


}

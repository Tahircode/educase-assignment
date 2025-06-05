'use client'
import React, { ChangeEventHandler } from "react";

interface InputBoxType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputBox = ({ label, placeholder, type, onChange }: InputBoxType) => {
  return (
    <div className="relative w-full mt-6">
      <label
        htmlFor={label}
        className="absolute -top-3 left-3 bg-gray-50 px-1 text-sm text-purple-600 font-sans"
      >
        {label}
        <span className="text-red-500 ml-0.5">*</span>
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        id={label}
        className="w-full h-[45px] border border-gray-300 rounded-[8px] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;

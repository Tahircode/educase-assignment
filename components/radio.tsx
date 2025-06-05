'use client'
import React, { FC } from "react";

interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ name, value, onChange }) => {
  return (
    <div className="mt-4">
      {/* Static Label */}
      <label className="text-sm text-left font-sm text-gray-700 mb-2 block">
        Are you an Agency?
        <span className="text-red-500 ml-0.5">*</span>
      </label>

      <div className="flex items-center space-x-6">
        {["yes", "no"].map((option) => (
          <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer hidden"
            />
            <div
              className={`
                w-5 h-5 rounded-full border flex items-center justify-center
                ${value === option ? 'border-violet-600' : 'border-gray-400'}
              `}
            >
              <div
                className={`
                  w-2.5 h-2.5 rounded-full bg-violet-600
                  ${value === option ? 'block' : 'hidden'}
                `}
              />
            </div>
            <span className="text-gray-900 text-sm capitalize">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;

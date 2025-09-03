"use client";
import { useState } from "react";
import Link from "next/link";

export default function BmiCalculatorPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("0.00");
  const [status, setStatus] = useState("");

  const handleCalculate = () => {
    // Check if both fields are filled and valid numbers
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (
      isNaN(parsedWeight) ||
      isNaN(parsedHeight) ||
      parsedWeight <= 0 ||
      parsedHeight <= 0
    ) {
      setResult("0.00");
      setStatus("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }

    // Convert height from cm to meters
    const heightInMeters = parsedHeight / 100;

    // Calculate BMI
    const bmi = parsedWeight / (heightInMeters * heightInMeters);

    // Update the result state with the calculated BMI, formatted to two decimal places
    setResult(bmi.toFixed(2));

    // Set BMI status
    if (bmi < 18.5) {
      setStatus("น้ำหนักต่ำกว่าเกณฑ์");
    } else if (bmi >= 18.5 && bmi < 25) {
      setStatus("ปกติ");
    } else if (bmi >= 25 && bmi < 30) {
      setStatus("น้ำหนักเกิน");
    } else {
      setStatus("อ้วน");
    }
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setResult("0.00");
    setStatus("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">BMI Calculator</h1>
          <h2 className="mt-2 text-lg text-blue-500">คำนวณค่าดัชนีมวลกาย</h2>
          <div className="flex justify-center my-4">
            <svg
              className="w-10 h-10 sm:w-20 sm:h-20 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm5 4v6h-2v-4h-2v4h-2v-4h-2v4h-2v-6c0-2.21 1.79-4 4-4s4 1.79 4 4z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              น้ำหนัก (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
              placeholder="กรอกน้ำหนัก"
            />
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              ส่วนสูง (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
              placeholder="กรอกส่วนสูง"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6 space-x-4">
          <button
            onClick={handleCalculate}
            className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            คำนวณ
          </button>
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 text-blue-600 bg-blue-50 rounded-md shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            รีเซ็ต
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">ผลลัพธ์</p>
          <span className="block mt-1 text-2xl font-semibold text-blue-800">
            ค่าดัชนีมวลกาย: {result}
          </span>
          {status && (
            <p className="mt-2 text-sm text-gray-500">สถานะ: {status}</p>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href="/"
            className="w-full px-4 py-2 text-center text-blue-600 bg-blue-50 rounded-md shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ย้อนกลับ
          </Link>
        </div>
      </div>
    </div>
  );
}

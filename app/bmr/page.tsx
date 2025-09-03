"use client";
import { useState } from "react";
import Link from "next/link";

export default function BmrCalculatorPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState("0.00");

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setResult("0.00");
  };

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      setResult("Invalid Input");
      return;
    }

    let bmr;
    if (gender === "male") {
      // Harris-Benedict formula for men
      // BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
      bmr = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      // Harris-Benedict formula for women
      // BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
      bmr = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    }

    setResult(bmr.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">BMR Calculator</h1>
          <h2 className="mt-2 text-lg text-blue-500">
            คำนวณค่าดัชนีเผาผลาญพลังงาน
          </h2>
          <div className="flex justify-center my-4">
            <svg
              className="w-10 h-10 sm:w-50 sm:h-50 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-12h2v6h-2z" />
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
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรอกส่วนสูง"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรอกอายุ"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              เพศ
            </label>
            <div className="flex items-center mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2 text-gray-700">ชาย</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-pink-600"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2 text-gray-700">หญิง</span>
              </label>
            </div>
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
            ค่าดัชนีเผาผลาญพลังงาน: {result}
          </span>
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

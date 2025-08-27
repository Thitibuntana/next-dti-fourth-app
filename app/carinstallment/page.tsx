"use client";
import { useState } from "react";

export default function CarInstallmentCalculatorPage() {
  // State for all the input fields and the final result
  const [calculatorName, setCalculatorName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [annualInterest, setAnnualInterest] = useState("");
  const [downPayment, setDownPayment] = useState("15"); // Default to 15%
  const [loanTerm, setLoanTerm] = useState("48"); // Default to 48 months
  const [result, setResult] = useState("0.00");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle the calculation
  const handleCalculate = () => {
    // Clear any previous error messages
    setErrorMessage("");

    // Parse string inputs to numbers
    const price = parseFloat(carPrice);
    const interestRate = parseFloat(annualInterest);
    const downPaymentPercent = parseFloat(downPayment) / 100;
    const termInMonths = parseFloat(loanTerm);

    // Validate inputs
    if (isNaN(price) || price <= 0 || isNaN(interestRate) || interestRate < 0) {
      setErrorMessage("กรุณากรอกราคาและดอกเบี้ยที่ถูกต้อง");
      setResult("0.00");
      return;
    }

    // Calculate the principal loan amount
    const principal = price * (1 - downPaymentPercent);

    // Calculate the monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    let monthlyPayment;

    if (monthlyInterestRate === 0) {
      // Handle the case of 0% interest to avoid division by zero
      monthlyPayment = principal / termInMonths;
    } else {
      // Use the loan payment formula: M = P [r(1+r)^n] / [(1+r)^n - 1]
      const numerator =
        monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termInMonths);
      const denominator = Math.pow(1 + monthlyInterestRate, termInMonths) - 1;
      monthlyPayment = principal * (numerator / denominator);
    }

    // Update the result state, rounded to two decimal places
    setResult(monthlyPayment.toFixed(2));
  };

  // Function to handle clearing all inputs and results
  const handleClear = () => {
    setCalculatorName("");
    setCarPrice("");
    setAnnualInterest("");
    setDownPayment("15");
    setLoanTerm("48");
    setResult("0.00");
    setErrorMessage("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">
            Car Installment Calculator
          </h1>
          <h2 className="mt-2 text-lg text-blue-500">คำนวณ Car Installment</h2>
          {/* Car Icon Placeholder */}
          <div className="flex justify-center my-4">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 10h-2V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H9V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v7h2v-2h16v2h2v-7a1 1 0 0 0-1-1zM7 8h2v2H7V8zm5 0h2v2h-2V8zm-5 4h10v3H7v-3z" />
            </svg>
          </div>
        </div>
        <div className="mt-6 space-y-5">
          {/* Calculator Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              ชื่อผู้คำนวณ
            </label>
            <input
              type="text"
              id="name"
              value={calculatorName}
              onChange={(e) => setCalculatorName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรอกชื่อ"
            />
          </div>

          {/* Car Price Input */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              ราคา (บาท)
            </label>
            <input
              type="number"
              id="price"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรอกราคารถยนต์"
            />
          </div>

          {/* Annual Interest Input */}
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-gray-700"
            >
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interest"
              value={annualInterest}
              onChange={(e) => setAnnualInterest(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรอกดอกเบี้ย"
            />
          </div>

          {/* Down Payment Radio Buttons */}
          <div>
            <span className="block text-sm font-medium text-gray-700">
              เงินดาวน์ (%)
            </span>
            <div className="mt-2 flex flex-wrap gap-4">
              {["15", "20", "25", "30", "35"].map((percent) => (
                <label
                  key={percent}
                  className="inline-flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio text-blue-600 focus:ring-blue-500"
                    name="downPayment"
                    value={percent}
                    checked={downPayment === percent}
                    onChange={(e) => setDownPayment(e.target.value)}
                  />
                  <span className="ml-2 text-gray-700">{percent}%</span>
                </label>
              ))}
            </div>
          </div>

          {/* Loan Term Dropdown */}
          <div>
            <label
              htmlFor="loanTerm"
              className="block text-sm font-medium text-gray-700"
            >
              เดือนที่ผ่อน
            </label>
            <select
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {[12, 24, 36, 48, 60, 72, 84, 96].map((months) => (
                <option key={months} value={months}>
                  {months} เดือน
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons and Result Display */}
        <div className="mt-8">
          <div className="flex justify-between space-x-4">
            <button
              onClick={handleCalculate}
              className="flex-1 px-4 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              คำนวณ
            </button>
            <button
              onClick={handleClear}
              className="flex-1 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Clear
            </button>
          </div>
          {errorMessage && (
            <p className="mt-4 text-center text-sm font-semibold text-red-500">
              {errorMessage}
            </p>
          )}
          <div className="mt-6 text-center">
            <p className="text-gray-600">ผลรวม (ผ่อนต่อเดือน)</p>
            <span className="block mt-1 text-3xl font-bold text-blue-800">
              {result}
            </span>
            <p className="text-gray-600">บาท</p>
          </div>
        </div>
      </div>
    </div>
  );
}

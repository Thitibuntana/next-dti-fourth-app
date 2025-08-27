export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl text-center my-8">
        <div className="relative w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center">
          {/* โลโก้ตรงกลาง */}
          <svg
            className="w-12 h-12 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2">
          ยินดีต้อนรับ
        </h1>
        <p className="text-lg sm:text-xl text-blue-700">
          เลือกประเภทการคำนวณที่คุณต้องการ
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* BMI Card */}
        <a
          href="/bmi"
          className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center cursor-pointer border border-transparent hover:border-blue-400"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm5 4v6h-2v-4h-2v4h-2v-4h-2v4h-2v-6c0-2.21 1.79-4 4-4s4 1.79 4 4z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
            คำนวณค่า BMI
          </h2>
          <p className="text-sm sm:text-base text-gray-600 group-hover:text-blue-500">
            คำนวณดัชนีมวลกาย
          </p>
        </a>

        {/* BMR Card */}
        <a
          href="/bmr"
          className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center cursor-pointer border border-transparent hover:border-blue-400"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-12h2v6h-2z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
            คำนวณค่า BMR
          </h2>
          <p className="text-sm sm:text-base text-gray-600 group-hover:text-blue-500">
            คำนวณอัตราการเผาผลาญพลังงาน
          </p>
        </a>

        {/* Car Installment Card */}
        <a
          href="/carinstallment"
          className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center cursor-pointer border border-transparent hover:border-blue-400"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 10h-2V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H9V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v7h2v-2h16v2h2v-7a1 1 0 0 0-1-1zM7 8h2v2H7V8zm5 0h2v2h-2V8zm-5 4h10v3H7v-3z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
            คำนวณค่างวดรถ
          </h2>
          <p className="text-sm sm:text-base text-gray-600 group-hover:text-blue-500">
            คำนวณค่างวดสินเชื่อรถยนต์
          </p>
        </a>
      </div>
    </div>
  );
}

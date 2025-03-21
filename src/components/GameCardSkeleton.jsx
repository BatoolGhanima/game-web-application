import React from "react";

const GameCardSkeleton = () => {
  return (
    <div className="card-container animate-pulse">
      {/* صورة اللعبة */}
      <div className="image-card bg-gray-300 w-full h-60 rounded-lg"></div>

      {/* العنوان (اسم اللعبة) */}
      <div className="h-6 bg-gray-300 rounded-md w-3/4 mx-auto mt-4"></div>

      {/* الأيقونات + التقييم */}
      <div className="card-overlay">
        <div className="icons flex space-x-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>

        <div className="disc">
          <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>

          <div className="score flex items-center space-x-2 mt-2">
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* زر التفاصيل */}
        <div className="card-button w-full h-10 bg-gray-300 rounded-md mt-3"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;

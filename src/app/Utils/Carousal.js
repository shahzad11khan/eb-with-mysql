// // export default Carousal;
// "use client";
// import { useState, useEffect, useCallback } from "react";
// import Image from "next/image";

// const Carousal = () => {
//   const slides = [
//     {
//       imageUrl: "/clients/markus1.png",
//       text: "I can highly recommend EncoderBytes as an app development company. They are great to work with, highly responsive, and knowledgeable when it comes to building custom apps on flutter/firebase. Would use them again for future projects without thinking twice.",
//       author: "Markus Stripf",
//       role: "Co-Founder, Spoon Guru UK",
//     },
//     {
//       imageUrl: "/clients/markus1.png",
//       text: "Encoderbytes is extremely knowledgeable and helpful. They know in and out of mobile app development . Their understanding of different technologies and frameworks in the space is also very impressive.  I hope I get the chance to work with them again",
//       author: "Jake Corry",
//       role: "Backend Software Engineer at MX",
//     },
//     {
//       imageUrl: "/clients/markus1.png",
//       text: "I have worked with Encoderbytes and they are very professional and excellent software developers. I admire their speed of development and quality of work when given an assignment.",
//       author: "Blaise Labriola",
//       role: "AI/Machine Learning & Stock Portfolio Analytics",
//     },
//   ];

//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   const autoChangeSlide = useCallback(() => {
//     const newIndex = (currentSlideIndex + 1) % slides.length;
//     setCurrentSlideIndex(newIndex);
//   }, [currentSlideIndex, slides.length]);

//   useEffect(() => {
//     const intervalId = setInterval(autoChangeSlide, 3000);
//     return () => clearInterval(intervalId);
//   }, [autoChangeSlide]);

//   const handleDotClick = (index) => {
//     setCurrentSlideIndex(index);
//   };

//   return (
//     <div
//       id="default-carousel"
//       className="relative w-full bg-custom pt-20 mt-36 h-[495px]"
//       data-carousel="slide"
//     >
//       <div className="slider-container relative h-72 rounded-lg flex flex-col items-center justify-center">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="slide flex items-center justify-center absolute inset-0 transition-transform duration-500"
//             style={{
//               transform: `translateX(${(index - currentSlideIndex) * 100}%)`,
//               display: index === currentSlideIndex ? "flex" : "none",
//             }}
//           >
//             <div className="text-center">
//               <Image
//                 src={slide.imageUrl}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   borderRadius: "50%",
//                   width: "100px",
//                   height: "100px",
//                   display: "block",
//                   margin: "auto",
//                 }}
//                 width={320}
//                 height={320}
//               />
//               <div className="mt-8 px-6 text-center">
//                 <div className="mt-4 flex flex-col items-center">
//                   <p className="slide-text w-3/5 text-center mb-5  leading-tight">
//                     {slide.text}
//                   </p>
//                   <span className="text-custom-blue text-xl">
//                     {slide.author}
//                   </span>
//                   <span className="text-xs mt-2 text-paraClr opacity-50">{slide.role}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-4 h-4 rounded-full ${index === currentSlideIndex ? "bg-custom-blue" : " border-2 border-paraClr opacity-50"
//               }`}
//             onClick={() => handleDotClick(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousal;



"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Carousal = () => {
  const slides = [
    {
      imageUrl: "/clients/markus1.png",
      text: "I can highly recommend EncoderBytes as an app development company. They are great to work with, highly responsive, and knowledgeable when it comes to building custom apps on flutter/firebase. Would use them again for future projects without thinking twice.",
      author: "Markus Stripf",
      role: "Co-Founder, Spoon Guru UK",
    },
    {
      imageUrl: "/clients/markus1.png",
      text: "Encoderbytes is extremely knowledgeable and helpful. They know the ins and outs of mobile app development. Their understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with them again.",
      author: "Jake Corry",
      role: "Backend Software Engineer at MX",
    },
    {
      imageUrl: "/clients/markus1.png",
      text: "I have worked with Encoderbytes and they are very professional and excellent software developers. I admire their speed of development and quality of work when given an assignment.",
      author: "Blaise Labriola",
      role: "AI/Machine Learning & Stock Portfolio Analytics",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const autoChangeSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const intervalId = setInterval(autoChangeSlide, 3000);
    return () => clearInterval(intervalId);
  }, [autoChangeSlide]);

  const handleDotClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full bg-custom pt-20 mt-36 h-[495px]"
      data-carousel="slide"
    >
      <div className="slider-container relative h-72 rounded-lg flex flex-col items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide flex items-center justify-center absolute inset-0 transition-transform duration-500"
            style={{
              transform: `translateX(${(index - currentSlideIndex) * 100}%)`,
              display: index === currentSlideIndex ? "flex" : "none",
            }}
          >
            <div className="text-center">
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                className="rounded-full"
                width={100}
                height={100}
                style={{ display: "block", margin: "auto" }}
              />
              <div className="mt-8 px-6 text-center">
                <div className="mt-4 flex flex-col items-center">
                  <p className="slide-text md:w-3/5 text-center mb-5 leading-tight">
                    {slide.text}
                  </p>
                  <span className="text-custom-blue text-xl">
                    {slide.author}
                  </span>
                  <span className="text-xs mt-2 text-paraClr opacity-50">{slide.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentSlideIndex ? "bg-custom-blue" : "border-2 border-paraClr opacity-50"}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousal;

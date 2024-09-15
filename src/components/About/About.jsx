import * as React from "react";
import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ButtonComponent";
import SectionComponent from "./SectionComponent";

function About() {
  return (
    <main
      className="flex flex-col h-screen overflow-hidden pt-40 mx-auto border border-solid border-blue-100 border-opacity-50 rounded-[50px]"
      style={{
        background: 'linear-gradient(to right, #D291FF, #87CEEB)',
      }}
    >
      <div className="flex flex-row mx-auto mb-auto">
        <div className="flex gap-5 self-end mr-12">
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02b28514e4c0ec0511af52f9678a3614a68e5e43adea2e8d6efbc34e96e069d2?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e"
            alt="Second image"
            className="object-contain shrink-0 my-auto bg-blend-multiply aspect-[0.69] w-[75px]"
          />

          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02b28514e4c0ec0511af52f9678a3614a68e5e43adea2e8d6efbc34e96e069d2?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e"
            alt="Second image"
            className="object-contain shrink-0 my-auto bg-blend-multiply aspect-[0.69] w-[75px]"
          />

          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02b28514e4c0ec0511af52f9678a3614a68e5e43adea2e8d6efbc34e96e069d2?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e"
            alt="Second image"
            className="object-contain shrink-0 my-auto bg-blend-multiply aspect-[0.69] w-[75px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-end flex-grow">
        <SectionComponent
          title="Fruit.Ai"
          description="Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine."
          className="flex flex-col items-center px-10 py-14 w-full max-w-[800px] text-base font-semibold text-center bg-white rounded-[47px_45px_50px_50px]"
        >
          <ButtonComponent
            text="ABOUT"
            className="flex flex-col justify-center items-center px-16 py-1.5 mt-9 w-full font-extrabold tracking-wider text-white whitespace-nowrap bg-black max-w-[258px] rounded-[60px]"
            redirectTo="/about"
          />
        </SectionComponent>
      </div>
    </main>
  );
}

export default About;

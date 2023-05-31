import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { CloseButton } from "../CloseButton/CloseButton";
import { SliderLightboxCounter } from "./parts/SliderLightboxCounter/SliderLightboxCounter";
import { Portal } from "@/components/blocks/Portal/Portal";
import { FaAngleLeft } from "react-icons/fa";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
  currentSlide: number;
  slidesCount: number;
};

export const SliderLightbox = ({
  children,
  isOpen,
  onClose,
  nextSlide,
  prevSlide,
  currentSlide,
  slidesCount,
}: Props) => (
  <Portal>
    <div
      className={twMerge(
        "fixed bg-black/90 z-50",
        "transition-all duration-300 motion-reduce:transition-none",
        isOpen ? "opacity-100 inset-0" : "opacity-0 -top-[100vh]",
      )}
      onClick={onClose}
      role="dialog"
    >
      {children}
      <ArrowButton
        onClick={(e) => {
          prevSlide();
          e.stopPropagation();
        }}
        position="left"
        lightbox
      >
        <>
          <FaAngleLeft />
          <span className="sr-only">poprzednie zdjęcie</span>
        </>
      </ArrowButton>
      <ArrowButton
        onClick={(e) => {
          nextSlide();
          e.stopPropagation();
        }}
        position="right"
        lightbox
      >
        <>
          <FaAngleLeft className="rotate-180" />
          <span className="sr-only">następne zdjęcie</span>
        </>
      </ArrowButton>
      <SliderLightboxCounter>
        {currentSlide + 1}/{slidesCount}
      </SliderLightboxCounter>
      <CloseButton onClick={onClose} />
    </div>
  </Portal>
);

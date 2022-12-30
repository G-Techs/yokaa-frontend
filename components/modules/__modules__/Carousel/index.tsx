import React, { FC, ReactNode, useRef } from "react";
import { useSideScroll } from "../../hooks";
import { ArrowLeftIcon, ArrowRightIcon } from "../../__modules/Vectors";

interface CarouselProps {
  className: string;
  title: string;
  children: ReactNode;
  height?: number;
}

const Carousel: FC<CarouselProps> = ({
  className,
  title,
  children,
  height,
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const sideScroll = useSideScroll();

  const onScrollLeft = () => {
    sideScroll(
      scrollContainer.current,
      40,
      200,
      -(scrollContainer.current?.offsetWidth as number)
    );
  };

  const onScrollRight = () => {
    sideScroll(
      scrollContainer.current,
      40,
      200,
      scrollContainer.current?.offsetWidth as number
    );
  };
  return (
    <div className={className}>
      <div className="flex justify-between items-center pb-5 border-b">
        <h2 className="font-bold text-2xl text-gray-700">{title}</h2>
        <div className="flex">
          <div
            onClick={onScrollLeft}
            tabIndex={0}
            onKeyDown={() => null}
            className="bg-primary p-2 text-white rounded-full mx-1 cursor-pointer hover:bg-white hover:shadow-xl hover:text-primary transition-all"
          >
            <ArrowLeftIcon />
          </div>
          <div
            onClick={onScrollRight}
            tabIndex={0}
            onKeyDown={() => null}
            className="bg-primary p-2 text-white rounded-full mx-1 cursor-pointer hover:bg-white hover:shadow-xl hover:text-primary transition-all"
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div
        style={{ height: height + "px" }}
        ref={scrollContainer}
        className={`flex flex-col flex-wrap justify-start items-center overflow-y-auto h-80 no-scrollbar scroll-smooth scroll-snap-container`}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;

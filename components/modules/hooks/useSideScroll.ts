const useSideScroll = () => {
  const sideScroll = (
    element: HTMLDivElement | null,
    speed: number,
    distance: number,
    step = 10
  ) => {
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      if (element?.scrollLeft) {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
      }
    }, speed);
  };

  return sideScroll;
};

export default useSideScroll;

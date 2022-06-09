const useSideScroll = () => {
  const sideScroll = (element, speed, distance, step = 10) => {
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return sideScroll;
};

export default useSideScroll;

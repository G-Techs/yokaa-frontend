import React from "react";

const Equalizer = () => {
  return (
    <div className="gap-1 relative h-12 w-[6rem] lg:w-[18.75rem]">
      <span className="bg-white w-4 h-full rounded-sm animate-equalizerBarOne absolute bottom-0" />
      <span className="bg-white w-4 h-full rounded-sm animate-equalizerBarTwo absolute ml-5 bottom-0" />
      <span className="bg-white w-4 h-full rounded-sm animate-equalizerBarThree absolute ml-10 bottom-0" />
      <span className="bg-white w-4 h-full rounded-sm animate-equalizerBarFour absolute ml-[3.75rem] bottom-0" />
      <span className="bg-white w-4 h-full rounded-sm animate-equalizerBarFive absolute ml-[5rem] bottom-0" />
    </div>
  );
};

export default Equalizer;

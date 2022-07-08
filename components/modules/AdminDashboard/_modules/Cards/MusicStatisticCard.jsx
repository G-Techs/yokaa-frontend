import React from "react";
import { VInfo, VStatsChart } from "../../../__modules/Vectors";
import PropTypes from "prop-types";

const MusicStatisticCard = ({
  statTitle,
  statValue,
  statIcon,
  iconColorClassName,
  iconBgClassName,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl my-5 w-full p-5 mobile:m-0">
      <div className="flex justify-between py-5 items-center">
        <p className="font-bold">{statTitle}</p>
        <p className="text-gray-700">
          <VInfo />
        </p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <p className={`${iconColorClassName}`}>
          <VStatsChart className="text-2xl" />
        </p>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-semibold">{statValue}</p>
          <p
            className={`${iconColorClassName} text-2xl bg-opacity-20 p-5 rounded-full ${iconBgClassName}`}
          >
            {statIcon}
          </p>
        </div>
      </div>
    </div>
  );
};

MusicStatisticCard.propTypes = {
  statTitle: PropTypes.string.isRequired,
  statValue: PropTypes.string.isRequired,
  statIcon: PropTypes.element.isRequired,
  iconColorClassName: PropTypes.string.isRequired,
  iconBgClassName: PropTypes.string.isRequired,
};

export default MusicStatisticCard;

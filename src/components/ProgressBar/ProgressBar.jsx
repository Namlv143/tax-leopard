import React from "react";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const { totalColor, completeColor, completed } = props;

  const containerStyles = {
    backgroundColor: totalColor,
    borderRadius: 50,
    height: 4,
    width: "100%",
  };

  const fillerStyles = {
    backgroundColor: completeColor,
    borderRadius: "inherit",
    height: "100%",
    textAlign: "right",
    width: `${completed}%`,
  };

  // const labelStyles = {
  //   color: "white",
  //   fontWeight: "bold",
  // };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  totalColor: PropTypes.string,
  completeColor: PropTypes.string,
  completed: PropTypes.number,
};

export default React.memo(ProgressBar);

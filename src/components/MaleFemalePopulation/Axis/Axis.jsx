import styled from "@emotion/styled";
import React from "react";

const Line = styled.line`
  stroke-width: 0.1rem;
  stroke: #cccccc;
`;

const Text = styled.text`
  text-anchor: middle;
`;

const Axis = ({
  maleTicks,
  innerWidth,
  xScaleMale,
  innerHeight,
  formatNumber,
  femaleTicks,
  xScaleFemale,
}) => {
  return (
    <>
      {" "}
      {maleTicks.map((tick) => (
        <g key={tick}>
          <Line
            x1={innerWidth / 2 - xScaleMale(tick)}
            y1={0}
            x2={innerWidth / 2 - xScaleMale(tick)}
            y2={innerHeight}
          />
          <Text x={innerWidth / 2 - xScaleMale(tick)} y={0}>
            {formatNumber(tick)}
          </Text>
        </g>
      ))}
      {femaleTicks.map((tick) => (
        <g key={tick}>
          <Line
            x1={innerWidth / 2 + xScaleFemale(tick)}
            y1={0}
            x2={innerWidth / 2 + xScaleFemale(tick)}
            y2={innerHeight}
          />
          <Text x={innerWidth / 2 + xScaleFemale(tick)} y={0}>
            {formatNumber(tick)}
          </Text>
        </g>
      ))}
    </>
  );
};

export default Axis;

import styled from "@emotion/styled";
import React from "react";

const Line = styled.line`
  stroke-width: 0.1rem;
  stroke: ${(props) => props.theme.colors.offWhite};
`;

const Text = styled.text`
  text-anchor: middle;
  opacity: 0.5;
  transform: translate(0px, -0.8rem);
`;

const Axis = ({
  theme,
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
          <Text x={innerWidth / 2 + xScaleFemale(tick)} y={0} theme={theme}>
            {formatNumber(tick)}
          </Text>
        </g>
      ))}
    </>
  );
};

export default Axis;

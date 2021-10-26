import styled from "@emotion/styled";

const Text = styled.text`
  text-anchor: middle;
  font-weight: bold;

  fill: ${({ theme }) => theme?.colors?.dark ?? "black"};
  transform: translateY(200);
`;

const Rect = styled.rect`
  pointer-events: all;
`;

const maleFemalePopulation = ({
  theme,
  innerWidth,
  yScale,
  xScaleFemale,
  xScaleMale,
  d,
  selected,
  setSelected,
}) => {
  const isSelected = selected?.year === d.year;
  return (
    <g
      key={d.year}
      onMouseEnter={() => setSelected(d)}
      onMouseLeave={() => setSelected(null)}
    >
      <Rect
        y={yScale(d.year)}
        x={innerWidth / 2}
        theme={theme}
        fill={theme.colors.pink}
        width={xScaleFemale(d.female)}
        height={yScale.bandwidth()}
      />
      <Rect
        y={yScale(d.year)}
        theme={theme}
        x={innerWidth / 2 - xScaleMale(d.male)}
        width={xScaleMale(d.male)}
        fill={isSelected ? "none" : theme.colors.blue}
        height={yScale.bandwidth()}
      />
      <Text x={innerWidth / 2} y={yScale(d.year) + 23} theme={theme}>
        {d.year}
      </Text>
    </g>
  );
};

export default maleFemalePopulation;

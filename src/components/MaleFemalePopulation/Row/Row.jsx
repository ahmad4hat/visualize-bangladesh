import styled from "@emotion/styled";

const Text = styled.text`
  text-anchor: middle;
  font-weight: bold;

  fill: ${({ theme }) => theme?.colors?.dark ?? "black"};
`;

const PopulationText = styled.text`
  text-anchor: middle;
  font-weight: bold;

  fill: ${({ theme, isFemale }) =>
    isFemale ? theme.colors.pink : theme.colors.blue};
`;

const Rect = styled.rect`
  pointer-events: all;
  stroke-width: 0.01rem;
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
  formatNumber,
}) => {
  const isSelected = selected?.year === d.year;

  let numbersElement;
  if (isSelected) {
    numbersElement = (
      <>
        <PopulationText x={innerWidth / 2 - 100} y={yScale(d.year) + 18}>
          {formatNumber(d.male)}{" "}
        </PopulationText>
        <PopulationText
          x={innerWidth / 2 + 100}
          isFemale
          y={yScale(d.year) + 18}
        >
          {formatNumber(d.female)}{" "}
        </PopulationText>
      </>
    );
  }
  return (
    <g
      key={d.year}
      onMouseEnter={() => setSelected(d)}
      onMouseLeave={() => setSelected(null)}
    >
      {numbersElement}
      <Rect
        y={yScale(d.year)}
        x={innerWidth / 2}
        theme={theme}
        fill={isSelected ? "none" : theme.colors.pink}
        stroke={isSelected ? theme.colors.pink : "none"}
        rx={2}
        width={xScaleFemale(d.female)}
        height={yScale.bandwidth()}
      />
      <Rect
        y={yScale(d.year)}
        theme={theme}
        x={innerWidth / 2 - xScaleMale(d.male)}
        width={xScaleMale(d.male)}
        fill={isSelected ? "none" : theme.colors.blue}
        stroke={isSelected ? theme.colors.blue : "none"}
        rx={2}
        height={yScale.bandwidth()}
      />
      {!isSelected && (
        <Text x={innerWidth / 2} y={yScale(d.year) + 18} theme={theme}>
          {d.year}
        </Text>
      )}
    </g>
  );
};

export default maleFemalePopulation;

import { useEffect, useState } from "react";
import { csv, scaleBand, scaleLinear, max, format } from "d3";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Row from "../../components/MaleFemalePopulation/Row/Row";
import Axis from "../../components/MaleFemalePopulation/Axis/Axis";

const SVG = styled.svg``;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const width = 1700;
const height = 1200;
const margin = { top: 40, right: 20, bottom: 40, left: 20 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const MaleFemalePopulation = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const response = await csv("/male-female-population.csv");
      const preData = response.map((d) => {
        return {
          year: d.Year,
          population: +d.Population,
          male: +d.Male,
          female: +d.Female,
        };
      });
      setData(preData);
    })();
  }, []);

  const yearAccessor = (d) => d.year;

  if (!data) {
    return <pre>Loading</pre>;
  }

  const yScale = scaleBand()
    .domain(data.map(yearAccessor))
    .range([0, innerHeight])
    .paddingInner(0.1)
    .paddingOuter(0.1);

  const xScaleGeneral = scaleLinear().domain([
    0,
    max(data, (d) => (d.female > d.male ? d.female : d.male)),
  ]);

  const xScaleFemale = scaleLinear()
    .domain(xScaleGeneral.domain())
    .range([0, innerWidth / 2])
    .nice();

  const xScaleMale = scaleLinear()
    .domain(xScaleGeneral.domain())
    .range([0, innerWidth / 2])
    .nice();

  const formatNumber = format(".2s");

  const maleTicks = xScaleMale.ticks();
  const femaleTicks = xScaleFemale.ticks();
  maleTicks.shift();
  femaleTicks.shift();
  return (
    <Div>
      <SVG width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <Axis
            {...{
              maleTicks,
              innerWidth,
              xScaleMale,
              innerHeight,
              formatNumber,
              femaleTicks,
              xScaleFemale,
              theme,
            }}
          />
          {data.map((d) => (
            <Row
              key={d.year}
              {...{
                theme,
                innerWidth,
                yScale,
                xScaleFemale,
                xScaleMale,
                d,
                selected,
                setSelected,
                formatNumber,
              }}
            />
          ))}
        </g>
      </SVG>
    </Div>
  );
};

export default MaleFemalePopulation;

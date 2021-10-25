import { useEffect, useState } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";
import styled from "@emotion/styled";

const SVG = styled.svg`
  background-color: #f9f9f9;
`;

const width = 1200;
const height = 2200;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const MaleFemalePopulation = () => {
  const [data, setData] = useState();

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
    .paddingInner(0.3)
    .paddingOuter(0.1);

  const xScaleGeneral = scaleLinear().domain([
    0,
    max(data, (d) => (d.female > d.male ? d.female : d.male)),
  ]);

  const xScaleFemale = scaleLinear()
    .domain(xScaleGeneral.domain())
    .range([0, width / 2 - 40]);

  //   console.log(xScaleFemale.domain());
  const xScaleMale = scaleLinear()
    .domain(xScaleGeneral.domain())
    .range([0, width / 2 - 40]);

  return (
    <div>
      <SVG width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map((d) => (
            <>
              <text x={innerWidth / 2} y={yScale(d.year)} key={d.year}>
                {d.year}
              </text>
              <rect
                key={d.year + "2"}
                y={yScale(d.year)}
                fill={"#21231"}
                x={innerWidth / 2 + 40}
                width={xScaleFemale(d.female)}
                height={yScale.bandwidth()}
              />
              <rect
                key={d.year + "3"}
                y={yScale(d.year)}
                fill={"#2321ff"}
                x={width / 2 - xScaleMale(d.male)}
                width={xScaleMale(d.male)}
                height={yScale.bandwidth()}
              />
              {console.log({ male: xScaleFemale(d.female) })}
            </>
          ))}
        </g>
      </SVG>
    </div>
  );
};

export default MaleFemalePopulation;

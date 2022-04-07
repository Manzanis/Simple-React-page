import React, { Component, Fragment } from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

class ChartControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <LineChart
        width={1500}
        height={400}
        data={this.props.data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="fecha" />

        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        {this.props.lines.map((row, index) => {
          return (
            <Line
              type={this.props.type}
              dataKey={row}
              stroke={this.props.colors[index]}
              yAxisId={index}
            />
          );
        })}
      </LineChart>
    );
  }
}
export default ChartControl;

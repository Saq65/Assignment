import React, { PureComponent } from 'react';
import { PieChart, Pie, Label, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 700 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#F0469F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {

  render() {
    return (
      <PieChart width={300} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={80}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

          ))}
          {data.map((entry, index) => (
            <Label
              key={`label-${index}`}
              position="center"
              value="65% Total"
              fill="black"
              fontSize={12}
            />
          ))}
        </Pie>

      </PieChart>
    );
  }
}

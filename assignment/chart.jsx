import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { product: 'Jan', sold: 50 },
  { product: 'Feb', sold: 80 },
  { product: 'Mar', sold: 34 },
  { product: 'Apr', sold: 60 },
  { product: 'May', sold: 48 },
  { product: 'Jun', sold: 62 },
  { product: 'Jul', sold: 80 },
  { product: 'Aug', sold: 100 },
  { product: 'Sep', sold: 70 },
  { product: 'Oct', sold: 55 },
  { product: 'Nov', sold: 45 },
  { product: 'Dec', sold: 70 },
];

function BarChartExample() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sold" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartExample;

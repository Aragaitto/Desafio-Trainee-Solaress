import React from "react";
import { AreaChart , Area, XAxis, Tooltip, YAxis, CartesianGrid } from "recharts";

import dataMotor from "./dataBarco"

class AreaChartComponent extends React.Component {
   COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

render() {
   return (
    <AreaChart width={730} height={250} data={dataMotor["Potencia"]}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="Potencia Gerada" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="Potencia Consumida" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>

      );
   }
}

export default AreaChartComponent

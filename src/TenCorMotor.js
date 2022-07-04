import React from "react";
import { AreaChart , Area, XAxis, Tooltip, YAxis, CartesianGrid } from "recharts";

import dataMotor from "./dataBarco";

class AreaChartComponent extends React.Component {

render() {
   return (
    <AreaChart width={730} height={250} data={dataMotor["Motor"]}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorMotCor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorMotTen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FFBB28" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="##FFBB28" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis axisLine={false} dataKey="name" />
      <YAxis axisLine={false}/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="Tensão" stroke="#FFBB28" fillOpacity={1} fill="url(#colorMotTen)" />
      <Area type="monotone" dataKey="Corrente" stroke="#82ca9d" fillOpacity={1} fill="url(#colorMotCor)" />
    </AreaChart>
      );
   }
}

export default AreaChartComponent

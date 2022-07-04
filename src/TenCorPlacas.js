import React from "react";
import { AreaChart , Area, XAxis, Tooltip, YAxis, CartesianGrid } from "recharts";

import dataMotor from "./dataBarco";

class AreaChartComponent extends React.Component {
   COLORS = ["#00bfff", "#FFD700", "#00bfff", "#FF8042", "#AF19FF"];

render() {
   return (
    <AreaChart width={730} height={250} data={dataMotor["Placas"]}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorPSCor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPSTen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#00bfff" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="##00bfff" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="Tensão" stroke="#00bfff" fillOpacity={1} fill="url(#colorPSTen)" />
      <Area type="monotone" dataKey="Corrente" stroke="#FFA500" fillOpacity={1} fill="url(#colorPSCor)" />
    </AreaChart>
      );
   }
}

export default AreaChartComponent

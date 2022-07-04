const dataBarco = 
  {
    "Motor": [],
    "Placas": [],
    "Temperatura": [],
    "Potencia": []
  }

for (let index = 0; index < 20; index++) {
  const element = {};
  element["Tensão"] = 44 + Math.floor(Math.random() * 7); 
  element["Corrente"] = 10 + Math.floor(Math.random() * 12);
  element["Potencia"] = element["Tensão"]*element["Corrente"]; 
  dataBarco["Motor"].push(element);

  const elem = {};
  elem["Tensão"] = 28 + Math.floor(Math.random() * 4);
  elem["Corrente"] = 15 + Math.floor(Math.random() * 5);
  elem["Potencia"] = elem["Tensão"]*elem["Corrente"]; 
  dataBarco["Placas"].push(elem);

  const elemp = {};
  elemp["Potencia Gerada"] = elem["Tensão"]*elem["Corrente"];
  elemp["Potencia Consumida"] = element["Tensão"]*element["Corrente"];
  dataBarco["Potencia"].push(elemp)


  const e = {};
  e["temp"] = 25 + Math.floor(Math.random() * 15);
  dataBarco["Temperatura"].push(e);
  };

export default dataBarco
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import Sliderbarinfo from "./Sliderbarinfo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pichart from "./Pichart";

Chart.register(CategoryScale);

const Dashbord = () => {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(600);
  const [loanamount, setLoanamount] = useState(2400);
  const [intrest, setIntrest] = useState(5);
  const [year, setYear] = React.useState(5);
  // const [totalintrest setTotalintrest]= useState(0)

  const [chartData, setChartData] = useState({
    labels: ['Principal, intrest'], 
    datasets: [
      {
        label: "Montly Payment ",
        data:[homeValue,352],
        backgroundColor: [
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

// concept of slider
  useEffect(() => {
    // calculating downPayment
    // const down = homeValue * 0.2;
    // setDownPayment(down);
    // // loan
    // const loan = homeValue * 0.8;
    // setLoanamount(loan);
    

  }, [homeValue, downPayment, loanamount]);

  

// emi concept 
// useEffect(()=>{
//   let totalloan = year*12
//   let intrrestpermonth = intrest/100/12
//   let emi = (homeValue * intrrestpermonth*(1+intrrestpermonth)**totalloan)/((1+intrrestpermonth)**totalloan-1)
//   console.log(emi);
//   let totalintrestss = emi * year*12
//   setTotalintrest(totalintrestss)
   
// },[homeValue ,intrest,year])



  return (
    <div className="flex">
      <div className="w-[50%] p-8">
        <Sliderbarinfo
          min={1000}
          max={10000}
          symbol={"$"}
          title={"Home Value"}
          value={homeValue}
          Rate={setHomeValue}
          steps={100}
        />
        <Sliderbarinfo
          min={0}
          max={homeValue}
          symbol={"$"}
          title={"Down Payment"}
          value={downPayment}
          Rate={setDownPayment}
          steps={10}
        />
        <Sliderbarinfo
          min={0}
          max={homeValue}
          symbol={"$"}
          title={"Loan Amount "}
          value={loanamount}
          Rate={setLoanamount}
          steps={100}
        />
        <Sliderbarinfo
          min={2}
          max={18}
          symbol={"%"}
          title={"Interest Rate"}
          value={intrest}
          Rate={setIntrest}
          steps={1}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="year"
            onChange={(event)=>setYear(event.target.value)}
          >
            <MenuItem value={5}>5 Year</MenuItem>
            <MenuItem value={10}>10 Year</MenuItem>
            <MenuItem value={15}>15 Year</MenuItem>
            <MenuItem value={20}>20 Year</MenuItem>
            <MenuItem value={25}>25 Year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-[50%] p-8">
        <Pichart chartData={chartData} />
      </div>
    </div>
  );
};

export default Dashbord;

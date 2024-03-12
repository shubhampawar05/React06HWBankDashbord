import React from "react";
import Slider from "@mui/material/Slider";

const Sliderbarinfo = ({
  title,
  min,
  max,
  symbol,
  value,
  Rate,
  setHomeValue,
  id,
  changehandlre,
  steps=10
}) => {
  return (
    <>
      <div className="py-2">
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p className="text-xl font-semibold ">
            {symbol }
            {value}
          </p>
        </div>
        <div>
          <Slider
            aria-label="Small steps"
            defaultValue={value}
            step={steps}
            marks
            min={min}
            max={max}
            value={value}
            valueLabelDisplay="auto"
            onChange={(e) => {
             
              changehandlre(id , e.target.value)
              // Rate((prev)=>( prev =e.target.value));

            }}
          />
        </div>
        <div className="flex justify-between text-[12px]">
          <span>{min}</span> <span>{max}</span>
        </div>
      </div>
    </>
  );
};

export default Sliderbarinfo;

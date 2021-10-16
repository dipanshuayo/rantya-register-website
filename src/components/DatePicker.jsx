import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import AccentButton from "./AccentButton";
const DatePicker = ({ dateShow, toggleDateShow }) => {
  const [date, setDate] = useState(new Date());
  const onNextClicked = () => {
    console.log("next ");
    toggleDateShow(false);
  };
  return (
    <div>
      {dateShow ? (
        <div>
          <div className="flex justify-center bg-center">
            <Calendar
              color="#b50921"
              date={date}
              onChange={setDate}
              maxDate={new Date()}
            />
            ;
          </div>
          <AccentButton name="Next" onClick={onNextClicked} />
        </div>
      ) : <div></div>}
    </div>
  );
};

export default DatePicker;

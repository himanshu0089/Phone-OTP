import React, { useEffect } from "react";
import { useState, useRef } from "react";
import App from "../App";

const OtpInput = ({ length = 4, onOtpSubmit}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputrefs = useRef([]);

  useEffect(() => {
    if (inputrefs.current[0]) {
      inputrefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    console.log(newOtp);
    // allow only one input
    newOtp[index] = value.substring(value.length-1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    console.log(newOtp, combinedOtp)
    if(combinedOtp.length===length)
    onOtpSubmit(combinedOtp)

    // Move to next input if current field is filled
    if(value && index<length-1 && inputrefs.current[index+1]){
      inputrefs.current[index+1].focus()
    }
  };

  const handleClick = (index) => {
        inputrefs.current[index].setSelectionRange(1,1)
        if(index>0 && !otp[index-1]){
          inputrefs.current[otp.indexOf("")].focus()
        }
  };
  const handleKeyDown = (e, index) => {
    // Move focus to the previous input field on backSpace
    if(
    e.key==="Backspace" &&
    !otp[index] &&
    index > 0 &&
    inputrefs.current[index-1]
    ) 
    {
      inputrefs.current[index-1].focus()
    }
  };
 
  // console.log(inputrefs);
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            className="otpInput"
            type="text"
            key={index}
            // value={value}
            ref={(input) => (inputrefs.current[index] = input)}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;

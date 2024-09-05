import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onOtpSubmit=(otp)=>{
    console.log("Login Successful",otp)
  }
  const handlePhoneSubmit = (e) => {
  //  console.log(5);
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Number");
      return;
    } else {
      setShowOtp(true);
    }
  };
  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="Number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          < OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
}

export default PhoneOtpForm;

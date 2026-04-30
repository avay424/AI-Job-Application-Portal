import React, { useState } from "react";

const Otp = () => {
    const [otp, setOtp] = useState("");

    return (
        <div>
            <h1>Otp</h1>
            <input
            type="text"
            placeholder="Enter Otp"
            />
        </div>
    );
};

export default Otp;
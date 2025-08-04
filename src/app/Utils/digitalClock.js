// utils/digitalClock.js
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };

    tick(); // Initial tick

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    if (!date) return "";

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return <div>{time ? formatTime(time) : ""}</div>;
};

export default DigitalClock;

import React, { useState, useEffect } from 'react';
import './clock.css';
import Clock from './Clock';

const ClockComponent = () => {
  const [secondRatio, setSecondRatio] = useState(0);
  const [minuteRatio, setMinuteRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const setClock = () => {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setSecondRatio(secondRatio);
    setMinuteRatio(minuteRatio);
    setHourRatio(hourRatio);
  };

  return <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} />;
};

export default ClockComponent;

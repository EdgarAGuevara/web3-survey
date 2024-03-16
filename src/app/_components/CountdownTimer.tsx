import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from '@mui/material';

interface CountdownTimerProps {
  initialCount: number;
  notify: any;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialCount, notify }) => {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    if (count == 0) {
      notify();
    }
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Typography variant="h6" component="div">
      {count >= 0 ? count : 0} sec
    </Typography>
  );
};

export default CountdownTimer;

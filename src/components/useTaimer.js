
import { useEffect, useRef, useState } from "react";

export const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  const restart = (newTime = initialTime) => {
    clearInterval(intervalRef.current);
    setTime(newTime);
    start();
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { time, start, stop, restart };
};

export default useTimer;

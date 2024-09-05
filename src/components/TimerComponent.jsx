import React from "react";
import styled from "styled-components";
import useTimer from "./useTaimer";

// Стили для контейнера таймера
const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border: 2px solid #007bff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Стили для отображения времени
const TimeDisplay = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

// Стили для кнопок
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

const TimerComponent = () => {
  const { time, start, stop, restart } = useTimer(60); // 1 минута = 60 секунд

  return (
    <TimerWrapper>
      <TimeDisplay>{time} секунд</TimeDisplay>
      <div>
        <StyledButton onClick={start}>Start</StyledButton>
        <StyledButton onClick={stop}>Stop</StyledButton>
        <StyledButton onClick={() => restart(120)}>Restart to 2 minutes</StyledButton>
      </div>
    </TimerWrapper>
  );
};

export default TimerComponent;


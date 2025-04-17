// components/Timer.tsx
import { styles } from '@/constants/styles';
import React from 'react';
import { Text } from 'react-native';

type TimerProps = {
  position: number;
  formatTime: (millis: number) => string;
};

export const Timer: React.FC<TimerProps> = ({ position, formatTime }) => (
  <Text style={styles.timer}>{formatTime(position)}</Text>
);

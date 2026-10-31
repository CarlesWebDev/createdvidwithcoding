import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { THEME } from '../data/scenes';

export const StrikeThrough: React.FC<{
  text: string;
  delay?: number;
  color?: string;
}> = ({ text, delay = 30, color = THEME.danger }) => {
  const frame = useCurrentFrame();
  const widthPercent = interpolate(frame - delay, [0, 18], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {text}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: '52%',
          height: 8,
          width: `${widthPercent}%`,
          backgroundColor: color,
          borderRadius: 4,
          transform: 'translateY(-50%) rotate(-1.5deg)',
        }}
      />
    </span>
  );
};
import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const Typewriter: React.FC<{
  text: string;
  delay?: number;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ text, delay = 0, speed = 1.5, style }) => {
  const frame = useCurrentFrame();
  const activeFrame = Math.max(0, frame - delay);

  const charsToShow = Math.floor(
    interpolate(
      activeFrame,
      [0, text.length * speed],
      [0, text.length],
      { extrapolateRight: 'clamp' }
    )
  );

  const showCursor = activeFrame % 16 < 8;

  return (
    <span style={style}>
      {text.slice(0, charsToShow)}
      <span style={{ opacity: showCursor ? 1 : 0, color: '#10B981' }}>▋</span>
    </span>
  );
};
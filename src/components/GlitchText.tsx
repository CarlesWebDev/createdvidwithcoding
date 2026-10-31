import React from 'react';
import { useCurrentFrame } from 'remotion';

export const GlitchText: React.FC<{
  text: string;
  accent?: string;
  style?: React.CSSProperties;
}> = ({ text, accent = '#10B981', style }) => {
  const frame = useCurrentFrame();

  const isGlitching =
    (frame > 10 && frame < 16) ||
    (frame > 45 && frame < 49) ||
    (frame > 85 && frame < 88);

  const offsetX = isGlitching ? ((frame * 7) % 10) - 5 : 0;
  const offsetY = isGlitching ? ((frame * 3) % 6) - 3 : 0;

  return (
    <div style={{ position: 'relative', display: 'inline-block', ...style }}>
      {isGlitching && (
        <>
          <span
            style={{
              position: 'absolute',
              top: offsetY,
              left: offsetX - 4,
              color: accent,
              opacity: 0.75,
              clipPath: 'inset(15% 0 45% 0)',
            }}
          >
            {text}
          </span>
          <span
            style={{
              position: 'absolute',
              top: -offsetY,
              left: -offsetX + 4,
              color: '#EF4444',
              opacity: 0.75,
              clipPath: 'inset(55% 0 10% 0)',
            }}
          >
            {text}
          </span>
        </>
      )}
      <span style={{ position: 'relative' }}>{text}</span>
    </div>
  );
};
import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { SCENES, THEME } from '../data/scenes';
import { GlitchText } from '../components/GlitchText';
import { SlideUp } from '../components/SlideUp';

export const Hook: React.FC = () => {
  const scene = SCENES.hook;
  const { width, height } = useVideoConfig();
  const isVertical = height > width;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.bg,
        justifyContent: 'center',
        padding: isVertical ? '0 100px 180px 80px' : '0 180px',
      }}
    >
      <SlideUp>
        <div
          style={{
            fontFamily: THEME.fontMono,
            color: scene.accent,
            fontSize: 28,
            marginBottom: 20,
          }}
        >
        </div>
        <GlitchText
          text={scene.lines[0]}
          accent={scene.accent}
          style={{
            fontFamily: THEME.fontSans,
            fontSize: isVertical ? 76 : 68,
            fontWeight: 800,
            color: THEME.text,
            lineHeight: 1.15,
          }}
        />
      </SlideUp>
    </AbsoluteFill>
  );
};
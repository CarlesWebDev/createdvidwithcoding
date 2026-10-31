import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { SCENES, THEME } from '../data/scenes';
import { SlideUp } from '../components/SlideUp';
import { StrikeThrough } from '../components/StrikeThrough';

export const Twist: React.FC = () => {
  const scene = SCENES.twist;
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
      <SlideUp delay={0}>
        <div
          style={{
            fontFamily: THEME.fontSans,
            fontSize: isVertical ? 60 : 54,
            fontWeight: 700,
            color: THEME.muted,
            marginBottom: 36,
            lineHeight: 1.25,
          }}
        >
          <StrikeThrough text={scene.lines[0]} delay={45} />
        </div>
      </SlideUp>

      <SlideUp delay={80}>
        <div
          style={{
            fontFamily: THEME.fontSans,
            fontSize: isVertical ? 72 : 64,
            fontWeight: 800,
            color: scene.accent,
            lineHeight: 1.2,
          }}
        >
          {scene.lines[1]}
        </div>
      </SlideUp>
    </AbsoluteFill>
  );
};
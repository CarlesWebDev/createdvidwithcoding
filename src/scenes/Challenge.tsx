import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { SCENES, THEME } from '../data/scenes';
import { Typewriter } from '../components/Typewriter';
import { SlideUp } from '../components/SlideUp';

export const Challenge: React.FC = () => {
  const scene = SCENES.challenge;
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
            backgroundColor: THEME.surface,
            border: '2px solid #262B3D',
            borderRadius: 20,
            padding: 40,
          }}
        >
          <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#EF4444' }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#F59E0B' }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#10B981' }} />
          </div>
          <div
            style={{
              fontFamily: THEME.fontMono,
              fontSize: isVertical ? 46 : 42,
              color: THEME.text,
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: scene.accent, marginRight: 16 }}>$</span>
            <Typewriter text={scene.lines[0]} delay={10} speed={1.5} />
          </div>
        </div>
      </SlideUp>
    </AbsoluteFill>
  );
};
import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { SCENES, THEME } from '../data/scenes';
import { SlideUp } from '../components/SlideUp';

const ICONS = ['💼', '🚨', '🎯', '🗣️'];

export const Missing: React.FC = () => {
  const scene = SCENES.missing;
  const [title, ...points] = scene.lines;
  const { width, height } = useVideoConfig();
  const isVertical = height > width;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.bg,
        justifyContent: 'center',
        padding: isVertical ? '0 100px 180px 80px' : '0 160px',
      }}
    >
      <SlideUp delay={0}>
        <div
          style={{
            fontFamily: THEME.fontSans,
            fontSize: isVertical ? 52 : 46,
            fontWeight: 800,
            color: THEME.text,
            marginBottom: 44,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
      </SlideUp>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {points.map((point, index) => (
          <SlideUp key={index} delay={45 + index * 65}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                backgroundColor: THEME.surface,
                borderLeft: `6px solid ${scene.accent}`,
                borderRadius: 16,
                padding: '22px 28px',
              }}
            >
              <span style={{ fontSize: 38 }}>{ICONS[index] || '⚡'}</span>
              <span
                style={{
                  fontFamily: THEME.fontSans,
                  fontSize: isVertical ? 34 : 30,
                  fontWeight: 600,
                  color: THEME.text,
                  lineHeight: 1.3,
                }}
              >
                {point}
              </span>
            </div>
          </SlideUp>
        ))}
      </div>
    </AbsoluteFill>
  );
};
import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { BRAND, SCENES, THEME } from '../data/scenes';
import { SlideUp } from '../components/SlideUp';
import { FadeIn } from '../components/FadeIn';

export const Cta: React.FC = () => {
  const scene = SCENES.cta;
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
            fontSize: isVertical ? 56 : 48,
            fontWeight: 700,
            color: THEME.muted,
            marginBottom: 12,
          }}
        >
          {scene.lines[0]}
        </div>
        <div
          style={{
            fontFamily: THEME.fontSans,
            fontSize: isVertical ? 72 : 64,
            fontWeight: 800,
            color: THEME.text,
            lineHeight: 1.15,
            marginBottom: 64,
          }}
        >
          {scene.lines[1]}
        </div>
      </SlideUp>

      <FadeIn delay={35}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            borderTop: '2px solid #262B3D',
            paddingTop: 36,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              backgroundColor: scene.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: THEME.fontMono,
              fontSize: 36,
              fontWeight: 900,
              color: THEME.bg,
            }}
          >
            {'</>'}
          </div>
          <div>
            <div
              style={{
                fontFamily: THEME.fontSans,
                fontSize: 36,
                fontWeight: 800,
                color: THEME.text,
              }}
            >
              {BRAND.name}
            </div>
            <div
              style={{
                fontFamily: THEME.fontMono,
                fontSize: 26,
                color: scene.accent,
                marginTop: 4,
              }}
            >
              {BRAND.handle} • {BRAND.website}
            </div>
          </div>
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};
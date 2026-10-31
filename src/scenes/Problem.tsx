import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { SCENES, THEME } from '../data/scenes';
import { ChatBubble } from '../components/ChatBubble';
import { FadeIn } from '../components/FadeIn';

export const Problem: React.FC = () => {
  const scene = SCENES.problem;
  const frame = useCurrentFrame();
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
      <ChatBubble sender="Klien" text={scene.lines[0]} delay={10} />
      <ChatBubble sender="Klien" text={scene.lines[1]} delay={85} />

      {frame >= 150 && frame < 230 && (
        <FadeIn delay={150}>
          <div
            style={{
              fontFamily: THEME.fontMono,
              fontSize: 30,
              color: THEME.muted,
              marginTop: 16,
            }}
          >
            ⏳ {scene.lines[2]}
          </div>
        </FadeIn>
      )}

      {frame >= 230 && (
        <ChatBubble
          sender="AI_Agent_v4"
          text={scene.lines[3]}
          delay={230}
          isError
        />
      )}
    </AbsoluteFill>
  );
};
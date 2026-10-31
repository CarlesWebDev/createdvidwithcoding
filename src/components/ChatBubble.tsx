import React from 'react';
import { SlideUp } from './SlideUp';
import { THEME } from '../data/scenes';

export const ChatBubble: React.FC<{
  sender: string;
  text: string;
  delay?: number;
  isError?: boolean;
}> = ({ sender, text, delay = 0, isError = false }) => {
  return (
    <SlideUp delay={delay}>
      <div
        style={{
          backgroundColor: isError ? '#2A1215' : THEME.surface,
          border: `2px solid ${isError ? THEME.danger : '#262B3D'}`,
          borderRadius: 20,
          padding: '24px 30px',
          marginBottom: 24,
          maxWidth: '92%',
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontFamily: THEME.fontMono,
            color: isError ? THEME.danger : THEME.accent,
            marginBottom: 8,
            fontWeight: 700,
          }}
        >
          {sender}
        </div>
        <div
          style={{
            fontSize: 34,
            fontFamily: isError ? THEME.fontMono : THEME.fontSans,
            color: THEME.text,
            lineHeight: 1.35,
          }}
        >
          {text}
        </div>
      </div>
    </SlideUp>
  );
};
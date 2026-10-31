import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { THEME } from '../data/scenes';

export type SubtitleSegment = {
  startSec: number;
  endSec: number;
  text: string;
};

const SUBTITLES: SubtitleSegment[] = [
  { startSec: 0.2, endSec: 3.8, text: 'Katanya AI bakal gantiin programmer.' },

  { startSec: 4.2, endSec: 8.5, text: 'Oke, coba suruh AI ngerjain ini.' },

  { startSec: 9.3, endSec: 13.5, text: '"Bikinin web, pokoknya keren, kayak punya temen gue."' },
  { startSec: 13.6, endSec: 16.2, text: '"Revisi dikit ya."' },
  { startSec: 16.5, endSec: 20.5, text: 'AI langsung bingung dan error!' },

  { startSec: 21.2, endSec: 23.8, text: 'AI bisa nulis kode. Tapi dia nggak tau:' },
  { startSec: 23.9, endSec: 26.2, text: 'Bisnis klien jalan gimana,' },
  { startSec: 26.3, endSec: 28.8, text: 'siapa yang tanggung jawab pas error di production,' },
  { startSec: 28.9, endSec: 30.8, text: 'kenapa fitur ini harus ada,' },
  { startSec: 30.9, endSec: 32.8, text: 'dan gimana ngomong sama manusia.' },

  { startSec: 33.2, endSec: 36.4, text: 'Yang kegantiin itu bukan programmer.' },
  { startSec: 36.5, endSec: 39.7, text: 'Tapi yang cuma bisa copy-paste.' },

  { startSec: 40.2, endSec: 42.2, text: 'AI itu alat.' },
  { startSec: 42.3, endSec: 44.8, text: 'Programmer yang megang kendali.' },
];

export const SubtitleOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const currentTime = frame / fps;
  const isVertical = height > width;

  const activeSub = SUBTITLES.find(
    (s) => currentTime >= s.startSec && currentTime <= s.endSec
  );

  if (!activeSub) return null;

  const words = activeSub.text.split(' ');
  const progress =
    (currentTime - activeSub.startSec) / (activeSub.endSec - activeSub.startSec);
  const activeWordIndex = Math.floor(progress * words.length);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: isVertical ? 220 : 70, 
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(9, 10, 15, 0.88)',
          border: `2px solid ${THEME.accent}`,
          borderRadius: 16,
          padding: '16px 28px',
          maxWidth: isVertical ? '84%' : '70%',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
        }}
      >
        <div
          style={{
            fontFamily: THEME.fontSans,
            fontSize: isVertical ? 36 : 30,
            fontWeight: 800,
            lineHeight: 1.35,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {words.map((word, idx) => {
            const isHighlighted = idx === activeWordIndex;
            return (
              <span
                key={idx}
                style={{
                  color: isHighlighted ? THEME.bg : THEME.text,
                  backgroundColor: isHighlighted ? THEME.accent : 'transparent',
                  padding: '2px 8px',
                  borderRadius: 8,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
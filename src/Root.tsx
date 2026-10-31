import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Composition,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from 'remotion';
import { SCENES } from './data/scenes';
import { Hook } from './scenes/Hook';
import { Challenge } from './scenes/Challenge';
import { Problem } from './scenes/Problem';
import { Missing } from './scenes/Missing';
import { Twist } from './scenes/Twist';
import { Cta } from './scenes/Cta';
import { SubtitleOverlay } from './components/SubtitleOverlay';

export const Main: React.FC = () => {
  const { fps } = useVideoConfig();

  const dHook = SCENES.hook.durationInSeconds * fps;           
  const dChallenge = SCENES.challenge.durationInSeconds * fps; 
  const dProblem = SCENES.problem.durationInSeconds * fps;     
  const dMissing = SCENES.missing.durationInSeconds * fps;     
  const dTwist = SCENES.twist.durationInSeconds * fps;         
  const dCta = SCENES.cta.durationInSeconds * fps;            
  const sChallenge = dHook;
  const sProblem = sChallenge + dChallenge;
  const sMissing = sProblem + dProblem;
  const sTwist = sMissing + dMissing;
  const sCta = sTwist + dTwist;

  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence durationInFrames={dHook}>
          <Hook />
        </Series.Sequence>
        <Series.Sequence durationInFrames={dChallenge}>
          <Challenge />
        </Series.Sequence>
        <Series.Sequence durationInFrames={dProblem}>
          <Problem />
        </Series.Sequence>
        <Series.Sequence durationInFrames={dMissing}>
          <Missing />
        </Series.Sequence>
        <Series.Sequence durationInFrames={dTwist}>
          <Twist />
        </Series.Sequence>
        <Series.Sequence durationInFrames={dCta}>
          <Cta />
        </Series.Sequence>
      </Series>

         <SubtitleOverlay />

     
      <Audio src={staticFile('audio/bgm.wav')} volume={0.22} />

      <Sequence from={sChallenge + 10} durationInFrames={90}>
        <Audio src={staticFile('audio/typing.wav')} volume={0.5} />
      </Sequence>

      {[sChallenge, sProblem, sMissing, sTwist, sCta].map((startFrame, idx) => (
        <Sequence key={idx} from={startFrame} durationInFrames={30}>
          <Audio src={staticFile('audio/whoosh.wav')} volume={0.45} />
        </Sequence>
      ))}

      <Sequence from={5}>
        <Audio src={staticFile('audio/vo-hook.mp3')} volume={1} />
      </Sequence>
      <Sequence from={sChallenge + 5}>
        <Audio src={staticFile('audio/vo-challenge.mp3')} volume={1} />
      </Sequence>
      <Sequence from={sProblem + 5}>
        <Audio src={staticFile('audio/vo-problem.mp3')} volume={1} />
      </Sequence>
      <Sequence from={sMissing + 5}>
        <Audio src={staticFile('audio/vo-missing.mp3')} volume={1} />
      </Sequence>
      <Sequence from={sTwist + 5}>
        <Audio src={staticFile('audio/vo-twist.mp3')} volume={1} />
      </Sequence>
      <Sequence from={sCta + 5}>
        <Audio src={staticFile('audio/vo-cta.mp3')} volume={1} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  const totalDurationInFrames = Object.values(SCENES).reduce(
    (acc, scene) => acc + scene.durationInSeconds * fps,
    0
  );

  return (
    <>
      <Composition
        id="Promo-Vertical"
        component={Main}
        durationInFrames={totalDurationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      <Composition
        id="Promo-Landscape"
        component={Main}
        durationInFrames={totalDurationInFrames}
        fps={fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
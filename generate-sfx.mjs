import fs from "fs";
import path from "path";

const outDir = path.resolve("./public/audio");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function writeWav(filename, samples, sampleRate = 44100) {
  const buffer = Buffer.alloc(44 + samples.length * 2);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + samples.length * 2, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(samples.length * 2, 40);

  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(s < 0 ? s * 0x8000 : s * 0x7fff, 44 + i * 2);
  }
  fs.writeFileSync(path.join(outDir, filename), buffer);
  console.log(`🎵 Berhasil dibuat: public/audio/${filename}`);
}

const sr = 44100;

// 1. Efek Whoosh Transisi
const whooshSamples = new Float32Array(sr * 0.45);
for (let i = 0; i < whooshSamples.length; i++) {
  const t = i / sr;
  const env = Math.sin((Math.PI * i) / whooshSamples.length);
  const noise = Math.random() * 2 - 1;
  const tone = Math.sin(2 * Math.PI * (180 + t * 500) * t);
  whooshSamples[i] = (noise * 0.35 + tone * 0.4) * env * 0.5;
}
writeWav("whoosh.wav", whooshSamples);

const typingSamples = new Float32Array(sr * 3);
for (let i = 0; i < typingSamples.length; i++) {
  const t = i / sr;
  const step = t % 0.11;
  if (step < 0.015) {
    const env = Math.exp(-step * 250);
    typingSamples[i] = (Math.random() * 2 - 1) * env * 0.6;
  }
}
writeWav("typing.wav", typingSamples);

const bgmSamples = new Float32Array(sr * 45);
for (let i = 0; i < bgmSamples.length; i++) {
  const t = i / sr;
  const beat = (t * 2) % 1;
  const env = Math.exp(-beat * 6);
  const baseFreq = t >= 33 ? 65.41 : 55.0; // C2 vs A1
  const bass = Math.sin(2 * Math.PI * baseFreq * t) * env * 0.35;
  const pad = Math.sin(2 * Math.PI * (baseFreq * 2) * t) * 0.08;
  bgmSamples[i] = bass + pad;
}
writeWav("bgm.wav", bgmSamples);

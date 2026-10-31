import { EdgeTTS } from 'node-edge-tts';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('./public/audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}


const tts = new EdgeTTS({
  voice: 'id-ID-ArdiNeural',
  lang: 'id-ID',
  outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
  rate: '+12%', 
});

const VO_SCRIPTS = [
  {
    id: 'vo-hook',
    text: 'Katanya AI bakal gantiin programmer.',
  },
  {
    id: 'vo-challenge',
    text: 'Oke, coba suruh AI ngerjain ini.',
  },
  {
    id: 'vo-problem',
    text: 'Kata klien: Bikinin web, pokoknya keren, kayak punya temen gue. Revisi dikit ya. AI langsung bingung dan error!',
  },
  {
    id: 'vo-missing',
    text: 'AI bisa nulis kode. Tapi dia nggak tau: bisnis klien jalan gimana, siapa yang tanggung jawab pas error di production, kenapa fitur ini harus ada, dan gimana ngomong sama manusia.',
  },
  {
    id: 'vo-twist',
    text: 'Yang kegantiin itu bukan programmer. Tapi yang cuma bisa copy paste.',
  },
  {
    id: 'vo-cta',
    text: 'AI itu alat. Programmer yang megang kendali.',
  },
];

async function run() {
  console.log('Mulai men-generate suara AI Bahasa Indonesia...');
  for (const item of VO_SCRIPTS) {
    const filePath = path.join(outDir, `${item.id}.mp3`);
    await tts.ttsPromise(item.text, filePath);
    console.log(` Berhasil dibuat: public/audio/${item.id}.mp3`);
  }
  console.log(' Semua file suara selesai dibuat!');
}

run();
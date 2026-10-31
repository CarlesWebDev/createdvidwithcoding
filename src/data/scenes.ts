export type Scene = {
  id: string;
  durationInSeconds: number;
  lines: string[];
  accent?: string;
};

export const THEME = {
  bg: '#090A0F',
  surface: '#12151E',
  text: '#F8FAFC',
  muted: '#94A3B8',
  accent: '#10B981', 
  danger: '#EF4444',
  fontSans: 'Inter, system-ui, -apple-system, sans-serif',
  fontMono: '"JetBrains Mono", "Fira Code", monospace',
};

export const BRAND = {
  name: 'Corelev Digital',
  handle: '@corelev.digital',
  website: 'corelevdigital.web.id',
};

export const SCENES: Record<string, Scene> = {
  hook: {
    id: 'hook',
    durationInSeconds: 4,
    lines: ['Katanya AI bakal gantiin programmer.'],
    accent: THEME.accent,
  },
  challenge: {
    id: 'challenge',
    durationInSeconds: 5, 
    lines: ['Oke, coba suruh AI ngerjain ini.'],
    accent: THEME.accent,
  },
  problem: {
    id: 'problem',
    durationInSeconds: 12, 
    lines: [
      'Bikinin web, pokoknya keren, kayak punya temen gue.',
      'Revisi dikit ya.',
      'Analyzing client_requirements.txt...',
      'FATAL ERROR: "pokoknya keren" is undefined (ContextNotFound)',
    ],
    accent: THEME.danger,
  },
  missing: {
    id: 'missing',
    durationInSeconds: 12,
    lines: [
      'AI bisa nulis kode. Tapi dia nggak tau:',
      'Bisnis klien lo jalan gimana',
      'Siapa yang tanggung jawab pas error di production',
      'Kenapa fitur ini harus ada, dan yang itu jangan',
      'Gimana ngomong sama manusia yang maunya berubah-ubah',
    ],
    accent: THEME.accent,
  },
  twist: {
    id: 'twist',
    durationInSeconds: 7,
    lines: [
      'Yang kegantiin itu programmer.',
      'Tapi yang cuma bisa copy-paste.',
    ],
    accent: THEME.accent,
  },
  cta: {
    id: 'cta',
    durationInSeconds: 5, 
    lines: ['AI itu alat.', 'Programmer yang megang kendali.'],
    accent: THEME.accent,
  },
};
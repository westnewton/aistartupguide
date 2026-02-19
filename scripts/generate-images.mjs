import sharp from 'sharp';

// ─── Apple Touch Icon (180x180) ───
const appleIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#1a1a1a"/>
  <text x="32" y="122" font-family="Georgia, 'Times New Roman', serif" font-size="108" font-weight="bold" fill="#faf8f5">A</text>
  <text x="92" y="122" font-family="Georgia, 'Times New Roman', serif" font-size="108" font-weight="bold" fill="#c45d3e">i</text>
</svg>
`;

await sharp(Buffer.from(appleIcon))
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('Created public/apple-touch-icon.png (180x180)');

// ─── OG Image (1200x630) ───
const ogImage = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#2a2520"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#c45d3e" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#c45d3e" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Top accent bar -->
  <rect width="1200" height="4" fill="#c45d3e"/>

  <!-- Logo -->
  <text x="80" y="108" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="bold" fill="#faf8f5" letter-spacing="-0.5">AI</text>
  <text x="113" y="108" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="bold" fill="#c45d3e" letter-spacing="-0.5">Startup</text>
  <text x="207" y="108" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="bold" fill="#faf8f5" letter-spacing="-0.5">Guide</text>

  <!-- Headline -->
  <text x="80" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="bold" fill="#faf8f5" letter-spacing="-1.5">Find the Right</text>
  <text x="80" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-style="italic" fill="#c45d3e" letter-spacing="-1.5">AI Tools</text>
  <text x="340" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="bold" fill="#faf8f5" letter-spacing="-1.5"> for Your</text>
  <text x="80" y="410" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="bold" fill="#faf8f5" letter-spacing="-1.5">Business</text>

  <!-- Subtext -->
  <text x="80" y="475" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#7a7568">120+ hand-tested tools across 8 industries.</text>
  <text x="80" y="505" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#7a7568">Independent reviews, real pricing, plain English.</text>

  <!-- Stats row -->
  <rect x="80" y="545" width="1040" height="1" fill="#3a3530" opacity="0.5"/>

  <text x="80" y="585" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-weight="bold" fill="#faf8f5">120+</text>
  <text x="140" y="585" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#7a7568">Tools Reviewed</text>

  <rect x="330" y="565" width="1" height="30" fill="#3a3530"/>

  <text x="360" y="585" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-weight="bold" fill="#faf8f5">8</text>
  <text x="382" y="585" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#7a7568">Industries</text>

  <rect x="510" y="565" width="1" height="30" fill="#3a3530"/>

  <text x="540" y="585" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-weight="bold" fill="#faf8f5">100%</text>
  <text x="612" y="585" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#7a7568">Independent</text>

  <!-- Domain -->
  <text x="1120" y="585" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#7a7568" text-anchor="end">aistartupguide.com</text>

  <!-- Decorative card outlines on the right -->
  <rect x="850" y="120" width="280" height="160" rx="12" fill="none" stroke="#3a3530" stroke-width="1" opacity="0.4"/>
  <rect x="870" y="140" width="280" height="160" rx="12" fill="none" stroke="#3a3530" stroke-width="1" opacity="0.25"/>
  <rect x="890" y="160" width="280" height="160" rx="12" fill="none" stroke="#3a3530" stroke-width="1" opacity="0.15"/>
</svg>
`;

await sharp(Buffer.from(ogImage))
  .png()
  .toFile('public/og-image.png');

console.log('Created public/og-image.png (1200x630)');

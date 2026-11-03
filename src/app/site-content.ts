// Edit this file to make the workshop your own. Every page reads its copy from here.
// Download buttons stay in a "Coming soon" state until you give them an HTTPS url.

export const site = {
  name: 'AppCraft',
  wordmark: 'APPCRAFT',
  email: 'hello@example.com',
  tagline: 'Capable tools for makers.',
  introduction: 'AppCraft is a workshop of open, native creative tools. Image, vector, film, sound and more, made to run on your own machine.',
  version: '0.1.0',
  launcherUrl: '',
  webUrl: '',
  studioDownloads: { macOS: '', Windows: '', Linux: '' } as Record<Platform, string>,
  // Add profiles as { label: 'GitHub', url: 'https://github.com/you' }. Empty lists are hidden.
  community: [] as { label: string; url: string }[],
};

export type Platform = 'macOS' | 'Windows' | 'Linux';
export type Status = 'Exploring' | 'Prototype' | 'In development' | 'Available';

export interface CraftApp {
  slug: string; prefix: string; kind: string; glyph: string; color: string; status: Status;
  tagline: string; summary: string; platforms: string[];
  highlights: { title: string; text: string }[]; shots: string[];
  downloads?: Partial<Record<Platform, string>>;
}

export const apps: CraftApp[] = [
  { slug: 'pixelcraft', prefix: 'Pixel', kind: 'Image editor', glyph: '◈', color: '#2f7bf5', status: 'Prototype', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'An image editor that feels familiar from the first click.',
    summary: 'Layers, masks, adjustment layers, brushes and type in a fast native canvas. Open files, offline by default, and yours to keep.',
    highlights: [{ title: 'Familiar by design', text: 'Panels, shortcuts and tools where your hands expect them. Productive on day one.' }, { title: 'Non-destructive', text: 'Adjustment layers and live filters you can revisit at any time.' }, { title: 'Serious color', text: '8, 16 and 32-bit documents with proper color management.' }],
    shots: ['Curves on a portrait study', 'Layer styles on live type', 'Masked adjustments'] },
  { slug: 'linecraft', prefix: 'Line', kind: 'Vector illustration', glyph: '✒', color: '#e8573f', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Crisp vector illustration with a pen that behaves.',
    summary: 'Bezier tools, boolean shapes, artboards and symbols for icons, posters and everything in between.',
    highlights: [{ title: 'A better pen', text: 'Draw, adjust and join paths without fighting the handles.' }, { title: 'Live booleans', text: 'Combine shapes and keep every part editable.' }, { title: 'Artboards', text: 'Lay out a whole icon set or campaign on one canvas.' }],
    shots: ['Icon grid on artboards', 'Pen tool, mid-curve', 'Poster in outline mode'] },
  { slug: 'reelcraft', prefix: 'Reel', kind: 'Video editor', glyph: '▶', color: '#8b5cf6', status: 'In development', platforms: ['macOS', 'Windows', 'Linux'],
    tagline: 'Video editing that keeps up with your ideas.',
    summary: 'A multitrack timeline, color tools and proxy workflows in a responsive native editor.',
    highlights: [{ title: 'Magnetic timeline', text: 'Trim, ripple and roll with clips that stay in sync.' }, { title: 'Color pages', text: 'Wheels, curves and scopes for a finished grade.' }, { title: 'Smooth playback', text: 'Proxies and GPU decode keep heavy footage moving.' }],
    shots: ['Multitrack edit', 'Color wheels and scopes', 'Audio sync on the timeline'] },
  { slug: 'lumencraft', prefix: 'Lumen', kind: 'Photo library & raw', glyph: '☼', color: '#f2a516', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'A photo library and raw developer that stays on your disk.',
    summary: 'Import, cull, rate and develop your photos in folders you control. No cloud required.',
    highlights: [{ title: 'Fast culling', text: 'Flag, rate and compare a full shoot in minutes.' }, { title: 'Raw developer', text: 'Exposure, tone and color with non-destructive history.' }, { title: 'Your folders', text: 'The library lives alongside the files you already have.' }],
    shots: ['Grid view of a shoot', 'Develop panel', 'Side-by-side compare'] },
  { slug: 'foliocraft', prefix: 'Folio', kind: 'PDF workbench', glyph: '▤', color: '#12a58a', status: 'Prototype', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Read, organize, combine and secure your PDFs.',
    summary: 'A tidy workbench for documents: annotate, reorder pages, split, merge and sign.',
    highlights: [{ title: 'Page sorter', text: 'Drag pages between documents like cards on a table.' }, { title: 'Annotate', text: 'Highlights, notes and shapes that every reader can see.' }, { title: 'Private by default', text: 'Everything happens locally. Nothing uploads.' }],
    shots: ['Page sorter', 'Annotations', 'Merge and split'] },
  { slug: 'sparkcraft', prefix: 'Spark', kind: 'Motion graphics', glyph: '✦', color: '#e0368f', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Motion graphics with a timeline you can read.',
    summary: 'Keyframes, easing curves, shape layers and effects for titles, loops and explainers.',
    highlights: [{ title: 'Curve editor', text: 'Shape easing visually and copy it between layers.' }, { title: 'Shape layers', text: 'Animated paths, trims and repeaters built in.' }, { title: 'Real-time preview', text: 'See every change play back instantly.' }],
    shots: ['Keyframes on the timeline', 'Easing curves', 'Title sequence'] },
  { slug: 'presscraft', prefix: 'Press', kind: 'Page layout', glyph: '❡', color: '#4c6ef5', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Page layout for zines, books and everything printed.',
    summary: 'Master pages, linked text frames and typographic control for print and screen.',
    highlights: [{ title: 'Linked frames', text: 'Flow long text across pages and columns.' }, { title: 'Master pages', text: 'Set it once, reuse it on every spread.' }, { title: 'Press ready', text: 'Bleeds, marks and color checks before you export.' }],
    shots: ['Magazine spread', 'Master pages', 'Preflight panel'] },
  { slug: 'framecraft', prefix: 'Frame', kind: 'Interface design', glyph: '⌘', color: '#14a3c7', status: 'Prototype', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Interface design and prototyping on one canvas.',
    summary: 'Auto layout, components and clickable prototypes for apps and websites.',
    highlights: [{ title: 'Auto layout', text: 'Frames that resize and reflow like real UI.' }, { title: 'Components', text: 'Variants and overrides that stay in sync.' }, { title: 'Prototype', text: 'Link screens and preview the flow instantly.' }],
    shots: ['Component library', 'Auto layout', 'Prototype flow'] },
  { slug: 'quillcraft', prefix: 'Quill', kind: 'Writing', glyph: '¶', color: '#1f9d55', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'A calm, fast place to write.',
    summary: 'Styles, outlines, comments and clean export for documents of any length.',
    highlights: [{ title: 'Focus mode', text: 'Just you, the sentence and a blinking cursor.' }, { title: 'Outline', text: 'Rearrange whole chapters by dragging headings.' }, { title: 'Clean export', text: 'Documents, PDF and Markdown without surprises.' }],
    shots: ['Focus mode', 'Outline view', 'Comments in the margin'] },
  { slug: 'echocraft', prefix: 'Echo', kind: 'Audio workstation', glyph: '♫', color: '#f26b1d', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Record, edit and mix with low latency.',
    summary: 'Multitrack recording, clip editing, mixing and effects for music and podcasts.',
    highlights: [{ title: 'Low latency', text: 'Monitor and record without the lag.' }, { title: 'Clip editing', text: 'Fades, comping and time-stretching in place.' }, { title: 'Mixer', text: 'Sends, buses and effects with honest meters.' }],
    shots: ['Multitrack session', 'Mixer', 'Waveform editing'] },
  { slug: 'stagecraft', prefix: 'Stage', kind: 'Presentations', glyph: '▣', color: '#7bb51c', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Slides that look designed, without the fuss.',
    summary: 'Layouts, smooth transitions and presenter tools for talks of every size.',
    highlights: [{ title: 'Smart layouts', text: 'Content snaps into balanced, readable slides.' }, { title: 'Magic move', text: 'Objects glide between slides automatically.' }, { title: 'Presenter view', text: 'Notes, timer and next slide at a glance.' }],
    shots: ['Slide sorter', 'Presenter view', 'Transitions'] },
  { slug: 'tallycraft', prefix: 'Tally', kind: 'Spreadsheets', glyph: '▦', color: '#02da96', status: 'Exploring', platforms: ['macOS', 'Windows', 'Linux', 'Web'],
    tagline: 'Spreadsheets that stay fast with big data.',
    summary: 'Formulas, tables, pivots and charts that keep up with millions of rows.',
    highlights: [{ title: 'Big data', text: 'Scroll millions of rows without stutter.' }, { title: 'Pivot tables', text: 'Summarize anything in a couple of drags.' }, { title: 'Charts', text: 'Clear, editable charts straight from a table.' }],
    shots: ['Pivot table', 'Charts', 'Formula bar'] },
];

export const sharedHighlights = [
  { title: 'Runs on your machine', text: 'Native apps that work offline. Your files never need to leave your computer.' },
  { title: 'Open file formats', text: 'Save in formats that other tools can read, today and years from now.' },
  { title: 'One launcher', text: 'Install every craft from one place and keep them all up to date with a click.' },
];

export const studioFeatures = [
  { tag: 'Canvas', title: 'Infinite canvas', text: 'Lay out references, sketches and finals side by side.', art: 'canvas' },
  { tag: '3D scenes', title: '3D scene blocking', text: 'Build scenes with depth before you commit to a frame.', art: 'scene' },
  { tag: 'Compositing', title: 'Layered compositing', text: 'Precise control over every layer in a shot.', art: 'layers' },
  { tag: 'Posing', title: 'Character posing', text: 'Pose mannequins to stage the exact moment you want.', art: 'pose' },
  { tag: 'Mixed assets', title: 'Mixed assets', text: 'Images, vectors, video and sound in one project.', art: 'mixed' },
  { tag: 'Cutouts', title: 'Background removal', text: 'Lift a subject cleanly, right on your machine.', art: 'cutout' },
  { tag: 'History', title: 'Version history', text: 'Branch an idea and come back to any step.', art: 'history' },
];

export const plans = [
  { name: 'Free', note: 'For trying things out', color: '#0f9d6e', monthly: 0, yearly: 0, cta: 'Download', link: '/download',
    features: ['Every craft app', 'Studio on one device', 'Community support', 'Open file formats', 'Yours forever'] },
  { name: 'Supporter', note: 'For regular makers', color: '#8b5cf6', monthly: 8, yearly: 6, cta: 'Get in touch', link: '/support',
    features: ['Everything in Free', 'Studio on three devices', 'Early builds', 'Supporter badge', 'Yours forever'] },
  { name: 'Studio', note: 'For working creatives', color: '#d97706', monthly: 20, yearly: 16, cta: 'Get in touch', link: '/support', popular: true,
    features: ['Everything in Supporter', 'Shared libraries', 'Priority email support', 'Vote on the roadmap', 'Yours forever'] },
];

export const tutorials = [
  { title: 'Canvas basics', tag: '2D', minutes: 8, color: '#2f7bf5', url: '' },
  { title: 'Blocking a 3D scene', tag: '3D', minutes: 12, color: '#8b5cf6', url: '' },
  { title: 'Masks without the mess', tag: '2D', minutes: 6, color: '#e8573f', url: '' },
  { title: 'Posing characters', tag: '3D', minutes: 10, color: '#12a58a', url: '' },
  { title: 'Your first edit in ReelCraft', tag: 'Video', minutes: 9, color: '#f2a516', url: '' },
  { title: 'Keyframes and easing', tag: 'Video', minutes: 7, color: '#e0368f', url: '' },
];

export const posts = [
  { slug: 'one-canvas', date: '2026-10-29', title: 'Why every craft shares one canvas', excerpt: 'A look at the idea that ties the whole workshop together.',
    body: ['Every tool in the AppCraft workshop starts from the same canvas. Pan, zoom, select and undo work the same way whether you are editing a photo or a spreadsheet.', 'That shared foundation means learning one craft teaches you the basics of all of them. It also lets work move between apps without exporting and re-importing.', 'Over the coming months we will share more about how that canvas is built and what it makes possible.'] },
  { slug: 'welcome', date: '2026-10-01', title: 'Welcome to the AppCraft workshop', excerpt: 'Where we will share updates, tutorials and behind-the-scenes notes.',
    body: ['This is the start of the AppCraft blog. We will use it to share progress, ideas and the occasional sketch from the workshop.', 'Nothing here is finished yet, and that is the point. Follow along as things take shape.'] },
];

export const guides = [
  { q: 'What is AppCraft?', a: 'A collection of native creative tools and a studio that ties them together. Each craft focuses on one kind of work.' },
  { q: 'Is it free?', a: 'The craft apps are planned to be free and open. Optional plans will support development and add conveniences.' },
  { q: 'Which platforms are supported?', a: 'macOS, Windows and Linux, with most crafts also running in the browser.' },
  { q: 'Do my files leave my computer?', a: 'No. Everything runs locally unless you choose to share something.' },
  { q: 'Can I open files from other tools?', a: 'Each craft aims to read and write the common formats of its field, so you can move work in and out freely.' },
  { q: 'How do I install everything at once?', a: 'Use the AppCraft Launcher. It installs every craft and keeps them all updated.' },
  { q: 'When can I download the apps?', a: 'The crafts are still in development. Download buttons across the site will switch on as each one is released.' },
  { q: 'How do I report a problem?', a: 'Email us from the Support page. Include what you were doing and what you expected to happen.' },
];

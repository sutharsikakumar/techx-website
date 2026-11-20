/**
 * All site copy, links and lists live here.
 * Edit this file to change what the website says. No other code changes are needed.
 */

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* Set these in `.env.local` (see `.env.example`), or edit the         */
/* fallbacks below.                                                    */
/* ------------------------------------------------------------------ */

export const links = {
  rushForm: process.env.NEXT_PUBLIC_RUSH_FORM_URL || '#',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/unctechx/',
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/techx-unc/posts/',
};

/* ------------------------------------------------------------------ */
/* Site                                                                */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'TechX',
  title: "TechX | UNC's Premier Tech Society",
  description:
    'TechX is a society of UNC Chapel Hill students devoted to the craft of building technical systems.',
};

export const nav: { label: string; href: string }[] = [
  { label: 'About', href: '/#mission' },
  { label: 'Members', href: '/members/' },
  { label: 'Executive Team', href: '/executive-team/' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  cta: 'Join Spring Rush',
};

/* ------------------------------------------------------------------ */
/* Mission                                                             */
/* ------------------------------------------------------------------ */

export const mission = {
  heading: "UNC's Premier Tech Society",
  body: 'TechX is a society of students devoted to the craft of building technical systems. We approach problems with rigor, compete with distinction, and hold each other to a higher standard.',
};

/* ------------------------------------------------------------------ */
/* Three pillars                                                       */
/* ------------------------------------------------------------------ */

export const pillars: { title: string; body: string }[] = [
  {
    title: 'Lyceum',
    body: 'Technical mentorship that sharpens your engineering through real projects, code review and guided learning.',
  },
  {
    title: 'Professional Development',
    body: 'Résumés, interviews and introductions that turn skill into internships, research roles and offers.',
  },
  {
    title: 'Community',
    body: 'A close circle of builders who push each other, share opportunities and stay connected long after UNC.',
  },
];

/* ------------------------------------------------------------------ */
/* Our community                                                       */
/* Add photos to /public/images/community/ and list them below.        */
/* Every photo is shown 300px tall. Give its real pixel width/height   */
/* so the strip doesn't jump while photos load.                        */
/* While this list is empty, grey placeholder tiles are shown.         */
/* ------------------------------------------------------------------ */

export type CommunityPhoto = { src: string; alt: string; width: number; height: number };

export const community: { heading: string; body: string; photos: CommunityPhoto[] } = {
  heading: 'Our community',
  body: 'The life of the Society extends beyond the work we do together. From retreats away from campus to gatherings throughout the year, we make time to get to know the people we build with, welcome new members, and carry forward the traditions that make TechX our own.',
  photos: [
    {
      src: '/images/community/techx-fa26-retreat-photo-8.jpg',
      alt: 'The whole group at the fall retreat, standing in a field with mountains behind',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26-3.jpg',
      alt: 'The group dressed up and posing together on the beach at sunset',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-13.jpg',
      alt: 'Members gathered and smiling inside the retreat cabin',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/jpeg-image-2.jpg',
      alt: 'Four members with their arms around each other on the beach',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-1.jpg',
      alt: 'Three members posing together on the beach in the evening',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-6.jpg',
      alt: 'Members playing a board game by the fireplace at the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-26.jpg',
      alt: 'The full group lined up along the shore at the beach trip',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-12.jpg',
      alt: 'Members posing on a mountain overlook during the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26.jpg',
      alt: 'Friends in sundresses and linen shirts on the beach at dusk',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-7.jpg',
      alt: 'Three members in the cabin sharing a laugh',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26-4.jpg',
      alt: 'Members watching the sun set over the ocean',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-10.jpg',
      alt: 'Members standing together in an autumn field at the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26-1.jpg',
      alt: 'A group of members posing with hearts on the beach',
      width: 480,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-img-9018.jpg',
      alt: 'Members looking out over a meadow with cows at the retreat',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-26-1.jpg',
      alt: 'Members posing together on the sand by the ocean',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-11.jpg',
      alt: 'Members on a woodland trail by a stream during the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-3.jpg',
      alt: 'Three friends smiling in sunglasses on the beach',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-9.jpg',
      alt: 'Two members smiling in a field with the mountains behind',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-2.jpg',
      alt: 'Three members standing on the beach at golden hour',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/jpeg-image.jpg',
      alt: 'Three members posing together on the beach',
      width: 480,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-4.jpg',
      alt: 'Three members in sunglasses on a sunny beach day',
      width: 427,
      height: 640,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* What we've built                                                    */
/* ------------------------------------------------------------------ */

/** A paragraph made of plain strings and `{ bold: '...' }` pieces. */
export type RichText = (string | { bold: string })[];

export const built: {
  heading: string;
  startups: { name: string; href?: string; image: string }[];
  paragraphs: RichText[];
} = {
  heading: "What we've built",
  startups: [
    {
      name: 'Brightstar Ventures',
      href: 'https://www.linkedin.com/company/brightstar-ventures/home/',
      image: '/images/startup-1-star.jpg',
    },
    { name: 'Swarm', href: 'https://www.useswarm.co/', image: '/images/startup-2-hex.jpg' },
    { name: 'Lintel', href: 'https://www.uselintel.com/', image: '/images/startup-3-l.jpg' },
    // No `href` yet: the tile shows without a link. Add one to make it clickable.
    { name: 'Speedi', image: '/images/startup-4-speedi.jpg' },
  ],
  paragraphs: [
    [
      'TechX founders build fast and raise early. Our companies are backed by ',
      { bold: 'Afore Capital' },
      ', ',
      { bold: 'LeapYear' },
      ', and ',
      { bold: 'KPMG' },
      '.',
    ],
    ['And this is only the start. There is much more to come.'],
  ],
};

/* ------------------------------------------------------------------ */
/* Where we work                                                       */
/* Logos live in /public/images/companies/ (cropped to the artwork).   */
/* width/height are the file's pixel size. Keep the list alphabetical. */
/* ------------------------------------------------------------------ */

export type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  /** Optional size multiplier for logos that look too small or faint (1 = default). */
  scale?: number;
};

export const whereWeWork: { heading: string; companies: Company[] } = {
  heading: 'Where we work',
  companies: [
    { name: 'Amazon', logo: '/images/companies/amazon.png', width: 600, height: 181 },
    { name: 'Aseon Labs', logo: '/images/companies/aseon-labs.png', width: 600, height: 52 },
    { name: 'Aven', logo: '/images/companies/aven.png', width: 600, height: 228 },
    { name: 'AWS', logo: '/images/companies/aws.png', width: 360, height: 240 },
    { name: 'BCG X', logo: '/images/companies/bcg-x.png', width: 590, height: 240 },
    { name: 'Browserbase', logo: '/images/companies/browserbase.png', width: 600, height: 119 },
    { name: 'CERN', logo: '/images/companies/cern.png', width: 207, height: 205, scale: 1.35 },
    {
      name: 'Citadel Securities',
      logo: '/images/companies/citadel-securities.png',
      width: 600,
      height: 47,
    },
    { name: 'Contrary', logo: '/images/companies/contrary.png', width: 600, height: 95 },
    { name: 'Datadog', logo: '/images/companies/datadog.png', width: 240, height: 240 },
    { name: 'Deloitte', logo: '/images/companies/deloitte.png', width: 600, height: 113 },
    { name: 'Fidelity', logo: '/images/companies/fidelity.png', width: 600, height: 133 },
    { name: 'Forus', logo: '/images/companies/forus.png', width: 600, height: 162 },
    {
      name: 'Google DeepMind',
      logo: '/images/companies/google-deepmind.png',
      width: 600,
      height: 75,
    },
    { name: 'Infragrid', logo: '/images/companies/infragrid.png', width: 600, height: 123 },
    { name: 'JP Morgan', logo: '/images/companies/jp-morgan.png', width: 600, height: 122 },
    { name: 'Lenovo', logo: '/images/companies/lenovo.png', width: 600, height: 194 },
    {
      name: 'Lucid Software',
      logo: '/images/companies/lucid-software.png',
      width: 600,
      height: 149,
    },
    { name: 'Meta', logo: '/images/companies/meta.png', width: 600, height: 121 },
    { name: 'Microsoft', logo: '/images/companies/microsoft.png', width: 600, height: 128 },
    { name: 'Plaid', logo: '/images/companies/plaid.png', width: 600, height: 226 },
    { name: 'Point72', logo: '/images/companies/point72.png', width: 600, height: 210 },
    { name: 'SAS', logo: '/images/companies/sas.png', width: 570, height: 240 },
    { name: 'Stripe', logo: '/images/companies/stripe.png', width: 578, height: 240 },
    { name: 'Tanium', logo: '/images/companies/tanium.png', width: 600, height: 108 },
    { name: 'Toshiba', logo: '/images/companies/toshiba.png', width: 600, height: 91 },
  ],
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  instagram: { label: '@unctechx', href: links.instagram },
  linkedin: { label: 'TechX', href: links.linkedin },
};

/* ------------------------------------------------------------------ */
/* Stub pages                                                          */
/* ------------------------------------------------------------------ */

export const stubPages = {
  members: {
    heading: 'Members',
    note: 'The member directory is coming soon.',
  },
  executiveTeam: {
    heading: 'Executive Team',
    note: 'Meet the people who run TechX. This page is coming soon.',
  },
};

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
  rushForm:
    process.env.NEXT_PUBLIC_RUSH_FORM_URL ||
    'https://web.groupme.com/join_group/105246901/NtWowGeg',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/unctechx/',
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/techx-unc/posts/',
  heellife:
    process.env.NEXT_PUBLIC_HEELLIFE_URL || 'https://heellife.unc.edu/organization/unctechx',
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

/* ------------------------------------------------------------------ */
/* Landing intro (plays as you scroll: logo zooms in, then these lines) */
/* ------------------------------------------------------------------ */

export const heroStory = {
  statement: 'We back the minds shaping the future.',
  motto: 'Via ad Excellentiam',
};

/** The button at the right end of the header. Its link is `links.rushForm`. */
export const navCta = { label: 'Join Spring Rush' };

export const nav: { label: string; href: string }[] = [
  { label: 'About', href: '/#mission' },
  { label: 'Members', href: '/members/' },
  // Hidden for now; the /executive-team page still exists. Re-add this line to show it:
  // { label: 'Executive Team', href: '/executive-team/' },
];

/* ------------------------------------------------------------------ */
/* Mission                                                             */
/* ------------------------------------------------------------------ */

export const mission = {
  heading: "UNC's Premier Tech Society",
  body: 'Established in 2022, TechX is a society of students devoted to the craft of building technical systems. We approach problems with rigor, compete with distinction, and hold each other to a higher standard.',
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
    body: 'Résumés, interviews and introductions that turn skill into internships, research roles and offers at companies doing transformative work.',
  },
  {
    title: 'Community',
    body: 'A close circle of builders who push each other, share opportunities and stay connected long after UNC.',
  },
];

/* ------------------------------------------------------------------ */
/* Community                                                           */
/* Add photos to /public/images/community/ and list them below.        */
/* Every photo is shown 300px tall. Give its real pixel width/height   */
/* so the strip doesn't jump while photos load.                        */
/* While this list is empty, grey placeholder tiles are shown.         */
/* ------------------------------------------------------------------ */

export type CommunityPhoto = { src: string; alt: string; width: number; height: number };

export const community: {
  heading: string;
  body: string;
  photos: CommunityPhoto[];
} = {
  heading: 'Community',
  body: 'The life of the Society extends beyond the work we do together. From retreats away from campus to gatherings throughout the year, we make time to get to know the people we build with, welcome new members, and carry forward the traditions that make TechX our own.',
  photos: [
    {
      src: '/images/community/techx-fa26-retreat-photo-8.avif',
      alt: 'The whole group at the fall retreat, standing in a field with mountains behind',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26-3.avif',
      alt: 'The group dressed up and posing together on the beach at sunset',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-13.avif',
      alt: 'Members gathered and smiling inside the retreat cabin',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-6.avif',
      alt: 'Four members with their arms around each other on the beach',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-1.avif',
      alt: 'Three members posing together on the beach in the evening',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-6.avif',
      alt: 'Members playing a board game by the fireplace at the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-26.avif',
      alt: 'The full group lined up along the shore at the beach trip',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-overlook-group.avif',
      alt: 'Members posing together on a rocky overlook with mountains behind them',
      width: 1039,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-12.avif',
      alt: 'Members posing on a mountain overlook during the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26.avif',
      alt: 'Friends in sundresses and linen shirts on the beach at dusk',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-7.avif',
      alt: 'Three members in the cabin sharing a laugh',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26-4.avif',
      alt: 'Members watching the sun set over the ocean',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-10.avif',
      alt: 'Members standing together in an autumn field at the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-26-1.avif',
      alt: 'A group of members posing with hearts on the beach',
      width: 480,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-img-9018.avif',
      alt: 'Members looking out over a meadow with cows at the retreat',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-26-1.avif',
      alt: 'Members posing together on the sand by the ocean',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-11.avif',
      alt: 'Members on a woodland trail by a stream during the retreat',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-fleece-group.avif',
      alt: 'A large group of members in black TechX fleeces posing indoors',
      width: 1099,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-3.avif',
      alt: 'Three friends smiling in sunglasses on the beach',
      width: 960,
      height: 640,
    },
    {
      src: '/images/community/techx-fa26-retreat-photo-9.avif',
      alt: 'Two members smiling in a field with the mountains behind',
      width: 1137,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-2.avif',
      alt: 'Three members standing on the beach at golden hour',
      width: 853,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-5.avif',
      alt: 'Three members posing together on the beach',
      width: 480,
      height: 640,
    },
    {
      src: '/images/community/techx-beach-photo-4.avif',
      alt: 'Three members in sunglasses on a sunny beach day',
      width: 427,
      height: 640,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Building                                                            */
/* ------------------------------------------------------------------ */

export const built: {
  heading: string;
  body: string;
  startups: { name: string; href?: string; image: string }[];
  /** Small logo row under the tiles. Logos live in /public/images/startups/venture/. */
  backersLabel: string;
  backers: Company[];
  /** Text after the last backer logo. */
  backersMore: string;
} = {
  heading: 'Building',
  body: 'Startups founded by TechX members have a combined valuation of over $100M and are backed by leading venture capital firms.',
  startups: [
    { name: 'Juno', href: 'https://www.juno.co/', image: '/images/startups/juno.avif' },
    { name: 'Speedi', href: 'https://www.speedi.delivery/', image: '/images/startups/speedi.avif' },
    { name: 'Swarm', href: 'https://www.useswarm.co/', image: '/images/startups/swarm.avif' },
    { name: 'Lintel', href: 'https://www.uselintel.com/', image: '/images/startups/lintel.avif' },
    {
      name: 'Brightstar Ventures',
      href: 'https://www.linkedin.com/company/brightstar-ventures/home/',
      image: '/images/startups/brightstar.avif',
    },
  ],
  backersLabel: 'Venture backing from:',
  backersMore: 'and more.',
  backers: [
    {
      name: 'Khosla Ventures',
      href: 'https://www.khoslaventures.com/',
      logo: '/images/startups/venture/khosla-ventures.png',
      width: 1600,
      height: 190,
    },
    {
      name: 'Comcast Ventures',
      href: 'https://comcastventures.com/',
      logo: '/images/startups/venture/comcast-ventures-white.png',
      width: 543,
      height: 209,
    },
    {
      name: 'Afore Capital',
      href: 'https://www.afore.vc/',
      logo: '/images/startups/venture/afore-capital-white.png',
      width: 607,
      height: 246,
    },
    {
      name: 'KPMG',
      href: 'https://kpmg.com/',
      logo: '/images/startups/venture/kpmg-white.png',
      width: 1190,
      height: 469,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Work                                                                 */
/* Logos live in /public/images/companies/ (cropped to the artwork).   */
/* href is the company's website (opens in a new tab). width/height are the    */
/* file's pixel size. The list is ordered from most to                         */
/* least impressive for SWE / ML rigor: the wall reads left to right.         */
/* ------------------------------------------------------------------ */

export type Company = {
  name: string;
  /** The company's website. Leave out to show the logo without a link. */
  href?: string;
  logo: string;
  width: number;
  height: number;
  /** Optional size multiplier for logos that look too small or faint (1 = default). */
  scale?: number;
};

export const whereWeWork: { heading: string; body: string; companies: Company[] } = {
  heading: 'Work',
  body: 'Beyond pursuing our technical goals, we also work at leading companies from around the world.',
  companies: [
    {
      name: 'Google DeepMind',
      href: 'https://deepmind.google/',
      logo: '/images/companies/google-deepmind.png',
      width: 600,
      height: 75,
    },
    {
      name: 'Stripe',
      href: 'https://stripe.com/',
      logo: '/images/companies/stripe.png',
      width: 578,
      height: 240,
    },
    {
      name: 'Citadel Securities',
      href: 'https://www.citadelsecurities.com/',
      logo: '/images/companies/citadel-securities.png',
      width: 600,
      height: 47,
    },
    {
      name: 'Palantir',
      href: 'https://www.palantir.com/',
      logo: '/images/companies/palantir.png',
      width: 600,
      height: 146,
    },
    {
      name: 'Meta',
      href: 'https://about.meta.com/',
      logo: '/images/companies/meta.png',
      width: 600,
      height: 121,
    },
    {
      name: 'Apple',
      href: 'https://www.apple.com/',
      logo: '/images/companies/apple-logo.png',
      width: 960,
      height: 1140,
    },
    {
      name: 'CERN',
      href: 'https://home.cern/',
      logo: '/images/companies/cern.png',
      width: 207,
      height: 205,
      scale: 1.35,
    },
    {
      name: 'Datadog',
      href: 'https://www.datadoghq.com/',
      logo: '/images/companies/datadog.png',
      width: 240,
      height: 240,
    },
    {
      name: 'Robinhood',
      href: 'https://robinhood.com/',
      logo: '/images/companies/robinhood.png',
      width: 179,
      height: 240,
    },
    {
      name: 'Microsoft',
      href: 'https://www.microsoft.com/',
      logo: '/images/companies/microsoft.png',
      width: 600,
      height: 128,
    },
    {
      name: 'Amazon',
      href: 'https://www.amazon.com/',
      logo: '/images/companies/amazon.png',
      width: 600,
      height: 181,
    },
    {
      name: 'AWS',
      href: 'https://aws.amazon.com/',
      logo: '/images/companies/aws.png',
      width: 360,
      height: 240,
    },
    {
      name: 'Plaid',
      href: 'https://plaid.com/',
      logo: '/images/companies/plaid.png',
      width: 600,
      height: 226,
    },
    {
      name: 'Point72',
      href: 'https://point72.com/',
      logo: '/images/companies/point72.png',
      width: 600,
      height: 210,
    },
    {
      name: 'Browserbase',
      href: 'https://www.browserbase.com/',
      logo: '/images/companies/browserbase.png',
      width: 600,
      height: 119,
    },
    {
      name: 'Aven',
      href: 'https://www.aven.com/',
      logo: '/images/companies/aven.png',
      width: 600,
      height: 228,
    },
    {
      name: 'Lucid Software',
      href: 'https://lucid.co/',
      logo: '/images/companies/lucid-software.png',
      width: 600,
      height: 149,
    },
    {
      name: 'Tanium',
      href: 'https://www.tanium.com/',
      logo: '/images/companies/tanium.png',
      width: 600,
      height: 108,
    },
    {
      name: 'Cisco',
      href: 'https://www.cisco.com/',
      logo: '/images/companies/cisco.png',
      width: 455,
      height: 240,
    },
    {
      name: 'NetApp',
      href: 'https://www.netapp.com/',
      logo: '/images/companies/netapp.png',
      width: 600,
      height: 108,
    },
    {
      name: 'Credit Karma',
      href: 'https://www.creditkarma.com/',
      logo: '/images/companies/credit-karma.png',
      width: 600,
      height: 88,
    },
    {
      name: 'Contrary',
      href: 'https://contrary.com/',
      logo: '/images/companies/contrary.png',
      width: 600,
      height: 95,
    },
    {
      name: 'Aseon Labs',
      href: 'https://www.aseonlabs.com/',
      logo: '/images/companies/aseon-labs.png',
      width: 600,
      height: 52,
    },
    {
      name: 'Butterbase AI',
      logo: '/images/companies/butterbase-ai.png',
      width: 600,
      height: 126,
    },
    {
      name: 'Infragrid',
      href: 'https://infragrid.ai/',
      logo: '/images/companies/infragrid.png',
      width: 600,
      height: 123,
    },
    {
      name: 'Forus',
      href: 'https://www.forus.com/',
      logo: '/images/companies/forus.png',
      width: 600,
      height: 162,
    },
    {
      name: 'Capital One',
      href: 'https://www.capitalone.com/',
      logo: '/images/companies/c1.svg.webp',
      width: 3840,
      height: 1378,
    },
    {
      name: 'Nike',
      href: 'https://www.nike.com/',
      logo: '/images/companies/nike.svg',
      width: 688,
      height: 270,
    },
    {
      name: 'JP Morgan',
      href: 'https://www.jpmorganchase.com/',
      logo: '/images/companies/jp-morgan.png',
      width: 600,
      height: 122,
    },
    {
      name: 'BCG X',
      href: 'https://www.bcg.com/x',
      logo: '/images/companies/bcg-x.png',
      width: 590,
      height: 240,
    },
    {
      name: 'Wells Fargo',
      href: 'https://www.wellsfargo.com/',
      logo: '/images/companies/wells-fargo-white.png',
      width: 190,
      height: 100,
    },
    {
      name: 'Truist',
      href: 'https://www.truist.com/',
      logo: '/images/companies/truist.webp',
      width: 3840,
      height: 891,
    },
    {
      name: 'Lenovo',
      href: 'https://www.lenovo.com/',
      logo: '/images/companies/lenovo-white.png',
      width: 500,
      height: 111,
    },
    {
      name: 'Honeywell',
      href: 'https://www.honeywell.com/',
      logo: '/images/companies/honeywell-logo.png',
      width: 1280,
      height: 227,
    },
    {
      name: 'SAS',
      href: 'https://www.sas.com/',
      logo: '/images/companies/sas.png',
      width: 570,
      height: 240,
    },
    {
      name: 'Toshiba',
      href: 'https://www.global.toshiba/',
      logo: '/images/companies/toshiba.png',
      width: 600,
      height: 91,
    },
    {
      name: 'USAA',
      href: 'https://www.usaa.com/',
      logo: '/images/companies/usaa.png',
      width: 233,
      height: 240,
    },
    {
      name: 'Deloitte',
      href: 'https://www.deloitte.com/',
      logo: '/images/companies/deloitte.png',
      width: 600,
      height: 113,
    },
    {
      name: 'Fidelity',
      href: 'https://www.fidelity.com/',
      logo: '/images/companies/fidelity.png',
      width: 600,
      height: 133,
    },
    {
      name: 'LPL Financial',
      href: 'https://www.lpl.com/',
      logo: '/images/companies/lpl-financial.png',
      width: 504,
      height: 65,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  instagram: { label: '@unctechx', href: links.instagram },
  linkedin: { label: 'TechX', href: links.linkedin },
  heellife: { label: 'HeelLife', href: links.heellife },
};

/* ------------------------------------------------------------------ */
/* Stub pages                                                          */
/* ------------------------------------------------------------------ */

export const stubPages = {
  executiveTeam: {
    heading: 'Executive Team',
    note: 'Meet the people who run TechX. This page is coming soon.',
  },
};

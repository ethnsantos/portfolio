// Everything about you that isn't a project lives here.

export const site = {
  name: 'Ethan Santos',
  title: 'Ethan Santos — Cinematographer & Content Creator',
  description:
    'Bay Area cinematographer and content creator. Cinematic short-form for brands, musicians and anyone with a story worth telling.',
  eyebrow: 'Cinematographer · Content creator · Bay Area',
  tagline:
    'Hey! I make cinematic videos for brands, musicians and anyone with a story worth telling.',

  email: 'ethnsantos@gmail.com',
  instagram: { handle: '@ethnsantos', url: 'https://www.instagram.com/ethnsantos/' },
  tiktok: { handle: '@ethnsantos', url: 'https://www.tiktok.com/@ethnsantos' },

  photo: {
    src: '/images/me-800.webp',
    srcSmall: '/images/me-480.webp',
    alt: 'Ethan taking a mirror selfie with his camera',
  },
  heroCaption: "that's me :)",
  aboutCaption: "hi, I'm Ethan",

  about: {
    heading: 'one camera, a lot of stories.',
    paragraphs: [
      "I'm a Bay Area cinematographer and content creator. I shoot cinematic short-form for brands, live shows and music artists, and I post the process along the way on TikTok and Instagram.",
      "Right now I'm looking to partner with brands on campaigns, launches and creative direction.",
    ],
    featured: 'Featured in Content Magazine · 2025 Edition',
  },
};

// Subject line pre-filled when someone taps "Book a shoot".
export const bookingHref = `mailto:${site.email}?subject=${encodeURIComponent('Shoot inquiry')}`;

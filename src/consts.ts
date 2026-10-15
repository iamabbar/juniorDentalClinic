// Central place for all editable clinic content.
// Replace the placeholder values (and anything in [brackets]) with the real clinic details.

export const SITE = {
  title: 'Junior Dental Clinic — Pediatric Dentistry',
  description: 'Junior Dental Clinic: gentle, specialist dental care for babies, children and teens.',
};

export const CLINIC = {
  name: 'Junior Dental Clinic',
  doctorName: 'Dr. Walid Hatahet',
  doctorFullName: 'Dr. Walid Hatahet',
  tagline: 'PEDIATRIC DENTISTRY',
  city: 'Beirut',
  foundedYear: '2000',
  yearsExperience: '26',
  patientsCount: '[10,000]',
  googleRating: '[4.9]',
  googleReviewCount: '[120]',
  googleReviewsUrl: '[GOOGLE REVIEWS LINK]',
  instagramUrl: 'https://www.instagram.com/juniordental/',
  phone: '+9611653558',
  phoneDisplay: '+961 1 653 558',
  // Assumed from the Beirut-location mobile number — confirm this is the number that gets WhatsApp messages.
  whatsappNumber: '96170676370',
  email: 'whatahet@hotmail.com',
  address: {
    line: 'Corniche El-Mazraa, facing Abed Naser mosque',
    area: 'Mazraa, Beirut',
    mapsLink: '[MAPS LINK]',
  },
  responseTime: 'a few hours',
};

export const HERO = {
  eyebrow: `SPECIALIST PEDIATRIC DENTISTRY IN ${CLINIC.city}`,
  heading: 'Gentle dental care for children,',
  headingEmphasis: `since ${CLINIC.foundedYear}.`,
  paragraph: `For over ${CLINIC.yearsExperience} years, ${CLINIC.doctorName} has helped children feel safe in the dental chair — and helped parents feel confident about their child’s smile.`,
};

export const HIGHLIGHTS = {
  years: {
    value: `${CLINIC.yearsExperience}+`,
    label: 'years of gentle pediatric care',
    caption: `Caring for children in ${CLINIC.city} since ${CLINIC.foundedYear}.`,
  },
  rating: {
    value: CLINIC.googleRating,
    label: 'Google rating from parents',
  },
  patients: {
    value: `${CLINIC.patientsCount}+`,
    label: 'little patients treated',
  },
  ageRange: {
    value: '0–18',
    label: 'from first tooth to teen',
  },
};

export const ABOUT = {
  eyebrow: 'MEET THE DOCTOR',
  heading: 'Hello, I’m',
  headingEmphasis: `${CLINIC.doctorName}.`,
  bio: 'With over 26 years of experience in pediatric dentistry, Dr. Walid Hatahet combines a gentle, functional approach with genuine warmth — helping children feel safe and comfortable from their very first visit through their teenage years.',
  quote: '[A short personal line from the doctor, e.g. about earning a child’s trust before treating a tooth.]',
  facts: [
    { icon: 'graduation-cap', accent: 'pink', title: 'Education', detail: '[DDS, University, Year]' },
    { icon: 'paw-heart', accent: 'purple', title: 'Specialty', detail: '[Pediatric Dentistry, University]' },
    { icon: 'medal', accent: 'gold', title: 'Memberships', detail: '[Order of Dentists · Society]' },
    { icon: 'globe', accent: 'teal', title: 'Languages', detail: 'Arabic, English[, French]' },
  ],
} as const;

export const SERVICES = {
  eyebrow: 'SERVICES',
  heading: 'Complete care, from the',
  headingEmphasis: 'first tooth',
  headingSuffix: 'to the teenage years',
  intro: '[Keep only the treatments you offer.]',
  items: [
    {
      number: '01',
      icon: 'search',
      accent: 'pink',
      blob: '62% 38% 55% 45% / 48% 60% 40% 52%',
      title: 'Check-ups & cleaning',
      description: 'Regular exams, gentle cleaning and fluoride.',
    },
    {
      number: '02',
      icon: 'shield-check',
      accent: 'gold',
      blob: '45% 55% 40% 60% / 60% 42% 58% 40%',
      title: 'Prevention & sealants',
      description: 'Protecting new molars and building good habits.',
    },
    {
      number: '03',
      icon: 'paw-heart',
      accent: 'purple',
      blob: '55% 45% 62% 38% / 42% 55% 45% 58%',
      title: 'Fillings & crowns',
      description: 'Tooth-colored repairs and pediatric crowns.',
    },
    {
      featured: true,
      badge: '04 · Same day',
      icon: 'clock',
      title: 'Dental emergencies',
      description: 'Pain, swelling, a fall or a knocked-out tooth — call us right away.',
      ctaLabel: `Call ${CLINIC.phoneDisplay}`,
      ctaHref: `tel:${CLINIC.phone}`,
    },
    {
      number: '05',
      icon: 'sparkle',
      accent: 'teal',
      blob: '58% 42% 40% 60% / 45% 58% 42% 55%',
      title: 'Early orthodontic care',
      description: 'Space maintainers and guidance for growing jaws.',
    },
    {
      number: '06',
      icon: 'heart',
      accent: 'green',
      blob: '48% 52% 58% 42% / 58% 45% 55% 42%',
      title: 'Anxious & special-needs children',
      description: 'Extra time, calm care and [sedation options].',
    },
  ],
} as const;

export const VISIT = {
  eyebrow: 'YOUR CHILD’S FIRST VISIT',
  heading: 'A calm,',
  headingEmphasis: 'unhurried',
  headingSuffix: 'first visit — in four little steps',
  badges: [
    { dot: 'pink', label: 'By the first birthday' },
    { dot: 'gold', label: 'About [30–45] minutes' },
    { dot: 'green', label: 'You stay with your child' },
  ],
  steps: [
    {
      icon: 'chat',
      accent: 'pink',
      title: 'Welcome & chat',
      description: 'We get to know your child and review their health history with you.',
      offset: false,
    },
    {
      icon: 'search',
      accent: 'gold',
      title: 'Gentle examination',
      description: 'At your child’s pace, often seated on your lap for little ones.',
      offset: true,
    },
    {
      icon: 'sparkle',
      accent: 'teal',
      title: 'Cleaning, if ready',
      description: 'Only when your child is comfortable — never forced.',
      offset: false,
    },
    {
      icon: 'clipboard-check',
      accent: 'green',
      title: 'A clear plan',
      description: 'Written advice for home and a small reward for your brave little one.',
      offset: true,
    },
  ],
  tip: {
    title: 'A tip for parents',
    text: 'Use simple, positive words at home — “the dentist will count your teeth” — and avoid words like “hurt” or “needle.”',
  },
};

export const CLINIC_GALLERY = {
  heading: 'A clinic designed for children',
  instagramLabel: 'Follow us on Instagram →',
  photos: ['Waiting area', 'Treatment room', 'Sterilization area'],
};

export const REVIEWS = {
  eyebrow: 'WHAT PARENTS SAY',
  quote: '[Paste a real parent review here — ideally one that mentions the doctor’s patience and experience.]',
  parentName: '[Parent name]',
  source: 'Google review',
  linkLabel: `Read all ${CLINIC.googleReviewCount} reviews on Google →`,
};

export const FAQ = {
  eyebrow: 'QUESTIONS',
  heading: 'Frequently asked by parents',
  items: [
    {
      question: 'When should my child first see a dentist?',
      answer: 'By the first birthday, or within six months of the first tooth.',
    },
    {
      question: 'Can I stay with my child during treatment?',
      answer: '[Your policy.]',
    },
    {
      question: 'How do you help anxious children?',
      answer: '[Your approach.]',
    },
    {
      question: 'Do you accept insurance?',
      answer: '[Insurers and payment methods.]',
    },
    {
      question: 'What should I do in a dental emergency?',
      answer: '[Emergency number and after-hours instructions.]',
    },
  ],
};

export const CONTACT = {
  eyebrow: 'BOOK AN APPOINTMENT',
  heading: 'We look forward to meeting',
  headingEmphasis: 'your little one.',
  intro: `Choose whatever is easiest for you — we usually reply within ${CLINIC.responseTime}.`,
  hours: [
    { day: 'Mon', time: '9–6' },
    { day: 'Tue', time: '9–6' },
    { day: 'Wed', time: '9–6' },
    { day: 'Thu', time: '9–6' },
    { day: 'Fri', time: '9–6' },
    { day: 'Sat', time: '9–1' },
    { day: 'Sun', time: 'Closed', isClosed: true },
  ],
};

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#visit', label: 'Your visit' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const LOGO_LETTER_COLORS = ['#D6337F', '#C99A00', '#6A3D9A', '#E2741F', '#1E8FA3', '#2F8F3A'];

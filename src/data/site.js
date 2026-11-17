// Single source of truth for contact details and navigation.
// Update these values and every page picks them up.

export const site = {
  name: 'Inertia Software',
  shortName: 'Inertia',
  email: 'connect@inertiasoftware.in',
  phone: '+91 92701 66932',
  phoneHref: 'tel:+919270166932',
  whatsapp: '919270166932',
  location: 'India · Working with clients worldwide',
  timezone: 'Asia/Kolkata',
  responseTime: 'We reply within 24 hours',
};

export const whatsappLink = (text = "Hi Inertia! I'd like to discuss a project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
];

// "How to start" — the steps a new client goes through.
export const process = [
  {
    no: '01',
    icon: 'chat',
    color: '#6C47FF',
    title: 'Get in touch',
    desc: 'Call, WhatsApp or email us. Tell us a little about your business and what you want to build.',
  },
  {
    no: '02',
    icon: 'mail',
    color: '#2D6BFF',
    title: 'Share your requirements',
    desc: 'Email us your requirements, documents, screenshots or apps you like. No technical knowledge needed.',
  },
  {
    no: '03',
    icon: 'bolt',
    color: '#F2479B',
    title: 'Instant connect & quote',
    desc: 'We connect with you quickly, clarify the details on a call and send a clear, fixed quote.',
  },
  {
    no: '04',
    icon: 'gift',
    color: '#FF6A2B',
    title: 'Free demo in 2 days',
    desc: 'Within two days you get a free, working demo of your product to see, click and share before you commit.',
    badge: 'Free · No obligation',
  },
  {
    no: '05',
    icon: 'rocket',
    color: '#0FB57E',
    title: 'Build, launch & support',
    desc: 'We design, build and launch the full product with regular updates, then stay on for support and new features.',
  },
];

export const requirementsMail = `mailto:${site.email}?subject=${encodeURIComponent(
  'Project requirements — free demo request'
)}&body=${encodeURIComponent(
  'Hi Inertia,\n\nHere are my project requirements:\n\n- Business / company:\n- What I want to build:\n- Key features:\n- Timeline:\n- Phone / WhatsApp:\n\nThanks!'
)}`;

export const principles = [
  {
    title: 'A direct line to the makers',
    desc: 'You talk to the people who design and build your product. No account managers, no messages lost in hand-offs.',
  },
  {
    title: 'Clear scope, no surprises',
    desc: 'Defined deliverables, timelines and pricing before work begins, and honest updates throughout.',
  },
  {
    title: 'Design and engineering, together',
    desc: 'The same team shapes the experience and writes the code, so what you approve is exactly what ships.',
  },
  {
    title: 'With you after launch',
    desc: 'Software is never finished. We support, maintain and grow it as your business grows.',
  },
];

export const stack = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'React Native', 'Python',
  'Django', 'PostgreSQL', 'MongoDB', 'Firebase', 'Figma', 'AWS',
];

export const site = {
  name: 'Marilyn Hampton',
  role: 'Product Designer',
  location: 'Greater Boston',
  email: 'marilyncorahampton@gmail.com',
  phone: '(508) 847-8500',
  linkedin: 'https://www.linkedin.com/in/marilyncora/',
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
  tagline: "I'm Marilyn Hampton, a Principal Product Designer based in Massachusetts.",
  bioParagraphs: [
    "With 15+ years of experience, I've built my career around making complex things feel simple. I love connecting the dots between people, technology, and business needs to create thoughtful experiences that make a difference.",
    'Beyond the design work itself, I enjoy mentoring others, exchanging ideas, and helping teams find clarity and move forward together.',
  ],
  heroIntro:
    'I bring clarity to complex product challenges, connect teams around a shared vision, and help designers do their best work. With 15+ years in design, I combine hands-on expertise with strategic thinking to create meaningful experiences and lasting impact.',
}

export const career = [
  {
    date: 'DEC 2025 – PRESENT',
    role: 'Principal UX Product Designer at Pegasystems',
    description:
      'Design enterprise experiences for customer service teams, simplifying complex workflows and bringing AI into products in ways that are useful, intuitive, and trustworthy. Partner closely with product, engineering, and cross-functional teams from early discovery through delivery.',
  },
  {
    date: 'APR 2022 – AUG 2025',
    role: 'Sr. Product Designer at Klaviyo',
    description:
      "Redesigned Klaviyo's Brand Library, boosting usage and cutting asset retrieval time by 40%. Helped shape Email AI and led dogfooding sessions that improved empathy and usability across teams.",
  },
  {
    date: 'APR 2021 – NOV 2021',
    role: 'Sr. Product Designer at Constant Contact',
    description:
      'Led research to improve the email editor experience, translating insights into designs that made template creation more intuitive.',
  },
  {
    date: 'OCT 2020 – APR 2021',
    role: 'Sr. Product Designer at Website Builder',
    description:
      'Improved the booking system for small businesses through user research and rapid design iterations, enabling more efficient scheduling and easier management of multiple appointments.',
  },
]

export const mentorshipTestimonial = {
  quote:
    "Marilyn soon became my mentor through the department's mentorship program. We had weekly meetings for 2 years where she coached me, answered my questions, and kept our space judgment‑free.",
  name: 'Lauren Tripp',
  title: 'Product & Content Designer',
}

export const testimonials = [
  {
    quote:
      'Marilyn was always proactive, with excellent communication skills and an eye for detail. She kept the project moving and anyone would be lucky to work with her.',
    name: 'Jenn Brisebios',
    title: 'Customer Experience Manager',
  },
  {
    quote:
      'Marilyn is an exceptional designer who pairs strong technical design skills with natural taste and deep understanding of customer needs.',
    name: 'Tom Nolan',
    title: 'Product Manager',
  },
  {
    quote:
      'She has consistently proven that she prioritizes quality of work. She is meticulous in her research and iterates frequently to make sure the final solution is the best possible one.',
    name: 'Vera Guttenburger',
    title: 'Sr. Product Designer',
  },
  {
    quote:
      'Marilyn has an intuitive understanding of how users interact with complex tools like our email editor and approach brand setup.',
    name: 'Sarah Delaney',
    title: 'Lead Behavioral Designer',
  },
  {
    quote:
      'Her honest, constructive feedback and openness to share ideas foster a collaborative environment that elevates the entire team.',
    name: 'Parita Shah',
    title: 'Software Engineer II',
  },
  {
    quote:
      "She's great at walking others through her designs, explaining her rationale with pros and cons, and persuading why one design option is better than others.",
    name: 'Nic Couturier',
    title: 'Lead Product Designer',
  },
]

export const process = [
  {
    number: '01',
    color: 'mint',
    title: 'Create clarity',
    description:
      'Turn ambiguity into shared understanding, align teams around the right problems, and establish clear priorities.',
  },
  {
    number: '02',
    color: 'lilac',
    title: 'Lead through collaboration',
    description:
      'Build strong partnerships across product, engineering, research, and design to move ideas forward.',
  },
  {
    number: '03',
    color: 'blush',
    title: 'Grow people and ideas',
    description:
      'Support designers through mentorship, constructive feedback, and opportunities to experiment, learn, and grow.',
  },
  {
    number: '04',
    color: 'butter',
    title: 'Design for lasting impact',
    description:
      'Balance user needs, business outcomes, and scalable systems to deliver meaningful improvements.',
  },
]

export const tools = [
  'Figma',
  'FigJam',
  'Framer',
  'Storybook',
  'Claude Code',
  'Cursor',
  'GitHub Copilot',
  'Lovable',
  'Adobe Creative Suite',
]

export const faqs = [
  {
    question: 'What kind of design work do you specialize in?',
    answer:
      'I specialize in designing intuitive experiences for complex SaaS and enterprise products. My experience spans everything from core product workflows and design systems to AI-powered experiences, always with a focus on solving real problems for users.',
  },
  {
    question: 'What do you bring to a team?',
    answer:
      'I bring a mix of strategic thinking, hands-on design expertise, and a collaborative mindset. I enjoy tackling complex challenges, shaping product direction, mentoring designers, and helping teams turn good ideas into great experiences.',
  },
  {
    question: 'Are you open to new opportunities?',
    answer:
      "Absolutely! I'm interested in Principal Product Designer and design leadership opportunities where I can influence product direction, collaborate with talented teams, and create meaningful impact.",
  },
  {
    question: 'Can I see more of your recent work?',
    answer:
      "Some of my recent projects aren't featured publicly due to confidentiality. I'm happy to discuss the challenges, design decisions, and contributions behind that work during the interview process.",
  },
]

export const contactCards = [
  { icon: 'mail', label: 'Prefer email?', cta: 'Email me', href: `mailto:${site.email}` },
  {
    icon: 'linkedin',
    label: 'Connect on LinkedIn',
    cta: 'Connect',
    href: site.linkedin,
    external: true,
  },
]

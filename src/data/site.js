export const site = {
  name: 'Marilyn Hampton',
  role: 'Product Designer',
  location: 'Greater Boston',
  email: 'marilyncorahampton@gmail.com',
  phone: '(508) 847-8500',
  linkedin: 'https://www.linkedin.com/in/marilyncora/',
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`, // TODO: drop your real resume PDF into /public/resume.pdf
  tagline: "I'm Marilyn Hampton, a product designer based in Massachusetts.",
  bio: "My work is rooted in designing experiences that are both human-centered and future-ready, leveraging AI, data, and design thinking to craft products that inform, inspire, and empower. I thrive on turning ideas into experiences that feel as intuitive as they are impactful.",
  heroIntro: "My work is human-centered, shaped by research, sharpened with AI, and built to make a meaningful impact.",
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

export const testimonials = [
  {
    quote:
      'Marilyn was always proactive, with excellent communication skills and an eye for detail. She kept the project moving and anyone would be lucky to work with her.',
    name: 'Jenn Brisebios',
    title: 'Customer Experience Manager',
  },
  {
    quote:
      "Marilyn soon became my mentor through the department's mentorship program. We had weekly meetings for 2 years where she coached me, answered my questions, and kept our space judgment-free.",
    name: 'Lauren Tripp',
    title: 'Content Designer',
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
    number: '01.',
    icon: 'search',
    color: 'mint',
    title: 'Identify',
    description:
      'I start by defining the problem, uncovering user needs, and aligning on business goals through research and discovery, using AI to speed up competitive analysis and communicate findings clearly.',
  },
  {
    number: '02.',
    icon: 'pin',
    color: 'blush',
    title: 'Map',
    description:
      'I translate insights into clear opportunities, mapping out user journeys, identifying pain points, and prioritizing key objectives.',
  },
  {
    number: '03.',
    icon: 'palette',
    color: 'peach',
    title: 'Prototype',
    description:
      'I rapidly explore ideas through low- to high-fidelity prototypes to visualize and validate solutions early, leveraging AI tools to speed up iteration and communicate concepts clearly.',
  },
  {
    number: '04.',
    icon: 'sliders',
    color: 'butter',
    title: 'Apply',
    description:
      'I refine designs based on feedback, ensuring the solution fits both user expectations and technical realities.',
  },
  {
    number: '05.',
    icon: 'monitor',
    color: 'sky',
    title: 'Communicate',
    description:
      'I share outcomes and rationale with cross-functional teams to maintain clarity and alignment.',
  },
  {
    number: '06.',
    icon: 'trendUp',
    color: 'mint',
    title: 'Track',
    description:
      'I measure success post-launch, gather insights, and use them to inform future iterations.',
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
      "I specialize in end-to-end product design (research, UX, and UI) for web and SaaS products, with a growing focus on AI-powered workflows and design systems.",
  },
  {
    question: 'Are you currently open to freelance or full-time opportunities?',
    answer:
      "Yes! I'm open to both freelance projects and full-time roles. Reach out below and let's talk about what you have in mind.",
  },
  {
    question: 'Can you help with AI-powered design or automation projects?',
    answer:
      "Absolutely! At Klaviyo I helped shape Email AI, a modular AI-assisted email builder, so I have direct experience designing trustworthy, transparent AI workflows.",
  },
  {
    question: 'Can I see more details about a specific project?',
    answer:
      "Definitely. Each case study below has a deeper dive, and I'm always happy to walk through the full story on a call.",
  },
]

export const contactCards = [
  { icon: 'pin', label: 'Location', value: site.location },
  { icon: 'mail', label: 'Email me', value: site.email, href: `mailto:${site.email}` },
  { icon: 'phone', label: 'Call me', value: site.phone },
]

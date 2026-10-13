import brandLibraryHome from '../assets/Brandlibaryhome.webp'
import blCase1Video from '../assets/BLCase1.mp4'
import emailAIHome from '../assets/EmailAIhome.webp'
import emailAICase1Video from '../assets/EmailAICase1.mp4'

export const projects = [
  {
    slug: 'brand-library',
    badge: 'BRAND LIBRARY',
    title: 'Making brand consistency effortless',
    subtitle:
      "Redesigned how customers manage and reuse brand assets across Klaviyo, simplifying workflows and creating a scalable foundation for future experiences.",
    caseSubtitle:
      "Led the redesign of Klaviyo's Brand Library, making it easier for customers to manage and reuse brand assets across their marketing experiences. From simplifying onboarding to bringing brand assets directly into the editor, the work improved everyday workflows and created a foundation for future AI-powered capabilities.",
    role: 'Lead Product Designer',
    client: 'Klaviyo',
    color: 'lilac',
    image: brandLibraryHome,
    caseVideo: blCase1Video,
    problem:
      'Customers repeatedly added the same logos, colors, and fonts when creating emails and forms, leading to wasted time and inconsistent branding.',
    approach:
      'Led the end-to-end redesign of Brand Library, partnering with research, product, engineering, and design systems to simplify asset setup and make brand elements accessible directly within the editor.',
    impact:
      'Increased Brand Library page visits 4× and reduced asset retrieval time by 40%, helping customers create more consistent, on-brand experiences.',
    stats: [
      { value: '40%', label: 'faster asset retrieval' },
      { value: '4x', label: 'increase in page visits' },
      { value: '100%', label: 'laid groundwork for AI-powered design tools' },
    ],
    caseStats: [
      { value: '40%', label: 'Faster asset retrieval' },
      { value: '4x', label: 'More page visits' },
    ],
    futureHeading: 'Rethinking how brand assets work',
    futureSections: [
      {
        heading: 'The insight',
        paragraphs: [
          'Customers were duplicating existing emails rather than starting with new templates to avoid rebuilding their branding each time. What appeared to be a content creation preference was actually a workaround for maintaining brand consistency.',
        ],
      },
      {
        heading: 'The design decision',
        paragraphs: [
          'I proposed introducing primary brand defaults, allowing customers to select their preferred logos, colors, and fonts and have them automatically applied to new templates.',
          'Working closely with product and engineering, I helped align the team around this approach and incorporate it into a redesigned Brand Library architecture that separated stored assets from primary defaults while keeping both accessible within the editor.',
        ],
      },
      {
        heading: 'Why it mattered',
        paragraphs: [
          'This transformed Brand Library from a place to store assets into a connected system that could apply brand identity throughout the creation experience, reducing repetitive setup and laying the foundation for future brand-aware capabilities.',
        ],
      },
    ],
    showDiagram: true,
    takeawaysIntro:
      'This project reinforced that meaningful design improvements often start by looking beyond the interface to understand the behaviors and challenges behind it.',
    takeaways: [
      {
        heading: 'Solve the underlying problem, not just the UI',
        body: "Customers weren't avoiding new templates because they didn't want to use them. They were duplicating existing emails to preserve their branding. Understanding that behavior led to a solution that addressed the root problem rather than just improving the existing Brand Library.",
      },
      {
        heading: 'Collaboration is essential to solving complex problems',
        body: 'Working closely with product, engineering, and data science was especially important when introducing website scraping during onboarding. Aligning on what users expected and what the technology could deliver helped us shape a more intuitive experience.',
      },
      {
        heading: 'Design for today, but think about tomorrow',
        body: 'By creating a more connected system for managing and applying brand assets, we solved immediate workflow challenges while establishing a foundation that could support future AI-powered experiences.',
      },
    ],
  },
  {
    slug: 'email-ai',
    badge: 'EMAIL AI',
    title: 'Bringing AI into the creative workflow',
    subtitle:
      'Designed an AI-assisted email creation experience that helps customers move from ideas to content faster while maintaining creative control.',
    role: 'Product Designer',
    client: 'Klaviyo',
    color: 'peach',
    image: emailAIHome,
    caseVideo: emailAICase1Video,
    problem:
      'Creating on-brand, high-performing emails in Klaviyo was time-consuming. Users often started from a blank canvas and struggled to design layouts that balanced brand consistency with best practices for conversion.',
    approach:
      'In partnership with our PM, data scientist, engineers, and behavioral designer, I led the design of Email AI, a modular, section-based experience that puts creative control back in the user’s hands. The trust and transparency built into this workflow became a blueprint for how future AI functionality could be thoughtfully introduced across Klaviyo.',
    impact:
      'The launch of Email AI gave users a faster, more flexible way to build emails while maintaining brand consistency and control. Early feedback showed increased confidence in AI-generated content, higher engagement with the editor, and faster time-to-publish, validating a design approach that balances automation with user intent.',
    stats: [
      { value: '60%', label: 'faster to first draft' },
      { value: '4x', label: 'more concepts explored in early testing' },
      { value: '85%', label: 'of users reported easier content creation' },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

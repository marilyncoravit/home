import brandLibraryHome from '../assets/Brandlibaryhome.webp'
import blCase1Video from '../assets/BLCase1.mp4'
import emailAIHome from '../assets/EmailAIhome.webp'
import emailAICase1Video from '../assets/EmailAICase1.mp4'
import artifactHome from '../assets/ArtifactHome.webp'

export const projects = [
  {
    slug: 'brand-library',
    badge: 'BRAND LIBRARY',
    title: 'Making brand consistency effortless',
    subtitle:
      "Redesigned how customers manage and reuse brand assets across Klaviyo, simplifying workflows and creating a scalable foundation for future experiences.",
    caseSubtitle: 'Turning a fragmented workflow into a connected brand experience',
    role: 'Lead Product Designer',
    client: 'Klaviyo',
    color: 'lilac',
    image: brandLibraryHome,
    caseVideo: blCase1Video,
    problem:
      'Customers were duplicating existing emails to preserve their branding rather than starting with new templates. What initially appeared to be a content creation preference revealed a larger opportunity to rethink how brand identity was managed across Klaviyo.',
    approach:
      'I led the redesign of Brand Library, proposing a system of reusable brand defaults that connected onboarding, asset management, and content creation. The experience reduced repetitive work, improved access to brand assets, and established a scalable foundation for future AI-powered capabilities.',
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
    beyondHeading: 'Beyond the redesign',
    beyondCopy:
      "What began as an effort to simplify brand management evolved into a more connected foundation for creating on-brand content across Klaviyo. Seeing that foundation contribute to the evolution of Klaviyo's AI-powered marketing experiences has reinforced something I value in design: the most meaningful work continues creating value long after launch.",
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
  {
    slug: 'artifact',
    badge: 'ARTIFACT',
    title: 'An AI-powered time capsule for designers',
    subtitle:
      "A 48-hour SheBuilds hackathon project that helps designers capture, remix, and tell the story of their work while it's still fresh.",
    caseSubtitle:
      "Built in 48 hours for the SheBuilds hackathon on Lovable, Artifact is an AI-powered time capsule that helps designers capture artifacts, add context, and let AI generate the story behind their work before it gets lost.",
    role: 'Solo Designer & Builder',
    client: 'SheBuilds Hackathon',
    color: 'sky',
    image: artifactHome,
    problem:
      "Designers struggle to keep their portfolios current. Case studies are time-consuming and often written long after a project wraps, and the context behind the work gets lost across Figma, Docs, Slack, and email — especially during layoffs or job searches, when designers scramble to reconstruct their own stories.",
    approach:
      "I designed and built Artifact, an AI-powered time capsule with three modes — Capture, Remix, and Timeline — that let designers save artifacts, add context, and have AI generate the story. Built in 48 hours with Lovable, ChatGPT, and Gemini, the MVP included a structured \"Capsule Editor\" for uploads and prompts, an AI text generator for multiple storytelling formats, and dashboard and timeline prototypes with a conversational, reusable tone.",
    impact:
      "Beyond shipping a working MVP in a weekend, the project reinforced that simplicity invites reflection. It's shaped my thinking on a more conversational next version — one where designers can just drop in files from Figma, Docs, and spreadsheets and let AI make sense of it all.",
    stats: [
      { value: '48 hrs', label: 'from idea to shipped MVP' },
      { value: '3', label: 'AI-powered experience modes' },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

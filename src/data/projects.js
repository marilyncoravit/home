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
    futureParagraphs: [
      'Research revealed that customers needed more than a place to store brand assets. They wanted to quickly establish their brand identity and have it consistently applied across their marketing experiences.',
      'The existing architecture kept brand elements disconnected, making it difficult to distinguish between stored assets and the defaults used in templates.',
      'The solution was to separate asset management from brand defaults while connecting both directly to the editor.',
      'This gave customers the flexibility to manage multiple logos, colors, and fonts, choose their preferred defaults, and easily swap assets without interrupting their workflow.',
      'The result was a more connected experience that simplified everyday tasks while creating a foundation for future brand-aware and AI-powered capabilities.',
    ],
    showDiagram: true,
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

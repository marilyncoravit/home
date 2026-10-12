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
      'Every time users started a new email or form, they had to rebuild their brand from scratch, adding logos, colors, and fonts again and again. This repetitive setup process slowed them down, introduced inconsistencies across channels, and made it difficult to maintain a unified brand presence.',
    approach:
      "In collaboration with research, PM, engineers, and the design system team, I led the end-to-end redesign of Klaviyo's Brand Library, introducing an improved onboarding flow for adding brand assets up front and new in-editor tools that put logos, colors, and fonts right at users' fingertips.",
    impact:
      'The new experience drove a 4× increase in page visits, reduced asset retrieval time by 40%, and laid the groundwork for future AI-powered design tools.',
    stats: [
      { value: '40%', label: 'faster asset retrieval' },
      { value: '4x', label: 'increase in page visits' },
      { value: '100%', label: 'laid groundwork for AI-powered design tools' },
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

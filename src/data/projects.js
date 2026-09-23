import brandLibraryScreenshot from '../assets/brand-library-screenshot.webp'

export const projects = [
  {
    slug: 'brand-library',
    badge: 'End-to-end system redesign',
    title: 'Brand library',
    subtitle: 'Centralize your brand assets once and use them everywhere in Klaviyo',
    role: 'Design Lead',
    client: 'Klaviyo',
    color: 'lilac',
    image: brandLibraryScreenshot,
    problem:
      'Every time users started a new email or form, they had to rebuild their brand from scratch, adding logos, colors, and fonts again and again. This repetitive setup process slowed them down, introduced inconsistencies across channels, and made it difficult to maintain a unified brand presence.',
    approach:
      "In collaboration with research, PM, engineers, and the design system team, I led the end-to-end redesign of Klaviyo's Brand Library, introducing an improved onboarding flow for adding brand assets up front and new in-editor tools that put logos, colors, and fonts right at users' fingertips.",
    impact:
      'The new experience drove a 4× increase in page visits, reduced asset retrieval time by 40%, and laid the groundwork for future AI-powered design tools.',
    stats: [
      { value: '40%', label: 'reduction in asset retrieval time' },
      { value: '4x', label: 'page visit increase' },
      { value: '100%', label: 'laid groundwork for AI-powered design tools' },
    ],
  },
  {
    slug: 'email-ai',
    badge: 'AI-powered workflow design',
    title: 'Email AI',
    subtitle: 'AI that builds your next section for you.',
    role: 'Product Designer',
    client: 'Klaviyo',
    color: 'peach',
    problem:
      'Creating on-brand, high-performing emails in Klaviyo was time-consuming. Users often started from a blank canvas and struggled to design layouts that balanced brand consistency with best practices for conversion.',
    approach:
      'In partnership with our PM, data scientist, engineers, and behavioral designer, I led the design of Email AI, a modular, section-based experience that puts creative control back in the user’s hands. The trust and transparency built into this workflow became a blueprint for how future AI functionality could be thoughtfully introduced across Klaviyo.',
    impact:
      'The launch of Email AI gave users a faster, more flexible way to build emails while maintaining brand consistency and control. Early feedback showed increased confidence in AI-generated content, higher engagement with the editor, and faster time-to-publish, validating a design approach that balances automation with user intent.',
    stats: [
      { value: '60%', label: 'Quicker to first draft' },
      { value: '4x', label: 'more concept iterations explored in early testing' },
      { value: '85%', label: 'of users reported easier content creation' },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

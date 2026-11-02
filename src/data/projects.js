import brandLibraryHome from '../assets/Brandlibaryhome.webp'
import blCase1Video from '../assets/BLCase1.mp4'
import emailAIHome from '../assets/EmailAIhome.webp'
import emailAICase1Video from '../assets/EmailAICase1.mp4'
import emailAIResearchInsight from '../assets/EmailAIResearchInsight.webp'
import emailAIIdeation from '../assets/EmailAIIdeation.webp'
import emailAIPatterns from '../assets/EmailAIPatterns.webp'
import emailAIStartSmall from '../assets/EmailAIStartSmall.webp'
import emailAIClarity from '../assets/EmailAIClarity.webp'
import artifactHome from '../assets/ArtifactHome.webp'
import imageEditingHome from '../assets/ImageEditingHome.webp'
import imageEditingExploration from '../assets/ImageEditingExploration.webp'
import imageEditingShapes from '../assets/ImageEditingShapes.webp'

export const projects = [
  {
    slug: 'brand-library',
    badge: 'BRAND LIBRARY',
    title: 'Making brand consistency effortless',
    subtitle:
      "Redesigned how customers manage and reuse brand assets across Klaviyo, simplifying workflows and creating a scalable foundation for future experiences.",
    caseSubtitle: 'Turning a fragmented workflow into a connected brand experience',
    openingParagraphs: [
      'Customers were duplicating existing emails to preserve their branding rather than starting with new templates. What initially appeared to be a content creation preference revealed a larger opportunity to rethink how brand identity was managed across Klaviyo.',
      'I led the redesign of Brand Library, proposing a system of reusable brand defaults that connected onboarding, asset management, and content creation. The experience reduced repetitive work, improved access to brand assets, and established a scalable foundation for future AI-powered capabilities.',
    ],
    role: 'Lead Product Designer',
    client: 'Klaviyo',
    color: 'lilac',
    image: brandLibraryHome,
    caseVideo: blCase1Video,
    problem:
      'Customers were duplicating existing emails to preserve their branding rather than starting with new templates. What initially appeared to be a content creation preference revealed a larger opportunity to rethink how brand identity was managed across Klaviyo.',
    approach:
      'Identified opportunities to improve brand consistency across the customer journey and influenced product priorities to expand Brand Library beyond asset storage. Led the redesign, introducing reusable brand defaults and helping shape an automated onboarding experience in collaboration with Product Management, Data Science, and Engineering.',
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
    futureHeading: 'Shaping the product direction',
    futureSections: [
      {
        heading: 'Looking beyond the existing experience',
        paragraphs: [
          'Customers were duplicating existing emails rather than starting with new templates to preserve their branding. This revealed a larger opportunity to improve how brand identity was managed and reused across Klaviyo.',
        ],
      },
      {
        heading: 'Expanding the vision for Brand Library',
        paragraphs: [
          'I recommended redesigning the existing Brand Library and introducing a dedicated Defaults section where customers could establish their primary logos, colors, and fonts.',
          'This expanded the solution beyond asset management to support a more connected experience, allowing brand preferences to carry through to new templates and reducing repetitive setup. Working with Product Management and Engineering, I helped align the team around this direction and translate it into a scalable experience.',
        ],
      },
      {
        heading: 'Influencing the onboarding roadmap',
        paragraphs: [
          "We also advocated for prioritizing an onboarding experience that would automatically capture brand assets from new signups' websites.",
          'Rather than requiring customers to build their Brand Library manually, this approach would give them a starting point that they could review and customize.',
          'I partnered with Product Management, Data Science, and Engineering to shape how detected assets were presented and incorporated into the onboarding experience, balancing technical capabilities with customer expectations.',
        ],
      },
      {
        heading: 'The outcome',
        paragraphs: [
          'These decisions helped evolve Brand Library from a standalone asset repository into a connected system spanning onboarding, brand management, and content creation, while establishing a foundation for future AI-powered experiences.',
        ],
      },
    ],
    showDiagram: true,
    takeawaysHeading: 'Reflections and learnings',
    takeaways: [
      {
        heading: 'Challenge the problem before designing the solution',
        body: 'The most important insight came from understanding why customers duplicated existing emails. Recognizing the workaround helped redirect the work toward a more meaningful solution.',
      },
      {
        heading: 'Create alignment around the customer experience',
        body: 'The redesign required decisions across onboarding, asset management, and editing workflows. Keeping the customer journey at the center helped connect work across Product, Engineering, Data Science, and Design Systems.',
      },
      {
        heading: 'Build foundations that extend beyond the initial release',
        body: 'Separating brand assets from reusable defaults addressed immediate customer needs while creating a system that could support future brand-aware and AI-powered experiences.',
      },
    ],
    beyondHeading: 'Beyond the redesign',
    beyondCopy: [
      "What started as an effort to simplify brand management became a foundation for more connected, on-brand experiences across Klaviyo. By making brand identity reusable throughout the content creation process, the redesign addressed immediate customer frustrations while helping enable future AI-powered capabilities.",
      "For me, it's a reminder that thoughtful product design isn't just about solving today's problems. It's about creating experiences that continue to deliver value as the product evolves.",
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
    caseSubtitle: 'Turning a blank canvas into a fast, on-brand starting point',
    openingParagraphs: [
      'Marketers spent too long starting from scratch, and existing AI tools felt detached from brand context. The challenge was to make content generation fast and on-brand, right inside the editor.',
      "I led the design of Email AI for marketers, e-commerce owners, and lifecycle managers who were staring at a blank editor, reusing old campaigns to save time, or struggling to stay on-brand without a dedicated copywriter or designer. The goal was to help them move from blank canvas to on-brand draft faster, without sacrificing control or quality.",
    ],
    image: emailAIHome,
    caseVideo: emailAICase1Video,
    problem:
      'Marketers spent too long starting from scratch, and existing AI tools felt detached from brand context. The challenge was to make content generation fast and on-brand, right inside the editor.',
    approach:
      "I led the design of Email AI, partnering with product, engineering, and data science to shape an experience that automates repetitive writing and layout tasks while keeping creative decisions, like storytelling and brand tone, in the user's hands. Grounding generation in brand data and keeping edit paths visible kept users in control throughout.",
    impact:
      'We launched a focused MVP to observe real behavior, tracking adoption, time-to-draft, and regenerate frequency. After iterating on how visible AI was within the editor, early signals showed improved recognition and usage without major structural changes, validating a design approach that balances automation with user intent.',
    stats: [
      { value: '60%', label: 'faster to first draft' },
      { value: '4x', label: 'more concepts explored in early testing' },
      { value: '85%', label: 'of users reported easier content creation' },
    ],
    futureHeading: 'Designing a thoughtful AI collaborator',
    futureSections: [
      {
        heading: 'Understanding the opportunity',
        paragraphs: [
          'Primary users were marketers, e-commerce owners, and lifecycle managers juggling multiple channels with little time for content creation. Contextual interviews and usability tests surfaced a consistent pattern: users struggled to start, but valued control once they did, often reusing old campaigns just to avoid a blank canvas.',
        ],
        image: emailAIResearchInsight,
        imageAlt:
          'Three-panel research sketch: a user facing a blank canvas, copying from previous emails, and finally writing something after it took too long',
        imageCaption: 'Users struggle to start, but value control.',
        morePara:
          "That insight shaped where AI could help most. Mapping tasks by creative value and complexity showed AI was best positioned to assist with drafting and layout, work with high creative value but low-to-moderate complexity, while leaving storytelling and brand tone to the user and reserving full automation for low-value, high-complexity tasks like segmentation logic and scheduling.",
      },
      {
        heading: 'From concept to interface',
        paragraphs: [
          'I brainstormed prompt-based versus structured generation flows and prototyped several entry points, including a sidebar modal, an inline assistant, and quick actions, before landing on a "Design with AI" panel that let users describe a section and generate on-brand drafts directly in the editor.',
        ],
        image: emailAIIdeation,
        imageAlt: 'Three stacked prompt cards generating on-brand images from a text description',
        morePara:
          'Partnering closely with data science and engineering, I helped define what "good" AI output looked like: visual harmony between generated blocks, diversity across the drafts shown, responses that followed the user\'s input, concise and on-brand copywriting, and content that avoided practices with negative implications for Klaviyo\'s senders, like spam-triggering language. I also sketched a small library of hero and article layouts to guide consistent padding, spacing, and structure across generated sections, and used quick proof-of-concepts to validate before the full build.',
      },
      {
        heading: 'Learning from real usage',
        paragraphs: [
          'We launched a focused MVP to observe real behavior, tracking adoption, time-to-draft, and regenerate frequency. Early usage showed adoption, but also discoverability gaps: the AI tool was easy to miss inside the editor flow.',
          "I explored three ways to surface AI in context: an educational popover, which felt intrusive and could fall below the fold; an announcement banner introducing the feature through familiar editor blocks; and a deeper IA restructure to mirror Klaviyo's Forms editor, which was too heavy a lift given the team's early confidence in its ROI.",
        ],
      },
      {
        heading: 'Making AI impossible to miss',
        paragraphs: [
          'I landed on a simpler fix instead: updating the sparkle toolbar icon to the primary intelligence color and adding a purple highlight around AI-generated sections, with the tool opening automatically once a block was placed. Early signals showed improved recognition and usage without major structural changes.',
        ],
      },
      {
        heading: 'Defining the AI experience while designing it',
        paragraphs: [
          'AI within Klaviyo was still emerging: naming, visuals, tone, and usage patterns were all being defined in real time. Cross-functional working sessions with product, data science, and design systems shaped foundational decisions, from what to call AI across the product to how it should look and feel and how to inform users of generation limits and transparency.',
        ],
        image: emailAIPatterns,
        imageAlt: 'A grid of section block cards exploring different placements and treatments for the AI sparkle badge',
        morePara:
          "The outcome was a shared AI design language that balanced trust, clarity, and consistency, a foundation other AI features across Klaviyo could build on.",
      },
    ],
    showDiagram: true,
    takeawaysHeading: 'Reflections & Learnings',
    takeaways: [
      {
        heading: 'Start small, learn fast',
        body: 'Launching a focused MVP let us observe real behavior instead of guessing. Tracking adoption and regenerate frequency surfaced the discoverability gap faster than a longer research phase would have, giving us a clear, low-risk path to iterate before investing in a larger redesign.',
        image: emailAIStartSmall,
        imageAlt: 'The AI rewrite panel open on a block of text, offering to regenerate copy based on user feedback',
      },
      {
        heading: 'Clarity before creativity',
        body: "Giving users visible feedback, like rate limits, prompts to add more detail, and a way to rate drafts as helpful or not, mattered more than polishing the generation itself. Clear, honest signals about what the AI could and couldn't do built more trust than a flashier interface would have.",
        image: emailAIClarity,
        imageAlt: 'A generated section draft shown with "Was this helpful?" feedback controls and an Insert draft action',
      },
    ],
  },
  {
    slug: 'image-editing',
    badge: 'IMAGE EDITING',
    title: 'Making image editing feel effortless',
    subtitle: "Simplifying everyday creative workflows within Klaviyo's email editor.",
    caseSubtitle: "Simplifying everyday creative workflows within Klaviyo's email editor",
    openingParagraphs: [
      "Customers were running into friction with everyday image-editing tasks, cropping and resizing images directly within Klaviyo's email editor. These pain points showed up in support tickets and made routine content creation harder than it needed to be.",
      "I was the primary designer on the redesign, from early exploration through implementation, simplifying how customers cropped and resized images while supporting common aspect ratios and precise adjustments. After shipping the core experience, I handed the project to another designer and continued mentoring them through the enhancements that followed.",
    ],
    role: 'Lead Product Designer',
    client: 'Klaviyo',
    color: 'blush',
    image: imageEditingHome,
    screenshots: [imageEditingHome],
    problem:
      'Customers were experiencing friction with common image-editing tasks, particularly cropping and resizing images within the email editor. These issues contributed to support tickets and made everyday content creation more difficult than it needed to be.',
    approach:
      'I led the design exploration, evaluating interaction patterns and refining the cropping and resizing experience. The work focused on making cropping controls easier to understand, supporting common aspect ratios alongside precise dimension adjustments, helping customers preview how their images would appear in their emails, and reducing friction within the existing editing workflow.',
    impact:
      'Within weeks of launch, 24% of weekly email template editors were using the crop button and 22% were cropping images, both close to goal. Support tickets related to images dropped 5%, meeting the goal of no increase despite the added complexity of new controls.',
    stats: [
      { value: '24%', label: 'of weekly editors used the crop button' },
      { value: '22%', label: 'of weekly editors cropped images' },
      { value: '5%', label: 'fewer image-related support tickets' },
    ],
    futureHeading: 'Designing a more intuitive crop experience',
    futureSections: [
      {
        heading: 'Rethinking the image-editing experience',
        paragraphs: [
          "Klaviyo relied on a third-party tool to support image editing, and cropping and resizing were consistently the pain points customers ran into. The opportunity was to bring a simpler, more intuitive editing experience directly into Klaviyo's own editor.",
        ],
        image: imageEditingExploration,
        imageAlt: 'Existing versus proposed image block concepts explored during the redesign',
        imageCaption: 'Comparing the existing image block with early proposed concepts.',
      },
      {
        heading: 'Designing a more intuitive workflow',
        paragraphs: [
          'I focused the redesign on a few key moments: making the crop entry point obvious from the image panel, supporting common aspect ratios alongside precise width and height inputs, and giving customers a live preview of how their crop would look in the email before committing to it.',
        ],
      },
      {
        heading: 'Iterating and refining',
        paragraphs: [
          'The crop tool went through several rounds of refinement, from an early custom-dimensions-only version to one that paired common ratios, like 1:1, 16:9, and 4:3, with the flexibility of custom width and height, so customers could move quickly without losing control over the result.',
        ],
      },
      {
        heading: 'Extending the experience through mentorship',
        paragraphs: [
          'After shipping the core redesign, I handed the project to another designer and stayed on as a mentor through the enhancements that followed, helping them frame the problem, explore alternative approaches, evaluate tradeoffs, and extend the pattern without introducing unnecessary complexity.',
          'That collaboration led to a fast follow-up: the ability to crop into specific shapes, like squares and circles, using the same interaction patterns customers had already learned.',
        ],
        image: imageEditingShapes,
        imageAlt: 'Expanded crop shape options including common ratios and a circle crop',
        imageCaption: 'A later enhancement extended cropping to include shapes like circles.',
      },
    ],
    showDiagram: true,
    outcomesHeading: 'Reducing friction in a frequently used workflow',
    outcomesCopy: [
      'The redesigned crop experience saw strong early adoption, with 24% of weekly email template editors using the new crop button and 22% cropping images, both landing close to goal within weeks of launch.',
      'Support tickets related to images dropped 5%, meeting the goal of no increase even as the tool gained more capability. For a workflow customers rely on every time they build an email, that reduction in friction adds up: less time troubleshooting, more time creating.',
    ],
    takeawaysHeading: 'Reflections & Learnings',
    takeaways: [
      {
        heading: 'Everyday interactions deserve the same rigor as big features',
        body: "Cropping and resizing aren't flashy, but customers touch them constantly. Getting the small, frequent interactions right often matters more to day-to-day satisfaction than a bigger, less-used feature would.",
      },
      {
        heading: 'Balance simplicity with flexibility',
        body: 'Common aspect ratios made the fast path obvious, but keeping custom dimensions available meant customers with specific needs were never boxed in. Neither option alone would have worked as well.',
      },
      {
        heading: 'Design for the next designer, too',
        body: 'Handing off a feature works best when the patterns are clear enough for someone else to extend with confidence. Staying involved as a mentor, rather than stepping away entirely, helped keep later enhancements consistent with the original intent.',
      },
    ],
  },
  {
    slug: 'artifact',
    badge: 'Fun stuff',
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

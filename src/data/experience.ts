// Edit this file to update the Experience section.
export type DemoKey = 'bulk' | 'speed' | 'errors' | 'gma';
export interface Highlight {
  title: string;       // short, scannable headline
  detail: string;      // one or two sentences shown when expanded
  skills: string[];    // must match entries in `skills` of the role
  demo?: DemoKey;      // which interactive demo/tab this highlight opens
}
export interface Role {
  title: string;
  type?: string;       // e.g. Internship
  period: string;
  summary: string;
  skills: string[];
  highlights: Highlight[];
}
export interface Company {
  name: string;
  location?: string;
  demo?: DemoKey;      // opened by the company's "Launch interactive demo" button
  roles: Role[];
}

export const veloce: Company = {
  name: 'Veloce',
  demo: 'bulk',
  roles: [
    {
      title: 'Software Engineer',
      type: 'Internship',
      period: 'Jul 2025 – Sep 2025 · 3 mos',
      summary: 'Built enhancements to a client\u2019s Salesforce platform, focused on making quoting (CPQ) faster and smoother.',
      skills: ['Salesforce', 'CPQ', 'Performance', 'Error handling', 'Collaboration'],
      highlights: [
        {
          title: 'Delivered Salesforce CPQ enhancements',
          detail: 'Shipped enhancements to the Salesforce platform with a focus on CPQ (Configure, Price, Quote) efficiency. Three key pieces are below, each with a hands-on demo.',
          skills: ['Salesforce', 'CPQ'],
        },
        {
          title: 'Bulk line item editing · ~3× faster',
          detail: 'Let users edit many quote line items at once instead of one at a time, speeding up editing by roughly 3×. Try it: the demo times you both ways.',
          skills: ['Salesforce', 'CPQ'],
          demo: 'bulk',
        },
        {
          title: 'Bug fixes that cut time between actions',
          detail: 'Fixed multiple bugs that made the quote editor sluggish, reducing the wait between user actions and improving quote cycle time.',
          skills: ['CPQ', 'Performance'],
          demo: 'speed',
        },
        {
          title: 'Stack traces → plain-language errors',
          detail: 'Turned raw stack-trace error banners into clear, plain-language messages that say what went wrong and how to fix it, so users aren\u2019t left confused.',
          skills: ['Salesforce', 'Error handling'],
          demo: 'errors',
        },
        {
          title: 'Drove user adoption with the client team',
          detail: 'Worked closely with the client project manager and the engineering team to make sure the changes were adopted by users.',
          skills: ['Collaboration'],
        },
      ],
    },
  ],
};

export const gma: Company = {
  name: 'GMA Upload Portal',
  location: 'with the Developmental Disabilities Association',
  demo: 'gma',
  roles: [
    {
      title: 'Developer',
      type: 'Project',
      period: 'Summer 2026',
      summary: 'Designed and built a secure web portal that takes a family\u2019s assessment video from one private link all the way to the clinic\u2019s files and spreadsheet, for the Vancouver Infant Development Program.',
      skills: ['Next.js', 'Microsoft 365', 'Automation', 'Security', 'UX'],
      highlights: [
        {
          title: 'One private link does the whole job',
          detail: 'Staff pick a child and generate a single-use, time-limited link. The family opens it on their phone or computer, with no account to create, and uploads one video. Staff never have to touch the file.',
          skills: ['Security', 'UX'],
          demo: 'gma',
        },
        {
          title: 'Annotation happens automatically',
          detail: 'Each file is named from the child\u2019s details, the date recorded and the child\u2019s age in weeks (calculated from the due date), so it arrives labelled and searchable with nothing typed by staff.',
          skills: ['Automation'],
          demo: 'gma',
        },
        {
          title: 'Excel tracking updates itself',
          detail: 'The clinic\u2019s own workbook drives the child picker. After an upload, the portal stamps the \u201cvideo received\u201d date and moves the child\u2019s row to the done sheet, so data entry is already finished.',
          skills: ['Microsoft 365', 'Automation'],
          demo: 'gma',
        },
        {
          title: 'Lands in the clinic\u2019s own storage, with a heads-up',
          detail: 'Large videos (up to 4 GB) upload in chunks straight into the clinic\u2019s OneDrive/SharePoint. Staff get an email with a direct link the moment a video arrives.',
          skills: ['Microsoft 365', 'Next.js'],
          demo: 'gma',
        },
        {
          title: 'Admin console built for non-developers',
          detail: 'A staff console, restricted to approved Microsoft work accounts, lets admins create or schedule links, track their status, manage who is notified and adjust timings, with built-in step-by-step guides.',
          skills: ['Security', 'UX', 'Next.js'],
        },
      ],
    },
  ],
};

export const companies: Company[] = [gma, veloce];

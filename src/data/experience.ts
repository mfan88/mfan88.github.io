// Edit this file to update the Experience section. Everything below is PLACEHOLDER
// content until real details are filled in from LinkedIn.
export interface Highlight {
  title: string;       // short, scannable headline
  detail: string;      // one or two sentences shown when expanded
  skills: string[];    // must match entries in `skills` of the role
  demo?: 'bulk' | 'speed' | 'errors'; // opens the Quote Editor demo on this tab
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
  roles: Role[];
}

export const veloce: Company = {
  name: 'Veloce',
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
          title: 'Clearer error handling',
          detail: 'Enhanced error handling so users see what went wrong and how to fix it, avoiding confusion and reducing support handoffs.',
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

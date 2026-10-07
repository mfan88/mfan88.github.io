// Edit this file to update the Experience section. Everything below is PLACEHOLDER
// content until real details are filled in from LinkedIn.
export interface Highlight {
  title: string;       // short, scannable headline
  detail: string;      // one or two sentences shown when expanded
  skills: string[];    // must match entries in `skills` of the role
  demo?: 'cpq' | 'workflow' | 'bulk' | 'adoption'; // which fake Salesforce modal to open
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
      skills: ['Salesforce', 'CPQ', 'Workflow optimization', 'Collaboration'],
      highlights: [
        {
          title: 'Delivered Salesforce CPQ enhancements',
          detail: 'Shipped enhancements to the Salesforce platform with a focus on CPQ (Configure, Price, Quote) efficiency.',
          skills: ['Salesforce', 'CPQ'],
          demo: 'cpq',
        },
        {
          title: 'Streamlined quoting workflows',
          detail: 'Optimized quoting workflows to minimize support handoffs and improve quote cycle time, improving the day-to-day user experience.',
          skills: ['CPQ', 'Workflow optimization'],
          demo: 'workflow',
        },
        {
          title: 'Enabled bulk revisions',
          detail: 'Added bulk revision support so users can update many quotes at once, improving user productivity.',
          skills: ['Salesforce', 'Workflow optimization'],
          demo: 'bulk',
        },
        {
          title: 'Drove user adoption with the client team',
          detail: 'Worked closely with the client project manager and the engineering team to make sure the changes were adopted by users.',
          skills: ['Collaboration'],
          demo: 'adoption',
        },
      ],
    },
  ],
};

// Edit this file to update the Experience section. Everything below is PLACEHOLDER
// content until real details are filled in from LinkedIn.
export interface Highlight {
  title: string;       // short, scannable headline
  detail: string;      // one or two sentences shown when expanded
  skills: string[];    // must match entries in `skills` of the role
}
export interface Role {
  title: string;
  period: string;
  summary: string;
  skills: string[];
  highlights: Highlight[];
}
export interface Company {
  name: string;
  location: string;
  roles: Role[];
}

export const veloce: Company = {
  name: 'Veloce',
  location: 'TODO: location',
  roles: [
    {
      title: 'TODO: Role title',
      period: 'TODO: Mon YYYY – Mon YYYY',
      summary: 'TODO: One-sentence summary of what you did at Veloce.',
      skills: ['Skill A', 'Skill B', 'Skill C'],
      highlights: [
        { title: 'TODO: Highlight one', detail: 'TODO: What you did and the impact (numbers help).', skills: ['Skill A'] },
        { title: 'TODO: Highlight two', detail: 'TODO: What you did and the impact (numbers help).', skills: ['Skill B', 'Skill C'] },
        { title: 'TODO: Highlight three', detail: 'TODO: What you did and the impact (numbers help).', skills: ['Skill A', 'Skill C'] },
      ],
    },
  ],
};

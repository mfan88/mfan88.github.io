// Edit this file to update the Projects section.
import type { Highlight } from './experience';

export interface Project {
  name: string;
  tagline: string;
  status: string;
  logo?: string;
  summary: string;
  built: string;        // short tech line
  skills: string[];
  groups: { label: string; highlights: Highlight[] }[];
  demo?: 'nmd';
}

export const navigateMyDay: Project = {
  name: 'NavigateMyDay',
  tagline: 'Your calendar, turned into directions.',
  status: 'iOS app · in TestFlight',
  demo: 'nmd',
  logo: '/projects/navigatemyday.svg',
  summary:
    'A native iPhone app that links calendar events to places, works out when you need to leave, and starts directions in one tap. It is built for busy professionals who are always on the move, and for people who need a little help getting where they need to go.',
  built: 'SwiftUI · SwiftData · EventKit · MapKit · WidgetKit · App Intents · CarPlay',
  skills: ['Navigation', 'Calendars', 'Hands-free', 'Assisted Care', 'Accessibility'],
  groups: [
    {
      label: 'For professionals on the move',
      highlights: [
        {
          title: 'Calendar events become destinations',
          detail: 'Connects Apple, Google and Microsoft calendars, and links each event to a saved place (with address autocomplete), so every meeting already knows where it is.',
          skills: ['Calendars', 'Navigation'],
          demo: 'nmd',
        },
        {
          title: 'Knows when to leave',
          detail: 'Estimates travel time and shows a clear “leave by” time for the next event, with departure reminders so you are never doing the maths in your head.',
          skills: ['Navigation'],
          demo: 'nmd',
        },
        {
          title: 'One tap to turn-by-turn',
          detail: 'Hands the destination to Apple Maps or Google Maps, whichever you prefer, instead of making you retype an address.',
          skills: ['Navigation'],
          demo: 'nmd',
        },
        {
          title: 'Hands-free: widget, CarPlay and Siri',
          detail: 'A Home Screen widget shows what is next. In the car, a CarPlay Driving Task lists the next event and saved places, and saying “Next stop” to Siri starts directions.',
          skills: ['Hands-free'],
          demo: 'nmd',
        },
      ],
    },
    {
      label: 'For people who need help getting around',
      highlights: [
        {
          title: 'Assisted Care: a caregiver sets up the day',
          detail: 'Caregivers create a location group, share it with a code or QR, curate the places that matter, and publish a day sheet for the person they support.',
          skills: ['Assisted Care'],
          demo: 'nmd',
        },
        {
          title: 'A simple “next up” screen',
          detail: 'The person sees only what is next, when to leave and one big button to be taken there, plus their own curated places. If nothing is published yet, it says so plainly.',
          skills: ['Assisted Care', 'Accessibility'],
          demo: 'nmd',
        },
        {
          title: 'Check-ins keep everyone connected',
          detail: 'The person can send a quick check-in that caregivers see, and group membership can be restored after a reinstall, so help does not depend on tech know-how.',
          skills: ['Assisted Care', 'Accessibility'],
          demo: 'nmd',
        },
      ],
    },
  ],
};

export const projects: Project[] = [navigateMyDay];

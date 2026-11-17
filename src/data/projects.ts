// Edit this file to update the Projects section.
import type { Highlight, MockKind } from './experience';

export interface Project {
  name: string;
  tagline: string;
  status: string;
  logo?: string;
  summary: string;
  built: string;        // short tech line
  skills: string[];
  groups: { label: string; highlights: Highlight[] }[];
  mock?: MockKind;
}

export const navigateMyDay: Project = {
  name: 'NavigateMyDay',
  tagline: 'Your calendar, turned into directions.',
  status: 'iOS app · in TestFlight',
  mock: 'nmd',
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
        },
        {
          title: 'Knows when to leave',
          detail: 'Estimates travel time and shows a clear “leave by” time for the next event, with departure reminders so you are never doing the maths in your head.',
          skills: ['Navigation'],
        },
        {
          title: 'One tap to turn-by-turn',
          detail: 'Hands the destination to Apple Maps or Google Maps, whichever you prefer, instead of making you retype an address.',
          skills: ['Navigation'],
        },
        {
          title: 'Hands-free: widget, CarPlay and Siri',
          detail: 'A Home Screen widget shows what is next. In the car, a CarPlay Driving Task lists the next event and saved places, and saying “Next stop” to Siri starts directions.',
          skills: ['Hands-free'],
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
        },
        {
          title: 'A simple “next up” screen',
          detail: 'The person sees only what is next, when to leave and one big button to be taken there, plus their own curated places. If nothing is published yet, it says so plainly.',
          skills: ['Assisted Care', 'Accessibility'],
        },
        {
          title: 'Check-ins keep everyone connected',
          detail: 'The person can send a quick check-in that caregivers see, and group membership can be restored after a reinstall, so help does not depend on tech know-how.',
          skills: ['Assisted Care', 'Accessibility'],
        },
      ],
    },
  ],
};

export const flowPT: Project = {
  name: 'FlowPT',
  tagline: 'Clinic software that keeps client data on the clinician\u2019s machine.',
  status: 'Desktop app · in progress',
  mock: 'flowpt',
  summary:
    'A local-first, multi-platform desktop app for private clinicians that covers clinical notes, invoicing and payments. An embedded vision-language model runs on the clinician\u2019s own machine, so client data never has to leave it.',
  built: 'Qt · C++ · Local vision-language model · Optional cloud sync',
  skills: ['Local-first', 'On-device AI', 'Privacy'],
  groups: [
    {
      label: 'What it does',
      highlights: [
        {
          title: 'Notes, invoicing and payments in one app',
          detail: 'Clinicians write clinical notes, create invoices and track payments without switching tools.',
          skills: ['Local-first'],
        },
        {
          title: 'Note suggestions from earlier charts',
          detail: 'A vision-language model embedded in the app suggests notes based on a client\u2019s previous charts, running entirely on the clinician\u2019s machine.',
          skills: ['On-device AI', 'Privacy'],
        },
        {
          title: 'Invoice templates pulled from PDFs',
          detail: 'The same local model extracts an invoice template from an existing PDF, so clinicians keep the invoice layout they already use.',
          skills: ['On-device AI'],
        },
        {
          title: 'Cloud sync only if you want it',
          detail: 'Data stays on the device by default. Cloud sync is optional.',
          skills: ['Local-first', 'Privacy'],
        },
      ],
    },
  ],
};

export const projects: Project[] = [navigateMyDay, flowPT];

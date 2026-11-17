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
  logo: '/projects/navigatemyday.png',
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

export const kineo: Project = {
  name: 'kineō',
  tagline: 'Simple notes and invoicing for solo physiotherapists.',
  status: 'Desktop and phone app · early beta',
  mock: 'kineo',
  summary:
    'Most clinic software is built for clinics with many practitioners. It comes with scheduling, insurance billing, reporting and dozens of settings. A physiotherapist working alone mostly needs two things after a session: write the note and send the invoice. kineō does less on purpose.',
  built: 'TypeScript · React · React Native / Expo · Tauri (Rust) · Supabase / Postgres · PowerSync · Clerk · HeroUI · Zod · Vitest · pgTAP',
  skills: ['Product', 'Invoicing', 'Offline-first', 'Architecture', 'Privacy', 'AI workflow'],
  groups: [
    {
      label: 'The product',
      highlights: [
        {
          title: 'One home screen: “Who are you seeing?”',
          detail: 'Everything starts from one home screen. From there you find a patient, write the note and see what needs attention, like visits ready to invoice and invoices waiting on payment.',
          skills: ['Product'],
        },
        {
          title: 'Fast visit notes',
          detail: 'Quick-tap chips for common findings, dictation, copying the last visit’s note, and items attached from your price list.',
          skills: ['Product'],
        },
        {
          title: 'Invoicing with a full lifecycle',
          detail: 'One invoice can cover several visits. It has optional tax, numbers that only count up in a format you choose, and a full lifecycle (draft → sent → paid, plus cancel and undo), with locking so sent records never change.',
          skills: ['Invoicing'],
        },
        {
          title: 'Funded patients',
          detail: 'You can bill a funder instead of the patient, and sending is checked so each required detail is filled in first.',
          skills: ['Invoicing'],
        },
        {
          title: 'Invoice styling on desktop',
          detail: 'Logo, accent colour, font, header layout and footer, with a PDF preview that matches exactly what the patient receives.',
          skills: ['Invoicing', 'Product'],
        },
        {
          title: 'Offline first',
          detail: 'Reads and writes go to a local SQLite database and sync in the background.',
          skills: ['Offline-first'],
        },
      ],
    },
    {
      label: 'How it’s built',
      highlights: [
        {
          title: 'Monorepo, TypeScript everywhere',
          detail: 'A desktop app (Tauri 2 + React + HeroUI), a phone app (Expo + React Native + HeroUI Native) and a marketing website.',
          skills: ['Architecture'],
        },
        {
          title: 'Shared core package',
          detail: 'The invoice maths, Zod validation and sync logic live in one place, so the apps never duplicate business rules. Money is stored as integer cents and tax as basis points, with no floating point.',
          skills: ['Architecture', 'Invoicing'],
        },
        {
          title: 'Supabase backend with row-level security',
          detail: 'Postgres with row-level security on every table, keyed to Clerk user IDs. Server-side triggers and functions enforce locking and invoice numbering.',
          skills: ['Architecture', 'Privacy'],
        },
        {
          title: 'PowerSync between devices',
          detail: 'PowerSync syncs each device’s local SQLite with Postgres. The server settles invoice-number conflicts between devices.',
          skills: ['Offline-first', 'Architecture'],
        },
        {
          title: 'Tested down to the database',
          detail: 'Vitest and Jest for the apps, and pgTAP tests for database security and lock rules.',
          skills: ['Architecture', 'Privacy'],
        },
        {
          title: 'Shared design system',
          detail: 'A shared token package with light and dark themes and WCAG-minded contrast. Loading, empty and error states are required on every screen.',
          skills: ['Product', 'Architecture'],
        },
      ],
    },
    {
      label: 'Privacy and process',
      highlights: [
        {
          title: 'Privacy by design',
          detail: 'kineō handles personal health information, so the rules are strict. No secrets go in client code. Patient details never appear in logs or error messages, auth tokens live in secure storage, and test fixtures use only made-up data.',
          skills: ['Privacy'],
        },
        {
          title: 'Multi-agent AI development workflow',
          detail: 'Claude and Gemini “PM” agents split the work into Linear tickets and coordinated through Slack, and each PR had to pass review from both sides before it reached me for the final review and merge.',
          skills: ['AI workflow'],
        },
      ],
    },
  ],
};

export const projects: Project[] = [navigateMyDay, kineo];

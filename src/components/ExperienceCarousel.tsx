import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  logo?: string;
  skills?: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Veloce",
    period: "Summer 2025",
    logo: "/assets/velocpq_logo.jpg",
    skills: ["Salesforce", "Apex", "CPQ", "JavaScript", "Lightning Web Components", "Angular", "Customer Success"],
    description:
      "- Delivered enhancements to the Salesforce platform, focusing on CPQ efficiency.\n- Improved user experience by optimizing quoting workflows, minimizing support handoffs, and improving quote cycle time.\n- Improved user productivity by enabling bulk revisions.\n- Collaborated closely with the client project manager and engineering team to ensure user adoption.",
  },
  {
    title: "Software Engineer Consultant",
    company: "Developmental Disabilities Association",
    period: "Summer 2026",
    logo: "/assets/developmental_disabilities_association_logo.jpg",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "Azure Graph API"],
    description:
      "-Working on a project to help the Developmental Disabilities Association by developing a website to improve physio-client communications\n-Creating a file sharing system to easily allow parents to send necessary documents with their child's physiotherapist.\n-Enabling easy access for parents to share content with their healthcare professionals throughout their process of development.",
  },
  {
    title: "Data Acquisition Team Member (Software Engineer)",
    company: "Western Formula SAE",
    period: "2025 - Present",
    logo: "/assets/western_formula_sae_logo.jpg",
    skills: ["React", "TypeScript", "Python", "Machine Learning"],
    description:
      "-Developing a machine learning model to predict the performance of a formula car based on its data.\n-Developed React components for the visualizations of CAN bus data.\n-Developed data sorting and filtering systems for faster and easier data analysis.",
  },
];

const INITIAL_INDEX: number = 1;
const CARD_WIDTH = 68;
const CARD_GAP = 32;

function getCardStyle(index: number, activeIndex: number) {
  const offset = index - activeIndex;
  const isActive = offset === 0;

  return {
    width: `${CARD_WIDTH}%`,
    left: `${50 + offset * CARD_GAP}%`,
    transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.9})`,
  };
}

export default function ExperienceCarousel() {
  return (
    <div className="flex h-full w-full flex-col px-4 pt-10 pb-6 sm:px-6 sm:pt-12">
      <h2 className="experience-section-title mb-6 shrink-0 sm:mb-8">Experience</h2>

      <div
        className="grid min-h-0 flex-1 grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5"
        data-experience-carousel
        data-active-index={INITIAL_INDEX}
      >
      <button
        type="button"
        data-carousel-prev
        aria-label="Previous experience"
        disabled={INITIAL_INDEX === 0}
        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:size-11"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="relative h-[min(72vh,44rem)] min-w-0">
        {experiences.map((experience, index) => {
          const offset = index - INITIAL_INDEX;
          const isActive = offset === 0;

          return (
            <div
              key={experience.title}
              data-carousel-card
              data-index={index}
              className={cn(
                "absolute top-1/2 h-full transition-all duration-500 ease-out",
                isActive
                  ? "z-10 opacity-100 blur-0"
                  : "z-0 pointer-events-none opacity-40 blur-md"
              )}
              style={getCardStyle(index, INITIAL_INDEX)}
            >
              <Card className="flex h-full flex-col border-white/10 bg-card/95 shadow-2xl shadow-black/40">
                <CardHeader className="gap-3 border-b border-border/60 pb-6">
                  <CardDescription className="text-xs tracking-[0.2em] uppercase">
                    {experience.period}
                  </CardDescription>
                  <CardTitle className="text-3xl font-medium sm:text-4xl">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground/80">
                    {experience.company}
                  </CardDescription>
                  {experience.logo ? (
                    <CardAction>
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="size-14 rounded-[22%] object-cover shadow-md ring-1 ring-black/10 sm:size-16"
                      />
                    </CardAction>
                  ) : null}
                </CardHeader>
                <CardContent className="flex min-h-0 flex-1 items-start overflow-y-auto pt-8">
                  <p className="max-w-prose whitespace-pre-line text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {experience.description}
                  </p>
                </CardContent>
                {experience.skills && experience.skills.length > 0 ? (
                  <CardFooter className="mt-auto flex flex-wrap gap-2 border-border/60">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-background px-3.5 py-1.5 text-sm font-medium text-foreground ring-1 ring-border sm:px-4 sm:py-2 sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </CardFooter>
                ) : null}
              </Card>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        data-carousel-next
        aria-label="Next experience"
        disabled={INITIAL_INDEX === experiences.length - 1}
        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:size-11"
      >
        <ChevronRight className="size-5" />
      </button>
      </div>
    </div>
  );
}

export { ExperienceCarousel };

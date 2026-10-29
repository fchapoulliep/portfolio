/**
 * ExperiencesDiv.tsx
 * @file ExperiencesDiv.tsx
 * @description One experience of the home page: its image, its full text and
 * the link to its report. From 768 px the image and the text sit side by
 * side, the image alternating between left and right.
 */

import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

import ZoomableImage from "./ZoomableImage";
import { buttonClasses } from "./ui/button";
import { cn } from "../lib/cn";
import { useReveal } from "../hooks/useReveal";
import { Experience } from "../data/experiences";

interface ExperiencesDivProps {
  experience: Experience;
  /** Position in the list, from 0 */
  index: number;
}

/**
 * Number of an experience on two digits: 01, 02…
 */
export const experienceNumber = (index: number) =>
  String(index + 1).padStart(2, "0");

const ExperiencesDiv = forwardRef<HTMLElement, ExperiencesDivProps>(
  ({ experience, index }, ref) => {
    const { slug, title, image, imageFit, report, paragraphs } = experience;
    const [revealRef, visible] = useReveal<HTMLDivElement>();

    return (
      <article
        id={slug}
        ref={ref}
        aria-labelledby={`${slug}-title`}
        className="scroll-mt-24 py-10 first:pt-0 last:pb-0 md:py-12"
      >
        <div
          ref={revealRef}
          className={cn(
            "grid items-center gap-6 transition-[opacity,transform] duration-500 ease-soft md:grid-cols-12 md:gap-10",
            !visible && "translate-y-2 opacity-0"
          )}
        >
          <ZoomableImage
            src={image}
            alt={`Aperçu du projet ${title}`}
            fit={imageFit}
            className={cn(
              "aspect-3/2 rounded-lg border border-border md:col-span-5",
              index % 2 === 1 && "md:order-last"
            )}
          />
          <div className="md:col-span-7">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground tabular-nums">
              {experienceNumber(index)}
            </p>
            <h3 id={`${slug}-title`} className="mt-1 text-xl md:text-2xl">
              {title}
            </h3>
            <div className="mt-4 max-w-prose space-y-4 leading-relaxed">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <a
              href={report}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "outline", className: "mt-6" })}
            >
              Lire le retour d'expérience
              <ArrowUpRight strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </article>
    );
  }
);

export default ExperiencesDiv;

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { PublicationCard } from "@/components/publication-card";
import { CertificationsSection } from "@/components/certifications-section";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Cal, { getCalApi } from "@calcom/embed-react";

const BLUR_FADE_DELAY = 0.04;



function CalendarEmbed() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is a common breakpoint for tablets
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const calendarStyle = isSmallScreen
    ? { width: "100%", height: "80vh", overflow: "auto" }
    : { width: "80vh", maxWidth: "800px", height: "65vh", overflow: "auto" };

  return (
    <div className="w-full flex justify-center">
      <Cal
        calLink="sanchay-sachin-thalnerkar-k4acm3/15min"
        style={calendarStyle}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}



export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="w-[150px] h-[150px] border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
  <div className="flex min-h-0 flex-col gap-y-3">
    <BlurFade delay={BLUR_FADE_DELAY * 5}>
      <h2 className="text-xl font-bold">Work Experience</h2>
    </BlurFade>
    {DATA.work.map((work, id) => (
  <BlurFade
    key={work.company + work.start}
    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
  >
    <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.title}
                subtitle={work.company}
                href={work.href}
                badges={work.badges || []}
                type={work.type || []}
                start={work.start}
                end={work.end}
                description={work.description}
                location={work.location}
              />
            </BlurFade>
))}
  </div>
</section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
               <ResumeCard
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                href={education.website}
                start={education.start}
                end={education.end}
                location={education.location}
                description={`${education.degree} at ${education.school}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                
                Check out my latest work, including AI projects and in-depth tutorials for{" "}
  <a 
    href="https://lablab.ai/t" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-700 underline"
  >
    lablab.ai
  </a>
  . I&apos;ve created innovative applications and written comprehensive guides on cutting-edge AI technologies

                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
      <CertificationsSection certifications={DATA.certifications} />

      </BlurFade>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="publications">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Publications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Research Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of my published works and research papers.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.publications.map((publication, id) => (
                <BlurFade
                  key={publication.title}
                  delay={BLUR_FADE_DELAY * 20 + id * 0.05}
                >
                  <PublicationCard
                    title={publication.title}
                    publisher={publication.publisher}
                    url={publication.url}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
  <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 16}>
      <div className="space-y-3">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Connect with me
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Let&apos;s Chat
      </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Schedule a meeting with me or reach out via email.
        </p>
      </div>
    </BlurFade>
    <BlurFade delay={BLUR_FADE_DELAY * 17}>
      <div className="mt-8 flex flex-col items-center">
        <CalendarEmbed />
        <p className="mt-4">
          Or email me at:{" "}
          <a href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
            {DATA.contact.email}
          </a>
        </p>
      </div>
    </BlurFade>
  </div>
</section>
      
    </main>
  );
}

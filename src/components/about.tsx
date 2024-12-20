"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto px-4">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="grid gap-8 xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
              <Fade direction="up" delay={1200} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="font-bold mt-6">E X P E R I E N C E</h3>
                </Fade>
                <Fade direction="up" delay={1400} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                  I am an Experienced Video Editor with over 4 years in the industry, specializing in creating compelling visual content across various platforms with various clients & organizations having an expertise around social media content. You can rely on me for your projects. I excel in various editing styles, delivering high-value content that is cost-effective. Let's schedule a meeting and get on to working together.
                  </p>
                </Fade>
                <Fade direction="up" delay={1600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    <strong>
                      I am currently working in collaboration with{" "}
                        <a href="https://www.instagram.com/legacybuildingmedia/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Legacy Building Media  </a>!
                    </strong>
                  </p>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
  <strong>Key responsibilities :</strong>
</p>

<div className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    <li>Video Editing</li>
    <li>Script writting</li>
    <li>Managed/Supervised Editing Team</li>
    <li>Manage Daily Content Creation</li>
    <li>Worked with various forms of Social Media Content, including
 montages, motion graphics, b rolls, and reels under various types of niche.
</li>
  </ul>
</div>

                  
                </Fade>
                {/* <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className="font-bold mt-6">A C H I E V E M E N T S</h3>
                </Fade>
                <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                 •	Grew three YouTube channels associated with my clients to over 1M, 200K, and 50K subscribers. Expanded several Instagram pages while working alongside my clients.
                 
                  </p>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                  •	Established my digital presence with 4K+ subscribers on YouTube and 4K+ followers on Instagram. 
                 
                  </p>
                </Fade> */}
               
                
              </div>
            </div>
          </div>
          <div className="relative mt-2 rounded-full p-2 bg-gradient-to-tr from-gray-15 to-gray-30">
          <div className="rounded-lg bg-white dark:bg-gray-900">
            <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
              <Image
                src="/about.png"
                width="600"
                height="600"
                alt="portrait"
                quality="100"
                priority={true}
                className="rounded-lg mt-8 object-cover"

              />
            </Fade>
          </div>
          </div>
        </div>
        {/* Achievements Section */}
  <section id="achievements" className="w-full mt-12 bg-gray-100 dark:bg-gray-900 py-16">
    <div className="container mx-auto px-6 text-center">
      <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
        <h3 className="font-bold text-2xl sm:text-4xl text-gray-800 dark:text-white mb-6">
          A C H I E V E M E N T S
        </h3>
      </Fade>
      <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce={true}>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-white/70 max-w-3xl mx-auto mb-4">
          • Grew three YouTube channels associated with my clients to over 1M, 200K, and 50K subscribers. Expanded several Instagram pages while working alongside my clients.
          </p>
      <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-white/70 max-w-3xl mx-auto mb-4 text-center">
          • Worked for <a href="https://krafton.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Krafton India</a>, in a team project.
          </p>
        
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-white/70 max-w-3xl mx-auto">
          • Established my digital presence with 4K+ subscribers on YouTube and 4K+ followers on Instagram.
        </p>
      </Fade>
    </div>
  </section>
</div>

    </motion.section>
  );
}
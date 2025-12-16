"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="fluid"
      cardStyle="outline"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Work", id: "work" },
            { name: "Contact", id: "contact" },
            { name: "Resume", id: "https://example.com/resume" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890282294-3x71o69k.jpg"
          logoAlt="Idan Zeidman"
          brandName="Idan Zeidman"
          bottomLeftText="Based in Tel Aviv, Israel"
          bottomRightText="idan@example.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          title="Full-Stack Developer & Creative Problem Solver"
          description="Building modern web experiences with clean code and thoughtful design. Specialized in React, Node.js, and scalable architecture."
          tag="Portfolio"
          buttons={[
            { text: "View My Work", href: "work" },
            { text: "Get In Touch", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890283253-m2x7dyyc.jpg"
          imageAlt="Developer workspace with code on screen"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Me"
          description="I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that combine elegant design with robust functionality. My journey started with a curiosity about how things work, evolving into a career dedicated to building scalable web applications and mentoring junior developers. I thrive in collaborative environments and love tackling complex technical challenges that require creative thinking."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="work" data-section="work">
        <FeatureCardSeven
          features={[
            {
              id: 1,
              title: "E-Commerce Platform Redesign",
              description: "Led redesign of legacy e-commerce system, improving performance by 40% and increasing conversion rate by 25%. Built with React, Node.js, and PostgreSQL with microservices architecture.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890284753-gi7zsgqz.jpg"
            },
            {
              id: 2,
              title: "Real-Time Analytics Dashboard",
              description: "Developed comprehensive analytics platform processing 1M+ events daily. Implemented WebSocket real-time updates and optimized database queries for sub-second response times.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890285687-7kpoyh8w.jpg"
            },
            {
              id: 3,
              title: "Open Source Contribution",
              description: "Maintained and contributed to popular JavaScript libraries with 10K+ GitHub stars. Fixed critical performance bugs and implemented new features adopted by thousands of developers worldwide.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890286592-agef4ibv.jpg"
            }
          ]}
          animationType="slide-up"
          title="Featured Projects & Accomplishments"
          description="A selection of projects that showcase my expertise in modern web development and system architecture."
          tag="Work"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          testimonials={[
            {
              id: "1",
              nameTitle: "David Cohen, CTO at TechVenture",
              quote: "Idan transformed our legacy system into a modern, scalable platform. His technical expertise and communication skills made the entire process seamless. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890287471-3a6eqfhl.jpg"
            },
            {
              id: "2",
              nameTitle: "Sarah Miller, Product Manager at InnovateLab",
              quote: "Working with Idan was exceptional. He delivered features ahead of schedule while maintaining code quality. His attention to detail and problem-solving approach is outstanding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890288126-27w39m3o.jpg"
            },
            {
              id: "3",
              nameTitle: "Michael Chen, Founder of StartupXYZ",
              quote: "Idan is the developer you want on your team. He understands business goals and translates them into elegant technical solutions. A true full-stack expert.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890288733-4e1bvmul.jpg"
            },
            {
              id: "4",
              nameTitle: "Emily Rodriguez, Engineering Lead at GrowthCo",
              quote: "Not only is Idan a brilliant developer, but he's also a great mentor. He helped elevate our entire engineering team's skills. That's rare and invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890289392-7jastr8m.jpg"
            }
          ]}
          title="What Clients & Colleagues Say"
          description="Feedback from people I've had the pleasure of working with"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890290506-mgszyl7a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890291230-qhzluiw8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890292313-2v415mxr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890292900-c7marbqh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890293585-5z6mq9ie.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890294260-1uebblm4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890294883-kcrfhi01.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765890295553-rn0fbv3p.jpg"
          ]}
          animationType="slide-up"
          title="Trusted by Leading Companies"
          description="I've had the privilege of working with innovative companies across various industries"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to collaborate on your next project? Let's create something amazing together. Get in touch and let's discuss how I can help bring your ideas to life."
          animationType="entrance-slide"
          buttons={[
            { text: "Send Me an Email", href: "mailto:idan@example.com" },
            { text: "Schedule a Call", href: "https://calendly.com/example" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Idan Zeidman"
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Resume", href: "https://example.com/resume" },
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Blog", href: "https://example.com/blog" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Email", href: "mailto:idan@example.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Discord", href: "https://discord.com" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub Profile" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn Profile" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter Profile" },
            { icon: Mail, href: "mailto:idan@example.com", ariaLabel: "Email Contact" }
          ]}
          copyrightText="© Idan Zeidman, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
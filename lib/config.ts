import { Metadata } from "next";
import { IPersonalInfo } from "./types";

export const baseUrl = "https://tkruer.com";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Tyler Kruer - Software Engineer',
      template: 'Tyler Kruer - Software Engineer',
    },
    authors: {
      url: baseUrl,
      name: "Tyler Kruer",
    },
    description: 'Portfolio',
    openGraph: {
      title: 'Portfolio Tyler Kruer',
      description: 'Portfolio Tyler Kruer',
      url: baseUrl,
      siteName: 'Portfolio Tyler Kruer',
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

export const personalInfo: IPersonalInfo = {
    name: "Tyler Kruer",
    title: "Software Engineer",
    email: "tyler@tkruer.com",
    phone: "+1 (605) 212-3928",
    location: "Tempe, AZ",
    social: {
        github: "https://github.com/tkruer",
        linkedin: "https://www.linkedin.com/in/tkruer",
        twitter: "",
        facebook: "",
        instagram: "",
    },
    about: {
        title: "About Me",
        description: "I work on a lot of cool stuff, primarily related to distributed systems and backend infrastructure.",
        image: "https://avatars.githubusercontent.com/u/30127502?v=4",
        randomFacts: [
            "neovim is the best text editor",
            "golang is one of the best programming languages",
        ],
    },
    career: {
        currently: {
            company: "Google",
            title: "Software Engineer",
            description: "I work on a lot of cool stuff, primarily related to distributed systems and backend infrastructure.",
            location: "Tempe, AZ",
        },
        previous: [
            {
                company: "Google",
                title: "Software Engineer",
                description: "I work on a lot of cool stuff, primarily related to distributed systems and backend infrastructure.",
                location: "Tempe, AZ",
            }
        ],
        education: [
            {
                school: "University of Arizona",
                degree: "Bachelor of Science in Computer Science",
                description: "I work on a lot of cool stuff, primarily related to distributed systems and backend infrastructure.",
                location: "Tempe, AZ",
            }
        ],
        interests: [
            "Distributed Systems",
            "Backend Infrastructure",
            "Cloud Computing",
            "Software Engineering",
            "Computer Science",
        ],
        projects: [
            {
                name: "Project 1",
                description: "I work on a lot of cool stuff, primarily related to distributed systems and backend infrastructure.",
                location: "Tempe, AZ",
            }
        ],
        skills: [
            {
                name: "Skill 1",
                description: "I work on a lot of cool stuff, primarily related to distributed systems and backend infrastructure.",
                location: "Tempe, AZ",
            }
        ],
        resumeURL: "https://www.google.com",
    }
}


import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/config";

export function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 ">      
      <div className="order-2 sm:order-1">
        {personalInfo.name} - {currentYear}
      </div>
      <div className="flex gap-4 order-1 sm:order-2">
        <Link href={personalInfo.social.github} aria-label="GitHub" prefetch={true} className="hover:text-neutral-800 dark:hover:text-white transition-colors">
          <Github size={24} />
        </Link>
        <Link href={personalInfo.social.linkedin} aria-label="LinkedIn" prefetch={true} className="hover:text-neutral-800 dark:hover:text-white transition-colors">
          <Linkedin size={24} />
        </Link>
        <Link href={`mailto:${personalInfo.email}`} aria-label="Email" prefetch={true} className="hover:text-neutral-800 dark:hover:text-white transition-colors">
          <Mail size={24} />
        </Link>
      </div>
    </footer>
  );  
}
import { personalInfo } from "@/lib/config";
import Image from "next/image"; 
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mt-16 mb-8">about</h1>
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start">
          <div className="flex-1 flex flex-col gap-4">
            <p>
              {personalInfo.about.description}
            </p>
            <div className="flex flex-col gap-4">
              {personalInfo.about.randomFacts.map((fact) => (
                <div key={fact} className="flex flex-row gap-2 items-center">
                  <ArrowRight className="w-4 h-4" />
                  <p>{fact}</p>
                </div>
              ))}
            </div>
          </div>
          <Image 
            src={personalInfo.about.image} 
            alt="Tyler Kruer" 
            width={150} 
            height={150} 
            className="rounded-full shadow-md" 
          />
        </div>
      </div>
    </main>
  )
}

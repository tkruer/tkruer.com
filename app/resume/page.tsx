import { personalInfo } from "@/lib/config";

export default function Resume() {
    return (
        <main className="min-h-screen">
            <h1 className="text-3xl font-bold mt-16 mb-8">Resume</h1>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{personalInfo.career.currently.company}</h3>
                    <p className="text-lg">{personalInfo.career.currently.title}</p>
                    <p className="text-lg">{personalInfo.career.currently.description}</p>
                    <p className="text-lg">{personalInfo.career.currently.location}</p>
                </div>
            </div>
        </main>
    )
}

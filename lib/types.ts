export interface IPersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
        facebook: string;
        instagram: string;
    }
    about: {
        title: string;
        description: string;
        image: string;
        randomFacts: string[];
    }
    career: {
        currently: {
            company: string;
            title: string;
            description: string;
            location: string;
        }
        previous: {
            company: string;
            title: string;
            description: string;
            location: string;
        }[]
        education: {
            school: string;
            degree: string;
            description: string;
            location: string;
        }[]
        interests: string[];
        projects: {
            name: string;
            description: string;
            location: string;
        }[]
        skills: {
            name: string;
            description: string;
            location: string;
        }[]
        resumeURL: string;
    }
    notes?: {
        title: string;
        description: string;
        date: string;
        slug: string;
        tags: string[];
        content: string;
        image: string;
    }[]
}


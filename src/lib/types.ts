export interface LargeBubbleProps {
    animation: string;
}

export interface MediumBubbleProps {
    animation: string;
}

export interface SmallBubbleProps {
    animation: string;
}

export interface XSmallBubbleProps {
    animation: string;
}

export interface Window {
    grecaptcha: Grecaptcha;
}

export interface Grecaptcha {
    getResponse: (opt_widget_id?: string) => string;
    reset: (opt_widget_id?: string) => void;
}

export interface ProjectCardProps {
    project: projectDataType;
}

export interface ExperienceCardProps {
    experience: experienceDataType;
}

export type projectDataType = {
    imageSrc: string;
    altText: string;
    projectName: string;
    projectURL: string;
    projectSourceCode: string;
    projectDescription: string;
    projectType: string;
    projectRole: string;
    projectTechStack: string[];
};

export type experienceDataType = {
    imageSrc: string;
    altText: string;
    imageWidth: string;
    experienceTitle: string;
    experienceLocation: string;
    experienceDate: string;
    experienceBulletPoints: string[];
};

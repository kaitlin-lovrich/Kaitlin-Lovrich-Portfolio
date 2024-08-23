export interface RecaptchaRenderOptions {
    sitekey: string;
    theme?: "light" | "dark";
    size?: "compact" | "normal" | "invisible";
    tabindex?: number;
    callback?: (response: string) => void;
    "expired-callback"?: () => void;
    "error-callback"?: () => void;
    badge?: "bottomright" | "bottomleft" | "inline";
}

export interface Window {
    grecaptcha: {
        render: (
            element: string | HTMLElement,
            options: RecaptchaRenderOptions
        ) => string;
        reset: (opt_widget_id?: string) => void;
        getResponse: (opt_widget_id?: string) => string;
    };
}

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

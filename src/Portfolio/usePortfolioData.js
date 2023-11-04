import { useCallback, useState } from "react";

const defaultData = {
    About: "About",
    Design: "Design",
    Portfolio: "Portfolio",
    Blog: "Blog",
    LetsTalk: "Let's Talk",
    UXDesigner: "UX Designer",
    Intro: "Hi There, I'm",
    WelcomeMessage: "Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.",
    HireMe: "Hire Me",
    AboutMe: "About Me",
    Intro: "I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.",
    502: "502",
    ProjectsDone: "Projects Done",
    YearsOfExperience: "Years of Experience",
    "273Plus": "273+",
    ClientsServed: "Clients Served",
    Services: "Services",
    ServiceSummary : "Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.",
    DesignSummary : "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
    Branding :"Branding",
    UXResearch : "UX Research",
    UsabilityTesting : "Usability Testing",
    BrandingSummary : "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
    ResearchSummary : "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
    TestingSummary : "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
    MyPortfolio : "My Portfolio",
    PortfolioSummary : "Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.",
    EducationalPlatform : "Educational Platform",
    WebDesign_UsabilityTesting : "Web Design / Usability Testing",
    TravelAppDesign : "Travel App Design",
    UXResearch_App_Design : "UX Research / App Design",


}

export function usePortfolioData(data = {}) {
    const [dataState, setDataState] = useState({ ...defaultData, ...data });
    return [dataState, useCallback((d) => setDataState({ ...data, d }), [data])];
}
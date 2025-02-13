import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Biohazard, Cake, Code, LucideIcon, School } from "lucide-react";
import ContactModal from "./ContactModal";
import { Button } from "@/components/ui/button";

export const Status = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2 w-full">
                <p className="text-lg text-muted-foreground">About school.</p>
                <div className="flex flex-col gap-4">
                    
                {WORKS.map((work, index) => (
                        <Work 
                            key={index}
                            Logo={work.Logo}
                            description={work.description}
                            title={work.title}
                            url={work.url}
                        />
                    ))}
                </div>
            </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">School, fun projects.</p>
                <div className="flex flex-col gap-4">

                {SIDE_PROJECTS.map((project, index) => (
                        <SideProject
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                        />
                    ))}


                </div>
            </Card>
            <Card className="text-center hover:bg-accent/50 transition-colors p-3 rounded"><ContactModal /></Card>
        </div>
    </Section> 
    );
};

 const SIDE_PROJECTS: SideProjectProps[] = [
    {
    Logo: Code,
    title:"Project 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url:"/",
    },
    {
        Logo: Biohazard,
        title:"Project 2",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"/",
    },
    {
        Logo: Cake,
        title:"Project 3",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"/",
    },
]


type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    return (
        <div
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-3 rounded-sm ">
                <props.Logo size={16} className="text-chart-4"  />
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    );
};

const WORKS: WorkProps[] = [
    {
    Logo: School,
    title:"Zone 01 Rouen",
    description:"Zone 01 est une école innovante en informatique qui forme des développeurs grâce à une pédagogie basée sur l’apprentissage par projets et l’intelligence collective. Nous n’avons pas de cours traditionnels ni de professeurs : tout se fait en autonomie, en travaillant sur des challenges concrets, comme en entreprise. Cela nous permet de développer non seulement des compétences techniques en développement fullstack, mais aussi des soft skills comme la résolution de problèmes, la collaboration et l’adaptabilité. L’école est accessible à tous, sans prérequis, et fonctionne en mode 24/7, ce qui nous apprend à être autonomes et à gérer notre temps efficacement.",
    url:"/"
}
]


type WorkProps = {
    Logo: LucideIcon;
    description: string;
    title: string;
    url: string;
    
};

const Work = (props: WorkProps) => {
    return (
        <div
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
            >
            <span className="bg-accent  text-accent-foreground p-3 rounded-sm">
            <props.Logo size={16} className="text-chart-4" />               
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    );
};




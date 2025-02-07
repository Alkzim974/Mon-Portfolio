import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section"
import { cn } from "@/lib/utils";
import { TwitchIcon } from "./icons/TwitchIcon";

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/70 font-geist-mono border-accent hover:bg-accent/100 transition-colors px-1 py-0.5 rounded-sm",className)}{...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Alexandre Casimir</h2>
                <h3 className="text-3xl font caption">Developper FrontEnd</h3>
                <p className="text-base">
                   I love creating website on <Code>Internet</Code>, my favorite is <Code>HTML</Code> and <Code>Javascript</Code>.
                   Live on <Code><TwitchIcon size={12} className="inline"/> Twitch</Code>.
                   Born in{" "} 
                   <Code className="inline-flex items-center gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29.svg/langfr-225px-Proposed_flag_of_R%C3%A9union_%28VAR%29.svg.png"
                     style={{width: 16, height: "auto"}} alt="Reunion Island Flag"/>
                    Reunion Island
                    </Code>.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img 
                    src="https://avatars.githubusercontent.com/u/174027090?v=4g" 
                    className="w-full h-auto max-w-sm max-md:w-56 rounded-full " 
                    alt="Alexandre's picture" 
                />
            </div>
        </Section>
    );
};


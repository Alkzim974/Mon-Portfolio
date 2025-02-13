import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import  Link  from "next/link";
import { cn } from "@/lib/utils"
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitchIcon } from "./icons/TwitchIcon";


export const Header = () => {
    return (
        <header className="sticky bg-background/80 top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary  text-[#FAFAFA]">
                    alexandrecasimir.com
                </h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                   <Link 
                   href="https://github.com/Alkzim974"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                   >  
                        <GithubIcon size={12} className="text-forground"/>
                   </Link> 
                   <Link 
                   href="https://instagram.com/akaz24o"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                   >  
                        <InstagramIcon size={12} className="text-forground"/>
                   </Link> 
                   <Link 
                   href="https://www.linkedin.com/in/alexandre-casimir-5a553377/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                   >  
                        <LinkedinIcon size={12} className="text-forground"/>
                   </Link> 
                   <Link 
                   href="https://www.twitch.tv/akaz240"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                   >  
                        <TwitchIcon size={12} className="text-forground"/>
                   </Link> 
                </ul>
            </Section>
        </header>
    );
};
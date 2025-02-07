import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 
            className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
        </h2>
        <div>
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-chart-4 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg 
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fill-rule="evenodd" 
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" 
                        clip-rule="evenodd">
                    </path>
                </svg>
              </div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Marketing</h3>
              <p className="text-sm text-muted-foreground">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
            </div>
        </div>
    </Section>
    );
};
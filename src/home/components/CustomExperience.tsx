import { Separator } from "@radix-ui/react-separator"
import { CustomExperienceCard } from "./CustomExperienceCard"

export const CustomExperience = () => {


    return (
        <>
            <Separator className="my-1" />
            <section id="experience" className="py-24 bg-muted/50 bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="container px-4 mx-auto font-bebas">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold sm:text-4xl text-center mb-12
                            text-white tracking-wider
                        ">
                            Experiencia Profesional
                        </h2>
                        <div className="space-y-8">

                            <CustomExperienceCard
                                title="Senior Full Stack Developer"
                                subtitle="TechCorp Solutions • 2022 - Presente"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

                            />
                            <CustomExperienceCard
                                title="Full Stack Developer"
                                subtitle="StartupXYZ • 2020 - 2022"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                            />
                            <CustomExperienceCard
                                title="Frontend Developer"
                                subtitle="WebAgency Pro • 2019 - 2020"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

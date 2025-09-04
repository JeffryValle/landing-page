import { Separator } from "@radix-ui/react-separator"
import { CustomAboutCard } from "./CustomAboutCard"

export const CustomAbout = () => {
    return (
        <>
            <Separator className="my-1" />
            <section id="about" className="py-24 bg-muted/50 bg-gradient-to-r from-slate-900 to-slate-700 font-bebas">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl text-white font-light tracking-wider sm:text-4xl">Sobre Mí</h2>
                        <p className="tracking-wider text-white md:text-lg text-pretty">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <CustomAboutCard
                                title="Frontend"
                                subtitle="Interfaces modernas y responsivas con React, Next.js y TypeScript"
                            />
                            <CustomAboutCard
                                title="Backend"
                                subtitle="APIs robustas con Node.js, Express y bases de datos SQL/NoSQL"
                            />
                            <CustomAboutCard
                                title="DevOps"
                                subtitle="Despliegue y CI/CD con Docker, AWS y herramientas modernas"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

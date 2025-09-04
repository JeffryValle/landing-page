import { Separator } from "@radix-ui/react-separator"
import { skillsData } from "../data/skillsData"

export const CustomSkillSection = () => {
    return (
        <>
            <Separator className="my-1" />
            <section id="skills" className="py-24 bg-gradient-to-r from-slate-900 to-slate-700 font-bebas">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-wider text-white sm:text-4xl text-center mb-12">Habilidades Técnicas</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
                        >
                            {skillsData.map((skill) => (
                                <div className="cursor-pointer w-20 h-20 flex items-center justify-center
                                relative z-0 rounded-lg scale-100 transition-all duration-200 hover:scale-140"
                                    key={skill.name}>
                                    <img src={skill.icon} alt={skill.name} title={skill.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

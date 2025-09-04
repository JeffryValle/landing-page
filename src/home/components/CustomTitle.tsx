import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Send } from "lucide-react"
import image from '../../assets/img-logo.png'

export const CustomTitle = () => {
    return (
        <>
            <Separator className="my-1" />
            <section className="container px-4 py-65 max-w-full mx-auto bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="relative">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-primary">
                                <img src={image} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 max-w-3xl">
                        <h1 className="bg-gradient-to-r from-slate-400 to-slate-50 bg-clip-text text-transparent text-4xl  sm:text-5xl md:text-6xl text-balance font-bebas tracking-widest">
                            Hola, soy Jeffry Valle
                        </h1>
                        <p className="mx-auto max-w-[700px] md:text-xl text-pretty
                            text-white bg-clip-text text-4xl  sm:text-5xl font-bebas
                            tracking-widest ">
                            Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Especializado en
                            React, Node.js y tecnologías modernas.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="font-bebas text-lg px-8 hover:bg-slate-800 hover:text-white" variant="outline" >
                            <Send className="mr-2 h-5 w-5" />
                            Ver Mi Trabajo
                        </Button>
                        <Button size="lg" className="font-bebas text-lg px-8 hover:bg-slate-800 hover:text-white" variant="outline">
                            Contactar
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

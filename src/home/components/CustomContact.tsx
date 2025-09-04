import { Separator } from "@radix-ui/react-separator"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const CustomContact = () => {
    return (
        <>
            <Separator className="my-1" />
            <section id="contact" className="py-24 bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="container px-4 mx-auto font-bebas tracking-wider">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white tracking-wider sm:text-4xl text-center mb-12">Contacto</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl text-white tracking-wider font-semibold mb-4">¡Hablemos!</h3>
                                    <p className="text-white tracking-wider">
                                        Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. No dudes en contactarme si
                                        quieres colaborar o simplemente charlar sobre tecnología.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-5 w-5 text-white" />
                                        <span className="text-white tracking-wider">jeffryvalle99@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-5 w-5 text-white" />
                                        <span className="text-white tracking-wider">+504 9999-8888</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="h-5 w-5 text-white" />
                                        <span className="text-white tracking-wider">Honduras, Cortés</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Button variant="outline" size="icon">
                                        <Github className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Twitter className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <Card className="bg-slate-90">
                                <CardHeader>
                                    <CardTitle className="text-white tracking-wider">Envíame un mensaje</CardTitle>
                                    <CardDescription className="text-white tracking-wider">Te responderé lo antes posible</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2 text-white tracking-wider">
                                            <label className="text-sm font-medium">Nombre</label>
                                            <Input placeholder="Tu nombre" />
                                        </div>
                                        <div className="space-y-2 text-white tracking-wider">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input type="email" placeholder="tu@email.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-white tracking-wider">
                                        <label className="text-sm font-medium">Asunto</label>
                                        <Input placeholder="¿En qué puedo ayudarte?" />
                                    </div>
                                    <div className="space-y-2 text-white tracking-wider">
                                        <label className="text-sm font-medium">Mensaje</label>
                                        <Textarea placeholder="Cuéntame sobre tu proyecto o idea..." className="min-h-[120px]" />
                                    </div>

                                    <Button size="lg" className="w-full font-bebas text-lg px-8 hover:bg-slate-800 hover:text-white" variant="outline" >
                                        <Send className="mr-2 h-5 w-5" />
                                        Enviar Mensaje
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

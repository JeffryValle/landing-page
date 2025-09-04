import { Separator } from "@radix-ui/react-separator"


export const CustomFooter = () => {
    return (
        <>
            <Separator className="my-1" />
            <footer className="border-t bg-muted/50 bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="container px-4 py-8 mx-auto font-bebas">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-white tracking-wider">© 2025 Jeffry Desarrollador. Todos los derechos reservados.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-sm text-white tracking-wider hover:text-slate-500 transition-color">
                                Privacidad
                            </a>
                            <a href="#" className="text-sm text-white tracking-wider hover:text-slate-500 transition-color">
                                Términos
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

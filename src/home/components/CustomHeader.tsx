
export const CustomHeader = () => {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="container flex h-18 items-center max-w-full justify-center ">
                    <div className="mr-4 hidden md:flex sm:flex ">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <span className="sm:text-xl lg:text-4xl text-white hover:text-slate-500 hidden font-light text-4xl sm:inline-block font-bebas">Mi Portfolio</span>
                        </a>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <a
                                href="#about"
                                className="sm:text-xl lg:text-4xl text-white hover:text-slate-500 transition-color font-bebas font-light text-4xl "
                            >
                                Sobre Mí
                            </a>
                            <a href="#skills" className="sm:text-xl lg:text-4xl lg: text-white hover:text-slate-500 transition-colors font-bebas font-light text-4xl">
                                Habilidades
                            </a>
                            <a href="#experience" className="sm:text-xl lg:text-4xl text-white hover:text-slate-500 transition-colors font-bebas font-light text-4xl">
                                Experiencia
                            </a>
                            <a href="#courses" className="sm:text-xl lg:text-4xl text-white hover:text-slate-500 transition-colors font-bebas font-light text-4xl">
                                Courses & Certifies
                            </a>
                            <a href="#contact" className="sm:text-xl lg:text-4xl text-white hover:text-slate-500 transition-colors font-bebas font-light text-4xl">
                                Contacto
                            </a>
                        </nav>
                    </div>
                    {/* <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            CV
                        </Button>
                    </div> */}
                </div>
            </header>
        </>
    )
}

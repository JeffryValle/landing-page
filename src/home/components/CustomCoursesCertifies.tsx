import { Separator } from "@radix-ui/react-separator"
import { courses } from "../data/coursesData"


export const CustomCoursesCertifies = () => {
    return (
        <>
            <Separator className="my-1" />
            <section id="courses" className="bg-gradient-to-r from-slate-900 to-slate-700 max-w-full">
                <div className="mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0 font-bebas">
                    <h2 className="text-2xl font-bold text-white tracking-wider">
                        Cursos y Certificados
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 max-w-full">
                        {courses.map((course) => (
                            <div key={course.id} className="group relative">
                                <img
                                    alt={course.imageAlt}
                                    src={course.imageSrc}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between cursor-pointer">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={course.href} className="text-white tracking-wider"
                                                target="_blank" rel="noopener noreferrer"
                                            >
                                                <span aria-hidden="true" className="absolute inset-0" />

                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-white tracking-wider">{course.color}</p>
                                    </div>
                                    {/* <p className="text-sm font-medium text-white tracking-wider">{course.price}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

import imageReact from '../../assets/courses/img-course-react.jpg';
import imageDigitalEconomy from '../../assets/courses/img-course-digital-economy.jpg';
import imageJavaScript from '../../assets/courses/img-course-javascript.jpg';
import imagePython from '../../assets/courses/img-course-python.jpg';
import imageSQL from '../../assets/courses/img-course-sql.jpg';

export const courses = [
    {
        id: 1,
        name: 'React',
        href: 'https://www.udemy.com/certificate/UC-612ec579-788b-4444-ae75-a9ec8d64f343/',
        imageSrc: imageReact,
        imageAlt: "React: De cero a Experto",
        price: '$35',
        color: 'React: De cero a Experto',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: 'https://courses.cognitiveclass.ai/certificates/09d9c815e2f6445bb6920aa2f39bb7d0',
        imageSrc: imageSQL,
        imageAlt: "Front of men's Basic Tee in white.",
        price: '$35',
        color: 'SQL and Relational Database',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: 'https://certs.cwucampus.com/201250813-177879.pdf',
        imageSrc: imageDigitalEconomy,
        imageAlt: "Front of men's Basic Tee in dark gray.",
        price: '$35',
        color: 'Digital Economy',
    },
    {
        id: 4,
        name: 'Artwork Tee',
        href: 'https://coursera.org/verify/R3C52CVYRPNB',
        imageSrc: imagePython,
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Introducción a la programacion con Python',
    },
    {
        id: 5,
        name: 'Artwork Tee',
        href: 'https://www.freecodecamp.org/certification/jeffryvalle/javascript-algorithms-and-data-structures-v8',
        imageSrc: imageJavaScript,
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Algoritmos y Estructuras de Datos',
    },
]
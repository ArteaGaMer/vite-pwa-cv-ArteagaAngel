import React from 'react'
const features = [
    { name: 'Blockchain Business School', description: '| Full Stack developer | Desarrollo de aplicaciones blockchain de trazabilidad en next.js.' },
    { name: 'Solana', description: '| Instructor de Solana | Tuve la oportunidad de participar en un proyecto realizado por Solana, en el cual se llevaron a cabo grabaciones de videos educativos.' },
    { name: 'Grupo Orxe', description: '| Analista y encargado de TI | Desempeñé el cargo de responsable del departamento de sistemas, en el que tuve a mi cargo la gestión y el control de la información en diversas ciudades, como Chihuahua, Juárez, Tijuana, entre otras.' },
    { name: 'Kawi', description: '| Front End Developer | Me desempeño como desarrollador Front-end, con experiencia en el manejo de diversas tecnologías como T3, Tailwind, Next.js, Node.js, entre otras.' },
    { name: 'Hackathon', description: 'Tuve la oportunidad de participar en tres hackathones de programación, logrando ubicarme en los primeros lugares en cada uno de ellos.' },
    { name: 'Otros trabajos', description: 'Reparaciones y proyectos de soldadura, carpintería, fotografía, ventas, electricidad y pintura.' },
  ]
  
  export default function Content() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PERFIL PERSONAL</h2>
            <p className="mt-4 text-gray-500">
            Mi objetivo profesional es ser siempre un desarrollador web altamente competente y experimentado, capaz de diseñar y desarrollar aplicaciones web escalables y seguras que satisfagan las necesidades de los usuarios y de la empresa. Para lograr esto, me comprometo a mantenerme actualizado sobre las últimas tendencias y tecnologías en desarrollo web, mejorar mis habilidades de codificación y trabajar en equipo con otros desarrolladores para crear soluciones efectivas y eficientes.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">EXPERIENCIA</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="/images/man-developing.png"
            />
            <img
              src="/images/data-analysis.png"
            />
            <img
              src="/images/hacker.png"
            />
            <img
              src="/images/teacher.jpg"
              className="rounded-[800px]"
            />
          </div>
        </div>
      </div>
    )
  }
  
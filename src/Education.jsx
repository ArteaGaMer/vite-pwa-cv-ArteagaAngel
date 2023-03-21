import React from 'react'
const features = [
    { name: 'Universidad Tecnológica de Chihuahua', description: '| Ingeniería en Desarrollo y Gestión de Software | TSU Área: Desarrollo de Software Multiplataforma ' },
    { name: 'OpenEDG Python Institute  & Cisco Networking Academy', description: '| PCAP: Programming Essentials in Python | Tuve la oportunidad de participar en un proyecto realizado por Solana, en el cual se llevaron a cabo grabaciones de videos educativos.' },
    { name: 'Cisco Networking Academy', description: '| Cybersecurity Essentials| Describir las tácticas, técnicas y procedimientos utilizados por los ciberdelincuentes. Describir los principios de confidencialidad, integridad y disponibilidad en lo relativo al estado de la información y contramedidas de seguridad cibernética, entre otros.' },
    { name: 'Coursera & Inroads', description: '| Análisis de Datos de Google | Para obtener el Certificado Profesional de Análisis de datos de Google, las y los alumnos deben aprobar ocho cursos desarrollados por Google, que incluyen evaluaciones interactivas y basadas en la práctica, y están diseñadas con el fin de brindar preparación para puestos de nivel básico en el análisis de datos. Son competentes en herramientas y plataformas, incluidas hojas de cálculo, SQL, Tableau y R. Saben cómo preparar, procesar, analizar y compartir datos para realizar acciones reflexivas.' },
    { name: 'Cisco Networking Academy', description: '| Introducción a IoT | Explicar cómo IoT y la transformación digital tienen un impacto positivo en las empresas y los gobiernos. Explicar la importancia que tienen el software y los datos para la sociedad y las empresas digitales. Explicar las ventajas de la automatización y la inteligencia artificial para la transformación digital. Explicar los conceptos de las redes basadas en la intención. Explicar la necesidad de seguridad mejorada en el mundo digitalizado.' },
    { name: 'Cisco Networking Academy', description: '| Introducción a la Seguridad Cibernética | Conceptos e importancia de la ciberseguridad. Características e impacto de varios tipos de ataques cibernéticos. Cómo protegerse contra ataques cibernéticos. Técnicas utilizadas para proteger a las organizaciones de ataques cibernéticos. Por qué la ciberseguridad es una profesión creciente. Oportunidades disponibles para obtener certificaciones de seguridad de red.' },
  ]
  
  export default function Education() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">EDUCACIÓN Y CERTIFICACIONES</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
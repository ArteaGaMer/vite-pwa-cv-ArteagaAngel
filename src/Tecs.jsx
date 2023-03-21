import React from 'react'
const skills = [
    {
      name: 'HTML',
      role: 'Escritura de código HTML5, lo que permite crear contenido web estructurado.',
      imageUrl:
        'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5-thumbnail.png',
    },
    {
      name: 'CSS',
      role: 'Me gusta hacer que las cosas se vean bien.',
      imageUrl:
        'https://diegomariano.com/wp-content/uploads/2020/08/logo-2582747_640-e1597771254582.png',
    },
    {
      name: 'TailwindCSS',
      role: 'Framework de diseño centrado en utilidad, para una mayor personalización de la interfaz de usuario.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
    },
    {
      name: 'JavaScript',
      role: 'Creación de interactividad y dinamismo en aplicaciones web y móviles.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU',
    },
    {
      name: 'Next.js',
      role: 'Creación de interactividad y dinamismo en aplicaciones web y móviles.',
      imageUrl:
        'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
    },
    {
      name: 'React',
      role: 'Creación de interactividad y dinamismo en aplicaciones web y móviles.',
      imageUrl:
        'https://imgs.search.brave.com/UUe4YZZpHYyfkmaNEI_Nd2NFRVdSQmpOa4DPvPUeags/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9jZG4u/YXV0aDAuY29tL2Js/b2cvcmVhY3QtanMv/cmVhY3QucG5n',
    },
  ]
  
  export default function Tecs() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            A continuación, se presentan algunas de las skills con las que cuento y he trabajado:
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {skills.map((tec) => (
              <li key={tec.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={tec.imageUrl}/>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{tec.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-neutral-600">{tec.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
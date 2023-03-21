import React from 'react'
function App() {

  return (
    <div className='App flex w-screen h-screen justify-center items-center flex-col gap-5'>
      <div className=' flex justify-center'>
        <a>
          <img src='/images/arteaga.jpg' className='logo w-40 rounded-[80px]'/>
        </a>
      </div>
      <h1>Ángel Arteaga</h1>
      <div className='card'>
        <p>
          Web Developer
        </p>
      </div>
      <div class="bg-black shadow-lg rounded-lg overflow-hidden">
  <div class="p-4">
    <h2 class="text-2xl font-bold text-white-800 mb-2 text-center">Contact Information</h2>
    <ul class="list-disc list-inside mb-4 text-white">
      <li class="mb-2"><span class="font-bold">Email:</span> luis_arteaga2701@outlook.com</li>
      <li class="mb-2"><span class="font-bold">Phone:</span> +52 614-363-9472</li>
      <li class="mb-2"><span class="font-bold">Localidad:</span> Chihuahua, Chihuahua México</li>
    </ul>
    <p class="text-gray-700 text-sm italic">Please do not hesitate to contact me.</p>
  </div>
</div>
    </div>
  );
}

export default App;

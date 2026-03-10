import { CardTilt, CardTiltContent } from './components/ui/card-tilt';

function App() {

  return (
    <>
      <main className="w-full h-screen flex flex-col items-center  bg-[#f3f4f6] p-4">
        {/* Title */}
        <h1 className="text-6xl font-bold text-center text-[#e05d38] my-8">
          Gestión de Alumnos
        </h1>

        {/* Card Container */}
        <CardTilt className="w-80" tiltMaxAngle={15} scale={1.05}>
          <CardTiltContent className="relative rounded-2xl bg-[#ffffff] p-8 shadow-xl border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-[#4b5563]">
              Alumnos Inscritos
            </h2>
            {/* tabla con id nombre grupo */}

            {/* Optional: Primary Color Accent Line */}
            <div className="mt-4 h-1 w-12 bg-[#e05d38] rounded-full" />
            <button className='mt-4 w-full rounded-lg border-2 border-dashed border-slate-300 dark:border-neutral-700 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:border-slate-400 dark:hover:border-neutral-600 hover:bg-slate-50 dark:hover:bg-neutral-800'>
              + Nuevo Registro
            </button>
          </CardTiltContent>
        </CardTilt>


      </main>
    </>
  )
}

export default App

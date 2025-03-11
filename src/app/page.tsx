// pages/index.tsx
import StudentTable from '../components/studenTable'; // Importa el componente

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center mt-8">
        ¿Crees poder lograrlo? Si no confías en ti, ¿quién lo hará?
      </h1>
      <h2 className="text-2xl text-center mt-4">
        Aquí debe de verse tu tabla, ¿cuál tabla? Lee el archivo README
      </h2>

      {/* Aquí se integra la tabla */}
      <StudentTable />
    </>
  );
}

import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import EditarPaciente from "./EditarPaciente";
import BorrarPaciente from "./BorrarPaciente";

export default function ListaPacientes() {
  const [pacientes, setPacientes] = useState();
  const documentos = [];

  const leerPacientes = async () => {
    try {
      const consulta = await getDocs(collection(db, "pacientes"));
      consulta.forEach((docu) => {
        documentos.push({ id: docu.id, ...docu.data() });
        setPacientes(documentos);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Lista de Pacientes</h1>
      {pacientes &&
        pacientes.map((paciente) => (
          <div key={paciente.id}>
            <h3>NOMBRE: {paciente.nombre}</h3>
            <h5>GRUPO DE SANGRE: {paciente.grupoSangre}</h5>
            <EditarPaciente
              id={paciente.id}
              //editarNombrePaciente={editarPaciente}
            />
            <BorrarPaciente idPaciente={paciente.id} />
          </div>
        ))}
      <button onClick={leerPacientes}>Cargar</button>
    </>
  );
}

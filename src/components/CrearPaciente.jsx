import { useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection, getDoc } from "firebase/firestore";

export default function CrearPaciente() {
  const [pacientes, setPacientes] = useState();
  const documentos = [];

  const [nombrePaciente, setNombrePaciente] = useState("");
  const [grupoSanguineo, setGrupoSanguineo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    crearNuevoPaciente(nombrePaciente, grupoSanguineo);
    setNombrePaciente("");
    setGrupoSanguineo("");
  };

  // Estoy creando la función crearTarea dentro del mismo componente.{}

  const crearNuevoPaciente = async () => {
    try {
      const docRef = await addDoc(collection(db, "pacientes"), {
        nombre: nombrePaciente,
        grupoSangre: grupoSanguineo,
      });
      const doc = await getDoc(docRef);
      documentos.push({ id: doc.id, ...doc.data() });
      setPacientes(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <label>Nombre Paciente:</label>
      <input
        type="text"
        value={nombrePaciente}
        onChange={(e) => setNombrePaciente(e.target.value)}
      />
      <label>Grupo Sanguineo:</label>
      <input
        type="text"
        value={grupoSanguineo}
        onChange={(e) => setGrupoSanguineo(e.target.value)}
      />
      <button onClick={handleSubmit}>Crear Paciente</button>
    </form>
  );
}

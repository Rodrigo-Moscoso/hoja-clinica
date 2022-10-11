import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditarPaciente({ id }) {
  const [pacientes, setPacientes] = useState();
  const documentos = [];

  const [nombrePacienteEditado, setNombrePacienteEditado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editarNombrePaciente(id, nombrePacienteEditado);
    setNombrePacienteEditado("");
  };

  const editarNombrePaciente = async () => {
    try {
      const docRef = doc(collection(db, "pacientes"), id);
      await updateDoc(docRef, {
        nombre: nombrePacienteEditado,
      });
      const docu = await getDoc(docRef);
      documentos.push({ id: docu.id, ...docu.data() });
      setPacientes(documentos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <label>Editar Nombre</label>
      <input
        type="text"
        value={nombrePacienteEditado}
        onChange={(e) => setNombrePacienteEditado(e.target.value)}
      />
      <button onClick={handleSubmit}>Editar Nombre</button>
    </form>
  );
}

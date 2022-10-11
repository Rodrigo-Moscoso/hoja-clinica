import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

export default function BorrarPaciente({ idPaciente }) {
  const [pacientes, setPacientes] = useState("");
  const documentos = [];

  const borrarPaciente = async () => {
    try {
      await deleteDoc(doc(db, "pacientes", idPaciente));
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
    <form>
      <button onClick={borrarPaciente}>Borrar Paciente</button>
    </form>
  );
}

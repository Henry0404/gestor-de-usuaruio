import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import "./App.css";
function App() {
  const [formulario, handleChange] = useFormulario({ name: "", lastName: "" });
  console.log(formulario);
  return (
    <form>
      <Input
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
      />
      <Input
        label="Apellido"
        name="lastName"
        value={formulario.lastName}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;

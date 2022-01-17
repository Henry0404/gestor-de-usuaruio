import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import "./App.css";
function App() {
  const [formulario, handleChange] = useFormulario({
    name: "",
    email: "",
    lastName: "",
  });
  console.log(formulario);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
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
            <Input
              label="Correo"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;

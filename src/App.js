import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import "./App.css";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    email: "",
    lastname: "",
  });
  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };

  console.log(formulario, usuarios);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              label="Nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange}
            />
            <Input
              label="Apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
            />
            <Input
              label="Correo"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />
            <input className="button" type="submit" value="Enviar" />
            {/* <Button>Enviar</Button> */}
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map((usuario) => (
            <li
              key={usuario.email}
            >{`${usuario.name} ${usuario.lastname} : ${usuario.email}`}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}

export default App;

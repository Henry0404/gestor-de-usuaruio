import { useState } from "react";

import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";
import "./App.css";
function App() {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  //console.log(formulario, usuarios);
  console.log(usuarios);
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}></div>
          <UserForm submit={submit} />
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
    </div>
  );
}

export default App;

import "./styles.css";

import NewComponent from "./NewComponent";

const OtherComponent = () => {
  return <p>Soy otro componente</p>;
};

export default function App() {
  const num1 = 4;
  const num2 = 6;
  const result = num1 + num2;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <strong>El resultado es: {result}</strong>
      <br />
      <NewComponent message="Title" color="red" />
      <NewComponent message="Subtitle" color="green" />
      <NewComponent message="Description" color="blue" />
      <br />
      <OtherComponent />
    </div>
  );
}

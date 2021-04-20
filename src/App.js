import "./styles.css";
import Title from "./Header/Title";
import ButtonViet from "./Button/ButtonViet";
import ButtonTurk from "./Button/ButtonTurk";
import ButtonAus from "./Button/ButtonAus";

export default function App() {
  return (
    <div className="App">
      <Title />
      <ButtonViet />
      <ButtonTurk />
      <ButtonAus />
    </div>
  );
}

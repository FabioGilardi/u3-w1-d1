import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>First Page with React</p>
        <ButtonComponent textToInsert="React Generated Button" />
        <ImageComponent
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ofj-lUUOEfahyfax88LtL03ZWBcExcqYlg&usqp=CAU"
          imageDescription="react does it better"
        />
      </header>
    </div>
  );
}

export default App;

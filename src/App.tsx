import { useState } from 'react';
import { SizeSelector } from './components/SizeSelector';
import { ColorSelector } from './components/ColorSelector';
import './App.css';

function App() {
  const [currentSize, setCurrentSize] = useState("none");
  const [currentColor, setCurrentColor] = useState("none");

  return (
    <div className="App App-header">
      <h1>Talla seleccionada: { currentSize }</h1>
      <SizeSelector 
        selectedSize={currentSize}
        onSizeChange={setCurrentSize}
      />
      <h1 style={{ marginTop: "20px" }}>Color seleccionado: { currentColor }</h1>
      <ColorSelector 
        selectedColor={currentColor}
        onColorChange={setCurrentColor}
      />
    </div>
  );
}

export default App;

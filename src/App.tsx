import { useState } from 'react';
import { SizeSelector } from './components/SizeSelector';
import { ColorSelector } from './components/ColorSelector';
import './App.css';

const colorMap: Record<string, string> = {
  "Rojo": "red",
  "Verde": "green",
  "Azul": "blue",
  "Amarillo": "yellow",
  "Negro": "black"
};

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
      <div style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ marginRight: "10px" }}>Color seleccionado:</h1>
          { currentColor !== "none" && (
            <div 
              style={{
                backgroundColor: colorMap[currentColor],
                width: "50px",
                height: "50px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            />
          )}
        </div>
        <ColorSelector 
          selectedColor={currentColor}
          onColorChange={setCurrentColor}
        />
      </div>
    </div>
  );
}

export default App;

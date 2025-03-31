import { FC } from "react";
import "../index.css";

const basicColors = ["Rojo", "Verde", "Azul", "Amarillo", "Negro"];

interface Props {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export const ColorSelector: FC<Props> = ({ selectedColor, onColorChange }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <select 
        value={selectedColor} 
        onChange={(e) => onColorChange(e.target.value)}
        style={{
          padding: "0.6em 1.2em",
          fontSize: "1em",
          borderRadius: "8px",
          border: "1px solid transparent",
          backgroundColor: "#1a1a1a",
          color: "white",
          cursor: "pointer"
        }}
      >
        <option value="none" disabled>Seleccione un color</option>
        {basicColors.map(color => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

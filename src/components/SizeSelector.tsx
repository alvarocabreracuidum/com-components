import { FC } from "react";
import "../index.css"

const possibleSizes = ["XS", "S", "M", "L", "XXL"];


interface Props {
    selectedSize: string;
    onSizeChange: ( size: string ) => void;
}


export const SizeSelector:FC<Props> = ({ selectedSize, onSizeChange}) => {
    return (
        <div style={{ display: "flex" }}>
            {
                possibleSizes.map( size => (
                    <button 
                        key={ size }
                        className={ selectedSize === size ? "active": "" }
                        onClick={ () => onSizeChange( size )}
                    >
                    { size }
                    </button>
                ))
            }
        </div>
    )
}
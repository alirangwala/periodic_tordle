import React from 'react'
import "./Element.css";

export interface ElementProps {
  number: number;
  symbol: string;
  name: string;
}

const Element: React.FC<ElementProps> = ({number, symbol, name}) => {
  return (
    <div className="element">
      <div className="number">{number}</div>
      <div className="symbol">{symbol}</div>
      <div className="name">{name}</div>
    </div>
  )
}

export default Element
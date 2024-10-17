import React from 'react'
import Input from '../Input'
import Element from '../Element/Element'
import { ElementData, elements } from '@/lib/elements'
import "./PeriodicTable.css";
import GapElement from '../GapElement/GapElement';



const mapElements = (elements: ElementData[]) => {
  return elements.map((el: ElementData, index) => (
      <Element 
      key = {index}
      number= {el.num}
      name = {el.name}
      symbol = {el.symbol}
      />
  ))
}


const mapGaps = (gap_number: number) => {
  return Array.apply(null, Array(gap_number)).map((_, index) => (
      <GapElement key ={index} />
  ))
}

const PeriodicTable = () => {
  return (
    <>
    <Input />
    <div className="periodic-table">
          {mapElements(elements.slice(0,1))}
          {mapGaps(17)}
          {mapElements(elements.slice(1,2))}

          {mapElements(elements.slice(2,4))}
          {mapGaps(11)}
          {mapElements(elements.slice(4 ,10))}

          {mapElements(elements.slice(10,12))}
          {mapGaps(11)}
          {mapElements(elements.slice(12 ,18))}

          {mapElements(elements.slice(18,21))}
          {mapGaps(1)}
          {mapElements(elements.slice(21 ,36))}

          {mapElements(elements.slice(36,39))}
          {mapGaps(1)}
          {mapElements(elements.slice(39 ,54))}

          {mapElements(elements.slice(54,57))}
          {mapGaps(1)}
          {mapElements(elements.slice(57 ,72))}

          {mapElements(elements.slice(72,75))}
          {mapGaps(1)}
          {mapElements(elements.slice(75 ,90))}

          {mapGaps(19)}

          {mapGaps(4)}
          {mapElements(elements.slice(90,104))}
          {mapGaps(1)}

          {mapGaps(4)}
          {mapElements(elements.slice(104,118))}
          {mapGaps(1)}


    </div>
    </>
  )
}

export default PeriodicTable
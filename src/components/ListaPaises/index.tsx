

import { ListaPaisesElem } from "../ListaPaisesElem";
import "./style.css";
import { Pais } from "@/types/Pais";


interface ListaPaisesProps {
    paises: Pais[],
}

export const ListaPaises =(props: ListaPaisesProps)=>{
    const paises = props.paises
  return (
    <div className="PaisList">
        {paises.map((e)=>{
            return (
            <ListaPaisesElem 
            key={e.tld[0]} 
            pais={e}
            />
            )})}
    </div>
        
  )
}

// pais[flags]
// pais.flags
//  Object.keys(pais.languages).map( key => 
//    <p>
//        {pais.languages[key]}
//    </p>
//  ) // eng, esp


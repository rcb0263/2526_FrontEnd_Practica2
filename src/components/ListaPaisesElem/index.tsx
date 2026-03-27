

import "./style.css";
import { Pais } from "@/types/Pais";

interface ListaPaisesElemProps {
    pais: Pais,
}

export const ListaPaisesElem =(props: ListaPaisesElemProps)=>{
  const pais = props.pais
  return (
    <div className="PaisList">
        {pais.capital}
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


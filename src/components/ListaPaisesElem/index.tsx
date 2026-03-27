

import Link from "next/link";
import "./style.css";
import { Pais } from "@/types/Pais";

interface ListaPaisesElemProps {
    pais: Pais,
}

export const ListaPaisesElem =(props: ListaPaisesElemProps)=>{
  const pais = props.pais
  return (
      <Link href={`/country/${pais.name.official}`} className="Elem">
      <h2>Nombre comun: {pais.name.common}</h2>
      {pais.flags.png && <img className="image" src={pais.flags.png}/>}
      <h3>Poblacion: {pais.population}</h3>
      </Link>
  )
}



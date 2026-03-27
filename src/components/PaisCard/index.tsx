import { Pais } from '@/types/Pais'
import './style.css'

export const PaisCard=(params: {pais: Pais})=>{
    const pais = params.pais

  return (
    <div className="Card">
      {pais && <h2>Nombre oficial: {pais.name.official}</h2>}
      {pais && <h2>Capital: {pais.capital}</h2>}
      {pais && <h2>Subregion: {pais.subregion}</h2>}
      {pais && (<>
        <h2>Lenguajes:</h2> {
          Object.keys(pais.languages).map(key =>{
          return <h4 key={key}>{pais.languages[key as any]}</h4> 
              })
          }
        </>)
      }
      {pais && (<>
        <h2>Monedas:</h2> {
          Object.keys(pais.currencies).map(key =>{
          return (<h3 key={key}>Nombre: {pais.currencies[key as any].name}, Simbolo: {pais.currencies[key as any].symbol}</h3> )
              })
          }
        </>)
      }

    </div>
        
  )
}

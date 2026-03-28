'use client';

import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './style.css'
import { Pais } from "@/types/Pais";
import { getPaisesAll, getPaisesByName } from "@/elAxios/paises";
import { ListaPaises } from "@/components/ListaPaises";
const Page = () => {

  const [paises, setPaises]= useState<Pais[]|null>(null);
  const [name, setName]= useState<string>('');
  const [FinalName, setFinalName]= useState<string>('');
  const [error, setError]= useState<boolean>(false);
  const [loading, setLoading]= useState<boolean>(false);

  useEffect(()=>{
    if(name != ''){
      setLoading(true)
      getPaisesByName(String(name)).then((res)=>{
        setLoading(false)
        setPaises(res);
      }).catch((e:AxiosError)=>{
        setLoading(false)
        setError(true)
      }).finally(()=>{

      })
    }else if(paises==null){
      setLoading(true)
      getPaisesAll(String(name)).then((res)=>{
        setLoading(false)
        setPaises(res);
      }).catch((e:AxiosError)=>{
        setLoading(false)
        setError(true)
      }).finally(()=>{

      })

    }
  },[FinalName])

  const router = useRouter()
  return (
    <div className="Lista">
      <h1>Busqueda de Paises</h1>
      <p/>
      <div>
        <input
          value={name} 
          onChange={(e)=>{
          setName(e.target.value)
          }}
        />
        <button
          onClick={()=>{
          setFinalName(name)
          }}
        >Buscar</button>
      </div>
        {paises && <ListaPaises paises={paises}/>}
        {loading && <h1>LOADING...</h1>}
        {error && <h1>ERROR</h1>}
    </div>
  );
}

export default Page;

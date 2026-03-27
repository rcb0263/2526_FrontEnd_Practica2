'use client';
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.css";
import { PaisCard } from "@/components/PaisCard";
import { Pais } from "@/types/Pais";
import { getPaisesByName } from "@/elAxios/paises";

const EstaRecibeName = () => {
  const {name} = useParams();

  const [pais, setPais]= useState<Pais|null>(null);
  const [error, setError]= useState<boolean>(false);
  const [loading, setLoading]= useState<boolean>(false);

  useEffect(()=>{
    setLoading(true)
    getPaisesByName(String(name)).then((res)=>{
        setLoading(false)
        setPais(res[0]!);
    }).catch((e:AxiosError)=>{
        setLoading(false)
        setError(true)
    }).finally(()=>{
    })
  },[name])
  return (
    <div className="byIdCard">
        {pais && <PaisCard pais={pais}/>}
        {loading && <h1>LOADING...</h1>}
        {error && <h1>ERROR</h1>}
    </div>
  );
}

export default EstaRecibeName;
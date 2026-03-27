import { Pais } from "@/types/Pais";
import { api } from "./axios"





export const getPaisesByName = async(name: string)=>{
    const response = await api.get(`/name/${name}`)
    const paises:Pais[] = response.data
    return paises;
}
export const getPaisesAll = async(name: string)=>{
    const response = await api.get(`/all?fields=capital,subregion,name,currencies,languages,flags,population`)
    const paises:Pais[] = response.data
    return paises;
}

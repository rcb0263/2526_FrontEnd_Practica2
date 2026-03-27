import { Pais } from "@/types/Pais";
import { api } from "./axios"





export const getPaisesByName = async(name: string)=>{
    const response = await api.get(`/name/${name}`)
    const paises:Pais[] = response.data
    return paises;
}
export const getCocktailByCode = async(code: string)=>{
    const response = await api.get(`/alpha/${code}`)
    console.log(response)
    const paises:Pais[] = response.data
    return paises.at(0);
}
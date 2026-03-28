paso 1:
npm install
paso 2:
npm run dev
paso 3:
abrir la url que te viene por consola, viene en el modo Local: http://localhost:...
suele ser: http://localhost:3000/

Tipos:
-Pais
 tiene los campos capital, subregion, population, name:{common, official}, currencies, languages, flags{png}
cono los campos dentro de currencies pueden cambiar, es necesario crearlos como [key:string] para poder usarlos mas adelante.

Componentes:
ListaPaises: Se le introduce un array de tipo Pais y crea una instancia del componente LastaPaisesElem para cada elemento con el pais como entrada.
ListaPaisesElem: Coge un Pais como entrada y devuelve el componente con el nombre comun, la bandera y poblacion, enveulto en un link a otra pagina para poder ver el elemento.

PaisCard: Se le introducen un pais como entrada y devuelve el componente con los campos pedidos ( nombre oficial, capital, subregión, lenguajes y monedas), para poder leer lenguajes y monedas, es necesario usar un ObjectKeys y un map del resultado dado que los campos pueden cambiar de nombre.

Paginas:
Pagina '/'  Como se requiere una lista inicial y que se actualiza cada vez que se haga una busqueda, se usa un useEfect con un estado ligado al valor del input (se cambia el estado al dar al boton de Buscar). La primera vez que se ejecuta, el estado de la lista está a null y se usa para obtener la primera lista usando la busqueda de la api filtrada, después se usa busqueda por nombre. Tiene una instancia del componente ListaPaises.
Pagina '/country/[name]' Hace una busqueda por nombre del pais usando [name] como parametro, y le pasa el resultado a una instancia del componente PaisCard.

Estilos:
Pagina Principal: 
Como solo va a salir la lista ademas del input y el boton, he decidido que estén centrados en la pagina, he separado los elementos de la lista, las he dado borde y color que cambian cuando pasas el raton por encima.

Pagina Secundaria:
He cambiado los estilos de h4, h3, y h2 para reducir el espaciado entre cada uno, también he centrado el componente y le he dado margen superior para relativo a la ventana para qué esté más centrado
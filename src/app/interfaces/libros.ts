export interface Libro {
    nombre:string;
    autor:string;
    imagen:string;
    paginas:number;
}

export const listaLibros:Array<Libro>=
[{
    nombre:"Cruzada en Jeans",
    autor:"Thea Beckman",
    imagen:"/images/libros/cruzada-en-jeans.png",
    paginas:300,
},
{
    nombre:"Sopa de letras",
    autor:"La Tercera",
    imagen:"/images/libros/sopa-de-letras.jpg",
    paginas:100,
},
{
    nombre:"Max",
    autor:"Sarah Cohen-Scali",
    imagen:"/images/libros/max.jpg",
    paginas:560,
},
{
    nombre:"The Cinematic Art of World of Warcraft",
    autor:"Blizzard Entertainment",
    imagen:"/images/libros/war.jpg",
    paginas:200,
},
{
    nombre:"Electricidad y Electromagnetismo",
    autor:"F.W Sears",
    imagen:"/images/libros/elec.jpg",
    paginas:350,
},
{
    nombre:"Crónica de una muerte anunciada",
    autor:"Gabriel García Márquez",
    imagen:"/images/libros/cronica.jpg",
    paginas:150,
},
{
    nombre:"One Punch Man Vol:1",
    autor:"ONE",
    imagen:"/images/libros/one.jpg",
    paginas:20,
},
{
    nombre:"Historia universal: Roma Imperial",
    autor:"Carl Grimberg",
    imagen:"/images/libros/his1.jpg",
    paginas:200,
},
{
    nombre:"Historia universal: La guerra de los cien años",
    autor:"Carl Grimberg",
    imagen:"/images/libros/his2.jpg",
    paginas:200,
},
{
    nombre:"Bachmann Trains: 2011",
    autor:"Bachmann Inc.",
    imagen:"/images/libros/bachmann.jpg",
    paginas:250,
}
];
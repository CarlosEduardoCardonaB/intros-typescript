interface AudioPlayer {
    audioVolume: number;
    soungDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soungDuration: 36,
    song: "Mess",
    details: {
        author: 'ed Sheeran',
        year: 2015
    }
} 

const { song:anotherSong, soungDuration:duration, details } = audioPlayer; //se asignan alias a las propiedades, Por ejemplo a la variable que se llama song, de aqui en adelante se llamará anotherSong
const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author ', author)

//Forma de arreglo convencional
// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[2] || 'No hay personaje';

//Forma de arreglo desestructurado, en donde se maneja valor por defecto en caso de que no exista el p4 en ese ejemplo.
//const [ p1, p2, p3, p4 = 'Not found p4' ]: string[] = ['Goku', 'Vegeta', 'Trunks']

//Tambien podemos ignorar ciertas posiciones asi, dejando las posiciones con comas. De esta manera se ignoran
const [ , , , p4 = 'Not found p4' ]: string[] = ['Goku', 'Vegeta', 'Trunks']

console.error('Personaje 3: ', p4);

export{}
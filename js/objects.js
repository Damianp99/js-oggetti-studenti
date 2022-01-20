/*
Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
Consigli del giorno
- Scriviamo sempre prima in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta e verifichiamo (il console.log è nostro amico), se funziona allora andiamo avanti.

*/
// 1

const student = {
    nome: 'Ciccio',
    cognome: 'Panza',
    età: 21,
}

console.log(student)
const displayElement = document.getElementById('student')
// 2
let allKeys = '';
for (let key in student) {
    console.log(key)
    allKeys += [key + ':' + student[key] + ' ']
}


// displayElement.innerText += `${allKeys}`

// 3

const students = [
    { name: 'Francesco', cognome: 'Totò', eta: 28 },
    { name: 'Michele', cognome: 'Rossi', eta: 21 },
    { name: 'Carlo', cognome: 'Rizzo', eta: 22 },
    { name: 'Giovanni', cognome: 'Raggi', eta: 25 },
]

// 4

let allStudents = '';

for (let i = 0; i < students.length; i++) {
    let classStudents = students[i];
    for (let key in classStudents) {
        if (key !== 'età') {
            allStudents += key + ':' + classStudents[key] + ' ';
        }
    }
}

displayElement.innerText += `${allStudents}`

// 5

let userName = prompt('Inserisci un nome').trim();
let surname = prompt('Inserisci un cognome').trim();
let age = prompt("Inserisci l'età").trim();

const newClass = [];
newClass.push(userName, surname, age);
console.log(newClass)

// PROVA IL BONUS
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

const student = {
    nome: 'Ciccio',
    cognome: 'Panza',
    età: 21,

}

console.log(student)
const displayElement = document.getElementById('student')

let allKeys = '';
for (let key in student) {
    console.log(key)
    allKeys += [key + ':' + student[key] + ' ']
}


displayElement.innerText += `${allKeys}`

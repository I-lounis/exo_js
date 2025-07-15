/*
let tour = 0

while(tour <= 10){
    document.write("<p>C'est le tour de manège n°" + tour +"</p>");
    tour++;
}
*/

/*let tour = 0;
let tourUser = prompt("Entrez un nombre de tour","7");

while(tour <= tourUser){
    document.write("<p>C'est le tour de manège n°" + tour +"</p>");
    tour++;
}
document.write("<h2>Résultat : " + tour + "</h2>")
*/



for (let i = 1; i <= 10; i++){
    document.write("<p style='color:red'> C'est le tour de manège n°:"+ i + "</p>");
}

let tourUser = parseInt(prompt("Entrez un nombre de tour","17"));
let tour = 1;

while(tour <= tourUser){
    document.write(`<p>C'est le tour de manège n° ${tour}</p>`)
    tour++
}

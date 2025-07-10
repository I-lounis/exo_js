let moyen = parseFloat(prompt("Entre ta moyenne", "14.7"))


if (!isNaN(moyen)){
    if (moyen < 10){
        document.write ("Tu es recalé")
    } else if ( moyen >= 10 && moyen < 12){
        document.write ("Tu es reçu")
    } else if ( moyen >= 12){
        document.write ("Tu es reçu avec mention")
    }
    if (moyen > 20){
        alert ("Ce n'est pas une moyenne valide")
    }
} else {
    alert ("Ce n'est pas une moyenne")
}


/*
console.log("heyou");

let moyenne;

moyenne = parseFloat(prompt("Entre ta moyenne","14.7"));

if (moyenne < 10){
    document.write ("<p>Recalé</p>")
} else if ((moyenne >= 10) && (moyenne < 12)){
    document.write ("<p>Reçu</p>")
} else if ((moyenne >= 12) && (moyenne <= 20)){
    document.write ("<p>Mention<p/>")
}else{
    document.write("<p>Moyenne non valide<p/>")
}
*/
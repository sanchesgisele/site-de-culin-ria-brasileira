//Questão2
var nota1, nota2, nota3, media
nota1=parseFloat(prompt("Digite sua primeira nota."));
nota2=parseFloat(prompt("Digite sua segunda nota."));
nota3=parseFloat(prompt("Digite sua terceira nota."));
media=((nota1+nota2+nota3)/3);
if (media>=60) {
    window.alert("Sua media é de" + media + ". Você foi aprovado.");
}
else if (media<60) {
    window.alert("Sua media é de" + media + ". Você foi reprovado.");
}
    
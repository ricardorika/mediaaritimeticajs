var nota1 = parseInt(prompt("Digite a nota 1: "));
var nota2 = parseInt(prompt("Digite a nota 2: "));
var nota3 = parseInt(prompt("Digite a nota 3: "));
var media = (nota1 + nota2 + nota3) / 3;

if (media <6) {
	document.write("ALUNO REPROVADO! :( Média: " +media);
}
if (media >=6) {
	document.write("ALUNO APROVADO! :D Média: " +media);
}
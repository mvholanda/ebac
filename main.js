const alunos = [{
    nome: "Marcus",
    nota: 10
},
{
    nome: "Joao",
    nota: 5
},
{
    nome: "Maria",
    nota: 6
}];

const alunosAprovados = alunos.filter(function(item) {
    return item.nota >= 6
})

console.log(alunosAprovados)
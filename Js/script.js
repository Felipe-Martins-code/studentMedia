
const mediaAluno = () =>{
    var nomeAluno = document.querySelector('#nomeAluno').value
    console.log(nomeAluno)

    const n1 = parseFloat(document.querySelector('#nota1').value) 
    const n2 = parseFloat(document.querySelector('#nota2').value)
    const n3 = parseFloat(document.querySelector('#nota3').value)
    const soma = (n1 + n2 + n3) / 3
    const media = soma.toFixed(0) 
    
    if( media < 5 ){
        var reprovado = document.querySelector('#reprovado')
        reprovado.innerHTML = `${nomeAluno} teve média: ${media} Reprovado`
    } else if ( media >= 5 && n1 >= 3 && n3 >= 3 ){
        const modalAprovado = document.querySelector('#btn-media')
        const aprovado = document.querySelector('#aprovado')

        modalAprovado.removeAttribute('data-target')
        modalAprovado.setAttribute('data-target' , '#modalAprovado')

        aprovado.innerHTML = `${nomeAluno} teve média: ${media} Aprovado`    
    }
}

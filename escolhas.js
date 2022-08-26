function entrarNoSistema(){
    alert("Bem vindo a escolha de PROGRAMAÇÃO do Matt!")
 
  }

function escolherArea(){
    let frontOuBack = prompt("quer seguir para área de Front-End ou seguir para a área de Back-End? DIGITE 1 PARA FRONT END E 2 PARA BACKEND")
    
    if (frontOuBack == 1){
        alert("Que legal! a Area de Front-End é bem procurada na nossa época, boa escolha!")
        const area_front = prompt("quer aprender React ou aprender Vue? DIGITE 1 PARA React e 2 PARA Vue")

        if (area_front == 1){
            alert("Que legal! Continue seus estudos!")
        
        } else if (area_front == 2){
            alert("Vue é interessante! Continue a aprender!")
        }

    } 
    if (frontOuBack == 2){
        alert("Olha só! A Area de Backend é bem interessante, belissima escolha!")

        const area_back = prompt("quer aprender C# ou aprender Java? DIGITE 1 PARA C# e 2 PARA JAVA")

        if (area_back == 1){
            alert("Que legal! Continue seus estudos!")
        
        } else if (area_back == 2){
            alert("Java é interessante! Continue a aprender!")
        }
        
    } else if (frontOuBack != 1 || frontOuBack != 2){
        alert("Opção não existe")
    }
}

function especializar_ou_fullstack(){

    const especializarOuFullstack = prompt("Deseja se especializar na sua linguagem ou se tornar Fullstack? USE 1 PARA ESPECIALIZAR E 2 PARA FULLSTACK")
    
    if (especializarOuFullstack == 1){
    
        alert("Muito bom!! Vamos especializar então!")

    } else if (especializarOuFullstack == 2){

        alert("Hora de botar a mão na massa, vamos ser FULL STACK")

    } else {
        alert("Opção não existe")
    }

}

function linguagensAprender(){
    let linguagem = 0;
    let listaEstudos = []

    while (linguagem < 999) {
        let estudarMais = prompt("Deseja adicionar linguagens na sua lista de aprendizado? USE S PARA SIM E N PARA NÃO") 

        if (estudarMais == "N"){

            alert("Ok, até mais! A seguir, sua lista de estudos")
            alert(listaEstudos)
            break

        }
        if (estudarMais == "S"){

            let = linguagemEstudar = prompt("Digite o nome da linguagem")
            listaEstudos.push(linguagemEstudar)
            linguagem += 1
            continue

        } else {
            alert("Até mais!")
            break
        }

    }
}

escolherArea();
especializar_ou_fullstack();
linguagensAprender();


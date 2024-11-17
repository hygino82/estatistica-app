class Intervalo {
    constructor(inicio, fim) {
        if (inicio >= fim) {
            throw new Error('Valor de início deve ser menor que o valor do fim');
        }

        this.inicio = inicio;
        this.fim = fim;
    }
}

class Campo {
    constructor(intervalo, quantidade) {
        this.intervalo = intervalo;
        this.quantidade = quantidade;
    }
}

class CampoMedia {
    constructor(valor, quantidade) {
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

let listaCampos = [
    new Campo(new Intervalo(40, 45), 6),
    new Campo(new Intervalo(45, 50), 8),
    new Campo(new Intervalo(50, 55), 10),
]
const adicionarCampo = () => {
    const inicioIntervalo = Number(document.getElementById("inicioIntervalo").value);
    const fimIntervalo = Number(document.getElementById("fimIntervalo").value);
    if (fimIntervalo <= inicioIntervalo) {
        alert("Valores inválidos o valor de fim de intervalo deve ser maior que o valor do início!");
    } else {
        let listaMedias = [];
        if (listaCampos.length > 0) {
            listaCampos.forEach(campo => {
                const media = (inicioIntervalo + fimIntervalo) / 2.0;
                listaMedias.push(new CampoMedia(media, campo.quantidade));
            })
        }
        listaMedias.forEach(x => console.log(x));
    }
}
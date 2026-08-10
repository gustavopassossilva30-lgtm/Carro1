class carroEletrico extends Carro {
    constructor(marca, modelo, ano, capacidadeBateria) {
        super(marca, modelo, ano);
        this.capacidadeBateria = capacidadeBateria;

    }

    imprimirDetalhes() {
        return `
            Marca:${this.marca}
            Modelo:${this.modelo}
            Ano:${this.ano}
            Capacidade da Bateria:${this.capacidadeBateria} kWh
        `;
    }
}

const carro1 = new Carro(
    "Toyota",
    "Corolla",
    2022
);

const carro2 = new carroEletrico(
    "Tesla",
    "Model 3",
    2024,
    75
);

function mostrarCarros() {
    document.getElementById("resultado").innerHTML =
        "<b>Carro Convencional</b><br>" +
        carro1.imprimirDetalhes() +
        "<br><br><b>Carro Elétrico</b><br>" +
        carro2.imprimirDetalhes();
}



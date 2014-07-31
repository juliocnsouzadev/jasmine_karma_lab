function PacienteBuilder() {

    var nome = "Julio";
    var idade = 31;
    var peso = 82;
    var altura = 1.72;

    var clazz = {
        comNome: function(valor) {
            nome = valor;
            return this;
        },
        comIdade: function(valor) {
            idade = valor;
            return this;
        },
        comPeso: function(valor) {
            peso = valor;
            return this;
        },
        comAltura: function(valor) {
            altura = valor;
            return this;
        },
        constroi: function() {
            return new Paciente(nome, idade, peso, altura);
        }

    };

    return clazz;
}


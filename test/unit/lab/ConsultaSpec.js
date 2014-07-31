describe("Consulta", function() {

    var julio;

    beforeEach(function() {
        julio = new Paciente("Julio", 31, 82, 1.72);
    });


    describe("Consultas que são retornos", function() {

        it("nao deve cobrar nada se a consulta for um retorno", function() {

            var consulta = new Consulta(julio, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });

    });

    describe("Consultas por um convênio", function() {

        it("deve cobrar 25 por cada procedimento comum", function() {

            var consulta = new Consulta(julio, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });

    });


    describe("Consultas que são particulares", function() {

        it("deve dobrar o preco da consulta particular", function() {

            var consulta = new Consulta(julio, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);
        });

        it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {

            var consulta = new Consulta(julio, ["raio-x"], true, false);

            expect(consulta.preco()).toEqual(55 * 2);
        });

    });

});

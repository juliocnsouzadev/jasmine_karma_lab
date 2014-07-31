describe("Paciente", function() {

    it("deve calcular o IMC", function() {
        var julio = new Paciente("Julio", 31, 82, 1.72);

        expect(julio.imc()).toEqual(82 / (1.72 * 1.72));
    });

    it("deve calcular batimentos cardiacos", function() {
        var julio = new Paciente("Julio", 31, 82, 1.72);

        expect(julio.batimentos()).toEqual(31 * 365 * 24 * 60 * 80);
    });

});

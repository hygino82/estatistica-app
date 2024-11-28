var CampoDescritivo = /** @class */ (function () {
    function CampoDescritivo(valor, quantidade) {
        this.valor = valor;
        this.quantidade = quantidade;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    return CampoDescritivo;
}());
var lista = [
    new CampoDescritivo('Banana', 7),
    new CampoDescritivo('Laranja', 3),
    new CampoDescritivo('Melancia', 4),
    new CampoDescritivo('Manga', 6)
];
function contarTotalElementos(lista) {
    var soma = 0;
    lista.forEach(function (campo) { return soma += campo.quantidade; });
    return soma;
}
var gerarTabela = function () {
    console.log("Testando chamada de função");
    var corpoTabela = '';
    var totalElementos = contarTotalElementos(lista);
    lista.forEach(function (campo) {
        var percentual = 100 * campo.quantidade / totalElementos;
        var angulo = 360 * campo.quantidade / totalElementos;
        corpoTabela += "\n        <tr>\n            <th scope=\"row\">".concat(campo.valor, "</th>\n              <td>").concat(campo.quantidade, "</td>\n              <td>").concat(percentual.toFixed(2), "%</td>\n              <td>").concat(angulo.toFixed(2), "\u00BA</td>\n        </tr>\n        ");
    });
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "\n      <table class=\"table table-striped table-hover table-bordered\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Descri\u00E7\u00E3o</th>\n              <th scope=\"col\">Quantidade</th>\n              <th scope=\"col\">Percentual</th>\n              <th scope=\"col\">\u00C2ngulo</th>\n            </tr>\n          </thead>\n          <tbody>\n                ".concat(corpoTabela, "\n          </tbody>\n      </table>\n    ");
};

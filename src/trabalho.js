var CalcularMedia = new function() {
    this.totalNotas = 0;

    this.exibirEntradas = function() {
        this.totalNotas = parseInt(document.getElementById("totalNotas").value);
        totalNotas += 1;
        var calculoDiv = document.getElementById("calculo");
        calculoDiv.style.display = "block";

        var elementoHtml = "";
        for (var i = 0; i < this.totalNotas; i++) {
            elementoHtml += '<input type="text" id="nota_' + i + '" placeholder="Digite a Nota "/> </br  >';
        }

        var entradasDiv = document.getElementById("entradas");
        entradasDiv.innerHTML = elementoHtml;
    };

    this.calcularMedia = function() {
        var total = 0;
        for (var i = 0; i < this.totalNotas; i++) {
            total += parseFloat(document.getElementById("nota_" + i).value);
        }

        var media = (total / this.totalNotas);
        // alert("A média é : " + media);

        var resultadoDiv = document.getElementById("resultado");
        if (media >= 6) {
            resultadoDiv.innerHTML = "<h3 style='color:#008800'> Parabéns você passou com a media : " + media + " </h3> "
        } else {
            resultadoDiv.innerHTML = "<h3 style='color:#880000'> Infelizmente voce nao passou media : " + media + " </h3> "
        }
    };
};
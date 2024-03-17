function calc(){    
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;

    var nomeUsuario = document.getElementById("nomeusuario").value.trim();
    output.innerHTML += nomeUsuario ? `Caro(a) <strong>${nomeUsuario}</strong>, Esses são os dados do seu pedido: <br><br>` : '';

    var prods = [
        { id: 1, name: "Bife com Batata", price: 30.0 },
        { id: 2, name: "Coxa de Frango crocante", price: 25.0 },
        { id: 3, name: "Carne de Panela", price: 22.0 },
        { id: 4, name: "Farofa", price: 10.0 },
        { id: 5, name: "Salada", price: 8.0 },
        { id: 6, name: "Torresmo", price: 12.0 },
    ];

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency' ,
        currency: 'BRL'
    });

    for (var input of quantities) {
        var id = input.id;
        var quantity = parseFloat(input.value);
        var productName = prods[id-1].name;
    
        if (!isNaN(quantity) && quantity > 0) {
            if (id >= 4 && id <= 6) {
                output.innerHTML += `Acompanhamento: ${productName}  - Preço: ${formatter.format(prods[id-1].price)}  -  Quantidade: ${quantity} <br>`;
            } else {
                output.innerHTML += `Prato: ${productName}  - Preço: ${formatter.format(prods[id-1].price)}  -  Quantidade: ${quantity} <br>`;
            }
            total += prods[id-1].price * quantity;
        }
    }
    
    output.innerHTML += `<h2>Total: ${formatter.format(total)}</h2>`;
}



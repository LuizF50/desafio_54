function calcularJornada() {
    // Obtém os movimentos do input
    const input = document.getElementById("movimentosInput").value.trim();

    // Valida se há movimentos e limita a quantidade a no máximo cinco
    if (!input) {
        alert("Por favor, insira os movimentos.");
        return;
    }

    const movimentos = input.split(",").map(mov => mov.trim().toLowerCase());

    if (movimentos.length > 6) {
        alert("Você pode inserir no máximo cinco movimentos.");
        return;
    }

    // Calcula as coordenadas finais
    let x = 0, y = 0;

    movimentos.forEach(movimento => {
        switch (movimento) {
            case "norte":
                y++;
                break;
            case "sul":
                y--;
                break;
            case "leste":
                x++;
                break;
            case "oeste":
                x--;
                break;
            default:
                alert(`Movimento inválido detectado (${movimento}). Use apenas norte, sul, leste ou oeste.`);
                return; // Interrompe caso haja movimento inválido
        }
    });

    // Exibe o resultado final
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<strong>Posição Final Otimizada:</strong> (${x}, ${y})`;
}

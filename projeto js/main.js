function increaseContador () {
    const contador = document.getElementById
    ("contador");
    let value = parseInt (contador.textContent);
    value ++
    contador.textContent = value.toString ().padStart
    (2, "0")
}

function decreaseContador () {
    const contador = document.getElementById
    ("contador");
    let value = parseInt(contador.textContent);
    if (value > 1) {
            value --;
        }
    contador.textContent = value.toString ().padStart
    (2, "0")
    }
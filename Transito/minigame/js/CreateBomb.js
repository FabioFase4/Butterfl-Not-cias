const imgBomb = document.getElementById("Bomb");
const imgAguia = document.getElementById("Aguia");

function criarBomba(BombDependence, Vidas) 
{
    const rovio = document.getElementById("Rovio");
    const cena = document.querySelector(".cena");

    if (!rovio || !cena) {
        console.error("Rovio ou cena não encontrados!");
        return;
    }

    const nova = imgBomb.cloneNode(true);

    nova.removeAttribute("id");
    const posRovio = rovio.getBoundingClientRect();
    const posCena  = cena.getBoundingClientRect();

    nova.style.position = "absolute";
    nova.style.left = (posRovio.left - posCena.left +  300) + "px";
    nova.style.top  = (posRovio.top  - posCena.top)  + "px";

    new BombDependence(imgAguia, nova, 5, 5, Vidas);
    cena.appendChild(nova);

    return cena;
}

// spawn a cada 2 segundos

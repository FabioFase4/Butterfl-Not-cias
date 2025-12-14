export default class Bomb 
{
    #aguia;
    #bomba;
    #speed;
    #dano;
    #vidas;

    constructor(aguia, bomba, speed = 0, dano = 1, vidas)
    {
        this.#aguia = aguia;
        this.#bomba = bomba;
        this.#speed = speed;
        this.#dano = dano;
        this.#vidas = vidas;
        this.#Effect();
        requestAnimationFrame(this.#Walk.bind(this));
    }

    #Walk ()
    {
        if (!document.body.contains(this.#bomba)) return;

        const bx = parseFloat(this.#bomba.style.left) || 0;
        const by = parseFloat(this.#bomba.style.top)  || 0;

        const ax = parseFloat(this.#aguia.style.left) || 0;
        const ay = parseFloat(this.#aguia.style.top)  || 0;

        let dx = ax - bx;

        const dist = Math.abs(Math.sqrt(dx*dx));

        if (bx < 0) 
        {
            this.#bomba.style.background = "red";
        }
        

        this.#Collide();
        const nx = dx / dist;

        this.#bomba.style.left = (bx + nx * this.#speed) + "px";
        //this.#bomba.style.top  = (by + ny * this.#speed) + "px";

        requestAnimationFrame(this.#Walk.bind(this));
    }

    #Effect() {
        // remove suavemente depois
        setInterval(() => this.#bomba.style.background = "blue", 1000);
        setInterval(() => this.#bomba.style.background = "green", 2000);
        setInterval(() => this.#bomba.style.background = "purple", 3000);
        setInterval(() => this.#bomba.style.background = "orange", 4000);
        setInterval(() => this.#bomba.style.background = "red", 4200);
        setInterval(() => this.#bomba.remove(), 4200);
    }

    #Collide ()
    {
        const rA = this.#aguia.getBoundingClientRect();
        const rB = this.#bomba.getBoundingClientRect();

        // colisão AABB
        const colide = (
            rA.left < rB.right + 100 &&
            rA.right > rB.left + 100 &&
            rA.top < rB.bottom &&
            rA.bottom > rB.top
        );

        if (colide) {
            this.#vidas.Dano(this.#dano);
            this.#bomba.remove();
            return;
        }
    }
}
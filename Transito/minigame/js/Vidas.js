export default class Vidas
{
    #vidas;
    #html;
            
    constructor (vidas, html)
    {
        this.#vidas = vidas;
        this.#html = html;
        this.Dano(0);
    }

    async Dano (dano)
    {
        this.#vidas -= dano;
        this.#html.innerHTML = "Vidas: " + this.#vidas;
    }
}
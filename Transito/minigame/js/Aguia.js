
export default class Aguia
{
    #y;
    #aguia;
    

    constructor(y, aguia)
    {
        this.#y = y;
        this.#aguia = aguia;
        requestAnimationFrame(this.#Gravidade.bind(this));
    }

    #Gravidade ()
    {
        let antes = parseInt(this.#aguia.style.top, 10) || 0;
        this.#Limites(antes);
        
        this.#aguia.style.top = (antes + this.#y) + "px";
        this.#y += 0.5;
        requestAnimationFrame(this.#Gravidade.bind(this));
    }

    #Limites (antes)
    {
        if (antes > 800)
        {
            this.#y = -5;
        }
        else if (antes < 0)
        {
            this.#y = 0;
            this.#y = 2;
        }
    }

    #Rotacione ()
    {
        this.#aguia.style.transform = `scaleX(-1) rotate(${this.#y * -2}deg)`;
    }

    Click ()
    {
        const antes = parseInt(this.#aguia.style.top, 10) || 0;
        this.#y = -10;
        this.#aguia.style.top = (antes + this.#y) + "px";
    }
}


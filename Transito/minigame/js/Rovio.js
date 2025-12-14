export default class Rovio
{
    #aguia;
    #rovio;
    #speed;

    constructor(aguia, rovio, speed)
    {
        this.#aguia = aguia;
        this.#rovio = rovio;
        this.#speed = speed;
        requestAnimationFrame(this.#Walk.bind(this));
    }

    #Walk ()
    {
        const bx = parseFloat(this.#rovio.style.left) || 0;
        const by = parseFloat(this.#rovio.style.top)  || 0;

        const ax = parseFloat(this.#aguia.style.left) || 0;
        const ay = parseFloat(this.#aguia.style.top)  || 0;

        const dx = ax - bx;
        const dy = ay - by;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 0) 
        {
            let ny = 0;
            let nx = this.#rovio.style.left;
            if (ay < by)
            {
                ny -= 1;
            }
            else
            {
                ny += 1;
            }

            //this.#rovio.style.left = (bx + nx * this.#speed) + "px";
            this.#rovio.style.top  = (by + ny * this.#speed) + "px";
        }

        requestAnimationFrame(this.#Walk.bind(this));
    }
}

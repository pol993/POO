class Heroe {
    nombre: string;
    nivel: number;
    estaVivo: boolean;
    fechaCreacion: Date;
    habilidades: string[];
    estadisticas: { fuerza: number; agilidad: number };

    constructor(nombre: string, habilidades: string[]) {
        this.nombre = nombre;
        this.habilidades = habilidades;
        this.nivel = 1;
        this.estaVivo = true;
        this.fechaCreacion = new Date();
        this.estadisticas = { fuerza: 10, agilidad: 5 };
    }

    recibirDanio(puntos: number): void {
        this.estadisticas.fuerza -= puntos;

        if (this.estadisticas.fuerza <= 0) {
            this.estaVivo = false;
            console.log(this.nombre + " ha muerto");
        }
    }

    subirNivel(): void {
        this.nivel += 1;
        this.estadisticas.agilidad += 2;

        console.log(`¡${this.nombre} ha subido al nivel ${this.nivel}!`);
    }

    generarFicha(): string {
        let estado = this.estaVivo ? "Vivo" : "Muerto";
        return `Héroe: ${this.nombre} - Nivel: ${this.nivel} - Estado: ${estado}`;
    }
}

let heroe1 = new Heroe("Artu", ["Espada", "Magia"]);

console.log(heroe1.generarFicha());

heroe1.subirNivel();
heroe1.recibirDanio(5);
heroe1.recibirDanio(10);

console.log(heroe1.generarFicha());
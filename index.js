class Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, nivel, experiencia) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.nivel = nivel; 
    this.experiencia = experiencia;
    } 

    atacar(enemigo) {
        let daño = this.ataque - enemigo.defensa;
        enemigo.vida -= daño;
        console.log(`${this.nombre} ataca a ${enemigo.nombre} le resta ${daño} puntos de vida.`);
        this.defender(enemigo)
        if(enemigo.vida < 1) {
            enemigo.vida = 0
            this.morir(enemigo) 
            this.ganarExperiencia() 
        } else {
            console.log(`Vida restante de ${enemigo.nombre}: ${enemigo.vida}`) 
        }
        console.log(" ")
    } 

    defender(enemigo){ 
        let proteccion = Math.floor(Math.random()*4) 
        if (proteccion == 2){
            enemigo.vida = enemigo.vida + 5 
            console.log(`${enemigo.nombre} se ha defendido y a contrarrestrado 5 puntos de vida`)
        }
    } 

    ganarExperiencia(){
        let xp = Math.floor(Math.random()*50+50) 
        this.experiencia += xp
        console.log(`${this.nombre} ha ganado ${xp} de experiencia`)
        if (this.experiencia >= 100) {
            this.subirDeNivel()
            this.experiencia = 0;
        }
    }

    subirDeNivel() {
        this.nivel++
        this.vida = this.vida + Math.floor(Math.random()*20+1)
        this.ataque = this.ataque + Math.floor(Math.random()*4+1)
        this.defensa = this.defensa + Math.floor(Math.random()*4+1)
        this.velocidad = this.defensa+ Math.floor(Math.random()*4+1)
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}.`);
        console.log(`
            Vida = ${this.vida} 
            Ataque = ${this.ataque}
            Defensa = ${this.defensa}
            velocidad = ${this.velocidad}
        `)
    }

    morir(enemigo){
        enemigo.vida = 0
        console.log(`${enemigo.nombre} ha muerto`) 
    } 
} 
// vamos a ver la sociedad de la nieve, es buena solo no la veas comiendo
class Enemigo extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, nivel, experiencia, recompensa, tipo, faccion){ 
        super(nombre, vida, ataque, defensa, velocidad, nivel, experiencia)
        this.recompensa = recompensa
        this.tipo = tipo
        this.faccion = faccion 
    }
}  
let personaje = new Personaje("Adrian", 200, 50, 10, Math.floor(Math.random()*20+20), 5, 40)
let enemigo = new Enemigo("Roberto", 200, 40, 20, 30, Math.floor(Math.random()*20+20), 5, 10, "Vampiro", "Transylvania")

function pelear(){
    while(personaje.vida > 1 || enemigo.vida > 1){
        if (personaje.velocidad > enemigo.velocidad) {
            if (personaje.vida > 1 && enemigo.vida > 1) {
                personaje.atacar(enemigo) 
            }
            if (personaje.vida > 1 && enemigo.vida > 1) {
                enemigo.atacar(personaje) 
            } 
        }else{ 
            if (personaje.vida > 1 && enemigo.vida > 1) {
                enemigo.atacar(personaje) 
            } 
            if (personaje.vida > 1 && enemigo.vida > 1) {
                personaje.atacar(enemigo) 
            }
        }
    } 
} 

pelear(personaje, enemigo) 
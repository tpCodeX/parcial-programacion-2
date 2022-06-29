import Jugador from "./jugador";

class Arquero extends Jugador{

    constructor(n:String,a:String,e:String,f:String,t:Boolean){
        super(n,a,e,f,t)
       }
    queHacer(): void {
       console.log("Mi tarea es atajar la balón");
    }
    entrenar(): void {
        console.log("Mi entrenamiento es atajar penales ");
    }
    rematesArco(): void {
        console.log("Mi función no es rematar al arco");
    }
    perfilJugador(): void {
        console.log(`Mi nombre es ${this.nombre},mi apellido ${this.apellido} y mi edad es ${this.edad} `);
    }
}
export default Arquero;
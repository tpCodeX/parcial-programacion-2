import Jugador from "./jugador";

class Defensor extends Jugador{

    constructor(n:String,a:String,e:String,f:String,t:Boolean){
     super(n,a,e,f,t)
    }
    queHacer(): void {
        console.log("Mi tarea es frenar la balón");
     }
     entrenar(): void {
        console.log("Mi entrenamiento es marcar al rival");
     }
     rematesArco(): void {
         console.log("Mi funcion es rematar el balón de cabeza");
     }
     perfilJugador(): void {
         console.log(`Mi nombre es ${this.nombre},mi apellido ${this.apellido} y mi edad es ${this.edad}`);
     }


}
export default Defensor;
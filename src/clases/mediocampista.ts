import Jugador from "./jugador";

class Mediocampista extends Jugador{
    constructor(n:String,a:String,e:String,f:String,t:Boolean){
        super(n,a,e,f,t)
       }
       queHacer(): void {
           console.log("Mi tarea es asistir al delantero");
        }
        entrenar(): void {
           console.log("Mi entrenamiento es pases a larga distancia");
        }
        rematesArco(): void {
            console.log("Mi funcion es remates al arco de larga distancia");
        }
        perfilJugador(): void {
            console.log(`Mi nombre es ${this.nombre},mi apellido ${this.apellido} y mi edad es ${this.edad}`);
        }

}
export default Mediocampista;
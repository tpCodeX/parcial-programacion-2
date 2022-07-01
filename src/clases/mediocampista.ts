import Jugador from "./jugador";
import iObservable from '../interfaces/iObservable';
import iPosicion from "../interfaces/iPosicion";

class Mediocampista extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    asistenciasRealizadas:number;
    constructor(nombre:String,apellido:String,estatura:String,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,asistenciasRealizadas:number,Entrenador:iObservable){
        super(nombre,apellido,estatura,dob,titular,Entrenador)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion,
        this.asistenciasRealizadas=asistenciasRealizadas
    }
    
    entrenar(): void {
        console.log("Empiezo a entrenar en el mediocampo.")
    }

    descansar(): void {
         console.info("Paro para descansar.")
    }

    getAsistencias():number{
        return this.asistenciasRealizadas
    }

    asistir():number{
        return 1
    }

    setAsistencias(){
        this.asistenciasRealizadas=this.asistenciasRealizadas+this.asistir()
    }

    getPosicion():string {
        return "Mediocampista"
    }

    getnumCamiseta(): number {
        return this.numCamiseta
    }
    
    patearPelota(): string {
        return "Remato al arco rival desde fuera del area y hago asistencias a mis compañeros."
    }
    
    jugarPartido(): string {
        if(this.esTitular()==true){
            return "Inicio en el mediocampo porque soy Titular."
        }
        else{
            return "Inicio en el banco de suplentes, porque no soy Titular."
        }        
    }
    
}
export default Mediocampista;
import Jugador from "./jugador";
import iObservable from '../interfaces/iObservable';
import iPosicion from "../interfaces/iPosicion";

class Defensor extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    private entradasAlRival:number;
    constructor(nombre:String,apellido:String,estatura:String,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,entradasAlRival:number,Entrenador:iObservable){
        super(nombre,apellido,estatura,dob,titular,Entrenador)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion,
        this.entradasAlRival=entradasAlRival
    }

    entrenar(): void {
        console.info("Empiezo a entrenar la defensa.")
    }

    descansar(): void {
        console.info("Paro para descansar.")
    }

    getEntradas():number{
        return this.entradasAlRival
    }
    entrarRival():number{
        return 1
    }
    setRematesAtajados(){
        this.entradasAlRival=this.entradasAlRival+this.entrarRival()
    } 
    getPosicion(): string {
        return "Defensor"
    }
    
    getnumCamiseta(): number {
        return this.numCamiseta
    }
    
    patearPelota(): string {
        return "Hago pases para alejar la pelota de nuestra área."
    }

    jugarPartido(): string {
        if(this.esTitular()==true){
            return "Inicio de defensor porque soy Titular."
        }
        else{
            return "Inicio en el banco de suplentes, porque no soy Titular."
        }        
    }
}
export default Defensor;
import Jugador from "./jugador";
import iObservable from '../interfaces/iObservable';

class Delantero extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    golesMarcados:number;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,golesMarcados:number,Entrenador:iObservable){
        super(nombre,apellido,estatura,peso,dob,titular,Entrenador)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion
        this.golesMarcados=golesMarcados
    }

    entrenar(): void {
        console.log("Entreno rematando al arco.")
    }

    descansar(): void {
        console.info("Paro para descansar.")
    }
    
    getPosicion(): string {
        return "Soy Delantero"
    }
    
    getnumCamiseta(): number {
        return this.numCamiseta
    }

    meterGol():number{
        return 1
    }
    setRematesAtajados(){
        this.golesMarcados=this.golesMarcados+this.meterGol()
    } 
    getGolesMarcados():number{
        return this.golesMarcados
    }   

    patearPelota(): string {
        return "Remato al arco rival y pateo penales"
    }

    jugarPartido(): string {
        if(this.esTitular()==true){
            return "Inicio en la delantera porque soy Titular."
        }
        else{
            return "Inicio en el banco de suplentes, porque no soy Titular."
        }        
    }
}
export default Delantero;
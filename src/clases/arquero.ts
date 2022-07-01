import Jugador from "./jugador";
import Entrenador from './entrenador';
import iObservable from '../interfaces/iObservable';

class Arquero extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    rematesAtajados:number;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,rematesAtajados:number,Entrenador:iObservable){
        super(nombre,apellido,estatura,peso,dob,titular,Entrenador)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion,
        this.rematesAtajados=rematesAtajados
    }
    entrenar(): void {
        console.log("Empiezo a entrenar atajando remates.")
    }
    
    descansar(): void {
        console.log("Paro para descansar.")
    }
    
    atajar():number{
        return 1
    }
    setRematesAtajados(){
        this.rematesAtajados=this.rematesAtajados+this.atajar()
    }    
    getPosicion(): string {
        return "Soy Arquero"
    }
    
    getnumCamiseta(): number {
        return this.numCamiseta
    }

    
    patearPelota(): string {
        return "Remato la pelota a larga distancia para alejarla de nuestro arco."
    }

    jugarPartido(): string {
        if(this.esTitular()==true){
            return "Inicio en el arco porque soy Titular."
        }
        else{
            return "Inicio en el banco de suplentes, porque no soy Titular."
        }        
    }

}
export default Arquero;
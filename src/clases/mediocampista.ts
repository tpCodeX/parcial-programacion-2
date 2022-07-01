import Jugador from "./jugador";

class Mediocampista extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    asistenciasRealizadas:number;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,asistenciasRealizadas:number){
        super(nombre,apellido,estatura,peso,dob,titular)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion,
        this.asistenciasRealizadas=asistenciasRealizadas
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
        return "Soy Mediocampista"
    }
    getnumCamiseta(): number {
        return this.numCamiseta
    }

    entrenar(): string {
        return "Empiezo a entrenar en el mediocampo."
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

    descansar(): string {
        return "Paro para descansar."
    }
}
export default Mediocampista;
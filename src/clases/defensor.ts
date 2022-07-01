import Jugador from "./jugador";

class Defensor extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    private entradasAlRival:number;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,entradasAlRival:number){
        super(nombre,apellido,estatura,peso,dob,titular)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion,
        this.entradasAlRival=entradasAlRival
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
        return "Soy Defensor"
    }
    
    getnumCamiseta(): number {
        return this.numCamiseta
    }

    entrenar(): string {
        return "Empiezo a entrenar la defensa."
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

    descansar(): string {
        return "Paro para descansar."
    }
}
export default Defensor;
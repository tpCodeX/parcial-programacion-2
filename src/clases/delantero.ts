import Jugador from "./jugador";

class Delantero extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number){
        super(nombre,apellido,estatura,peso,dob,titular)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion
    }

    getPosicion(): string {
        return "Soy Delantero"
    }
    
    getnumCamiseta(): number {
        return this.numCamiseta
    }

    entrenar(): void {
        
    }
    
    jugarPartido(): boolean {
        if(this.esTitular()==true){
            return true
        }
        else{
            return false
        }        
    }
}


















/*class Delantero extends Jugador{
    constructor(nombre:String,apellido:String,estatura:String,edad:String,titular:Boolean,numeroCamiseta:number){
        super(nombre,apellido,estatura,edad,titular,numeroCamiseta)
       }
       queHacer(): void {
           console.log("Mi tarea es marcar goles");
        }
        entrenar(): void {
           console.log("Mi entrenamiento es patear penales");
        }
        rematarArco(): void {
            console.log("Mi funcion es remates al arco de corta distancia");
        }
        perfilJugador(): void {
            console.log(`Mi nombre es ${this.nombre},mi apellido ${this.apellido} y mi edad es ${this.edad}`);
        }

} */
export default Delantero;
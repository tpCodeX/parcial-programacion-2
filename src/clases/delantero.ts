import Jugador from "./jugador";

class Delantero extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    golesMarcados:number;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,golesMarcados:number){
        super(nombre,apellido,estatura,peso,dob,titular)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion
        this.golesMarcados=golesMarcados
    }

    getPosicion(): string {
        return "Soy Delantero"
    }
    
    getnumCamiseta(): number {
        return this.numCamiseta
    }

    entrenar(): string {
        return "Entreno rematando al arco."
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

    descansar(): string {
        return "Paro para descansar."
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
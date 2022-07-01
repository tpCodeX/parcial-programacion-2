import Jugador from "./jugador";

class Arquero extends Jugador implements iPosicion{
    numCamiseta: number;
    posicion:string;
    rematesAtajados:number;
    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean,posicion:string,numCamiseta:number,rematesAtajados:number){
        super(nombre,apellido,estatura,peso,dob,titular)
        this.numCamiseta=numCamiseta,
        this.posicion=posicion,
        this.rematesAtajados=rematesAtajados
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

    entrenar(): string {
        return "Empiezo a entrenar atajando remates."
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

    descansar(): string {
        return "Paro para descansar."
    }
}
export default Arquero;
// class Arquero extends Jugador{

//     constructor(n:String,a:String,e:String,f:String,t:Boolean){
//         super(n,a,e,f,t)
//        }
//     queHacer(): void {
//        console.log("Mi tarea es atajar la balón");
//     }
//     entrenar(): void {
//         console.log("Mi entrenamiento es atajar penales ");
//     }
//     rematesArco(): void {
//         console.log("Mi función no es rematar al arco");
//     }
//     perfilJugador(): void {
//         console.log(`Mi nombre es ${this.nombre},mi apellido ${this.apellido} y mi edad es ${this.edad} `);
//     }
// }

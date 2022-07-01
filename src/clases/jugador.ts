abstract class Jugador{

    protected nombre:String;
    protected apellido:String;
    protected estatura:String;
    protected dob:Date; //dob = day of birth = dia de nacimiento.
    protected titular:Boolean;
    protected peso:number;

    constructor(nombre:String,apellido:String,estatura:String,peso:number,dob:Date,titular:Boolean) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.estatura=estatura;
        this.peso=peso;
        this.dob=dob;
        this.titular=titular;   
    }

    getNombre(){
        return this.nombre + " " + this.apellido
    }
    getEdad(){
        const fechaActal : Date = new Date();
        return fechaActal.getFullYear() - this.dob.getFullYear()
    }
    getEstatura(){
        return this.estatura
    }
    getPeso(){
        return this.peso
    }
    esTitular(){
        if(this.titular==true){
            return true
        }
        else{
            return false
        }
    }
    
    puedeJugar(){
        if(this.esTitular()==true){
            return true
        }
        else{
            return false
        }
    }
    setTitular(estado:number){
        if(estado==1){
            this.titular=true;
        }
        else if(estado==0){
            this.titular=false;
        }
    }

    abstract entrenar():void;
    abstract descansar():void;
    abstract patearPelota():void;
    abstract jugarPartido():void;
    


}
export default Jugador;
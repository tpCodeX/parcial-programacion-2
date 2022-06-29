abstract class Jugador{
    protected nombre:String;
    protected apellido:String;
    protected estatura:String;
    protected edad:String;
    protected titular:Boolean;
    constructor(n:String,a:String,e:String,f:String,t:Boolean){
    this.nombre=n;
    this.apellido=a;
    this.estatura=e;
    this.edad=f;
    this.titular=t;
    }
    getNombre():String{
        return this.nombre;
    }
    getApellido():String{
        return this.nombre;
    }
    getEstatura():String{
        return this.nombre;
    }
    getFechaNacimiento():String{
        return this.nombre;
    }
    setNombre(n:String):void{
        this.nombre=n;
    }
    setApellido(a:String):void{
        this.apellido=a;
    }
    setEstatura(e:String):void{
        this.nombre=e;
    }
    setFechaNacimiento(f:String):void{
        this.nombre=f;
    }
    abstract entrenar():void;
    abstract rematesArco():void;
    abstract perfilJugador():void;
    abstract queHacer():void;

}
export default Jugador;

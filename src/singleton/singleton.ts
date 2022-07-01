class SingletonClass {

private static instancia:SingletonClass;
  
//para evitar instancia mediante new
private SingletonClass(){
}
//para obtener la instancia unicamente x este metodo
public static getInstancia():SingletonClass {
    if (this.instancia == null) {
        this.instancia = new SingletonClass();
    }
    return SingletonClass.instancia;
}
public conectar():void{
    console.log("Me conecte a la BD")
}
public desconectar():void{
    console.log("Me desconecté de la BD")
}

}
export default SingletonClass
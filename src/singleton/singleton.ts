class SingletonClass {
//objeto de la clase conexion
private static instancia:SingletonClass;
  
//para evitar instancia mediante new
private SingletonClass(){
}
//para obtener la instancia unicamente x este metodo
//se coloca static para que la clase pueda acceder al metodo
public static getInstancia():SingletonClass {
    if (this.instancia == null) {
        this.instancia = new SingletonClass();
    }
    return SingletonClass.instancia;
}
//método de prueba
public conectar():void{
    console.log("Me conecte a la BD")
}
//método de prueba
public desconectar():void{
    console.log("Me desconecté de la BD")
}

}
export default SingletonClass
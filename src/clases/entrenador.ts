import iObservable from "../interfaces/iObservable";
import { iObserver } from "../interfaces/iObserver";
class Entrenador implements iObservable{
    protected nombre:String;
    protected apellido:String;
    public equipo:iObserver[]=[];
    constructor(nombre:string,apellido:string,equipo:iObserver[]){    
        this.nombre=nombre,
        this.apellido=apellido
        this.equipo=equipo
    }
    //Los jugadores están pendientes a lo que diga el observable que es el entrenador
    attach(j: iObserver): void {
        this.equipo.push(j);        
    }
    
    detach(j: iObserver): void {
       let iJ=this.equipo.indexOf(j)
       if (iJ != -1){
        this.equipo.splice(iJ,1)
       }
    }
    notify(){
        for (let jugador of this.equipo){
            jugador.update()
        }
    }
}

export default Entrenador
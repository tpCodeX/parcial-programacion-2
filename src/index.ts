import express, { Request, Response } from 'express';
import path from 'path';
import Arquero from './clases/arquero';
import Defensor from './clases/defensor';
import Delantero from './clases/delantero';
import Entrenador from './clases/entrenador';
import Jugador from './clases/jugador';
import Mediocampista from './clases/mediocampista';
import iObservable from './interfaces/iObservable';
import { iObserver } from './interfaces/iObserver';
import SingletonClass from './singleton/singleton';

const PORT = 5005;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');  //motor de plantillas.
const equipx:iObserver[]=[];
const entrenador=new Entrenador("Lionel","Scaloni",equipx);
  const j1:Arquero=new Arquero("Emiliano","Martinez","1.95",new Date (1992,8,2),true,"Arquero",23,80,entrenador);
  const j2:Arquero=new Arquero("Franco","Armani","1.89",new Date(1986,9,16),false,"Arquero",1,5,entrenador);
  const j3:Defensor=new Defensor("Cristian","Romero","1.85",new Date(1998,3,27),true,"Defensor",13,5,entrenador);
  const j4:Defensor=new Defensor("Nicolas","Otamendi","1.83",new Date(1988,1,12),true,"Defensor",19,6,entrenador);
  const j5:Defensor=new Defensor("Germán","Pezzella","1.87",new Date(1991,5,27),false,"Defensor",31,8,entrenador);
  const j6:Defensor=new Defensor("Lisandro","Martinez","1.75",new Date(1998,0,18),false,"Defensor",16,4,entrenador);
  const j7:Defensor=new Defensor("Marcos","Acuña","1.72",new Date(1991,9,28),true,"Defensor",8,5,entrenador);
  const j8:Defensor=new Defensor("Nicolas","Tagliafico","1.72",new Date(1992,7,31),false,"Defensor",3,4,entrenador);
  const j9:Defensor=new Defensor("Nahuel","Molina","1.75",new Date(1998,3,6),true,"Defensor",26,6,entrenador);
  const j10:Defensor=new Defensor("Gonzalo","Montiel","1.76",new Date(1997,0,1),false,"Defensor",4,2,entrenador);
  const j11:Mediocampista=new Mediocampista("Leandro","Paredes","1.80",new Date(1988,3,27),true,"Mediocampista",5,6,entrenador);
  const j12:Mediocampista=new Mediocampista("Guido","Rodriguez","1.85",new Date(1994,3,12),false,"Mediocampista",18,2,entrenador);
  const j13:Mediocampista=new Mediocampista("Rodrigo","De Paul","1.80",new Date(1994,5,24),true,"Mediocampista",7,8,entrenador);
  const j14:Mediocampista=new Mediocampista("Exequiel","Palacios","1.77",new Date(1998,9,14),false,"Mediocampista",18,2,entrenador);
  const j15:Mediocampista=new Mediocampista("Giovani","Lo Celso","1.77",new Date(1996,4,9),true,"Mediocampista",20,3,entrenador);
  const j16:Mediocampista=new Mediocampista("Alejandro","Gomez","1.67",new Date(1988,1,15),false,"Mediocampista",17,8,entrenador);
  const j17:Delantero=new Delantero("Lionel","Messi","1.70",new Date(1987,5,24),true,"Delantero",10,10,entrenador);
  const j18:Delantero=new Delantero("Paulo","Dybala","1.77",new Date(1993,10,15),false,"Delantero",21,2,entrenador);
  const j19:Delantero=new Delantero("Angel","Di Maria","1.80",new Date(1988,1,14),true,"Delantero",11,4,entrenador);
  const j20:Delantero=new Delantero("Nicolas","Gonzalez","1.80",new Date(1998,3,6),false,"Delantero",15,5,entrenador);
  const j21:Delantero=new Delantero("Lautaro","Martinez","1.74",new Date(1997,7,22),true,"Delantero",22,6,entrenador);
  const j22:Delantero=new Delantero("Julian","Alvarez","1.70",new Date(2000,0,31),false,"Delantero",9,5,entrenador);

  const equipo:Jugador[]=[j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15,j16,j17,j18,j19,j20,j21,j22];
  let suplentes:Jugador[]=[];
function jugSuplentes(equipo:Jugador[]):Jugador[]{
  equipo.forEach(jugador => {
    if(jugador.esTitular()!=true){
      suplentes.push(jugador)
    }
  });
  return suplentes
}

suplentes=jugSuplentes(equipo);

let titulares:Jugador[]=[];
function jugTitualares(equipo:Jugador[]):Jugador[]{
    equipo.forEach(jugador => {
      if(jugador.esTitular()==true){
        titulares.push(jugador)
      }
    });
    return titulares
  }
  titulares=jugTitualares(equipo);

app.get('/', (req: Request, res: Response) => {
  res.render('pages/home');
});

app.get('/equipo_suplente', (req: Request, res: Response) => {
    const supl=suplentes
    const trainer=new Entrenador("Lionel","Scaloni",supl);
  res.render('pages/equipoSuplente', { supl: supl,entrenador:trainer});

});
 app.get('/singleton', (req: Request, res: Response) => {
    const singl = SingletonClass.getInstancia()
    res.render('pages/singleton',{singleton:singl});
 });

/*app.get('/singleton', (req: Request, res: Response) => {
    const singl = SingletonClass.getInstancia()
    res.render('pages/singleton',{singleton:singl});
 });*/

app.get('/equipo_titular', (req: Request, res: Response) => {
    const tit=titulares
    const trainer=new Entrenador("Lionel","Scaloni",tit);
  res.render('pages/equipoTitular', { titulares: tit , entrenador:trainer });
});

app.listen(PORT, () => {
  console.info(`Ejecutando en puerto ${PORT}`);
});

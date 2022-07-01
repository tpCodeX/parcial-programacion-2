import express, { Request, Response } from 'express';
import path from 'path';
import Arquero from './clases/arquero';
import Defensor from './clases/defensor';
import Delantero from './clases/delantero';
import Mediocampista from './clases/mediocampista';
import Jugador from './clases/jugador';
const PORT = 5005;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');  //motor de plantillas.


app.get('/', (req: Request, res: Response) => {
  res.render('pages/home');
});

app.get('/equipo' , (req: Request, res: Response) =>{
  res.render('pages/equipo');
});
app.get('/clases/curso', (req: Request, res: Response) => {
    let a = "asd"
  res.render('pages/equipo', {  });
});



/*const j1=new Arquero("Emiliano","Martínez","1.95","29",true);
    const j2=new Arquero("Franco","Armani","1.89","35",false);
    const j3=new Defensor("Cristian","Romero","1.85","24",true);
    const j4=new Defensor("Germán","Pezzella","1.87","31",false);
    const j5=new Mediocampista("Rodrigo","De Paul","1.80","28",true);
    const j6=new Mediocampista("Exequiel","Palacios","1.77","23",false);
    const j7=new Delantero("Lionel","Messi","1.70","35",true);
    const j8=new Delantero("Paulo","Dybala","1.77","28",false);
    j1.perfilJugador();
    j1.queHacer();
    j1.entrenar();
    j1.rematesArco();
    console.info("---------------------")
    j2.perfilJugador();
    j2.queHacer();
    j2.entrenar();
    j2.rematesArco();
    console.info("---------------------")
    j3.perfilJugador();
    j3.queHacer();
    j3.entrenar();
    j3.rematesArco();
    console.info("---------------------")
    j4.perfilJugador();
    j4.queHacer();
    j4.entrenar();
    j4.rematesArco();
    console.info("---------------------")
    j5.perfilJugador();
    j5.queHacer();
    j5.entrenar();
    j5.rematesArco();
    console.info("---------------------")
    j6.perfilJugador();
    j6.queHacer();
    j6.entrenar();
    j6.rematesArco();
    console.info("---------------------")
    j7.perfilJugador();
    j7.queHacer();
    j7.entrenar();
    j7.rematesArco();
    console.info("---------------------")
    j8.perfilJugador();
    j8.queHacer();
    j8.entrenar();
    j8.rematesArco();*/


app.listen(PORT, () => {
  console.info(`Ejecutando en puerto ${PORT}`);
});

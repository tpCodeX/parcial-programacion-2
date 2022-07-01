# Patrones de Diseño
## OBSERVER
### ¿Qúe es?
El patron observer sirve para notificar eventos que suceden y avisar 

El patrón Observer trabaja con dos tipos de actores: por un lado, el sujeto, es decir, el objeto cuyo estado quiere vigilarse a largo plazo. Por otro lado, están los objetos observadores, que han de ser informados de cualquier cambio en el sujeto. Y por último, el evento que será notificado.

## ¿Cómo lo implementamos en nuestro código?

Creamos las interfaces iObserver & iObservable. <br> 
Luego, implementamos esas interfaces a nuestras clases abstract Jugador y Entrenador. (Observer y Observable respectivamente)

Cuando la clase Entrenador (Observable) llama a la funcion notify(), ordena al equipo (observers) que entrenen y descansen.

Esto se logra mediante la funcion Notify() del observable, que a su vez ordena a la funcion Update() del observer.<br>
La funcion Update() llama a las funciones abstarctas entrenar() y descansar().

<a href="https://www.youtube.com/watch?v=HFkZb1g8faA">Video de Referencia</a>
## SINGLETON
### ¿Qué es?
El patrón de diseño Singleton (instancia única) está diseñado para restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto. Su intención consiste en garantizar que una clase sólo tenga una instancia y proporcionar un punto de acceso global a ella.


### ¿Como lo implementamos en nuestro código?
Se creo la clase Singleton con el propósito de sólo se pueda crear una instancia de esta clase.

Se pone el contructor vacio para evitar instancia mediante el operador new.

El método getInstancia nos proporciona la función de que si el objeto instancia es nula vamos a instanciarlo, pero si alguien quiere seguir llamando a este método y es un usuario previo que ya lo instancio no entraria al if sino que le devolveria la instancia que el usuario ya realizo.

Los métodos conectar y desconectar son métodos de prueba que nos permiten ver que la clase puede acceder a ellos mediante la clase. 

<a href="https://www.youtube.com/watch?v=GGq6s7xhHzY">Video de Referencia</a>


import { iObserver } from "./iObserver"

interface iObservable{
    attach(o:iObserver):void;
    detach(o:iObserver):void;
    notify():void;
}
export default iObservable
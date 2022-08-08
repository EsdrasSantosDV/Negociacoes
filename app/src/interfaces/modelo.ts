import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

//UMA INTERFACE PODE EXTENDER UMA OU MAIS INTERFACES,SO AS CLASSES QUE NÃO FAZEM ISSO
export interface Modelo<T> extends Imprimivel,Comparavel<T>{

}
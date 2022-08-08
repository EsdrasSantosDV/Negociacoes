//UTILIZAMOS O T PQ ELE SO VAI COMPARAR COM O T
export interface Comparavel<T>{
    isIgual(objeto:T):boolean;
}
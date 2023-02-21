import { Injectable } from "@angular/core";

/* Decoramos el servicio logger con injectable, diciendo a angular que lo meta en el inyector del 
component principal root, para que así cuando instanciemos logger el navegador lo cargue, y mientras
no se instancie no (tree-shaking).  */
@Injectable({
  providedIn: "root"
})
export class LoggerService{
  log(msg:string){ console.log(msg); }
  error(msg:string){ console.error(msg); }
  warn(msg:string){ console.warn(msg); }
}
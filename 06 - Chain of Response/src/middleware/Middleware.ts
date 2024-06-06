export default abstract class Middleware{
    //Proximo objeto a ser verificado
    public next : Middleware = null;
    //Isso funciona como basicamente um ponteiro
    public linkWith(next: Middleware) : Middleware{
        this.next=next;
        return next;
    }

    public abstract check(email: string, password:string): boolean;

    protected checkNext(email:string, password:string) : boolean{
        //Se isto está definido então não existe mais nada para ser verificado.
        //São utilizados 3 iguais "==="
        if((this.next === null) || (this.next === undefined)){
            return true;
        }
        return this.next.check(email,password);
    }
}
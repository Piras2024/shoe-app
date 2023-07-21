

export default class User{
    nome: string
    cognome: string
    codFiscale: string
    ruolo: "amministratore" | "operatore"

    constructor(nome:string, cognome:string, codFiscale:string, ruolo: "amministratore" | "operatore"){
        this.nome= nome
        this.cognome = cognome
        this.codFiscale = codFiscale
        this.ruolo = ruolo
    }
}
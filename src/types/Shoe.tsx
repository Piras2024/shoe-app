

export default class Shoe {
    model: string
    size: number
    color: string
    quantity: number

    constructor(model: string,size: number,color:string,quantity:number){
        this.model = model;
        this.size = size;
        this.color = color;
        this.quantity = quantity;
    }
}
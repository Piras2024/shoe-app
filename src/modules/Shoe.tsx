

export default class Shoe {
    model: string
    size: number
    color: string
    quantity: number
    price: number

    constructor(model: string,size: number,color:string,quantity:number, price:number){
        this.model = model;
        this.size = size;
        this.color = color;
        this.quantity = quantity;
        this.price = price
    }
}
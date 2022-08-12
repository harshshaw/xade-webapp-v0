export interface Action {
    type:String,
    payload:any
}

export interface Product{
    id:number,
    name:String,
    imgAddress:String,
    price:number,
    vendor:String,
    quantity:number
}

export interface Person{
    firstName?:String,
    lastName?:String,
    age?:Number,
    mobileNumber?:Number,
}

export interface State{
    MyCart:{state:{
        CartProducts?:Product[]
    }}
}
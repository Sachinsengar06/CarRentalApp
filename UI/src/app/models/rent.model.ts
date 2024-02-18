export interface Rent{
    carId:number,
    customerId:number,
    rentDate:Date,
    returnDate:Date,
    isReturn:boolean
}
export interface postRent{
    id:number,
    carId:number,
    coustomerId:number,
    rentDate:Date,
    returnDate:Date,

}
// used in return-request page to update the value of isRental to toggle the button
export interface putRent{
    id:number,
    carId:number,
    coustomerId:number,
    rentDate:Date,
    returnDate:Date,
    isReturn:boolean
}
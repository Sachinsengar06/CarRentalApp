export interface returnR{
    carImage:string,
    rentDate:Date,
    returnDate:Date,
    title:string
}

export interface DamageDetails{
    inDamage:string,
    outDamage:string,
    isWorking:string
}
export interface CarDamageDetail{
    imgLink:string,
    title:string
    rentDate:Date,
    returnDate:Date,
    outDamage:string,
    inDamage:string,
    isWorking:string
}

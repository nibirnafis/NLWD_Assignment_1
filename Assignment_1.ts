function formatString(input: string, toUpper?: boolean){
    if(toUpper === true || toUpper === undefined){
        return input.toUpperCase()
    }
    return input.toLowerCase()
}






function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const ratedItems = items.filter(item => item.rating >= 4)
    return ratedItems
}








function concatenateArrays<T>(...arrays: T[][]): T[]{
    const newArray: T[] = []
    arrays.forEach(array => array.forEach(element => newArray.push(element)))
    return newArray
}







class Vehicle {
    private brand: string
    private year: number

    constructor(brand: string, year: number){
        this.brand = brand
        this.year = year
    }

    getInfo(){
        return `Make: ${this.brand}, Year: ${this.year}`
    }
}


class Car extends Vehicle{
    private model: string
    
    constructor(brand: string, year: number, model: string){
        super(brand, year)
        this.model = model
    }

    getModel(){
        return `Model: ${this.model}`
    }
}







function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }else{
        return value*2
    }
}







interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]):  Product | null{
    if(products.length > 0){
        const productPrices = products.map(products => products.price)
        const highestPrice = Math.max(...productPrices)
        const highestPricedProduct = products.find(product => product.price == highestPrice) || null
        return highestPricedProduct
    }
    else{
        return null
    }
}








enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day){
    if(day < 6){
        return 'weekday'
    }
    return 'weekend'
  }






  async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        
        if(n >= 0){
            setTimeout(()=>{resolve (n * n)}, 1000)
        } else{
            reject ("Error: Negative number not allowed")
        }
    })
  }
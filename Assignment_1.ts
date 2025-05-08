function formatString(input: string, toUpper?: boolean){
    if(toUpper === true || toUpper === undefined){
        return input.toUpperCase()
    }
    return input.toLowerCase()
}

formatString('Hello', false)







function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const ratedItems = items.filter(item => item.rating >= 4)
    return ratedItems
}

const Items = [
    { title: "Mobile", rating: 4.50 },
    { title: "Laptop", rating: 3.90 },
    { title: "Desktop", rating: 4.10 },
]

filterByRating(Items)






function concatenateArrays<T>(...arrays: T[][]): T[]{
    const newArray: T[] = []
    arrays.forEach(array => array.forEach(element => newArray.push(element)))
    return newArray
}

concatenateArrays([1,2], [3,4,5], [6])
concatenateArrays(["a","b"], ["c","d","e"], ["f"])






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


const car = new Car("Ferrari", 1930, "FZ-X")
car.getInfo()
car.getModel()






function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }else{
        return value*2
    }
}


processValue(20)





interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]):  Product | null{
    if(products.length > 0){
        const productPrices = products.map(products => products.price)
        const highestPrice = Math.max(...productPrices)
        const highestPricedProduct = products.find(product => product.price == highestPrice)
        return highestPricedProduct
    }
    else{
        return null
    }
}

const products = [
    {name: "Mobile", price: 20000},
    {name: "Laptop", price: 80000},
    {name: "Desktop", price: 60000},
    {name: "Bike", price: 150000},
    {name: "Car", price: 1000000}
]



getMostExpensiveProduct(products)








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

  getDayType(Day.Sunday)







  async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        if(n*1 > 0){
            resolve (n * n)
        } else if(n*1 < 0){
            reject ("Error: Negative number not allowed")
        }
    })
  }


//   squareAsync(6).then(console.log)
//   squareAsync(-6).catch(console.error)
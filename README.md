1. What are some differences between interfaces and types in TypeScript?

-->
Both types and interfaces are used to define types in typscript. There are some differences between them.

Type:
1. It can be declared using type keywords.

2. Can be used to define both primitive and non-primitive types.

3. it intersection to extend.

4. It does not support merging.


Interface:
1. It can be declared using Interface keyword.

2. Only non-primitive types can be used to define.

3. It uses extendeds keyword to extend.

4. It does not support merging.






2. Provide an example of using union and intersection types in TypeScript.

-->
Here is an example of using union and intersection types:

#union example

type Brand = "Iphone" | "Samsung"

const mobile: {
  brand: Brand
} = {
  brand: "Samsung"
}



#Intersection example

type Mobile = {
  brand: string,
  model: string,
  display: string
}

type Laptop = {
  brand: string,
  model: string;
  gpu: boolean
}

type Device = Mobile & Laptop

const device: Device = {
  brand: "Samsung",
  model: "rx-77",
  display: "1080*1920",
  gpu: true
}

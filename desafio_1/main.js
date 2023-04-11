import { ProductManager } from "./constructor/ProductManager.js";

const productos = new ProductManager();

console.log("Manejo de productos creado");
console.log(productos.getProducts());
console.log("Agrego productos a la memoria");

//Con algunas propiedades con error
productos.addProduct({
  titles: "Rodillera futsal Mania de futsal",
  description: "Rodillera futsal negra",
  price: 20000,
  thumbnail: "https://picsum.photos/200/300",
  stock: 20,
});
productos.addProduct({
  title: "Rodillera futsal Asics",
  description: "Rodillera futsal blanca",
  price: 25350,
  thumbnail: "https://picsum.photos/200/300",
  stock: 40,
});
productos.addProduct({
  title: "Codera futsal Mania de futsal",
  description: "Codera futsal negra",
  price: 14100,
  thumbnail: "https://picsum.photos/200/300",
  stock: 30,
});
productos.addProduct({
  title: "Codera futsal DRB",
  description: "Codera fustal blanca",
  price: 17500,
  thumbnail: "https://picsum.photos/200/300",
  stock: 50,
});
console.log("Productos en memoria");
const productsInMemory = productos.getProducts();
console.table(productsInMemory);
console.log("Buscar producto con ID 2 y  4");
const productById1 = productos.getProductById(2);
const productById2 = productos.getProductById(4);
console.log(productById1);
console.log(productById2);

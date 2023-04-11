export class ProductManager {
  #products;
  #id;
  constructor() {
    this.#products = [];
    this.#id = 0;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.stock
    ) {
      return console.log("Falta algún campo en product");
    }
    console.log(product);
    console.log(product);
    product.thumbnail =
      product.thumbnail ??
      "https://picsum.photos/200/300";
    this.#id++;
    const newProduct = { id: this.#id, ...product };
    this.#products.push(newProduct);
    console.log(
      `Producto ${newProduct.title} con id:${newProduct.id} agregado correctamente`
    );
    return newProduct;
  }

  getProducts() {
    if (this.#products.length === 0) {
      console.log("No existen elementos en memoria");
      return this.#products;
    }
    return this.#products;
  }

  getProductById(id) {
    const productById = this.#products.find((product) => product.id == id);
    if (!productById) {
      console.log(`Product id:${id} Not Found`);
    } else {
      return productById;
    }
  }
}

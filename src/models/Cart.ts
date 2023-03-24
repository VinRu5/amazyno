import { Product } from "./Product";

export class Cart {
  id: number | undefined;
  products: Product[] = [];
  total: number = 0;
  discountedTotal: number = 0;
  userId: number | undefined;
  totalProduct: number = 0;
  totalQuantity: number = 0;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.products)
      this.products = initializer.products.map(
        (product: any) => new Product(product)
      );
    if (initializer.total) this.total = initializer.total;
    if (initializer.discountedTotal)
      this.discountedTotal = initializer.discountedTotal;
    if (initializer.userId) this.userId = initializer.userId;
    if (initializer.totalProduct) this.totalProduct = initializer.totalProduct;
    if (initializer.totalQuantity)
      this.totalQuantity = initializer.totalQuantity;
  }
}

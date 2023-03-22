export class Product {

    id: number | undefined;
    title: string = '';
    description: string = '';
    price: number = 0;
    discountPercentage: number = 0;
    rating: number = 0;
    stock: number = 0;
    brand: string = '';
    category: string = '';
    thumbnail: string = '';
    images: string[] = [];

    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.title) this.title = initializer.title;
        if(initializer.description) this.description = initializer.description;
        if(initializer.price) this.price = initializer.price;
        if(initializer.discountPercentage) this.discountPercentage = initializer.discountPercentage;
        if(initializer.rating) this.rating = initializer.rating;
        if(initializer.stock) this.stock = initializer.stock;
        if(initializer.brand) this.brand = initializer.brand;
        if(initializer.category) this.category = initializer.category;
        if(initializer.thumbnail) this.thumbnail = initializer.thumbnail;
        if(initializer.images) this.images = initializer.images;

    }

}
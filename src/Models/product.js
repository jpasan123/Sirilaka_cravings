import { serverTimestamp } from "firebase/firestore";

class Product {

    constructor(id, name, description, category,image,price,date) {

 
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.image = image;
        this.date=date;
        this.price=price;

    }

    ToJson() {
        return {
            'name': this.name,
            'description': this.description,
            'category': this.category,
            'image': this.image,
            'date': this.date,
            'price': this.price
            

        }
    }
}

export default Product;
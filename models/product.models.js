const db=require('../data/database');

class Product{
    constructor(productData){
        this.title=productData.title;
        this.summary=productData.summary;
        this.price=productData.price;
        this.description=productData.description;
        this.image=productData.image;
        this.imagePath=`product-data/images/${productData.image}`;
        this.imageUrl=`products/assets/${productData.image}`;
    }

    async save(){
        const productData={
            title:this.title,
            summary:this.summary,
            price:this.price,
            description:this.description,
            image:this.image
        }
        db.getDb.collection('products').insertOne()
    }
}

module.exports=Product;
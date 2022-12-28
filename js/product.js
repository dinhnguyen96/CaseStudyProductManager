class Product{

    productId
    productName
    productPrice

    productImage

    productDescribe

    categoriesId;

    constructor(productId, productName,productPrice,productImage, productDescribe, categoriesId)
    {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.productDescribe = productDescribe;
        this.categoriesId = categoriesId;
    }

    getProductId(){
        return this.productId;
    }
    setProductId(productId)
    {
        this.productId = productId;
    }
    getProductName(){
        return this.productName;
    }
    setProductName(productName)
    {
        this.productName = productName;
    }
    getProductPrice(){
        return this.productPrice;
    }
    setProductPrice(productPrice)
    {
        this.productPrice = productPrice;
    }
    getProductImage(){
        return this.productImage;
    }
    setProductImage(productImage)
    {
        this.productImage = productImage;
    }
    getProductDescribe(){
        return this.productDescribe;
    }
    setProductDescribe(productDescribe)
    {
        this.productDescribe = productDescribe;
    }

    getCategoriesId()
    {
        return this.categoriesId;
    }
    setCategoriesId(categoriesId)
    {
        this.categoriesId = categoriesId;
    }


}
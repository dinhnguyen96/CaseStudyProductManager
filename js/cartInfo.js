class CartInfo{

    product

    quantity

    total


    constructor(product, quantity)
    {
        this.product = product;
        this.quantity = quantity;
    }

    getProduct()
    {
        return this.product;
    }
    setProduct(product)
    {
        this.product = product;
    }
    getQuantity()
    {
        return this.quantity;
    }

    setQuantity(quantity)
    {
        this.quantity = quantity;
    }

    getTotal()
    {
        return this.product.getProductPrice() * this.quantity;
    }
}
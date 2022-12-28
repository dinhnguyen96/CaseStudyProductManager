class  Categories{

    categoriesId

    categoriesName


    constructor(categoriesId, categoriesName)
    {
        this.categoriesId = categoriesId;
        this.categoriesName = categoriesName;
    }

    getCategoriesId()
    {
        return this.categoriesId;
    }
    setCategoriesId(categoriesId)
    {
        this.categoriesId = categoriesId;
    }

    getCategoriesName()
    {
        return this.categoriesName;
    }
    setCategoriesName(categoriesName)
    {
        this.categoriesName = categoriesName;
    }
}
class CodeDeno
{
    constructor(discount){
        this.discount = discount;
    }

    calcNewPrice(original){
        return original * this.discount;
    }
}

export default CodeDeno;
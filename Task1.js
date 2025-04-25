var cart = [];
let items = [];


const Createitem=(id,name,tax,discount,price)=>{
    if(items.some(i=>i.id===id)||items.some(i=>i.name===name)){
        console.log(name , "Item is already exists");
        return;
    }
    else{
        items.push({
            id,name,tax,discount,price
        })
        }
    }

const addTocart = (name)=>{
    if(!items.some(i=>i.name==name)){
        console.log("No item with name",name);
    }
    else{
        let item = items.find(i=>i.name==name);
         cart.push(item);
    }
}

const calculateCart =(cart)=>{
        let sum = 0;
        setTimeout(()=>{
            for(let item of cart){
                let discount = item.price-((item.price*item.discount)/100);
                let tax = item.price-((item.price*item.tax)/100);
                sum = item.price-discount+tax;
            }
            console.log("Total Cost is ", sum);
        },3000)
        console.log("Getting your Total  amount");
        
}
Createitem(1,"Shampoo",10,50,10000);
Createitem(2,"Soap",10,50,10000);
Createitem(3,"TV",10,50,20000);
Createitem(5,"Radio",10,50,20000);
Createitem(4,"Shampoo",10,50,20000);

console.log(items)

addTocart("Shampoo");
addTocart("TV");
console.log(cart);
calculateCart(cart);
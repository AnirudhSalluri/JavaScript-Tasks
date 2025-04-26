const filteringusers = (...users) =>{
    let fetchedusers = users.map(({name,income})=>{
        return{
            name,
            income,
        }
    })

    return fetchedusers;
}

let fetchedusers = filteringusers( 
    { name:"Alice",
       income : 50000,
   },
   {name:"Charlie",
       income: 60000,
   },
   {name:"bob",
       income : 40000,
   }
)


 function userswithbonus(users=[]){

    function getbonus(){
        return this.income/10;
    }

   let userswithbonus = users.map((user)=>{
    return{
        ...user,
        bonus:getbonus.call(user),
    }
    })

    return userswithbonus;
}
 
let usersincludesbonus = userswithbonus(fetchedusers);
 

 function getfinaloutput(users){
    let outusers = users.filter(i=>i.income>45000)
    for(let user of outusers){
        console.log(`${user.name} earns $${user.income} and got bonus of $${user.bonus}`)
    }
    let totalbonus = users.map(i=>i.bonus).reduce((a,b)=>a+b,0);
    console.log(`Total Bonus Given : $${totalbonus}`);
 }

 getfinaloutput(usersincludesbonus);


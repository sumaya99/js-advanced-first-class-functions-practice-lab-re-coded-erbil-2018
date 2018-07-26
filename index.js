// Code your solution in this file!
const logDriverNames = function(drivers){
drivers.forEach(function(driver){
  console.log(driver.name);
})
}
const logDriversByHometown = function(drivers,hometown){
  drivers.forEach(function(driver){
    if(driver.hometown === hometwon)
    console.log(driver.name)
  })
}
const driversByRevenue = function (num1, num2) {
  return num1 - num2;
};

const drivers = [
   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
 ];
 
const logDriverNames = function(drivers){
 
 drivers.forEach(function (el, i, arr){
   console.log(el.name);
 })
}


const logDriversByHometown= function(drivers, location){
   drivers.forEach(function (el, i, arr){
     if(el.hometown==location)
     console.log(el.name);
 })
}



const driversByRevenue =function(drivers){
   
   return drivers.slice().sort(function(n1,n2){
     return n1.revenue-n2.revenue;
   })
}



const driversByName = function(drivers){
   
   return drivers.slice().sort(function(n1,n2){
     return n1.name.localeCompare( n2.name);
   })
}

const totalRevenue = function(drivers){
   
   return drivers.slice().reduce(function(agg,el){
     
     agg = agg+ el.revenue;
     return agg;
   },0)
}


const averageRevenue = function(drivers){
   
   return drivers.slice().reduce(function(agg,el){
     
     agg = agg+ el.revenue;

     return agg;
   },0)/5;
}
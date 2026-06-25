let products = [1,1,1,3,1,1,2,4,5,5,7,2];

// [1,1,1,1,1], [3], [2,2], [4] , [5,5] , [7]

let saw = Array(products.length).fill(0);

let groupedArray = [];
let biggerArray = [];

for(let i= 0; i<saw.length; i++){
    saw[i] = false;
}

for(let i = 0; i < products.length; i++){

    if(!saw[i]){
        let groupedArray = [products[i]];

        for(let j = i+1; j < products.length; j++){
            if(products[i] === products[j]){
                groupedArray.push(products[i]);
                saw[j] = true;
            }
        }
        biggerArray.push(groupedArray);
    }
}



console.log(biggerArray);

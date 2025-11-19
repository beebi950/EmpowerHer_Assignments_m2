let num = 20;

function Prime(num) {
    for(let i=0;i<=num;i++){
        let count=0;
        if(num%i==0){
            count ++
        }
    }

    if(count==2){
        return true

    }else{
        return false
    }
}

console.log(Prime(num)); 

//check EvenOdd

if(num%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}



 
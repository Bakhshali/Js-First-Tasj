
// Task-7
let array = [1,5,23,45,65,78,89]

let result = array.findIndex(val=>{
    return val==45
})

console.log(result);


// Task-6

function Power(M,N){
    console.log(M**N);
}

Power(4,2)

// Task-1


function ReverseWord (word){
  return word.split("").reverse().join("")
}
console.log(ReverseWord("ilahshkab"));


// Task-5


function Reverse(n){

        var sum,
        result = 0
    
        while( n ){
            sum = n % 10
            result = (result * 10) + sum
            n = n/10|0
        }
    
        return result
    }

    console.log(Reverse(475));

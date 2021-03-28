function pfac(input){
    //create the sieve array
    var sieveArr = sieve(input);
    var biggestFactor = 0;

    for(i=0; i < sieveArr.length; i++){
        if(input % sieveArr[i] == 0){
            console.log("New biggest PFac");
            biggestFactor = sieveArr[i];
        }
    }

    return biggestFactor

}

function sieve(n){
    //the eratosthenes sieve only needs to be done up to n^2
    var array = [], upperLimit = n, output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    console.log(output);
    return output;
}

console.log(pfac(600851475143)); //technically works but js crashes
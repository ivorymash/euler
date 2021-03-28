function palinCheck(s){
    number = s.toString();
    var reverse = number.split("").reverse().join("");
    if(reverse == number){
        console.log("palindrome " + number);
        return true
    }else{
        return false;
    }
}

function main(){
    var n1 = 999;
    var n2 = 999;
    var biggestPalin = 90009 ;
    var product;

    while(biggestPalin > 9009){
        n1temp = n1;
        n2temp = n2;

        while(n1temp > 1){
            product = n1temp * n2temp;
            if(palinCheck(product) && product > biggestPalin){
                biggestPalin = product;
            }
        n1temp--;
        }
    n1--
    }



}

main();


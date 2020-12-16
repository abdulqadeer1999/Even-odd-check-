
let arr = []
let odd = []
let even = []


function add(){
    let num =  document.getElementById("input").value;
    arr.push(num);
    document.getElementById("result").innerHTML = arr;
    document.getElementById("input").value= "";
  
  }
function checkArray(){
    for(i=0; i <= arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i])
            document.getElementById("even").innerHTML = even;
        }
        else{
            odd.push(arr[i])
            document.getElementById("odd").innerHTML = odd;

        }
    }
}


 let str="naman";
let new_str="";
for(i=str.length;i>=0;i--){
new_str+=str[i]
}
if(str==new_str){
console.log("Yes")
}else{
console.log("No")
}


let num=13;
let count=0;
for(i=0;i<num.length;i++){
if(num%i==0){
count++
}
if(count==2){
console.log("Yes")
}else{
console.log("No")
}


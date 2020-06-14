//Out of 15 outputs, I got 13 predicted corrently...

function a(){
    return 35;
}
console.log(a());
//Output: 35 *correct*

function a(){
    return 4;
}
console.log(a()+a());
//Output: 8 *correct*

function a(b){
    return b;
}
console.log(a(2)+a(4));
//Output: 6 *correct*

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//Output: 3 9 *correct*

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
//Output: 40 *correct*

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Output: 4 *correct*

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Output: 10,3 30 *correct*

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Output: 3 4 *correct*

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//Output: 2 5 8 11 *correct*

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//Output: 0 1 2 3 4 5 6 7 8 9 0 *correct*

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//Output:
//0 1 2 3 4 5 6 7 8 9 0
//0 1 2 3 4 5 6 7 8 9 1
//0 1 2 3 4 5 6 7 8 9 2
//0 1 2 3 4 5 6 7 8 9 3
//0 1 2 3 4 5 6 7 8 9 4
//0 1 2 3 4 5 6 7 8 9 5
//0 1 2 3 4 5 6 7 8 9 6
//0 1 2 3 4 5 6 7 8 9 7
//0 1 2 3 4 5 6 7 8 9 8
//0 1 2 3 4 5 6 7 8 9 9
//*incorrect, function needed to be invoked*

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//Output:
// 0,0 0,1 0,2 0,3 0,4 0,5 0,6 0,7 0,8 0,9 9,0
// 1,0 1,1 1,2 1,3 1,4 1,5 1,6 1,7 1,8 1,9 9,1
// 2,0 2,1 2,2 2,3 2,4 2,5 2,6 2,7 2,8 2,9 9,2
// 3,0 3,1 3,2 3,3 3,4 3,5 3,6 3,7 3,8 3,9 9,3
// 4,0 4,1 4,2 4,3 4,4 4,5 4,6 4,7 4,8 4,9 9,4
// 5,0 5,1 5,2 5,3 5,4 5,5 5,6 5,7 5,8 5,9 9,5
// 6,0 6,1 6,2 6,3 6,4 6,5 6,6 6,7 6,8 6,9 9,6
// 7,0 7,1 7,2 7,3 7,4 7,5 7,6 7,7 7,8 7,9 9,7
// 8,0 8,1 8,2 8,3 8,4 8,5 8,6 8,7 8,8 8,9 9,8
// 9,0 9,1 9,2 9,3 9,4 9,5 9,6 9,7 9,8 9,9 9,9
//*incorrect, function needed to be invoked*


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//Output: 10 *correct*

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//Output: 15 10 *correct*

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//Output: 15 15 *correct*
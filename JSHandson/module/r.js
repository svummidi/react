define(['exports'],function(e){
    function myString(){
        return myString2();
    }

    function myString2(){
        return "Hello World its System JS";
    }
    e.myString = myString;
});
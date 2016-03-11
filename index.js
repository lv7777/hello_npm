//この状態だとなぜかfunctionが入ってる。なぜだ。。。

// var expo={}

// expo.helloworld= function() {
//     console.log("we are modest.also npm again");
// }
// expo.native_addon=function(){
//     var cpp=require("./native_addon/build/Release/helloworld");
//     cpp.hello();
// }

// module.exports = expo;

module.exports.hello_cpp=function() {
    var cpp=require("./native_addon/build/Release/helloworld");
    console.log(cpp.hello());
}

module.exports.hello_npm=function() {
    console.log("we are modest.also npm again");
}

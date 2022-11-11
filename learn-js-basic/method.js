const obj = {
    // property
    name: "thet Hmue Zaw",
    age: 21,
    isSingle: true,

    // method
    teach: function(what,where){
    return "I learn " + what + "at "+where;
    },
    // method ES6
    learn(any="any"){
        return `$(this.name)+ any`;
    },

    showThis : function(){
        console.log(this.name,this.learn())
    }

}
console.log(obj.teach("js","mmit"))
console.log(obj.learn("php"))

console.log(obj.showThis())
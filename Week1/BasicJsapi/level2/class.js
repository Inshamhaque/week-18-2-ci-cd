class Animal{
    Animal(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal");
    }
    speak(){
        console.log(this.name+" says "+this.speaks);
    }
}
let cat = new Animal("CAT",4,"meow meow");
cat.speak();
Animal.myType();
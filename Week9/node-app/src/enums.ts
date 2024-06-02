//Enums in Typescript
enum Direction{
    Up = "Up",
    Down = "Down" , 
    Right = "Right", 
    Left = "Left"
}//one needs to assign values to all the components or not to any of the components
function work(key:Direction){
    switch(key){
        case Direction.Up: console.log("Move up");
        break;
        case Direction.Down: console.log("Move down");
        break;
        case Direction.Left: console.log("Move left");
        break;
        case Direction.Right: console.log("Move right");
        break;
    }
}
work(Direction.Up);

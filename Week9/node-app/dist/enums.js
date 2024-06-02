"use strict";
//Enums in Typescript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
function work(key) {
    switch (key) {
        case Direction.Up:
            console.log("Move up");
            break;
        case Direction.Down:
            console.log("Move down");
            break;
        case Direction.Left:
            console.log("Move left");
            break;
        case Direction.Right:
            console.log("Move right");
            break;
    }
}
// work(Direction.Up);
console.log(Direction.Up);
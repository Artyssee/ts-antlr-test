
// Should throw an error since this variable is not used by the project
let unused;

// Should throw an error since this function is not used by the project
function isNotUsed() {
    console.log('goodbye');   
}

function isUsed() {
    console.log('isUsed');
}

// This calculate function should work. We console log a number
function calculate(a: number, b: number) {
    console.log(a + b);
}

// OPTIONAL: If the return type can be inferred, don't pass it manually
function completeString(a: string, b: string): string {
    return `${a} + ${b}`;
}

// We want an error that signals that it is best to define the types of the parameters instead of any.
// Typescript should throw an error as well if one of the parameter types is not defined, but that blocks compiling for the test compiler.
function completeStringFaulty(a:any, b:any) {
    return `${a} ${b}`;
}

// Check if If statements are compiled by the parser correctly
function yesOrNoIf(choice: boolean) {
    if(choice) {
        console.log('choice true')
    } else {
        console.log('choice false')
    }
}

// Check if switch statements are compiled by the parser correctly
function yesOrNoSwitch(choice: boolean) {
    switch (choice) {
        case true:
            console.log('choice true')
            break;
    
        default:
            console.log('choice false')
            break;
    }
}

async function index() {
    isUsed();
    calculate(1, 2);
    yesOrNoIf(true);
    yesOrNoIf(false);
    yesOrNoSwitch(true);
    yesOrNoSwitch(false);
    console.log(completeString("Hello","World"));
    console.log(completeStringFaulty("Hello", "World"));
}

index();

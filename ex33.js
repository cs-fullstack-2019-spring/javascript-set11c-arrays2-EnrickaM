// Ask the user to enter a word to add an array.
// Add the user input into the array.
// If the user enter's a "Q", stop asking the user to enter a word.

// KEY: See recommended solution below
//var AnyWord = prompt("Enter a word");
//var T = AnyWord

//while ( AnyWord !="q") {
    
//}
var wordList = [];

// KEY: A while loop works better for this
while (true) {
    var theWord = prompt("Enter a Word:");
    if (theWord==="q") // If entered q then break out of loop
    {
    	break;
    }
    wordList.push(theWord); // Add the entered word
}



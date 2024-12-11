
function calculate(input) {
    const words = input.split(" ");
  
    
    if (words[0] !== "What" || words[1] !== "is") {
      return "Invalid input. Format: 'What is [number] [operation] [number]?'";
    }
  
    const num1 = parseFloat(words[2]);
    const operation = words[3];
    const num2 = parseFloat(words[4]);
  
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid numbers provided.";
    }
  
    let result;
  
   
    if (operation === "plus") {
      result = num1 + num2;
    } else if (operation === "minus") {
      result = num1 - num2;
    } else if (operation === "multiplied") {
      if (words[4] === "by") {
        result = num1 * num2;
      } else {
        return "Invalid input for 'multiplied by'.";
      }
    } else if (operation === "divided") {
      if (words[4] === "by") {
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero.";
      } else {
        return "Invalid input for 'divided by'.";
      }
    } else {
      return "Unsupported operation. Use 'plus', 'minus', 'multiplied by', or 'divided by'.";
    }
  
    return `${num1} ${operation} ${words[4] || ""} ${num2} is ${result}`;
  }
  
 
  const input = process.argv.slice(2).join(" ");
  
  if (!input) {
    console.log("Please provide a question. Format: 'What is [number] [operation] [number]?'");
  } else {
    const result = calculate(input);
    console.log(result);
  }
  
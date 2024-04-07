let expression = '10 * (2 + 3) + xyz'
expression = expression.trim();
  
    try {
      // Use eval to evaluate the expression
      this.result= eval(expression);
  
      // Check if the result is a valid number
      if (typeof ans === 'number' && isFinite(ans)) {
        this.result = eval(expression);
      } 
      else{
        throw new Error('Invalid result');
      }
    } 
    catch (error) {
      // Handle any errors that may occur during evaluation
      return error;
    }
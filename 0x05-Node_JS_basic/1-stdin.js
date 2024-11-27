// Import the process module
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert input to a string and remove extra spaces/newlines
  console.log(`Your name is: ${name}`);
  
  // End the process after displaying the message
  process.stdin.end(); 
});

// Handle the end of input
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

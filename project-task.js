/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯  Objective:
This activity will help students:
- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup
---
:blue_book: Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.
The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur
---
:compass: Instructions:
Step 1: Debug Standard Exceptions
- Run the starter code and identify the standard exceptions being thrown
- Correct the issues and observe output
Step 2: Add Input Validation and Custom Exceptions
- Validate:
  • Missing file names
  • Non-string file data
  • Empty string data
Step 3: Implement a `finally` Block
- Simulate releasing resources, regardless of whether an error occurred
Step 4: Test Your Solution
- Use a variety of inputs to confirm the `finally` block always executes
*/
// ============================================
// :hammer_and_wrench: Starter Code: processFile Function
// ============================================
function processFile(fileName, fileData) {
  const regexpSize = /\S\.\S/;
  try {
    // TODO: Add input validation here
      if (fileName === undefined) {
        throw new ReferenceError("Invalid File Name");
      } if (typeof fileData !== 'string' ) {
        throw new TypeError("Data must be a string");
      } if (fileData.trim() === "" || fileData === undefined) {
        throw new ReferenceError("File Data cannot be left blank");
      } if (!fileName.match(regexpSize)) {
        throw new TypeError("Invalid File Type");
      }
    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    // TODO: Add simulated file operations (reading/writing)
  } catch (err) {
    // TODO: Implement error handling
    console.error(`${err.name}: ${err.message}`);
  }
  // TODO: Implement a finally block to close resources
  finally {
    console.log(`Closing file, Goodbye.`);
  }
}
// ============================================
// :test_tube: Test Cases Below
// ============================================
processFile(); // :x: ReferenceError: File name is missing
processFile("myFile.txt", 42); // :x: TypeError: File data must be a string
processFile("myFile.txt", ""); // :x: Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // :white_check_mark: Should process successfully
processFile("myFiletxt", "Hello, world!"); // :x: Error: File type is invalid
const fs = require("fs").promises;

async function fileHandler() {
  try {
    // Read file
    const data = await fs.readFile("input.txt", "utf8");
    console.log("File Content:", data);

    // Write file
    await fs.writeFile("output.txt", data);
    console.log("File written successfully");

  } catch (error) {
    console.error("Error:", error.message);
  }
}

fileHandler();

// Buffer Basics in Node.js
// Run: node buffer-basics.js

// 1️⃣ Create buffers
const buf1 = Buffer.from("Hello");          // from string
const buf2 = Buffer.alloc(10);              // fixed size (filled with 0)
const buf3 = Buffer.from([72, 105]);         // from byte array (ASCII)

// 2️⃣ Write data to buffer
buf2.write("Node");

// 3️⃣ Read buffer data
console.log("buf1:", buf1.toString());       // Hello
console.log("buf2:", buf2.toString());       // Node
console.log("buf3:", buf3.toString());       // Hi

// 4️⃣ Access individual bytes
console.log("First byte of buf1:", buf1[0]); // 72 (ASCII of 'H')

// 5️⃣ Modify buffer data
buf1[0] = 74; // Change 'H' (72) to 'J' (74)
console.log("Modified buf1:", buf1.toString()); // Jello

// 6️⃣ Buffer length
console.log("Length of buf1:", buf1.length);

// 7️⃣ Concatenate buffers
const combined = Buffer.concat([buf1, buf3]);
console.log("Combined:", combined.toString());

// 8️⃣ Encoding examples
const utf8Buf = Buffer.from("Hello 🌍", "utf8");
console.log("UTF-8:", utf8Buf.toString("utf8"));
console.log("Hex:", utf8Buf.toString("hex"));
console.log("Base64:", utf8Buf.toString("base64"));

// 9️⃣ Compare buffers
const a = Buffer.from("ABC");
const b = Buffer.from("ABD");
console.log("Compare a & b:", Buffer.compare(a, b)); // -1, 0, or 1

// 🔟 Check if object is a Buffer
console.log("Is Buffer?", Buffer.isBuffer(buf1));

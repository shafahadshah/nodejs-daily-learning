const fs = require("fs");
const path = "./notes.json";

const [, , cmd, ...args] = process.argv;

const readNotes = () =>
  fs.existsSync(path)
    ? JSON.parse(fs.readFileSync(path, "utf8"))
    : [];

const saveNotes = data =>
  fs.writeFileSync(path, JSON.stringify(data, null, 2));

let notes = readNotes();

if (cmd === "add") {
  notes.push({ text: args.join(" "), date: new Date() });
  saveNotes(notes);
  console.log("Note added");
}

else if (cmd === "list") {
  notes.forEach((n, i) => console.log(`${i + 1}. ${n.text}`));
}

else if (cmd === "delete") {
  notes.splice(args[0] - 1, 1);
  saveNotes(notes);
  console.log("Note deleted");
}

else {
  console.log("Usage:");
  console.log("node notes.js add Buy milk");
  console.log("node notes.js list");
  console.log("node notes.js delete 1");
}

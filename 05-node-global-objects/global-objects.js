// __filename → full path of current file
console.log("__filename:", __filename);

// __dirname → directory path of current file
console.log("__dirname:", __dirname);

// global → global object (like window in browser)
global.myGlobalVar = "Hello from global";

function showGlobal() {
  console.log("Global variable:", global.myGlobalVar);
}

showGlobal();

// module → information about current module
console.log("module.id:", module.id);
console.log("module.filename:", module.filename);
console.log("module.loaded:", module.loaded);
console.log("module.exports:", module.exports);

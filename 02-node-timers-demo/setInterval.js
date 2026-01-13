let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

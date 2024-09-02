Here is a simple implementation of a debounce function in JavaScript:

```javascript
function debounce(func, delay) {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

// Usage
const processInput = debounce(function(input) {
  console.log(input);
}, 300);

process.stdin.on('data', function(data) {
  processInput(data.toString().trim());
});
```

This console application reads user input and debounces it using the `debounce` function. The `processInput` function is called no more than once every 300 milliseconds.
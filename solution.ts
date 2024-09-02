Here is a simple TypeScript console application that implements a debounce function for handling user input:

```typescript
class Debouncer {
    private timeoutId: NodeJS.Timeout | null = null;

    debounce(func: (...args: any[]) => void, delay: number) {
        return (...args: any[]) => {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
}

const debouncer = new Debouncer();

// Test function to simulate user input
const userInput = (input: string) => {
    console.log(`User input: ${input}`);
};

const debouncedUserInput = debouncer.debounce(userInput, 1000);

// Simulate user input
debouncedUserInput('Hello');
debouncedUserInput('Hello, World');
```

In this code, the `Debouncer` class has a `debounce` method that takes a function and a delay as parameters. The `debounce` method returns a new function that, when called, clears any existing timeout and sets a new one that will call the original function after the specified delay. This ensures that the original function is not called until the specified delay has passed without any new calls to the debounced function.

The `userInput` function is a test function that simulates user input by logging it to the console. The `debouncedUserInput` function is a debounced version of the `userInput` function with a delay of 1000 milliseconds (1 second).

The last two lines of code simulate user input by calling the `debouncedUserInput` function with different arguments. Because the calls are less than 1 second apart, only the result of the last call is logged to the console.
```cpp
#include <iostream>
#include <chrono>
#include <thread>
#include <functional>

class Debouncer {
private:
    std::chrono::milliseconds delay;
    std::thread debounceThread;
    bool debounceThreadRunning = false;

public:
    Debouncer(int delay) : delay(delay) {}

    void debounce(std::function<void()> func) {
        if (debounceThreadRunning) {
            debounceThread.join();
        }
        debounceThread = std::thread([this, func]() {
            debounceThreadRunning = true;
            std::this_thread::sleep_for(delay);
            func();
            debounceThreadRunning = false;
        });
    }
};

int main() {
    Debouncer debouncer(500);

    std::string input;
    while (true) {
        std::getline(std::cin, input);
        debouncer.debounce([input]() {
            std::cout << "You entered: " << input << std::endl;
        });
    }

    return 0;
}
```
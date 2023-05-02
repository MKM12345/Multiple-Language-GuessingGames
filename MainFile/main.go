package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // Generate a random number between 1 and 100
    rand.Seed(time.Now().UnixNano())
    secretNum := rand.Intn(100) + 1

    // Initialize variables
    var guess int
    attempts := 0
    maxAttempts := 10

    // Game loop
    for guess != secretNum && attempts < maxAttempts {
        // Prompt user to enter a guess
        fmt.Printf("Guess a number between 1 and 100 (%d attempts remaining): ", maxAttempts-attempts)
        _, err := fmt.Scan(&guess)
        if err != nil {
            fmt.Println("Invalid input. Please enter a number.")
            continue
        }

        // Check if guess is correct, too high, or too low
        if guess == secretNum {
            fmt.Println("Congratulations! You guessed the secret number.")
        } else if guess < secretNum {
            fmt.Println("Too low. Try again.")
        } else {
            fmt.Println("Too high. Try again.")
        }

        // Increment attempts counter
        attempts++
    }

    // Game over
    if attempts == maxAttempts {
        fmt.Printf("Sorry, you ran out of attempts. The secret number was %d.\n", secretNum)
    }
}

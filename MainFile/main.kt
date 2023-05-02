import kotlin.random.Random

fun main() {
    val secretNumber = Random.nextInt(1, 101) // Generate a random number between 1 and 100 (inclusive)
    var guess: Int
    var tries = 0
    
    println("Welcome to the Random Number Guessing Game!")
    println("I'm thinking of a number between 1 and 100. Can you guess it?")
    
    do {
        print("Enter your guess: ")
        guess = readLine()?.toIntOrNull() ?: 0 // Read user input as integer (or 0 if invalid)
        if (guess == 0) {
            println("Invalid input. Please enter a number.")
        } else if (guess < secretNumber) {
            println("Too low. Guess again.")
        } else if (guess > secretNumber) {
            println("Too high. Guess again.")
        }
        tries++
    } while (guess != secretNumber)
    
    println("Congratulations! You guessed the secret number in $tries tries!")
}

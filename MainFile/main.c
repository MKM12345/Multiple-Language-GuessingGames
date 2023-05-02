#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int secretNumber, guess, numGuesses = 0;
    srand(time(NULL));  // Seed the random number generator
    secretNumber = rand() % 100 + 1;  // Generate a random number between 1 and 100

    printf("I'm thinking of a number between 1 and 100. Can you guess what it is?\n");

    while (1) {
        printf("Enter your guess: ");
        scanf("%d", &guess);
        numGuesses++;

        if (guess == secretNumber) {
            printf("Congratulations, you guessed the secret number in %d guesses!\n", numGuesses);
            break;
        } else if (guess < secretNumber) {
            printf("Too low. Try again.\n");
        } else {
            printf("Too high. Try again.\n");
        }
    }

    return 0;
}

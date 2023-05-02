import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int min = 1;
        int max = 100;
        int secretNumber = random.nextInt(max - min + 1) + min;
        int attempts = 0;
        int guess;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I am thinking of a number between " + min + " and " + max + ". Can you guess it?");

        do {
            System.out.print("Enter your guess: ");
            guess = scanner.nextInt();
            attempts++;

            if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else if (guess > secretNumber) {
                System.out.println("Too high! Try again.");
            } else {
                System.out.println("Congratulations! You guessed the secret number in " + attempts + " attempts.");
            }
        } while (guess != secretNumber);

        scanner.close();
    }

}

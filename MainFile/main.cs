using System;

namespace RandomNumberGame
{
    class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            int randomNumber = random.Next(1, 101);
            int guess;
            int attempts = 0;
            
            Console.WriteLine("Welcome to the Random Number Guessing Game!");
            Console.WriteLine("I am thinking of a number between 1 and 100. Can you guess what it is?");
            
            do
            {
                Console.Write("Enter your guess (1-100): ");
                guess = int.Parse(Console.ReadLine());
                attempts++;
                
                if (guess < randomNumber)
                {
                    Console.WriteLine("Too low. Try again.");
                }
                else if (guess > randomNumber)
                {
                    Console.WriteLine("Too high. Try again.");
                }
                else
                {
                    Console.WriteLine($"Congratulations! You guessed the number in {attempts} attempts.");
                }
                
            } while (guess != randomNumber);
        }
    }
}

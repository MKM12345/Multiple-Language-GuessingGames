#include <iostream>
#include <cstdlib>
#include <ctime> 
using namespace std;

int main() {
    srand(time(NULL));
    int secretNum = rand() % 100 + 1; // generate a random number between 1 and 100
    int guess;
    int numGuesses = 0;
    
    cout << "Welcome to the Random Number Guessing Game!" << endl;
    cout << "I'm thinking of a number between 1 and 100." << endl;
    
    do {
        cout << "Enter your guess: ";
        cin >> guess;
        numGuesses++;
        
        if (guess < secretNum) {
            cout << "Too low. Guess again." << endl;
        } else if (guess > secretNum) {
            cout << "Too high. Guess again." << endl;
        } else {
            cout << "Congratulations! You guessed the number in " << numGuesses << " guesses." << endl;
        }
    } while (guess != secretNum);
    
    return 0;
}

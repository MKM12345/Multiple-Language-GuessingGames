import Foundation

func generateRandomNumber() -> Int {
    return Int.random(in: 1...100)
}

func guessNumber() {
    let randomNumber = generateRandomNumber()
    var numberOfGuesses = 0
    var guessedNumber: Int?
    
    print("Guess a number between 1 and 100:")
    
    while guessedNumber != randomNumber {
        numberOfGuesses += 1
        
        guard let input = readLine(),
              let number = Int(input) else {
            print("Invalid input, please try again.")
            continue
        }
        
        guessedNumber = number
        
        if guessedNumber! < randomNumber {
            print("Too low! Guess again.")
        } else if guessedNumber! > randomNumber {
            print("Too high! Guess again.")
        } else {
            print("Congratulations, you guessed the number in \(numberOfGuesses) tries!")
        }
    }
}

guessNumber()

import random

def guess_number():
    secret_number = random.randint(1, 100)
    num_guesses = 0
    while True:
        guess = int(input("Guess a number between 1 and 100: "))
        num_guesses += 1
        if guess == secret_number:
            print("Congratulations! You guessed the number in", num_guesses, "guesses.")
            break
        elif guess < secret_number:
            print("Too low. Guess again.")
        else:
            print("Too high. Guess again.")
    
guess_number()

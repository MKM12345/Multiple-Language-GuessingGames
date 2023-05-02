import 'dart:math';

void main() {
  final random = Random();
  final int answer = random.nextInt(100) + 1;
  int guesses = 0;
  int? guess;

  print('Guess the number between 1 and 100!');

  while (guess != answer) {
    stdout.write('Enter your guess: ');
    String? input = stdin.readLineSync();
    if (input == null) {
      print('Please enter a valid number!');
      continue;
    }
    guess = int.tryParse(input);
    if (guess == null) {
      print('Please enter a valid number!');
      continue;
    }
    guesses++;
    if (guess < answer) {
      print('Too low! Try again.');
    } else if (guess > answer) {
      print('Too high! Try again.');
    }
  }

  print('Congratulations! You guessed the number in $guesses guesses.');
}

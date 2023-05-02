random_number = rand(1..100)

puts "Welcome to the number guessing game!"
puts "I'm thinking of a number between 1 and 100. Can you guess it?"

num_guesses = 0

loop do
  print "Guess a number: "
  guess = gets.chomp.to_i
  num_guesses += 1
  if guess == random_number
    puts "Congratulations! You guessed the number in #{num_guesses} guesses."
    break
  elsif guess < random_number
    puts "Too low. Guess again."
  else
    puts "Too high. Guess again."
  end
end

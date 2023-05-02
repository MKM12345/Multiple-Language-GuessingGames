open System

let guessNumber () =
    let rand = new Random()
    let target = rand.Next(1, 101)
    printfn "Guess a number between 1 and 100"
    let rec loop (count: int) =
        let guess = Console.ReadLine() |> int
        if guess = target then
            printfn "Congratulations! You guessed the number in %d tries." count
        elif guess < target then
            printfn "Too low, try again."
            loop (count + 1)
        else
            printfn "Too high, try again."
            loop (count + 1)
    loop 1

guessNumber()

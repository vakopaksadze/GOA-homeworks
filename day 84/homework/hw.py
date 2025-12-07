# Tic Tac Toe თამაში Python-ში
# მოთამაშე vs მოთამაშე ვერსია

board = [" " for _ in range(9)]

def print_board():
    print()
    for i in range(3):
        print(" | ".join(board[i*3:(i+1)*3]))
        if i < 2:
            print("--+---+--")
    print()

def check_winner(player):
    win_combos = [
        [0,1,2], [3,4,5], [6,7,8],  # ხაზები
        [0,3,6], [1,4,7], [2,5,8],  # სვეტები
        [0,4,8], [2,4,6]            # დიაგონალები
    ]
    for combo in win_combos:
        if all(board[i] == player for i in combo):
            return True
    return False

def play_game():
    current = "X"
    while True:
        print_board()
        move = int(input(f"მოთამაშე {current}, აირჩიე პოზიცია (1-9): ")) - 1
        if board[move] != " ":
            print("ეს ადგილი უკვე დაკავებულია, სცადე თავიდან.")
            continue
        board[move] = current

        if check_winner(current):
            print_board()
            print(f"🎉 მოთამაშე {current} გაიმარჯვა!")
            break

        if " " not in board:
            print_board()
            print("🤝 ფრეა!")
            break

        current = "O" if current == "X" else "X"

play_game()
# სახელი
name = input("შეიყვანე სახელი: ")
print(name.upper())
print(name.lower())
print(name.capitalize())

# სიტყვა და სიმბოლო
word = "python"
symbol = input("შეიყვანე სიმბოლო: ")

if symbol in word:
    print(symbol, "-", word.index(symbol))
else:
    print("This symbol is not in word")
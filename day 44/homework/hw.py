# 2) ბეჭდავს "Hello, world!"
def hello_world():
    print("Hello, world!")

# 3) იღებს სახელს და ბეჭდავს "Hello, [სახელი]!"
def greet(name):
    print(f"Hello, {name}!")

# 4) იღებს ორ რიცხვს და აბრუნებს მათ ჯამს
def add_numbers(a, b):
    return a + b

# 5) იღებს ერთ რიცხვს და აბრუნებს "Even" თუ ლუწია, ან "Odd" თუ კენტია
def even_or_odd(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"

# 6) იღებს სიის ელემენტებს და აბრუნებს მათ საშუალოს
def average(numbers):
    return sum(numbers) / len(numbers)

# 7) იღებს სტრიქონს და აბრუნებს ამ სტრიქონის სიგრძეს
def string_length(text):
    return len(text)

# 😎 იღებს სიას და აბრუნებს მას შებრუნებულ მდგომარეობაში
def reverse_list(items):
    return items[::-1]

# 9) იღებს სტრიქონს და აბრუნებს მას დიდ ასოებად გადაყვანილს
def to_uppercase(text):
    return text.upper()

# 10) იღებს ორ რიცხვს და აბრუნებს მათ შორის უმეტესს
def max_number(a, b):
    return a if a > b else b

# 11) იღებს რიცხვს და აბრუნებს True თუ ის უარყოფითია, False თუ არა
def is_negative(n):
    return n < 0

# 12) იღებს სიტყვების სიას და აბრუნებს ყველაზე გრძელ სიტყვას
def longest_word(words):
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

# 13) იღებს n და აბრუნებს 1-დან n-მდე ლუწ რიცხვებს სიაში
def even_numbers_upto(n):
    evens = []
    for i in range(1, n + 1):
        if i % 2 == 0:
            evens.append(i)
    return evens

# 14) იღებს სტრიქონს და აბრუნებს ხმოვნების რაოდენობას
def count_vowels(text):
    count = 0
    vowels = "aeiouAEIOU"
    for char in text:
        if char in vowels:
            count += 1
    return count
# 1) აბრუნებს ორი რიცხვის ჯამს
def add_numbers(a, b):
    return a + b

# 2) აბრუნებს რიცხვის კვადრატს
def square_number(n):
    return n ** 2

# 3) აბრუნებს სიაში უდიდეს რიცხვს
def find_largest_in_list(numbers):
    return max(numbers)

# 4) აბრუნებს 3 რიცხვის საშუალო არითმეტიკულს
def average_of_three(a, b, c):
    return (a + b + c) / 3

# 5) აბრუნებს სიის შებრუნებულ ვერსიას
def reverse_list(lst):
    return lst[::-1]

# 6) აბრუნებს, არის თუ არა სიტყვა პალინდრომი
def is_palindrome(word):
    return word == word[::-1]
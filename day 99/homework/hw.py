# ================================
# LEVEL 100 | ALGORITHMS
# ყველაფერი ერთ ფაილში
# ================================

import random

# --------------------------------
# 2) ტექსტის ფაილთან მუშაობა
# --------------------------------

text = input("შეიყვანე ტექსტი (მინიმუმ 4 სიტყვა): ")

with open("words.txt", "w", encoding="utf-8") as f:
    f.write(text)

with open("words.txt", "r", encoding="utf-8") as f:
    content = f.read()

words = content.split()
vowels = "აეიოუAEIOUaeiou"
consonants_count = sum(1 for ch in content if ch.isalpha() and ch not in vowels)
shortest_word = min(words, key=len)

swapped_text = ""
for ch in content:
    if ch.islower():
        swapped_text += ch.upper()
    else:
        swapped_text += ch.lower()

with open("processed.txt", "w", encoding="utf-8") as f:
    f.write(swapped_text)

print("\n--- ტექსტის შედეგები ---")
print("სიტყვების რაოდენობა:", len(words))
print("თანხმოვნების რაოდენობა:", consonants_count)
print("ყველაზე მოკლე სიტყვა:", shortest_word)


# --------------------------------
# 3) სტუდენტების ქულების მართვა
# --------------------------------

students = {
    "Ana": [90, 95, 88, 92, 91],
    "Gio": [78, 82, 80, 79, 77],
    "Nika": [85, 89, 90, 87, 88],
    "Luka": [60, 65, 63, 67, 62],
    "Mariam": [98, 97, 96, 99, 100]
}

def calculate_average(scores):
    return sum(scores) / len(scores)

def get_grade(avg):
    if avg >= 91: return "A"
    elif avg >= 81: return "B"
    elif avg >= 71: return "C"
    elif avg >= 61: return "D"
    elif avg >= 51: return "E"
    elif avg >= 41: return "FX"
    else: return "F"

def find_top_student(students_dict):
    return max(students_dict, key=lambda s: calculate_average(students_dict[s]))

results = []
for name, scores in students.items():
    avg = calculate_average(scores)
    grade = get_grade(avg)
    results.append((name, avg, grade))

results.sort(key=lambda x: x[1], reverse=True)

print("\n--- სტუდენტების შედეგები ---")
for name, avg, grade in results:
    print(f"{name:7} | საშუალო: {avg:.2f} | შეფასება: {grade}")

print("საუკეთესო სტუდენტი:", find_top_student(students))


# --------------------------------
# 4) რიცხვის გამოცნობის თამაში
# --------------------------------

games = 0
wins = 0
total_attempts = 0

while True:
    secret = random.randint(1, 100)
    attempts = 7
    used = 0
    games += 1

    print("\nმე ჩავიფიქრე რიცხვი 1-დან 100-მდე")

    while attempts > 0:
        try:
            guess = int(input(f"შეიყვანე რიცხვი (დარჩა {attempts} მცდელობა): "))
        except ValueError:
            print("არასწორი შეყვანა!")
            continue

        used += 1
        attempts -= 1

        if guess == secret:
            print(f"გილოცავ! გამოიცანი {used} მცდელობაში 🎉")
            wins += 1
            total_attempts += used
            break
        elif guess > secret:
            print("ძალიან დიდია")
        else:
            print("ძალიან პატარაა")
    else:
        print("ვერ გამოიცანი 😢 სწორი რიცხვი იყო:", secret)
        total_attempts += used

    again = input("გინდა ხელახლა თამაში? (y/n): ")
    if again.lower() != "y":
        break

avg_attempts = total_attempts / wins if wins > 0 else 0
stats = (games, wins, avg_attempts)

print("\n--- თამაშის სტატისტიკა ---")
print("თამაშები:", stats[0])
print("მოგებები:", stats[1])
print("საშუალო მცდელობები:", round(stats[2], 2))

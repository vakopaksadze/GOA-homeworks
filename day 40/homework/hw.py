s = input("შეიყვანე წინადადება: ")
space_count = 0

for char in s:
    if char == " ":
        space_count += 1

print("Space-ების რაოდენობაა:", space_count)


































words = ["dog", "cat", "bird", "fish", "cow"]
word = input("შეიყვანე სიტყვა: ")
pos = int(input("პოზიცია: "))
words.insert(pos, word)
print(words)







































s = input("შეიყვანე camelCase სიტყვა: ")
result = ""

for c in s:
    if c.isupper():
        result += " " + c.lower()
    else:
        result += c

print(result.capitalize())








































s = input("წინადადება: ")
words = s.lower().split()
snake = ""

for i in range(len(words)):
    snake += words[i]
    if i != len(words) - 1:
        snake += "_"

print(snake)






































names = []
for i in range(5):
    name = input("შეიყვანე სახელი: ")
    names.append(name)

consonants = []
vowels = "aeiouAEIOU"

# ასოებად გადავლა
for name in names:
    for char in name:
        if ('a' <= char <= 'z') or ('A' <= char <= 'Z'):  # ასოა თუ არა
            if char not in vowels:  # თუ არ არის ხმოვანი
                consonants.append(char.lower())

# დუბლიკატების მოცილება
unique = []
for c in consonants:
    if c not in unique:
        unique.append(c)

# სორტირება (საბაზისო bubble-sort სტილი)
for i in range(len(unique)):
    for j in range(i + 1, len(unique)):
        if unique[i] > unique[j]:
            unique[i], unique[j] = unique[j], unique[i]

print("თანხმოვნები:", unique)




word = "Python"
word[0] = "B"
print(word)

# რადგან string-ის შეცვლა არ შეიძლება






































names = ["ანა", "ლაშა", "ნინო"]

index = int(input("შეიყვანე რიცხვი 0-დან 2-მდე: "))

while index < 0 or index > 2:
    index = int(input("არასწორია! შეიყვანე 0, 1 ან 2: "))

print("არჩეული სახელია:", names[index])





































numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
every_third = numbers[::3]
print(every_third)




































numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
selected = [numbers[3], numbers[6], numbers[9]]
print(selected)
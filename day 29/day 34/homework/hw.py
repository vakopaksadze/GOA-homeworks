numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if number % 2 == 0:
        print("Number is even")
    else:
        print("Number is odd")





































words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "nectarine"]

# ყოველი მე-2 ელემენტი (იწყება ინდექსით 1: მეორე ელემენტი, მეოთხე და ასე შემდეგ)
for word in words[1::2]:
    print(word)





































academy = "GOA"

for index, letter in enumerate(academy, start=1):
    print(f"{letter}-{index}")

word = "Vakhtang"

for index, letter in enumerate(word, start=1):
    print(f"{letter}-{index}")











































my_list = [1, 2]
my_list.reverse()
print(my_list)  # [2, 1]
















































my_list = [10, 20, 30, 40]
print(len(my_list))  # 4















































 my_list = ["a", "b", "c", "d", "e"]

for i in range(1, len(my_list), 2):
    my_list[i] = "Vako"  # შეცვალე შენი სახელით

print(my_list)
positive = 0
negative = 0

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1

print("Positive numbers count:", positive)
print("Negative numbers count:", negative)







































count = 0

for i in range(3):
    num = int(input("შეიყვანე რიცხვი: "))
    if num > 10:
        count += 1

if count == 3:
    print("All the numbers that are larger than ten.")
else:
    print("Some numbers that are less than or equal to ten.")

































num = int(input("შეიყვანე რიცხვი: "))

if num < 2:
    print("This isn't prime number")
else:
    is_prime = True
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

    if is_prime:
        print("This is prime number")
    else:
        print("This isn't prime number")

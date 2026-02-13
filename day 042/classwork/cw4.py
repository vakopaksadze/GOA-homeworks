def fifth_even_after(n):
    count = 0
    num = n + 1
    while True:
        if num % 2 == 0:
            count += 1
            if count == 5:
                print(num)
                break
        num += 1

fifth_even_after(3)
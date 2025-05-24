# სია (list) არის ელემენტების თანმიმდევრული კოლექცია.
# ის შეიძლება შეიცავდეს რიცხვებს, სტრინგებს, ბულეებს და ა.შ.
# სიები იქმნება კუთხური ფრჩხილებით [ ] და ელემენტები მძიმით გამოიყოფა.

# მაგალითად, შექმენით ხილის სია:
fruits = ["apple", "banana", "orange"]

# დაბეჭდეთ სია
print(fruits)  # ['apple', 'banana', 'orange']





































# ინდექსი (index) არის ელემენტის პოზიცია სიაში.
# Python-ში ინდექსები იწყება 0-იდან:
#     0       1        2
# ["apple", "banana", "orange"]

fruits = ["apple", "banana", "orange"]

# მივწვდეთ ინდექსით ელემენტს:
print(fruits[0])  # apple
print(fruits[2])  # orange





































# შევქმნათ სახელების სია
names = ["Luka", "Nino", "Saba", "Tatia", "Davit", "Elene", "Giorgi"]

# შეცვალოთ 1-ლი (index 1) და მე-5 (index 5) ელემენტები
names[1] = "Mariam"    # Nino -> Mariam
names[5] = "Nikoloz"   # Elene -> Nikoloz

# დავბეჭდოთ შედეგი
print(names)  # ['Luka', 'Mariam', 'Saba', 'Tatia', 'Davit', 'Nikoloz', 'Giorgi']
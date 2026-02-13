# .append() - ამატებს ელემენტს სიის ბოლოს
# .insert() - ამატებს ელემენტს სიაში კონკრეტულ პოზიციაზე
# .pop() - შლის ელემენტს სიიდან (თუ არაფერს მიუთითებ, შლის ბოლოს)







































my_list = [10, 20, 30, 40, 50]
print("სიის სიგრძე არის:", len(my_list))  # len() აბრუნებს ელემენტების რაოდენობას









































numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)  # .append() ამატებს რიცხვს ბოლოში

print("სია:", numbers)






































colors = ["red", "green", "blue", "yellow", "purple"]
colors.pop()  # წაშლის ბოლო ელემენტს ("purple")
print("განახლებული სია:", colors)










































animals = ["dog", "cat", "elephant", "lion"]
animals.insert(1, "monkey")  # ჩასვამს "monkey"-ს მეორე პოზიციაზე (ინდექსი 1)
print("განახლებული სია:", animals)





































students = []

# სტუდენტების სახელების დამატება
for i in range(3):
    name = input("შეიყვანე სტუდენტის სახელი: ")
    students.append(name)

# "Teacher" სიის თავში
students.insert(0, "Teacher")

# ბოლო სტუდენტის წაშლა
students.pop()

# შედეგების ბეჭდვა
print("სიის სიგრძე:", len(students))
print("საბოლოო სია:", students)
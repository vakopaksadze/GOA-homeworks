#1) მომხმარებელს შემოატანინეთ წინადადება და შეინახეთ ის ცვლადში. თქვენი დავალებაა ეს შემოტანილი წინადადება გადაიყვანოთ camelCase-ში.
#(ამ დავალების შესასრულებლად არ უნდა გამოიყენოთ .title ფუნქცია)









text = input("შეიყვანე წინადადება: ")

words = text.split()

result = words[0].lower()

for word in words[1:]:
    result += word[0].upper() + word[1:].lower()

print("შედეგი:", result)

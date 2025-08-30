def my_split(text, sep=" "):
    result = []
    word = ""
    for ch in text:
        if ch == sep:         # როცა сепარატორს ვნახავთ
            result.append(word)
            word = ""         # თავიდან ვიწყებთ
        else:
            word += ch
    result.append(word)        # ბოლოს დარჩენილი სიტყვის დამატება
    return result

print(my_split("hello world python"))
# ['hello', 'world', 'python']








































def my_join(sep, lst):
    result = ""
    for i in range(len(lst)):
        result += lst[i]
        if i < len(lst) - 1:   # ბოლოს სეპარატორი აღარ უნდა
            result += sep
    return result

print(my_join("-", ["hello", "world", "python"]))
# hello-world-python
# 1) დაწერეთ binary_search ალგორითმის ფუნქცია და გატესტეთ, ასევე კომენტარებით მიუწერეთ თავისი დანიშნულება
# Binary Search ფუნქცია
# დანიშნულება:
# binary_search გამოიყენება დალაგებულ (sorted) სიაში ელემენტის სწრაფად მოსაძებნად.
# მუშაობს O(log n) სიჩქარით, რადგან ყოველ ნაბიჯზე სიას შუაზე ჰყოფს.

def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2  # ვპოულობთ შუა ინდექსს

        if arr[mid] == target:
            return mid  # ვაბრუნებთ ინდექსს თუ ვიპოვეთ
        elif arr[mid] < target:
            left = mid + 1  # ვეძებთ მარჯვენა ნაწილში
        else:
            right = mid - 1  # ვეძებთ მარცხენა ნაწილში
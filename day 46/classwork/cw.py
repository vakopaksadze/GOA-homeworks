# 1) აბრუნებს სამ რიცხვს შორის ყველაზე დიდს
def find_max(a, b, c):
    return max(a, b, c)

# 2) აბრუნებს სიტყვის ასოების რაოდენობას
def letter_count(word):
    return len(word)

# 3) აბრუნებს რიცხვის კვადრატს
def square(number):
    return number ** 2

# 4) აბრუნებს სამი რიცხვის ნამრავლს
def multiply_three(a, b, c):
    return a * b * c

# 5) ამოწმებს რიცხვის დადებითობას, უარყოფითობას ან ნულს
def check_sign(number):
    if number > 0:
        return "დადებითია"
    elif number < 0:
        return "უარყოფითია"
    else:
        return "ნულია"
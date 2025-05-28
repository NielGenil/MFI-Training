number = 0

def recursive():
    number += 1
    print(number)
    if number > 10:
        return 0
    recursive()
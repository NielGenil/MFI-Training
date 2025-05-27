# greater than ">"
# less than "<"
# greater than or equal ">="
# less than or equal "<="
# equal "=="
# not equal to "!="

# def conditionals(x):
#     if (x == 1 or x < 5):
#         print(f"{x} is greater than 1")
#     elif (x >= 5):
#         print("You pass")
#     else:
#         print(f"{x} is less than 1")

# x = int(input("Enter a number: "))

# conditionals(x)


def main():
    x = int(int_input("Enter a number: "))
    y = int(int_input("Enter a number: "))
    print(x * y)

def int_input(label):
    x = input(label)
    if x.isnumeric():
        return int(x)
    else:
        return 0
        
main()
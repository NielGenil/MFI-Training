try:
    x = int(input("give number: "))
    # print(x/3)
    print(x/0)
except ValueError as e:
    print("please input a number", e)





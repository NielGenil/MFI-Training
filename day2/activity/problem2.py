

name = input("Enter: ")
vowel = ['a', 'e', 'i', 'o', 'u']


for c in name:
    if c.lower() in vowel:
        print("", end="")
    else:
        print(c, end="")

print()
        


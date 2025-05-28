# print("meow" * 3)

# while loop

# i = 1
# while i < 5:
#     if i == 3:
#         continue
#     print("meow")
#     i += 1

# for loop

# for i in range(3):
#     print("meow")

# list
# names = ["niel", "pogi"]


# # print(names[1])
# # print(names)

# for name in names:
#     if name == "niel":
#         print(name)


names = {
    "name": "niel",
    "age": "22",
}

# print(names["name"])


for name in names:
    print(name)

# for name in names:
#     print(names[name])

# for name in names:
#     print(f"{name}: {names[name]}")





# def recursive(number = 0):
#     number += 1
#     print(number)
#     if number > 10:
#         return 0
#     recursive()
# recursive()

# number = 0
# def recursive():
#     global number
#     number += 1
#     print(number)
#     if number > 10:
#         return 0
#     recursive()
# recursive()
class Student:
    def __init__(self, name, house):
        self.name = name
        self.house = house
        

    # def __str__(self):
    #     return f"Student(name={self.name}, house={self.house})"

    # def __repr__(self):
    #     return f"Student(name={self.name}, house={self.house})"

    # def __eq__(self, other):
    #     if isinstance(other, Student):
    #         return self.name == other.name and self.house == other.house
    #     return False

    # def __hash__(self):
    #     return hash((self.name, self.house))

def main():
    student = get_student()


    # print(f"{student.name} is from {student.house}.")

def get_student():
    student = Student(name="", house="")
    student.name = input("Enter student name: ")
    student.house = input("Enter student house: ")
    if student.house in ["binan", "sta rosa", "cabuyao"]:
            print(f"Welcome to {student.house} house, {student.name}!")
    else:
        print(f"Invalid house. {student.house}")
    return student

if __name__ == "__main__":
    main()
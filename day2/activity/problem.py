def main():
    time = convert("Enter time: ")
    



def convert(time):
    time= input(time)
    hour, minute = time.split(":")

    hours = int(hour)
    minutes = int(minute)

    if hours == 8 and minutes < 60:
        print("breakfast")
    elif hours == 7 and minutes < 60:
        print("breakfast")
    elif hours == 13 and minutes < 60:
        print("lunch")
    elif hours == 12 and minutes < 60:
        print("lunch")
    elif hours == 19 and minutes < 60:
        print("dinner")
    elif hours == 18 and minutes < 60:
        print("dinner")
    
    return 


main()
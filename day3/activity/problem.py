
items = []
while True:
    try:
        item = input("enter: ")
        items.append(item)
    except EOFError:
        counts = {}
        for word in items:
            counts[word] = counts.get(word, 0) + 1
           
        # Print results
        for word, count in counts.items():
            
            print(f"{word}: {count}")
        break



# words = ['stone', 'cloud', 'dream', 'sky']
# words2 = list(map(str.upper, words))
# print (words2)
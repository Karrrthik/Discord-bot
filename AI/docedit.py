import re
import csv

pattern = r'\[(.*?)\]'

with open("textchat.txt", encoding="utf8") as file:
    x = [r for r in file.read().split("\n\n")]
    x = [re.sub(pattern, '', i) for i in x]
    x = [re.sub(r"^\W+", "", i) for i in x]
    
    indexes = []

    for i in x:
        if re.search("(?P<url>https?://[^\s]+)", i) or re.search("(Reactions?)", i):
            x[x.index(i)] = None

    x = [y for y in x if y != None]      
    x = [[r for r in i.split("\n")] for i in x]


with open("text.csv", 'w', encoding="utf8") as file:
    writer = csv.writer(file)
    
    for i in x:
        writer.writerow(i)







import csv
import re

regrex_pattern = re.compile(pattern = "["
    u"\U0001F600-\U0001F64F"  # emoticons
    u"\U0001F300-\U0001F5FF"  # symbols & pictographs
    u"\U0001F680-\U0001F6FF"  # transport & map symbols
    u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                        "]+", flags = re.UNICODE)

with open("fulltext.csv", 'r', encoding="utf8") as inp, open("text.csv", 'w', encoding="utf8") as out:
    writer = csv.writer(out)
    for row in csv.reader(inp):
        if not re.search(regrex_pattern, row[1]):
            writer.writerow(row)

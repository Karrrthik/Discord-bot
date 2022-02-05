import pandas as pd

with open("text.csv", encoding="utf8") as file:
    x = [y for y in file.read().split("\n")]
    x = [[r for r in y.split(',')] for y in x]
    x = [y for y in x if y != ['']] 

data = {
    'name': [],
    'line': []
}

for i in x:
    if (len(i) > 1):
        data['name'].append(i[0])
        data['line'].append(i[1])

df = pd.DataFrame(data)
df = df.dropna()
df.to_csv('fulltext.csv', index=False)
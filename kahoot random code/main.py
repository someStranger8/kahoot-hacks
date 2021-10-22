
import random

f = open("output.txt")

i=1
while i < 10:
     randomlist = random.sample(range(0, 9), 7)
     f.writelines(randomlist + "\n")
i+=1

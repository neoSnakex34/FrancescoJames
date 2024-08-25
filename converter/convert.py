#! /usr/bin/env python3 

'''
	this python script is used on developement, in order to automatically convert
	pictures from jpg/png format to webp optimized format.
	Since the development is done on linux it relies on cwebp cli program
	for linux, hence it is not usable on windows without modification.
	In order to be used it needs cwebp to be installed on the system.
'''
import os
import pathlib 
from time import sleep

out = "./converted"
if not pathlib.Path(out).exists():
    os.mkdir("./converted")

for entry in os.scandir("./to_convert/"):
    if entry.is_file():
        name = entry.name[:-4]
        print(f"processing {entry}")
        sleep(0.2)
        if entry.stat().st_size // 1000 > 3:
            os.system(f"cwebp -q 30 {entry.path} -o ./converted/{name}.webp ")
        elif entry.stat().st_size // 1000 > 1:
            os.system(f"cwebp -q 60 {entry.path} -o ./converted/{name}.webp ")
        else: 
            os.system(f"cwebp -q 100 {entry.path} -o ./converted/{name}.webp ")
print("done")

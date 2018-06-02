from zipfile import ZipFile
import os

file = 'studentreminder.zip'

# writing files to a zipfile
with ZipFile(file, 'w') as zip:
    zip.write("manifest.json")
    zip.write("background.js")
    zip.write("reminder.js")
    

base = os.path.splitext(file)[0]
os.rename(file, base + ".xpi")
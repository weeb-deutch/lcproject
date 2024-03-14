import serial
import log


connection = serial.Serial("COM3")
while True:
    log.set_labels('temperature','light')
    log.add({
      'temperature': temperature(),
      'light': display.read_light_level()
    })
    print("Light and temp monitor")
    data = connection.readline().decode().strip()
    while data != "start" :
        connection.readline().decode().strip()
    print("started")
    while data != "end":
        connection.readline().decode().strip()
    print("ended")
    print(data)
    with open("data.csv","a+") as file:
        file.write()

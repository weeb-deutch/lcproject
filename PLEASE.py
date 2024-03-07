import serial

connection = serial.Serial("COM3")
while True:
    print("Light and temp monitor")
    data = connection.readline().decode().strip()
    while data != "start" :
        connection.readline().decode().strip()
    print("started")
    print(data)
    with open("data.csv","a+") as file:
        file.write("\n" +str(time)+ ",")


#include <Servo.h>
int photoResistorPin = A5;
int greenLed = 7;
int redLed = 6;

int servoMotorPin = 5;
Servo MyServoMotor;

void setup() {
  Serial.begin(9600);
  pinMode(photoResistorPin, INPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(redLed, OUTPUT);
  MyServoMotor.attach(servoMotorPin);
}

void loop() {
  int photoresistorValue = analogRead(photoResistorPin);
  Serial.println(photoresistorValue);
    MyServoMotor.write(90);

  if (photoresistorValue < 20) {
    digitalWrite(greenLed, HIGH); // Turn on the LED
    digitalWrite (redLed, LOW);
   MyServoMotor.write(0); // Open the servo motor
   delay (15);
  } else {
    digitalWrite(greenLed, LOW);  // Turn off the LED
    digitalWrite (redLed, HIGH);
    MyServoMotor.write(90); // Open the servo motor
    delay (15);
  }

  delay(1000); // Add a delay to avoid rapid toggling of the LED
}
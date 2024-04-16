#include <LiquidCrystal.h>
#include <Servo.h>

// Define LCD pins
int RS = 8;
int E = 9;
int D4 = 10;
int D5 = 11;
int D6 = 12;
int D7 = 13;

// Define ultrasonic sensor pins
int trigPin = 3;
int echoPin = 4;

// Define servo motor pin
int servoMotorPin = 2;
Servo MyServoMotor;

// Define button and LED pins
#define pushButton 31
#define greenLed 22
#define redLed 23

// Define LCD object
LiquidCrystal lcd(RS, E, D4, D5, D6, D7);

bool isCarPresent = false;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(pushButton, INPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(redLed, OUTPUT);
  
  MyServoMotor.attach(servoMotorPin);
  lcd.begin(16, 2);
  Serial.begin(9600);
  
  digitalWrite(redLed, LOW);
  digitalWrite(greenLed, LOW);
  MyServoMotor.write(90);
}

void loop() {
  if (isCarDetected() && !isCarPresent) {
    digitalWrite(redLed, HIGH);
    digitalWrite(greenLed, LOW);
    lcd.clear();
    lcd.print("Welcome");
    isCarPresent = true;
  }
 if (digitalRead(pushButton) == HIGH && isCarPresent) {
    digitalWrite(redLed, LOW);
    digitalWrite(greenLed, HIGH);
    MyServoMotor.write(0); 
    delay(2000); 
    lcd.clear();
    lcd.print("Proceed");
   
}
  if (!isCarDetected() && isCarPresent) {
    MyServoMotor.write(90);
    lcd.clear();
    digitalWrite(redLed, LOW);
    digitalWrite(greenLed, LOW);

    isCarPresent = false;
    delay(500);
  }
}
bool isCarDetected() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.034 / 2;
  
  if (distance < 50) {
    return true;
  } else {
    return false;
  }
}

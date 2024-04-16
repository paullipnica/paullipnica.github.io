#include <LiquidCrystal.h>
#include <Servo.h>

// Define LCD pins
int RS = 8;
int E = 9;
int D4 = 10;
int D5 = 11;
int D6 = 12;
int D7 = 13;
LiquidCrystal lcd(RS, E, D4, D5, D6, D7);

// Define servo motor pin
int servoMotorPin = 2;
Servo MyServoMotor;

// Define LED pins
#define yellowLed 23
#define greenLed 22
#define blueLed 35

// Define Joystick pin
#define UDJ 6  // Joystick pin for Up/Down movement
#define LRJ 7  // Joystick pin for Left/Right movement

// Define Buttons 
#define greenButton 27
#define yellowButton 26
#define blueButton 28

// Define Sensor 
#define soundSensor 47
// Define Patterns
enum Pattern {
  JOYSTICK_PATTERN1,
  JOYSTICK_PATTERN2,
  JOYSTICK_PATTERN3,
  BUTTON_PATTERN1,
  BUTTON_PATTERN2,
  BUTTON_PATTERN3,
  SOUND_RESET
};

// Current stage
Pattern currentPattern = JOYSTICK_PATTERN1;

void setup() {
  // Initialize LCD
  lcd.begin(16, 2);
  
  // Initialize servo
  MyServoMotor.attach(servoMotorPin);
  
  // Initialize LED pins
  pinMode(greenLed, OUTPUT);
  pinMode(yellowLed, OUTPUT);
  pinMode(blueLed, OUTPUT);
  
  // Display initial stage on LCD
  lcd.print("STAGE 1 FIRST MOVE");
  MyServoMotor.write(0);
}

void loop() {
  switch (currentPattern) {
    case JOYSTICK_PATTERN1:
      joystickPattern1Logic();
      break;
    case JOYSTICK_PATTERN2:
      joystickPattern2Logic();
      break;
    case JOYSTICK_PATTERN3:
      joystickPattern3Logic();
      break;
    case BUTTON_PATTERN1:
      buttonPattern1Logic();
      break;
    case BUTTON_PATTERN2:
      buttonPattern2Logic();
      break;
    case BUTTON_PATTERN3:
      buttonPattern3Logic();
      break;
    case SOUND_RESET:
      resetPattern();
      break;
  }
}

void joystickPattern1Logic() {
  // Check if joystick moved left
  if (digitalRead(LRJ) == LOW) {
    // Turn on green LED
    digitalWrite(yellowLed, HIGH);
    
    // Delay for stability (adjust as needed)
    delay(1000);
    
    // Check if joystick returned to center position
    while (digitalRead(LRJ) == LOW) {
      delay(50);
    }

    // Move to next stage
    digitalWrite(yellowLed, LOW);
    currentPattern = JOYSTICK_PATTERN2;
    lcd.clear();
    lcd.print("NEXT MOVE");
  }
}

void joystickPattern2Logic() {
  // Check if joystick moved according to stage 2 pattern
  // For example, if stage 2 requires moving the joystick up
  if (digitalRead(UDJ) == LOW) {
    digitalWrite(yellowLed, HIGH);
    
    // Delay for stability (adjust as needed)
    delay(500);
    digitalWrite(yellowLed, LOW);
    
    // Check if joystick returned to center position
    while (digitalRead(UDJ) == LOW) {
      delay(50);
    }

    digitalWrite(yellowLed, LOW);
    currentPattern = JOYSTICK_PATTERN3;
    lcd.clear();
    lcd.print("LAST MOVE");
  }
}


  void joystickPattern3Logic() {
  // Check if joystick moved left
  if (digitalRead(LRJ) == LOW) {
    // Turn on green LED
    digitalWrite(yellowLed, HIGH);
    
    // Delay for stability (adjust as needed)
    delay(500);
    
    // Check if joystick returned to center position
    while (digitalRead(LRJ) == LOW) {
      delay(50);
    }

    // Move to next stage
    digitalWrite(yellowLed, HIGH); // Corrected placement of this line
    currentPattern = BUTTON_PATTERN1;
    lcd.clear();
    lcd.print("STAGE 2 FIRST BUTTON");
  }
}

void buttonPattern1Logic() {
  // Check if green button pressed
  if (digitalRead(greenButton) == HIGH) {
    // Turn on green LED
    digitalWrite(blueLed, HIGH);
    
    // Delay for stability (adjust as needed)
    delay(1000);
    
    // Check if button released
    while (digitalRead(greenButton) == LOW) {
      delay(50);
    }

    // Move to next stage
    digitalWrite(blueLed, LOW);
    currentPattern = BUTTON_PATTERN2;
    lcd.clear();
    lcd.print("NEXT BUTTON");
  }
}

void buttonPattern2Logic() {
  // Check if blue button pressed
  if (digitalRead(blueButton) == HIGH) {
    // Turn on yellow LED
    digitalWrite(blueLed, HIGH);
    
    // Delay for stability (adjust as needed)
    delay(1000);
    
    // Check if button released
    while (digitalRead(blueButton) == LOW) {
      delay(50);
    }

    // Move to next stage
    digitalWrite(blueLed, LOW);
    currentPattern = BUTTON_PATTERN3;
    lcd.clear();
    lcd.print("LAST BUTTON");
  }
}

void buttonPattern3Logic() {
  // Check if yellow button pressed
  if (digitalRead(yellowButton) == HIGH) {
    // Turn on green LED
    digitalWrite(blueLed, HIGH);
    
    // Delay for stability (adjust as needed)
    delay(1000);
    
    // Check if button released
    while (digitalRead(yellowButton) == LOW) {
      delay(50);
    }

    // Move to next stage
    digitalWrite(blueLed, HIGH);
    digitalWrite(greenLed, HIGH); // Just an indication that the sequence is complete
    currentPattern = SOUND_RESET; // Reset to the first pattern
    lcd.clear();
    lcd.print("COMPLETE");
    MyServoMotor.write(90);
  }
 // Check if red button pressed
}
void resetPattern() {
  // Check if sound threshold reached
  if (analogRead(soundSensor) > 300) {
    // Turn off all LEDs
    digitalWrite(blueLed, LOW);
    digitalWrite(greenLed, LOW);
    digitalWrite(yellowLed, LOW);
    
    // Delay for stability (adjust as needed)
    delay(1000);

    // Reset currentPattern to JOYSTICK_PATTERN1
    currentPattern = JOYSTICK_PATTERN1;
    lcd.clear();
    lcd.print("STAGE 1");
    MyServoMotor.write(0);
  }
}



#include <stdio.h>

// 타입 정의
typedef struct {
  int height;
  int weight;
} Person;

int main() {
  Person person1;
  person1.height = 170;
  person1.weight = 65;

  printf("Height: %d cm, Weight: %d kg\n", person1.height, person1.weight);

  return 0;
}
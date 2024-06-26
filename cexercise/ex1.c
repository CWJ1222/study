#include <stdio.h>

int main(void)
{
    int i;
    int score[3] = {91, 86, 97};
    char grade[3] = {'A', 'B', 'A'};
    printf("\n***학년별 취득 학점***\n\n");
    for (i = 0; i < 3; i++)
    {
        printf("%d학년 : 총점 = %d, 등급 = %c\n", i + 1, score[i], grade[i]);
    }
    getchar(); // 버튼을 눌러야 종료되는 역할
    return 0;
}
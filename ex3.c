#include <stdio.h>

int main()
{
    int num[10], i, j;
    printf("Enter 1 number: ");
    for (i = 0; i < 10; i++)
    {
        scanf("%d", &num[i]);
    }
    for (i = 0; i < 10; i++)
    {
        printf("구구단 %d단:\n", num[i]);
        for (j = 1; j <= 9; j++)
        {
            printf("%d * %d = %d\n", num[i], j, num[i] * j);
        }
    }
    return 0;
}
#include <stdio.h>

int main()
{
    int i;
    char *ptrArra[4] = {{"Korea"}, {"Seoul"}, {"Mapo"}, {"152"}};
    for (i = 0; i < 4;i++)
        printf("\n%s", ptrArra[i]);
    ptrArra[2] = "Jongno";
    printf("\n\n");
    for (i = 0; i < 4;i++)
        printf("\n%s", ptrArra[i]);
    getchar();

    return 0;  
}
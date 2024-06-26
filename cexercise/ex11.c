#include <stdio.h>

int main()
{
    char *ptrArray[2];
    char **ptrptr;
    int i;
    ptrArray[0] = "Korea";
    ptrArray[1] = "Seoul";
    ptrptr = ptrArray;
    printf("\nptrArray[0] address(&ptrArray[0])=%u", &ptrArray[0]);
    printf("\nptrArray[0] value(ptrArray[0])=%u", ptrArray[0]);
    printf("\nptrArray[0] reference(*ptrArray[0])=%c", *ptrArray[0]);
    printf("\nptrArray[0] refString(*ptrArray[0])=%s\n", *ptrArray);

    printf("\nptrArray[1] address(&ptrArray[1])=%u", &ptrArray[1]);
    printf("\nptrArray[1] value(ptrArray[1])=%u", ptrArray[1]);
    printf("\nptrArray[1] reference(*ptrArray[1])=%c", *ptrArray[1]);
    printf("\nptrArray[1] refString(*ptrArray[1])=%s\n", *(ptrArray+1));

    printf("\nptrptr address(&ptrptr)=%u", &ptrptr);
    printf("\nptrptr value(ptrptr)=%u", ptrptr);
    printf("\nptrptr reference 1(*ptrptr)=%u", *ptrptr);
    printf("\nptrptr reference 2(**ptrptr)=%c", **ptrptr);
    printf("\nptrptr refString 2(**ptrptr)=%s\n", *ptrptr);

    printf("\n\n*ptrArray[0]:");
    for (i = 0; i < 5;i++)  printf("%c", *(ptrArray[0] + i));
        printf("\n**ptrptr:");
    for (i = 0; i < 5;i++)  printf("%c", *(*ptrptr + i));
        printf("\n\n*ptrArray[1]:");
    for (i = 0; i < 5;i++)  printf("%c", *(ptrArray[1] + i));
        printf("\n**(ptrptr+1):");
    for (i = 0; i < 5;i++)  printf("%c", *(*(ptrptr+1)+i));
    getchar();

    return 0;
}
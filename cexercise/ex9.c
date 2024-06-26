#include <stdio.h>

int main()
{
    int i;
    char string1[20] = "1234 6789 B", string2[20], *ptr1, *ptr2;
    ptr1 = string1;
    printf("\nAddress of string1=%u\t ptr1=%u", string1, ptr1);
    printf("\nstring1=%s \nptr1=%s", string1, ptr1);
    printf("\n\n'ptr1+7'=%s", ptr1 + 7);//앞 7개를 무시
    printf("\n\n'string1+8'=%s", string1 + 8);//앞 8개를 무시
    ptr2 = &string1[7];
    printf("\n\n'ptr2'=%s\n\n", ptr2);
    for (i = 10; i >= 0;i--)
        putchar(*(ptr1 + i)); //역순으로 하나씩 출력
    for (i = 0; i < 20;i++)
        string2[i] = *(ptr1 + i); //string 문자열을 string2로 하나씩 복사
    printf("\n\nstring1=%s", string1);
    printf("\nstring2=%s", string2);
    *ptr1 = 'P';
    *(ptr1 + 1) = 'e';
    *(ptr1 + 2) = 'a';
    *(ptr1 + 3) = 'c';
    *(ptr1 + 4) = 'e';
    printf("\n\n string1 = %s\n", string1);
    getchar();

    return 0;
}
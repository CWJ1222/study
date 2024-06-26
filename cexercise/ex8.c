#include <stdio.h>

int main()
{
   int i=10, j=20;   
   int *ptr1,*ptr2;

   printf("\ni의 값 = %d\nj의 값 = %d", i, j);
   printf("\ni의 메모리 주소(&i)=%u", &i);
   printf("\nj의 메모리 주소(&j)=%u", &j);
   ptr1 = &i;
   printf("\n\n<<ptr1=&i 실행>>");
   printf("\nptr1의 메모리주소(&ptr1)=%u", &ptr1);
   printf("\nptr1의 값(ptr1)=%u", ptr1);
   printf("\nptr1의 참조 값(*ptr1)=%d", *ptr1);
   ptr2 = &j;
   printf("\n\n<<ptr2=&j 실행>>");
   printf("\nptr2의 메모리주소(&ptr2)=%u", &ptr2);
   printf("\nptr2의 값(ptr2)=%u", ptr2);
   printf("\nptr2의 참조 값(*ptr2)=%d", *ptr2);

   i = *ptr1;
   printf("\n\n<<i=*ptr1실행>>");
   printf("\ni의 값=%d\n", i);
   getchar();

   return 0;
}
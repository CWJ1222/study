#include <stdio.h>
long int fact(int); //`int` 타입의 매개변수를 받아서 `long int` 타입의 결과를 반환하는 함수를 선언하는 코드 
//일반적으로 이런 형태의 함수는 팩토리얼 계산과 같이 큰 수를 반환해야 하는 경우에 사용됩니다.
int main(){
    int n, result;
    printf("\n정수를 입력하세요:");
    scanf("%d", &n);
    result = fact(n);
    printf("\n\n%d의 팩토리얼 값은 %ld입니다.\n", n, result);
    getchar();
    getchar();

}
long int fact(int n){
    int value;
    if(n<=1){
        printf("\nfact(1)함수 호출!");
        printf("\nfact(1)값 1반환!!");
        return 1;
    }
    else {
        printf("\nfact(%d)함수 호출!", n);
        value = (n * fact(n - 1));
        printf("\nfact(%d)값 %ld반환!!", n, value);
        return value;
    }
}
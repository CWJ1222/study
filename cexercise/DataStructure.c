#include <stdio.h>
#include <stdlib.h>

// 노드 구조 정의
typedef struct Node {
    int coeff;
    int exp;
    struct Node* next;
} Node;

// 새로운 노드 생성
Node* createNode(int coeff, int exp) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->coeff = coeff;
    newNode->exp = exp;
    newNode->next = NULL;
    return newNode;
}

// 다항식 출력
void printPolynomial(Node* poly) {
    while (poly != NULL) {
        printf("%dx^%d", poly->coeff, poly->exp);
        if (poly->next != NULL) printf(" + ");
        poly = poly->next;
    }
    printf("\\n");
}

// 다항식 덧셈
Node* addPolynomials(Node* poly1, Node* poly2) {
    Node* result = NULL;
    Node** lastPtrRef = &result;

    while (poly1 != NULL && poly2 != NULL) {
        if (poly1->exp > poly2->exp) {
            *lastPtrRef = createNode(poly1->coeff, poly1->exp);
            poly1 = poly1->next;
        } else if (poly1->exp < poly2->exp) {
            *lastPtrRef = createNode(poly2->coeff, poly2->exp);
            poly2 = poly2->next;
        } else {
            *lastPtrRef = createNode(poly1->coeff + poly2->coeff, poly1->exp);
            poly1 = poly1->next;
            poly2 = poly2->next;
        }
        lastPtrRef = &(*lastPtrRef)->next;
    }

    while (poly1 != NULL) {
        *lastPtrRef = createNode(poly1->coeff, poly1->exp);
        poly1 = poly1->next;
        lastPtrRef = &(*lastPtrRef)->next;
    }

    while (poly2 != NULL) {
        *lastPtrRef = createNode(poly2->coeff, poly2->exp);
        poly2 = poly2->next;
        lastPtrRef = &(*lastPtrRef)->next;
    }

    return result;
}

// 다항식 곱셈
Node* multiplyPolynomials(Node* poly1, Node* poly2) {
    Node* result = NULL;

    for (Node* ptr1 = poly1; ptr1 != NULL; ptr1 = ptr1->next) {
        Node* temp = NULL;
        Node** lastPtrRef = &temp;

        for (Node* ptr2 = poly2; ptr2 != NULL; ptr2 = ptr2->next) {
            *lastPtrRef = createNode(ptr1->coeff * ptr2->coeff, ptr1->exp + ptr2->exp);
            lastPtrRef = &(*lastPtrRef)->next;
        }

        result = addPolynomials(result, temp);
    }

    return result;
}

int main() {
    // 첫 번째 다항식: 3x^3 + 2x + 1
    Node* poly1 = createNode(3, 3);
    poly1->next = createNode(2, 1);
    poly1->next->next = createNode(1, 0);

    // 두 번째 다항식: 4x^2 + x + 5
    Node* poly2 = createNode(4, 2);
    poly2->next = createNode(1, 1);
    poly2->next->next = createNode(5, 0);

    printf("첫 번째 다항식: ");
    printPolynomial(poly1);
    printf("두 번째 다항식: ");
    printPolynomial(poly2);

    Node* sum = addPolynomials(poly1, poly2);
    printf("덧셈 결과: ");
    printPolynomial(sum);

    Node* product = multiplyPolynomials(poly1, poly2);
    printf("곱셈 결과: ");
    printPolynomial(product);

    return 0;
}

package cond;

public class Switch1 {
    public static void main(String[] args) {
        int grade = 6;
        int coup;

        if (grade == 1) {
            coup = 1000;
        } else if (grade == 2) {
            coup = 2000;
        } else if (grade == 3) {
            coup = 3000;
        } else {
            coup = 500;
        }
        System.out.println("발급받은 쿠폰 " + coup);
    }
}

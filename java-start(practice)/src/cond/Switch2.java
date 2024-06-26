package cond;

public class Switch2 {
    public static void main(String[] args) {
        int grade = 3;
        int coup;

        switch(grade) {
            case 1:
                coup = 1000;
                break;

            case 2:
                coup = 2000;
                break;

            case 3:
                coup = 3000;
                break;

            default:
                coup = 500;
                        }
        System.out.println("받은 쿠폰은 " + coup);
    }
}

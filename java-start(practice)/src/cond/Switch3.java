package cond;

        public class Switch3 {
            public static void main(String[] args) {
                int grade = 5;
                int coup;

                switch(grade) {
                    case 1:
                        coup = 1000;
                        break;

                    case 2:

                    case 3:
                        coup = 3000;
                        break;

                    default:
                        coup = 500;
                }
                System.out.println("받은 쿠폰은 " + coup);
            }
        }


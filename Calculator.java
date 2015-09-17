import java.util.Scanner;
public class Calculator{
	public static Scanner in = new Scanner(System.in);
	
	public static void add(float first, float second){
		System.out.println("Addition Result: " + (first + second));
	}
	public static void multiply(float first, float second){
		System.out.println("Multiplication Result of "+first+" & "+second+": " + (first * second));
	}
	public static void divide(float first, float second){
		System.out.println("Division Result of "+first+" & "+second+": " + (first / second));
	}
	public static void subtract(float first, float second){
		System.out.println("Subraction Result of "+first+" & "+second+": " + (first - second));
	}
	public static void modulus(float first, float second){
		System.out.println("Modulus Result of "+first+" & "+second+": " + (first % second));
	}
	public static void average(int first, int second){
		System.out.println("Average Result of "+first+" & "+second+": " + ((first + second)/2));
	}
	public static void squareRoot(float first){
		System.out.println("Square root Result of "+first+": " + (Math.sqrt(first)));
	}

	public static void main (String[] args){
		float a = 0,b = 0;
		boolean done = false;

		while(!done){
			done = true;
			System.out.print("What to do? \n'1' - Add\n'2' - Subtract\n'3' - Multiply"
			+"\n'4' - Divide\n'5' - Modulus\n'6' - Average\n'7' - Square root\nSelect one? ");
			int resp = in.nextInt();
			if (resp < 7) {
				System.out.print("First number? ");
				a = in.nextFloat();
				System.out.print("Second number? ");
				b = in.nextFloat();
			}else if(resp == 7){
				System.out.print("Enter a number: ");
				a = in.nextFloat();
			}

			if (resp == 1) {
				add(a,b);			
			}else if (resp == 2) {
				subtract(a,b);
			}else if(resp == 3){
				multiply(a,b);
			}else if(resp == 4){
				divide(a,b);
			}else if(resp == 5){
				modulus(a,b);
			}else if(resp == 6){
				average(Math.round(a),Math.round(b));
			}else if(resp == 7){
				squareRoot(a);
			}else{
				System.out.println("Wrong input!");
				done = false;
			}
		}
	}
}
/*•	add, a method that takes 2 numbers as arguments (not only integers) and prints their sum.
•	subtract, a method that takes 2 numbers as arguments (not only integers) and prints their difference.
•	divide, a method that takes 2 numbers as arguments (not only integers) and prints their quotient. This one is a little tricky. Let's see if you figure it out. That'd be awesome!
•	multiply, a method that takes 2 numbers as arguments (not only integers) and prints their product.
•	squareRoot, a method that takes an integer and prints its square root.
•	modulus, a method that takes 2 arguments, a and b, and finds a mod b.
•	average, a method that takes 2 integers and finds their average. This is hard to get right so think hard about it.

*/
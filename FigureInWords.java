import java.util.Scanner;

public class FigureInWords{
	static String[] less_20 =  {"zero", "one", "two", "three", "four", "five", "six", 
       "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
       "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};

    static String[] tens={ "twenty", "thirty", "forty", "fifty", 
      "sixty", "seventy", "eighty", "ninety"};

	static Scanner in = new Scanner(System.in);

	public static void main(String[] args){
		while(true){
			System.out.print("Enter a number to convert to words (or 'done' to quit): ");
			try{
			String input = in.nextLine().toLowerCase().trim();
			if (input.equals("done")) {
				System.out.println("Thank you for using our service");
				break;
			}else{
				int out = Integer.parseInt(input);
				System.out.println(inWords(out));
			}

			}catch(NumberFormatException e){
				System.out.println("You entered a wrong value");
				break;
			}
		}
		
	}

	public static String inWords(int num){
		if (num < 0) {
			return "negative " + inWords(-1 * num);
		}else if(isBtw(num,0,19)){
      		return less_20[num];
		}else if((num >= 20) && (num <= 90) && (num%10 == 0)){
      		return tens[(num/10) - 2];
		}else if(isBtw(num,20,99)){
	      int tens = (num / 10) * 10;
	      int ones = num % 10;
	      return inWords(tens) + "-"+ inWords(ones);
	  	}else if(isBtw(num,100,999)){
      		return unify(num,100,"hundred");
    	}else if(isBtw(num,1000,999999)){
      		return unify(num,1000,"thousand");
    	}else if(isBtw(num,1000000,999999999)){
      		return unify(num,1000000,"million");
    	}else if(isBtw(num,1000000000, 2147483647)){
      		return unify(num,1000000000,"billion");
    	}else{return "";}
	}

	public static String unify(int num, int grade, String name){
	    int unit = num / grade;
	    int rest = num % grade;
	    if (rest > 0){
	      return inWords(unit)+" "+name+" "+((grade == 100) || (rest < 100) ? "and " : "")+inWords(rest);
	    }else{
	      return inWords(unit)+" "+name;
	    }
	}

	public static boolean isBtw(int x, int lower, int upper){
		return (lower <= x) && (x <= upper);
	}
}
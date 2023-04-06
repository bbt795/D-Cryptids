package com.example.passwordshitspart2electricboogalooo;

// Java implementation for the above approach
import java.io.*;
import java.util.*;
import java.util.Random;

class GFG {


    public static void printStrongNess(String input)
    {
        // Checking lower alphabet in string
        int n = input.length();
        boolean hasLower = false, hasUpper = false,
                hasDigit = false, specialChar = false;
        Set<Character> set = new HashSet<Character>(
                Arrays.asList('!', '@', '#', '$', '%', '^', '&',
                        '*', '(', ')', '-', '+'));
        for (char i : input.toCharArray())
        {
            if (Character.isLowerCase(i))
                hasLower = true;
            if (Character.isUpperCase(i))
                hasUpper = true;
            if (Character.isDigit(i))
                hasDigit = true;
            if (set.contains(i))
                specialChar = true;
        }

        // Strength of password
        System.out.print("Strength of password: ");
        if (hasDigit && hasLower && hasUpper && specialChar
                && (n >= 8))
            System.out.print("Strong\n");
        else if (((hasLower || hasUpper) || (hasDigit || specialChar)) &&
                specialChar && (n >= 6))
            System.out.print("Moderate\n");
        else
            System.out.print("Weak\n");

        //Ways to improve password
        if(!hasLower || !hasUpper || !hasDigit || !specialChar){
            System.out.print("\nPassword needs: \n");
            if(!hasLower){
                System.out.println("Needs at least 1 lower-case letter");
            }
            if(!hasUpper){
                System.out.println("Needs at least 1 upper-case letter");
            }
            if(!hasDigit){
                System.out.println("Needs at least 1 number");
            }
            if(!specialChar){
                System.out.println("Needs at least 1 special character");
            }
        }
    }

    // adding more characters to suggest
    // strong password
    static StringBuilder add_more_char(
            StringBuilder str, int need)
    {
        int pos = 0;
        Random randm = new Random();

        // all 26 letters
        String low_case = "abcdefghijklmnopqrstuvwxyz";

        for (int i = 0; i < need; i++) {
            pos = randm.nextInt(1000) % str.length();
            str.setCharAt(pos,low_case.charAt(
                    randm.nextInt(1000) % 26));
        }
        return str;
    }

    // make powerful String
    static StringBuilder suggester(int l, int u, int d,
                                   int s, StringBuilder str)
    {
        Random randm = new Random();

        // all digits
        String num = "0123456789";

        // all lower case, uppercase and special
        // characters
        String low_case = "abcdefghijklmnopqrstuvwxyz";
        String up_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String spl_char = "@#$_()!";

        // position at which place a character
        int pos = 0;

        // if there is no lowercase char in input
        // String, add it
        if (l == 0) {

            // generate random integer under
            // String length()
            pos = randm.nextInt(1000) % str.length();

            // generate random integer under 26 for
            // indexing of a to z
            str.setCharAt(pos,low_case.charAt(randm.nextInt(1000)
                    % 26));
        }

        // if there is no upper case char in input
        // String, add it
        if (u == 0) {
            pos = randm.nextInt(1000) % str.length();
            str.setCharAt(pos,low_case.charAt(randm.nextInt(1000)
                    % 26));
        }

        // if there is no digit in input String, add it
        if (d == 0) {
            pos = randm.nextInt(1000) % str.length();
            str.setCharAt(pos,low_case.charAt(randm.nextInt(1000)
                    % 10));
        }

        // if there is no special character in input
        // String, add it
        if (s == 0) {
            pos = randm.nextInt(1000) % str.length();
            str.setCharAt(pos,low_case.charAt(randm.nextInt(1000)
                    % 7));
        }

        return str;
    }

    /* make_password function :This function is used
    to check strongness and if input String is not
    strong, it will suggest*/
    static void generate_password(int n, StringBuilder p)
    {

        // flag for lower case, upper case, special
        // characters and need of more characters
        int l = 0, u = 0, d = 0, s = 0, need = 0;

        // password suggestions.
        StringBuilder suggest;

        for (int i = 0; i < n; i++) {

            // password suggestions.
            if (p.charAt(i) >= 97 && p.charAt(i) <= 122)
                l = 1;
            else if (p.charAt(i) >= 65 && p.charAt(i) <= 90)
                u = 1;
            else if (p.charAt(i) >= 48 && p.charAt(i) <= 57)
                d = 1;
            else
                s = 1;
        }

        // Check if input String is strong that
        // means all flag are active.
        if ((l + u + d + s) == 4) {
            System.out.println("Your Password is Strong");
            return;
        }
        else
            System.out.println("\nSuggested password ");

        /*suggest 10 strong Strings */
        for (int i = 0; i < 10; i++) {
            suggest = suggester(l, u, d, s, p);
            need = 8 - suggest.length();
            if (need > 0)
                suggest = add_more_char(suggest, need);
            System.out.println(suggest);;
        }
    }

    // Driver Code
    public static void main(String[] args)
    {
        //String input = "GeeksforGeeks!@12";
        Scanner input = new Scanner(System.in);
        System.out.print("Please enter your password: ");
        String pass = input.next();
        printStrongNess(pass);
        StringBuilder input_String = new StringBuilder(pass);
        generate_password(input_String.length(), input_String);
    }
}


//javascript code to check password strength

function printStrongNess(input_string) {
    const n = input_string.length;
    // Checking lower alphabet in string
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let specialChar = false;
    const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
    
    for (let i = 0; i < n; i++) {
        if (input_string[i] >= "a" && input_string[i] <= "z") {
        hasLower = true;
        }
        if (input_string[i] >= "A" && input_string[i] <= "Z") {
        hasUpper = true;
        }
        if (input_string[i] >= "0" && input_string[i] <= "9") {
        hasDigit = true;
        }
        if (!normalChars.includes(input_string[i])) {
        specialChar = true;
        }
    }
    
    // Strength of password
    let strength = "Weak";
    if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) {
        strength = "Strong";
    } 
    else if (((hasLower || hasUpper) || (hasDigit || specialChar)) && (n >= 6)) {
        strength = "Moderate";
    }
    
    console.log(`Strength of password: ${strength}`);
    
      //Ways to improve password
      if(!hasLower || !hasUpper || !hasDigit || !specialChar){
        console.log("Password needs: ");
        if(!hasLower){
          console.log("Needs at least 1 lower-case letter");
        }
        if(!hasUpper){
          console.log("Needs at least 1 upper-case letter");
        }
        if(!hasDigit){
          console.log("Needs at least 1 number");
        }
        if(!specialChar){
          console.log("Needs at least 1 special character");
        }
      }
      
    }
    
    // adding more characters to suggest
    // strong password
    function add_more_char(str, need) {
        let pos = 0;
        // all 26 characters
        const low_case = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < need; i++) {
            pos = Math.floor(Math.random() * 1000) % str.length;
            str = str.substring(0, pos) + low_case.charAt(
                Math.floor(Math.random() * 1000) % 26
            ) + str.substring(pos + 1);
        }
        return str;
    }
    
    function suggester(l, u, d, s, str) {
    // all numbers, upper case letters,lower case letters
        const num = "0123456789";
        const low_case = "abcdefghijklmnopqrstuvwxyz";
        const up_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const spl_char = "@#$_()!";
    
        let pos = 0;
    
        if (l === 0) {
        // generate random integer under
        // String length()
            pos = Math.floor(Math.random() * 1000) % str.length;
            // generate random integer under 26 for
            // indexing of a to z
            str = str.substring(0, pos) + low_case.charAt(
                Math.floor(Math.random() * 1000) % 26
            ) + str.substring(pos + 1);
        }
        // if there is no upper case char in input
        // String, add it
        if (u === 0) {
            pos = Math.floor(Math.random() * 1000) % str.length;
            str = str.substring(0, pos) + up_case.charAt(
                Math.floor(Math.random() * 1000) % 26
            ) + str.substring(pos + 1);
        }
        // if there is no digit in input String, add it
        if (d === 0) {
            pos = Math.floor(Math.random() * 1000) % str.length;
            str = str.substring(0, pos) + num.charAt(
                Math.floor(Math.random() * 1000) % 10
            ) + str.substring(pos + 1);
        }
        // if there is no special character in input
        // String, add it
        if (s === 0) {
            pos = Math.floor(Math.random() * 1000) % str.length;
            str = str.substring(0, pos) + spl_char.charAt(
                Math.floor(Math.random() * 1000) % 7
            ) + str.substring(pos + 1);
        }
    
        return str;
    }
    /* make_password function :This function is used
    to check strongness and if input String is not
    strong, it will suggest*/
    function generate_password(n, p) {
        // flag for lower case, upper case, special
        // characters and need of more characters
        let l = 0, u = 0, d = 0, s = 0, need = 0;
        let suggest;
    
        for (let i = 0; i < n; i++) {
            if (p.charCodeAt(i) >= 97 && p.charCodeAt(i) <= 122) {
                l = 1;
            } else if (p.charCodeAt(i) >= 65 && p.charCodeAt(i) <= 90) {
                u = 1;
            } else if (p.charCodeAt(i) >= 48 && p.charCodeAt(i) <= 57) {
                d = 1;
            } else {
                s = 1;
            }
        }
        // Check if input String is strong that
        // means all flag are active.
        if ((l + u + d + s) === 4) {
            console.log("Your Password is Strong");
            return;
        } else {
            console.log("Suggested password");
        }
        // Generate some 10 random suggestions which are strong
        for (let i = 0; i < 10; i++) {
            suggest = suggester(l, u, d, s, p);
            need = 8 - suggest.length;
            if (need > 0) {
                suggest = add_more_char(suggest, need);
            }
            console.log(suggest);
        }
    }
    
    function onClick()
    {
      const input_String = document.getElementById("password").value;
      printStrongNess(input_String);
      generate_password(input_String.length, input_String); 
      document.getElementById("password").value = "";
    }
    

//console.log('testing')
var a; //Declare variable named a. 
a = 10; //Assign the integer value of 10 to variable a. 
b = 11; //Create variable b and assign a value to it. No previous declaration statement. 
var c = 12; //Declare variable c and assign it the value of 12 in one statement.
console.log(a); //Print the content of variable a 
console.log(b); //Print the content of variable b 
console.log(c); //Print the content of variable c 

<!DOCTYPE html>
<html>
    <body>
        <p>Before the script...</p>
        <script>
            prompt('what is your name?');
            prompt("what is your crush's name?");
            //var n = Math.random()*100;
            var n = Math.floor(Math.random()*100);
            alert('Your love score is ' + n + "%");
        </script>
        <p>...After the script.</p>
    </body>
</html>
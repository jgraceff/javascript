const isInCollege = window.prompt('Are you in college? Please answer yes or no (lowercase only)');
 var college 
if (isInCollege == "yes") {
    college = true
    
} else {
     college = false
}


document.write(college);
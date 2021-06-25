function palindrome()  
{  
var a= document.getElementById("pa").value;
results = document.getElementById("pa2");

a = a.toLowerCase();  
var b = "";  
for (i = a.length-1; i >= 0; i--)  
{  
b = b + a[i]; 
}
if (a == ''){
    alert("Please enter the string");
}  
else if (a == b){  
results.innerHTML = b + "- ✔ is a Palindrome String";
results.style.color = "green";
}
else{; 
results.innerHTML = b + "- ✖ is not a Palindrome String";
results.style.color = "red";
}
}  
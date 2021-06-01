//Chapters 17-20

var taskNumber = +prompt("Enter the task number of the task you want to check: (From 1 to 10)");
if (taskNumber === 1)
{
  //Question 1
  var multiDimArray = [
    ["", ""]
  ];
  console.log(multiDimArray);
  alert("This code runs in console!");
}

else if (taskNumber === 2)
{
  //Question 2				
  var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  for (var i = 0; i < matrix.length; i++)
  {
    document.write(matrix[i] + "<br />");
  }
}

else if (taskNumber === 3)
{
  //Question 3				
  for (var i = 1; i <= 10; i++)
  {
    document.write(i + "<br />");
  }
}

else if (taskNumber === 4)
{
  //Question 4				
  var tableNumber = +prompt("Enter a number to see its multiplication table:");
  while (tableNumber < 1)
  {
    alert("Invalid input!");
    tableNumber = +prompt("Enter a number to see its multiplication table:");
  }
  var tableLength = +prompt("Enter length of multiplication table:");
  while (tableLength < 1)
  {
    alert("Invalid input!");
    tableLength = +prompt("Enter a number to see its multiplication table:");
  }
  document.write("Multiplication table of " + tableNumber + "<br />");
  document.write("Length " + tableLength + "<br /><br />");
  for (var i = 1; i <= tableLength; i++)
  {
    document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br />");
  }
}

else if (taskNumber === 5)
{
  //Question 5				
  var fruits = ["apple", "banana", "orange", "mango", "strawberry"];
  for (var i = 0; i < fruits.length; i++)
  {
    document.write(fruits[i] + "<br />");
  }
  document.write("<br />");
  for (var i = 0; i < fruits.length; i++)
  {
    document.write("Element at index " + i + " is " + fruits[i] + "<br />");
  }
}

else if (taskNumber === 6)
{
  //Question 6				
  //a) Counting				
  document.write("<h1>Counting:</h1><br />");
  for (var i = 1; i <= 15; i++)
  {
    document.write(i);
    if (i !== 15)
    {
      document.write(", ");
    }
  }

  //b) Reverse counting				
  document.write("<h1>Reverse counting:</h1><br />");
  for (var i = 10; i >= 1; i--)
  {
    document.write(i);
    if (i !== 1)
    {
      document.write(", ");
    }
  }

  //c) Even			
  document.write("<h1>Even:</h1><br />");
  for (var i = 0; i <= 20; i += 2)
  {
    document.write(i);
    if (i !== 20)
    {
      document.write(", ");
    }
  }

  //d) Odd				
  document.write("<h1>Odd:</h1><br />");
  for (var i = 1; i <= 19; i += 2)
  {
    document.write(i);
    if (i !== 19)
    {
      document.write(", ");
    }
  }

  //e) Reverse counting				
  document.write("<h1>Series:</h1><br />");
  for (var i = 2; i <= 20; i += 2)
  {
    document.write(i + "k");
    if (i !== 20)
    {
      document.write(", ");
    }
  }
}

else if (taskNumber === 7)
{
  //Question 7				
  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var matchFound = false;
  var userItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");
  while (userItem === "" || userItem === null)
  {
    if (userItem === "")
    {
      alert("You entered nothing!");
      userItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");
    }
    else if (userItem === null)
    {
      alert("You can't cancel!");
      userItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");
    }
  }
  for (var i = 0; i < A.length; i++)
  {
    if (userItem.toLowerCase() === A[i])
    {
      matchFound = true;
      document.write(userItem + " is <b>available</b> at index " + i + " in our bakery.")
      break;
    }
  }
  if (matchFound === false)
  {
    document.write("We are sorry. " + userItem + " is <b>not available</b> in our bakery.");
  }
}

else if (taskNumber === 8)
{
  //Question 8				
  var A = [24, 53, 78, 91, 12];
  var largestNumber = A[0];
  for (var i = 0; i < A.length; i++)
  {
    if (largestNumber < A[i])
    {
      largestNumber = A[i];
    }
  }
  document.write("Array items: " + A + "<br />");
  document.write("The largest number is " + largestNumber);
}

else if (taskNumber === 9)
{
  //Question 9				
  var A = [24, 53, 78, 91, 12];
  var smallestNumber = A[0];
  for (var i = 0; i < A.length; i++)
  {
    if (smallestNumber > A[i])
    {
      smallestNumber = A[i];
    }
  }
  document.write("Array items: " + A + "<br />");
  document.write("The smallest number is " + smallestNumber);
}

else if (taskNumber === 10)
{
  //Question 10				
  for (var i = 5; i <= 100; i += 5)
  {
    document.write(i);
    if (i !== 100)
    {
      document.write(", ");
    }
  }
}

//Invalid task number
else
{
  alert("Your input is invalid!");
}

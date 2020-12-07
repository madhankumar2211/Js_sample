let str="";
for (let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write("*");
        if(i==j)
            continue;

        document.write(" ");
    }
    document.write("<br>")
  
}

//display O/P in console

// for(let i = 1; i < 5; i++)
// {
//     console.log("*".repeat(i));
// }
// A function for computing grades for students
// The program first checks the score entered and grades it according to the grade limits set for each grade
function gradeSystem(event)
{
    let score;
if (score >79 && score <=100)
{
    return "A"
}
else if (score >= 60 &&  score < 80)
{
    return "B"
}
else if (score >= 49 && score < 60 )
{
    return "C"
}
else if (score >=40 && score < 50)
{
    return "D"
}
else if (score < 40 && score <= 0)
{
    return  "E"
}
}

// A function for computing cars speedand speed limits
// The program first checks the cars speed and compares to the given standard limit
// Then the program gives point deductions(demerits) for going above limit
function speedCheck(speed)
{
    const speedLimit = 70;
    const kmPerDemerit = 5;
    //The standard speed limit and speed increase where demerits start

    if (speed <= speedLimit)
    {
        return "Ok"
    }
    // checking speed limit
    else 
    {
        const demeritPoints = Math.floor ((speedLimit)/kmPerDemerit);
        if (demeritPoints > 15)
        {
            return "Lisence suspended"
        }
        else 
        {
            return `Points : ${demeritPoints}`
        }
    }
    // computations for demerits to be given if above speed limit
}

// A function that accepts ones input of theirgross salary
// Then the function calculates all deductions and taxes respectively and gives the expected net salary 
// It uses a fixed personal relief;

function calcSalary(personalRelief, netSalary,totalDeductions, contribitionBenefit,NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;
    personalRelief = +2400;
    grossSalary = +prompt("Enter your salary amount:")
    contribitionBenefit = +prompt("Contribution Benefit:")
    NHIFDeductions= +prompt("Enter NHIFDeduction:")
    NSSFDeductions= +prompt("Enter NSSFDeduction:")  

    //checking the taxable income; 

    
    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //calculating monthly pay as you earn(PAYE) based on income per person; 

    switch(true){
        case (taxableIncome<24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome>=24001 && taxableIncome<= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome>32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    // deductions made of PAYE and then the resulting netsalary; 
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    

}
calcSalary()
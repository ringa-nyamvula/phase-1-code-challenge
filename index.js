function gradeSystem(event)
{
    const score = parseInt(document.getElementById('gradeSystem').value)
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

function speedCheck(speed)
{
    const speedLimit = 70;
    const kmPerDemerit = 5;

    if (speed <= speedLimit)
    {
        return "Ok"
    }
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
}
const trianglesInput=document.querySelectorAll(".angles-input")
const trianglesButton=document.querySelector("#angles-btn")
const trianglesOutput=document.querySelector("#angles-btn")
// console.log(trianglesInput)
// console.log(trianglesButton)
// console.log(trianglesOutput)

function sumCalcuateSumOfangles(angles1,angles2,angles3){
    const anglesOfSum=angles1+angles2+angles3
    return (anglesOfSum)

}


function isTriangle(){
    // convert to data string to number
    const anglesOfSum=sumCalcuateSumOfangles(Number(trianglesInput[0].value),Number(trianglesInput[1].value),Number(trianglesInput[2].value))
    // const tapyCastingStringToNumber=Number(trianglesInput[0].value,trianglesInput[1].value,trianglesInput[2].value)
    console.log(anglesOfSum)

    
}

trianglesButton.addEventListener("click",isTriangle)
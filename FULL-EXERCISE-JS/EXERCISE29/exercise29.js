async function getDate() {
    console.log("xog badna aya ku soo badhigaa ")
    let date = await fetch('exercise29.json')//xogta ayuu filkaas ka soo aqrisanaa ama broweka ka kenaa xog ayuu markasto kenaa
    let respose = await date.json()  // xogta ayuu jvascript ubadalaa
    console.log("xogti aad javascript u bashay soo bandhig ",respose)
    console.log("kan asiga maha lagu dabacaayo aan arakno horta ")// waan fahmay asiga waxa uu daba socda respose kaas marki la dabaco kadib ayaa la dabacaa oo await ayuu ku jiraa cml 
  
}
getDate();
console.log("kii ugu danbeeyay oo aan dabaco ")//kan asiga kuwa kle inee await ku jiraan ayaa la dabacaa madaama oo aana ku jirin awit  ama promise
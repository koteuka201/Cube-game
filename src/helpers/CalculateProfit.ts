export const CalculateProfit=(betValue: number, betArray: number[], finalNumber: number) =>{
    if(betArray.includes(finalNumber)){
        return betValue * (betArray.length === 1 ? 3 : 2)
    }
}
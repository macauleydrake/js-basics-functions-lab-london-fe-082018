// Code your solution in this file!
function distanceFromHqInBlocks(numberofblocks){
  if (numberofblocks<42){
    return 42-numberofblocks}
  
  return numberofblocks-42
  
}

function distanceFromHqInFeet(numberofblocks){
  return distanceFromHqInBlocks(numberofblocks)*264 
  
}
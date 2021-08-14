
function superbowlWin(stat) {
  let result = stat.find( stat => stat.result === "W" )
  return !!result ? result.year : undefined
   }


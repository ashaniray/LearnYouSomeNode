console.log(process.argv.
  slice(2).
  reduce(function sum(prev, elem){
    return prev + Number(elem)
  }, 0))

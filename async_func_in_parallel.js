/*
Problem Link:
  https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
*/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
 var promiseAll = async function(functions) {

  let rejected = false
  let resolvedCount = 0
  let results = []

  return new Promise(function(myResolve, myReject) {
      for (let i =0; i < functions.length; i++){
          functions[i]()
          .then((result)=>{
              if(!rejected){
                  results[i] = result
                  resolvedCount++
              }
              if (resolvedCount === functions.length){
                  myResolve(results)
              }
          }).
          catch((error) => {
              rejected = true
              myReject(error)
          })

      }
  })
};

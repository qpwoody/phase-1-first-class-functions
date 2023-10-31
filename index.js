function receivesAFunction(Spy){
    Spy()
}
function returnsANamedFunction() {
    return function someFunction() {
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
    };
  }
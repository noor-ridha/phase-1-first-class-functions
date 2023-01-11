function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  return function name() {
    console.log("before all");
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("before all");
  };
}

function getMissingElement(superImportantArray){
var missing = "";
  for( var countNum = 0; 10 > countNum; countNum++ ) {
      if(superImportantArray.indexOf(countNum) == -1) {
        missing += String(countNum) + " ";
      }
  }
  if ( missing == "" ) {
    return console.log( "All the elements are inside the array" );
  } else {
    return missing;
  };
}

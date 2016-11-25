
module.exports={
	aritGeo: function(myArray){
  
	if (myArray.length<1)
		return 0;
	var arit=true, geo=true;
	var subt=myArray[myArray.length-1]-myArray[myArray.length-2];
	var div=myArray[myArray.length-1]/myArray[myArray.length-2];

  for (var i=0; i<myArray.length-1; i++){
	    if (myArray[i+1]-myArray[i]!=subt)
	    {
	      arit=false;
	      break;
	    }
	  }
	  
	for (i=0; i<myArray.length-1; i++){
	    if (myArray[i+1]/myArray[i]!=div)
	    {
	      geo=false;
	      break;
	    }
	  }
	  
	 if (arit===true){
	   return "Arithmetic";
	 }
	 
	 if (geo===true){
	   return "Geometric";
	 }
	 
	 if (arit===false && geo===false){
	   return -1;
	 }
	},
	findMinMax: function(myArray){
		var min=myArray[0], max=myArray[0];
		for (var i=0; i<myArray.length; i++){
			if(myArray[i]>max)
				max=myArray[i];
			if(myArray[i]<min)
				min=myArray[i];
		}
    if(max==min){
    	var result=[min];
      return result;
    }
		var result=[min, max];
		return result;

	},

	fizzBuzz: function(num){
		var result='';
		if(num%3===0){
    		result+="Fizz"
  		}
  
  		if(num%5===0){
    		result+="Buzz"
  		}
  
  		if(!(num%5===0 || num%3===0)){
    		result=num;
  		}
  
  		return result;
	}
}

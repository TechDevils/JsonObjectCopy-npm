# Json Object Copy

This will allow you to duplicate a base object for things like results or output data.

## Install

```bash
npm install json-object-copy
```

## Example

```js
var jsonObjectCopy = require("json-object-copy");

// Setup you json object to copy.
var resultsStructure = {"loopSizes":0,"arrayLegnth":0,"timeTakenToProccessNs":0,"resultType" : ""};

// Set it as the base object to copy
jsonObjectCopy.setBase(resultsStructure);

var loop = 1;
var arrayLength = 100;

for(var t = 0; t < 10; t++){

        //Process your results of your data. (This is just an example function)
        var timeForMinsu1Check = indexMinus1Check(loop,arrayLength);

        //Set the values for each object in the array as you please.
        jsonObjectCopy.addResult("loopSizes",loop);
        jsonObjectCopy.addResult("arrayLegnth",arrayLength);
        jsonObjectCopy.addResult("timeTakenToProccessNs",timeForMinsu1Check["NanoSeconds"]);
        jsonObjectCopy.addResult("resultType","Minus1Check");

        //Commit the current object to the result array
        //Info : The save is the bit that commits the current object to the array and
        //Info : then makes it so it starts another one on the next call to the addResult() method
        jsonObjectCopy.saveResultToOutput();      

        loop = loop + (loop * t);     
}

//Output the results as a array of json objects
console.log(jsonObjectCopy.results());

```

## Example Output

```json

[
    {"loopSizes":10,"arrayLegnth":100,"timeTakenToProccessNs":53453450,"resultType" : "Minus1Check"},
    {"loopSizes":20,"arrayLegnth":100,"timeTakenToProccessNs":34530,"resultType" : "Minus1Check"},
    {"loopSizes":30,"arrayLegnth":100,"timeTakenToProccessNs":435345,"resultType" : "Minus1Check"},
    {"loopSizes":40,"arrayLegnth":100,"timeTakenToProccessNs":435346234,"resultType" : "Minus1Check"},
    {"loopSizes":50,"arrayLegnth":100,"timeTakenToProccessNs":23462346,"resultType" : "Minus1Check"},
    {"loopSizes":60,"arrayLegnth":100,"timeTakenToProccessNs":23462346,"resultType" : "Minus1Check"}
]

```
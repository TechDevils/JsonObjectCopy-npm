var JsonObjectCopy = function(){
    var baseStructure = {};
    var resultsOutput = [];
    var currentResultObject = null;
}

JsonObjectCopy.prototype.setBase = function (base){
    this.baseStructure = cloneJsonObject(base);
}

JsonObjectCopy.prototype.addResult = function (resultName,value){
    if(this.currentResultObject == null){
        this.currentResultObject = cloneJsonObject(this.baseStructure);
    }

    this.currentResultObject[resultName] = value;
}
JsonObjectCopy.prototype.saveResultToOutput = function (){
    if(this.resultsOutput == undefined){
        this.resultsOutput = [];
    }

    this.resultsOutput.push(cloneJsonObject(this.currentResultObject));

    this.currentResultObject == null;
}

JsonObjectCopy.prototype.results = function (){
    return this.resultsOutput;
}

JsonObjectCopy.prototype.base = function (){
    return this.baseStructure;
}

function cloneJsonObject (objectToClone){
    var jsonAsString = JSON.stringify(objectToClone);
    return JSON.parse(jsonAsString);
}

module.exports = new JsonObjectCopy();
'use strict'

// require node core modules
let fs = require('fs')
let path = require('path')

// require installed modules
var cfn = require('cfn');

let AWS = require('aws-sdk')
require('dotenv').config({ path: path.join(__dirname, '.env') })


// load config from config file if it is present
let configFile = path.join(__dirname, 'aws.config.json')
if (fs.existsSync(configFile)) {
  AWS.config.loadFromPath(configFile)
  console.log(path.basename(module.filename) + ' is using AWS credentials supplied in aws.config.json.  Region is ' + AWS.config.region)
}

var cloudformation = new AWS.CloudFormation();
//createChangeSet()
executeChangeSet()

function executeChangeSet(){
  var params = {
    ChangeSetName: 'myChangeSet', /* required */
  //  ClientRequestToken: 'STRING_VALUE',
    StackName: 'myStack'
  };
  cloudformation.executeChangeSet(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}


function createChangeSet(){
  var params = {
    ChangeSetName: 'myChangeSet', /* required */
    StackName: 'myStack', /* required */
    Capabilities: [
      "CAPABILITY_IAM"
    ],
    ChangeSetType: "UPDATE",
   // ChangeSetType: "CREATE",
    //TemplateBody: 'STRING_VALUE',
    TemplateURL: 'https://s3-us-west-2.amazonaws.com/chris-build-00-oregon-public/lambda-web-page-example/build-output-master/template.yaml',
  };
  cloudformation.createChangeSet(params, function(err, data) {
    if (err) {
      console.error ("ERROR")
      console.log(err, err.stack); // an error occurred
    } 
    else    {
      console.log(data);           // successful response
    } 
  });
}

//cfn('Foo-Bar3', 'cognito-template.yaml');

//cfn('Foo-Bar3', 'template.yaml');
 


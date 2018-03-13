'use strict'

// require node core modules
let fs = require('fs')
let path = require('path')

// so at this stage seems like manual install will be needed.  Its a once off so all good


/*
idea is that this is the bare bones of what will be voyzu-core-setup-(cognify)

standard Lambda package (Lambda just tells our new DynamoDB table its installed)
and readme-aws-repo.md describes how to install the teamplate

two templates one for SAM and one for cognito.  Not sure if you can combine CF templates?

get the bare bones working and then you can get fancy:
where the bare bones is defined as
...serverless repo package works (public)
... yaml creates cognito user pool

and getting fancy includes
... how to trigger the lambda to do its thing (register itself) - some research here
...having said that is the presence of the lambda alone (or CF stack) sufficient proof do you need a central table
... nofifications, stack started, stack finished etc
... then normal stuff, respond to learnings better documentation etc.

Once learnings are done you can do voyzu-core etc etc.  Would you do this in N virginia?  This would need the pipeline in n.virginia. 
This leads on to staging.  (region in staging lol)

use maybe your build server  - eat our own dog food, lambda can basically be mt - use oregon region no reason not to - shift to ohio
pointless for the effor at this stage



*/
 
// module entry point
exports.handler = (event, context, callback) => {

  console.log('received event ' + JSON.stringify(event))

 context.succeed('test-cf lambda out')

}
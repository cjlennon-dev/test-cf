# test-cf

### After install:

The AWS Serverless Repository does not set up AWS Cognito (due to the restricted permissions applied to AWS Serverless Repository packages)  After deployment you will need to set up AWS Cognito by following the below instructions:

### Set up AWS Cognito

- Within your AWS Console navigate to the CloudFormation service.
- Choose to create a new stack
- Choose the option `Specify an Amazon S3 template URL`  and enter the cognito template url [`https://s3-us-west-2.amazonaws.com/chris-build-00-oregon-public/test-cf/build-output/template-cognito.yaml`](https://s3-us-west-2.amazonaws.com/chris-build-00-oregon-public/test-cf/build-output/template-cognito.yaml)
- Enter stack name `test-cf-cognito`
- Complete the CloudFormation wizard to create the Cognito User pool

Once stack creation is complete you can validate success by navigating to the AWS Service `Cognito` and click on `Manage your user pools`.  You should be able to view the user pool named `MyUserPool`



     



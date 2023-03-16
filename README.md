# cdk-aws_serverless

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkServerlessStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


Once you have saved the file, you can use the AWS CLI or the AWS Management Console to update your Lambda function with the new code. After the update is complete, you can call the API endpoint associated with the Lambda function to fetch data from the ECS cluster.
This code will use the AWS.ECS SDK to fetch data about the services running in the ECS cluster. It will return a JSON response containing information such as the name of the cluster, the name of each service, the number of desired and running tasks for each service, and the CPU and memory usage for each service.

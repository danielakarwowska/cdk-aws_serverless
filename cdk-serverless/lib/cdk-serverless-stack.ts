import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';

const envEU  = { account: '780516830267', region: 'eu-west-1' }


export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, { env: envEU });

    const api = new apigateway.RestApi(this, 'api', {
      description: 'example api gateway',
      deployOptions: {
        stageName: 'dev',
      },

      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['http://localhost:8000'],
      },
    });

    new cdk.CfnOutput(this, 'apiUrl', {value: api.url});

    const getTodosLambda = new lambda.Function(this, 'get-todos-lambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.main',
      code: lambda.Code.fromAsset(path.join(__dirname, '/../src/get-todos')),
    })
    const todos = api.root.addResource('todos');

    todos.addMethod(
      'GET',
      new apigateway.LambdaIntegration(getTodosLambda, {proxy: true}),
    );

  }
}

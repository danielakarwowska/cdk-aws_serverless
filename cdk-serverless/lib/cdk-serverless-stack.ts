import { Stack, StackProps } from '@aws-cdk/core'
import * as cdk from '@aws-cdk/core'
import * as lambda from "@aws-cdk/aws-lambda"
import * as dynamodb from "@aws-cdk/aws-dynamodb"
import * as apigateway from "@aws-cdk/aws-apigateway"

export class CdkServerlessStack extends Stack {
  constructor(scope: cdk.Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, "Hello", {
      partitionKey: { name: "name", type: dynamodb.AttributeType.STRING }
    })
  }
}

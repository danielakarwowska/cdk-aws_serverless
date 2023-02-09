#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {CdkStarterStack} from '../lib/cdk-serverless-stack';

const app = new cdk.App();
new CdkStarterStack(app, 'CdkStarterStack', {
  stackName: 'CdkStarterStack',
});
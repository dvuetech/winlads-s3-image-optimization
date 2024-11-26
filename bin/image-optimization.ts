#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';


const app = new cdk.App();
new ImageOptimizationStack(app, 'ImgTransformationStack', {
    stackName: 'image-optimization',
    env: {
        account: '337909774854',  // Your AWS account number
        region: 'ap-southeast-2'  // Your region
    }
});


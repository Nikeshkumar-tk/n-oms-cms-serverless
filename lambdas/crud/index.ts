import { DEPLOYMENT_ENVS } from '../../lib/env';
import { FunctionDefinition } from '../../lib/types';

export const config: FunctionDefinition = {
    handler: 'lambdas/crud/handler.handler',
    events: [
        {
            sqs: {
                arn: {
                    'Fn::GetAtt': ['multiTenantNomsCmsSqsQueue', 'Arn'],
                },
            },
        },
    ],
    environment: {
        MULTI_TENANT_DB_URL: DEPLOYMENT_ENVS.MULTI_TENANT_DB_URL,
        DYNAMODB_TABLE_NAME: DEPLOYMENT_ENVS.DYNAMODB_TABLE_NAME,
        REGION: DEPLOYMENT_ENVS.REGION,
    },
    timeout: 60,
};

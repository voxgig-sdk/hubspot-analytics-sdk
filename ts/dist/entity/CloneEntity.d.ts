import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { Clone, CloneCreateData } from '../HubspotAnalyticsTypes';
declare class CloneEntity extends HubspotAnalyticsEntityBase<Clone> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: CloneEntity): CloneEntity;
    create(this: any, reqdata?: CloneCreateData, ctrl?: Control): Promise<CloneEntity>;
}
export { CloneEntity };

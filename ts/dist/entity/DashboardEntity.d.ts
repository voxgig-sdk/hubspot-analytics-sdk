import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { Dashboard, DashboardLoadMatch, DashboardCreateData, DashboardUpdateData } from '../HubspotAnalyticsTypes';
declare class DashboardEntity extends HubspotAnalyticsEntityBase<Dashboard> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: DashboardEntity): DashboardEntity;
    load(this: any, reqmatch?: DashboardLoadMatch, ctrl?: Control): Promise<DashboardEntity>;
    create(this: any, reqdata?: DashboardCreateData, ctrl?: Control): Promise<DashboardEntity>;
    update(this: any, reqdata?: DashboardUpdateData, ctrl?: Control): Promise<DashboardEntity>;
}
export { DashboardEntity };

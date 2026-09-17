import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { ReportingBatchResponsePublicDashboard, ReportingBatchResponsePublicDashboardCreateData } from '../HubspotAnalyticsTypes';
declare class ReportingBatchResponsePublicDashboardEntity extends HubspotAnalyticsEntityBase<ReportingBatchResponsePublicDashboard> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: ReportingBatchResponsePublicDashboardEntity): ReportingBatchResponsePublicDashboardEntity;
    create(this: any, reqdata?: ReportingBatchResponsePublicDashboardCreateData, ctrl?: Control): Promise<ReportingBatchResponsePublicDashboardEntity>;
}
export { ReportingBatchResponsePublicDashboardEntity };

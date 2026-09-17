import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { ReportingCollectionResponseWithTotalPublicDashboard, ReportingCollectionResponseWithTotalPublicDashboardListMatch } from '../HubspotAnalyticsTypes';
declare class ReportingCollectionResponseWithTotalPublicDashboardEntity extends HubspotAnalyticsEntityBase<ReportingCollectionResponseWithTotalPublicDashboard> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: ReportingCollectionResponseWithTotalPublicDashboardEntity): ReportingCollectionResponseWithTotalPublicDashboardEntity;
    list(this: any, reqmatch?: ReportingCollectionResponseWithTotalPublicDashboardListMatch, ctrl?: Control): Promise<ReportingCollectionResponseWithTotalPublicDashboardEntity[]>;
}
export { ReportingCollectionResponseWithTotalPublicDashboardEntity };

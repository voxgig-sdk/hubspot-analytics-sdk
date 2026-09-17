import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { ReportingBatchResponsePublicReport, ReportingBatchResponsePublicReportCreateData } from '../HubspotAnalyticsTypes';
declare class ReportingBatchResponsePublicReportEntity extends HubspotAnalyticsEntityBase<ReportingBatchResponsePublicReport> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: ReportingBatchResponsePublicReportEntity): ReportingBatchResponsePublicReportEntity;
    create(this: any, reqdata?: ReportingBatchResponsePublicReportCreateData, ctrl?: Control): Promise<ReportingBatchResponsePublicReportEntity>;
}
export { ReportingBatchResponsePublicReportEntity };

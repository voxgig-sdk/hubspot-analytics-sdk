import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { Report, ReportLoadMatch, ReportListMatch, ReportCreateData, ReportUpdateData } from '../HubspotAnalyticsTypes';
declare class ReportEntity extends HubspotAnalyticsEntityBase<Report> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: ReportEntity): ReportEntity;
    load(this: any, reqmatch?: ReportLoadMatch, ctrl?: Control): Promise<ReportEntity>;
    list(this: any, reqmatch?: ReportListMatch, ctrl?: Control): Promise<ReportEntity[]>;
    create(this: any, reqdata?: ReportCreateData, ctrl?: Control): Promise<ReportEntity>;
    update(this: any, reqdata?: ReportUpdateData, ctrl?: Control): Promise<ReportEntity>;
}
export { ReportEntity };

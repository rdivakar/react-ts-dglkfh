import * as API from 'azure-devops-extension-api';
import * as SDK from 'azure-devops-extension-sdk';

import { WorkRestClient, WorkItemColor } from 'azure-devops-extension-api/Work';

import WorkItemInfo from '../models/WorkItemInfo';
import WorkItemWithTrackingInfo from '../models/WorkItemWithTrackingInfo';

import {
  WorkItem,
  WorkItemTrackingRestClient,
  Wiql,
  WorkItemQueryResult,
  WorkItemBatchGetRequest,
  WorkItemExpand,
  WorkItemErrorPolicy,
  WorkItemType,
} from 'azure-devops-extension-api/WorkItemTracking';

import {
  CommonServiceIds,
  IProjectPageService,
  IHostNavigationService,
  INavigationElement,
  IPageRoute,
} from 'azure-devops-extension-api';

const wiRestClient: WorkRestClient = API.getClient(WorkRestClient);

const witRestClient: WorkItemTrackingRestClient = API.getClient(
  WorkItemTrackingRestClient
);

export async function getWorkItemsByQuery(
  query: string
): Promise<WorkItemInfo[]> {
  try {
    let projectName = await getProjectName();
    let wiql: Wiql = { query: this.query };
    let qResult: WorkItemQueryResult = await witRestClient.queryByWiql(
      wiql,
      projectName
    );

    let workItemInfos: WorkItemInfo[] = await getWorkItemsFromueryResult(
      qResult
    );

    return workItemInfos;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting Workitem using Wiql');
  }
}

/**
export async function getWorkItemById(
  id: number
): Promise<Array<WorkItemInfo>> {}
*/

export async function getProjectName(): Promise<string> {
  const projectService = await SDK.getService<IProjectPageService>(
    CommonServiceIds.ProjectPageService
  );
  const project = await projectService.getProject();
  let projectName: string = 'OE';
  if (project) {
    projectName = project.name;
  }
  return projectName;
}

export async function getWorkItemType(type: string): Promise<WorkItemType> {
  let projectName = await getProjectName();
  let witType: WorkItemType = await witRestClient.getWorkItemType(
    projectName,
    type
  );

  return witType;
}

export async function getWorkItemInfo(
  workItem: WorkItem
): Promise<WorkItemInfo> {
  let workItenType: WorkItemType = await getWorkItemType(
    workItem.fields['System.WorkItemType']
  );

  let workItemInfo: WorkItemInfo = {
    WorkItem: workItem,
    Title: workItem.fields['System.Title'],
    AreaPath: workItem.fields['System.AreaPath'],
    State: workItem.fields['System.State'],
    Reason: workItem.fields['System.Reason'],
    Tags: workItem.fields['System.Tags'],
    Relations: workItem.relations,
    ParentId: workItem.fields['System.Parent'],
    Icon: { id: '123', url: '' },
    Type: workItenType,
  };

  return workItemInfo;
}

async function getWorkItemsFromueryResult(
  workItemQueryResult: WorkItemQueryResult
): Promise<WorkItemInfo[]> {
  let workItemInfos: WorkItemInfo[] = [];

  let workItemIds: number[] = workItemQueryResult.workItems.map(function (
    val,
    index
  ): number {
    return val.id;
  });

  let projectName = await getProjectName();

  let date: Date = new Date(new Date().toUTCString());

  let workItemQueryRequest: WorkItemBatchGetRequest = {
    ids: workItemIds,
    $expand: WorkItemExpand.All,
    errorPolicy: WorkItemErrorPolicy.Fail,
    fields: [
      'System.Id',
      'System.Title',
      'System.WorkItemType',
      'System.TeamProject',
      'System.State',
      'System.Reason',
      'System.AssignedTo',
      'System.CreatedDate',
      'System.Tags',
      'System.Parent',
      'System.AreaPath',
    ],
    asOf: date,
  };

  let workItems: WorkItem[] = await witRestClient.getWorkItemsBatch(
    workItemQueryRequest,
    projectName
  );

  workItems.forEach(async function (value) {
    let w: WorkItemInfo = await getWorkItemInfo(value);
    workItemInfos.push(w);
  });

  return workItemInfos;
}

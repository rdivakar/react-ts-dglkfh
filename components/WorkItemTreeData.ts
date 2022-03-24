import { ISimpleListCell } from 'azure-devops-ui/List';
import { MenuItemType } from 'azure-devops-ui/Menu';
import { ColumnMore, ISimpleTableCell } from 'azure-devops-ui/Table';
import {
  renderExpandableTreeCell,
  renderTreeCell,
} from 'azure-devops-ui/TreeEx';
import {
  ITreeItem,
  ITreeItemProvider,
  TreeItemProvider,
} from 'azure-devops-ui/Utilities/TreeItemProvider';
import {
  WorkItem,
  WorkItemType,
  WorkItemIcon,
  WorkItemRelation,
} from 'azure-devops-extension-api/WorkItemTracking';

export interface IWorkItemTableItem extends ISimpleTableCell {
  Id: number;
  Title: string;
  State: string;
  Reason: string;
  AreaPath: string;
  Tags: string;
  ParentId?: number;
}

export const workItemColumn = {
  id: 'Id',
  name: 'Id',
  renderCell: renderExpandableTreeCell,
};

export const treeColumns = [workItemColumn];

export function getItemProvider(): ITreeItemProvider<IWorkItemTableItem> {
  const rootItems: Array<ITreeItem<IWorkItemTableItem>> = [];

  // Build the set of items based on the current root item count.

  return new TreeItemProvider<IWorkItemTableItem>(rootItems);
}

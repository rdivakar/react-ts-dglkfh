import * as React from 'react';
import { Card } from 'azure-devops-ui/Card';
import { Tree, ITree, ITreeRow, ITreeRowDetails } from 'azure-devops-ui/TreeEx';
import {
  ITreeItemProvider,
  ITreeItemEx,
} from 'azure-devops-ui/Utilities/TreeItemProvider';

import WorkItemHeaderRow from './WorkItemHeaderRow';
import {IWorkItemTableItem,getItemProvider, treeColumns } from './WorkItemTreeData';

export default class WorkItemTree extends React.Component<{}> {
  private itemProvider: ITreeItemProvider<IWorkItemTableItem>;

  constructor(props: {}) {
    super(props);
    this.itemProvider = getItemProvider();
  }

  private renderRow = (rowIndex: number, item: ITreeItemEx<IWorkItemTableItem>, details: ITreeRowDetails<IWorkItemTableItem>): JSX.Element => {

    return (

    );
  }

  onSelect: (event:React.SyntheticEvent<HTMLElement>, treeRow:ITreeRow<IWorkItemTableItem>) => void {

    

  }

  public render(): JSX.Element {
    return (
      <Card
        className="flex-grow bolt-card-no-vertical-padding"
        contentProps={{ contentPadding: false }}
      >
        <Tree<ILocationTableItem>
          renderRow={renderRow}
          singleClickActivation={true}
          showHeader={false}
          ariaLabel="Basic tree"
          columns={treeColumns}
          itemProvider={this.itemProvider}
          onToggle={(event, treeItem: ITreeItemEx<IWorkItemTableItem>) => {
            this.itemProvider.toggle(treeItem.underlyingItem);
          }}
          scrollable={true}
        />
      </Card>
    );
  }
}

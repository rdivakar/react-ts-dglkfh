import '../wit.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Page } from 'azure-devops-ui/Page';

import MyKeyResults from './MyKeyResults';
import WorkItemInfo from '../models/WorkItemInfo';

export interface IWorkItemsTabProps {
  items: WorkItemInfo[];
}

export default class WorkItemsTab extends React.Component<IWorkItemsTabProps> {
  constructor(props: IWorkItemsTabProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Page className="flex-grow">
        <div className="page-content">
          <div>
            <br />
            <br />
          </div>
          <div>
            <MyKeyResults items={this.props.items} />
          </div>
        </div>
      </Page>
    );
  }
}

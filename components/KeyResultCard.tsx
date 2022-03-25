import * as React from 'react';
import { Card, ICardProps } from 'azure-devops-ui/Card';
import {
  CustomHeader,
  HeaderDescription,
  HeaderIcon,
  HeaderTitle,
  HeaderTitleArea,
  HeaderTitleRow,
  TitleSize,
} from 'azure-devops-ui/Header';
import WorkItemInfo from '../models/WorkItemInfo';
import { Link } from 'azure-devops-ui/Components/Link/Link';

import { Image } from 'azure-devops-ui/Image';
import { Header } from 'azure-devops-ui/Header';
import { IdentityCardHeaderElement } from 'azure-devops-ui/Components/IdentityCard/IdentityCardHeaderElement';
import { Toggle } from 'azure-devops-ui/Toggle';

import * as ADOHelper from '../common/AzureDevOpsHelper';
import { css } from 'azure-devops-ui/Util';

import WorkItemHeaderRow from './WorkItemHeaderRow';

export default class KeyResultCard extends React.Component<WorkItemInfo, any> {
  constructor(props: WorkItemInfo) {
    super(props);
  }

  private onChangeTracking(event, value): void {}

  private renderCustomHeader(): JSX.Element {
    return (
      <WorkItemHeaderRow
        WorkItem={this.props.WorkItem}
        Icon={this.props.Icon}
        Reason={this.props.Reason}
        Title={this.props.Title}
        Type={this.props.Type}
        AreaPath={this.props.AreaPath}
        Relations={this.props.Relations}
        State={this.props.State}
        Tags={this.props.Tags}
        ParentId={this.props.ParentId}
      ></WorkItemHeaderRow>
    );
  }

  public render(): JSX.Element {
    return (
      <Card
        className="master-example-panel show-on-small-screens subtle-border no-v-padding"
        titleProps={{ text: this.props.Title, size: TitleSize.Large }}
        renderHeader={this.renderCustomHeader}
      ></Card>
    );
  }
}

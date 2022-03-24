import * as React from 'react';
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
import { Card, ICardProps } from 'azure-devops-ui/Card';

export default class WorkItemHeaderRow extends React.Component<
  WorkItemInfo,
  any
> {
  constructor(props: WorkItemInfo) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <CustomHeader className="bolt-header-with-commandbar">
          <Image containImage={true} src={this.props.Icon.url} />
          <HeaderTitleArea>
            <HeaderTitleRow>
              <HeaderTitle
                ariaLevel={3}
                className="text-ellipsis"
                titleSize={TitleSize.Large}
              >
                <Link href={ADOHelper.getWorkItemUrl(this.props)} subtle={true}>
                  {' '}
                  {this.props.WorkItem.id} {this.props.Title}{' '}
                </Link>
              </HeaderTitle>
            </HeaderTitleRow>
            <HeaderDescription>
              <IdentityCardHeaderElement
                identity={this.props.WorkItem.fields['System.AssignedTo']}
              ></IdentityCardHeaderElement>
            </HeaderDescription>
          </HeaderTitleArea>
        </CustomHeader>
      </div>
    );
  }
}

const CardHeader: React.SFC<ICardProps> = (props) => {
  const {
    collapsible,
    titleProps = {},
    headerBreakpoints,
    headerClassName,
    headerCommandBarItems,
    headerDescriptionProps = {},
    headerIconProps,
  } = props;
  const { text, className, id, size, ariaLevel } = titleProps;
  return (
    <Header
      className={css(
        headerClassName,
        'bolt-card-header',
        collapsible && 'bolt-card-header-collapsible'
      )}
      commandBarItems={headerCommandBarItems}
      description={headerDescriptionProps.text}
      descriptionClassName={headerDescriptionProps.className}
      headerBreakpoints={headerBreakpoints}
      titleId={id}
      titleIconProps={headerIconProps}
      title={text}
      titleAriaLevel={ariaLevel}
      titleClassName={className}
      titleSize={size}
    />
  );
};

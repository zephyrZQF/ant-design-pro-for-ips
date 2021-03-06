import { Card, List } from 'antd';
import React from 'react';

import { connect } from 'umi';
import moment from 'moment';
import AvatarList from '../AvatarList';
import { ListItemDataType } from '../../data.d';
import { ModalState } from '../../model';
import styles from './index.less';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Tools: React.FC<Partial<ModalState>> = (props) => {
  const { list } = props;
  return (
    <List<ListItemDataType>
      className={styles.coverCardList}
      rowKey="id"
      grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          {/* <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
            <Card.Meta title={<a>{item.title}</a>} description={item.subDescription} />
            <div className={styles.cardItemContent}>
              <span>{moment(item.updatedAt).fromNow()}</span>
              <div className={styles.avatarList}>
                <AvatarList size="small">
                  {item.members.map((member) => (
                    <AvatarList.Item
                      key={`${item.id}-avatar-${member.id}`}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList>
              </div>
            </div>
          </Card> */}
                
          <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
          <br />
          <br />
          <Input placeholder="default size" prefix={<UserOutlined />} />
          <br />
          <br />
          <Input size="small" placeholder="small size" prefix={<UserOutlined />} />

        </List.Item>
      )
    }
    />
  );
};

export default connect(({ accountCenter }: { accountCenter: ModalState }) => ({
  list: accountCenter.list,
}))(Tools);

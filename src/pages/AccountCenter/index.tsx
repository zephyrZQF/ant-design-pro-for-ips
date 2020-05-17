import React, { Component } from 'react';
import { Row, Col, Card, Input, Checkbox, InputNumber, Select } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import ErpBom from './components/ErpBom';
import OpenArea from './components/OpenArea';
import Roof from './components/Roof';
import Querys from './components/Querys';
import Tools from './components/Tools';

import styles from './Center.less';

const operationTabList = [
    {
        key: 'openarea',
        tab: (
            <span>
                Open Area <span style={{ fontSize: 14 }}></span>
            </span>
        ),
    },
    {
        key: 'roof',
        tab: (
            <span>
                Roof <span style={{ fontSize: 14 }}></span>
            </span>
        ),
    },
    {
        key: 'erpbom',
        tab: (
            <span>
                ERP BOM <span style={{ fontSize: 14 }}></span>
            </span>
        ),
    },
    {
        key: 'querys',
        tab: (
            <span>
                Query <span style={{ fontSize: 14 }}></span>
            </span>
        ),
    },
    {
        key: 'tools',
        tab: (
            <span>
                Tools <span style={{ fontSize: 14 }}></span>
            </span>
        ),
    },
];

interface AccountCenterState {
    tabKey?: 'openarea' | 'roof' | 'erpbom' | 'querys' | 'tools';
}


class AccountCenter extends Component<
    {},
    AccountCenterState
    > {
    state: AccountCenterState = {
        tabKey: 'openarea',
    };

    onTabChange = (key: string) => {
        this.setState({
            tabKey: key as AccountCenterState['tabKey'],
        });
    };
    
    renderChildrenByTabKey = (tabKey: AccountCenterState['tabKey']) => {
        if (tabKey === 'erpbom') {
            return <ErpBom />;
        }
        if (tabKey === 'roof') {
            return <Roof />;
        }
        if (tabKey === 'openarea') {
            return <OpenArea />;
        }
        if (tabKey === 'querys') {
            return <Querys />;
        }
        if (tabKey === 'tools') {
            return <Tools />;
        }
        return null;
    };

    render() {
        const { tabKey } = this.state;

        return (
            <GridContent>
                <Row>
                    <Col span={24}>
                        <Card>
                            <Row>
                                <Col span={10}>
                                    <Row>
                                        <Col span={24}>
                                            <Card>
                                                <div>
                                                    <div>
                                                        <div className={styles.teamTitle}>module info</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span style={{ marginRight: '5px', width: '70px' , paddingTop: '5px' }}>Height</span>
                                                        <Input style={{ width: '80px', marginRight: '5px'}}></Input>
                                                        <Input style={{ width: '20px' }}></Input>
                                                        <span style={{ marginRight: '5px', paddingTop: '5px' }}>%</span>
                                                        <Checkbox>Foreign</Checkbox>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span style={{ marginRight: '5px', width: '70px' }}>Width</span>
                                                        <Input style={{ width: '80px', marginRight: '5px', paddingTop: '5px' }}></Input>
                                                        <Input style={{ width: '20px' }}></Input>
                                                        <span style={{ marginRight: '5px', paddingTop: '5px' }}>%</span>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span style={{ marginRight: '5px', width: '70px' }}>Thickness</span>
                                                        <Input style={{ width: '80px', marginRight: '5px', paddingTop: '5px' }}></Input>
                                                        <div className={styles.rapid}>Rapid16</div>
                                                        <Input style={{ width: '70px' }}></Input>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span style={{ marginRight: '5px', width: '70px' }}>Power</span>
                                                        <Input style={{ width: '80px', marginRight: '5px', paddingTop: '5px' }}></Input>
                                                        <Checkbox>Grounding</Checkbox>
                                                        <Checkbox>防水条</Checkbox>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={10}>
                                    <Row>
                                        <Col span={24}>
                                            <Card>
                                                <div>
                                                    <div>
                                                        <div className={styles.teamTitle}>Customized info</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span style={{ marginRight: '5px', width: '70px' }}>Fastener</span>
                                                        <Select value={1}>
                                                            <Select.Option value={1}>
                                                                D-Dacrome
                                                            </Select.Option>
                                                        </Select>
                                                        <span style={{ marginRight: '5px', width: '70px' }}>Angle</span>
                                                        <InputNumber size='small'></InputNumber>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                    <Card
                        className={styles.tabsCard}
                        bordered={false}
                        tabList={operationTabList}
                        activeTabKey={tabKey
                        }
                        onTabChange={this.onTabChange}
                    >
                        {this.renderChildrenByTabKey(tabKey)}
                    </Card>
                    </Col>
                </Row>
            </GridContent>
        );
    }


}

export default AccountCenter
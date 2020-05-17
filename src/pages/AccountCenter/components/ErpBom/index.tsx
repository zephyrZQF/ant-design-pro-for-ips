import React from 'react';
import { Row, Col, Select } from 'antd';

const Tab = () => {

  return (
    <Row>
      <Col span={8}>
        <Row>
          <span>System</span>
          <Select value={1}>
            <Select.Option value={1}>
              System-a
            </Select.Option>
          </Select>
        </Row>
      </Col>
    </Row>

  )
};

export default Tab;

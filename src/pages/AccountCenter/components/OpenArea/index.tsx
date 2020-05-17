import React from 'react';
import { Row, Col, Select, Checkbox, Input } from 'antd';

import styles from './index.less';
const Tab = () => {

  return (
    <Row>
      <Col span={7}>
        <Row>
          <span style={{ marginRight: '5px', paddingTop: '5px' }}>System</span>
          <Select value={1}>
            <Select.Option value={1}>
              System-a
            </Select.Option>
          </Select>
          <Checkbox style={{ marginLeft: '5px' }}>Adaptor</Checkbox>
        </Row>
        <Row style={{ marginTop: '5px' }}>
          <Checkbox >Purlin</Checkbox>
          <Select style={{ marginLeft: '110px', width: "120px" }} />
        </Row>
        <Row style={{ marginTop: '5px' }}>
          <Checkbox >Girder</Checkbox>
          <Select style={{ marginLeft: '107px', width: "120px" }} />
        </Row>
        <Row style={{ marginTop: '5px' }}>
          <Checkbox >Pile1</Checkbox>
        </Row>
        <Row style={{ marginTop: '5px' }}>
          <Checkbox >Sturt1</Checkbox>
        </Row>
        <Row style={{ marginTop: '5px' }}>
          <Checkbox >Rafter</Checkbox>
        </Row>
      </Col>

      <Col span={17}>
        <Row>
          <Col span={10}>
            <div className={styles.block}>
              <span>Project information</span>
              <div style={{ marginTop: '5px' }}>
                <span style={{ marginRight: '5px', minWidth: '70px', paddingTop: '5px' }}>Post QTY</span>
                <Input style={{ width: '100px', marginRight: '5px' }}></Input>
              </div>
              <div style={{ marginTop: '5px' }}>
                <span style={{ marginRight: '5px', width: '70px', paddingTop: '5px',display:'inline-block' }}>Post Dis</span>
                <Input style={{ width: '100px', marginRight: '5px' }}></Input>
              </div>
              <div style={{ marginTop: '5px' }}>
                <span style={{ marginRight: '5px', width: '70px', paddingTop: '5px',display:'inline-block' }}>GirderCaniF</span>
                <Input style={{ width: '80px', marginRight: '5px' }}></Input>
                <span>%  GirderCaniF</span>
              </div >
              <div style={{ marginTop: '5px' }}>
                <span style={{ marginRight: '5px', width: '80px', paddingTop: '5px' ,display:'inline-block'}}>GirderCaniB</span>
                <Input style={{ width: '80px', marginRight: '5px' }}></Input>
                <span>% GirderCaniB</span>
              </div>
              <div style={{ marginTop: '5px' }}>
                <span style={{ marginRight: '5px', width: '80px', paddingTop: '5px' ,display:'inline-block'}}>Table</span>
                <Select style={{ width: "80px", marginRight: '5px' }} value={1}>
                  <Select.Option value={1}>
                    2v
                </Select.Option>
                </Select>
                <Input style={{ width: '20px' }}></Input>
              </div>
              <Checkbox style={{ marginTop: '5px' }}>Offer letter</Checkbox>
              <div>
                <Input style={{ marginRight: '5px' }} placeholder="Module clearance"></Input>
              </div>
              <div>
                <Input style={{ width: '130px', marginRight: '5px' }} placeholder="Ramming Depth B"></Input>
                <Input style={{ width: '130px', marginRight: '5px' }} placeholder="Ramming Depth F"></Input>
              </div>
              <div>
                <Input style={{ marginRight: '5px' }} placeholder="Wind load"></Input>
              </div>
              <div>
                <Input style={{ marginRight: '5px' }} placeholder="Snow load"></Input>
              </div>
            </div>
          </Col>
          <Col span={14}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={styles.block}>
                <span>Customization</span>
                <div>
                  <Checkbox style={{ marginRight: "20px" }}>GirderX2</Checkbox>
                  <Checkbox >斜拉筋</Checkbox>
                  <Select style={{ width: "60px" }} />
                  <Input style={{ width: '50px' }}></Input>
                  <Input style={{ width: '20px' }}></Input>
                  <Input style={{ width: '100px' }}></Input>
                </div>
                <div style={{ marginTop: "5px" }}>
                <Checkbox style={{ marginRight: "20px" }}>AdditionFeet</Checkbox>
                  <span>直拉筋数量</span>
                  <Input style={{ width: '50px' ,marginRight: "20px"}}></Input>
                  <Checkbox>Canti</Checkbox>
                </div>
                <div style={{ marginTop: "5px" }}>
                <Checkbox style={{ marginRight: "20px" }}>HeightAdjustPlate</Checkbox>
                </div>
              </div>
              <div className={styles.block}>
              <span>Calculation</span>
                <div>
                  <span style={{ marginRight: "5px"}} >GirderLength</span>
                  <Input style={{ width: '100px' ,marginRight: "20px"}} disabled></Input>
                  <span style={{ marginRight: "5px"}}>Power/Table</span>
                  <Input style={{ width: '100px' }} disabled></Input>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span style={{ marginRight: "5px"}} >PurlinLength</span>
                  <Input style={{ width: '100px' ,marginRight: "20px"}} disabled></Input>
                  <span style={{ marginRight: "5px"}}>Weight/Table</span>
                  <Input style={{ width: '100px',marginRight: "5px" }} disabled></Input>
                  <span >KG</span>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span style={{ marginRight: "5px"}} >PurlinCantiever</span>
                  <Input style={{ width: '100px' ,marginRight: "20px"}} disabled></Input>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Col>
    </Row>

  )
};

export default Tab;

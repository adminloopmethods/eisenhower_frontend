import React from 'react';
import { Card, Col, Space } from 'antd';
import {
  NormalText,
  MainTitle,
  CardHeadText,
  SpanText,
} from '../../ui-elements/TextRepo';

const Priorities = (props) => {
  return (
    <>
      <Col lg={props.lv} md={props.dv} sm={props.sv} xs={props.mv}>
        <Card className={`mb-3 ${props.cardColor}`}>
          <h2 className="total-tasks">
            {props.tasks} <span className="d-block">Tasks</span>
          </h2>
          <CardHeadText children={props.priority} className="mb-4" />
          <Space className="w-100">
            <p className="mb-0 pe-md-4 pe-3 ">
              {props.importance} <br />
              <SpanText>Importance</SpanText>
            </p>
            <p className="mb-0 pe-md-4 pe-3">
              {props.urgency}
              <br /> <SpanText>Urgency</SpanText>
            </p>
          </Space>
        </Card>
      </Col>
    </>
  );
};
export default Priorities;

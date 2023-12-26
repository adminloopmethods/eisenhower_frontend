import React from 'react';
import { Badge, Divider, Space, Input, Form } from 'antd';
import { NormalHeadText, SpanText } from '../../ui-elements/TextRepo';
import { MainButton } from '../../ui-elements/ButtonRepo';
const { TextArea } = Input;
const Comments = () => {
    return (
        <>
            <div className='comment-section'>
                <Space direction='vertical' className='comments' >
                    <Badge className='d-flex align-items-center' color="#f50" text={<><NormalHeadText children="jeetu" className="mb-0" /></>} />
                    <p className='fw-3' style={{ fontSize: '14px' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                    </p>
                </Space>
                <SpanText children="2022/Aug/29" className="text-muted" />
                <Divider />
                <Space direction='vertical' className='comments' >
                    <Badge className='d-flex align-items-center' color="#204d4b" text={<><NormalHeadText children="Sonal" className="mb-0" /></>} />
                    <p className='fw-3' style={{ fontSize: '14px' }}>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                    </p>
                </Space>
                <SpanText children="2022/Aug/29" className="text-muted" />
                <Divider />
                <Space direction='vertical' className='comments' >
                    <Badge className='d-flex align-items-center' color="#f50" text={<><NormalHeadText children="jeetu" className="mb-0" /></>} />
                    <p className='fw-3' style={{ fontSize: '14px' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                    </p>
                </Space>
                <SpanText children="2022/Aug/29" className="text-muted" />
                <Divider />
                <Space direction='vertical' className='comments' >
                    <Badge className='d-flex align-items-center' color="#204d4b" text={<><NormalHeadText children="Sonal" className="mb-0" /></>} />
                    <p className='fw-3' style={{ fontSize: '14px' }}>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                    </p>
                </Space>
                <SpanText children="2022/Aug/29" className="text-muted" />
                <Divider />
                <Space direction='vertical' className='comments' >
                    <Badge className='d-flex align-items-center' color="#f50" text={<><NormalHeadText children="jeetu" className="mb-0" /></>} />
                    <p className='fw-3' style={{ fontSize: '14px' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                    </p>
                </Space>
                <SpanText children="2022/Aug/29" className="text-muted" />
                <Divider />
                <Space direction='vertical' className='comments' >
                    <Badge className='d-flex align-items-center' color="#204d4b" text={<><NormalHeadText children="Sonal" className="mb-0" /></>} />
                    <p className='fw-3' style={{ fontSize: '14px' }}>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                    </p>
                </Space>
                <SpanText children="2022/Aug/29" className="text-muted" />
                <Divider />
            </div>
            <div className='my-comment'>
                <Form>
                    <TextArea
                        placeholder="Enter your comment"
                        autoSize={{
                            minRows: 1,
                            maxRows: 4,
                        }}>

                    </TextArea>
                    <MainButton children="save" className='my-3 w-100' />
                </Form>
            </div>

        </>
    )
}
export default Comments;
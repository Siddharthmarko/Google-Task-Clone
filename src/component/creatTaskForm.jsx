import React, { useState } from 'react';
import {
    DatePicker,
    Form,
    Input,
    Select,
    TimePicker,
    Button, 
    Modal
} from 'antd';
import { useForm } from 'antd/es/form/Form';


const { TextArea } = Input;

const CreateTaskForm = () => {
    const [taskFormOpen, setTaskFormOpen] = useState(false);
    const [form] = useForm();

    function showTaskForm() {
        setTaskFormOpen(true);
    }
    function closeModel() {
        setTaskFormOpen(false);
    }
    

    return (
        <>
            <Button onClick={() => showTaskForm()} >Create</Button>
            <Modal
                title="Create Task"
                open={taskFormOpen}
                // open={true} 
                onOk={closeModel}
                onCancel={closeModel}
                footer={[]}
            >
                <Form
                    form={form}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout='horizontal'
                    style={{
                        maxWidth: 600,
                    }}
                >
                <Form.Item label="Input" >
                    <Input />
                </Form.Item>

                <Form.Item label="DatePicker" >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="TimePicker" >
                    <TimePicker />
                </Form.Item>
                <Form.Item label="Select" >
                    <Select>
                        <Select.Option>
                            My Task
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TextArea" >
                    <TextArea rows={4} />
                </Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button type='reset' >cancel</Button>
            </Form>
            </Modal>
    
        </>
    );
};
export default () => <CreateTaskForm />;
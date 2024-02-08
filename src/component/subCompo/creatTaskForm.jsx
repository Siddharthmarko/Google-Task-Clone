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
import { useData } from '../context/contextProvider';

const { TextArea } = Input;

const CreateTaskForm = () => {
    const [taskFormOpen, setTaskFormOpen] = useState(false);
    const {state, dispatcher} = useData();

    const onFinish = (values) => {
        console.log('Success:', values);
        values.complete = false;
        // console.log(values);
        dispatcher({type: 'task', data: values});
    };
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
                onOk={closeModel}
                onCancel={closeModel}
                footer={[]}
            >
                <Form
                    labelCol={{ span: 4, }}
                    wrapperCol={{ span: 14, }}
                    layout='horizontal'
                    style={{ maxWidth: 600, }}
                    onFinish={onFinish}
                >
                <Form.Item 
                    label="Task-Name" 
                    name='title' 
                    rules={[{
                            required: true, 
                            message:'required'
                            }]}>

                    <Input />
                </Form.Item>

                {/* <Form.Item label="DatePicker" name='date' rules={[{required: true, message:'required'}]} >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="TimePicker" name='time' rules={[{required: true, message:'required'}]} >
                    <TimePicker />
                </Form.Item> */}
                    <Form.Item 
                        label="Select" 
                        name='listId' >
                        <Select>
                            {state.map((list) => 
                               <Select.Option value={list.id}>
                                    {list.name}
                                </Select.Option>
                            )}
                            
                        </Select>
                    </Form.Item>
                    <Form.Item 
                        label="TextArea" 
                        name='description' 
                        rules={[{required: true, message:'required'}]} >
                            
                        <TextArea   
                            rows={4} 
                        />
                </Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        >Submit
                        </Button>
                <Button 
                    type='reset' 
                    >cancel
                </Button>
            </Form>
            </Modal>
    
        </>
    );
};
export default () => <CreateTaskForm />;
import React, { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button, 
    Modal
} from 'antd';
import { useData } from '../context/contextProvider';
import { useForm } from 'antd/es/form/Form';

const CreateTaskForm = () => {
    const [taskFormOpen, setTaskFormOpen] = useState(false);
    const {state, dispatcher} = useData();
    const [form] = useForm();

    const onFinish = (values) => {
        values.complete = false;
        dispatcher({type: 'task', data: values});
        closeModel();
    };
    function showTaskForm() {
        setTaskFormOpen(true);
    }
    function closeModel() {
        setTaskFormOpen(false);
        form.resetFields();
    }
    

    return (
        <>
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                onClick={() => showTaskForm()} 
                >Create
            </button>
            <Modal
                title="Create Task"
                open={taskFormOpen}
                // onOk={false}
                onCancel={closeModel}
                footer={[]}
            >
                <Form
                    form={form} 
                    labelCol={{ span: 4, }}
                    wrapperCol={{ span: 14, }}
                    layout='horizontal'
                    style={{ maxWidth: 600, }}
                    onFinish={onFinish}
                >
                <Form.Item 
                    label="Task" 
                    name='title' 
                    rules={[{
                            required: true, 
                            message:'required'
                            }]}>

                    <Input />
                </Form.Item>

                <Form.Item 
                        label="Select List" 
                        name='listId' >
                        <Select>
                            {state.map((list) => 
                               <Select.Option value={list.id}>
                                    {list.name}
                                </Select.Option>
                            )}
                        </Select>
                    </Form.Item>

                    <Button 
                        type="" 
                        htmlType="submit"
                        >Submit
                        </Button>
                <Button 
                    onClick={closeModel}
                    type='reset' 
                    >cancel
                </Button>
            </Form>
            </Modal>
        </>
    );
};
export default () => <CreateTaskForm />;
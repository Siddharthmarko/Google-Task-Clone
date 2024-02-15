import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Modal
} from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useData } from '../context/contextProvider';
import { useForm } from 'antd/es/form/Form';

export default function CreateList({rename = false}){
    // rename variable contain id of list for rename
    const [listFormOpen, setListFormOpen] = useState(false);
    const { dispatcher } = useData();
    const [form ]= useForm();

    function showListForm() {
        setListFormOpen(true);
    }
    function closeModel() {
        setListFormOpen(false);
        form.resetFields();
    }
    const onFinish = (values) => {
        values = {...values, task: [], checked: true}
        dispatcher({type: 'list', data: values, reName: rename});
        closeModel();
    };

    return(
        <>
            <li onClick={() => showListForm()} >
                {rename 
                    ? <p>Rename List</p> 
                    :  <div className="flex px-4 gap-9">
                            <PlusOutlined />
                            <p>Create New List</p>  
                        </div>
                    }
            </li>
            <Modal
                    title="List Name"
                    open={listFormOpen}
                    onOk={closeModel}
                    onCancel={closeModel}
                    footer={[]}
            >
                <Form
                    form={form} 
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item 
                        label="List"
                        name={'name'} 
                        rules={[{required: true, message: 'requried'}]} 
                        >
                            <Input />
                    </Form.Item>
                    <Form.Item  >
                        <Button 
                            type="" 
                            htmlType="submit"
                            >Submit
                        </Button>
                        <Button 
                            type='reset' 
                            onClick={closeModel} 
                            >cancel
                        </Button>
                    </Form.Item>
                </Form>
        </Modal>
        </>     
    )
}
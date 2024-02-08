import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Modal
} from 'antd';
import { useData } from '../context/contextProvider';

export default function CreateList(){
    const [listFormOpen, setListFormOpen] = useState(false);
    const { dispatcher } = useData();

    function showListForm() {
        setListFormOpen(true);
    }
    function closeModel() {
        setListFormOpen(false);
    }
    const onFinish = (values) => {
        // console.log('Success:', values);
        values = {...values, task: [], checked: true}
        dispatcher({type: 'list', data: values});
    };

    return(
        <>
        <Button onClick={() => showListForm()} >Add List</Button>
            <Modal
                    title="Add List"
                    open={listFormOpen}
                    onOk={closeModel}
                    onCancel={closeModel}
                    footer={[]}
            >
                <Form
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
                            <Input  />
                    </Form.Item>
                    <Form.Item  >
                        <Button 
                            type="primary" 
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
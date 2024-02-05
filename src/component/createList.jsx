import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Modal
} from 'antd';
import { useForm } from 'antd/es/form/Form';

export default function CreateList(){
    const [form] = useForm();

    console.log(Form.getFieldsValue);
    const [listFormOpen, setListFormOpen] = useState(false);
    
    function showListForm() {
        setListFormOpen(true);
    }
    function closeModel() {
        setListFormOpen(false);
    }
    function onsubmit(e){
    console.log(e)
    }

    return(
        <>
        <Button onClick={() => showListForm()} >Add List</Button>
            <Modal
                    title="Add List"
                    open={listFormOpen}
                    onOk={closeModel}
                    onCancel={closeModel}
                    // open={true}
                    footer={[]}
            >
                <Form 
                    form={form}
                    name="register"
                    onFinish={onsubmit}
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
                    <Form.Item label='submit' >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                <Button type='reset' >cancel</Button>
                </Form>
        </Modal>
        </>
      
    )
}
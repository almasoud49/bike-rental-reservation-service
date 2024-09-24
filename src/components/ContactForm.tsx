import { useForm, SubmitHandler } from "react-hook-form";
import { TFormValues } from "../types/formValue.types";
import { Form, Input, Button, Row, Col } from "antd";
import contact from "../assets/images/contact.jpg";

const ContactForm = () => {
  const { register, handleSubmit } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center py-6">Contact Us</h1>
      <Row gutter={16} align="middle">
        {/* Image Section */}
        <Col xs={24} lg={12}>
          <div className="shadow-2xl w-full">
            <img
              src={contact}
              alt="Contact"
              className="object-cover w-full h-96"
            />
          </div>
        </Col>

        {/* Form Section */}
        <Col xs={24} lg={12}>
          <div className="bg-gray-100 p-4 lg:p-8">
            <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
              <Form.Item label="Name" name="name" rules={[{ required: true, message: "Name is required" }]}>
                <Input
                  {...register("name")}
                  placeholder="Enter your name"
                />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={[{ required: true, message: "Email is required" }]}>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item label="Message" name="message" rules={[{ required: true, message: "Message is required" }]}>
                <Input.TextArea
                  {...register("message")}
                  placeholder="Enter your message"
                  rows={4}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="bg-custom-teal">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;

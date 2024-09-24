import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Contact = () => {
    return (
        <Card 
            className="rounded shadow-2xl" 
            style={{ margin: '24px', padding: '24px' }}
        >
            <Title level={2} className="font-bold">Contact Information</Title>
            
            <Paragraph>
                <strong>Office Address:</strong>
                <br />
                Bike Rent Reservation
                <br />
                Mirpur, Dhaka
                <br />
                Bangladesh
            </Paragraph>

            <Paragraph>
                <strong>Phone Number:</strong>
                <br />
                +880 1832437645
            </Paragraph>

            <Paragraph>
                <strong>Email:</strong>
                <br />
                contact@bikeRent.com
            </Paragraph>
        </Card>
    );
};

export default Contact;

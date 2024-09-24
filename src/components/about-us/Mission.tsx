
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Mission = () => {
    return (
        <Card 
            className="rounded shadow-2xl" 
            style={{ margin: '24px', padding: '24px' }}
        >
            <Title level={2} className="font-bold">Mission Statement</Title>
            <Paragraph>
                At <span className="font-bold text-lg italic">Bike Rent Reservation</span>, our mission is to provide an exceptional bike rental experience that combines convenience, quality, and affordability. We strive to promote a healthy and eco-friendly lifestyle by offering a diverse range of high-quality bicycles that cater to riders of all ages and skill levels. Our user-friendly reservation system ensures a seamless and efficient process, allowing our customers to explore and enjoy their surroundings with ease. We are committed to sustainability, customer satisfaction, and fostering a community of cycling enthusiasts. By continually improving our services and expanding our reach, we aim to be the go-to bike rental provider for adventurers and commuters alike.
            </Paragraph>
        </Card>
    );
};

export default Mission;

import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Milestone = () => {
    return (
        <Card 
            className="rounded shadow-2xl" 
            style={{ margin: '24px', padding: '24px' }}
        >
            <Title level={2} className="font-bold">History & Milestones</Title>
            <Paragraph>
                Founded in 2010 by Mr. Masud, <span className="font-bold text-lg italic">Bike Rent Reservation</span> began with a single store in Dhaka and a mission to make cycling accessible and enjoyable. The introduction of an online reservation system in 2015 marked a major advancement in customer convenience. Over the years, the company expanded to multiple locations, embraced green initiatives, and earned national awards for its sustainability efforts. The launch of electric bikes in 2020 broadened its appeal, and international expansion in 2023 brought its services to a global audience. Today, <span className="font-bold text-lg italic">Bike Rent Reservation</span> celebrates its 13th anniversary, continuing to lead in bike rentals and sustainable transportation.
            </Paragraph>
        </Card>
    );
};

export default Milestone;

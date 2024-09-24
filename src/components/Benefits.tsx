import { useGetAllBenefitsQuery } from "../redux/api/benefitApi";
import { Card, Col, Row, Typography, Spin } from "antd";
import { TBenefitData } from "../types/benefit.types";

const { Title } = Typography;

const Benefits = () => {
  const { data: allBenefits, isLoading } = useGetAllBenefitsQuery("");

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ margin: '40px 0' }}>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '24px' }}>
        Why Choose Us
      </Title>
      <Row gutter={[16, 16]}>
        {allBenefits?.data?.map((benefit: TBenefitData) => (
          <Col key={benefit._id} xs={24} sm={12} lg={8}>
            <Card
              title={benefit.title}
              bordered={false}
              style={{
                background: '#f0f0f0',
                height: '240px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p>{benefit.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Benefits;

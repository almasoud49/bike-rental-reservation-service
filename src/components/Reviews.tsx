
import { useGetAllReviewsQuery } from "../redux/api/reviewApi";
import { TReviewData } from "../types/review.type";
import { Card, Row, Col, Typography, Spin } from "antd";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const { Title, Text } = Typography;

const Reviews = () => {
  const { data: allReview, isLoading } = useGetAllReviewsQuery("");

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
        Testimonials
      </Title>
      <Row gutter={[16, 16]}>
        {allReview?.data?.map((review: TReviewData) => (
          <Col key={review._id} xs={24} sm={12} lg={8}>
            <Card
              bordered={false}
              style={{
                background: '#f0f0f0',
                height: '240px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaQuoteLeft style={{ marginRight: '8px', fontSize: '24px', color: '#1890ff' }} />
                <span style={{ flexGrow: 1, color: '#000' }}>{review.description}</span>
                <FaQuoteRight style={{ marginLeft: '8px', fontSize: '24px', color: '#1890ff' }} />
              </div>
              <Text strong style={{ marginTop: 'auto', textAlign: 'right', color: '#000' }}>
                {review.name}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;

import { useGetAllTeamQuery } from "../../redux/api/teamApi";
import { TTeamMemberData } from "../../types/team.type";
import { Card, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Team = () => {
  const { data: allTeamMembers } = useGetAllTeamQuery("");

  return (
    <div className="my-10">
      <Title level={2} className="text-center font-bold">
        Team
      </Title>
      <Row gutter={16} justify="center">
        {allTeamMembers?.data.map((member: TTeamMemberData) => (
          <Col
            key={member._id}
            xs={24} 
            sm={12} 
            lg={8} 
            style={{ marginBottom: '16px' }} 
          >
            <Card
              hoverable
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                style={{
                  width: '128px',
                  height: '128px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '16px',
                }}
              />
              <Card.Meta
                title={<strong>{member.name}</strong>}
                description={
                  <>
                    <Paragraph style={{ margin: 0 }}><strong>Position:</strong> {member.position}</Paragraph>
                    <Paragraph style={{ margin: 0 }}><strong>Bio:</strong> {member.bio}</Paragraph>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Team;

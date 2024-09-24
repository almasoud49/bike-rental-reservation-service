/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SpinWheel } from "react-spin-wheel";
import "react-spin-wheel/dist/index.css";
import { Typography, Card, Modal, Button } from "antd";

const { Title } = Typography;

const Coupon = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [winningResult, setWinningResult] = useState("");

  const handleFinishSpin = (item:any) => {
    setWinningResult(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ margin: '40px 0', textAlign: 'center' }}>
      <Title level={1} className="font-bold">
        Coupons & Discounts
      </Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
        }}
      >
        <Card
          style={{
            width: '400px',
            height: '400px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              width: '80%',
              height: '80%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="spin-wheel-container" // Add a class for scoping styles
          >
            <SpinWheel
              items={[
                "5% for 10 hours",
                "10% for 20 hours",
                "15% for 30 hours",
                "20% for 40 hours",
                "25% for 50 hours",
                "30% for 60 hours",
                "35% for 70 hours",
                "40% for 80 hours",
                "45% for 90 hours",
                "50% for 100 hours",
              ]}
              onFinishSpin={handleFinishSpin}
            />
          </div>
        </Card>
      </div>

      <Modal
        title="Congratulations!"
       open={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" type="primary" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
        centered
      >
        <p style={{ fontSize: '18px', fontWeight: '500' }}>
          🎉 You won: <span style={{ color: '#1890ff' }}>{winningResult}</span>
        </p>
      </Modal>
    </div>
  );
};

export default Coupon;

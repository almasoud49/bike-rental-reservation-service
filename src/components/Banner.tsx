import { Input, Button, Row, Col } from "antd";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        height: "80vh", 
        position: "relative",
        marginBottom: "40px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
        }}
      ></div>

      {/* Content */}
      <Row justify="center" align="middle" style={{ height: "100%", zIndex: 1 }}>
        <Col>
          <div style={{ textAlign: "center", color: "#fff" }}>
            {/* Search Input */}
            <div style={{ marginBottom: "1.5rem" }}>
              <Input.Search
                placeholder="Search"
                enterButton
                style={{ 
                  width: "400px", 
                  height: "50px", 
                  fontSize: "16px", 
                }}
              />
            </div>
            {/* Heading */}
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
              Hello there
            </h1>
            {/* Description */}
            <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
              Bike rental reservations provide a convenient and efficient way to
              ensure access to bikes when needed, promoting healthier lifestyles and
              supporting sustainable transportation.
            </p>
            {/* Rent Now Button */}
            <Button type="primary" size="large" style={{ backgroundColor: "#00b894" }}>
              Rent Now
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;


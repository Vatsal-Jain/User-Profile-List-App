import React, { useState } from "react";
import "./Card.css";
import {
  MailOutlined,
  PhoneOutlined,
  ChromeOutlined,
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
} from "@ant-design/icons";

import { Modal, Input } from "antd";

function Card({ key, name, address, email, username, phone, website }) {
  const [nameModal, setNameModal] = useState(name);
  const [emailModal, setEmailModal] = useState(email);
  const [phoneModal, setPhoneModal] = useState(phone);
  const [websiteModal, setWebsiteModal] = useState(website);

  const add = username;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="crx">
      <div className="a1" onClick={showModal}>
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/{{${add}}}.svg?options[mood][]=happy`}
          alt="name"
          style={{
            width: "200px",
            objectFit: "contain",
            justifySelf: "center",
          }}
        />
      </div>
      <div className="a2">
        <h3>{name}</h3>
        <span>
          <MailOutlined /> {"   "}
          {email}
        </span>
        <span>
          <PhoneOutlined />
          {"   "}
          {phone}
        </span>
        <span>
          <ChromeOutlined />
          {"   "}
          {website}
        </span>
      </div>
      <div className="footer">
        <div className="footercard">
          <EditOutlined style={{ fontSize: 20, color: "#0f0e0ea9" }} />
          <HeartOutlined style={{ color: "red", fontSize: 20 }} />
          <DeleteFilled style={{ fontSize: 20, color: "#0f0e0ea9" }} />
        </div>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modalright">
          <p>
            Name:{" "}
            <Input
              value={nameModal}
              onChange={(e) => setNameModal(e.target.value)}
            />
          </p>
          <p>
            Email:{" "}
            <Input
              value={emailModal}
              onChange={(e) => setEmailModal(e.target.value)}
            />
          </p>
          <p>
            Phone:{" "}
            <Input
              value={phoneModal}
              onChange={(e) => setPhoneModal(e.target.value)}
            />
          </p>
          <p>
            Website:{" "}
            <Input
              value={websiteModal}
              onChange={(e) => setWebsiteModal(e.target.value)}
            />
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Card;

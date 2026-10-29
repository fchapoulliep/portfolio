/**
 * ContactPage.tsx
 * @file ContactPage.tsx
 * @description ContactPage.tsx is a React component for the contact page of the portfolio website.
 * It is a functional component that returns a div with the class name "contact-page".
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect } from "react";
import "../css/ContactPage.css";
import emailjs from "emailjs-com";

import { Form, Input, Button, message } from "antd";
import { MailOutlined, MessageOutlined } from "@ant-design/icons";

/**
 * Importing services
 */
import handleScrollTop from "../services/scrollToTopService";

import Lines from "./Lines";
import { CONTACT_EMAIL, EMAILJS, MESSAGE_MAX_LENGTH } from "../config";

/**
 * ContactPage component.
 * Renders a contact form and contact information.
 */
const [emailUser, emailDomain] = CONTACT_EMAIL.split("@");

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  /**
   * handleMailSending function
   * @param values values of the form
   */
  const handleMailSending = (values: any) => {
    emailjs
      .send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        EMAILJS.publicKey
      )
      .then(
        (result) => {
          message.success("Votre message a bien été envoyé !");
          form.resetFields();
        },
        (error) => {
          message.error(
            "Une erreur est survenue lors de l'envoi du message : " + error.text
          );
        }
      );
  };

  useEffect(() => {
    handleScrollTop();
  }, []);

  return (
    <div className="contact-page" id="contact-page">
      <Lines />
      <div className="contact-text">
        <h1>
          Mon profil vous intéresse&nbsp;? <br />
          Contactez-moi
        </h1>
        <p>Ensemble, faisons progresser le monde...</p>
        <div className="contact-mail">
          <MailOutlined style={{ fontSize: "150%", margin: "10px" }} />
          <p>
            Envoyez-moi un e-mail à <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>
              {/* Breaks only before the @ when the card is too narrow */}
              <span className="nowrap">{emailUser}</span>
              <wbr />
              <span className="nowrap">@{emailDomain}</span>
            </a>
          </p>
        </div>
      </div>
      <div className="contact-info">
        <h2>
          Envoyez un message ici <MessageOutlined />
        </h2>
        <Form
          form={form}
          onFinish={handleMailSending}
          className="form"
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Nom"
            rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
          >
            <Input placeholder="Votre nom" autoComplete="name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Adresse e-mail"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre adresse e-mail",
              },
              {
                type: "email",
                message: "Veuillez entrer une adresse e-mail valide",
              },
            ]}
          >
            <Input
              type="email"
              placeholder="vous@exemple.fr"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[
              { required: true, message: "Veuillez entrer votre message" },
            ]}
          >
            <Input.TextArea
              placeholder="Votre message"
              maxLength={MESSAGE_MAX_LENGTH}
              showCount
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="form-validation-button"
              type="primary"
              htmlType="submit"
            >
              Envoyer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;

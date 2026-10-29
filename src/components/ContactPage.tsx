/**
 * ContactPage.tsx
 * @file ContactPage.tsx
 * @description ContactPage.tsx is a React component for the contact page of the portfolio website.
 * It is a functional component that returns a div with the class name "contact-page".
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect, useState } from "react";
import "../css/ContactPage.css";
import emailjs from "@emailjs/browser";

import { Form, Input, Button, message } from "antd";
import { MailOutlined, MessageOutlined } from "@ant-design/icons";

/**
 * Importing services
 */
import handleScrollTop from "../services/scrollToTopService";

import Lines from "./Lines";
import {
  CONTACT_EMAIL,
  EMAILJS,
  MESSAGE_MAX_LENGTH,
  SEND_COOLDOWN_MS,
} from "../config";

/**
 * ContactPage component.
 * Renders a contact form and contact information.
 */
const [emailUser, emailDomain] = CONTACT_EMAIL.split("@");

/**
 * Time of the last message sent from this browser. Storage can be missing
 * or blocked (private mode), in which case there is simply no delay.
 */
const LAST_SENT_KEY = "contact-last-sent";

const readLastSent = (): number => {
  try {
    return Number(window.localStorage.getItem(LAST_SENT_KEY)) || 0;
  } catch {
    return 0;
  }
};

const writeLastSent = (time: number) => {
  try {
    window.localStorage.setItem(LAST_SENT_KEY, String(time));
  } catch {
    // Nothing to do: the delay only applies when storage is available
  }
};

interface ContactValues {
  name: string;
  email: string;
  message: string;
  website?: string;
}

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

  /**
   * handleMailSending function
   * @param values values of the form
   */
  const handleMailSending = (values: ContactValues) => {
    // Only bots fill the hidden field: nothing is sent, and nothing tells them so
    if (values.website) {
      message.success("Votre message a bien été envoyé !");
      form.resetFields();
      return;
    }

    const wait = readLastSent() + SEND_COOLDOWN_MS - Date.now();
    if (wait > 0) {
      message.warning(
        `Votre précédent message vient de partir. Merci de patienter encore ${Math.ceil(
          wait / 1000
        )} s avant d'en envoyer un autre.`
      );
      return;
    }

    setSending(true);
    emailjs
      .send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        { publicKey: EMAILJS.publicKey }
      )
      .then(
        () => {
          writeLastSent(Date.now());
          message.success("Votre message a bien été envoyé !");
          form.resetFields();
        },
        (error) => {
          message.error(
            "Une erreur est survenue lors de l'envoi du message : " + error.text
          );
        }
      )
      .finally(() => setSending(false));
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

          {/* Trap for bots: off screen, out of the tab order and hidden from screen readers */}
          <div className="contact-honeypot" aria-hidden="true">
            <Form.Item name="website" label="Site web">
              <Input tabIndex={-1} autoComplete="off" />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              className="form-validation-button"
              type="primary"
              htmlType="submit"
              loading={sending}
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

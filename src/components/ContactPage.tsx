/**
 * ContactPage.tsx
 * @file ContactPage.tsx
 * @description ContactPage.tsx est un composant React pour la page de contact du site portfolio.
 * Il s'agit d'un composant fonctionnel qui retourne une div avec le nom de classe "contact-page".
 */

/**
 * Importation des modules nécessaires pour faire fonctionner le composant
 */
import React from "react";
import "../css/ContactPage.css";
import emailjs from "emailjs-com";

import mail from "../images/email.png";
import { Form, Input, Button, message } from "antd";
import { SunFilled } from "@ant-design/icons";

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  /**
   * Gérer l'envoi du mail
   */
  const handleMailSending = (values: any) => {
    emailjs
      .send(
        "service_73k4ey1",
        "template_k5hn2mp",
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "oBHTiHRivtj8QSy34"
      )
      .then(
        (result) => {
          message.success("Votre message a bien été envoyé !");
          form.resetFields();
        },
        (error) => {
          message.error(
            "Une erreur est survenue lors de l'envoi du message: " + error.text
          );
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-text">
        <h1>Mon profil vous intéresse ? Contactez-moi :</h1>
        <p>
          Ensemble, faisons progresser le monde <SunFilled />
        </p>
        <div className="contact-mail">
          <img src={mail} alt="mail" />
          <p>
            Envoyez-moi un e-mail à <br />
            <a href="mailto:florian.chapoullie-pino@etu.u-bordeaux.fr">
              florian.chapoullie-pino@etu.u-bordeaux.fr
            </a>
          </p>
        </div>
      </div>
      <div className="contact-info">
        <h2>Ou contactez-moi directement ici !</h2>
        <Form
          form={form}
          onFinish={handleMailSending}
          className="form"
          layout="vertical"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
          >
            <Input placeholder="Nom*" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre adresse email",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Mail*" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message :"
            rules={[
              { required: true, message: "Veuillez entrer votre message" },
            ]}
          >
            <Input.TextArea />
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

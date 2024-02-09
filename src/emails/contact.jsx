import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const ContactTemplate = ({ name, email, subject, message }) => (
  <Html>
    <Head />
    <Preview>Contact from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Contact from {name}</Heading>
        <Heading style={heading}>{subject}</Heading>
        <Text style={paragraph}>{message}</Text>        
        <Text style={paragraph}>From: {email}</Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

export default ContactTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};
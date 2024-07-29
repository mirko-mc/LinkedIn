import { Alert } from "react-bootstrap";

export const initialAlertState = {
  isAlert: false,
  heading: "",
  message: "",
  variant: "",
};
export const AlertCustom = ({ inAlert }) => {
  const { heading, message, variant } = inAlert;
  return (
    <Alert variant={variant}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

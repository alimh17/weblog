import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

export const Toast = ({ err, touch }) => {
  const { addToast } = useToasts();

  useEffect(() => {
    addToast(err, {
      appearance: "warning",
      autoDismiss: true,
    });
  }, [touch]);

  return null;
};

import { useAuthenticateModel } from "./model";
import { AuthenticateView } from "./view";

const Authenticate = () => {
  const model = useAuthenticateModel();

  return <AuthenticateView {...model} />;
};

export default Authenticate;

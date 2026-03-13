import helmet from "helmet";

const securityHeaders = helmet({
  contentSecurityPolicy: false
});

export default securityHeaders;
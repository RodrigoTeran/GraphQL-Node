import { server } from "./server";
import "./database";
server.start(
  {
    port: 2500,
  },
  ({ port }) => {
    console.log(`Server on port: ${port}`);
  }
);

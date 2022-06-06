import app from "./app";
import { PORT, ENV } from "./config/environment";

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
};

start();

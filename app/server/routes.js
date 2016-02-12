// Import all routes
import homeRoutes from "./home/home.routes";
import userRoutes from "./users/users.routes";

export default function(app){
  // Define routes on app
  app.use(homeRoutes);
  app.use("/users", userRoutes);
};

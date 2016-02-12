// Import all routes
import homeRoutes from "./home/home.routes";

export default function(app){
  // Define routes on app
  app.use(homeRoutes);
};

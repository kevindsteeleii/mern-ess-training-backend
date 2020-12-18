import { addNewPlayer, getPlayers, deletePlayer, getPlayerById, updatePlayer } from "../controllers/playerControllers";

// import cors from "cors";

const routes = (app) => {
  app.route('/players')
    .post(addNewPlayer)
    .get(getPlayers)
    .delete(deletePlayer);

  app.route('/players/:playerId')
    .get(getPlayerById)
    .put(updatePlayer);
}

export default routes;
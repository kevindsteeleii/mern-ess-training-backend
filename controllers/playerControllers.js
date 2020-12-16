import mongoose from "mongoose";
import PlayerSchema from "../models/playerModel";

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, _player) => {
    if(err) {
      res.send(err);
    }
    res.json(_player);
  })
}

export const getPlayers = (req, res) => {
  Player.find({})
    .then((err, _players) => {
      if(err) {
        res.send(err);
      }
      res.json(_players);
    })
}

export const getPlayerById = (req, res) => {
  Player.findById(req.params.playerId)
    .then((err, _player) => {
      if(err) {
        res.send(err);
      }
      res.json(_player);
    })
}

export const updatePlayer = (req, res) => {
  Player.findOneAndUpdate(req.params.playerId, req.body, {new: true, useFindAndModify: false})
    .then((err, _player) => {
      if(err) {
        res.send(err);
      }
      res.json(_player);
    })
}

export const deletePlayer = (req, res) => {
  Player.deleteOne(req.body)
    .then((err, _player) => {
      if(err) {
        res.send(err);
      }
      res.json(_player);
    })
}
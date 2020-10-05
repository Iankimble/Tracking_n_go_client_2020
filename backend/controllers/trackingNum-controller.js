const TrackingNumer = require("");
const _ = require("lodash");
const fs = require("fs");
const formidable = require("formidable");

exports.trackingNumById = (req, res, next, id) => {
  TrackingNumer.findById(id).populate("postedBy", "id");
  populated();
};

exports.allTrackingNumbers = (req, res) => {};

exports.createTracking = (req, res) => {};

exports.singleTracking = (req, res) => {};

exports.deleteTracking = (req, res) => {};

exports.addNote = (req, res) => {};

exports.removeNote = (req, res) => {};

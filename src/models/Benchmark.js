const mongoose = require('mongoose');

const benchmarkSchema = new mongoose.Schema({
  username: String,
  distro: String,
  processor: String,
  cores: String,
  speeds: String,
  architecture: String,
  mem: String,
  swap: String,
  result: String
}, { timestamps: true });

const Benchmark = mongoose.model('Benchmark', benchmarkSchema);

module.exports = Benchmark;

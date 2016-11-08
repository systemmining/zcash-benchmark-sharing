'use strict';
const _ = require('lodash');
const async = require('async');
const validator = require('validator');
const request = require('request');
const benchmarkModel = require('../models/Benchmark')
const translate = require('../commons/translate')

/**
 * Post /api/v1/benchmark
 * Record benchmark result
 */
exports.postBenchmark = (req, res, next) => {
 const benchmarkData = {
   username: req.username,
   distro: req.distro,
   processor: req.processor,
   cores: req.cores,
   speed: req.speed,
   architecture: req.architecture,
   mem: req.mem,
   swap: req.swap
 }
 
 benchmarkModel.findOneAndUpdate(benchmarkData,benchmarkData, {upsert: true},
  function(err, benchmark){
    if (err) {
        return res.json({success: false, message: translate.errorMessage });   
    }
    
    res.json({success: true, message: translate.successMessage })
  })

};

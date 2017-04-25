const  express     = require("express"),
       app         = express(),
       bodyParser  = require("body-parser"),
       mongoose    = require("mongoose"),
       passport    = require("passport"),
       LocalStrategy = require("passport-local");
       
const  Campground  = require("./models/campground"),
       Comment     = require("./models/comment"),
       User        = require("./models/user"),
       seedDB      = require("./seeds");
    
//requring routes
const commentRoutes    = require("./routes/comments"),
      campgroundRoutes = require("./routes/campgrounds"),
      indexRoutes      = require("./routes/index");
      
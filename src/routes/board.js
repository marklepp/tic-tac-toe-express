var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layout", {
    rows: [
      {
        num: 0,
        cells: [
          { value: "", num: 0 },
          { value: "", num: 1 },
          { value: "", num: 2 },
          { value: "", num: 3 },
          { value: "", num: 4 }
        ]
      },
      {
        num: 1,
        cells: [
          { value: "", num: 0 },
          { value: "", num: 1 },
          { value: "", num: 2 },
          { value: "", num: 3 },
          { value: "", num: 4 }
        ]
      },
      {
        num: 2,
        cells: [
          { value: "", num: 0 },
          { value: "", num: 1 },
          { value: "", num: 2 },
          { value: "", num: 3 },
          { value: "", num: 4 }
        ]
      },
      {
        num: 3,
        cells: [
          { value: "", num: 0 },
          { value: "", num: 1 },
          { value: "", num: 2 },
          { value: "", num: 3 },
          { value: "", num: 4 }
        ]
      },
      {
        num: 4,
        cells: [
          { value: "", num: 0 },
          { value: "", num: 1 },
          { value: "", num: 2 },
          { value: "", num: 3 },
          { value: "", num: 4 }
        ]
      }
    ]
  });
});

module.exports = router;

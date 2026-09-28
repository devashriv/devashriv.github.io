var makerjs = require('makerjs');

function prism(no_of_sides, side_length, height, thk)
{
  var top_face = new makerjs.models.Polygon(no_of_sides,0);
  top_face.origin = 
  var btm_face = new makerjs.models.Polygon(no_of_sides,0);
  //var wall = new makerjs.models.Rectangle(side_length, height);
  var walls = [];
  walls[0] = new makerjs.models.Rectangle(side_length, height);
  for(var i = 1; i<no_of_sides; i++)
  {
    walls[i] = new makerjs.models.Rectangle(side_length, height);
    walls[i].origin = walls[i-1].origin + [side_length, 0];
  }


}

var model = {

  paths: {
    "v": new makerjs.paths.Line([0, 0], [0, 100]),
    "h": new makerjs.paths.Line([0, 0], [100, 0]),
    "arc":new makerjs.paths.Arc([0, 0], 100, 0, 90)
  }

};

var svg = makerjs.exporter.toSVG(model);

document.write(svg);


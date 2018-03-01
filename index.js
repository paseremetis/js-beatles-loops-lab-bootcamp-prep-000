var play = []
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Base Guitar', 'Lead Guitar', 'Drums']
function theBeatlesPlay(musicians, instruments){
  var play = []
  for ( var i = 0; i < musicians.length; i+=4) {
    if (i<musicians.length) {
      musicians.push ('${musicians} plays ${instruments}')
    }else {
      return musicians
    }
    }
}

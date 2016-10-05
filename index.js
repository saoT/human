var humain = {
  tete: {
    nez: {
      narine: 8,
      humer: function (senteur) {

        console.log('je sens du ' + senteur);
      }
    },
    bouche: {
      parler: function (){

      }
    },
    yeux: {
      couleur: 'marron'
    }
  },
  corps: {
    bras: {
      mains: {
        doigts: {},
        paume: {},
        tenir: function () {

        }
      },
      avantBras: {},
      coude: {}
    },
    tronc: {},
    jambes: {}
  }
}

humain.tete.nez.humer('CAFÉ -> dans ma function de humain');
humain.tete.nez.humer('PARFUM -> dans ma function de humain');
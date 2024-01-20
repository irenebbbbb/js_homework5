var myObject = {
    movieName: "House of the Dragon",
    mainCharacter: 'Rhaenyra Targaryen',
    mainCharacterAdress: "Dragon Stone",
    antagonist: "Aegon Targaryen",
    antagonistAdress: "King's Landing",
    
    getInfo: function () {
      for (var key in this) {
        if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
          console.log(key + ": " + this[key]);
        }
      }
    },
  };
  
  console.log('About movie');
  myObject.getInfo();
  

  myObject.mainPet = 'Dragon';
  console.log('\nAbout movie (updated)');
  myObject.getInfo();
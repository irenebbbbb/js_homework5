var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  };

  services['Розбити скло'] = "200 грн";
  
  services.price = function () {
    let totalPrice = 0;
  
    for (let service in this) {
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
        totalPrice += parseInt(this[service]);
      }
    }
  
    return totalPrice;
  };
  
  services.minPrice = function () {
    let minPrice = Infinity;
  
    for (let service in this) {
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
        minPrice = Math.min(minPrice, parseInt(this[service]));
      }
    }
  
    return minPrice === Infinity ? 0 : minPrice;
  };
  
  services.maxPrice = function () {
    let maxPrice = 0;
  
    for (let service in this) {
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
        maxPrice = Math.max(maxPrice, parseInt(this[service]));
      }
    }
  
    return maxPrice;
  };
  
  console.log("Загальна вартість послуг:", services.price());
  console.log("Мінімальна вартість послуг:", services.minPrice());
  console.log("Максимальна вартість послуг:", services.maxPrice());
// Fetch driver data
fetch('data/drivers.json')
  .then(res => res.json())
  .then(drivers => {
    const driverList = document.getElementById('driver-list');
    if(driverList){
      drivers.forEach(driver => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="driver.html?name=${encodeURIComponent(driver.name)}">${driver.name}</a>`;
        driverList.appendChild(li);
      });
    }

    // Load individual driver page
    if(document.getElementById('driver-name')){
      const params = new URLSearchParams(window.location.search);
      const name = params.get('name');
      const driver = drivers.find(d => d.name === name);
      if(driver){
        document.getElementById('driver-name').textContent = driver.name;
        document.getElementById('birthdate').textContent = driver.birthdate;
        document.getElementById('debut').textContent = driver.debut;
        document.getElementById('team').textContent = driver.team;
        document.getElementById('nationality').textContent = driver.nationality;
      }
    }
  });

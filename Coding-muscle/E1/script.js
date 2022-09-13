"partners"; [
  {
    "firstName": "Darin",
    "lastName": "Daignault",
    "email": "ddaignault@hubspotpartners.com",
    "country": "United States",
    "availableDates": [
    "2017-05-03",
    "2017-05-06"
    ]
  },
  {
    "firstName": "Crystal",
    "lastName": "Brenna",
    "email": "cbrenna@hubspotpartners.com",
    "country": "Ireland",
    "availableDates": [
    "2017-04-27",
    "2017-04-29",
    "2017-04-30"
    ]
  },
  {
    "firstName": "Janyce",
    "lastName": "Gustison",
    "email": "jgustison@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-29",
    "2017-04-30",
    "2017-05-01"
    ]
  },
  {
    "firstName": "Tifany",
    "lastName": "Mozie",
    "email": "tmozie@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-28",
    "2017-04-29",
    "2017-05-01",
    "2017-05-04"
    ]
  },
];
//From below array need to find out list of partners from each country  that can attend the event on any two consecutive days.
let res = {};
for(let partner of partners) {
    // Ensure days are sorted
    let days = partner.availableDates.sort((a,b) => { return new Date(a) - new Date(b)});
    let consecutiveDays = false;

    for(let i = 0; i < days.length - 1; i++) {
        if((new Date(days[i + 1]) - new Date(days[i])) >= 86400000) {
            consecutiveDays = true;
            break;
        }
    }

    if(consecutiveDays) {
        res[partner.country] = res[partner.country] + 1 || 1;  
    }
}

return res;
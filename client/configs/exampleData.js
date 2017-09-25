const FlightDataExample = {
 "scheduledFlights": [
  {
   "carrierFsCode": "UA",
   "flightNumber": "547",
   "departureAirportFsCode": "ORD",
   "arrivalAirportFsCode": "OMA",
   "stops": 0,
   "departureTerminal": "1",
   "departureTime": "2017-09-25T08:59:00.000",
   "arrivalTime": "2017-09-25T10:36:00.000",
   "flightEquipmentIataCode": "319",
   "isCodeshare": false,
   "isWetlease": false,
   "serviceType": "J",
   "serviceClasses": [
    "F",
    "J",
    "Y"
   ],
   "trafficRestrictions": [],
   "codeshares": [
    {
     "carrierFsCode": "SK",
     "flightNumber": "8857",
     "serviceType": "J",
     "serviceClasses": [
      "F",
      "J",
      "Y"
     ],
     "trafficRestrictions": [
      "G"
     ],
     "referenceCode": 11294933
    },
    {
     "carrierFsCode": "AC",
     "flightNumber": "5000",
     "serviceType": "J",
     "serviceClasses": [
      "F",
      "J",
      "Y"
     ],
     "trafficRestrictions": [
      "G"
     ],
     "referenceCode": 11294934
    }
   ],
   "referenceCode": "258-2993861--"
  },
  {
   "carrierFsCode": "UA",
   "flightNumber": "547",
   "departureAirportFsCode": "YYZ",
   "arrivalAirportFsCode": "ORD",
   "stops": 0,
   "departureTerminal": "1",
   "arrivalTerminal": "1",
   "departureTime": "2017-09-25T07:00:00.000",
   "arrivalTime": "2017-09-25T07:51:00.000",
   "flightEquipmentIataCode": "739",
   "isCodeshare": false,
   "isWetlease": false,
   "serviceType": "J",
   "serviceClasses": [
    "F",
    "J",
    "Y"
   ],
   "trafficRestrictions": [],
   "codeshares": [
    {
     "carrierFsCode": "EI",
     "flightNumber": "6427",
     "serviceType": "J",
     "serviceClasses": [
      "R",
      "F",
      "J",
      "Y"
     ],
     "trafficRestrictions": [
      "Q"
     ],
     "referenceCode": 11759561
    },
    {
     "carrierFsCode": "AC",
     "flightNumber": "5141",
     "serviceType": "J",
     "serviceClasses": [
      "F",
      "J",
      "Y"
     ],
     "trafficRestrictions": [],
     "referenceCode": 11759562
    }
   ],
   "referenceCode": "258-4216918--"
  }
 ],
  "airlines": [
   {
    "fs": "AC",
    "iata": "AC",
    "icao": "ACA",
    "name": "Air Canada",
    "phoneNumber": "1-888-422-7533",
    "active": true
   },
   {
    "fs": "EI",
    "iata": "EI",
    "icao": "EIN",
    "name": "Aer Lingus",
    "phoneNumber": "1-800-IRISHAIR",
    "active": true
   },
   {
    "fs": "UA",
    "iata": "UA",
    "icao": "UAL",
    "name": "United Airlines",
    "phoneNumber": "1-800-864-8331",
    "active": true
   },
   {
    "fs": "SK",
    "iata": "SK",
    "icao": "SAS",
    "name": "SAS",
    "phoneNumber": "+1 800-221 2350",
    "active": true
   }
  ],
  "airports": [
   {
    "fs": "ORD",
    "iata": "ORD",
    "icao": "KORD",
    "faa": "ORD",
    "name": "O'Hare International Airport",
    "street1": "10000 West O'Hare",
    "city": "Chicago",
    "cityCode": "CHI",
    "stateCode": "IL",
    "postalCode": "60666",
    "countryCode": "US",
    "countryName": "United States",
    "regionName": "North America",
    "timeZoneRegionName": "America/Chicago",
    "weatherZone": "ILZ014",
    "localTime": "2017-09-25T06:17:47.419",
    "utcOffsetHours": -5,
    "latitude": 41.976912,
    "longitude": -87.904876,
    "elevationFeet": 668,
    "classification": 1,
    "active": true
   },
   {
    "fs": "OMA",
    "iata": "OMA",
    "icao": "KOMA",
    "faa": "OMA",
    "name": "Eppley Airfield",
    "street1": "",
    "street2": "",
    "city": "Omaha",
    "cityCode": "OMA",
    "stateCode": "NE",
    "postalCode": "68110",
    "countryCode": "US",
    "countryName": "United States",
    "regionName": "North America",
    "timeZoneRegionName": "America/Chicago",
    "weatherZone": "NEZ052",
    "localTime": "2017-09-25T06:17:47.419",
    "utcOffsetHours": -5,
    "latitude": 41.29957,
    "longitude": -95.899717,
    "elevationFeet": 984,
    "classification": 2,
    "active": true
   },
   {
    "fs": "YYZ",
    "iata": "YYZ",
    "icao": "CYYZ",
    "name": "Pearson International Airport",
    "street1": "",
    "street2": "",
    "city": "Toronto",
    "cityCode": "YTO",
    "stateCode": "ON",
    "postalCode": "L5P 1B2",
    "countryCode": "CA",
    "countryName": "Canada",
    "regionName": "North America",
    "timeZoneRegionName": "America/Toronto",
    "localTime": "2017-09-25T07:17:47.419",
    "utcOffsetHours": -4,
    "latitude": 43.681585,
    "longitude": -79.61146,
    "elevationFeet": 569,
    "classification": 1,
    "active": true
   }
  ],
  "equipments": [
   {
    "iata": "319",
    "name": "Airbus A319",
    "turboProp": false,
    "jet": true,
    "widebody": false,
    "regional": false
   },
   {
    "iata": "739",
    "name": "Boeing 737-900 Passenger",
    "turboProp": false,
    "jet": true,
    "widebody": false,
    "regional": false
   }
  ]
}

export default FlightDataExample;

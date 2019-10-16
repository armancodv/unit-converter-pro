# Unit Converter
It is a npm package for converting units, including: Angle, Area, Bits, Density, ElectricCurrent, Energy, Force, Length, Mass, Power, Pressure, Speed, Temperature, Time, and Volume.

## Install
```
npm install unit-converter-pro
```

## How to use
### Import
This line of code should be added at the begin of the code.
```js
const Convert = require('unit-converter-pro');
```

---

### Angle
The following code converts angle in radian to degree:
```js
angle = new Convert.Angle();
console.log(angle.radian(Math.PI).degree());
```

The first one (in this case `radian`) is the input which recieve the value, and the second one (in this case `degree`) is the output.

The following units can be replaced to `radian` and `degree` in above.
| Angle Unit |
| --- |
| arcminute |
| arcsecond |
| circle |
| degree |
| gon |
| grad |
| milNato |
| milSovietUnion |
| milSweden |
| octant |
| quadrant |
| radian |
| revolution |
| sextant |
| sign |
| turn |

---

### Area
```js
area = new Convert.Area();
console.log(area.squareMeters(1).squareInches());
```

| Area Unit |
| --- |
| acres |
| ares |
| circularInches |
| hectares |
| hides |
| roods |
| squareCentimeters |
| squareFeetUSUK |
| squareFeetUSSurvey |
| squareInches |
| squareKilometers |
| squareMeters |
| squareMiles |
| squareMillimeters |
| squaresOfTimber |
| squareRodsOrPoles |
| squareYards |
| townships |

---

### Bits
```js
bits = new Convert.Bits();
console.log(bits.kilobytes(20).bits());
```

| Bits Unit |
| --- |
| bits |
| bytes |
| kilobits |
| kilobytes |
| megabits |
| megabytes |
| gigabits |
| gigabytes |
| terabits |
| terabytes |
| petabits |
| petabytes |
| exabits |
| exabytes |

---

### Density
```js
density = new Convert.Density();
console.log(density.kilogramsCubicMeters(1).poundsCubicInch());
```

| Density Unit |
| --- |
| grainsGallonUK |
| grainsGallonUS |
| gramsCubicCentimeters |
| gramsLiter |
| gramsMilliliters |
| kilogramsCubicMeters |
| kilogramsLiter |
| megagramsCubicMeter |
| milligramsMilliliter |
| milligramsLiter |
| ouncesCubicInch |
| ouncesGallonUK |
| ouncesGallonUS |
| poundsCubicInch |
| poundsCubicFoot |
| poundsGallonUK |
| poundsGallonUS |
| slugsCubicFoot |
| tonnesCubicMeter |
| tonsUKCubicYard |
| tonsUSCubicYard |

---

### ElectricCurrent
```js
electricCurrent = new Convert.ElectricCurrent();
console.log(electricCurrent.ampere(1).gilbert());
```

| Current Unit |
| --- |
| abampere |
| ampere |
| biot |
| centiampere |
| coulombSecond |
| EMUOfCurrent |
| ESUOfCurrent |
| franklinSecond |
| gaussianElectricCurrent |
| gigaampere |
| gilbert |
| kiloampere |
| megaampere |
| microampere |
| milliampere |
| milliamp |
| nanoampere |
| picoampere |
| siemensVolt |
| statampere |
| teraampere |
| voltOhm |
| wattVolt |
| weberHenry |

---

### Energy
```js
energy = new Convert.Energy();
console.log(energy.joules(100).wattHours());
```

| Energy Unit |
| --- |
| btuTh |
| btuMean |
| caloriesIT |
| caloriesTh |
| caloriesMean |
| calories15C |
| calories20C |
| caloriesFood |
| centigradeHeatUnits |
| dutchNaturalGas |
| electronVolts |
| ergs |
| footPoundForce |
| footPoundals |
| gasolineL |
| gigajoules |
| horsepowerHours |
| inchPoundForce |
| joules |
| kilocaloriesIT |
| kilocaloriesTh |
| kilogramForceMeters |
| kilojoules |
| kilowattHours |
| megajoules |
| newtonMeters |
| petajoules |
| terajoules |
| therms |
| wattSeconds |
| wattHours |

---

### Force
```js
force = new Convert.Force();
console.log(force.newtons(20).poundsForce());
```

| Force Unit |
| --- |
| dynes |
| kilogramsForce |
| kilonewtons |
| kips |
| meganewtons |
| newtons |
| poundsForce |
| poundals |
| sthane |
| tonnesForce |
| tonsForceUK |
| tonsForceUS |

---

### Length
```js
length = new Convert.Length();
console.log(length.inches(1000).lightYears());
```

| Length Unit |
| --- |
| angstroms |
| astronomicalUnits |
| barleycorns |
| cables |
| centimeters |
| chainsSurveyors |
| decimeters |
| ellsUK |
| emsPica |
| fathoms |
| feetUKUS |
| feetUSSurvey |
| furlongs |
| hands |
| hectometers |
| inches |
| kilometers |
| lightYears |
| meters |
| micrometers |
| mil |
| milesUKUS |
| milesNauticalInternational |
| milesNauticalUK |
| millimeters |
| nanometers |
| parsecs |
| picometers |
| scandinavianMile |
| thou |
| yards |

---

### Mass
```js
mass = new Convert.Mass();
console.log(mass.grams(200).poundsUSUK());
```

| Mass Unit |
| --- |
| caratsMetric |
| cental |
| decagrams |
| earthMasses |
| femtograms |
| grains |
| grams |
| hectograms |
| hundredweights |
| kilograms |
| kilotonnes |
| megatonnes |
| micrograms |
| milligrams |
| nanograms |
| ouncesUSUK |
| ouncesTroyPreciousMetals |
| picograms |
| poundsUSUK |
| poundsTroyPreciousMetals |
| SolarMasses |
| slugsGPounds |
| stones |
| tonsUKLong |
| tonsUSShort |
| tonnesMetric |

---

### Power
```js
power = new Convert.Power();
console.log(power.watts(20).horsepowersInternational());
```

| Power Unit |
| --- |
| BtuHour |
| BtuMinute |
| BtuSecond |
| caloriesThHour |
| caloriesThMinute |
| caloriesThSecond |
| footPoundsForceMinute |
| footPoundsForceSecond |
| gigawatts |
| horsepowersElectric |
| horsepowersInternational |
| horsepowersWater |
| horsepowersMetric |
| watts |
| joulesHour |
| joulesMinute |
| joulesSecond |
| kilocaloriesThHour |
| kilocaloriesThMinute |
| kilogramForceMetersHour |
| kilogramForceMetersMinute |
| kilowatts |
| megawatts |
| terawatts |
| tonOfRefrigeration |
| petawatts |

---

### Pressure
```js
pressure = new Convert.Pressure();
console.log(pressure.pascals(20).millimetersOfMercury());
```

| Pressure Unit |
| --- |
| atmospheres |
| bars |
| centimetersMercury |
| centimetersWater |
| feetOfWater |
| hectopascals |
| inchesOfWater |
| inchesOfMercury |
| kilogramForcesSqCentimeter |
| kilogramForcesSqMeter |
| kilonewtonsSqMeter |
| kilonewtonsSqMillimeter |
| kilopascals |
| kipsSqInch |
| meganewtonsSqMeter |
| meganewtonsSqMillimeter |
| megapascals |
| metersOfWater |
| millibars |
| millimetersOfMercury |
| millimetersOfWater |
| newtonsSqCentimeter |
| newtonsSqMeter |
| newtonsSqMillimeter |
| pascals |
| poundsForceSqFoot |
| poundsForceSqInch |
| poundalsSqFoot |
| tonsUKForceSqFoot |
| tonsUKForceSqInch |
| tonsUSForceSqFoot |
| tonsUSForceSqInch |
| tonnesForceSqCm |
| tonnesForceSqMeter |
| torr |

---

### Speed
```js
speed = new Convert.Speed();
console.log(speed.metersSecond(20).milesHour());
```

| Speed Unit |
| --- |
| centimetersMinute |
| centimetersSecond |
| feetHour |
| feetMinute |
| feetSecond |
| inchesMinute |
| inchesSecond |
| kilometersHour |
| kilometersSecond |
| knots |
| machNumber |
| metersHour |
| metersMinute |
| metersSecond |
| milesHour |
| milesMinute |
| milesSecond |
| nauticalMilesHour |
| mm24Hr |
| speedOfLight |
| speedOfSound |
| yardsHour |
| yardsMinute |
| yardsSecond |

---

### Temperature
```js
temperature = new Convert.Temperature();
console.log(temperature.celsius(20).fahrenheit());
```

| Temperature Unit |
| --- |
| celsius |
| kelvin |
| fahrenheit |
| rankine |
| reaumur |

---

### Time
```js
time = new Convert.Time();
console.log(time.weeks(20).hours());
```

| Time Unit |
| --- |
| centuries |
| days |
| decades |
| femtoseconds |
| fortnights |
| hours |
| microseconds |
| millenia |
| milliseconds |
| minutes |
| monthsCommon |
| monthsSynodic |
| nanoseconds |
| picoseconds |
| quartersCommon |
| seconds |
| shakes |
| weeks |
| yearsCommon |
| yearsAverageGregorian |
| yearsJulian |
| yearsLeap |
| yearsTropical |

---

### Volume
```js
volume = new Convert.Volume();
console.log(volume.cubicInches(20).cubicCentimeters());
```

| Volume Unit |
| --- |
| acreFoot |
| barrelsOil |
| bushelsUK |
| bushelsUS |
| centiliters |
| cubicCentimeters |
| cubicDecimeters |
| cubicDecameters |
| cubicFeet |
| cubicInches |
| cubicKilometers |
| cubicMeters |
| cubicMile |
| cubicMillimeters |
| cubicYards |
| cups |
| deciliters |
| dramImperial |
| dramUS |
| fluidOuncesImperial |
| fluidOuncesUS |
| gallonsImperial |
| gallonsDryUS |
| gallonsLiquidUS |
| gillImperial |
| gillUS |
| kiloliters |
| liters |
| liters1901to1964 |
| milliliters |
| microliters |
| nanoliters |
| picoliters |
| pintsImperial |
| pintsDryUS |
| pintsLiquidUS |
| quartsImperial |
| quartsDryUS |
| quartsLiquidUS |
| tableSpoons |
| teaSpoons |

// Import
const Convert = require('../index');

// Angle
angle = new Convert.Angle();
console.log(angle.radian(Math.PI).degree());

// Area
area = new Convert.Area();
console.log(area.squareMeters(1).squareInches());

// Bits
bits = new Convert.Bits();
console.log(bits.kilobytes(20).bits());

// Density
density = new Convert.Density();
console.log(density.kilogramsCubicMeters(1).poundsCubicInch());

// ElectricCurrent
electricCurrent = new Convert.ElectricCurrent();
console.log(electricCurrent.ampere(1).gilbert());

// Energy
energy = new Convert.Energy();
console.log(energy.joules(100).wattHours());

// Force
force = new Convert.Force();
console.log(force.newtons(20).poundsForce());

// Length
length = new Convert.Length();
console.log(length.inches(1000).lightYears());

// Mass
mass = new Convert.Mass();
console.log(mass.grams(200).poundsUSUK());

// Power
power = new Convert.Power();
console.log(power.watts(20).horsepowersInternational());

// Pressure
pressure = new Convert.Pressure();
console.log(pressure.pascals(20).millimetersOfMercury());

// Speed
speed = new Convert.Speed();
console.log(speed.metersSecond(20).milesHour());

// Temperature
temperature = new Convert.Temperature();
console.log(temperature.celsius(20).fahrenheit());

// Time
time = new Convert.Time();
console.log(time.weeks(20).hours());

// Volume
volume = new Convert.Volume();
console.log(volume.cubicInches(20).cubicCentimeters());
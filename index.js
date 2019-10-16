class Angle {
    constructor() {
        this.value = 0;
        this.factor = {
            arcminute: 1 / (360 * 60),
            arcsecond: 1 / (360 * 3600),
            circle: 1,
            degree: 1 / 360,
            gon: 1 / 400,
            grad: 1 / 400,
            milNato: 1 / 6400,
            milSovietUnion: 1 / 6000,
            milSweden: 1 / 6300,
            octant: 1 / 8,
            quadrant: 1 / 4,
            radian: 1 / (2 * Math.PI),
            revolution: 1,
            sextant: 1 / 6,
            sign: 1 / 12,
            turn: 1
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }

    arcminute(value) {
        return this.calculate('arcminute', value);
    }
    arcsecond(value) {
        return this.calculate('arcsecond', value);
    }
    circle(value) {
        return this.calculate('circle', value);
    }
    degree(value) {
        return this.calculate('degree', value);
    }
    gon(value) {
        return this.calculate('gon', value);
    }
    grad(value) {
        return this.calculate('grad', value);
    }
    milNato(value) {
        return this.calculate('milNato', value);
    }
    milSovietUnion(value) {
        return this.calculate('milSovietUnion', value);
    }
    milSweden(value) {
        return this.calculate('milSweden', value);
    }
    octant(value) {
        return this.calculate('octant', value);
    }
    quadrant(value) {
        return this.calculate('quadrant', value);
    }
    radian(value) {
        return this.calculate('radian', value);
    }
    revolution(value) {
        return this.calculate('revolution', value);
    }
    sextant(value) {
        return this.calculate('sextant', value);
    }
    sign(value) {
        return this.calculate('sign', value);
    }
    turn(value) {
        return this.calculate('turn', value);
    }
}

class Area {
    constructor() {
        this.value = 0;
        this.factor = {
            acres: 4046.8564224,
            ares: 100,
            circularInches: 0.000506707479,
            hectares: 1e4,
            hides: 485000,
            roods: 1011.7141056,
            squareCentimeters: 1e-4,
            squareFeetUSUK: 0.09290304,
            squareFeetUSSurvey: 0.092903411613,
            squareInches: 0.00064516,
            squareKilometers: 1e6,
            squareMeters: 1,
            squareMiles: 2589988.110336,
            squareMillimeters: 1e-6,
            squaresOfTimber: 9.290304,
            squareRodsOrPoles: 25.29285264,
            squareYards: 0.83612736,
            townships: 93239571.972
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    acres(value) {
        return this.calculate('acres', value);
    }
    ares(value) {
        return this.calculate('ares', value);
    }
    circularInches(value) {
        return this.calculate('circularInches', value);
    }
    hectares(value) {
        return this.calculate('hectares', value);
    }
    hides(value) {
        return this.calculate('hides', value);
    }
    roods(value) {
        return this.calculate('roods', value);
    }
    squareCentimeters(value) {
        return this.calculate('squareCentimeters', value);
    }
    squareFeetUSUK(value) {
        return this.calculate('squareFeetUSUK', value);
    }
    squareFeetUSSurvey(value) {
        return this.calculate('squareFeetUSSurvey', value);
    }
    squareInches(value) {
        return this.calculate('squareInches', value);
    }
    squareKilometers(value) {
        return this.calculate('squareKilometers', value);
    }
    squareMeters(value) {
        return this.calculate('squareMeters', value);
    }
    squareMiles(value) {
        return this.calculate('squareMiles', value);
    }
    squareMillimeters(value) {
        return this.calculate('squareMillimeters', value);
    }
    squaresOfTimber(value) {
        return this.calculate('squaresOfTimber', value);
    }
    squareRodsOrPoles(value) {
        return this.calculate('squareRodsOrPoles', value);
    }
    squareYards(value) {
        return this.calculate('squareYards', value);
    }
    townships(value) {
        return this.calculate('townships', value);
    }
}

class Bits {
    constructor() {
        this.value = 0;
        this.factor = {
            bits: 0.125,
            bytes: 1,
            kilobits: 128,
            kilobytes: 1024,
            megabits: 131072,
            megabytes: 1048576,
            gigabits: 134217728,
            gigabytes: 1073741824,
            terabits: 137438953472,
            terabytes: 1099511627776,
            petabits: 140737488355328,
            petabytes: 1125899906842624,
            exabits: 144115188075855872,
            exabytes: 1152921504606846976
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    bits(value) {
        return this.calculate('bits', value);
    }
    bytes(value) {
        return this.calculate('bytes', value);
    }
    kilobits(value) {
        return this.calculate('kilobits', value);
    }
    kilobytes(value) {
        return this.calculate('kilobytes', value);
    }
    megabits(value) {
        return this.calculate('megabits', value);
    }
    megabytes(value) {
        return this.calculate('megabytes', value);
    }
    gigabits(value) {
        return this.calculate('gigabits', value);
    }
    gigabytes(value) {
        return this.calculate('gigabytes', value);
    }
    terabits(value) {
        return this.calculate('terabits', value);
    }
    terabytes(value) {
        return this.calculate('terabytes', value);
    }
    petabits(value) {
        return this.calculate('petabits', value);
    }
    petabytes(value) {
        return this.calculate('petabytes', value);
    }
    exabits(value) {
        return this.calculate('exabits', value);
    }
    exabytes(value) {
        return this.calculate('exabytes', value);
    }
}

class Density {
    constructor() {
        this.value = 0;
        this.factor = {
            grainsGallonUK: 0.000014253948343691203,
            grainsGallonUS: 0.000017118011571775823,
            gramsCubicCentimeters: 1,
            gramsLiter: 1e-3,
            gramsMilliliters: 1,
            kilogramsCubicMeters: 1e-3,
            kilogramsLiter: 1,
            megagramsCubicMeter: 1,
            milligramsMilliliter: 1e-3,
            milligramsLiter: 1e-6,
            ouncesCubicInch: 1.729994044,
            ouncesGallonUK: 0.006236023,
            ouncesGallonUS: 0.007489152,
            poundsCubicInch: 27.679904,
            poundsCubicFoot: 0.016018463,
            poundsGallonUK: 0.099776373,
            poundsGallonUS: 0.119826427,
            slugsCubicFoot: 0.51531788206,
            tonnesCubicMeter: 1,
            tonsUKCubicYard: 1.328939184,
            tonsUSCubicYard: 1.186552843
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    grainsGallonUK(value) {
        return this.calculate('grainsGallonUK', value);
    }
    grainsGallonUS(value) {
        return this.calculate('grainsGallonUS', value);
    }
    gramsCubicCentimeters(value) {
        return this.calculate('gramsCubicCentimeters', value);
    }
    gramsLiter(value) {
        return this.calculate('gramsLiter', value);
    }
    gramsMilliliters(value) {
        return this.calculate('gramsMilliliters', value);
    }
    kilogramsCubicMeters(value) {
        return this.calculate('kilogramsCubicMeters', value);
    }
    kilogramsLiter(value) {
        return this.calculate('kilogramsLiter', value);
    }
    megagramsCubicMeter(value) {
        return this.calculate('megagramsCubicMeter', value);
    }
    milligramsMilliliter(value) {
        return this.calculate('milligramsMilliliter', value);
    }
    milligramsLiter(value) {
        return this.calculate('milligramsLiter', value);
    }
    ouncesCubicInch(value) {
        return this.calculate('ouncesCubicInch', value);
    }
    ouncesGallonUK(value) {
        return this.calculate('ouncesGallonUK', value);
    }
    ouncesGallonUS(value) {
        return this.calculate('ouncesGallonUS', value);
    }
    poundsCubicInch(value) {
        return this.calculate('poundsCubicInch', value);
    }
    poundsCubicFoot(value) {
        return this.calculate('poundsCubicFoot', value);
    }
    poundsGallonUK(value) {
        return this.calculate('poundsGallonUK', value);
    }
    poundsGallonUS(value) {
        return this.calculate('poundsGallonUS', value);
    }
    slugsCubicFoot(value) {
        return this.calculate('slugsCubicFoot', value);
    }
    tonnesCubicMeter(value) {
        return this.calculate('tonnesCubicMeter', value);
    }
    tonsUKCubicYard(value) {
        return this.calculate('tonsUKCubicYard', value);
    }
    tonsUSCubicYard(value) {
        return this.calculate('tonsUSCubicYard', value);
    }
}

class ElectricCurrent {
    constructor() {
        this.value = 0;
        this.factor = {
            abampere: 10,
            ampere: 1,
            biot: 10,
            centiampere: 0.01,
            coulombSecond: 1,
            EMUOfCurrent: 10,
            ESUOfCurrent: 3.335641e-10,
            franklinSecond: 3.335641e-10,
            gaussianElectricCurrent: 3.335641e-10,
            gigaampere: 1e+9,
            gilbert: 0.79577472,
            kiloampere: 1e3,
            megaampere: 1e6,
            microampere: 1e-6,
            milliampere: 1e-3,
            milliamp: 1e-3,
            nanoampere: 1e-9,
            picoampere: 1e-12,
            siemensVolt: 1,
            statampere: 3.335641e-10,
            teraampere: 1e+12,
            voltOhm: 1,
            wattVolt: 1,
            weberHenry: 1
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    abampere(value) {
        return this.calculate('abampere', value);
    }
    ampere(value) {
        return this.calculate('ampere', value);
    }
    biot(value) {
        return this.calculate('biot', value);
    }
    centiampere(value) {
        return this.calculate('centiampere', value);
    }
    coulombSecond(value) {
        return this.calculate('coulombSecond', value);
    }
    EMUOfCurrent(value) {
        return this.calculate('EMUOfCurrent', value);
    }
    ESUOfCurrent(value) {
        return this.calculate('ESUOfCurrent', value);
    }
    franklinSecond(value) {
        return this.calculate('franklinSecond', value);
    }
    gaussianElectricCurrent(value) {
        return this.calculate('gaussianElectricCurrent', value);
    }
    gigaampere(value) {
        return this.calculate('gigaampere', value);
    }
    gilbert(value) {
        return this.calculate('gilbert', value);
    }
    kiloampere(value) {
        return this.calculate('kiloampere', value);
    }
    megaampere(value) {
        return this.calculate('megaampere', value);
    }
    microampere(value) {
        return this.calculate('microampere', value);
    }
    milliampere(value) {
        return this.calculate('milliampere', value);
    }
    milliamp(value) {
        return this.calculate('milliamp', value);
    }
    nanoampere(value) {
        return this.calculate('nanoampere', value);
    }
    picoampere(value) {
        return this.calculate('picoampere', value);
    }
    siemensVolt(value) {
        return this.calculate('siemensVolt', value);
    }
    statampere(value) {
        return this.calculate('statampere', value);
    }
    teraampere(value) {
        return this.calculate('teraampere', value);
    }
    voltOhm(value) {
        return this.calculate('voltOhm', value);
    }
    wattVolt(value) {
        return this.calculate('wattVolt', value);
    }
    weberHenry(value) {
        return this.calculate('weberHenry', value);
    }
}

class Energy {
    constructor() {
        this.value = 0;
        this.factor = {
            btuTh: 1054.350,
            btuMean: 1055.87,
            caloriesIT: 4.1868,
            caloriesTh: 4.184,
            caloriesMean: 4.19002,
            calories15C: 4.18580,
            calories20C: 4.18190,
            caloriesFood: 4186,
            centigradeHeatUnits: 1900.4,
            dutchNaturalGas: 31650000,
            electronVolts: 1.60219e-19,
            ergs: 1e-7,
            footPoundForce: 1.3558179483314004,
            footPoundals: 0.042140,
            gasolineL: 34200000,
            gigajoules: 1e9,
            horsepowerHours: 2684520,
            inchPoundForce: 0.11298482902761668,
            joules: 1,
            kilocaloriesIT: 4186.8,
            kilocaloriesTh: 4184,
            kilogramForceMeters: 9.80665,
            kilojoules: 1e3,
            kilowattHours: 3600000,
            megajoules: 1e6,
            newtonMeters: 1,
            petajoules: 1e15,
            terajoules: 1e12,
            therms: 105505585.257348,
            wattSeconds: 1,
            wattHours: 3600
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    btuTh(value) {
        return this.calculate('btuTh', value);
    }
    btuMean(value) {
        return this.calculate('btuMean', value);
    }
    caloriesIT(value) {
        return this.calculate('caloriesIT', value);
    }
    caloriesTh(value) {
        return this.calculate('caloriesTh', value);
    }
    caloriesMean(value) {
        return this.calculate('caloriesMean', value);
    }
    calories15C(value) {
        return this.calculate('calories15C', value);
    }
    calories20C(value) {
        return this.calculate('calories20C', value);
    }
    caloriesFood(value) {
        return this.calculate('caloriesFood', value);
    }
    centigradeHeatUnits(value) {
        return this.calculate('centigradeHeatUnits', value);
    }
    dutchNaturalGas(value) {
        return this.calculate('dutchNaturalGas', value);
    }
    electronVolts(value) {
        return this.calculate('electronVolts', value);
    }
    ergs(value) {
        return this.calculate('ergs', value);
    }
    footPoundForce(value) {
        return this.calculate('footPoundForce', value);
    }
    footPoundals(value) {
        return this.calculate('footPoundals', value);
    }
    gasolineL(value) {
        return this.calculate('gasolineL', value);
    }
    gigajoules(value) {
        return this.calculate('gigajoules', value);
    }
    horsepowerHours(value) {
        return this.calculate('horsepowerHours', value);
    }
    inchPoundForce(value) {
        return this.calculate('inchPoundForce', value);
    }
    joules(value) {
        return this.calculate('joules', value);
    }
    kilocaloriesIT(value) {
        return this.calculate('kilocaloriesIT', value);
    }
    kilocaloriesTh(value) {
        return this.calculate('kilocaloriesTh', value);
    }
    kilogramForceMeters(value) {
        return this.calculate('kilogramForceMeters', value);
    }
    kilojoules(value) {
        return this.calculate('kilojoules', value);
    }
    kilowattHours(value) {
        return this.calculate('kilowattHours', value);
    }
    megajoules(value) {
        return this.calculate('megajoules', value);
    }
    newtonMeters(value) {
        return this.calculate('newtonMeters', value);
    }
    petajoules(value) {
        return this.calculate('petajoules', value);
    }
    terajoules(value) {
        return this.calculate('terajoules', value);
    }
    therms(value) {
        return this.calculate('therms', value);
    }
    wattSeconds(value) {
        return this.calculate('wattSeconds', value);
    }
    wattHours(value) {
        return this.calculate('wattHours', value);
    }
}

class Force {
    constructor() {
        this.value = 0;
        this.factor = {
            dynes: 1e-5,
            kilogramsForce: 9.80665,
            kilonewtons: 1000,
            kips: 4448.222,
            meganewtons: 1e6,
            newtons: 1,
            poundsForce: 4.4482216152605,
            poundals: 0.138255,
            sthane: 1000,
            tonnesForce: 9806.65,
            tonsForceUK: 9964.01641818352,
            tonsForceUS: 8896.443230521
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    dynes(value) {
        return this.calculate('dynes', value);
    }
    kilogramsForce(value) {
        return this.calculate('kilogramsForce', value);
    }
    kilonewtons(value) {
        return this.calculate('kilonewtons', value);
    }
    kips(value) {
        return this.calculate('kips', value);
    }
    meganewtons(value) {
        return this.calculate('meganewtons', value);
    }
    newtons(value) {
        return this.calculate('newtons', value);
    }
    poundsForce(value) {
        return this.calculate('poundsForce', value);
    }
    poundals(value) {
        return this.calculate('poundals', value);
    }
    sthane(value) {
        return this.calculate('sthane', value);
    }
    tonnesForce(value) {
        return this.calculate('tonnesForce', value);
    }
    tonsForceUK(value) {
        return this.calculate('tonsForceUK', value);
    }
    tonsForceUS(value) {
        return this.calculate('tonsForceUS', value);
    }
}

class Length {
    constructor() {
        this.value = 0;
        this.factor = {
            angstroms: 1e-10,
            astronomicalUnits: 149598550000,
            barleycorns: 0.008467,
            cables: 182.88,
            centimeters: 0.01,
            chainsSurveyors: 20.116840233680467360934721869444,
            decimeters: 0.1,
            ellsUK: 0.875,
            emsPica: 0.0042333,
            fathoms: 1.8288,
            feetUKUS: 0.3048,
            feetUSSurvey: 0.30480060960121920243840487680975,
            furlongs: 201.168,
            hands: 0.1016,
            hectometers: 100,
            inches: 0.0254,
            kilometers: 1000,
            lightYears: 9.460528405e15,
            meters: 1,
            micrometers: 1e-6,
            mil: 0.0000254,
            milesUKUS: 1609.344,
            milesNauticalInternational: 1852,
            milesNauticalUK: 1853.184,
            millimeters: 0.001,
            nanometers: 1e-9,
            parsecs: 3.0856776e16,
            picometers: 1e-12,
            scandinavianMile: 10000,
            thou: 0.0000254,
            yards: 0.9144
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }

    angstroms(value) {
        return this.calculate('angstroms', value);
    }
    astronomicalUnits(value) {
        return this.calculate('astronomicalUnits', value);
    }
    barleycorns(value) {
        return this.calculate('barleycorns', value);
    }
    cables(value) {
        return this.calculate('cables', value);
    }
    centimeters(value) {
        return this.calculate('centimeters', value);
    }
    chainsSurveyors(value) {
        return this.calculate('chainsSurveyors', value);
    }
    decimeters(value) {
        return this.calculate('decimeters', value);
    }
    ellsUK(value) {
        return this.calculate('ellsUK', value);
    }
    emsPica(value) {
        return this.calculate('emsPica', value);
    }
    fathoms(value) {
        return this.calculate('fathoms', value);
    }
    feetUKUS(value) {
        return this.calculate('feetUKUS', value);
    }
    feetUSSurvey(value) {
        return this.calculate('feetUSSurvey', value);
    }
    furlongs(value) {
        return this.calculate('furlongs', value);
    }
    hands(value) {
        return this.calculate('hands', value);
    }
    hectometers(value) {
        return this.calculate('hectometers', value);
    }
    inches(value) {
        return this.calculate('inches', value);
    }
    kilometers(value) {
        return this.calculate('kilometers', value);
    }
    lightYears(value) {
        return this.calculate('lightYears', value);
    }
    meters(value) {
        return this.calculate('meters', value);
    }
    micrometers(value) {
        return this.calculate('micrometers', value);
    }
    mil(value) {
        return this.calculate('mil', value);
    }
    milesUKUS(value) {
        return this.calculate('milesUKUS', value);
    }
    milesNauticalInternational(value) {
        return this.calculate('milesNauticalInternational', value);
    }
    milesNauticalUK(value) {
        return this.calculate('milesNauticalUK', value);
    }
    millimeters(value) {
        return this.calculate('millimeters', value);
    }
    nanometers(value) {
        return this.calculate('nanometers', value);
    }
    parsecs(value) {
        return this.calculate('parsecs', value);
    }
    picometers(value) {
        return this.calculate('picometers', value);
    }
    scandinavianMile(value) {
        return this.calculate('scandinavianMile', value);
    }
    thou(value) {
        return this.calculate('thou', value);
    }
    yards(value) {
        return this.calculate('yards', value);
    }
}

class Mass {
    constructor() {
        this.value = 0;
        this.factor = {
            caratsMetric: 0.0002,
            cental: 45.359237,
            decagrams: 0.01,
            earthMasses: 5.980e24,
            femtograms: 1e-18,
            grains: 0.00006479891,
            grams: 1e-3,
            hectograms: 0.1,
            hundredweights: 50.80234544,
            kilograms: 1,
            kilotonnes: 1e6,
            megatonnes: 1e9,
            micrograms: 1e-9,
            milligrams: 1e-6,
            nanograms: 1e-12,
            ouncesUSUK: 0.028349523125,
            ouncesTroyPreciousMetals: 0.0311034768,
            picograms: 1e-15,
            poundsUSUK: 0.45359237,
            poundsTroyPreciousMetals: 0.3732417216,
            SolarMasses: 1.989e30,
            slugsGPounds: 14.593903,
            stones: 6.35029318,
            tonsUKLong: 1016.0469088,
            tonsUSShort: 907.18474,
            tonnesMetric: 1000
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    caratsMetric(value) {
        return this.calculate('caratsMetric', value);
    }
    cental(value) {
        return this.calculate('cental', value);
    }
    decagrams(value) {
        return this.calculate('decagrams', value);
    }
    earthMasses(value) {
        return this.calculate('earthMasses', value);
    }
    femtograms(value) {
        return this.calculate('femtograms', value);
    }
    grains(value) {
        return this.calculate('grains', value);
    }
    grams(value) {
        return this.calculate('grams', value);
    }
    hectograms(value) {
        return this.calculate('hectograms', value);
    }
    hundredweights(value) {
        return this.calculate('hundredweights', value);
    }
    kilograms(value) {
        return this.calculate('kilograms', value);
    }
    kilotonnes(value) {
        return this.calculate('kilotonnes', value);
    }
    megatonnes(value) {
        return this.calculate('megatonnes', value);
    }
    micrograms(value) {
        return this.calculate('micrograms', value);
    }
    milligrams(value) {
        return this.calculate('milligrams', value);
    }
    nanograms(value) {
        return this.calculate('nanograms', value);
    }
    ouncesUSUK(value) {
        return this.calculate('ouncesUSUK', value);
    }
    ouncesTroyPreciousMetals(value) {
        return this.calculate('ouncesTroyPreciousMetals', value);
    }
    picograms(value) {
        return this.calculate('picograms', value);
    }
    poundsUSUK(value) {
        return this.calculate('poundsUSUK', value);
    }
    poundsTroyPreciousMetals(value) {
        return this.calculate('poundsTroyPreciousMetals', value);
    }
    SolarMasses(value) {
        return this.calculate('SolarMasses', value);
    }
    slugsGPounds(value) {
        return this.calculate('slugsGPounds', value);
    }
    stones(value) {
        return this.calculate('stones', value);
    }
    tonsUKLong(value) {
        return this.calculate('tonsUKLong', value);
    }
    tonsUSShort(value) {
        return this.calculate('tonsUSShort', value);
    }
    tonnesMetric(value) {
        return this.calculate('tonnesMetric', value);
    }
}

class Power {
    constructor() {
        this.value = 0;
        this.factor = {
            BtuHour: 0.2930711,
            BtuMinute: 17.584267,
            BtuSecond: 1055.056,
            caloriesThHour: 0.001162222222222222,
            caloriesThMinute: 0.069733333333333333,
            caloriesThSecond: 4.184,
            footPoundsForceMinute: 0.022597,
            footPoundsForceSecond: 1.35582,
            gigawatts: 1e9,
            horsepowersElectric: 746,
            horsepowersInternational: 745.69987158227022,
            horsepowersWater: 746.043,
            horsepowersMetric: 735.4988,
            watts: 1,
            joulesHour: 0.0002777777777777778,
            joulesMinute: 0.016666666666666666,
            joulesSecond: 1,
            kilocaloriesThHour: 1.162222222222222222,
            kilocaloriesThMinute: 69.73333333333333333,
            kilogramForceMetersHour: 0.002724,
            kilogramForceMetersMinute: 0.163444,
            kilowatts: 1e3,
            megawatts: 1e6,
            terawatts: 1e12,
            tonOfRefrigeration: 3516.853,
            petawatts: 1e15
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    BtuHour(value) {
        return this.calculate('BtuHour', value);
    }
    BtuMinute(value) {
        return this.calculate('BtuMinute', value);
    }
    BtuSecond(value) {
        return this.calculate('BtuSecond', value);
    }
    caloriesThHour(value) {
        return this.calculate('caloriesThHour', value);
    }
    caloriesThMinute(value) {
        return this.calculate('caloriesThMinute', value);
    }
    caloriesThSecond(value) {
        return this.calculate('caloriesThSecond', value);
    }
    footPoundsForceMinute(value) {
        return this.calculate('footPoundsForceMinute', value);
    }
    footPoundsForceSecond(value) {
        return this.calculate('footPoundsForceSecond', value);
    }
    gigawatts(value) {
        return this.calculate('gigawatts', value);
    }
    horsepowersElectric(value) {
        return this.calculate('horsepowersElectric', value);
    }
    horsepowersInternational(value) {
        return this.calculate('horsepowersInternational', value);
    }
    horsepowersWater(value) {
        return this.calculate('horsepowersWater', value);
    }
    horsepowersMetric(value) {
        return this.calculate('horsepowersMetric', value);
    }
    watts(value) {
        return this.calculate('watts', value);
    }
    joulesHour(value) {
        return this.calculate('joulesHour', value);
    }
    joulesMinute(value) {
        return this.calculate('joulesMinute', value);
    }
    joulesSecond(value) {
        return this.calculate('joulesSecond', value);
    }
    kilocaloriesThHour(value) {
        return this.calculate('kilocaloriesThHour', value);
    }
    kilocaloriesThMinute(value) {
        return this.calculate('kilocaloriesThMinute', value);
    }
    kilogramForceMetersHour(value) {
        return this.calculate('kilogramForceMetersHour', value);
    }
    kilogramForceMetersMinute(value) {
        return this.calculate('kilogramForceMetersMinute', value);
    }
    kilowatts(value) {
        return this.calculate('kilowatts', value);
    }
    megawatts(value) {
        return this.calculate('megawatts', value);
    }
    terawatts(value) {
        return this.calculate('terawatts', value);
    }
    tonOfRefrigeration(value) {
        return this.calculate('tonOfRefrigeration', value);
    }
    petawatts(value) {
        return this.calculate('petawatts', value);
    }
}

class Pressure {
    constructor() {
        this.value = 0;
        this.factor = {
            atmospheres: 101325,
            bars: 1e5,
            centimetersMercury: 1333.22,
            centimetersWater: 98.0665,
            feetOfWater: 2989.06692,
            hectopascals: 100,
            inchesOfWater: 249.08891,
            inchesOfMercury: 3386.388,
            kilogramForcesSqCentimeter: 98066.5,
            kilogramForcesSqMeter: 9.80665,
            kilonewtonsSqMeter: 1e3,
            kilonewtonsSqMillimeter: 1e9,
            kilopascals: 1000,
            kipsSqInch: 6894760,
            meganewtonsSqMeter: 1e6,
            meganewtonsSqMillimeter: 1e12,
            megapascals: 1e6,
            metersOfWater: 9806.65,
            millibars: 100,
            millimetersOfMercury: 133.322,
            millimetersOfWater: 9.80665,
            newtonsSqCentimeter: 1e4,
            newtonsSqMeter: 1,
            newtonsSqMillimeter: 1e6,
            pascals: 1,
            poundsForceSqFoot: 47.880,
            poundsForceSqInch: 6894.757,
            poundalsSqFoot: 1.44816,
            tonsUKForceSqFoot: 107251,
            tonsUKForceSqInch: 15444300,
            tonsUSForceSqFoot: 95760,
            tonsUSForceSqInch: 13789500,
            tonnesForceSqCm: 98066500,
            tonnesForceSqMeter: 9806.65,
            torr: 133.322
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    atmospheres(value) {
        return this.calculate('atmospheres', value);
    }
    bars(value) {
        return this.calculate('bars', value);
    }
    centimetersMercury(value) {
        return this.calculate('centimetersMercury', value);
    }
    centimetersWater(value) {
        return this.calculate('centimetersWater', value);
    }
    feetOfWater(value) {
        return this.calculate('feetOfWater', value);
    }
    hectopascals(value) {
        return this.calculate('hectopascals', value);
    }
    inchesOfWater(value) {
        return this.calculate('inchesOfWater', value);
    }
    inchesOfMercury(value) {
        return this.calculate('inchesOfMercury', value);
    }
    kilogramForcesSqCentimeter(value) {
        return this.calculate('kilogramForcesSqCentimeter', value);
    }
    kilogramForcesSqMeter(value) {
        return this.calculate('kilogramForcesSqMeter', value);
    }
    kilonewtonsSqMeter(value) {
        return this.calculate('kilonewtonsSqMeter', value);
    }
    kilonewtonsSqMillimeter(value) {
        return this.calculate('kilonewtonsSqMillimeter', value);
    }
    kilopascals(value) {
        return this.calculate('kilopascals', value);
    }
    kipsSqInch(value) {
        return this.calculate('kipsSqInch', value);
    }
    meganewtonsSqMeter(value) {
        return this.calculate('meganewtonsSqMeter', value);
    }
    meganewtonsSqMillimeter(value) {
        return this.calculate('meganewtonsSqMillimeter', value);
    }
    megapascals(value) {
        return this.calculate('megapascals', value);
    }
    metersOfWater(value) {
        return this.calculate('metersOfWater', value);
    }
    millibars(value) {
        return this.calculate('millibars', value);
    }
    millimetersOfMercury(value) {
        return this.calculate('millimetersOfMercury', value);
    }
    millimetersOfWater(value) {
        return this.calculate('millimetersOfWater', value);
    }
    newtonsSqCentimeter(value) {
        return this.calculate('newtonsSqCentimeter', value);
    }
    newtonsSqMeter(value) {
        return this.calculate('newtonsSqMeter', value);
    }
    newtonsSqMillimeter(value) {
        return this.calculate('newtonsSqMillimeter', value);
    }
    pascals(value) {
        return this.calculate('pascals', value);
    }
    poundsForceSqFoot(value) {
        return this.calculate('poundsForceSqFoot', value);
    }
    poundsForceSqInch(value) {
        return this.calculate('poundsForceSqInch', value);
    }
    poundalsSqFoot(value) {
        return this.calculate('poundalsSqFoot', value);
    }
    tonsUKForceSqFoot(value) {
        return this.calculate('tonsUKForceSqFoot', value);
    }
    tonsUKForceSqInch(value) {
        return this.calculate('tonsUKForceSqInch', value);
    }
    tonsUSForceSqFoot(value) {
        return this.calculate('tonsUSForceSqFoot', value);
    }
    tonsUSForceSqInch(value) {
        return this.calculate('tonsUSForceSqInch', value);
    }
    tonnesForceSqCm(value) {
        return this.calculate('tonnesForceSqCm', value);
    }
    tonnesForceSqMeter(value) {
        return this.calculate('tonnesForceSqMeter', value);
    }
    torr(value) {
        return this.calculate('torr', value);
    }
}

class Speed {
    constructor() {
        this.value = 0;
        this.factor = {
            centimetersMinute: 0.00016666666666666666,
            centimetersSecond: 0.01,
            feetHour: 0.00008466683600033866,
            feetMinute: 0.00508,
            feetSecond: 0.3048,
            inchesMinute: 0.0004233341800016934,
            inchesSecond: 0.0254,
            kilometersHour: 0.2777777777777778,
            kilometersSecond: 1000,
            knots: 0.5144444444444444444,
            machNumber: 340.2933,
            metersHour: 0.0002777777777777778,
            metersMinute: 0.016666666666666666,
            metersSecond: 1,
            milesHour: 0.44704,
            milesMinute: 26.8224,
            milesSecond: 1609.344,
            nauticalMilesHour: 0.5144444444444444444,
            mm24Hr: 0.0214351851851851851,
            speedOfLight: 2.9979e8,
            speedOfSound: 343,
            yardsHour: 0.000254000508001016,
            yardsMinute: 0.01524,
            yardsSecond: 0.9144
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    centimetersMinute(value) {
        return this.calculate('centimetersMinute', value);
    }
    centimetersSecond(value) {
        return this.calculate('centimetersSecond', value);
    }
    feetHour(value) {
        return this.calculate('feetHour', value);
    }
    feetMinute(value) {
        return this.calculate('feetMinute', value);
    }
    feetSecond(value) {
        return this.calculate('feetSecond', value);
    }
    inchesMinute(value) {
        return this.calculate('inchesMinute', value);
    }
    inchesSecond(value) {
        return this.calculate('inchesSecond', value);
    }
    kilometersHour(value) {
        return this.calculate('kilometersHour', value);
    }
    kilometersSecond(value) {
        return this.calculate('kilometersSecond', value);
    }
    knots(value) {
        return this.calculate('knots', value);
    }
    machNumber(value) {
        return this.calculate('machNumber', value);
    }
    metersHour(value) {
        return this.calculate('metersHour', value);
    }
    metersMinute(value) {
        return this.calculate('metersMinute', value);
    }
    metersSecond(value) {
        return this.calculate('metersSecond', value);
    }
    milesHour(value) {
        return this.calculate('milesHour', value);
    }
    milesMinute(value) {
        return this.calculate('milesMinute', value);
    }
    milesSecond(value) {
        return this.calculate('milesSecond', value);
    }
    nauticalMilesHour(value) {
        return this.calculate('nauticalMilesHour', value);
    }
    mm24Hr(value) {
        return this.calculate('mm24Hr', value);
    }
    speedOfLight(value) {
        return this.calculate('speedOfLight', value);
    }
    speedOfSound(value) {
        return this.calculate('speedOfSound', value);
    }
    yardsHour(value) {
        return this.calculate('yardsHour', value);
    }
    yardsMinute(value) {
        return this.calculate('yardsMinute', value);
    }
    yardsSecond(value) {
        return this.calculate('yardsSecond', value);
    }
}

class Temperature {
    constructor() {
        this.value = 0;
    }

    celsius(value) {
        if (value === undefined) {
            return this.value - 273.15;
        } else {
            this.value = value + 273.15;
            return this;
        }
    }

    kelvin(value) {
        if (value === undefined) {
            return this.value;
        } else {
            this.value = value;
            return this;
        }
    }

    fahrenheit(value) {
        if (value === undefined) {
            return 9/5 * this.value - 459.67;
        } else {
            this.value = 5/9 * (value + 459.67);
            return this;
        }
    }

    rankine(value) {
        if (value === undefined) {
            return 9/5 * this.value;
        } else {
            this.value = 5/9 * value;
            return this;
        }
    }

    reaumur(value) {
        if (value === undefined) {
            return 4/5 * (this.value - 273.15);
        } else {
            this.value = 5/4 * value + 273.15;
            return this;
        }
    }
}

class Time {
    constructor() {
        this.value = 0;
        this.factor = {
            centuries: 3153600000,
            days: 86400,
            decades: 315360000,
            femtoseconds: 1e-15,
            fortnights: 1209600,
            hours: 3600,
            microseconds: 1e-6,
            millenia: 31536000000,
            milliseconds: 1e-3,
            minutes: 60,
            monthsCommon: 2628000,
            monthsSynodic: 2551442.8896,
            nanoseconds: 1e-9,
            picoseconds: 1e-12,
            quartersCommon: 7884000,
            seconds: 1,
            shakes: 1e-8,
            weeks: 604800,
            yearsCommon: 31536000,
            yearsAverageGregorian: 31556952,
            yearsJulian: 31557600,
            yearsLeap: 31622400,
            yearsTropical: 31556925.216
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }

    centuries(value) {
        return this.calculate('centuries', value);
    }
    days(value) {
        return this.calculate('days', value);
    }
    decades(value) {
        return this.calculate('decades', value);
    }
    femtoseconds(value) {
        return this.calculate('femtoseconds', value);
    }
    fortnights(value) {
        return this.calculate('fortnights', value);
    }
    hours(value) {
        return this.calculate('hours', value);
    }
    microseconds(value) {
        return this.calculate('microseconds', value);
    }
    millenia(value) {
        return this.calculate('millenia', value);
    }
    milliseconds(value) {
        return this.calculate('milliseconds', value);
    }
    minutes(value) {
        return this.calculate('minutes', value);
    }
    monthsCommon(value) {
        return this.calculate('monthsCommon', value);
    }
    monthsSynodic(value) {
        return this.calculate('monthsSynodic', value);
    }
    nanoseconds(value) {
        return this.calculate('nanoseconds', value);
    }
    picoseconds(value) {
        return this.calculate('picoseconds', value);
    }
    quartersCommon(value) {
        return this.calculate('quartersCommon', value);
    }
    seconds(value) {
        return this.calculate('seconds', value);
    }
    shakes(value) {
        return this.calculate('shakes', value);
    }
    weeks(value) {
        return this.calculate('weeks', value);
    }
    yearsCommon(value) {
        return this.calculate('yearsCommon', value);
    }
    yearsAverageGregorian(value) {
        return this.calculate('yearsAverageGregorian', value);
    }
    yearsJulian(value) {
        return this.calculate('yearsJulian', value);
    }
    yearsLeap(value) {
        return this.calculate('yearsLeap', value);
    }
    yearsTropical(value) {
        return this.calculate('yearsTropical', value);
    }
}

class Volume {
    constructor() {
        this.value = 0;
        this.factor = {
            acreFoot: 1233481.83754752,
            barrelsOil: 158.987294928,
            bushelsUK: 36.36872,
            bushelsUS: 35.23907016688,
            centiliters: 0.01,
            cubicCentimeters: 1e-3,
            cubicDecimeters: 1,
            cubicDecameters: 1e6,
            cubicFeet: 28.316846592,
            cubicInches: 0.016387064,
            cubicKilometers: 1e12,
            cubicMeters: 1e3,
            cubicMile: 4.168181825e12,
            cubicMillimeters: 1e-6,
            cubicYards: 764.554857984,
            cups: 0.2365882365,
            deciliters: 0.1,
            dramImperial: 0.0035516328125000,
            dramUS: 0.0036966911953125,
            fluidOuncesImperial: 0.0284130625,
            fluidOuncesUS: 0.0295735295625,
            gallonsImperial: 4.54609,
            gallonsDryUS: 4.40488377086,
            gallonsLiquidUS: 3.785411784,
            gillImperial: 0.1420653125,
            gillUS: 0.11829411825,
            kiloliters: 1e3,
            liters: 1,
            liters1901to1964: 1.000028,
            milliliters: 1e-3,
            microliters: 1e-6,
            nanoliters: 1e-9,
            picoliters: 1e-12,
            pintsImperial: 0.56826125,
            pintsDryUS: 0.5506104713575,
            pintsLiquidUS: 0.473176473,
            quartsImperial: 1.1365225,
            quartsDryUS: 1.101220942715,
            quartsLiquidUS: 0.946352946,
            tableSpoons: 0.01478676478125,
            teaSpoons: 0.00492892159375
        };
    }

    calculate(factor, value) {
        if (value === undefined) {
            return this.value / this.factor[factor];
        } else {
            this.value = value * this.factor[factor];
            return this;
        }
    }
    acreFoot(value) {
        return this.calculate('acreFoot', value);
    }
    barrelsOil(value) {
        return this.calculate('barrelsOil', value);
    }
    bushelsUK(value) {
        return this.calculate('bushelsUK', value);
    }
    bushelsUS(value) {
        return this.calculate('bushelsUS', value);
    }
    centiliters(value) {
        return this.calculate('centiliters', value);
    }
    cubicCentimeters(value) {
        return this.calculate('cubicCentimeters', value);
    }
    cubicDecimeters(value) {
        return this.calculate('cubicDecimeters', value);
    }
    cubicDecameters(value) {
        return this.calculate('cubicDecameters', value);
    }
    cubicFeet(value) {
        return this.calculate('cubicFeet', value);
    }
    cubicInches(value) {
        return this.calculate('cubicInches', value);
    }
    cubicKilometers(value) {
        return this.calculate('cubicKilometers', value);
    }
    cubicMeters(value) {
        return this.calculate('cubicMeters', value);
    }
    cubicMile(value) {
        return this.calculate('cubicMile', value);
    }
    cubicMillimeters(value) {
        return this.calculate('cubicMillimeters', value);
    }
    cubicYards(value) {
        return this.calculate('cubicYards', value);
    }
    cups(value) {
        return this.calculate('cups', value);
    }
    deciliters(value) {
        return this.calculate('deciliters', value);
    }
    dramImperial(value) {
        return this.calculate('dramImperial', value);
    }
    dramUS(value) {
        return this.calculate('dramUS', value);
    }
    fluidOuncesImperial(value) {
        return this.calculate('fluidOuncesImperial', value);
    }
    fluidOuncesUS(value) {
        return this.calculate('fluidOuncesUS', value);
    }
    gallonsImperial(value) {
        return this.calculate('gallonsImperial', value);
    }
    gallonsDryUS(value) {
        return this.calculate('gallonsDryUS', value);
    }
    gallonsLiquidUS(value) {
        return this.calculate('gallonsLiquidUS', value);
    }
    gillImperial(value) {
        return this.calculate('gillImperial', value);
    }
    gillUS(value) {
        return this.calculate('gillUS', value);
    }
    kiloliters(value) {
        return this.calculate('kiloliters', value);
    }
    liters(value) {
        return this.calculate('liters', value);
    }
    liters1901to1964(value) {
        return this.calculate('liters1901to1964', value);
    }
    milliliters(value) {
        return this.calculate('milliliters', value);
    }
    microliters(value) {
        return this.calculate('microliters', value);
    }
    nanoliters(value) {
        return this.calculate('nanoliters', value);
    }
    picoliters(value) {
        return this.calculate('picoliters', value);
    }
    pintsImperial(value) {
        return this.calculate('pintsImperial', value);
    }
    pintsDryUS(value) {
        return this.calculate('pintsDryUS', value);
    }
    pintsLiquidUS(value) {
        return this.calculate('pintsLiquidUS', value);
    }
    quartsImperial(value) {
        return this.calculate('quartsImperial', value);
    }
    quartsDryUS(value) {
        return this.calculate('quartsDryUS', value);
    }
    quartsLiquidUS(value) {
        return this.calculate('quartsLiquidUS', value);
    }
    tableSpoons(value) {
        return this.calculate('tableSpoons', value);
    }
    teaSpoons(value) {
        return this.calculate('teaSpoons', value);
    }
}


module.exports = {
    Angle,
    Area,
    Bits,
    Density,
    ElectricCurrent,
    Energy,
    Force,
    Length,
    Mass,
    Power,
    Pressure,
    Speed,
    Temperature,
    Time,
    Volume
}

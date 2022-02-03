function convertUnits(sourceUnit,targetUnit, sourceValue) {
    let result = 'invalid';
    const unitMapper = {
        'kelvin-celsius': kelvinCelsiusConversion,
        'kelvin-fahrenheit': kelvinFahrenheitConversion,
        'kelvin-rankine': kelvinRankineConversion,
        'celsius-kelvin': CelsiuskelvinConversion,
        'celsius-fahrenheit': CelsiusCelsiusConversion,
        'celsius-rankine': CelsiusRankineConversion,
        'fahrenheit-kelvin': FahrenheitkelvinConversion,
        'fahrenheit-celsius': FarhenheitCelsiusConversion,
        'fahrenheit-rankine': FahrenheitRankineConversion,
        'rankine-kelvin': RankineKelvinConversion,
        'rankine-fahrenheit': RankineFarhenheitConversion,
        'rankine-celsius': RankineCelsiusConversion,

        "liters-tablespoons": LitersTablespoonsConversion,
        "liters-cubic-inches": LiterscubicInchesConversion,
        "liters-cups": LitersCupsConversion,
        "liters-cubic-feet": LitersCubicFeetConversion,
        "liters-gallons": LitersGallonsConversion,

        "tablespoons-liters": TablespoonsLitersConversion,
        "tablespoons-cubic-inches": TablespoonsCubicinchesConversion,
        "tablespoons-cups": TablespoonsCupsConversion,
        "tablespoons-cubic-feet": TablespoonsCubicfeetConversion,
        "tablespoons-gallons": TablespoonsGallonsConversion,

        "cubic-inches-tablespoons": CubicinchesTablespoonsConversion,
        "cubic-inches-liters": CubicinchesLitersConversion,
        "cubic-inches-cups": CubicinchesCupsConversion,
        "cubic-inches-cubic-feet": CubicinchesCubicfeet,
        "cubic-inches-gallons": CubicinchesGallons,

        "cups-tablespoons": CupsTablespoonsConversion,
        "cups-liters": CupsLitersConversion,
        "cups-cubic-inches": CupscubicInchesConversion,
        "cups-cubic-feet": CupsCubicfeetConversion,
        "cups-gallons": CupsGallonsConversion,

        "cubic-feet-tablespoons": CubicfeetTablespoonsConversion,
        "cubic-feet-cubic-inches": CubicfeetCubicinchesConversion,
        "cubic-feet-cups": CubicfeetCupsConversion,
        "cubic-feet-liters": CubicfeetLitersConversion,
        "cubic-feet-gallons": Cubicfeetgallons,

        "gallons-tablespoons": GallonsTablespoonsConversion,
        "gallons-cubic-inches": GallonsCubicinchesConversion,
        "gallons-cups": GallonsCupsConversion,
        "gallons-cubic-feet": GallonsCubicfeetConversion,
        "gallons-liters": GallonsLitersConversion,
    };
    const mapperKey = sourceUnit.toLowerCase()+'-'+targetUnit.toLowerCase();
    if(unitMapper[mapperKey]) {
        result = unitMapper[mapperKey](sourceValue);
    }
    return result;
}

function kelvinCelsiusConversion(kelvin) {
    return  kelvin - 273.15;
}

function kelvinFahrenheitConversion(kelvin) {
    return 1.8*(kelvin - 273) + 32
}

function kelvinRankineConversion(kelvin) {
    return kelvin *  (9/5);
}

function CelsiuskelvinConversion(celsius) {
    return  celsius + 273.15;
}

function CelsiusCelsiusConversion(celsius) {
    return  celsius;
}

function CelsiusRankineConversion(celsius) {
    return  celsius * 9/5 + 491.67;
}

function FahrenheitkelvinConversion(farhn) {
    let temp = farhn - 32;
    return  temp * 5/9 + 273.15
}

function FarhenheitCelsiusConversion(farhn) {
    let temp = farhn - 32;
    return  temp * 5/9
}

function FahrenheitRankineConversion(farhn) {
    return  (parseFloat(farhn) + parseFloat(459.67)).toFixed(2);
}

function RankineKelvinConversion(rakine) {
    return  rakine * 5/9
}

function RankineFarhenheitConversion(rakine) {
    return  rakine - 459.67
}

function RankineCelsiusConversion(rakine) {
    let temp = rakine - 491.67
    return  temp * 5/9
}

function LitersTablespoonsConversion(liters) {
    return  liters * 67.628
}

function LiterscubicInchesConversion(liters) {
    return  liters * 61.024
}

function LitersCupsConversion(liters) {
    return  liters * 4.227
}

function LitersCubicFeetConversion(liters) {
    return  liters / 28.317
}

function LitersGallonsConversion(liters) {
    return  liters / 3.785
}

function TablespoonsLitersConversion(tablespoons) {
    return  tablespoons / 256
}

function TablespoonsCubicinchesConversion(tablespoons) {
    return  tablespoons / 1.108
}

function TablespoonsCupsConversion(tablespoons) {
    return  tablespoons / 16
}

function TablespoonsCubicfeetConversion(tablespoons) {
    return  tablespoons / 1915
}

function TablespoonsGallonsConversion(tablespoons) {
    return  tablespoons / 256
}


function CubicinchesTablespoonsConversion(cubin) {
    return  cubin * 1.108
}

function CubicinchesLitersConversion(cubin) {
    return  cubin / 61.024
}

function CubicinchesCupsConversion(cubin) {
    return  cubin / 14.438
}

function CubicinchesCubicfeet(cubin) {
    return  cubin / 1728
}

function CubicinchesGallons(cubin) {
    return  cubin / 231
}

function CupsTablespoonsConversion(cups) {
    return  cups * 16
}

function CupsLitersConversion(cups) {
    return  cups / 4.227
}

function CupscubicInchesConversion(cups) {
    return  cups * 14.438
}

function CupsCubicfeetConversion(cups) {
    return  cups / 120
}

function CupsGallonsConversion(cups) {
    return  cups / 16
}

function CubicfeetTablespoonsConversion(cubft) {
    return  cubft * 1915
}

function CubicfeetCubicinchesConversion(cubft) {
    return  cubft * 1728
}

function CubicfeetCupsConversion(cubft) {
    return  cubft * 120
}

function CubicfeetLitersConversion(cubft) {
    return  cubft * 28.317
}

function Cubicfeetgallons(cubft) {
    return  cubft * 7.481
}

function GallonsTablespoonsConversion(gallons) {
    return  gallons * 256
}

function GallonsCubicinchesConversion(gallons) {
    return  gallons * 231
}

function GallonsCupsConversion(gallons) {
    return  gallons * 16
}

function GallonsCubicfeetConversion(gallons) {
    return  gallons / 7.481
}

function GallonsLitersConversion(gallons) {
    return  gallons * 3.785
}

export {convertUnits};
// Обогатена база данни с марки и 10+ нови модела за всяка марка (Подредени A-Z)
const carDatabase = {
    "Alfa Romeo": [
        "33", "75", "145", "146", "147", "156", "159", "164", "166", "Brera", 
        "GT", "GTV", "Giulia", "Giulietta", "Junior", "Spider", "Stelvio", "SZ", "Tonale"
    ],
    "Audi": [
        "80 / 90", "100 / A6 (C4)", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", 
        "e-tron GT", "Q2", "Q3", "Q4 e-tron", "Q5", "Q6 e-tron", "Q7", "Q8", "Q8 e-tron", "R8", "TT"
    ],
    "BMW": [
        "i3", "i4", "i7", "iX", "iX1", "iX2", "iX3", "Series 1", "Series 2", "Series 3", 
        "Series 4", "Series 5", "Series 6", "Series 7", "Series 8", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z3", "Z4"
    ],
    "Citroën": [
        "AX", "Berlingo", "C1", "C2", "C3", "C3 Aircross", "C4 (MK1/MK2/MK3)", "C4 Cactus", 
        "C4 Grand Picasso", "C5", "C5 Aircross", "C6", "C8", "e-C4", "Jumper", "Jumpy", "Saxo", "Xantia", "XM", "Xsara", "Xsara Picasso"
    ],
    "Dacia": [
        "1300", "1310", "Dokker", "Dokker Van", "Duster", "Jogger", "Lodgy", "Logan", 
        "Logan MCV", "Logan Pick-Up", "Sandero", "Sandero Stepway", "Solenza", "Spring", "SuperNova"
    ],
    "Fiat": [
        "500", "500e", "600", "Barchetta", "Bravo", "Coupe", "Croma", "Doblò", "Ducato", 
        "Fiorino", "Freemont", "Grande Punto", "Marea", "Multipla", "Panda", "Punto Evo", "Scudo", "Stilo", "Tipo"
    ],
    "Ford": [
        "B-Max", "C-Max", "Capri", "Cougar", "Escort", "Explorer", "Fiesta", "Focus", 
        "Galaxy", "Ka", "Kuga", "Mondeo", "Mustang Mach-E", "Puma", "Ranger", "S-Max", "Sierra", "Transit", "Transit Connect", "Transit Custom"
    ],
    "Honda": [
        "Accord", "City", "Civic", "Concerto", "CR-V", "CR-Z", "e:Ny1", "Element", 
        "FR-V", "Honda e", "HR-V", "Insight", "Jazz", "Legend", "Prelude", "Shuttle", "S2000", "ZR-V"
    ],
    "Hyundai": [
        "Accent", "Atos", "Coupe / Tiburon", "Elantra", "Genesis", "Getz", "i10", "i20", 
        "i30", "i40", "Ioniq Electric", "Ioniq 5", "Ioniq 6", "IX35", "Kona Electric", "Matrix", "Santa Fe", "Sonata", "Terracan", "Trajet", "Tucson"
    ],
    "Jeep": [
        "Avenger", "Cherokee", "Commander", "Compass", "Gladiator", "Grand Cherokee", 
        "Grand Wagoneer", "Liberty", "Patriot", "Renegade", "Wagoneer", "Wagoneer S", "Willys", "Wrangler"
    ],
    "Kia": [
        "Carens", "Carnival", "Ceed", "Cerato", "EV3", "EV4", "EV6", "EV9", "Magentis", 
        "Niro", "Optima", "Picanto", "ProCeed", "Rio", "Sephia", "Sorento", "Soul", "Sportage", "Stinger", "Stonic"
    ],
    "Lexus": [
        "CT 200h", "ES", "GS 300 / 450h", "GX", "HS", "IS 220d / 250", "LC 500", "LFA", 
        "LM", "LS 400 / 460 / 600h", "LX", "NX 300h", "RC", "RX 400h / 450h", "RZ 450e", "SC 430", "UX 250h / EV"
    ],
    "Mazda": [
        "121", "323", "626", "CX-3", "CX-5", "CX-7", "CX-9", "CX-30", "CX-60", "CX-80", 
        "Mazda 2", "Mazda 3", "Mazda 6", "MPV", "MX-3", "MX-5 Miata", "MX-6", "MX-30", "Premacy", "RX-7", "RX-8"
    ],
    "Mercedes-Benz": [
        "190 (W201)", "A-Class", "B-Class", "C-Class", "CLA", "CLS", "E-Class (W124/W210/W211/W212)", 
        "EQA", "EQB", "EQC", "EQE", "EQS", "G-Class", "GLA", "GLC", "GLE", "GLS", "S-Class", "SL", "SLK", "Sprinter", "Vito"
    ],
    "Nissan": [
        "100NX", "200SX / Silvia", "350Z / 370Z", "Almera", "Almera Tino", "Ariya", "Interstar", 
        "Juke", "Leaf (ZE0)", "Leaf (ZE1)", "Micra", "Navara", "Note", "NV200", "Patrol", "Primera", "Qashqai", "Terrano", "Townstar", "X-Trail"
    ],
    "Opel": [
        "Ascona", "Astra (H/J/K/L)", "Calibra", "Combo", "Corsa (D/E/F)", "Corsa-e", "Frontera", 
        "Insignia", "Kadett", "Meriva", "Mokka", "Mokka-e", "Movano", "Omega", "Signum", "Tigra", "Vectra (A/B/C)", "Vivaro", "Zafira A/B/C"
    ],
    "Peugeot": [
        "106", "107", "205", "206", "207", "208", "306", "307", "308", "405", "406", "407", 
        "504", "508", "607", "807", "2008", "3008", "5008", "Boxer", "e-208", "e-2008", "e-308", "Expert", "Partner"
    ],
    "Renault": [
        "19", "21", "Arkana", "Austral", "Captur", "Clio", "Espace", "Express", "Fluence", 
        "Kadjar", "Kangoo", "Laguna", "Master", "Megane", "Megane E-Tech", "Safrane", "Scenic", "Symbol", "Talisman", "Trafic", "Twingo", "Twizy", "Zoe"
    ],
    "SEAT": [
        "Alhambra", "Altea", "Arona", "Arosa", "Ateca", "Cordoba", "Exeo", "Fura", "Ibiza", 
        "Inca", "Leon", "Malaga", "Marbella", "Mii Electric", "Ronda", "Tarraco", "Toledo (MK1/MK2/MK3)"
    ],
    "Škoda": [
        "105 / 120", "Citigo e iV", "Elroq", "Enyaq iV", "Fabia", "Favorit", "Felicia", "Forman", 
        "Kamiq", "Karoq", "Kodiaq", "Octavia", "Octavia Tour", "Practical", "Rapid", "Roomster", "Scala", "Superb", "Yeti"
    ],
    "Suzuki": [
        "Across", "Alto", "Baleno", "Carry", "Celerio", "Grand Vitara", "Ignis", "Jimny", 
        "Kizashi", "Liana", "Samurai", "Splash", "Swace", "Swift", "SX4", "SX4 S-Cross", "Vitara", "Wagon R+"
    ],
    "Tesla": [
        "Cybertruck", "Model 3", "Model S", "Model X", "Model Y", "Roadster (1st Gen)", "Roadster (New Gen)", "Semi"
    ],
    "Toyota": [
        "Auris", "Avensis", "Aygo", "bZ4X", "C-HR", "Carina", "Celica", "Corolla", "Hiace", 
        "Hilux", "Land Cruiser", "MR2", "Prius", "Proace", "RAV4", "Supra", "Urban Cruiser", "Verso", "Yaris", "Yaris Cross"
    ],
    "Volkswagen": [
        "Amarok", "Arteon", "Bora", "Caddy", "Corrado", "e-Golf", "Golf (V/VI/VII/VIII)", "ID. Buzz", 
        "ID.3", "ID.4", "ID.5", "ID.7", "Jetta", "Lupo", "Passat (B6/B7/B8)", "Polo", "Scirocco", "Sharan", "T-Roc", "Tiguan", "Touareg", "Touran", "Transporter T4/T5/T6"
    ],
    "Volvo": [
        "440 / 460", "850", "940 / 960", "C30", "C70", "C40 Recharge", "EM90", "EX30", "EX90", 
        "S40 / V40", "S60 / V60", "S70", "S80 / V70", "S90 / V90", "XC40", "XC40 Recharge", "XC60", "XC70", "XC90"
    ]
};

const fuelPrices = {
    "Дизел": { label: "Цена дизел (днес)", price: 1.35 },
    "Бензин": { label: "Цена бензин (днес)", price: 1.40 },
    "Газ": { label: "Цена газ (LPG)", price: 0.75 },
    "Електричество": { label: "Цена ток / kWh (средна)", price: 0.25 },
    "Хибрид": { label: "Цена гориво / ток", price: 1.38 }
};

const categoryCheckboxes = {
    // ДВГ / Стандартни Категории
    "Масло & Филтри": ["Моторно масло", "Маслен филтър", "Въздушен филтър", "Филтър купе", "Горивен филтър"],
    "Гуми & Джанти": ["Летни гуми", "Зимни гуми", "Смяна & Баланс", "Изправяне на джанти", "Секретни болтове"],
    "Спирачна система": ["Предни накладки", "Задни накладки", "Предни дискове", "Задни дискове", "Спирачна течност", "Ръчна спирачка"],
    "Ходова част & Окачване": ["Амортисьори", "Носачи / Шарнири", "Биалети", "Текстолити / Тампони", "Регулиране преден/заден мост (Стенд)"],
    "Двигател & Запалителна система": ["Ангренажен ремък / Верига", "Пистов ремък & Ролки", "Свещи / Подгревни свещи", "Гарнитура", "Инжектори / Дюзи"],
    "Климатик & Охлаждане": ["Антифриз", "Радиатор", "Термостат", "Водна помпа", "Зареждане с фреон"],
    "Трансмисия & Съединител": ["Масло скоростна кутия", "Съединител & Маховик", "Полуоска / Каре", "Жило"],
    "Газова уредба (LPG/CNG)": ["Филтри за газ", "Изпарител", "Газови инжектори", "Ревизия бутилка"],
    "Екология & Изпускателна сист.": ["DPF филтър / Регенерация", "Катализатор", "Гърне / Ауспух", "Lambda сонда"],
    "Акумулатор & Електроника": ["Стартов акумулатор", "Алтернатор / Реле", "Стартер", "Диагностика грешки (OBD)"],
    "Документи & Винетки": ["Годишен технически преглед (ГТП)", "Гражданска отговорност", "Каско", "Винетка (БГ)"],
    "Други": ["Пътна помощ", "Чистачки", "Консумативи", "Козметика"],

    // EV Специфични Категории
    "Батерия & Софтуер (SoH)": ["Диагностика здраве на батерия (SoH)", "OTA софтуерен ъпдейт", "Ребалансиране на клетки", "Смяна 12V спомагателен акумулатор"],
    "Зарядно оборудване & Кабели": ["Type 2 кабел за зареждане", "CCS бърз кабел", "Домашна Wallbox станция", "Бордово зарядно устройство (OBC)"],
    "Охладителна система батерия": ["Диелектричен антифриз / Течност", "Термопомпа / Компресор", "Профилактика радиатор батерия"],
    "Гуми & Окачване (EV)": ["Специални EV гуми с висок товарен индекс", "Усилени носачи", "Амортисьори за тежко купе", "Стенд преден/заден мост"],
    "Спирачна система & Регенерация": ["Смяна спирачна течност", "Профилактика апарати (заради ръждясване)", "Накладки с ниско износване"],
    "Климатик & Термопомпа": ["Фреон за термопомпа", "Филтър купе (HEPA)", "Електрически нагревател купе"],
    "Акумулатор 12V & Електроника": ["12V батерия", "Инвертор", "Бордови компютър", "Датчици / Камери"],
    "Документи & Винетки": ["Годишен технически преглед (ГТП)", "Гражданска отговорност", "Каско", "Еко категория / Данъчни облекчения"]
};

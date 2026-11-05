// База данни с автомобили (ДВГ, Хибриди и Електромобили EV) подредени по азбучен ред
const carDatabase = {
    "Alfa Romeo": {
        models: ["147", "156", "159", "Giulia", "Giulietta", "Stelvio", "Tonale"],
        engines: [
            { name: "1.9 JTDm (120 / 150 hp)", fuel: "Дизел" },
            { name: "2.0 JTDm (170 hp)", fuel: "Дизел" },
            { name: "1.4 TB MultiAir (170 hp)", fuel: "Бензин" },
            { name: "2.0 Turbo Q4 (280 hp)", fuel: "Бензин" },
            { name: "1.5 Hybrid (130 hp)", fuel: "Хибрид" }
        ]
    },
    "Audi": {
        models: ["A3", "A4", "A6", "Q3", "Q5", "Q7", "Q4 e-tron", "e-tron GT"],
        engines: [
            { name: "Q4 e-tron 40 EV (82 kWh)", fuel: "Електричество" },
            { name: "e-tron GT EV (93 kWh)", fuel: "Електричество" },
            { name: "1.9 TDI (105 / 130 hp)", fuel: "Дизел" },
            { name: "2.0 TDI (140 / 177 / 190 hp)", fuel: "Дизел" },
            { name: "3.0 TDI V6 (240 / 272 hp)", fuel: "Дизел" },
            { name: "1.8 TFSI / 2.0 TFSI", fuel: "Бензин" },
            { name: "TFSI e Plug-in Hybrid", fuel: "Хибрид" }
        ]
    },
    "BMW": {
        models: ["i3", "i4", "iX3", "Series 1 (E87/F20)", "Series 3 (E46/E90/F30/G20)", "Series 5 (E60/F10/G30)", "X3", "X5"],
        engines: [
            { name: "i3 120Ah EV (42 kWh)", fuel: "Електричество" },
            { name: "i4 eDrive40 EV (84 kWh)", fuel: "Електричество" },
            { name: "iX3 EV (80 kWh)", fuel: "Електричество" },
            { name: "318i / 320i Valvetronic", fuel: "Бензин" },
            { name: "320d / 520d N47/B47 (177 / 190 hp)", fuel: "Дизел" },
            { name: "330d / 530d M57/N57 (231 / 245 / 258 hp)", fuel: "Дизел" },
            { name: "330e / 530e Plug-in Hybrid", fuel: "Хибрид" }
        ]
    },
    "Citroen": {
        models: ["Berlingo", "C3", "C4 (MK1 / MK2 / MK3)", "C4 Grand Picasso", "C5", "e-C4"],
        engines: [
            { name: "e-C4 EV (50 kWh)", fuel: "Електричество" },
            { name: "1.6 HDi / e-Hdi (90 / 110 / 112 hp)", fuel: "Дизел" },
            { name: "2.0 HDi (138 / 150 / 163 hp)", fuel: "Дизел" },
            { name: "1.4 VTi / 1.6 VTi / THP", fuel: "Бензин" },
            { name: "1.2 PureTech (110 / 130 hp)", fuel: "Бензин" }
        ]
    },
    "Dacia": {
        models: ["Duster", "Jogger", "Logan", "Sandero", "Spring"],
        engines: [
            { name: "Spring EV (26.8 kWh)", fuel: "Електричество" },
            { name: "1.5 dCi (90 / 110 hp)", fuel: "Дизел" },
            { name: "1.0 TCe Eco-G (LPG Factory)", fuel: "Газ" },
            { name: "1.3 TCe (130 / 150 hp)", fuel: "Бензин" },
            { name: "HYBRID 140", fuel: "Хибрид" }
        ]
    },
    "Fiat": {
        models: ["500", "500e", "Bravo", "Doblò", "Grande Punto", "Panda", "Tipo"],
        engines: [
            { name: "500e EV (42 kWh)", fuel: "Електричество" },
            { name: "1.3 MultiJet (75 / 90 hp)", fuel: "Дизел" },
            { name: "1.9 MultiJet (120 / 150 hp)", fuel: "Дизел" },
            { name: "1.2 / 1.4 Fire", fuel: "Бензин" },
            { name: "1.0 Hybrid (70 hp)", fuel: "Хибрид" }
        ]
    },
    "Ford": {
        models: ["C-Max", "Fiesta", "Focus", "Kuga", "Mondeo", "Mustang Mach-E", "Transit Custom"],
        engines: [
            { name: "Mustang Mach-E EV (75 / 98 kWh)", fuel: "Електричество" },
            { name: "1.6 TDCi / 2.0 TDCi (115 / 140 / 163 hp)", fuel: "Дизел" },
            { name: "1.0 EcoBoost (100 / 125 hp)", fuel: "Бензин" },
            { name: "1.6 Duratec / 2.0 Duratec", fuel: "Бензин" },
            { name: "2.5 FHEV / PHEV Hybrid", fuel: "Хибрид" }
        ]
    },
    "Honda": {
        models: ["Accord", "Civic", "CR-V", "Honda e", "HR-V", "Jazz"],
        engines: [
            { name: "Honda e EV (35.5 kWh)", fuel: "Електричество" },
            { name: "2.2 i-CTDi / i-DTEC (140 / 150 hp)", fuel: "Дизел" },
            { name: "1.4 i-VTEC / 1.8 i-VTEC", fuel: "Бензин" },
            { name: "2.0 e:HEV Full Hybrid", fuel: "Хибрид" }
        ]
    },
    "Hyundai": {
        models: ["Elantra", "Ioniq", "Ioniq 5", "Ioniq 6", "i20", "i30", "Kona", "Tucson"],
        engines: [
            { name: "Ioniq 5 Long Range (77.4 kWh)", fuel: "Електричество" },
            { name: "Kona Electric (64 kWh)", fuel: "Електричество" },
            { name: "1.6 CRDi (115 / 136 hp)", fuel: "Дизел" },
            { name: "1.4 MPI / 1.6 T-GDI", fuel: "Бензин" },
            { name: "1.6 HEV Plug-in Hybrid", fuel: "Хибрид" }
        ]
    },
    "Jeep": {
        models: ["Avenger", "Compass", "Grand Cherokee", "Renegade", "Wrangler"],
        engines: [
            { name: "Avenger EV (54 kWh)", fuel: "Електричество" },
            { name: "1.6 Multijet / 2.0 Multijet", fuel: "Дизел" },
            { name: "1.3 T4 Plug-in Hybrid 4xe", fuel: "Хибрид" }
        ]
    },
    "Kia": {
        models: ["Ceed", "EV6", "Niro", "Optima", "Rio", "Sportage"],
        engines: [
            { name: "EV6 Long Range (77.4 kWh)", fuel: "Електричество" },
            { name: "e-Niro EV (64 kWh)", fuel: "Електричество" },
            { name: "1.6 CRDi (115 / 136 hp)", fuel: "Дизел" },
            { name: "1.4 MPI / 1.6 T-GDi", fuel: "Бензин" },
            { name: "1.6 GDI Hybrid", fuel: "Хибрид" }
        ]
    },
    "Lexus": {
        models: ["CT 200h", "IS 220d / 250", "NX 300h", "RX 400h / 450h", "RZ 450e"],
        engines: [
            { name: "RZ 450e EV (71.4 kWh)", fuel: "Електричество" },
            { name: "2.2 D-4D (177 hp)", fuel: "Дизел" },
            { name: "1.8 Hybrid (CT 200h)", fuel: "Хибрид" },
            { name: "2.5 / 3.5 V6 Hybrid", fuel: "Хибрид" }
        ]
    },
    "Mazda": {
        models: ["Mazda 2", "Mazda 3", "Mazda 6", "CX-3", "CX-5", "CX-30", "MX-30"],
        engines: [
            { name: "MX-30 EV (35.5 kWh)", fuel: "Електричество" },
            { name: "2.2 SkyActiv-D (150 / 175 hp)", fuel: "Дизел" },
            { name: "2.0 SkyActiv-G (120 / 165 hp)", fuel: "Бензин" },
            { name: "2.0 SkyActiv-X M Hybrid", fuel: "Хибрид" }
        ]
    },
    "Mercedes-Benz": {
        models: ["A-Class", "B-Class", "C-Class", "E-Class", "EQA", "EQC", "EQE", "GLE"],
        engines: [
            { name: "EQA 250 EV (66.5 kWh)", fuel: "Електричество" },
            { name: "EQC 400 4MATIC EV (80 kWh)", fuel: "Електричество" },
            { name: "C 200 CDI / C 220 CDI (OM646/OM651)", fuel: "Дизел" },
            { name: "E 220 d / E 350 d", fuel: "Дизел" },
            { name: "C 180 / C 200 Kompressor/CGI", fuel: "Бензин" },
            { name: "de / e EQ Power Plug-in Hybrid", fuel: "Хибрид" }
        ]
    },
    "Nissan": {
        models: ["Ariya", "Juke", "Leaf", "Micra", "Qashqai", "X-Trail"],
        engines: [
            { name: "Leaf 40 kWh EV", fuel: "Електричество" },
            { name: "Leaf e+ 62 kWh EV", fuel: "Електричество" },
            { name: "Ariya EV (63 / 87 kWh)", fuel: "Електричество" },
            { name: "1.5 dCi (106 / 110 hp)", fuel: "Дизел" },
            { name: "1.6 dCi (130 hp)", fuel: "Дизел" },
            { name: "1.3 DIG-T / e-POWER Hybrid", fuel: "Хибрид" }
        ]
    },
    "Opel": {
        models: ["Astra (H/J/K)", "Corsa (D/E/F)", "Corsa-e", "Insignia", "Mokka", "Mokka-e", "Zafira"],
        engines: [
            { name: "Corsa-e EV (50 kWh)", fuel: "Електричество" },
            { name: "Mokka-e EV (50 kWh)", fuel: "Електричество" },
            { name: "1.3 CDTI / 1.7 CDTI", fuel: "Дизел" },
            { name: "1.9 CDTI / 2.0 CDTI (120 / 150 / 160 hp)", fuel: "Дизел" },
            { name: "1.4 Turbo / 1.6 Twinport", fuel: "Бензин" },
            { name: "Hybrid 225 Plug-in", fuel: "Хибрид" }
        ]
    },
    "Peugeot": {
        models: ["206", "207", "208", "307", "308", "508", "2008", "3008", "e-208", "e-2008"],
        engines: [
            { name: "e-208 EV (50 kWh)", fuel: "Електричество" },
            { name: "e-2008 EV (50 kWh)", fuel: "Електричество" },
            { name: "1.6 HDi / e-HDi (90 / 110 / 112 hp)", fuel: "Дизел" },
            { name: "2.0 HDi (136 / 150 / 163 hp)", fuel: "Дизел" },
            { name: "1.2 PureTech / 1.6 VTi", fuel: "Бензин" },
            { name: "HYBRID4 Plug-in", fuel: "Хибрид" }
        ]
    },
    "Renault": {
        models: ["Clio", "Fluence", "Kadjar", "Laguna", "Megane", "Scenic", "Zoe"],
        engines: [
            { name: "Zoe R110 / R135 EV (52 kWh)", fuel: "Електричество" },
            { name: "1.5 dCi (85 / 106 / 110 hp)", fuel: "Дизел" },
            { name: "1.9 dCi / 2.0 dCi (130 / 150 hp)", fuel: "Дизел" },
            { name: "1.2 TCe / 1.4 TCe / 1.6 16V", fuel: "Бензин" },
            { name: "E-TECH Full Hybrid", fuel: "Хибрид" }
        ]
    },
    "Seat": {
        models: ["Alhambra", "Altea", "Arona", "Ateca", "Ibiza", "Leon"],
        engines: [
            { name: "Mii Electric EV (36.8 kWh)", fuel: "Електричество" },
            { name: "1.9 TDI (105 hp)", fuel: "Дизел" },
            { name: "2.0 TDI (140 / 170 / 184 hp)", fuel: "Дизел" },
            { name: "1.4 TSI / 1.8 TSI / 2.0 TSI", fuel: "Бензин" },
            { name: "e-HYBRID Plug-in", fuel: "Хибрид" }
        ]
    },
    "Skoda": {
        models: ["Enyaq iV", "Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Superb"],
        engines: [
            { name: "Enyaq iV 80 EV (82 kWh)", fuel: "Електричество" },
            { name: "1.9 TDI (90 / 105 hp)", fuel: "Дизел" },
            { name: "2.0 TDI (140 / 150 / 184 / 190 hp)", fuel: "Дизел" },
            { name: "1.2 TSI / 1.4 TSI / 1.8 TSI", fuel: "Бензин" },
            { name: "iV Plug-in Hybrid", fuel: "Хибрид" }
        ]
    },
    "Suzuki": {
        models: ["Grand Vitara", "Ignis", "Jimny", "Swift", "SX4", "SX4 S-Cross", "Vitara"],
        engines: [
            { name: "1.4 Boosterjet (140 hp)", fuel: "Бензин" },
            { name: "1.6 VVT (120 hp)", fuel: "Бензин" },
            { name: "1.6 DDiS (120 hp)", fuel: "Дизел" },
            { name: "1.9 DDiS (120 hp)", fuel: "Дизел" },
            { name: "1.4 Boosterjet Mild Hybrid (129 hp)", fuel: "Хибрид" },
            { name: "1.5 Dualjet Strong Hybrid (116 hp)", fuel: "Хибрид" }
        ]
    },
    "Tesla": {
        models: ["Model 3", "Model S", "Model X", "Model Y"],
        engines: [
            { name: "Standard Range Plus / RWD (50–60 kWh)", fuel: "Електричество" },
            { name: "Long Range Dual Motor (75–82 kWh)", fuel: "Електричество" },
            { name: "Performance / Plaid (82–100 kWh)", fuel: "Електричество" }
        ]
    },
    "Toyota": {
        models: ["Aurise", "Avensis", "Aygo", "C-HR", "Corolla", "bZ4X", "Prius", "RAV4", "Yaris"],
        engines: [
            { name: "bZ4X EV (71.4 kWh)", fuel: "Електричество" },
            { name: "1.4 D-4D / 2.0 D-4D / 2.2 D-CAT", fuel: "Дизел" },
            { name: "1.33 VVT-i / 1.6 Valvematic", fuel: "Бензин" },
            { name: "1.8 Hybrid Synergy Drive (122 / 136 hp)", fuel: "Хибрид" },
            { name: "2.0 / 2.5 Dynamic Force Hybrid", fuel: "Хибрид" }
        ]
    },
    "Volkswagen": {
        models: ["Golf (V/VI/VII/VIII)", "ID.3", "ID.4", "ID.5", "Passat (B6/B7/B8)", "Polo", "Tiguan", "Touareg"],
        engines: [
            { name: "e-Golf EV (35.8 kWh)", fuel: "Електричество" },
            { name: "ID.3 Pro S EV (77 kWh)", fuel: "Електричество" },
            { name: "ID.4 GTX EV (77 kWh)", fuel: "Електричество" },
            { name: "1.9 TDI (90 / 105 hp)", fuel: "Дизел" },
            { name: "2.0 TDI (140 / 170 / 190 hp)", fuel: "Дизел" },
            { name: "1.4 TSI / 1.8 TSI / 2.0 TSI", fuel: "Бензин" },
            { name: "GTE Plug-in Hybrid", fuel: "Хибрид" }
        ]
    },
    "Volvo": {
        models: ["C30", "C40 Recharge", "S60 / V60", "S80 / V70", "XC40", "XC60", "XC90"],
        engines: [
            { name: "XC40 / C40 Recharge EV (78 kWh)", fuel: "Електричество" },
            { name: "2.0 D3 / D4 (150 / 190 hp)", fuel: "Дизел" },
            { name: "2.4 D5 5-cylinder (185 / 205 / 215 hp)", fuel: "Дизел" },
            { name: "1.6 T3 / T4 / 2.0 T5", fuel: "Бензин" },
            { name: "T6 / T8 Recharge Plug-in Hybrid", fuel: "Хибрид" }
        ]
    }
};

const universalEngines = [
    { name: "Стандартен двигател (1.2L - 2.0L)", fuel: "Дизел" },
    { name: "Електромотор / Батерия EV", fuel: "Електричество" },
    { name: "Хибридна система HEV/PHEV", fuel: "Хибрид" }
];

// Ориентировъчни цени на горива/ток за интерфейса
const fuelPrices = {
    "Дизел": { label: "Цена дизел (днес)", price: 1.35 },
    "Бензин": { label: "Цена бензин (днес)", price: 1.40 },
    "Газ": { label: "Цена газ (LPG)", price: 0.75 },
    "Електричество": { label: "Цена ток / kWh (средна)", price: 0.25 },
    "Хибрид": { label: "Цена гориво / ток", price: 1.38 }
};

// Подкатегории (чекбоксове) за бърз отбелязване при ремонт
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

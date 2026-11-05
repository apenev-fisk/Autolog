// carData.js - Разширена база данни с автомобили и категории за AutoLog

const carDatabase = {
    'BMW': { 
        models: ['Серия 1', 'Серия 3 (E36/E46/E90/F30)', 'Серия 4 (F32/F33)', 'Серия 5 (E39/E60/F10/G30)', 'Серия 7', 'X1', 'X3', 'X4 (F26)', 'X5', 'X6', 'Z3 / Z4'], 
        engines: [{ name: '318d / 320d (2.0d)', fuel: 'Дизел' }, { name: '330d / 530d (3.0d)', fuel: 'Дизел' }, { name: '318i / 320i (2.0i)', fuel: 'Бензин' }, { name: '325i / 330i (Petrol)', fuel: 'Бензин' }] 
    },
    'Volkswagen': { 
        models: ['Golf (Mk3/Mk4/Mk5/Mk6/Mk7)', 'Passat (B5/B6/B7/B8)', 'Polo', 'Bora / Jetta', 'Scirocco', 'Sharan', 'Touran', 'Tiguan', 'Touareg', 'Transporter / Caddy'], 
        engines: [{ name: '1.9 TDI (90/105/131 к.с.)', fuel: 'Дизел' }, { name: '2.0 TDI (140/170/190 к.с.)', fuel: 'Дизел' }, { name: '1.6 MPI / 1.4 16V', fuel: 'Бензин' }, { name: '1.4 TSI / 1.8T / 2.0 TFSI', fuel: 'Бензин' }] 
    },
    'Audi': { 
        models: ['A1', 'A3 (8L/8P/8V)', 'A4 (B5/B6/B7/B8/B9)', 'A5', 'A6 (C5/C6/C7/C8)', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'TT'], 
        engines: [{ name: '1.9 TDI', fuel: 'Дизел' }, { name: '2.0 TDI', fuel: 'Дизел' }, { name: '3.0 TDI V6', fuel: 'Дизел' }, { name: '1.8T / 2.0 TFSI', fuel: 'Бензин' }] 
    },
    'Mercedes-Benz': { 
        models: ['A-Class', 'B-Class', 'C-Class (W202/W203/W204/W205)', 'E-Class (W210/W211/W212/W213)', 'S-Class', 'GLA', 'CLK / CLS', 'ML / GLE', 'GLK / GLC', 'Vito / Sprinter'], 
        engines: [{ name: '200 CDI / 220 CDI', fuel: 'Дизел' }, { name: '270 CDI / 320 CDI V6', fuel: 'Дизел' }, { name: 'C180 / E200 Kompressor', fuel: 'Бензин' }, { name: 'C200 / E350 V6', fuel: 'Бензин' }] 
    },
    'Citroen': { 
        models: ['Saxo / C1', 'C2 / C3', 'C4 (I / II / Cactus / Picasso)', 'C5 (I / II / III)', 'C6', 'Xsara / Xsara Picasso', 'Berlingo', 'Jumpy'], 
        engines: [{ name: '1.4 HDi / 1.6 HDi', fuel: 'Дизел' }, { name: '2.0 HDi', fuel: 'Дизел' }, { name: '1.4i / 1.6i 16V', fuel: 'Бензин' }, { name: '1.6 VTi / 1.6 THP', fuel: 'Бензин' }] 
    },
    'Peugeot': { 
        models: ['106 / 206 / 207 / 208', '306 / 307 / 308', '406 / 407 / 508', 'RCZ', '2008 / 3008 / 5008', 'Partner'], 
        engines: [{ name: '1.4 HDi / 1.6 HDi', fuel: 'Дизел' }, { name: '2.0 HDi', fuel: 'Дизел' }, { name: '1.4i / 1.6i 16V', fuel: 'Бензин' }, { name: '1.2 PureTech / 1.6 THP', fuel: 'Бензин' }] 
    },
    'Suzuki': {
        models: ['Swift', 'Vitara', 'Grand Vitara', 'SX4', 'Ignis', 'Jimny', 'Baleno'],
        engines: [{ name: '1.3 16V (M13A)', fuel: 'Бензин' }, { name: '1.5i / 1.6 VVT', fuel: 'Бензин' }, { name: '2.0 16V', fuel: 'Бензин' }, { name: '1.9 DDiS / 1.6 DDiS', fuel: 'Дизел' }]
    },
    'Nissan': {
        models: ['Qashqai', 'X-Trail', 'Almera', 'Micra', 'Navara', 'Pathfinder', 'Note', 'Juke'],
        engines: [{ name: '1.5 dCi / 1.6 dCi', fuel: 'Дизел' }, { name: '2.0 dCi', fuel: 'Дизел' }, { name: '1.4i / 1.6i', fuel: 'Бензин' }, { name: '2.0i / 2.5 16V', fuel: 'Бензин' }]
    },
    'Volvo': {
        models: ['XC60', 'XC90', 'V70', 'S60', 'S80', 'V50', 'C30', 'V40'],
        engines: [{ name: '2.0D / D3 / D4', fuel: 'Дизел' }, { name: '2.4D / D5 (5-цил)', fuel: 'Дизел' }, { name: '1.6T / 2.0T / 2.5T', fuel: 'Бензин' }]
    },
    'Jeep': {
        models: ['Compass', 'Grand Cherokee', 'Cherokee', 'Renegade', 'Wrangler'],
        engines: [{ name: '2.0 CRD / 2.2 Multijet', fuel: 'Дизел' }, { name: '2.7 CRD / 3.0 CRD V6', fuel: 'Дизел' }, { name: '2.4 Multiair / 4.0 Inline 6', fuel: 'Бензин' }, { name: '5.7 V8 HEMI', fuel: 'Бензин' }]
    },
    'Toyota': { 
        models: ['Yaris', 'Corolla', 'Auris', 'Avensis', 'Camry', 'RAV4', 'Land Cruiser', 'Prius', 'Hilux'], 
        engines: [{ name: '1.4 D-4D / 2.0 D-4D', fuel: 'Дизел' }, { name: '1.33 VVT-i / 1.6 VVT-i', fuel: 'Бензин' }, { name: '1.8 VVT-i / 2.0 VVT-i', fuel: 'Бензин' }, { name: '1.8 Hybrid', fuel: 'Бензин' }] 
    },
    'Lexus': { 
        models: ['IS (200/250/300h)', 'GS', 'LS', 'RX', 'NX', 'CT200h'], 
        engines: [{ name: '2.2 D-4D', fuel: 'Дизел' }, { name: '2.5 V6 / 3.0 V6 Petrol', fuel: 'Бензин' }, { name: 'Hybrid', fuel: 'Бензин' }] 
    },
    'Hyundai': { 
        models: ['Getz / Accent', 'i10 / i20 / i30', 'Elantra', 'Tucson', 'Santa Fe', 'Matrix', 'ix35'], 
        engines: [{ name: '1.4 CRDi / 1.6 CRDi', fuel: 'Дизел' }, { name: '2.0 CRDi', fuel: 'Дизел' }, { name: '1.4 MPi / 1.6 CVVT', fuel: 'Бензин' }, { name: '1.6 T-GDI', fuel: 'Бензин' }] 
    },
    'Kia': { 
        models: ['Rio', 'Ceed / Pro_Ceed', 'Cerato / Optima', 'Sportage', 'Sorento', 'Picanto', 'Carens'], 
        engines: [{ name: '1.4 CRDi / 1.6 CRDi', fuel: 'Дизел' }, { name: '2.0 CRDi', fuel: 'Дизел' }, { name: '1.4 CVVT / 1.6 GDI', fuel: 'Бензин' }, { name: '2.0 DOHC', fuel: 'Бензин' }] 
    },
    'Mazda': { 
        models: ['Mazda 2', 'Mazda 3', 'Mazda 6', 'CX-3 / CX-5 / CX-7', 'MX-5 (Miata)', 'Premacy / MPV'], 
        engines: [{ name: '1.6 CiTD / 2.0 MZR-CD', fuel: 'Дизел' }, { name: '2.2 SkyActiv-D', fuel: 'Дизел' }, { name: '1.6i / 2.0i MZR', fuel: 'Бензин' }, { name: '2.0 SkyActiv-G', fuel: 'Бензин' }] 
    },
    'Honda': { 
        models: ['Civic', 'Accord', 'CR-V', 'HR-V', 'Jazz', 'FR-V', 'Prelude'], 
        engines: [{ name: '2.2 i-CTDi / 1.6 i-DTEC', fuel: 'Дизел' }, { name: '1.4 / 1.6 i-VTEC', fuel: 'Бензин' }, { name: '1.8 / 2.0 i-VTEC', fuel: 'Бензин' }, { name: '2.4 K24', fuel: 'Бензин' }] 
    },
    'Renault': { 
        models: ['Twingo', 'Clio', 'Megane', 'Laguna', 'Scenic', 'Captur / Kadjar', 'Koleos', 'Kangoo', 'Espace'], 
        engines: [{ name: '1.5 dCi', fuel: 'Дизел' }, { name: '1.9 dCi / 2.0 dCi', fuel: 'Дизел' }, { name: '1.2 16V / 1.6 16V', fuel: 'Бензин' }, { name: '1.2 TCe / 1.4 TCe', fuel: 'Бензин' }] 
    },
    'Dacia': { 
        models: ['Logan', 'Sandero / Stepway', 'Duster', 'Lodgy', 'Dokker'], 
        engines: [{ name: '1.5 dCi', fuel: 'Дизел' }, { name: '1.4 MPI / 1.6 MPI', fuel: 'Бензин' }, { name: '0.9 TCe / 1.0 TCe', fuel: 'Бензин' }, { name: '1.6 LPG / Eco-G', fuel: 'Газ' }] 
    },
    'Skoda': { 
        models: ['Fabia', 'Octavia (Mk1/Mk2/Mk3)', 'Superb', 'Rapid / Roomster', 'Yeti', 'Kodiaq / Karoq'], 
        engines: [{ name: '1.4 TDI / 1.9 TDI', fuel: 'Дизел' }, { name: '1.6 TDI / 2.0 TDI', fuel: 'Дизел' }, { name: '1.2 HTP / 1.6 MPI', fuel: 'Бензин' }, { name: '1.2 TSI / 1.4 TSI / 2.0 RS', fuel: 'Бензин' }] 
    },
    'Ford': { 
        models: ['Fiesta', 'Focus', 'Mondeo', 'C-Max / S-Max', 'Kuga', 'Galaxy', 'Transit'], 
        engines: [{ name: '1.4 / 1.6 TDCi', fuel: 'Дизел' }, { name: '2.0 TDCi', fuel: 'Дизел' }, { name: '1.25 / 1.4 / 1.6 Duratec', fuel: 'Бензин' }, { name: '1.0 / 1.6 EcoBoost', fuel: 'Бензин' }] 
    },
    'Opel': { 
        models: ['Corsa', 'Astra (F/G/H/J/K)', 'Vectra / Signum', 'Insignia', 'Zafira', 'Meriva', 'Mokka / Antara'], 
        engines: [{ name: '1.3 / 1.7 / 1.9 CDTI', fuel: 'Дизел' }, { name: '2.0 DTI / 2.0 CDTI', fuel: 'Дизел' }, { name: '1.4 / 1.6 / 1.8 16V', fuel: 'Бензин' }, { name: '1.4 Turbo / 1.6 Turbo', fuel: 'Бензин' }] 
    },
    'Fiat': { 
        models: ['Punto / Grande Punto', 'Bravo / Stilo', 'Panda', '500 / 500X', 'Tipo', 'Croma', 'Doblo', 'Ducato'], 
        engines: [{ name: '1.3 MultiJet', fuel: 'Дизел' }, { name: '1.9 JTD / MultiJet', fuel: 'Дизел' }, { name: '1.2 8V FIRE / 1.4 16V', fuel: 'Бензин' }, { name: '1.4 T-Jet', fuel: 'Бензин' }] 
    },
    'Alfa Romeo': { 
        models: ['145 / 146 / 147', '156 / 159', '166', 'GT / GTV', 'Brera', 'MiTo', 'Giulietta', 'Stelvio / Giulia'], 
        engines: [{ name: '1.9 JTD / JTDm', fuel: 'Дизел' }, { name: '2.4 JTDm 5-цил', fuel: 'Дизел' }, { name: '1.6 / 1.8 / 2.0 Twin Spark', fuel: 'Бензин' }, { name: '1.75 TBi / 3.2 Busso V6', fuel: 'Бензин' }] 
    },
    'Seat': { 
        models: ['Ibiza', 'Cordoba', 'Leon', 'Toledo', 'Altea', 'Exeo', 'Alhambra', 'Ateca / Arona'], 
        engines: [{ name: '1.9 TDI', fuel: 'Дизел' }, { name: '1.6 TDI / 2.0 TDI', fuel: 'Дизел' }, { name: '1.4 16V / 1.6 MPI', fuel: 'Бензин' }, { name: '1.2 TSI / 1.4 TSI / 2.0 TFSI', fuel: 'Бензин' }] 
    }
};

const universalEngines = [
    { name: '1.4 / 1.6 Бензин', fuel: 'Бензин' }, 
    { name: '1.8 / 2.0 Бензин', fuel: 'Бензин' }, 
    { name: '1.9 TDI / 2.0 TDI Дизел', fuel: 'Дизел' }, 
    { name: '1.5 / 1.6 dCi / HDi Дизел', fuel: 'Дизел' }, 
    { name: '2.0 / 2.2 CDTI / D-4D Дизел', fuel: 'Дизел' }, 
    { name: 'Бензин + Газ (LPG)', fuel: 'Газ' }
];

const categoryCheckboxes = {
    'Масло & Филтри': ['Маслен филтър', 'Въздушен филтър', 'Филтър купе', 'Горивен филтър'],
    'Газова уредба (LPG/CNG)': ['Монтаж на нов газов инжекцион', 'Смяна филтър фаза течна', 'Смяна филтър фаза газова', 'Диагностика / Настройка компютър', 'Ревизия / Изпарител (редуктор)', 'Заверка / Преглед бутилка'],
    'Екология & Изпускателна сист.': ['DPF / FAP филтър (почистване/рециклиране)', 'Катализатор (преглед/смяна)', 'AdBlue система / Добавка', 'EGR клапан', 'Ламбда сонда', 'Мека връзка / Гърне'],
    'Ходова част & Окачване': ['Носачи / Шарнири', 'Биалети', 'Амортисьори', 'Тампони на амортисьори', 'Шенкели / Лагери', 'Стабилизираща щанга'],
    'Спирачна система': ['Спирачни дискове', 'Спирачни накладки', 'Спирачни маркучи', 'Спирачна течност', 'Спирачни апарати', 'Жило за ръчна'],
    'Климатик & Охлаждане': ['Радиатор (воден/клима)', 'Разширителен съд', 'Антифриз', 'Водна помпа', 'Термостат', 'Компресор климатик'],
    'Двигател & Запалителна система': ['Запалителни / Подгревни свещи', 'Бобини', 'Инжектори (дюзи - рециклирани/нови)', 'Турбокомпресор (рециклирано/ново)', 'Дебитомер / МАФ сензор', 'Ангренажен ремък / Верига', 'Пистов ремък'],
    'Трансмисия & Съединител': ['Съединител комплект (маховик)', 'Масло скоростна кутия / Диф.', 'Полуоски / Карета / Маншони'],
    'Акумулатор & Електроника': ['Акумулатор', 'Алтернатор (ремонт/нов)', 'Стартер (ремонт/нов)'],
    'Гуми & Джанти': ['Смяна на гуми (монтаж/баланс)', 'Нови гуми (летни/зимни)', 'Регулиране преден/заден мост (Реглаж)'],
    'Документи & Винетки': ['Годишен технически преглед (ГТП)', 'Винетка (БГ / чужбина)', 'Гражданска отговорност / Каско', 'Данък МПС'],
    'Други': ['Други дребни ремонти / Консумативи']
};

const fuelPrices = {
    'Бензин': { label: 'Цена A95', price: 1.61 },
    'Дизел': { label: 'Цена Дизел', price: 1.92 },
    'Газ': { label: 'Цена Газ (LPG)', price: 0.68 }
};

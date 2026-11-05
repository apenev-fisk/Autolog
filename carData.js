// carData.js - Разширена база данни с автомобили (подредена по азбучен ред)

const carDatabase = {
    'Alfa Romeo': { 
        models: ['145 / 146 / 147', '156 / 159', '166', 'Brera', 'Giulietta', 'GT / GTV', 'MiTo', 'Stelvio / Giulia'], 
        engines: [{ name: '1.6 / 1.8 / 2.0 Twin Spark', fuel: 'Бензин' }, { name: '1.75 TBi / 3.2 Busso V6', fuel: 'Бензин' }, { name: '1.9 JTD / JTDm', fuel: 'Дизел' }, { name: '2.4 JTDm 5-цил', fuel: 'Дизел' }] 
    },
    'Audi': { 
        models: ['A1', 'A3 (8L/8P/8V)', 'A4 (B5/B6/B7/B8/B9)', 'A5', 'A6 (C5/C6/C7/C8)', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'TT'], 
        engines: [{ name: '1.8T / 2.0 TFSI', fuel: 'Бензин' }, { name: '1.9 TDI', fuel: 'Дизел' }, { name: '2.0 TDI', fuel: 'Дизел' }, { name: '3.0 TDI V6', fuel: 'Дизел' }] 
    },
    'BMW': { 
        models: ['Серия 1', 'Серия 3 (E36/E46/E90/F30)', 'Серия 4 (F32/F33)', 'Серия 5 (E39/E60/F10/G30)', 'Серия 7', 'X1', 'X3', 'X4 (F26)', 'X5', 'X6', 'Z3 / Z4'], 
        engines: [{ name: '318i / 320i (2.0i)', fuel: 'Бензин' }, { name: '325i / 330i (Petrol)', fuel: 'Бензин' }, { name: '318d / 320d (2.0d)', fuel: 'Дизел' }, { name: '330d / 530d (3.0d)', fuel: 'Дизел' }] 
    },
    'Citroen': { 
        models: ['Berlingo', 'C2 / C3', 'C4 (I / II / Cactus / Picasso)', 'C5 (I / II / III)', 'C6', 'Jumpy', 'Saxo / C1', 'Xsara / Xsara Picasso'], 
        engines: [{ name: '1.4i / 1.6i 16V', fuel: 'Бензин' }, { name: '1.6 VTi / 1.6 THP', fuel: 'Бензин' }, { name: '1.4 HDi / 1.6 HDi', fuel: 'Дизел' }, { name: '2.0 HDi', fuel: 'Дизел' }] 
    },
    'Dacia': { 
        models: ['Dokker', 'Duster', 'Lodgy', 'Logan', 'Sandero / Stepway'], 
        engines: [{ name: '0.9 TCe / 1.0 TCe', fuel: 'Бензин' }, { name: '1.4 MPI / 1.6 MPI', fuel: 'Бензин' }, { name: '1.6 LPG / Eco-G', fuel: 'Газ' }, { name: '1.5 dCi', fuel: 'Дизел' }] 
    },
    'Fiat': { 
        models: ['500 / 500X', 'Bravo / Stilo', 'Croma', 'Doblo', 'Ducato', 'Panda', 'Punto / Grande Punto', 'Tipo'], 
        engines: [{ name: '1.2 8V FIRE / 1.4 16V', fuel: 'Бензин' }, { name: '1.4 T-Jet', fuel: 'Бензин' }, { name: '1.3 MultiJet', fuel: 'Дизел' }, { name: '1.9 JTD / MultiJet', fuel: 'Дизел' }] 
    },
    'Ford': { 
        models: ['C-Max / S-Max', 'Fiesta', 'Focus', 'Galaxy', 'Kuga', 'Mondeo', 'Transit'], 
        engines: [{ name: '1.0 / 1.6 EcoBoost', fuel: 'Бензин' }, { name: '1.25 / 1.4 / 1.6 Duratec', fuel: 'Бензин' }, { name: '1.4 / 1.6 TDCi', fuel: 'Дизел' }, { name: '2.0 TDCi', fuel: 'Дизел' }] 
    },
    'Honda': { 
        models: ['Accord', 'Civic', 'CR-V', 'FR-V', 'HR-V', 'Jazz', 'Prelude'], 
        engines: [{ name: '1.4 / 1.6 i-VTEC', fuel: 'Бензин' }, { name: '1.8 / 2.0 i-VTEC', fuel: 'Бензин' }, { name: '2.4 K24', fuel: 'Бензин' }, { name: '1.6 i-DTEC / 2.2 i-CTDi', fuel: 'Дизел' }] 
    },
    'Hyundai': { 
        models: ['Elantra', 'Getz / Accent', 'i10 / i20 / i30', 'ix35', 'Matrix', 'Santa Fe', 'Tucson'], 
        engines: [{ name: '1.4 MPi / 1.6 CVVT', fuel: 'Бензин' }, { name: '1.6 T-GDI', fuel: 'Бензин' }, { name: '1.4 CRDi / 1.6 CRDi', fuel: 'Дизел' }, { name: '2.0 CRDi', fuel: 'Дизел' }] 
    },
    'Jeep': {
        models: ['Cherokee', 'Compass', 'Grand Cherokee', 'Renegade', 'Wrangler'],
        engines: [{ name: '2.4 Multiair / 4.0 Inline 6', fuel: 'Бензин' }, { name: '5.7 V8 HEMI', fuel: 'Бензин' }, { name: '2.0 CRD / 2.2 Multijet', fuel: 'Дизел' }, { name: '2.7 CRD / 3.0 CRD V6', fuel: 'Дизел' }]
    },
    'Kia': { 
        models: ['Carens', 'Ceed / Pro_Ceed', 'Cerato / Optima', 'Picanto', 'Rio', 'Sorento', 'Sportage'], 
        engines: [{ name: '1.4 CVVT / 1.6 GDI', fuel: 'Бензин' }, { name: '2.0 DOHC', fuel: 'Бензин' }, { name: '1.4 CRDi / 1.6 CRDi', fuel: 'Дизел' }, { name: '2.0 CRDi', fuel: 'Дизел' }] 
    },
    'Lexus': { 
        models: ['CT200h', 'GS', 'IS (200/250/300h)', 'LS', 'NX', 'RX'], 
        engines: [{ name: '2.5 V6 / 3.0 V6 Petrol', fuel: 'Бензин' }, { name: 'Hybrid', fuel: 'Бензин' }, { name: '2.2 D-4D', fuel: 'Дизел' }] 
    },
    'Mazda': { 
        models: ['CX-3 / CX-5 / CX-7', 'Mazda 2', 'Mazda 3', 'Mazda 6', 'MX-5 (Miata)', 'Premacy / MPV'], 
        engines: [{ name: '1.6i / 2.0i MZR', fuel: 'Бензин' }, { name: '2.0 SkyActiv-G', fuel: 'Бензин' }, { name: '1.6 CiTD / 2.0 MZR-CD', fuel: 'Дизел' }, { name: '2.2 SkyActiv-D', fuel: 'Дизел' }] 
    },
    'Mercedes-Benz': { 
        models: ['A-Class', 'B-Class', 'C-Class (W202/W203/W204/W205)', 'CLK / CLS', 'E-Class (W210/W211/W212/W213)', 'GLA', 'GLK / GLC', 'ML / GLE', 'S-Class', 'Vito / Sprinter'], 
        engines: [{ name: 'C180 / E200 Kompressor', fuel: 'Бензин' }, { name: 'C200 / E350 V6', fuel: 'Бензин' }, { name: '200 CDI / 220 CDI', fuel: 'Дизел' }, { name: '270 CDI / 320 CDI V6', fuel: 'Дизел' }] 
    },
    'Nissan': {
        models: ['Almera', 'Juke', 'Micra', 'Navara', 'Note', 'Pathfinder', 'Qashqai', 'X-Trail'],
        engines: [{ name: '1.4i / 1.6i', fuel: 'Бензин' }, { name: '2.0i / 2.5 16V', fuel: 'Бензин' }, { name: '1.5 dCi / 1.6 dCi', fuel: 'Дизел' }, { name: '2.0 dCi', fuel: 'Дизел' }]
    },
    'Opel': { 
        models: ['Astra (F/G/H/J/K)', 'Corsa', 'Insignia', 'Meriva', 'Mokka / Antara', 'Vectra / Signum', 'Zafira'], 
        engines: [{ name: '1.4 / 1.6 / 1.8 16V', fuel: 'Бензин' }, { name: '1.4 Turbo / 1.6 Turbo', fuel: 'Бензин' }, { name: '1.3 / 1.7 / 1.9 CDTI', fuel: 'Дизел' }, { name: '2.0 DTI / 2.0 CDTI', fuel: 'Дизел' }] 
    },
    'Peugeot': { 
        models: ['106 / 206 / 207 / 208', '2008 / 3008 / 5008', '306 / 307 / 308', '406 / 407 / 508', 'Partner', 'RCZ'], 
        engines: [{ name: '1.4i / 1.6i 16V', fuel: 'Бензин' }, { name: '1.2 PureTech / 1.6 THP', fuel: 'Бензин' }, { name: '1.4 HDi / 1.6 HDi', fuel: 'Дизел' }, { name: '2.0 HDi', fuel: 'Дизел' }] 
    },
    'Renault': { 
        models: ['Captur / Kadjar', 'Clio', 'Espace', 'Kangoo', 'Koleos', 'Laguna', 'Megane', 'Scenic', 'Twingo'], 
        engines: [{ name: '1.2 16V / 1.6 16V', fuel: 'Бензин' }, { name: '1.2 TCe / 1.4 TCe', fuel: 'Бензин' }, { name: '1.5 dCi', fuel: 'Дизел' }, { name: '1.9 dCi / 2.0 dCi', fuel: 'Дизел' }] 
    },
    'Seat': { 
        models: ['Alhambra', 'Altea', 'Ateca / Arona', 'Cordoba', 'Exeo', 'Ibiza', 'Leon', 'Toledo'], 
        engines: [{ name: '1.4 16V / 1.6 MPI', fuel: 'Бензин' }, { name: '1.2 TSI / 1.4 TSI / 2.0 TFSI', fuel: 'Бензин' }, { name: '1.9 TDI', fuel: 'Дизел' }, { name: '1.6 TDI / 2.0 TDI', fuel: 'Дизел' }] 
    },
    'Skoda': { 
        models: ['Fabia', 'Kodiaq / Karoq', 'Octavia (Mk1/Mk2/Mk3)', 'Rapid / Roomster', 'Superb', 'Yeti'], 
        engines: [{ name: '1.2 HTP / 1.6 MPI', fuel: 'Бензин' }, { name: '1.2 TSI / 1.4 TSI / 2.0 RS', fuel: 'Бензин' }, { name: '1.4 TDI / 1.9 TDI', fuel: 'Дизел' }, { name: '1.6 TDI / 2.0 TDI', fuel: 'Дизел' }] 
    },
    'Suzuki': {
        models: ['Baleno', 'Grand Vitara', 'Ignis', 'Jimny', 'SX4', 'Swift', 'Vitara'],
        engines: [{ name: '1.3 16V (M13A)', fuel: 'Бензин' }, { name: '1.5i / 1.6 VVT', fuel: 'Бензин' }, { name: '2.0 16V', fuel: 'Бензин' }, { name: '1.9 DDiS / 1.6 DDiS', fuel: 'Дизел' }]
    },
    'Toyota': { 
        models: ['Auris', 'Avensis', 'Camry', 'Corolla', 'Hilux', 'Land Cruiser', 'Prius', 'RAV4', 'Yaris'], 
        engines: [{ name: '1.33 VVT-i / 1.6 VVT-i', fuel: 'Бензин' }, { name: '1.8 VVT-i / 2.0 VVT-i', fuel: 'Бензин' }, { name: '1.8 Hybrid', fuel: 'Бензин' }, { name: '1.4 D-4D / 2.0 D-4D', fuel: 'Дизел' }] 
    },
    'Volkswagen': { 
        models: ['Bora / Jetta', 'Golf (Mk3/Mk4/Mk5/Mk6/Mk7)', 'Passat (B5/B6/B7/B8)', 'Polo', 'Scirocco', 'Sharan', 'Tiguan', 'Touareg', 'Touran', 'Transporter / Caddy'], 
        engines: [{ name: '1.6 MPI / 1.4 16V', fuel: 'Бензин' }, { name: '1.4 TSI / 1.8T / 2.0 TFSI', fuel: 'Бензин' }, { name: '1.9 TDI (90/105/131 к.с.)', fuel: 'Дизел' }, { name: '2.0 TDI (140/170/190 к.с.)', fuel: 'Дизел' }] 
    },
    'Volvo': {
        models: ['C30', 'S60', 'S80', 'V40', 'V50', 'V70', 'XC60', 'XC90'],
        engines: [{ name: '1.6T / 2.0T / 2.5T', fuel: 'Бензин' }, { name: '2.0D / D3 / D4', fuel: 'Дизел' }, { name: '2.4D / D5 (5-цил)', fuel: 'Дизел' }]
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
    'Гуми & Джанти': ['Смяна на гуми (монтаж/баланс)', 'Нови гуми (летни/зимни)', 'Регулиране преден/заден мост (Реглаж)'],
    'Спирачна система': ['Спирачни дискове', 'Спирачни накладки', 'Спирачни маркучи', 'Спирачна течност', 'Спирачни апарати', 'Жило за ръчна'],
    'Ходова част & Окачване': ['Носачи / Шарнири', 'Биалети', 'Амортисьори', 'Тампони на амортисьори', 'Шенкели / Лагери', 'Стабилизираща щанга'],
    'Двигател & Запалителна система': ['Запалителни / Подгревни свещи', 'Бобини', 'Инжектори (дюзи - рециклирани/нови)', 'Турбокомпресор (рециклирано/ново)', 'Дебитомер / МАФ сензор', 'Ангренажен ремък / Верига', 'Пистов ремък'],
    'Климатик & Охлаждане': ['Радиатор (воден/клима)', 'Разширителен съд', 'Антифриз', 'Водна помпа', 'Термостат', 'Компресор климатик'],
    'Трансмисия & Съединител': ['Съединител комплект (маховик)', 'Масло скоростна кутия / Диф.', 'Полуоски / Карета / Маншони'],
    'Газова уредба (LPG/CNG)': ['Монтаж на нов газов инжекцион', 'Смяна филтър фаза течна', 'Смяна филтър фаза газова', 'Диагностика / Настройка компютър', 'Ревизия / Изпарител (редуктор)', 'Заверка / Преглед бутилка'],
    'Екология & Изпускателна сист.': ['DPF / FAP филтър (почистване/рециклиране)', 'Катализатор (преглед/смяна)', 'AdBlue система / Добавка', 'EGR клапан', 'Ламбда сонда', 'Мека връзка / Гърне'],
    'Акумулатор & Електроника': ['Акумулатор', 'Алтернатор (ремонт/нов)', 'Стартер (ремонт/нов)'],
    'Документи & Винетки': ['Годишен технически преглед (ГТП)', 'Винетка (БГ / чужбина)', 'Гражданска отговорност / Каско', 'Данък МПС'],
    'Други': ['Други дребни ремонти / Консумативи']
};

const fuelPrices = {
    'Бензин': { label: 'Цена A95', price: 1.61 },
    'Дизел': { label: 'Цена Дизел', price: 1.92 },
    'Газ': { label: 'Цена Газ (LPG)', price: 0.68 }
};

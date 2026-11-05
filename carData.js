// База данни с автомобили: Единични ДВГ двигатели, Хибриди и чисто EV батерии (Азбучен ред A-Z)
const carDatabase = {
    "Alfa Romeo": {
        models: ["147", "156", "159", "Giulia", "Giulietta", "Stelvio", "Tonale"],
        engines: [
            { name: "1.9 JTDm (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 JTDm (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 JTDm (170 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 TB MultiAir (170 hp)", fuel: "Бензин", type: "ICE" },
            { name: "2.0 Turbo Q4 (280 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.5 Hybrid (130 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Audi": {
        models: ["A3", "A4", "A6", "e-tron GT", "Q3", "Q4 e-tron", "Q5", "Q7"],
        engines: [
            { name: "Q4 35 e-tron (52 kWh - 170 hp)", fuel: "Електричество", type: "EV" },
            { name: "Q4 40 e-tron (77 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "Q4 50 e-tron quattro (77 kWh - 299 hp)", fuel: "Електричество", type: "EV" },
            { name: "e-tron GT quattro (83.7 kWh - 476 hp)", fuel: "Електричество", type: "EV" },
            { name: "RS e-tron GT (83.7 kWh - 598 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.9 TDI (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 TDI (105 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 TDI (130 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (170 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (190 hp)", fuel: "Дизел", type: "ICE" },
            { name: "3.0 TDI V6 (240 hp)", fuel: "Дизел", type: "ICE" },
            { name: "3.0 TDI V6 (272 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.8 TFSI (160 hp)", fuel: "Бензин", type: "ICE" },
            { name: "2.0 TFSI (211 hp)", fuel: "Бензин", type: "ICE" },
            { name: "40 TFSI e Plug-in Hybrid (204 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "BMW": {
        models: ["i3", "i4", "iX", "iX3", "Series 1 (E87/F20)", "Series 3 (E46/E90/F30/G20)", "Series 5 (E60/F10/G30)", "X3", "X5"],
        engines: [
            { name: "i3 60Ah (22 kWh - 170 hp)", fuel: "Електричество", type: "EV" },
            { name: "i3 94Ah (33 kWh - 170 hp)", fuel: "Електричество", type: "EV" },
            { name: "i3 120Ah (42.2 kWh - 170 hp)", fuel: "Електричество", type: "EV" },
            { name: "i4 eDrive40 (80.7 kWh - 340 hp)", fuel: "Електричество", type: "EV" },
            { name: "i4 M50 (80.7 kWh - 544 hp)", fuel: "Електричество", type: "EV" },
            { name: "iX3 (74 kWh - 286 hp)", fuel: "Електричество", type: "EV" },
            { name: "iX xDrive50 (105.2 kWh - 523 hp)", fuel: "Електричество", type: "EV" },
            { name: "318i Valvetronic (143 hp)", fuel: "Бензин", type: "ICE" },
            { name: "320i (150 hp)", fuel: "Бензин", type: "ICE" },
            { name: "320d N47 (177 hp)", fuel: "Дизел", type: "ICE" },
            { name: "320d B47 (190 hp)", fuel: "Дизел", type: "ICE" },
            { name: "330d M57 (231 hp)", fuel: "Дизел", type: "ICE" },
            { name: "330d N57 (245 hp)", fuel: "Дизел", type: "ICE" },
            { name: "530d (258 hp)", fuel: "Дизел", type: "ICE" },
            { name: "330e iPerformance Plug-in (252 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "530e Plug-in Hybrid (252 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Citroen": {
        models: ["Berlingo", "C3", "C4 (MK1)", "C4 (MK2)", "C4 (MK3)", "C5", "e-C4"],
        engines: [
            { name: "e-C4 (50 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "e-C4 (54 kWh - 156 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.6 HDi (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 HDi (110 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 e-HDi (112 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 BlueHDi (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 HDi (138 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 HDi (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 HDi (163 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 VTi (95 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 VTi (120 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.2 PureTech (110 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.2 PureTech (130 hp)", fuel: "Бензин", type: "ICE" }
        ]
    },
    "Dacia": {
        models: ["Duster", "Jogger", "Logan", "Sandero", "Spring"],
        engines: [
            { name: "Spring Electric 45 (26.8 kWh - 45 hp)", fuel: "Електричество", type: "EV" },
            { name: "Spring Electric 65 (26.8 kWh - 65 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.5 dCi (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.5 dCi (110 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.0 TCe Eco-G (100 hp - LPG)", fuel: "Газ", type: "ICE" },
            { name: "1.3 TCe (130 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.3 TCe (150 hp)", fuel: "Бензин", type: "ICE" },
            { name: "HYBRID 140 (1.6L - 140 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Fiat": {
        models: ["500", "500e", "Bravo", "Doblò", "Grande Punto", "Panda", "Tipo"],
        engines: [
            { name: "500e (23.8 kWh - 95 hp)", fuel: "Електричество", type: "EV" },
            { name: "500e (42 kWh - 118 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.3 MultiJet (75 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.3 MultiJet (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 MultiJet (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 MultiJet (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.2 Fire (69 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.4 Fire (95 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.0 Hybrid (70 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Ford": {
        models: ["C-Max", "Fiesta", "Focus", "Kuga", "Mondeo", "Mustang Mach-E", "Transit Custom"],
        engines: [
            { name: "Mustang Mach-E SR RWD (70 kWh - 269 hp)", fuel: "Електричество", type: "EV" },
            { name: "Mustang Mach-E ER AWD (91 kWh - 351 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.6 TDCi (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 TDCi (115 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDCi (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDCi (163 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.0 EcoBoost (100 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.0 EcoBoost (125 hp)", fuel: "Бензин", type: "ICE" },
            { name: "2.5 Duratec FHEV (190 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "2.5 Duratec PHEV (225 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Honda": {
        models: ["Accord", "Civic", "CR-V", "Honda e", "HR-V", "Jazz", "e:Ny1"],
        engines: [
            { name: "Honda e (35.5 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "Honda e Advance (35.5 kWh - 154 hp)", fuel: "Електричество", type: "EV" },
            { name: "e:Ny1 (68.8 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "2.2 i-CTDi (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.2 i-DTEC (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 i-VTEC (100 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.8 i-VTEC (140 hp)", fuel: "Бензин", type: "ICE" },
            { name: "2.0 e:HEV Full Hybrid (184 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Hyundai": {
        models: ["Elantra", "i20", "i30", "Ioniq Electric", "Ioniq 5", "Ioniq 6", "Kona Electric", "Tucson"],
        engines: [
            { name: "Ioniq Electric (28 kWh - 120 hp)", fuel: "Електричество", type: "EV" },
            { name: "Ioniq Electric (38.3 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "Kona Electric Short Range (39.2 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "Kona Electric Long Range (64 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "Ioniq 5 Standard Range (58 kWh - 170 hp)", fuel: "Електричество", type: "EV" },
            { name: "Ioniq 5 Long Range RWD (77.4 kWh - 229 hp)", fuel: "Електричество", type: "EV" },
            { name: "Ioniq 5 Long Range AWD (77.4 kWh - 325 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.6 CRDi (115 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 CRDi (136 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 MPI (100 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 T-GDI (177 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 HEV Full Hybrid (141 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "1.6 T-GDI PHEV (265 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Jeep": {
        models: ["Avenger", "Compass", "Grand Cherokee", "Renegade", "Wrangler"],
        engines: [
            { name: "Avenger EV (54 kWh - 156 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.6 Multijet (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 Multijet (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.3 T4 4xe Plug-in Hybrid (190 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "1.3 T4 4xe Plug-in Hybrid (240 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Kia": {
        models: ["Ceed", "EV6", "EV9", "Niro", "Rio", "Sportage"],
        engines: [
            { name: "e-Niro Short Range (39.2 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "e-Niro Long Range (64 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "EV6 RWD (77.4 kWh - 229 hp)", fuel: "Електричество", type: "EV" },
            { name: "EV6 AWD (77.4 kWh - 325 hp)", fuel: "Електричество", type: "EV" },
            { name: "EV6 GT (77.4 kWh - 585 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.6 CRDi (115 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 CRDi (136 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 MPI (100 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 T-GDi (177 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 GDI Hybrid (141 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Mercedes-Benz": {
        models: ["A-Class", "B-Class", "C-Class", "E-Class", "EQA", "EQB", "EQC", "EQE", "GLE"],
        engines: [
            { name: "EQA 250 (66.5 kWh - 190 hp)", fuel: "Електричество", type: "EV" },
            { name: "EQB 300 4MATIC (66.5 kWh - 228 hp)", fuel: "Електричество", type: "EV" },
            { name: "EQC 400 4MATIC (80 kWh - 408 hp)", fuel: "Електричество", type: "EV" },
            { name: "EQE 350+ (90.6 kWh - 292 hp)", fuel: "Електричество", type: "EV" },
            { name: "C 200 CDI OM646 (136 hp)", fuel: "Дизел", type: "ICE" },
            { name: "C 220 CDI OM651 (170 hp)", fuel: "Дизел", type: "ICE" },
            { name: "E 220 d OM654 (194 hp)", fuel: "Дизел", type: "ICE" },
            { name: "E 350 d V6 (258 hp)", fuel: "Дизел", type: "ICE" },
            { name: "C 180 CGI (156 hp)", fuel: "Бензин", type: "ICE" },
            { name: "C 200 CGI (184 hp)", fuel: "Бензин", type: "ICE" },
            { name: "C 300 e Plug-in Hybrid (320 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "E 300 de Diesel Plug-in (306 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Nissan": {
        models: ["Ariya", "Juke", "Leaf (ZE0)", "Leaf (ZE1)", "Micra", "Qashqai", "X-Trail"],
        engines: [
            { name: "Leaf I (24 kWh - 109 hp)", fuel: "Електричество", type: "EV" },
            { name: "Leaf I (30 kWh - 109 hp)", fuel: "Електричество", type: "EV" },
            { name: "Leaf II (40 kWh - 150 hp)", fuel: "Електричество", type: "EV" },
            { name: "Leaf II e+ (62 kWh - 217 hp)", fuel: "Електричество", type: "EV" },
            { name: "Ariya 63 kWh RWD (218 hp)", fuel: "Електричество", type: "EV" },
            { name: "Ariya 87 kWh RWD (242 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.5 dCi (106 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.5 dCi (110 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 dCi (130 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.3 DIG-T (140 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.5 e-POWER Hybrid (190 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Opel": {
        models: ["Astra (H)", "Astra (J)", "Astra (K)", "Corsa (D)", "Corsa (E)", "Corsa-e", "Insignia", "Mokka", "Mokka-e"],
        engines: [
            { name: "Corsa-e (50 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "Mokka-e (50 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "Astra Electric (54 kWh - 156 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.3 CDTI (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.7 CDTI (110 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.7 CDTI (125 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 CDTI (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 CDTI (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 CDTI (160 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 Turbo (140 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 Twinport (105 hp)", fuel: "Бензин", type: "ICE" },
            { name: "Astra Hybrid (180 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Peugeot": {
        models: ["207", "208", "307", "308", "508", "2008", "3008", "e-208", "e-2008", "e-308"],
        engines: [
            { name: "e-208 (50 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "e-2008 (50 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "e-308 (54 kWh - 156 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.6 HDi (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 HDi (110 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 e-HDi (112 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 HDi (136 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 HDi (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 HDi (163 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 VTi (95 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 VTi (120 hp)", fuel: "Бензин", type: "ICE" },
            { name: "3008 HYBRID4 (225 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Renault": {
        models: ["Clio", "Kadjar", "Laguna", "Megane", "Megane E-Tech", "Scenic", "Zoe"],
        engines: [
            { name: "Zoe Q210 (22 kWh - 88 hp)", fuel: "Електричество", type: "EV" },
            { name: "Zoe R90/ZE40 (41 kWh - 92 hp)", fuel: "Електричество", type: "EV" },
            { name: "Zoe R135/ZE50 (52 kWh - 135 hp)", fuel: "Електричество", type: "EV" },
            { name: "Megane E-Tech EV40 (40 kWh - 130 hp)", fuel: "Електричество", type: "EV" },
            { name: "Megane E-Tech EV60 (60 kWh - 220 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.5 dCi (85 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.5 dCi (106 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.5 dCi (110 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 dCi (130 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 dCi (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.2 TCe (115 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 16V (110 hp)", fuel: "Бензин", type: "ICE" },
            { name: "E-TECH Full Hybrid (145 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Seat": {
        models: ["Alhambra", "Altea", "Arona", "Ateca", "Ibiza", "Leon", "Mii Electric"],
        engines: [
            { name: "Mii Electric (36.8 kWh - 83 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.9 TDI (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 TDI (105 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (170 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (184 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 TSI (125 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.8 TSI (180 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.4 e-HYBRID Plug-in (204 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Skoda": {
        models: ["Citigo e iV", "Enyaq iV", "Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Superb"],
        engines: [
            { name: "Citigo e iV (36.8 kWh - 83 hp)", fuel: "Електричество", type: "EV" },
            { name: "Enyaq iV 60 (62 kWh - 179 hp)", fuel: "Електричество", type: "EV" },
            { name: "Enyaq iV 80 (82 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "Enyaq vRS iV (82 kWh - 299 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.9 TDI (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 TDI (105 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (184 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 TSI (122 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.8 TSI (160 hp)", fuel: "Бензин", type: "ICE" },
            { name: "Octavia iV Plug-in Hybrid (204 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "Superb iV Plug-in Hybrid (218 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Suzuki": {
        models: ["Grand Vitara", "Ignis", "Jimny", "Swift", "SX4", "SX4 S-Cross", "Vitara"],
        engines: [
            { name: "1.4 Boosterjet (140 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 VVT (120 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 DDiS (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 DDiS (120 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 Boosterjet Mild Hybrid (129 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "1.5 Dualjet Strong Hybrid (116 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Tesla": {
        models: ["Model 3", "Model S", "Model X", "Model Y"],
        engines: [
            { name: "Model 3 SR+ RWD (55 kWh LFP - 283 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model 3 Long Range Dual Motor (75 kWh - 440 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model 3 Performance (82 kWh - 513 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model Y SR RWD (60 kWh LFP - 299 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model Y Long Range AWD (75 kWh - 514 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model Y Performance (75 kWh - 534 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model S Long Range (100 kWh - 670 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model S Plaid Tri-Motor (100 kWh - 1020 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model X Long Range (100 kWh - 670 hp)", fuel: "Електричество", type: "EV" },
            { name: "Model X Plaid Tri-Motor (100 kWh - 1020 hp)", fuel: "Електричество", type: "EV" }
        ]
    },
    "Toyota": {
        models: ["Aurise", "Avensis", "Aygo", "bZ4X", "C-HR", "Corolla", "Prius", "RAV4", "Yaris"],
        engines: [
            { name: "bZ4X FWD (71.4 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "bZ4X AWD (71.4 kWh - 218 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.4 D-4D (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 D-4D (126 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.2 D-CAT (177 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.33 VVT-i (99 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.6 Valvematic (132 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.8 Hybrid Synergy Drive (122 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "1.8 Hybrid Synergy Drive (136 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "2.0 Dynamic Force Hybrid (184 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "2.5 Hybrid Dynamic Force (218 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Volkswagen": {
        models: ["e-Golf", "Golf V", "Golf VI", "Golf VII", "Golf VIII", "ID.3", "ID.4", "ID.5", "Passat B6", "Passat B7", "Passat B8", "Polo", "Tiguan", "Touareg"],
        engines: [
            { name: "e-Golf (24.2 kWh - 115 hp)", fuel: "Електричество", type: "EV" },
            { name: "e-Golf (35.8 kWh - 136 hp)", fuel: "Електричество", type: "EV" },
            { name: "ID.3 Pure (45 kWh - 150 hp)", fuel: "Електричество", type: "EV" },
            { name: "ID.3 Pro (58 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "ID.3 Pro S (77 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "ID.4 Pure (52 kWh - 170 hp)", fuel: "Електричество", type: "EV" },
            { name: "ID.4 Pro (77 kWh - 204 hp)", fuel: "Електричество", type: "EV" },
            { name: "ID.4 GTX AWD (77 kWh - 299 hp)", fuel: "Електричество", type: "EV" },
            { name: "1.9 TDI (90 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.9 TDI (105 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (140 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (170 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 TDI (190 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.4 TSI (122 hp)", fuel: "Бензин", type: "ICE" },
            { name: "1.8 TSI (160 hp)", fuel: "Бензин", type: "ICE" },
            { name: "2.0 TSI (200 hp)", fuel: "Бензин", type: "ICE" },
            { name: "Golf GTE Plug-in Hybrid (204 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "Passat GTE Plug-in Hybrid (218 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    },
    "Volvo": {
        models: ["C30", "C40 Recharge", "EX30", "S60 / V60", "S80 / V70", "XC40", "XC40 Recharge", "XC60", "XC90"],
        engines: [
            { name: "EX30 Single Motor (51 kWh LFP - 272 hp)", fuel: "Електричество", type: "EV" },
            { name: "EX30 Extended Range (69 kWh - 272 hp)", fuel: "Електричество", type: "EV" },
            { name: "XC40 Recharge Single Motor (69 kWh - 231 hp)", fuel: "Електричество", type: "EV" },
            { name: "XC40 Recharge Twin Motor AWD (78 kWh - 408 hp)", fuel: "Електричество", type: "EV" },
            { name: "2.0 D3 (150 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.0 D4 (190 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.4 D5 5-cyl (185 hp)", fuel: "Дизел", type: "ICE" },
            { name: "2.4 D5 5-cyl (215 hp)", fuel: "Дизел", type: "ICE" },
            { name: "1.6 T3 (150 hp)", fuel: "Бензин", type: "ICE" },
            { name: "2.0 T5 (245 hp)", fuel: "Бензин", type: "ICE" },
            { name: "T6 Recharge Plug-in Hybrid (340 hp)", fuel: "Хибрид", type: "Hybrid" },
            { name: "T8 Recharge Plug-in Hybrid (407 hp)", fuel: "Хибрид", type: "Hybrid" }
        ]
    }
};

const universalEngines = [
    { name: "Стандартен двигател (1.2L - 2.0L)", fuel: "Дизел", type: "ICE" },
    { name: "Електромотор / Батерия EV", fuel: "Електричество", type: "EV" },
    { name: "Хибридна система HEV/PHEV", fuel: "Хибрид", type: "Hybrid" }
];

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

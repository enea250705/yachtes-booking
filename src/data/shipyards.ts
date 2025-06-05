export interface YachtModel {
  id: string;
  name: string;
  length: string;
  thumbnail: string;
  shortDesc: string;
  specs: {
    cabins: string;
    guests: string;
    engines?: string;
    maxSpeed: string;
  };
  gallery?: string[];
  features?: Record<string, string[]>;
  description?: string[];
}

export interface ShipyardData {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  models: YachtModel[];
}

export interface ShipyardDataExtended {
  name: string;
  logo: string;
  description: string;
  fullDescription: string;
  featuredImage: string;
  established: string;
  location: string;
  headquarters: string;
  website: string;
  specialties: string[];
  awards: string[];
  gallery: string[];
  story: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  models: {
    id: string;
    name: string;
    thumbnail: string;
    shortDesc: string;
    fullDesc: string;
    specs: {
      length: string;
      beam: string;
      draft: string;
      displacement: string;
      fuel: string;
      water: string;
      maxSpeed: string;
      cruisingSpeed: string;
      range: string;
      engines: string;
      guests: number;
      cabins: number;
      crew: number;
    };
    gallery: string[];
    features: Record<string, string[]>;
    materials: string[];
  }[];
}

// Default gallery images for all models
const defaultGallery = [
  "/LEKKER 45-1.jpg",
  "/lekker 45-2.jpg",
  "/LEKKER 38-1.jpg"
];

// Default features for all models
const defaultFeatures = {
  "Exterior": [
    "Spacious deck",
    "Hydraulic swim platform",
    "Sun loungers",
    "Exterior dining area",
    "LED lighting"
  ],
  "Interior": [
    "Luxury finishes",
    "Climate control",
    "Designer furniture",
    "Mood lighting",
    "Entertainment system"
  ],
  "Technical": [
    "Advanced navigation systems",
    "Digital controls",
    "Stabilization system",
    "Bow thruster",
    "Autopilot"
  ],
  "Comfort": [
    "Soundproofing",
    "High-end appliances",
    "Premium bedding",
    "Fresh water maker",
    "Generator"
  ]
};

// Default description for all models
const defaultDescription = [
  "Experience unparalleled luxury and performance with this exceptional yacht. Designed for those who demand the very best, it combines cutting-edge technology with elegant styling.",
  "The spacious interior offers generous living areas and premium accommodations, while the exterior provides multiple spaces for relaxation and entertainment.",
  "Every detail has been meticulously crafted to ensure an extraordinary yachting experience, from the sophisticated navigation systems to the finest interior finishes."
];

// Create a function to add default data to models
const enhanceModel = (model: YachtModel): YachtModel => {
  return {
    ...model,
    gallery: model.gallery || defaultGallery,
    features: model.features || defaultFeatures,
    description: model.description || defaultDescription
  };
};

export const shipyardsData: Record<string, ShipyardData> = {
  "evo-yachts": {
    id: "evo-yachts",
    name: "EVO Yachts",
    headline: "Innovation & Contemporary Design",
    description: "Known for innovative expandable deck designs and contemporary styling.",
    image: "/plus6.png",
    models: [
      {
        id: "r-plus",
        name: "R+",
        length: "58 ft / 17.70 m",
        thumbnail: "/plus6.png",
        shortDesc: "Sporty yet functional, the Evo R+ features an enclosed deck and an innovative aft platform, making it ideal for long stays on board in total comfort.",
        specs: {
          cabins: "Custom",
          guests: "12/16",
          engines: "2 X IPS 950 VOLVO PENTA (725 HP)",
          maxSpeed: "33 knots"
        },
        gallery: [
          "/plus6.png",
          "/plus1.png",
          "/plus2.png",
          "/plus3.png",
          "/plus4.png",
          "/plus5.png",
          "/plus7.png",
          "/plus8.png",
          "/plus9.png",
          "/plus10.png",
          "/plus11.png",
          "/plus12.png",
          "/plus13.png",
          "/plus14.png"
        ],
        description: [
          "For an Unbelievably Thorough Experience - Sporty yet functional, the Evo R+ features an enclosed deck and an innovative aft platform, making it ideal for long stays on board in total comfort.",
          "The black, angular aluminium top, in keeping with the typical Evo Yachts style, emphasises the appeal of the sporty profile. The cockpit with its sharp lines is completely surrounded by windows: bright and refined, like the entire Main Deck, it offers a 360-degree panoramic view, with openings inviting natural ventilation.",
          "The interiors are furnished with sophisticated materials that emphasise the search for the perfect balance between dynamic appearance and comfort on board. Warm fabrics, such as alcantara, have been chosen, and the palette is based on a harmony of three colours and materials: white, teak and carbon."
        ],
        features: {
          "Technical Specifications": [
            "Length: 58 ft / 17.70 m",
            "Maximum beam: 17.40 ft / 5.30 m",
            "Maximum beam when opened: 23.95 ft / 7.30 m",
            "Displacement unloaded: 39,685 lbs / 18,000 kg",
            "Fuel capacity: 554 US gal / 2,100 L",
            "Water tank capacity: 400 L",
            "Maximum speed: 38 mph / 33 knots",
            "Cruising speed: 31 mph / 27 knots",
            "Maximum guests: 12/16 people",
            "CE category: A-B"
          ],
          "On Board Systems": [
            "16\" multi-function touchscreen GPS System with echo depth gauge",
            "AGM Batteries: 2x160Ah (start), 4x225Ah (services), 1x90Ah (generator)",
            "Inverter 24/230v 2500w",
            "Converter DC/DC 24/12 20A",
            "Joystick control with IPS propulsion",
            "VHF (Garmin)",
            "Batteries charger 12v 2 output + 24v",
            "Black water tank with grinder",
            "Autoclave + redundancy",
            "Active corrosion protection kit",
            "Autopilot & Low Speed System",
            "J driving System",
            "Interceptor (navigation auto-trim)"
          ],
          "Exterior Features": [
            "H-Top in aluminum and glass with steel door",
            "Hull and deck painting in white gelcoat",
            "Hydraulic anchor locker",
            "Hydraulic tilting roller, winch 2000w, anchor, chain 100mt",
            "6 retractable bollards",
            "VTR aft sundeck with storage",
            "Cockpit, walkways and transom platform in teak solid wood",
            "Corian outdoor kitchen top and induction hob",
            "Beach-area retractible shower",
            "Sea ladder with teak steps"
          ],
          "Interior Features": [
            "Layout: 2 cabins + 2 bathrooms",
            "Salon equipped with sofa, folding table, kitchen with induction cooktop",
            "Dinette with L-shaped sofa, refrigerator and storage cabinet",
            "Drive console with hydro-coating surface",
            "GRP driver's seat with customizable upholstery colors",
            "Upholstered furniture and equipment",
            "Reading lights",
            "3 LED mirror TVs with system, decoder and antenna",
            "Premium materials: white, teak, and carbon color palette"
          ],
          "Propulsion": [
            "2 x IPS 800 VOLVO PENTA (625 HP)",
            "2 X IPS 950 VOLVO PENTA (725 HP)"
          ]
        }
      },
      {
        id: "r4",
        name: "R4",
        length: "43 ft / 13.04 m",
        thumbnail: "/r4-1.jpg",
        shortDesc: "The Evo R4 is a 43-foot day cruiser with innovative expandable deck that transforms into a private island in just 30 seconds.",
        specs: {
          cabins: "1 + dinette",
          guests: "12",
          engines: "Twin Volvo Penta IPS 600/500",
          maxSpeed: "36 knots"
        },
        gallery: [
          "/models/evo/r4-1.jpg",
          "/models/evo/r4-2.jpg",
          "/models/evo/r4-3.jpg"
        ],
        description: [
          "The Evo R4 represents the perfect balance between sleek design and transformable functionality. With a simple touch and 30 seconds, the hydraulic XTension bulwarks open to expand the beach area into a 270-square-foot terrace, creating a private island experience.",
          "The minimalist exterior conceals highly innovative features, while the bow is designed with clean lines and a large locker that accommodates cleats, anchor, and fenders beneath the deck. The cockpit offers multiple configurations to adapt to different lifestyles.",
          "The R4 features premium materials throughout, including solid teak decking, leather upholstery, and high-end fixtures. The interior includes a queen-size bed cabin, transformable dinette, and private bathroom with premium fixtures."
        ],
        features: {
          "Technical Specifications": [
            "Length: 43 ft / 13.04 m",
            "Maximum beam: 14.8 ft / 4.52 m",
            "Maximum beam when extended: 20.7 ft / 6.31 m",
            "Displacement unloaded: 24,912 lbs / 11,300 kg",
            "Fuel capacity: 264 US gal / 1,000 L",
            "Maximum speed: 36 knots (41 mph)",
            "Cruising speed: 28 knots (32 mph)",
            "CE category: A"
          ],
          "On Board Systems": [
            "Joystick control by Volvo",
            "Volvo Low Speed system",
            "Auto Pilot System (Volvo)",
            "12-inch multi-function touchscreen (Volvo/Garmin)",
            "AGM Batteries system",
            "Black water tank with macerator",
            "VHF 300 (Garmin)",
            "Audio System with subwoofer"
          ],
          "Exterior Features": [
            "Hydraulic XTension bulwarks (+40% deck space)",
            "Optional transformer platform (270° rotation)",
            "Cockpit with kitchen options",
            "180L ice box for entertaining",
            "Beach-area retractible shower",
            "Solid teak cockpit",
            "Aft sundeck for up to 8 sunbeds",
            "Optional T-Top or awnings"
          ],
          "Interior Features": [
            "Contemporary staircase design",
            "Premium leather interiors",
            "V-shaped dinette with hidden TV",
            "Transformable dinette (extra bed)",
            "Queen-size bed cabin with storage",
            "Private bathroom with premium fixtures",
            "Reading lights throughout"
          ]
        }
      },
      {
        id: "r4-wa",
        name: "R4 WA",
        length: "43 ft / 13.04 m",
        thumbnail: "/r4-wa-4.jpg",
        shortDesc: "The Evo R4 WA is a 43-foot walkaround day cruiser with an expanded deck area, automotive-inspired design, and the signature extensible XTension bulwarks.",
        gallery: [
          "/r4-wa-1.jpg",
          "/r4-wa-2.jpg",
          "/r4-wa-3.jpg",
          "/r4-wa-4.jpg",
          "/r4-wa-5.jpg"
        ],
        specs: {
          cabins: "1 + dinette",
          guests: "12",
          engines: "Twin Volvo Penta IPS 600/500",
          maxSpeed: "38 knots"
        },
        description: [
          "The Evo R4 Walkaround takes the innovative R4 platform and enhances it with a larger walkable area around the helm station. Drawing strong inspiration from the automotive world, it features distinctive elements like a steel T-Top and carbon air inlets on both sides of the hull.",
          "The sleek console integrates all controls and navigation systems, with a Volvo Penta IPS joystick and dual 12\" touchscreens for an exciting steering experience. With its signature hydraulic XTension bulwarks, the beach area expands by 40% to create a 270-square-foot terrace.",
          "The multi-faceted bow includes a spacious sundeck, integrated speakers, and a hydraulic hatch concealing the anchor, fenders, and even a hand shower. The interior features an open space design from bow to stern with a transformable dinette for additional sleeping space."
        ],
        features: {
          "Technical Specifications": [
            "Length: 43 ft / 13.04 m",
            "Maximum beam: 14.8 ft / 4.52 m",
            "Maximum beam when extended: 20.7 ft / 6.31 m",
            "Displacement unloaded: 24,912 lbs / 11,300 kg",
            "Fuel capacity: 264 US gal / 1,000 L",
            "Walkaround surface: 86 ft",
            "CE category: A"
          ],
          "On Board Systems": [
            "Joystick control by Volvo",
            "Volvo Low Speed system",
            "Auto Pilot System (Volvo)",
            "12-inch multi-function touchscreen (Volvo/Garmin)",
            "AGM Batteries system",
            "Black water tank with macerator",
            "VHF 300 (Garmin)",
            "Audio System Basic"
          ],
          "Exterior Features": [
            "Steel T-Top with integrated shade",
            "Carbon air inlets on hull sides",
            "Hydraulic XTension bulwarks (+40% space)",
            "Transformer platform (270° rotation)",
            "Multi-faceted bow with sundeck",
            "Speakers integrated in windscreen",
            "Hydraulic bow hatch for storage",
            "Customizable kitchen options",
            "180L ice box for entertaining"
          ],
          "Interior Features": [
            "Open space design bow to stern",
            "Contemporary staircase design",
            "Eco-leather interior finishes",
            "Transformable dinette (extra bed)",
            "Maximum space utilization",
            "Reading lights throughout",
            "Electrical table (convertible)"
          ]
        }
      },
      {
        id: "r4-xt",
        name: "R4 XT",
        length: "43 ft + 3.3 ft platform / 13 m + 1 m",
        thumbnail: "/r4-4.jpg",
        shortDesc: "The evolution of the R4 with extensible bulwarks plus a revolutionary custom multifunction platform that extends the beach area's length by 1 meter.",
        specs: {
          cabins: "1 + dinette",
          guests: "12",
          engines: "2 x IPS 650 Volvo Penta 353 hp",
          maxSpeed: "36 knots"
        },
        description: [
          "The R4 XT marks another evolution for EVO Yachts, adding to the extensible bulwarks a custom multifunction platform that expands the beach area's length by up to 1 meter. This revolutionary tender lift transformer, never before seen on a 40ft yacht, creates an exceptionally spacious leisure area.",
          "The new beach area features three main configurations: lifted for easier boarding, underwater for tender hauling and bathing, or at water line to provide a longer beach area. The stern can be equipped with a large comfortable sofa island featuring a 4-place sunbed with tall headrests.",
          "Below deck, there's a whole new range of custom options and convertible spaces, with dining and relaxation areas at the bow equipped with sofas and a large dinette that can be easily converted into a double berth or a pleasant open space. The yacht is available in both classic sports version and walkaround version."
        ],
        features: {
          "Technical Specifications": [
            "Length: 43 ft + 3.3 ft platform / 13 m + 1 m",
            "Maximum beam: 14.8 ft / 4.52 m",
            "Maximum beam when extended: 20.7 ft / 6.31 m",
            "Displacement unloaded: 24,912 lbs / 11,300 kg",
            "Fuel capacity: 264 US gal / 1,000 L",
            "Water capacity: 106 US gal / 400 L",
            "CE category: A",
            "Berths: 2+2"
          ],
          "On Board Systems": [
            "Joystick control by Volvo",
            "Volvo Low Speed system",
            "Auto Pilot System (Volvo)",
            "Volvo Active Corrosion Protection Kit",
            "12-inch multi-function touchscreen (Volvo/Garmin)",
            "AGM Batteries system",
            "Black water tank with macerator",
            "VHF 300 (Garmin)",
            "Audio System Basic"
          ],
          "Exterior Features": [
            "Hydraulic XTension bulwarks (+40% deck space)",
            "Custom multifunction stern platform (1m extension)",
            "Three-position platform operation (lifted, underwater, water line)",
            "Large sofa island with 4-place sunbed",
            "Sliding multifunctional dinette at stern",
            "Cockpit fridge",
            "Beach-area retractible shower",
            "Swim ladder with solid teak steps",
            "Optional T-Top or canopies for shade"
          ],
          "Interior Features": [
            "Contemporary staircase design in stainless steel and plexiglass",
            "Fabric and eco-leather interior finishes",
            "Transformable dinette with table",
            "Bow area with dining and relaxation space",
            "Reading lights throughout",
            "Indoor electrical table (convertible into a bed)",
            "Available in classic or walkaround versions"
          ]
        }
      },
      {
        id: "r6",
        name: "R6",
        length: "58 ft / 17.70 m",
        thumbnail: "/r6-3.jpg",
        shortDesc: "The ultimate synthesis between form and function, featuring innovative expandable deck space with a unique roto-translation system.",
        gallery: [
          "/r6-1.jpg",
          "/r6-2.jpg",
          "/r6-3.jpg",
          "/r6-4.jpg",
          "/r6-5.jpg",
          "/r6-6.jpg"
        ],
        specs: {
          cabins: "Custom (up to 4)",
          guests: "16",
          engines: "2 x IPS 800/950 VOLVO PENTA (625/725 hp)",
          maxSpeed: "36 knots"
        },
        description: [
          "The R6 is different from anything you've seen before, it's the ultimate synthesis between form and function. Designed to engage everyone aboard, the helm station is better integrated with the cockpit with a side chaise longue, while the kitchenette is right behind the console seat.",
          "The Xtensions bulwarks system is now equipped with a roto-translation system that expands the sundeck with no operation gaps. The beach area and the cockpit create a single open space where you and your friends can relax, dance, chat, and experience the sea to the fullest.",
          "R6 can accommodate up to 4 spacious and bright double cabins, with hidden storage under the berths, making it perfect for longer cruises with enhanced comfort. It can be equipped with upper and lower deck kitchenettes, both customizable with different hobs."
        ],
        features: {
          "Technical Specifications": [
            "Length: 58 ft / 17.70 m",
            "Maximum beam: 17.40 ft / 5.30 m",
            "Maximum beam when opened: 23.95 ft / 7.30 m",
            "Displacement unloaded: 39,685 lbs / 18,000 kg",
            "Fuel capacity: 554 US gal / 2,100 L",
            "Maximum speed: 36 knots (41 mph)",
            "Cruising speed: 28 knots (32 mph)",
            "Range: 280 nautical miles",
            "Maximum guests: 16 people",
            "CE category: A-B"
          ],
          "On Board Systems": [
            "Joystick by Volvo",
            "GPS System with echo depth gauge",
            "Auto Pilot System (Volvo)",
            "Interceptor (navigation auto-trim)",
            "Volvo Low Speed system",
            "Volvo J Drive System (high speed joystick driving)",
            "16-inch multi-function touchscreen (Volvo/Garmin)",
            "Inverter 24/230v 2500w",
            "VHF 300 (Garmin)",
            "Black water tank with grinder"
          ],
          "Exterior Features": [
            "Hydraulic XTension bulwarks with roto-translation system",
            "Optional Transformer platform rotating 270°",
            "Hydraulic anchor locker",
            "6 retractable bollards",
            "VTR aft sundeck with storage",
            "Teak solid wood throughout deck areas",
            "Corian outdoor kitchen top with induction hob",
            "Beach-area retractible shower",
            "Integrated helm station with side chaise longue",
            "Tender garage under sundeck with roller system"
          ],
          "Interior Features": [
            "Customizable layout with up to 4 double cabins",
            "Spacious and bright cabin designs",
            "Hidden storage under berths",
            "Upper and lower deck kitchenettes (customizable)",
            "Furniture and equipment upholstery",
            "Reading lights",
            "3 LED mirror TVs with complete entertainment system",
            "Black aluminum H-Top with steel door",
            "Hybrid open design connecting all areas"
          ]
        }
      },
      {
        id: "r-line",
        name: "R-Line",
        length: "42 ft / 12.8 m",
        thumbnail: "/r4-3.jpg",
        shortDesc: "Minimalist open yacht design that transforms into a private island in just 30 seconds with expandable hydraulic bulwarks.",
        specs: {
          cabins: "1 + convertible dinette",
          guests: "8",
          engines: "Twin Volvo Penta D6",
          maxSpeed: "37 knots"
        },
        description: [
          "The Evo R-Line represents minimalist design at its finest. With a simple touch and 30 seconds, the hydraulic XTension bulwarks open to expand the beach area into a 270-square-foot terrace, creating a private island experience for relaxation, sunbathing, or entertaining.",
          "The bow is designed with clean lines and a large hydraulic locker that accommodates cleats, anchor, and fenders beneath the deck. The smooth teak panel features the helm station, which is designed to create a fast and responsive steering experience with a large windscreen and comfortable seating.",
          "The solid teak cockpit offers multiple configurations to adapt to different lifestyles, with options for a kitchen with induction hobs, barbecue or Teppanyaki plate, an electrical and retractile table, sofas, and poufs. The aft sundeck can accommodate up to 8 sunbeds with floating cushions and retractile deckchairs."
        ],
        features: {
          "Technical Specifications": [
            "Length: 42 ft / 12.8 m",
            "Maximum beam: 14.8 ft / 4.52 m",
            "Maximum beam when extended: 20.7 ft / 6.31 m",
            "Displacement unloaded: 24,912 lbs / 11,300 kg",
            "Fuel capacity: 264 US gal / 1,000 L",
            "Maximum speed: 37 knots (42 mph)",
            "Cruising speed: 28 knots (32 mph)",
            "CE Category: A"
          ],
          "On Board Systems": [
            "Joystick control by Volvo",
            "Volvo Low Speed system",
            "Auto Pilot System (Volvo)",
            "12-inch multi-function touchscreen (Volvo/Garmin)",
            "AGM Batteries system",
            "Black water tank with macerator",
            "VHF 300 (Garmin)",
            "High-end S Fusion audio system with 4 speakers and subwoofer"
          ],
          "Exterior Features": [
            "Hydraulic XTension bulwarks (+40% deck space)",
            "Optional Transformer platform (270° rotation)",
            "Hydraulic bow locker for anchor and fenders",
            "Customizable cockpit with kitchen options",
            "180L ice box for entertaining",
            "Beach-area retractible shower",
            "Aft sundeck for up to 8 sunbeds",
            "Optional T-Top or various awnings"
          ],
          "Interior Features": [
            "Contemporary staircase design",
            "Premium leather interiors",
            "V-shaped dinette convertible to extra bed",
            "Queen-size bed cabin with storage",
            "Private bathroom with premium fixtures",
            "Reading lights throughout",
            "Indoor electrical table (convertible)"
          ]
        }
      },
      {
        id: "t2",
        name: "T2",
        length: "23.4 ft / 7.14 m",
        thumbnail: "/t2-5.jpg",
        shortDesc: "An exclusive tender with clean lines and minimalism, designed for functionality and versatility with an electrically adjustable console.",
        gallery: [
          "/t2-1.jpg",
          "/t2-2.jpg",
          "/t2-3.jpg",
          "/t2-4.jpg",
          "/t2-5.jpg",
          "/t2-6.jpg",
          "/t2-7.jpg",
          "/t2-8.jpg",
          "/t2-9.jpg"
        ],
        specs: {
          cabins: "0",
          guests: "8",
          engines: "300 hp inboard with hydrojet",
          maxSpeed: "38 knots"
        },
        description: [
          "The Evo T2 represents the perfect blend of form and function in a compact luxury tender. With clean minimalist lines and the brand's signature attention to detail, this exclusive 7.14-meter vessel stands out in the tender segment.",
          "A key innovation is the electrically adjustable steering console that can be raised or lowered, resulting in a height of just 1.45 meters when fully lowered - making it the perfect fit for superyacht garages and beach areas.",
          "The comprehensive range of equipment includes a transformable sofa that converts to a sun lounger by detaching the backrest, revealing a low table beneath. It also features accommodation for two Seabobs, a table for eight people, a towing hook for water skiing, and a hydraulic sea ladder."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 23.4 ft / 7.14 m",
            "LH: 23.1 ft / 7.04 m",
            "Beam: 8.4 ft / 2.55 m",
            "Draft: 1.25 ft / 0.38 m",
            "Displacement: 5,511 lbs / 2,500 kg",
            "Fuel capacity: 39.6 US gal / 150 L",
            "Water capacity: 21.1 US gal / 80 L",
            "CE category: B",
            "Range: 200 nautical miles"
          ],
          "On Board Systems": [
            "Battery charger and dual battery system",
            "12-24 volt converter",
            "Shore power cable",
            "Touch screen control panel",
            "Smartphone control of all functions",
            "Home automation system",
            "Steel refrigerator in cockpit"
          ],
          "Exterior Features": [
            "Electrically adjustable console (1.45m when lowered)",
            "Transformable sofa with removable backrests",
            "Table for eight people",
            "Accommodation for two Seabobs with charging",
            "Flip-up anchor and electric winch",
            "Towing hook for water skiing",
            "Hydraulic sea ladder",
            "Practical bimini top"
          ],
          "Engine & Performance": [
            "300 hp inboard engine",
            "Hydrojet transmission",
            "Maximum speed: 38 knots",
            "Cruising speed: 28 knots",
            "Fully accessible engine compartment",
            "Special four-point balanced lifting system"
          ]
        }
      },
      {
        id: "t3",
        name: "T3",
        length: "38 ft / 11.50 m",
        thumbnail: "/t3-4.jpg",
        shortDesc: "A stylish 38-foot yacht that combines streamlined design with sporty character, blending traditional lines with avant-garde solutions.",
        gallery: [
          "/t3-1.jpg",
          "/t3-2.jpg",
          "/t3-3.jpg",
          "/t3-4.jpg",
          "/t3-5.jpg",
          "/t3-6.jpg",
          "/t3-7.jpg"
        ],
        specs: {
          cabins: "1+1 (dinette)",
          guests: "12",
          engines: "Volvo Penta D4 260/300 Hp",
          maxSpeed: "35 knots"
        },
        description: [
          "The Evo T3 is distinguished by its streamlined profile, sporty attitude, and meticulous attention to design and comfort. This 38-foot vessel perfectly blends traditional lines with cutting-edge solutions, featuring rich equipment and refined intelligent design solutions.",
          "The spacious layout offers practical features like a driver's seat with fold-down backrest that transforms into additional seating, positioned above a large refrigerator. The bow is framed by large light fixtures, while generous side windows enhance the livability of interior spaces.",
          "Below deck, the T3 features a forward cabin, aft cabin, and comfortable bathroom with ample storage space and a wardrobe. Large glass surfaces increase light and comfort throughout the interior, creating a thoughtfully designed space where nothing is left to chance."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 38 ft / 11.50 m",
            "LH: 32.7 ft / 9.98 m",
            "Beam: 10.7 ft / 3.25 m",
            "Fuel capacity: 158.5 US gal / 600 L",
            "Water capacity: 79.3 US gal / 300 L",
            "Maximum people on board: 12",
            "CE category: B",
            "Cabins: 1+1 (forward cabin and dinette)",
            "Bathrooms: 1"
          ],
          "On Board Systems": [
            "Elegant dashboard with premium instrumentation",
            "Volvo Penta D4 260/300 Hp engine options",
            "Retractable awning stored outside windshield",
            "Exterior sink and kitchen facilities",
            "Practical storage compartments throughout",
            "Large refrigerator integrated with driver's seat"
          ],
          "Exterior Features": [
            "Driver's seat with fold-down backrest for extra seating",
            "Bow framed by large light fixtures",
            "Flip-up nose compartment for anchor storage",
            "Exterior sink and kitchen",
            "Large aft platform with storage compartments",
            "Double passage to sides of sundeck",
            "Sundeck with retractable table"
          ],
          "Interior Features": [
            "Forward cabin",
            "Aft cabin",
            "Comfortable bathroom",
            "Ample storage space and wardrobe",
            "Large glass surfaces for increased light",
            "Generous side windows for enhanced livability",
            "Thoughtfully designed interior spaces",
            "High-quality materials and finishes"
          ]
        }
      },
      {
        id: "v8",
        name: "V8",
        length: "78 ft / 24 m",
        thumbnail: "/v8-5.jpg",
        shortDesc: "The flagship vessel that redefines navigation by merging sailing and motor boating into a unique 78-foot yacht with revolutionary design and endless possibilities.",
        gallery: [
          "/v8-1.jpg",
          "/v8-2.jpg",
          "/v8-3.jpg",
          "/v8-4.jpg",
          "/v8-5.jpg",
          "/v8-6.jpg",
          "/v8-7.jpg",
          "/v8-8.jpg",
          "/v8-9.jpg"
        ],
        specs: {
          cabins: "3 + 1 crew",
          guests: "12",
          engines: "2 x Volvo Penta IPS 1350 (1000 HP each)",
          maxSpeed: "24 knots"
        },
        description: [
          "EVO V8 is the flagship vessel that reimagines navigation by synthesizing sailing and motor boating into a fascinating 78-foot yacht. With its clean, refined design, V8 blends the transformative qualities of motor yachts with the smooth, relaxed approach of sailing vessels.",
          "Featuring four distinct helm stations including two carbon wheels on the sides of the Main Deck, V8 offers a revolutionary sailing experience closer to the sea. The spacious Main Deck includes a panoramic living area with openable glass walls that create continuity between interior and exterior spaces.",
          "Every space aboard is designed to surprise, from the beach area just 70cm from the water with opening bulwarks, to the hidden Roof Top terrace accessed via a vanishing hydraulic stepladder. The bow features a C-shaped sofa with vanishing table that reveals both a sunbed and a plunge pool."
        ],
        features: {
          "Technical Specifications": [
            "Length: 78 ft / 24 m",
            "Beam: 23.5 ft / 7.17 m",
            "Maximum beam: 31 ft / 9.50 m",
            "Displacement: 58 tons",
            "Fuel capacity: 1,096 US gal / 4,150 L",
            "Range: 400 nautical miles",
            "CE category: A"
          ],
          "On Board Systems": [
            "Four helm stations for different navigation experiences",
            "Main helm with two 16\" GPS displays and dual joysticks",
            "Vanishing helm station on the Roof Top",
            "Two carbon wheels on Main Deck sides for sailing-style steering",
            "Multi-function touchscreens and advanced navigation systems",
            "Home cinema system with projector and LCD glass technology"
          ],
          "Exterior Features": [
            "Beach area just 70cm from water with opening bulwarks",
            "Lowered lounge outside master cabin with transformable function",
            "Bow sofa with vanishing table, hidden sunbed and plunge pool",
            "Surprise Roof Top terrace with sunbeds, shower and fridge",
            "Storage for 11ft tender, jet ski, water toys and electric scooter",
            "Telescopic guardrails for safety during navigation"
          ],
          "Interior Features": [
            "Panoramic living area with glass walls and dinette",
            "Three luxurious cabins plus crew cabin, all with ensuite facilities",
            "Master cabin connected to transformable private lounge",
            "VIP cabin at bow with premium amenities",
            "Guest cabin with two single beds plus folding third bed",
            "Sophisticated decor with designer furniture and premium materials",
            "Dark walnut flooring with light ceiling and 360° glass walls"
          ]
        }
      }
    ].map(enhanceModel)
  },
  "maori": {
    id: "maori",
    name: "MAORI Yachts",
    headline: "Italian Excellence in Luxury Tenders",
    description: "Creators of luxury tender yachts with distinctive Italian styling and performance.",
    image: "/LEKKER 45-1.jpg",
    models: [
      {
        id: "maori-46-inboard",
        name: "MAORI 46 Inboard",
        length: "46 ft / 14.2 m",
        thumbnail: "/M46-inbound4.jpg",
        shortDesc: "An elegant 14.2-meter day cruiser with inboard engine configuration, delivering exceptional performance with a top speed of 48 knots.",
        gallery: [
          "/M46-inboud1.jpg",
          "/M46-inbound2.jpg",
          "/M46-inbound3.jpg",
          "/M46-inbound4.jpg",
          "/M46-inbound5.jpg",
          "/M46-inbound6.jpg",
          "/M46-inbound7.jpg"
        ],
        specs: {
          cabins: "1",
          guests: "12",
          engines: "2 x Volvo 725hp inboard",
          maxSpeed: "48 knots"
        },
        description: [
          "The MAORI 46 Inboard combines Italian design excellence with exceptional performance in a perfectly proportioned 14.2-meter package. This sophisticated day cruiser features twin Volvo 725hp inboard engines, delivering an impressive maximum speed of 48 knots and a comfortable cruising speed of 38 knots.",
          "With a waterline length of 12.4 meters and a beam of 4.8 meters (including fenders), the MAORI 46 offers spacious deck areas while maintaining an elegant profile. The vessel's 14.5-ton displacement is optimized for performance and stability, with a draft of 1.1 meters ensuring access to shallower waters.",
          "Meticulously crafted using advanced vacuum infusion techniques with both sandwich and single-skin composite construction, this vessel combines GRP fiberglass with PVC core and Vinylester resin for optimal structural integrity. With RINA certification (CE category B) and a generous 2,000-liter fuel capacity, the MAORI 46 Inboard is designed for extended adventures with up to 12 passengers."
        ],
        features: {
          "Technical Specifications": [
            "Length overall: 46 ft / 14.2 m",
            "Waterline length: 40.7 ft / 12.4 m",
            "Beam: 15.7 ft / 4.8 m (including fenders)",
            "Draft: 3.6 ft / 1.1 m",
            "Displacement: 14.5 tons",
            "Fuel capacity: 528 gal / 2,000 L",
            "Water capacity: 106 gal / 400 L",
            "Navigation category: CE94/25 B",
            "Certification: CE mod. B by RINA"
          ],
          "Performance": [
            "Twin Volvo 725hp inboard engines",
            "Maximum speed: 48 knots",
            "Cruising speed: 38 knots",
            "Responsive handling characteristics",
            "Excellent stability at high speeds",
            "Extended range for day cruising",
            "Optimized hull design for efficiency"
          ],
          "Construction": [
            "Vacuum infusion of sandwich and single-skin composite",
            "GRP (fiberglass) construction for durability",
            "PVC core for structural integrity and weight reduction",
            "Vinylester resin for superior water resistance",
            "Advanced engineering for optimal performance",
            "Lightweight yet robust design",
            "Premium finish throughout"
          ],
          "Design & Features": [
            "Distinctive MAORI styling with elegant day cruiser profile",
            "Luxurious cabin accommodation",
            "Premium materials and finishes",
            "Expansive deck spaces with multiple seating configurations",
            "Integrated swim platform",
            "Well-appointed galley area",
            "Superior Italian craftsmanship",
            "Optimal space utilization with ample storage"
          ]
        }
      },
      {
        id: "maori-54-family",
        name: "MAORI 54 Family",
        length: "54 ft / 16.5 m",
        thumbnail: "/M54-Family-4.jpg",
        shortDesc: "A 16.5-meter luxury tender that combines extraordinary performance with refined family comfort, capable of reaching speeds up to 50 knots.",
        gallery: [
          "/M54-Family-1.jpg",
          "/M54-Family-2.jpg",
          "/M54-Family-3.jpg",
          "/M54-Family-4.jpg",
          "/M54-Family-5.jpg",
          "/M54-Family-6.jpg",
          "/M54-Family-7.jpg"
        ],
        specs: {
          cabins: "2",
          guests: "14",
          engines: "2 x MAN 850 hp + JDM surface propellers",
          maxSpeed: "50 knots"
        },
        description: [
          "The MAORI 54 Family represents the perfect balance between high-performance capabilities and family-oriented luxury. This impressive 16.5-meter vessel is designed for extended adventures with family and friends, with capacity for up to 14 passengers.",
          "Powered by twin MAN 850 hp engines with JDM surface propellers, the MAORI 54 Family delivers exceptional performance with a maximum speed of 50 knots and a comfortable cruising speed of 38 knots. The generous 2,200-liter fuel capacity ensures extended range for day cruising or island hopping.",
          "The vessel is meticulously crafted using advanced vacuum infusion techniques with GRP (fiberglass), PVC core, and Vinylester resin, creating a perfect balance of structural integrity, durability, and weight optimization. With RINA certification (CE category A), this vessel ensures safety and reliability even in challenging conditions."
        ],
        features: {
          "Technical Specifications": [
            "Length: 54 ft / 16.5 m",
            "Beam: 16.9 ft / 5.15 m (including fenders)",
            "Draft: 3.6 ft / 1.1 m",
            "Displacement: 17 tons",
            "Fuel capacity: 581 gal / 2,200 L",
            "Water capacity: 106 gal / 400 L",
            "Navigation category: CE94/25 A",
            "Certification: CE mod. B by RINA"
          ],
          "Performance": [
            "Twin MAN 850 hp engines",
            "JDM surface propellers for enhanced efficiency",
            "Maximum speed: 50 knots",
            "Cruising speed: 38 knots",
            "Excellent handling characteristics",
            "Responsive controls at all speeds",
            "Extended range for multi-day excursions"
          ],
          "Construction": [
            "Vacuum infusion of sandwich and single-skin composite",
            "GRP (fiberglass) construction for durability",
            "PVC core for structural integrity and weight reduction",
            "Vinylester resin for superior water resistance",
            "Advanced engineering for optimal performance",
            "Lightweight yet robust design",
            "Premium finish throughout"
          ],
          "Features & Amenities": [
            "Family-oriented layout with comfortable accommodations",
            "Generous passenger capacity for entertaining",
            "Premium materials and finishes",
            "Distinctive MAORI styling",
            "Luxurious cabin accommodations",
            "Expansive deck spaces",
            "Versatile configuration options",
            "Superior Italian craftsmanship"
          ]
        }
      },
      {
        id: "maori-54-xl",
        name: "MAORI 54 XL",
        length: "54 ft / 16.5 m",
        thumbnail: "/M54-XL-4.jpg",
        shortDesc: "An extended version of the MAORI 54 with additional living space and luxury features, combining high performance with sophisticated styling.",
        gallery: [
          "/M54-XL-1.jpg",
          "/M54-XL-2.jpg",
          "/M54-XL-3.jpg",
          "/M54-XL-4.jpg",
          "/M54-XL-5.jpg",
          "/M54-XL-6.jpg",
          "/M54-XL-8.jpg",
          "/M54-XL-9.jpg"
        ],
        specs: {
          cabins: "2",
          guests: "12",
          engines: "2 x MAN 850 hp + JDM surface propellers",
          maxSpeed: "50 knots"
        },
        description: [
          "The MAORI 54 XL represents the evolution of the acclaimed 54-foot platform with extended amenities and additional luxury features. This 16.5-meter vessel maintains the exceptional performance characteristics while offering enhanced comfort and living space.",
          "Powered by twin MAN 850 hp engines with JDM surface propellers, the MAORI 54 XL delivers an impressive maximum speed of 50 knots and a comfortable cruising speed of 38 knots. The generous 2,000-liter fuel capacity ensures extended range for longer journeys.",
          "Meticulously crafted using advanced vacuum infusion techniques with GRP (fiberglass), PVC core, and Vinylester resin, this vessel combines structural integrity with a lightweight profile. With RINA certification (CE category B), the MAORI 54 XL ensures safety and reliability while providing expanded luxury amenities throughout."
        ],
        features: {
          "Technical Specifications": [
            "Length: 54 ft / 16.5 m",
            "Beam: 16.9 ft / 5.15 m (including fenders)",
            "Draft: 3.6 ft / 1.1 m",
            "Displacement: 17 tons",
            "Fuel capacity: 528 gal / 2,000 L",
            "Water capacity: 106 gal / 400 L",
            "Navigation category: CE94/25 B",
            "Certification: CE mod. B by RINA",
            "Maximum passengers: 12"
          ],
          "Performance": [
            "Twin MAN 850 hp engines",
            "JDM surface propellers for enhanced efficiency",
            "Maximum speed: 50 knots",
            "Cruising speed: 38 knots",
            "Responsive handling characteristics",
            "Exceptional stability at high speeds",
            "Extended range for multi-day excursions"
          ],
          "Construction": [
            "Vacuum infusion of sandwich and single-skin composite",
            "GRP (fiberglass) construction for durability",
            "PVC core for structural integrity and weight reduction",
            "Vinylester resin for superior water resistance",
            "Advanced engineering for optimal performance",
            "Lightweight yet robust design",
            "Premium finish throughout"
          ],
          "Luxury Features": [
            "Extended deck spaces compared to standard model",
            "Enhanced interior accommodations",
            "Premium materials and finishes",
            "Expanded exterior entertainment areas",
            "Luxurious cabin appointments",
            "Additional storage solutions",
            "Superior Italian craftsmanship",
            "Expanded galley and comfort amenities"
          ]
        }
      }
    ].map(enhanceModel)
  },
  "reborn": {
    id: "reborn",
    name: "Reborn Yachts",
    headline: "Dutch Craftsmanship & Future-Classic Design",
    description: "Boutique Dutch yacht builder focused on detail-oriented design and exceptional craftsmanship.",
    image: "/38bowriderlowres4.jpg",
    models: [
      {
        id: "reborn-38-bowrider",
        name: "Reborn 38 Bowrider",
        length: "38 ft / 11.65 m",
        thumbnail: "/38bowriderlowres4.jpg",
        shortDesc: "The Reborn 38 Bowrider offers a dynamic and fun experience with exceptional performance, reaching speeds over 42 knots while providing luxurious comfort for day cruising.",
        gallery: [
          "/38bowriderlowres1.jpg",
          "/38bowriderlowres2.jpg",
          "/38bowriderlowres3.jpg",
          "/38bowriderlowres4.jpg",
          "/38bowriderlowres5.jpg",
          "/38bowriderlowres6.jpg",
          "/38bowriderlowres7.jpg",
          "/38bowriderlowres9.jpg",
          "/38bowriderlowres10.jpg",
          "/38bowriderlowres11.jpg"
        ],
        specs: {
          cabins: "1",
          guests: "12",
          engines: "2x Volvo Penta D6 400hp",
          maxSpeed: "42+ knots"
        },
        description: [
          "The Reborn 38 Bowrider offers a dynamic and fun experience for those who appreciate the value of their leisure time, whether that be chilling with family & friends, al fresco dining, or simply having a blast. Watersport action is also on the menu as you explore with a SeaBob, embrace the peace and tranquility of a stand-up paddleboard, or head out for adventures with a ski pole.",
          "The precise attention to detail that underpins this masterpiece of Dutch design is seen in a completely smooth hull without penetrations. Everything has a flush finish and there is no peripheral equipment in sight. Standing at the helm of this future-classic yacht, you'll enjoy an invigorating sense of freedom and feel Reborn again.",
          "Built using vacuum injection techniques in a vinylester sandwich system, the hull and deck are produced to the highest industry standards with GRP composite construction. The spacious cockpit is finished with high-quality fittings and furnishings, including two glass cockpit screens, electric steering system with joystick, and comfortable Besenzoni pilot seats."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 11.65 meters (38 feet)",
            "Beam: 3.72 meters (12.2 feet)",
            "Draft: DPI 0.95m / IPS 1.20m",
            "Design Category: CE-B / Optional MCA Cat. 2",
            "Max Passengers: 12 (B) / 16 (C)",
            "Max Load: 1,400 kg",
            "Fresh water capacity: 350 liters",
            "Black water capacity: 150 liters"
          ],
          "Performance": [
            "Standard: 2x Volvo Penta D6 400hp Diesel",
            "Optional engines up to 2x Volvo Penta D6 650hp IPS",
            "Electric steering with joystick control",
            "1,200L fuel tank",
            "Maximum speed: 42+ knots"
          ],
          "Construction & Design": [
            "GRP composite (vacuum injection)",
            "Vinylester sandwich system",
            "Esthec decking throughout",
            "Completely smooth hull without penetrations",
            "Flush finish with no visible peripheral equipment"
          ],
          "Key Features": [
            "Fully automatic anchoring system (optional)",
            "Glass cockpit screens with advanced navigation",
            "Bowers & Wilkins HIFI audio system (optional)",
            "Bathroom with electric toilet & shower",
            "Electric grill on deck (optional)",
            "Retractable cleats and integrated hatch scuppers",
            "Custom made fenders and lifejackets",
            "Integrated Seabob F5SR storage and charging (optional)"
          ]
        }
      },
      {
        id: "reborn-38-cabin",
        name: "Reborn 38 Cabin",
        length: "38 ft / 11.65 m",
        thumbnail: "/CabinLowres-38-4.jpg",
        shortDesc: "The Reborn 38 Cabin combines exceptional performance with luxurious accommodations, perfect for energizing experiences on the water with family and friends.",
        gallery: [
          "/CabinLowres-38-1.jpg",
          "/CabinLowres-38-2.jpg",
          "/CabinLowres-38-3.jpg",
          "/CabinLowres-38-4.jpg",
          "/CabinLowres-38-5.jpg",
          "/CabinLowres-38-6.jpg",
          "/CabinLowres-38-7.jpg",
          "/CabinLowres-38-8.jpg"
        ],
        specs: {
          cabins: "1",
          guests: "12",
          engines: "2x Volvo Penta D6 400hp",
          maxSpeed: "42+ knots"
        },
        description: [
          "The Reborn 38 Cabin is set to bring an energising experience for those who have been looking for a really special yacht in this size range. For some that will mean spending time with family and friends relaxing, dining and partying. Watersport fun beckons for others as you explore with a SeaBob, embrace the peace and tranquility of a stand-up paddleboard, or head out for adventures with a ski pole.",
          "In addition to smart design, suspected luxury and an impressive turn of speed, the Reborn 38 Cabin is comfortable and user-friendly, with a generous dining table and galley for long days of relaxation. The cabin offers two spacious berths, a seating area, shower & head, and comfortable standing height of two metres.",
          "The precise attention to detail that underpins this masterpiece of Dutch design is seen in a completely smooth hull without penetrations. Everything has a flush finish and there is no peripheral equipment in sight. Standing at the helm of this future-classic yacht, you'll enjoy an invigorating sense of freedom and feel Reborn again."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 11.65 meters (38 feet)",
            "Beam: 3.72 meters (12.2 feet)",
            "Draft: DPI 0.95m / IPS 1.20m",
            "Design Category: CE-B / Optional MCA Cat. 2",
            "Max Passengers: 12 (B) / 16 (C)",
            "Max Load: 1,400 kg",
            "Fresh water capacity: 350 liters",
            "Black water capacity: 150 liters"
          ],
          "Performance": [
            "Standard: 2x Volvo Penta D6 400hp Diesel",
            "Optional engines up to 2x Volvo Penta D6 650hp IPS",
            "Electric steering with joystick control",
            "1,200L fuel tank",
            "Maximum speed: 42+ knots"
          ],
          "Construction & Design": [
            "GRP composite (vacuum injection)",
            "Vinylester sandwich system",
            "Esthec decking throughout",
            "Completely smooth hull without penetrations",
            "Flush finish with no visible peripheral equipment"
          ],
          "Accommodation": [
            "Two spacious berths",
            "Seating area with 2-meter standing height",
            "Bathroom with electric toilet & shower",
            "Fridge 85L at deck, 65L in cabin",
            "Built-in microwave oven/grill (cabin)",
            "Personalized luxury upholstery set",
            "Generous dining table in spacious cockpit",
            "Inviting al fresco atmosphere"
          ]
        }
      },
      {
        id: "reborn-40-coupe",
        name: "Reborn 40 Coupe",
        length: "40 ft / 12.20 m",
        thumbnail: "/CoupeLowres-40-4.jpg",
        shortDesc: "The ultimate 40ft dayboat and weekender with sophisticated design, luxurious accommodations, and high-performance capabilities for discerning boaters.",
        gallery: [
          "/Coupe-Lowres-40-1.jpg",
          "/Coupe-Lowres-40-2.jpg",
          "/CoupeLowres-40-3.jpg",
          "/CoupeLowres-40-4.jpg",
          "/CoupeLowres-40-5.jpg",
          "/CoupeLowres-40-6.jpg"
        ],
        specs: {
          cabins: "1",
          guests: "12",
          engines: "2x Volvo Penta D6 480hp IPS650",
          maxSpeed: "N/A"
        },
        description: [
          "The Reborn 40 Coupe is the ultimate 40ft dayboat for people who love to invest in their pleasure. Perfect as a weekender for the ultimate experience of luxury whilst staying overnight on the water, the 40 Coupe combines classic and timeless lines with modern styling in a way that instantly captures your heart.",
          "Careful consideration of the shaping has created an exciting yet balanced design with a genuinely fresh look & feel. Whether you want to chill and relax or be active and enjoy some watersports, the Reborn 40 Coupe has it all, showcasing an exceptional blend of performance, luxury, and versatility.",
          "The interior offers flexible accommodation options, including either a generous dining table and galley that transforms into a double bed or a fixed double bed with a separate seating area, all with comfortable standing height of two meters."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 12.20 meters (40 feet)",
            "Beam: 3.72 meters (12.2 feet)",
            "Draft: IPS 1.20m",
            "Design Category: CE-B / Optional MCA Cat. 2",
            "Max Passengers: 12 (B) / 16 (C)",
            "Max Load: 1,400 kg",
            "Fresh water capacity: 350 liters",
            "Black water capacity: 150 liters"
          ],
          "Performance & Systems": [
            "2x Volvo Penta D6 480hp Diesel",
            "IPS 650 system with Dynamic Positioning",
            "Electric steering gear with Joystick",
            "1,200L fuel tank",
            "Bowthruster / Assisted Docking System",
            "2x Glasscockpit 16\" screens",
            "HIFI audio system (Bowers & Wilkins)"
          ],
          "Interior Options": [
            "Option 1: Dining table + sofa (transformable into double bed)",
            "Option 2: Fixed double bed with separate seating area",
            "Bathroom with electric toilet & shower",
            "Fridge 85L at deck, 65L in cabin",
            "Built-in microwave oven/grill",
            "Comfortable standing height of two meters",
            "Webasto heating and air-conditioning"
          ],
          "Exterior Features": [
            "Deck supplied with Esthec",
            "Seasmart hatch and deck equipment",
            "Personalized luxury upholstery set",
            "Besenzoni cockpit seats",
            "Electric grill on deck (Kenyon)",
            "2x Wine cooler Webasto",
            "Fully automatic anchoring system",
            "Underwater lights at stern (4x)"
          ]
        }
      },
      {
        id: "reborn-40-r-cabin",
        name: "Reborn 40 R Cabin",
        length: "40 ft / 12.20 m",
        thumbnail: "/CabinLowres-40R-4.jpg",
        shortDesc: "The flagship Reborn 40 R Cabin combines extraordinary performance with luxurious accommodations, creating the ultimate dayboat experience for discovering new places.",
        gallery: [
          "/CabinLowres-40R-1.jpg",
          "/CabinLowres-40R-2.jpg",
          "/CabinLowres-40R-3.jpg",
          "/CabinLowres-40R-4.jpg",
          "/CabinLowres-40R-5.jpg",
          "/CabinLowres-40R-6.jpg",
          "/CabinLowres-40R-7.jpg",
          "/CabinLowres-40R-8.jpg",
          "/CabinLowres-40R-9.jpg"
        ],
        specs: {
          cabins: "1",
          guests: "12",
          engines: "2x Volvo Penta D6 480hp IPS650",
          maxSpeed: "42+ knots"
        },
        description: [
          "The Reborn 40 R Cabin is the flagship model and the ultimate 40ft dayboat for people who love to invest in their pleasure. Perfect as a weekender for the ultimate experience of luxury whilst staying overnight on the water, the 40 R Cabin delivers an energizing new experience for those seeking a truly special yacht in this size range.",
          "Combining an impressive turn of speed with a wealth of onboard luxuries, the Reborn 40 R Cabin is comfortable, user-friendly, and the ideal way to relax on the water. Her spacious cockpit is finished with high-quality fittings and furnishings, including a fridge and wine coolers, and you will have a generous dining table and galley.",
          "Standing at the helm of this future-classic yacht, you'll enjoy an invigorating sense of freedom and feel Reborn again. The vessel can also serve as an ideal tender for a superyacht, with its combination of performance, luxury and versatility."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 12.20 meters (40 feet)",
            "Beam: 3.72 meters (12.2 feet)",
            "Draft: IPS 1.20m",
            "Design Category: CE-B / Optional MCA Cat. 2",
            "Max Passengers: 12 (B) / 16 (C)",
            "Max Load: 1,400 kg",
            "Fresh water capacity: 350 liters",
            "Black water capacity: 150 liters"
          ],
          "Performance": [
            "2x Volvo Penta D6 480hp Diesel",
            "IPS 650 system",
            "Electric steering gear with Joystick",
            "1,200L fuel tank",
            "Maximum speed: 42+ knots",
            "Optional Dynamic Positioning System (DPS)"
          ],
          "Construction & Design": [
            "GRP composite (vacuum injection)",
            "Vinylester sandwich system",
            "Esthec decking throughout",
            "Completely smooth hull without penetrations",
            "Flush finish with no visible peripheral equipment"
          ],
          "Accommodation & Features": [
            "Fixed bed with large storage compartment underneath",
            "Small seating area",
            "Bathroom with electric toilet & hand shower",
            "Integrated 32\" smart TV screen",
            "Fridge 85L at deck, 65L in cabin",
            "Sun bed placed centrally with wide passages on both sides",
            "Folding table with integrated multi-purpose ice bucket",
            "Optional Seakeeper Gyro 4.5 stabilization"
          ]
        }
      }
    ].map(enhanceModel)
  },
  "omega": {
    id: "omega",
    name: "Omega",
    headline: "Performance Engineering Excellence",
    description: "Engineering-focused manufacturer known for high-performance speedboats.",
    image: "/plus4.png",
    models: [
      {
        id: "38-grand-sport",
        name: "38 GRAND SPORT",
        length: "38 ft / 11.1 m",
        thumbnail: "/38 GRAND SPORT-01.jpg",
        shortDesc: "High-performance day boat with racing heritage.",
        specs: {
          cabins: "1",
          guests: "8",
          engines: "Twin Mercury Racing",
          maxSpeed: "55 knots"
        }
      },
      {
        id: "omega-47",
        name: "OMEGA 47",
        length: "47 ft / 14.3 m",
        thumbnail: "/LekkerPage-08.png",
        shortDesc: "Midsize performance yacht with luxury accommodations.",
        specs: {
          cabins: "2",
          guests: "8",
          engines: "Twin MAN V12",
          maxSpeed: "48 knots"
        }
      }
    ].map(enhanceModel)
  },
  "technohull": {
    id: "technohull",
    name: "TECHNOHULL",
    headline: "Performance with Absolute Control",
    description: "Engineering-focused manufacturer known for high-performance RIBs with patented hull technology.",
    image: "/38 GRAND SPORT-01.jpg",
    models: [
      {
        id: "38-grand-sport",
        name: "38 GRAND SPORT",
        length: "38 ft / 11.1 m",
        thumbnail: "/38 GRAND SPORT-01.jpg",
        shortDesc: "A highly competent sport boat offering speeds beyond limits while providing absolute control and comfort, making it the perfect machine for speed enthusiasts.",
        specs: {
          cabins: "0",
          guests: "10",
          engines: "2 x Mercury Verado 450R V8",
          maxSpeed: "65+ knots"
        },
        description: [
          "The 38 Grand Sport is a highly competent sport boat and a genuine outperformer. Designed to offer speeds beyond limits while providing absolute control to the driver and comfort to passengers, it makes a perfect 'machine' for all speed lovers. With an eye-catching, authentic TECHNOHULL design, it offers comforts and amenities that make cruising a pleasurable experience for both the driver and guests.",
          "The vessel epitomizes TECHNOHULL's DynaStream patented hull technology in all aspects of performance, highlighting the brand's technical superiority and performance proficiency. Top speeds, unmatched seakeeping, absolute control, ultimate running comfort, and a refined balance between high performance and user-friendliness define the 38 Grand Sport experience.",
          "The recreational version features a sophisticated, evolved twin step hull design, capable of transforming horsepower to speed. Its Dynastream hull offers top-notch performance along with absolute control and an extremely smooth ride under all-weather profiles, while its super sharp entry angles result in outstanding offshore capabilities and comfortable riding."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 11.1 meters (36.4 feet)",
            "Beam: 3.2 meters (10.5 feet)",
            "Hull: Deep V with Ventilated Steps",
            "Light Ship Weight: Approx. 3,500 kg",
            "Fuel Capacity: 600 liters (158 gallons)",
            "Water Capacity: 100 liters (26 gallons)",
            "Berths: 2",
            "Maximum Passengers: 10",
            "CE Category: B-Offshore"
          ],
          "Performance": [
            "Patented Dynastream hull technology",
            "Super sharp entry angles",
            "Super deep V featuring variable deadrise distribution",
            "Advanced ventilated twin step hull design",
            "Outstanding offshore capabilities",
            "Multiple outboard engine options up to 900hp total",
            "Maximum speed over 65 knots (depending on configuration)"
          ],
          "Technology & Equipment": [
            "State of the art Digital Switching and Automation",
            "12\" multifunctional displays",
            "In-house developed power management software",
            "Digital Control through touch screen displays",
            "Sophisticated boat engineering systems",
            "Digital power distribution center",
            "Split DC electrical system",
            "Automatic main battery power switches"
          ],
          "Comfort & Features": [
            "Elegant hardtop design with full glass and wipers",
            "Twin helm station with shock absorbing bucket seats",
            "Headroom with shower under the console",
            "Premium quality solid teak deck",
            "LED lighting throughout",
            "Stainless steel retractable cleats",
            "Weathertight storage areas",
            "Fresh water shower system",
            "Comfortable swim ladder",
            "Premium upholstery with highest quality fabrics"
          ]
        }
      },
      {
        id: "omega-47",
        name: "OMEGA 47",
        length: "47 ft / 13.8 m",
        thumbnail: "/OMEGA 47-01.jpg",
        shortDesc: "TECHNOHULL's flagship model blending sporty performance with superyacht finish, offering a perfect combination of luxury and power never seen before in its class.",
        specs: {
          cabins: "1",
          guests: "12",
          engines: "Multiple options up to 4x450hp",
          maxSpeed: "80+ knots"
        },
        description: [
          "The OMEGA 47 is TECHNOHULL's flagship model. Based on the successful hull of the Omega 45, yet wider and longer, it remains a high-performance sport vessel that seamlessly combines the versatility and performance of a sport boat with the space, comfort, and high-quality details and finishes of a luxury yacht.",
          "Featuring a Dynastream hull, the Omega 47 exhibits outstanding performance capabilities while navigating in absolute balance, smoothly and dry, effortlessly reaching and maintaining impressive cruising speeds. The 47's hull has been modified to absorb the superstructure's increased weight, resulting in superb offshore characteristics and offering a super soft and dry ride.",
          "What truly sets the Omega 47 apart is its yacht-quality accommodation for two, offering a rare degree of luxury and comfort both day and night. With a superyacht finish featuring quality leather, exotic veneers, and premium Corian, oversized double bed, comfortable couch, and full-size headroom with shower, the vessel redefines luxury in the high-performance RIB category."
        ],
        features: {
          "Technical Specifications": [
            "LOA: 13.8m (14.05m Inboard)",
            "Beam: 3.6m",
            "Hull: Deep V with Ventilated Steps",
            "Light Ship Weight: Approx. 6,500kg",
            "Fuel Capacity: 1,200L",
            "Water Capacity: 180L",
            "Berths: 2",
            "Maximum Passengers: 12",
            "CE Category: B-Offshore"
          ],
          "Performance & Engineering": [
            "Dynastream hull with superb offshore characteristics",
            "Super ventilated twin step design",
            "Super sharp waterline entry angles",
            "Multiple engine configurations available",
            "Outboard options up to 4x450hp Mercury Verado",
            "Inboard options with Volvo D6 440 engines",
            "Speeds up to 80+ knots with top configuration",
            "Low planning speed with exceptional stability"
          ],
          "Exterior Features": [
            "Elegant and sleek design with aerodynamic console",
            "Full walk-around deck with deep bulwarks",
            "Two distinct lounging areas for up to 12 people",
            "Large sun pad and seat forward",
            "U-shape sofa convertible to huge sun pad",
            "Optional wet bar with fridge and sink",
            "Ultra-deep safe deck design",
            "Teak covered deck, gunwales, bulkheads and table",
            "LED lighting throughout"
          ],
          "Luxury & Comfort": [
            "Yacht quality cabin with superyacht finish",
            "Oversized double bed with high quality latex mattress",
            "Full size headroom with shower and storage",
            "Triple helm station with ergonomic bucket seats",
            "Sophisticated state-of-the-art engineering",
            "Digital management system with twin 12\" displays",
            "Premium quality solid teak flooring",
            "Hot water system for cabin and deck",
            "Atmospheric LED lighting with multiple options"
          ]
        }
      }
    ].map(enhanceModel)
  },
  "lekker": {
    id: "lekker",
    name: "LEKKER",
    headline: "Dutch Design Meets Modern Luxury",
    description: "Specializing in premium day boats with Dutch craftsmanship and timeless design.",
    image: "/LEKKER 45-1.jpg",
    models: [
      {
        id: "lekker-38",
        name: "LEKKER 38",
        length: "38 ft / 11.6 m",
        thumbnail: "/LEKKER 38-3.jpg",
        shortDesc: "Compact, spacious, and built for adventure with customizable options and impressive speeds of up to 57 knots.",
        specs: {
          cabins: "1",
          guests: "12",
          engines: "Multiple options (up to 1200 hp)",
          maxSpeed: "57 knots"
        },
        gallery: [
          "/LEKKER 38-1.jpg",
          "/LEKKER 38-2.jpg",
          "/LEKKER-38-3.jpg",
          "/LEKKER 38-4.jpg"
        ],
        description: [
          "The LEKKER 38 is the ultimate vessel for unforgettable moments on the water. This 11.6-meter day boat combines Dutch craftsmanship with modern design, delivering an exceptional boating experience for friends and family.",
          "Built in the Netherlands using premium aluminum construction, the LEKKER 38 maintains impressive stability even at high speeds. With triple outboard engine options that can reach speeds up to 57 knots, it's perfect for those who value both performance and comfort.",
          "From the spacious swim platform to the comfortable cabin with a two-person bed, this versatile vessel features practical amenities including 3 helm seats, 2 sunbeds, 2 refrigerators, a high-low movement table, and a complete sound system. With the Volvo Penta joystick system, docking is easy and accessible for everyone."
        ],
        features: {
          "Technical Specifications": [
            "Length: 38 ft / 11.6 m",
            "Beam: 10.8 ft / 3.3 m",
            "Freeboard: 4.4 ft / 1.35 m",
            "Draft: 2.3-3 ft / 0.7-0.9 m",
            "Dry weight: 14,300 lbs / 6,500 kg",
            "Fuel capacity: 211 gal / 800 L",
            "Fresh water: 40 gal / 150 L",
            "CE Certificate: C/B",
            "Maximum persons: 12",
            "Material: Aluminum"
          ],
          "Engine Options": [
            "Outboard: 2x 400 V10 Mercury (800 hp)",
            "Outboard: 3x 400 V10 Mercury (1200 hp)",
            "Inboard: 2x 350 V8 Mercury (700 hp)",
            "Inboard: 2x 270 TDI Mercury (540 hp)",
            "Inboard: 2x Yanmar 8LV370 (740 hp)",
            "Inboard: 2x Volvo D6-440 DPI (880 hp)",
            "Inboard: 2x Volvo D6-480 DPI (960 hp)",
            "Cruise speed: 38 knots (70 km/h)",
            "Top speed: Up to 57 knots (106 km/h)",
            "Range: 300 nautical miles"
          ],
          "Special Features": [
            "2-person bed in cabin",
            "3 helm seats with practical console",
            "JL luxury sound system (6 speakers, 2 subwoofers, 2 amplifiers)",
            "2 sunbeds for comfortable lounging",
            "Spacious swim platform with deck shower",
            "High-low movement table",
            "2 refrigerators",
            "Toilet with sink",
            "Storage space for seabobs",
            "Volvo Penta joystick system for easy docking",
            "Lightweight construction for stability at high speeds"
          ],
          "Design & Construction": [
            "Built in the Netherlands",
            "Premium aluminum construction",
            "Complete customization options",
            "Practical layout with every inch maximized",
            "Versatile day boat for cruising, exploration and entertainment",
            "Modern Dutch design with clean lines",
            "Performance-oriented hull design"
          ]
        }
      },
      {
        id: "lekker-35",
        name: "LEKKER 35",
        length: "35 ft / 10.7 m",
        thumbnail: "/LEKKER 38-2.jpg",
        shortDesc: "Versatile day cruiser with Dutch design excellence.",
        specs: {
          cabins: "1",
          guests: "8",
          engines: "Twin Mercury Verado",
          maxSpeed: "42 knots"
        }
      },
      {
        id: "lekker-45",
        name: "LEKKER 45",
        length: "45 ft / 13.7 m",
        thumbnail: "https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?auto=format&fit=crop&w=2073&q=80",
        shortDesc: "A spacious 45-foot yacht built for adventure, combining exceptional speed with luxurious amenities for weekend getaways.",
        specs: {
          cabins: "2",
          guests: "16",
          engines: "2 x 480 Volvo Penta or triple outboards",
          maxSpeed: "52 knots"
        },
        gallery: [
          "/LEKKER 45-1.jpg",
          "/lekker 45-2.jpg",
          "/lekker 45-3.jpg",
          "/lekker 45-4.jpg",
          "/lekker 45-5.jpg",
          "/lekker 45-6.jpg",
          "/lekker 45-7.jpg",
          "/lekker 45-8.jpg"
        ],
        description: [
          "The LEKKER 45 is your spontaneous weekend getaway vessel, perfect for exploring exotic locations or enjoying romantic dinners against scenic coastal backdrops. With its 45-foot length, space is abundant, featuring an aft deck with two large tables for dining with family and friends.",
          "This yacht isn't just spacious—it's remarkably fast, achieving speeds up to 52 knots with a triple outboard engine setup, allowing you to conquer the waters without sacrificing comfort. Each LEKKER 45 is designed in the Netherlands with owners closely involved in the process.",
          "Below deck, you'll find comfortable sleeping areas for 4 people, a full bathroom, and various amenities for preparing food or relaxing. The yacht can be configured in sports or fishing versions, with specialized storage for water toys, diving gear, or fishing equipment."
        ],
        features: {
          "Technical Specifications": [
            "Length: 45 ft / 13.7 m",
            "Beam: 14 ft / 4.1 m",
            "Draft: 2.5-3.5 ft / 0.75-1.07 m",
            "Displacement: 23,800 lbs / 10,800 kg",
            "Fuel capacity: 400 gal / 1,500 L (plus optional 317 gal reserve)",
            "Fresh water: 52 gal / 200 L",
            "CE Certificate: B/C (16/12 persons)",
            "Range: 350 nm / 600 km"
          ],
          "Engine & Performance": [
            "Standard: 2 x 480 Volvo Penta",
            "Optional: Triple outboard configuration for max speed",
            "Cruising speed: 30 knots (55 km/h)",
            "Top speed: Up to 52 knots with triple outboards",
            "3 Garmin navigation screens",
            "Volvo Penta joystick system for easy maneuvering"
          ],
          "Comfort & Entertainment": [
            "Cabin for 4 people with bathroom",
            "Air conditioning throughout",
            "JL luxury sound system (8 speakers, 2 subwoofers, 2 amplifiers)",
            "3 large refrigerators plus 90L icebox",
            "2 moveable tables for flexible configurations",
            "2 large sunbeds for relaxation",
            "Seating for up to 17 people",
            "34 cupholders throughout the vessel"
          ],
          "Special Features": [
            "Spacious swim platform",
            "Fully automated electric anchor system",
            "Dedicated storage for water toys (Seabobs, SUPs)",
            "Optional fishing configuration with rod holders",
            "Smart design providing 50-foot yacht features in a 45-foot package",
            "Customizable interior colors and finishes",
            "4 helm seats with commanding view"
          ]
        }
      },
      {
        id: "lekker-damsko",
        name: "LEKKER Damsko 1000",
        length: "32.8 ft / 10 m",
        thumbnail: "/LekkerPage-09.png",
        shortDesc: "A social powerhouse combining classic Amsterdam sloop styling with remarkable speed, stability, and maneuverability for both canal cruising and open-sea adventures.",
        specs: {
          cabins: "1 + toilet",
          guests: "25",
          engines: "Mercruiser 4.2 TDI Bravo III 370hp",
          maxSpeed: "38 knots"
        },
        description: [
          "The Damsko 1000 is designed to break routine, offering the versatility to host large parties with friends or enjoy quality time with family. While it may look like a classic Amsterdam canal sloop, this vessel is perfectly suited for open-sea adventures and island hopping, even in extreme conditions.",
          "Built with lightweight aluminum and equipped with sophisticated underwater hull design by Oosasanen, the Damsko 1000 delivers exceptional speed while minimizing fuel consumption. The boat is incredibly maneuverable, capable of making the sharpest turns with a turning circle equal to its own length, even at top speed.",
          "Each Damsko 1000 is handcrafted in the Netherlands by a dedicated team of skilled builders who carefully weld, paint, and pay attention to every detail, ensuring a vessel that combines social enjoyment with performance and convenience."
        ],
        features: {
          "Technical Specifications": [
            "Length: 32.8 ft / 10 m",
            "Beam: 11.8 ft / 3.60 m",
            "Freeboard: 5.6 ft / 1.70 m",
            "Draft: 2-3.3 ft / 0.6-1.0 m",
            "Fuel capacity: 175 gal / 660 L",
            "Fresh water: 26.5-53 gal / 100-200 L",
            "CE Certificate: D 25 / C 12",
            "Material: Aluminum"
          ],
          "Performance": [
            "Engine: Mercruiser 4.2 TDI Bravo III 370hp (diesel)",
            "Petrol options also available",
            "Cruising speed: 27 knots (45 km/h)",
            "Top speed: 38 knots (70 km/h)",
            "Hull designed by Oosasanen for efficiency",
            "Turning circle equal to boat length",
            "Excellent stability in open sea conditions"
          ],
          "Comfort & Features": [
            "Optional cabin for two with toilet",
            "GPS navigation system",
            "Wireless phone charger",
            "USB charging ports",
            "110L refrigerator with smartphone control",
            "Built-in bottle openers",
            "Spacious layout for entertaining",
            "Customizable interior options"
          ],
          "Design & Construction": [
            "Classic Amsterdam sloop design scaled up",
            "Handcrafted in the Netherlands",
            "Lightweight aluminum construction",
            "Minimal maintenance requirements",
            "Fully customizable to owner preferences",
            "Versatile for both canal cruising and offshore use",
            "Attention to detail throughout"
          ]
        }
      },
      {
        id: "lekker-damsko-750",
        name: "LEKKER Damsko 750",
        length: "25 ft / 7.50 m",
        thumbnail: "/LekkerPage-08.png",
        shortDesc: "An iconic eye-catcher with the spirit of a fighter, combining classic Amsterdam sloop styling with unprecedented speed of up to 46 knots.",
        specs: {
          cabins: "1",
          guests: "16",
          engines: "Multiple options up to 430hp",
          maxSpeed: "46 knots"
        },
        gallery: [
          "/LekkerPage-08.png",
          "/LekkerPage-09.png",
          "/LekkerPage-10.png",
          "/LekkerPage-11.png",
          "/LekkerPage-12.png",
          "/LekkerPage-15.png",
          "/LekkerPage-18.png",
          "/LekkerPage-19.png",
          "/LekkerPage-21.png",
          "/LekkerPage-22.png"
        ],
        description: [
          "The legendary Damsko 750 is a head-turning vessel that combines comfort with exceptional performance - a true wolf in sheep's clothing. This classic Amsterdam sloop will let you fly over the water with impressive speed, available with both diesel and petrol engine options up to 430hp.",
          "The practical console offers ample space for everything you need, including a 110-liter refrigerator that can be pre-cooled via smartphone app. Experience ultimate freedom with the Damsko 750, which features a cabin for two, eliminating the need to return to shore after sunset.",
          "Built with an aluminum body, each LEKKER Damsko 750 can be fully customized to meet your unique desires, from exterior color to cockpit gauges, making it truly your own."
        ],
        features: {
          "Technical Specifications": [
            "Length: 25 ft / 7.50 m",
            "Beam: 8.8 ft / 2.70 m",
            "Freeboard: 4.8 ft / 1.45 m",
            "Draft: 2.3-3.3 ft / 0.7-1.0 m",
            "Fuel capacity: 63 gal / 240 L",
            "Fresh water: 16 gal / 60 L",
            "CE Certificate: D 16 / C 12",
            "Material: Aluminum"
          ],
          "Engine Options": [
            "Petrol options up to 430hp (MerCruiser or Volvo)",
            "Diesel options up to 320hp (Mercury or Volvo)",
            "Cruising speed: 22 knots (40 km/h)",
            "Top speed: 46 knots (85 km/h)",
            "Performance hull design for speed and stability"
          ],
          "Comfort & Technology": [
            "Cabin for two people",
            "110L refrigerator with smartphone control",
            "Wireless phone charger",
            "USB charging ports",
            "Built-in bottle openers",
            "Sun awning option",
            "Customizable gauges and controls"
          ],
          "Design & Experience": [
            "Classic Amsterdam sloop styling",
            "Fully customizable aluminum construction",
            "Minimal maintenance requirements",
            "Drop anchor anywhere for swimming or overnight stays",
            "Premium materials throughout",
            "Handcrafted in the Netherlands",
            "Ultimate freedom to explore"
          ]
        }
      }
    ].map(enhanceModel)
  },
  "windy": {
    id: "windy",
    name: "Windy",
    headline: "Scandinavian Excellence in Sport Cruisers",
    description: "Scandinavian excellence in sport cruisers with superior build quality and handling.",
    image: "/lekker 45-3.jpg",
    models: [] // No individual models as per instructions - use image gallery only
  },
  "santasevera": {
    id: "santasevera",
    name: "Santasevera",
    headline: "Boutique Italian Craftsmanship",
    description: "Boutique shipyard creating custom luxury vessels with unparalleled attention to detail.",
    image: "/lekker 45-4.jpg",
    models: [
      {
        id: "santasevera-85",
        name: "Santasevera 85",
        length: "85 ft / 25.9 m",
        thumbnail: "/LekkerPage-10.png",
        shortDesc: "Flagship model showcasing the pinnacle of Italian craftsmanship.",
        specs: {
          cabins: "4",
          guests: "8",
          engines: "Twin MTU 16V2000 M96L",
          maxSpeed: "28 knots"
        }
      }
    ].map(enhanceModel)
  },
  "salpa": {
    id: "salpa",
    name: "Salpa",
    headline: "Mediterranean Elegance and Performance",
    description: "Builders of elegant Mediterranean-style cruisers with exceptional sea-keeping.",
    image: "/lekker 45-5.jpg",
    models: [
      {
        id: "salpa-39",
        name: "Salpa 39",
        length: "39 ft / 11.9 m",
        thumbnail: "/LekkerPage-11.png",
        shortDesc: "Versatile cruiser with exceptional Mediterranean styling.",
        specs: {
          cabins: "2",
          guests: "8",
          engines: "Twin Volvo Penta D6",
          maxSpeed: "32 knots"
        }
      }
    ].map(enhanceModel)
  }
}; 
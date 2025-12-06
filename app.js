/* EmailJS Configuration */
const EMAILJS_SERVICE_ID = "service_c6ov9mu";
const EMAILJS_TEMPLATE_ID = "template_vb3h1ct";
const EMAILJS_PUBLIC_KEY = "kybcBAi1eXVkgOmVg";

/* Product Data with Categories */
const detailedProducts = [
  // Chairs & Stretchers Category
  {
    id: 'folding-stretcher-blue',
    name: 'Folding Stretcher (Blue)',
    price: 'AED 280',
    category: 'chairs',
    description: 'Portable lightweight folding stretcher designed for emergency patient transport in hospitals, clinics, ambulances, sports venues, and home use. Made from high-strength aluminum alloy and waterproof canvas. Easy to fold, carry, sterilize, and store. Supports up to 159kg.',
    keyFeatures: [
      'Lightweight & foldable design with wheels and outriggers',
      'Durable waterproof Oxford fabric',
      'High load capacity: 159kg',
      'Compact storage size',
      'Ideal for rescue, outdoor emergencies & medical facilities'
    ],
    images: [
      { src: 'images/folding stretcher.png', alt: 'Folding Stretcher (Blue)' },
      { src: 'images/folding stretcher.png', alt: 'Folding Stretcher side view' }
    ]
  },
  {
    id: 'spine-board',
    name: 'Spine Board',
    price: 'AED 190 (Adult)',
    category: 'chairs',
    description: 'High-density PE emergency spine board with straps, used for full-body immobilization during patient transport. Completely X-ray translucent and floatable, compatible with most head immobilizers.',
    keyFeatures: [
      'Strong lightweight HDPE construction',
      'X-ray, MRI & CT compatible',
      'Waterproof & easy to disinfect',
      'Load capacity: 159kg',
      'Molded ergonomic handles for easier lifting'
    ],
    images: [
      { src: 'images/spine board.png', alt: 'Spine Board' }
    ]
  },
  {
    id: 'yxh-3b-automatic-ambulance-stretcher',
    name: 'YXH-3B Automatic Ambulance Stretcher',
    price: 'AED 1,150',
    category: 'chairs',
    description: 'Professional automatic loading stretcher for ambulances, featuring adjustable backrest and lightweight aluminum frame. Folds automatically and locks securely in vehicles.',
    keyFeatures: [
      'Automatic foldable legs & locking system',
      'Adjustable backrest (up to 75°)',
      'Strong aluminum build with cushioned mattress',
      'Max load: 159kg',
      'Smooth wheels with brakes'
    ],
    images: [
      { src: 'images/aumbalance stretcher.png', alt: 'YXH-3B Automatic Ambulance Stretcher' }
    ]
  },
  {
    id: 'ambulance-chair-stretcher',
    name: 'Ambulance Chair Stretcher (Chair-Type)',
    price: 'AED 2,200',
    category: 'chairs',
    description: 'Convertible stretcher that transforms into a chair for narrow spaces like stairways and corridors. Ideal for hospitals, emergency teams & rescue operations.',
    keyFeatures: [
      'Converts from stretcher to chair',
      'Lightweight aluminum alloy frame',
      'Adjustable backrest: 85°',
      'Foldable design with wheels',
      'Load capacity: 159kg'
    ],
    images: [
      { src: 'images/aumbalance chair stretcher.png', alt: 'Ambulance Chair Stretcher' }
    ]
  },
  {
    id: 'scoop-stretcher',
    name: 'Scoop Stretcher (Split Type)',
    price: 'AED 390',
    category: 'chairs',
    description: 'Adjustable aluminum scoop stretcher designed to transfer patients with fractures without lifting or rolling. Splits into two halves to prevent spinal movement.',
    keyFeatures: [
      'High-strength lightweight aluminum',
      'Adjustable length for body size',
      'Splits and locks securely for immobilization',
      'Supports 159kg',
      'Ideal for ambulances, rescue & hospitals'
    ],
    images: [
      { src: 'images/scoop stretcher.png', alt: 'Scoop Stretcher' }
    ]
  },
  {
    id: 'stair-stretcher-evac-chair',
    name: 'Stair Stretcher / Evacuation Chair',
    price: 'AED 650',
    category: 'chairs',
    description: 'Foldable rescue chair for safely transporting patients up and down stairs during emergencies and evacuations.',
    keyFeatures: [
      'Sturdy aluminum frame with wheels',
      'Lightweight & foldable for storage',
      'Designed for stair climbing',
      'Load capacity: 159kg',
      'Ideal for EMS, hospitals & fire rescue'
    ],
    images: [
      { src: 'images/stair stretcher.png', alt: 'Stair Stretcher' }
    ]
  },
  {
    id: 'stair-chair',
    name: 'Stair Chair',
    price: 'AED 500',
    category: 'chairs',
    description: 'Foldable emergency evacuation chair with wheels for safe patient transport on stairs.',
    keyFeatures: [
      'Lightweight aluminum frame',
      'Foldable for compact storage',
      'Safety belts included',
      'Maximum weight capacity: 160 kg'
    ],
    images: [
      { src: 'images/stair chair.png', alt: 'Stair Chair' }
    ]
  },
  {
    id: 'foldable-stretcher',
    name: 'Foldable Stretcher',
    price: 'AED 155',
    category: 'chairs',
    description: 'Lightweight aluminum emergency rescue stretcher with handles for safe patient transport.',
    keyFeatures: [
      'Foldable design for storage & transport',
      'Strong aluminum frame',
      'Durable nylon fabric bed',
      'Includes two adjustable safety straps'
    ],
    images: [
      { src: 'images/foldable stretcher.png', alt: 'Foldable Stretcher' }
    ]
  },
  {
    id: 'advanced-automatic-loading-stretcher',
    name: 'Advanced & Enhanced Automatic Loading Stretcher',
    price: 'AED 550',
    category: 'chairs',
    description: 'Heavy-duty ambulance stretcher with foldaway legs and automatic height adjustment. Engineered for safe, efficient patient transport in hospitals, clinics, and emergency response.',
    keyFeatures: [
      'Strong aluminum alloy construction',
      'Ergonomic handles for height adjustment',
      'Lightweight, durable, and antiseptic',
      'Designed for demanding emergency environments'
    ],
    images: [
      { src: 'images/automatic chair.png', alt: 'Advanced Automatic Loading Stretcher' }
    ]
  },
  // Emergency Lights Category
  {
    id: 'led-light-bar-4w-22x4w',
    name: '4W LED Emergency Light Bar with 100W Siren (22x4W LEDs, Waterproof, 12V DC)',
    price: 'AED 800',
    category: 'lights',
    description: 'The TBD-GA-8300HSPK+CJB-100E LED Emergency Light Bar & Siren System is designed for ambulances, police cars, fire trucks, and rescue teams. It combines powerful lighting and a 100W siren with 7 sound options for maximum visibility and alerting. Built to withstand harsh conditions, it ensures reliable performance in critical operations.',
    keyFeatures: [
      'High-Intensity Lighting: 22x4W LED modules + 2 alley lights, totaling 90 LEDs',
      'Versatile Sound Options: Integrated 100W siren with 7 customizable sounds',
      'Two-Way Light Control: Flexible operation for optimal functionality',
      'Magnetic Mounting: Quick, secure installation without drilling',
      'Waterproof Design: Works in -40°C to +60°C weather conditions',
      'Durable Construction: PC, aluminum alloy, and iron materials',
      'User-Friendly Interface: Volume control, microphone port, and indicators included'
    ],
    images: [
      { src: 'images/light police.png', alt: '4W LED Emergency Light Bar with 100W Siren' }
    ]
  },
  {
    id: 'led-light-bar-slim-20x4w',
    name: 'Slim LED Emergency Light Bar with 100W Siren (20x4W LEDs, Red/Blue, Waterproof, 12V DC)',
    price: 'AED 1,000',
    category: 'lights',
    description: 'The TBD-GA-5200H+CJB-100E system offers bright, energy-efficient lighting and a 100W siren with 5 sound options. Compact, waterproof, and easy to install via magnetic mounting, ideal for emergency vehicles.',
    keyFeatures: [
      'High-Intensity Lighting: 20x4W LED modules, totaling 80 LEDs',
      'Versatile Sound Options: 100W siren with 5 selectable sounds',
      'Two-Way Light Control: Easy-to-use operation',
      'Magnetic Mounting: Secure attachment without permanent installation',
      'Waterproof Design: Reliable in -40°C to +60°C conditions',
      'Durable Construction: PC, aluminum alloy, and iron',
      'User-Friendly Interface: Volume switch, microphone port, and indicators'
    ],
    images: [
      { src: 'images/emergency with speakers.png', alt: 'Slim LED Emergency Light Bar with 100W Siren' }
    ]
  },
  {
    id: 'led-light-bar-98-leds',
    name: 'LED Emergency Light Bar with 100W Siren (98 LEDs, Red/Blue, Waterproof, 12V DC)',
    price: 'AED 900',
    category: 'lights',
    description: 'The TBD-GA-5300M+CJB-100E provides 98 high-intensity LEDs for superior illumination and a 100W siren with 7 sound options. Compact, magnetic, and weatherproof for emergency vehicle use.',
    keyFeatures: [
      'High-Intensity Lighting: 98 LEDs in 10x9 + 2x4 modules',
      'Versatile Sound Options: 100W siren with 7 customizable sounds',
      'Two-Way Light Control: Flexible operation for all situations',
      'Magnetic Mounting: Quick installation without drilling',
      'Waterproof Design: Performs in -40°C to +60°C',
      'Durable Construction: PC, aluminum alloy, and iron',
      'User-Friendly Interface: Indicators, volume control, and MIC port'
    ],
    images: [
      { src: 'images/police 4w.png', alt: 'LED Emergency Light Bar with 98 LEDs' }
    ]
  },
  {
    id: 'led-light-bar-80-leds',
    name: 'LED Emergency Light Bar with 100W Siren (80 LEDs, Magnetic Mount, Waterproof, 12V DC)',
    price: 'AED 700',
    category: 'lights',
    description: 'The TBD-GA-8401HSPK+CJB-100E features 80 high-intensity LEDs and a 100W siren with 7 sound options. Magnetic mount and durable construction make it ideal for emergency vehicles in any condition.',
    keyFeatures: [
      'High-Intensity Lighting: 80 LEDs for visibility in emergencies',
      'Versatile Sound Options: 100W siren with 7 customizable sounds',
      'Two-Way Light Control: Simple and flexible operation',
      'Magnetic Mounting: Secure attachment without permanent installation',
      'Waterproof Design: Operates from -40°C to +60°C',
      'Durable Construction: PC, aluminum alloy, and iron',
      'User-Friendly Interface: Volume switch, MIC port, and indicators'
    ],
    images: [
      { src: 'images/police 80leds.png', alt: 'LED Emergency Light Bar with 80 LEDs' }
    ]
  },
  {
    id: 'led-warning-light-square-60',
    name: 'Big Square LED Warning Light (60 LEDs, Flashing, Waterproof, 12V DC)',
    price: 'AED 90 each',
    category: 'lights',
    description: 'The LED-29HT Warning Light is a high-visibility, durable signaling device suitable for trucks, trailers, construction equipment, and emergency vehicles. Features flashing mode and robust construction.',
    keyFeatures: [
      'Bright and Effective Lighting: 60x1W LEDs',
      'Flashing Mode: Enhances alertness in hazardous areas',
      'Waterproof Design: Works in -40°C to +60°C',
      'Durable Construction: PC and aluminum alloy',
      'Easy Installation: Mounts securely using screws',
      'Versatile Use: Ideal for industrial and emergency vehicles'
    ],
    images: [
      { src: 'images/led 60.png', alt: 'Big Square LED Warning Light' }
    ]
  },
  {
    id: 'led-warning-light-rectangle-88',
    name: 'Rectangle Small LED-19 Warning Light (88 LEDs, Flashing, Waterproof, 12V DC)',
    price: 'AED 50 pair',
    category: 'lights',
    description: 'The LED-19 Warning Light delivers 88 high-intensity LEDs with flashing mode, ensuring safety for trucks, trailers, construction equipment, and emergency vehicles.',
    keyFeatures: [
      'Bright and Effective Lighting: 88x0.15W LEDs',
      'Flashing Mode: Enhanced visibility in hazardous conditions',
      'Waterproof Design: Functional in -40°C to +60°C',
      'Durable Construction: PC and aluminum alloy',
      'Easy Installation: Mounts via screws',
      'Versatile Use: Perfect for industrial and emergency applications'
    ],
    images: [
      { src: 'images/led rectangle.png', alt: 'Rectangle Small LED-19 Warning Light' }
    ]
  },
  {
    id: 'cjb-100e-yd-100-siren',
    name: 'CJB-100E+YD-100 Professional Siren & Speaker System (100W, 7 Sounds, Waterproof, 12V/24V)',
    price: 'AED 250',
    category: 'lights',
    description: 'The CJB-100E+YD-100 siren system provides powerful audio signaling for ambulances, police, fire trucks, and emergency vehicles, with dual voltage operation and 7 sound options.',
    keyFeatures: [
      'High-Power Siren: 100W with 7 customizable sounds',
      'Dual Voltage Compatibility: Operates on 12V and 24V systems',
      'Waterproof Design: Performs in -40°C to +60°C',
      'User-Friendly Controls: Volume switch, MIC port, two-way light control',
      'Durable Construction: Iron and ABS materials',
      'Easy Installation: Comes with screws and brackets'
    ],
    images: [
      { src: 'images/speakers.png', alt: 'CJB-100E+YD-100 Professional Siren & Speaker System' }
    ]
  },
  {
    id: 'led-light-bar-392-leds',
    name: 'Red/Blue LED Emergency Light Bar with Built-in Speaker & 100W Siren (392 LEDs, Flashing, Waterproof, Dual Voltage)',
    price: 'AED 600',
    category: 'lights',
    description: 'The TBD-GA-2000L features 392 high-intensity 0.15W LEDs and optional siren up to 200W. Dual voltage operation and waterproof design make it ideal for emergency vehicles.',
    keyFeatures: [
      'Bright and Effective Lighting: 392 LEDs',
      'Flashing Mode: Enhances alertness in emergencies',
      'Waterproof Design: Reliable in rain, snow, or extreme temperatures',
      'Dual Voltage Compatibility: Works with 12V and 24V systems',
      'Durable Construction: PC and aluminum alloy',
      'Versatile Use: Perfect for ambulances, police, fire trucks, and rescue vehicles'
    ],
    images: [
      { src: 'images/392 leds.png', alt: 'Red/Blue LED Emergency Light Bar with 392 LEDs' }
    ]
  },
  // Additional Chairs & Stretchers
  {
    id: 'spider-straps',
    name: 'Spider Straps',
    price: 'AED 30',
    category: 'chairs',
    description: 'Color-coded immobilization straps for securing patients to spine boards. Designed for fast application and safe emergency transport.',
    keyFeatures: [
      'Heavy-duty nylon with quick-release buckles',
      'Universal fit for most spine boards',
      'Waterproof and reusable',
      'Color-coded for rapid use in emergencies'
    ],
    images: [
      { src: 'images/spider straps.png', alt: 'Spider Straps' }
    ]
  },
  {
    id: 'rolling-splint-medium',
    name: 'Rolling Splint – Medium',
    price: 'AED 17',
    category: 'chairs',
    description: 'Flexible emergency splint for immobilizing fractured or injured arms/legs. Lightweight & compact, ideal for trauma response and first aid kits.',
    keyFeatures: [
      'Flexible, portable & reusable',
      'Moldable to injured limb',
      'Easy to clean',
      'Size: 61cm × 11cm'
    ],
    images: [
      { src: 'images/rolling splint.png', alt: 'Rolling Splint – Medium' }
    ]
  },
  {
    id: 'rolling-splint-small',
    name: 'Rolling Splint – Small',
    price: 'AED 16',
    category: 'chairs',
    description: 'Compact splint for children or smaller limbs. Perfect for sprains and fractures during sports or emergencies.',
    keyFeatures: [
      'Lightweight, durable & reusable',
      'Easy application in seconds',
      'Ideal for first aid & outdoor kits',
      'Size: 46cm × 11cm'
    ],
    images: [
      { src: 'images/rolling splint.png', alt: 'Rolling Splint – Small' }
    ]
  },
  {
    id: 'head-immobilizer',
    name: 'Head Immobilizer',
    price: 'AED 140',
    category: 'chairs',
    description: 'Adjustable foam head support for spine boards and trauma stretchers, ensuring patient safety during transport.',
    keyFeatures: [
      'Compatible with standard spine boards',
      'Adjustable hook-and-loop straps',
      'Waterproof, easy-to-clean surface',
      'Large ear openings for monitoring'
    ],
    images: [
      { src: 'images/head imbolizer.png', alt: 'Head Immobilizer' }
    ]
  },
  {
    id: 'ked-extrication-device',
    name: 'KED Extrication Device',
    price: 'AED 340',
    category: 'chairs',
    description: 'Adjustable spine immobilizer vest for car rescue and trauma care, ensuring safe extrication of patients.',
    keyFeatures: [
      'Hard bamboo board for spinal fixation',
      'Color-coded safety belts for fast application',
      'High-density sponge pads for comfort',
      'Nylon covering, easy to clean'
    ],
    images: [
      { src: 'images/ked.png', alt: 'KED Extrication Device' }
    ]
  },
  {
    id: 'vacuum-splint-set',
    name: 'Vacuum Splint Set',
    price: 'AED 600',
    category: 'chairs',
    description: 'Medical immobilization splints for arms, legs, or full body support with vacuum pump for rapid fixation.',
    keyFeatures: [
      'Durable TPU material',
      'Stabilizes injured limbs within seconds',
      'Vacuum guarantee >72 hours',
      'MRI/CT/X-ray compatible'
    ],
    images: [
      { src: 'images/vaccum splint set.png', alt: 'Vacuum Splint Set' }
    ]
  },
  {
    id: 'air-splint-set',
    name: 'Air Splint Set – 5-Piece Inflatable Immobilization Kit',
    price: 'AED 200',
    category: 'chairs',
    description: 'Inflatable emergency splints designed to immobilize injured limbs quickly. Suitable for arm, leg, wrist, and ankle injuries. Lightweight and portable for pre-hospital and first aid use.',
    keyFeatures: [
      'Dynamic splints for full limb immobilization',
      'Reusable & durable PVC material',
      'Easy inflation with compact carry bag',
      'Trusted by paramedics, doctors, and caregivers'
    ],
    images: [
      { src: 'images/air splint.png', alt: 'Air Splint Set' }
    ]
  },
  {
    id: 'cpr-board',
    name: 'CPR Board – Rigid Backboard for CPR',
    price: 'AED 120',
    category: 'chairs',
    description: 'Provides a firm surface for effective chest compressions during CPR. Portable, lightweight, and ideal for hospitals, ambulances, and training sessions.',
    keyFeatures: [
      'Stable and non-slip surface',
      'Ergonomic handles for easy transport',
      'Durable, hygienic, and lightweight',
      'Perfect for training and emergency use'
    ],
    images: [
      { src: 'images/cpr board.png', alt: 'CPR Board' }
    ]
  },
  // Other medical equipment (defaulting to chairs category)
  {
    id: 'emergency-thermal-blanket',
    name: 'Emergency Thermal Blanket',
    price: 'AED 7',
    category: 'chairs',
    description: 'Emergency survival blanket reflecting 90% body heat to prevent hypothermia. Waterproof, windproof & compact—perfect for rescue, outdoor emergencies and first-aid kits.',
    keyFeatures: [
      'Retains body warmth',
      'Waterproof & tear-resistant foil',
      'Ultra-light & portable',
      'Size: 210 × 160cm (Silver/Gold)'
    ],
    images: [
      { src: 'images/thermal blanket.png', alt: 'Emergency Thermal Blanket' }
    ]
  },
  {
    id: 'portable-suction-unit',
    name: 'Portable Suction Unit (Battery-Powered)',
    price: 'AED 450',
    category: 'chairs',
    description: 'Rechargeable emergency suction machine for ambulances, home, or clinical use. Efficiently clears mucus and secretions.',
    keyFeatures: [
      'High suction power with low noise',
      'Overflow-protection design',
      'Compact, lightweight & portable',
      '12V DC battery operation (~30 min)'
    ],
    images: [
      { src: 'images/suction.png', alt: 'Portable Suction Unit' }
    ]
  },
  {
    id: 'iv-hook-single',
    name: 'IV Hook – Single',
    price: 'AED 90',
    category: 'chairs',
    description: 'Durable single IV bag hanger for emergency use in ambulances or hospitals.',
    keyFeatures: [
      'Secure single-line IV support',
      'Rust-resistant aluminum frame',
      'Easy ceiling or stretcher mounting',
      'Compact & lightweight'
    ],
    images: [
      { src: 'images/hook single.png', alt: 'IV Hook – Single' }
    ]
  },
  {
    id: 'iv-hook-double',
    name: 'IV Hook – Double',
    price: 'AED 110',
    category: 'chairs',
    description: 'Double IV bag hanger for simultaneous infusions during emergency care.',
    keyFeatures: [
      'Holds two IV bags securely',
      'Durable, rust-resistant aluminum',
      'Easy mounting on ambulances or hospital beds',
      'Compact and portable'
    ],
    images: [
      { src: 'images/hook double.png', alt: 'IV Hook – Double' }
    ]
  },
  {
    id: 'oxygen-cylinder-10l',
    name: 'Oxygen Cylinder – 10L',
    price: 'AED 250',
    category: 'chairs',
    description: 'High-pressure aluminum oxygen cylinder for emergency or clinical use, complete with pin-index valve and valve guard.',
    keyFeatures: [
      'Premium aluminum construction',
      'Safety-tested 225 bar pressure',
      'Compact, portable, and reliable',
      'Ideal for ambulances and healthcare'
    ],
    images: [
      { src: 'images/oxygen 10L.png', alt: '10L Oxygen Cylinder' }
    ]
  },
  {
    id: 'oxygen-cylinder-2l-set',
    name: 'Oxygen Cylinder – 2L (Complete Set)',
    price: 'AED 240',
    category: 'chairs',
    description: 'Portable 2L steel oxygen cylinder kit with regulator, mask, and carrying box for home or ambulance use.',
    keyFeatures: [
      'High-purity oxygen delivery',
      'Lightweight & portable',
      'Durable steel construction',
      'Safety valves and pressure gauges included'
    ],
    images: [
      { src: 'images/oxygen set.png', alt: '2L Oxygen Cylinder Set' }
    ]
  },
  {
    id: 'emergency-first-aid-bag',
    name: 'Emergency First Aid Bag (Empty)',
    price: 'AED 180',
    category: 'chairs',
    description: 'Compact trauma response bag for EMTs, paramedics, or doctors, perfect for organizing emergency medical supplies.',
    keyFeatures: [
      'Durable, water-resistant materials',
      'Multiple compartments with padded dividers',
      'Adjustable shoulder strap and top handle',
      'Reflective accents for low-light visibility'
    ],
    images: [
      { src: 'images/emergency bag.png', alt: 'Emergency First Aid Bag' }
    ]
  },
  {
    id: 'oxygen-regulator',
    name: 'Oxygen Regulator',
    price: 'AED 90',
    category: 'chairs',
    description: 'Adjustable medical oxygen pressure regulator with gauge for safe cylinder use in hospitals or home care.',
    keyFeatures: [
      'Accurate oxygen flow control (0–15 LPM)',
      'Chrome-plated brass for durability',
      'Safety valve included',
      'Compatible with standard oxygen cylinders'
    ],
    images: [
      { src: 'images/oxygen regulator.png', alt: 'Oxygen Regulator' }
    ]
  },
  {
    id: 'wall-mounted-sphygmomanometer',
    name: 'Wall-Mounted Sphygmomanometer',
    price: 'AED 150',
    category: 'chairs',
    description: 'Professional blood pressure monitor for clinics and hospitals (aneroid type).',
    keyFeatures: [
      'Large high-contrast dial for clear readings',
      'Durable analog mechanism',
      'Wall-mounted or floor-standing',
      'Adjustable tilting bracket for flexible viewing'
    ],
    images: [
      { src: 'images/wall.png', alt: 'Wall-Mounted Sphygmomanometer' }
    ]
  },
  {
    id: 'guedel-airway-set',
    name: 'Guedel Airway Set',
    price: 'AED 80',
    category: 'chairs',
    description: 'Color-coded Guedel cannulas for adult and pediatric airway management.',
    keyFeatures: [
      'Multiple sizes (40–100 mm)',
      'Smooth curved design for comfort',
      'Made of non-toxic medical-grade PE',
      'Single-use and disposable'
    ],
    images: [
      { src: 'images/guided airwell.png', alt: 'Guedel Airway Set' }
    ]
  },
  {
    id: 'air-nebulizer-machine',
    name: 'Air Nebulizer Machine',
    price: 'AED 250',
    category: 'chairs',
    description: 'Portable compressor nebulizer for asthma and respiratory therapy with adult & child mask.',
    keyFeatures: [
      'Quiet operation (<50 dB)',
      'Fine mist drug delivery',
      'Compact and lightweight',
      'Comes with tubing, mouthpiece, and filter'
    ],
    images: [
      { src: 'images/air nose.png', alt: 'Air Nebulizer Machine' }
    ]
  },
  {
    id: 'ambu-bag-manual-resuscitator',
    name: 'AMBU Bag – Manual Resuscitator (Adult, Child, Infant Sizes)',
    price: 'AED 65',
    category: 'chairs',
    description: 'Critical manual ventilation device for emergency CPR and respiratory support. Available in adult, child, and infant sizes for patients of all ages. Includes reservoir bag, one-way valve, and face mask for safe, efficient oxygen delivery.',
    keyFeatures: [
      'Versatile sizes for all ages',
      'Reservoir bag maintains positive pressure',
      'One-way valve prevents backflow',
      'Ergonomic and portable',
      'Sterile single-use packaging'
    ],
    images: [
      { src: 'images/ambu bag.png', alt: 'AMBU Bag Set' }
    ]
  },
  {
    id: 'fire-blanket',
    name: 'Fire Blanket – Emergency Flame Retardant Blanket',
    price: 'AED 30',
    category: 'chairs',
    description: 'Protects individuals from flames and helps smother small fires. Suitable for home, car, or workplace safety.',
    keyFeatures: [
      'Fire-resistant woven wool or fiberglass',
      'Compact and portable pouch',
      'Quick pull-tab deployment',
      'Single-use, durable, and easy to store'
    ],
    images: [
      { src: 'images/fire blanket.png', alt: 'Fire Blanket' }
    ]
  },
  {
    id: 'mt-740-2as-oxygen-backpack',
    name: 'MT-740-2AS Portable Oxygen Cylinder Backpack (2L Aluminum, CGA870-M Valve)',
    price: 'AED 400',
    category: 'chairs',
    description: 'Lightweight, portable oxygen cylinder in a durable backpack for home care, travel, and emergency use. Features a 2L aluminum tank and ergonomic straps.',
    keyFeatures: [
      'Portable Design: Durable backpack for easy mobility',
      'High-Capacity Tank: 2L aluminum cylinder',
      'User-Friendly Regulator: YR-108-870-115 for precise flow control',
      'Comfortable Carrying: Padded, ergonomic shoulder straps',
      'Compact Size: Ideal for travel and emergency use',
      'Durable Construction: High-quality materials ensure longevity',
      'Safety-Compliant: CE and ISO certifications'
    ],
    images: [
      { src: 'images/oxygen backpack.png', alt: 'MT-740-2AS Portable Oxygen Cylinder Backpack' }
    ]
  },
  {
    id: 'r-86-2-oxygen-regulator',
    name: 'R-86-2 Float-Type Tube-Flow Oxygen Regulator (1–10 L/min, CGA540/RH Inlet)',
    price: 'AED 150',
    category: 'chairs',
    description: 'Precise oxygen regulator for medical and industrial applications. Float-type mechanism ensures accurate flow from 1–10 L/min.',
    keyFeatures: [
      'Precise Flow Control: Stable oxygen delivery',
      'High Accuracy: Grade 4 certified',
      'Wide Metering Range: 1–10 L/min',
      'Durable Construction: Stainless steel and brass',
      'Universal Compatibility: Standard CGA540/RH inlet',
      'Medical & Industrial Use: Suitable for hospitals, clinics, labs, and industrial applications'
    ],
    images: [
      { src: 'images/oxygen regulator2.png', alt: 'R-86-2 Float-Type Tube-Flow Oxygen Regulator' }
    ]
  },
  {
    id: 'lyx-ac11-flowmeter',
    name: 'LYX-AC11 Float-Type Oxygen Flowmeter (0–15 L/min, Class 4 Accuracy, Reusable Humidifier)',
    price: 'AED 80',
    category: 'chairs',
    description: 'Reliable medical oxygen flowmeter with reusable 170ml humidifier for precise oxygen therapy delivery.',
    keyFeatures: [
      'Precise Flow Control: Float-type mechanism',
      'High Accuracy: Class 4 certified',
      'Durable Construction: Chrome-plated brass/zinc alloy body',
      'Reusable Humidifier: 170ml bottle included',
      'Universal Compatibility: Standard connection thread',
      'Medical Grade: CE-listed for hospital use',
      'Convenient Accessories: Disposable nasal cannulas included'
    ],
    images: [
      { src: 'images/oxygen flowmeter.png', alt: 'LYX-AC11 Float-Type Oxygen Flowmeter' }
    ]
  },
  {
    id: 'steel-oxygen-cylinder-10l',
    name: '10 Liter Steel Oxygen Cylinder (140mm OD, QF-7E Valve, Plastic Handles)',
    price: 'AED 250',
    category: 'chairs',
    description: 'Robust 10L steel cylinder for medical and industrial oxygen storage. Features durable construction, plastic handles, and ISO-certified standards.',
    keyFeatures: [
      'High Capacity: 10 liters of oxygen',
      'Durable Construction: 4.5mm thick steel wall',
      'Standard Dimensions: 140mm OD, 830mm height',
      'Lightweight Design: 13.6 kg',
      'QF-7E Valve: Reliable oxygen delivery',
      'Plastic Handles: Comfortable carrying',
      'Certified Quality: ISO 9809-3'
    ],
    images: [
      { src: 'images/oxygen cylinder.png', alt: '10 Liter Steel Oxygen Cylinder' }
    ]
  },
  {
    id: 'british-standard-gas-outlets',
    name: 'British Standard Medical Gas Outlets (ISO 32, Wall/Pendant Mounting, O₂, AIR, VAC)',
    price: 'AED 130',
    category: 'chairs',
    description: 'High-quality medical gas outlets compliant with EN ISO 9170-1/2 for hospitals and clinics. Supports oxygen, air, and vacuum.',
    keyFeatures: [
      'Compliance with Standards: EN ISO 9170-1/2, HTM 02-01',
      'Wide Gas Compatibility: O₂, AIR, VAC, N₂O, N₂, CO₂',
      'ISO 32 Color-Coding: Easy identification',
      'High-Quality Construction: 100mm copper pipelines',
      'Thorough Testing: Flow-tested and leak-tested',
      'Flexible Mounting Options: Wall, bead head, pendant'
    ],
    images: [
      { src: 'images/british gas.png', alt: 'British Standard Medical Gas Outlets' }
    ]
  },
  {
    id: 'bs-type-vacuum-regulator',
    name: 'BS-Type Suction Vacuum Regulator with Safety Trap',
    price: 'AED 270',
    category: 'chairs',
    description: 'Industrial-grade vacuum regulator with integrated safety trap, ensuring precise and safe vacuum control.',
    keyFeatures: [
      'BS Standard Compliance: Meets industrial/lab standards',
      'Safety Trap Integration: Prevents backflow of liquids/contaminants',
      'Durable Construction: Stainless steel body',
      'Precise Pressure Control: Maintains accurate vacuum levels',
      'Easy Installation: Compatible with standard vacuum fittings',
      'Compact Design: Space-saving and efficient'
    ],
    images: [
      { src: 'images/vaccuum regulator.png', alt: 'BS-Type Suction Vacuum Regulator with Safety Trap' }
    ]
  },
  {
    id: 'mt-st-1l-suction-jar',
    name: 'Reusable 1L Suction Jar/Canister with Wall Slides (MT-ST-1L)',
    price: 'AED 80',
    category: 'chairs',
    description: 'BPA-free, leak-proof suction jar for liquids, dust, and debris collection. Optional wall slides for secure mounting.',
    keyFeatures: [
      'Reusable and Leak-Proof: Safe repeated use',
      '1 Liter Capacity: Collect liquids, dust, or debris',
      'BPA-Free Material: Safe for use',
      'Optional Wall Slides: Secure wall mounting',
      'Versatile Usage: Household, industrial, laboratory',
      'Lightweight and Portable: Easy handling'
    ],
    images: [
      { src: 'images/suction jar.png', alt: 'Reusable 1L Suction Jar/Canister' }
    ]
  },
  {
    id: 'mt-sm-suction-motor',
    name: '12V Suction Motor with BD-04V Diaphragm Vacuum Pump (MT-SM)',
    price: 'AED 70',
    category: 'chairs',
    description: 'Compact and robust 12V DC suction motor with BD-04V diaphragm pump. Achieves up to -80 kPa vacuum and 18 LPM flow rate.',
    keyFeatures: [
      '12V DC Operation: Compatible with low-voltage sources',
      'BD-04V Diaphragm Pump: Strong, consistent suction',
      'High Performance: -80 kPa vacuum, 18 LPM flow',
      'Robust Construction: Industrial/lab-grade durability',
      'Standard Connections: Easy integration',
      'Portable Design: Suitable for stationary and mobile use',
      'Wide Applications: Industrial, lab, general vacuum tasks'
    ],
    images: [
      { src: 'images/suction motor.png', alt: '12V Suction Motor with BD-04V Diaphragm Vacuum Pump' }
    ]
  },
  {
    id: 'comprehensive-first-aid-kit',
    name: 'Comprehensive Red Plastic First Aid Kit with Essential Medical Supplies',
    price: 'AED 100',
    category: 'chairs',
    description: 'Complete first aid kit with bandages, scissors, forceps, gauze, and other medical essentials for home, car, or travel emergencies.',
    keyFeatures: [
      'Comprehensive Supplies: Bandages, gauze, triangular bandages, ice packs, scissors, tweezers, adhesive tapes, and more',
      'Durable Red Plastic Case: Easy visibility and portability',
      'Compact Design: Convenient storage for home, car, or travel',
      'Ready for Emergencies: Ideal for families, offices, or travel kits',
      'High-Quality Components: Sterile, reliable, and reusable where applicable'
    ],
    images: [
      { src: 'images/mid kit.png', alt: 'Comprehensive Red Plastic First Aid Kit' }
    ]
  }
];

// Add category to existing products that don't have it
const products = detailedProducts.map(product => {
  if (!product.category) {
    const nameLower = product.name.toLowerCase();
    const descLower = product.description.toLowerCase();
    if (nameLower.includes('led') || nameLower.includes('light') || nameLower.includes('siren') || nameLower.includes('warning') || descLower.includes('led') || descLower.includes('light')) {
      product.category = 'lights';
    } else if (nameLower.includes('stretcher') || nameLower.includes('chair') || nameLower.includes('board') || descLower.includes('stretcher') || descLower.includes('chair')) {
      product.category = 'chairs';
    } else {
      product.category = 'chairs'; // Default to chairs for other medical equipment
    }
  }
  // Ensure images array exists
  if (!product.images && product.image) {
    product.images = [product.image];
  }
  return product;
});

// DOM Elements
const homePage = document.getElementById('homePage');
const categoryPage = document.getElementById('categoryPage');
const productPage = document.getElementById('productPage');
const catalogEl = document.getElementById('catalog');
const productDetail = document.getElementById('productDetail');
const searchInput = document.getElementById('searchInput');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const checkoutForm = document.getElementById('checkoutForm');
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const customerNotes = document.getElementById('customerNotes');
const toast = document.getElementById('toast');
const contactBtn = document.getElementById('contactBtn');
const yearSpan = document.getElementById('year');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartPanel = document.getElementById('cartPanel');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartCount = document.getElementById('cartCount');
const mainLayout = document.getElementById('mainLayout');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');

// State Management
let currentCategory = null;
let currentProduct = null;
let filteredProducts = [];
let cart = [];

// Utility Functions
const normalizePriceNumber = (price) =>
  typeof price === 'number'
    ? price
    : Number(String(price).replace(/[^\d.]/g, '')) || 0;

const formatCurrency = (price) =>
  `AED ${normalizePriceNumber(price).toLocaleString()}`;

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
};

// Navigation Functions
function showHomePage() {
  homePage.classList.remove('hidden');
  categoryPage.classList.add('hidden');
  productPage.classList.add('hidden');
  currentCategory = null;
  currentProduct = null;
}

function showCategoryPage(category) {
  homePage.classList.add('hidden');
  categoryPage.classList.remove('hidden');
  productPage.classList.add('hidden');
  currentCategory = category;
  currentProduct = null;
  
  const categoryNames = {
    chairs: 'Chairs & Stretchers',
    lights: 'Emergency Lights'
  };
  
  categoryTitle.textContent = categoryNames[category] || 'Category';
  categoryDescription.textContent = category === 'chairs' 
    ? 'Emergency stretchers, ambulance chairs, evacuation chairs, and patient transport equipment'
    : 'LED light bars, warning lights, sirens, and emergency vehicle lighting systems';
  
  filteredProducts = products.filter(p => p.category === category);
  renderProducts();
}

function showProductPage(productId) {
  homePage.classList.add('hidden');
  categoryPage.classList.add('hidden');
  productPage.classList.remove('hidden');
  
  const product = products.find(p => p.id === productId);
  if (!product) {
    showHomePage();
    return;
  }
  
  currentProduct = product;
  renderProductDetail(product);
}

// Render Functions
function renderProducts() {
  catalogEl.innerHTML = '';
  if (!filteredProducts.length) {
    catalogEl.innerHTML = '<p>No products found.</p>';
    return;
  }
  
  filteredProducts.forEach((product) => {
    const card = buildProductCard(product);
    catalogEl.appendChild(card);
  });
}

function buildProductCard(product) {
  const card = document.createElement('article');
  card.className = 'card';
  card.style.cursor = 'pointer';
  
  const featureList = product.keyFeatures
    ?.slice(0, 3)
    .map((item) => `<li>${item}</li>`)
    .join('') ?? '';

  card.innerHTML = `
    <div class="card-inner">
      <figure>
        <img src="${product.images?.[0]?.src || product.image?.src || ''}" alt="${product.images?.[0]?.alt || product.name}">
      </figure>
      <div class="details">
        <h3>${product.name}</h3>
        <p class="description">${product.description.substring(0, 120)}...</p>
        <p class="price-line">${formatCurrency(product.price)}</p>
        <ul class="specs">
          ${featureList}
        </ul>
        <div class="controls">
          <button type="button" class="add-to-cart-btn" aria-label="Add ${product.name} to cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  // Click on card to view product
  card.addEventListener('click', (e) => {
    if (!e.target.closest('button')) {
      showProductPage(product.id);
    }
  });

  // Add to cart button
  card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  });

  return card;
}

function renderProductDetail(product) {
  const images = product.images || (product.image ? [product.image] : []);
  const mainImage = images[0]?.src || '';
  
  const imageGallery = images.map((img, idx) => `
    <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <img src="${img.src}" alt="${img.alt || product.name}">
    </div>
  `).join('');
  
  const featureList = product.keyFeatures
    ?.map((item) => `<li>${item}</li>`)
    .join('') ?? '';

  productDetail.innerHTML = `
    <div class="product-detail-content">
      <div class="product-gallery">
        <div class="gallery-main">
          <img id="mainProductImage" src="${mainImage}" alt="${product.name}">
          <button class="gallery-nav gallery-prev" aria-label="Previous image">‹</button>
          <button class="gallery-nav gallery-next" aria-label="Next image">›</button>
        </div>
        ${images.length > 1 ? `<div class="gallery-thumbs">${imageGallery}</div>` : ''}
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="product-price">${formatCurrency(product.price)}</p>
        <p class="product-description">${product.description}</p>
        <ul class="product-features">
          ${featureList}
        </ul>
        <div class="product-actions">
          <button type="button" class="add-to-cart-btn large" id="productAddToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  
  // Gallery functionality
  if (images.length > 1) {
    let currentImageIndex = 0;
    const mainImg = document.getElementById('mainProductImage');
    const thumbs = productDetail.querySelectorAll('.gallery-thumb');
    const prevBtn = productDetail.querySelector('.gallery-prev');
    const nextBtn = productDetail.querySelector('.gallery-next');
    
    function updateMainImage(index) {
      currentImageIndex = index;
      mainImg.src = images[index].src;
      mainImg.alt = images[index].alt || product.name;
      thumbs.forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
      });
    }
    
    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener('click', () => updateMainImage(idx));
    });
    
    prevBtn?.addEventListener('click', () => {
      updateMainImage((currentImageIndex - 1 + images.length) % images.length);
    });
    
    nextBtn?.addEventListener('click', () => {
      updateMainImage((currentImageIndex + 1) % images.length);
    });
  }
  
  // Add to cart from product page
  document.getElementById('productAddToCart').addEventListener('click', () => {
    addToCart(product, 1);
  });
}

function renderCart() {
  cartList.innerHTML = '';
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  if (!cart.length) {
    cartList.innerHTML = '<li class="cart-item">Cart is empty.</li>';
    cartTotal.textContent = 'Total: AED 0';
    return;
  }

  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <header>
        <span>${item.name}</span>
        <span>${formatCurrency(normalizePriceNumber(item.price) * item.quantity)}</span>
      </header>
      <div class="cart-item-body">
        <p>${item.description?.substring(0, 100)}...</p>
        <div class="cart-qty-controls">
          <button type="button" class="cart-qty-btn cart-qty-minus">−</button>
          <span class="cart-qty-value">${item.quantity}</span>
          <button type="button" class="cart-qty-btn cart-qty-plus">+</button>
        </div>
      </div>
      <button type="button" class="cart-remove-btn">Remove</button>
    `;

    const minusBtn = li.querySelector('.cart-qty-minus');
    const plusBtn = li.querySelector('.cart-qty-plus');
    const removeBtn = li.querySelector('.cart-remove-btn');

    minusBtn.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        renderCart();
      } else {
        cart.splice(idx, 1);
        renderCart();
      }
    });

    plusBtn.addEventListener('click', () => {
      item.quantity += 1;
      renderCart();
    });

    removeBtn.addEventListener('click', () => {
      cart.splice(idx, 1);
      renderCart();
    });

    cartList.appendChild(li);
  });

  const total = cart.reduce(
    (sum, item) => sum + normalizePriceNumber(item.price) * item.quantity,
    0
  );
  cartTotal.textContent = `Total: ${formatCurrency(total)}`;
}

function addToCart(product, qty) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });
  renderCart();
  showToast(`${product.name} added to cart.`);
}

// Event Listeners
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    showCategoryPage(category);
  });
});

document.getElementById('backToHome')?.addEventListener('click', () => {
  showHomePage();
});

document.getElementById('backToCategory')?.addEventListener('click', () => {
  if (currentCategory) {
    showCategoryPage(currentCategory);
  } else {
    showHomePage();
  }
});

searchInput?.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  if (term) {
    filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.keyFeatures?.some((k) => k.toLowerCase().includes(term))
    );
    if (currentCategory) {
      filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }
    if (homePage.classList.contains('hidden')) {
      renderProducts();
    } else {
      showCategoryPage('chairs'); // Default to showing search results in a category view
    }
  }
});

checkoutForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!cart.length) {
    showToast('Your cart is empty.');
    return;
  }
  if (!customerName.value.trim() || !customerPhone.value.trim()) {
    showToast('Please add your name and phone.');
    return;
  }

  const orderLines = cart
    .map(
      (item) =>
        `${item.name} (Qty ${item.quantity})\nFeatures: ${item.keyFeatures?.join('; ') || ''}`
    )
    .join('\n\n');

  const templateParams = {
    customer_name: customerName.value.trim(),
    phone_number: customerPhone.value.trim(),
    notes: customerNotes.value.trim(),
    order_summary: orderLines,
    order_total: cartTotal.textContent.replace('Total: ', '')
  };

  showToast('Sending order...');
  emailjs
    .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
      showToast('Order sent! We will call you shortly.');
      cart = [];
      checkoutForm.reset();
      renderCart();
    })
    .catch(() => showToast('Failed to send. Check EmailJS IDs.'));
});

contactBtn?.addEventListener('click', () => {
  window.location.href = 'mailto:Kygtrading1@gmail.com?subject=MedEqup%20Inquiry';
});

yearSpan.textContent = new Date().getFullYear();

// Cart toggle functionality
cartToggleBtn?.addEventListener('click', () => {
  cartPanel.classList.remove('hidden');
  mainLayout.classList.add('cart-open');
});

closeCartBtn?.addEventListener('click', () => {
  cartPanel.classList.add('hidden');
  mainLayout.classList.remove('cart-open');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (window.emailjs) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } else {
    console.warn('EmailJS SDK failed to load.');
  }
  showHomePage();
  renderCart();
});

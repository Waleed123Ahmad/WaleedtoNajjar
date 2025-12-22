
/* EmailJS placeholders – update with your actual IDs */
const EMAILJS_SERVICE_ID = "service_c6ov9mu";
const EMAILJS_TEMPLATE_ID = "template_vb3h1ct";
const EMAILJS_PUBLIC_KEY = "kybcBAi1eXVkgOmVg";

/**
 * PRODUCT IMAGES GUIDE:
 * 
 * To add multiple images to a product, use the 'images' array instead of 'image':
 * 
 * images: [
 *   {
 *     src: 'images/product-main.png',
 *     alt: 'Product Name - Main View'
 *   },
 *   {
 *     src: 'images/product-side.png',
 *     alt: 'Product Name - Side View'
 *   },
 *   {
 *     src: 'images/product-detail.png',
 *     alt: 'Product Name - Detail View'
 *   }
 * ]
 * 
 * The first image will be shown as the main image, and thumbnails will appear below
 * for all additional images. Users can click thumbnails or use arrow buttons to navigate.
 * 
 * If you only have one image, you can still use 'image' (single) and it will be converted
 * to an 'images' array automatically.
 */

const detailedProducts = [
  {
    id: 'folding-stretcher-blue',
    name: 'Folding Stretcher (Blue)',
    price: 'AED 280',
    category: 'transport',
    description:
      'Portable lightweight folding stretcher designed for emergency patient transport in hospitals, clinics, ambulances, sports venues, and home use. Made from high-strength aluminum alloy and waterproof canvas. Easy to fold, carry, sterilize, and store. Supports up to 159kg.',
    keyFeatures: [
      'Lightweight & foldable design with wheels and outriggers',
      'Durable waterproof Oxford fabric',
      'High load capacity: 159kg',
      'Compact storage size',
      'Ideal for rescue, outdoor emergencies & medical facilities'
    ],
    image: {
      src: 'images/folding stretcher.png',
      alt: 'Folding Stretcher (Blue)'
    }
  },
  {
    id: 'spine-board',
    name: 'Spine Board',
    price: 'AED 190 (Adult)',
    description:
      'High-density PE emergency spine board with straps, used for full-body immobilization during patient transport. Completely X-ray translucent and floatable, compatible with most head immobilizers.',
    keyFeatures: [
      'Strong lightweight HDPE construction',
      'X-ray, MRI & CT compatible',
      'Waterproof & easy to disinfect',
      'Load capacity: 159kg',
      'Molded ergonomic handles for easier lifting'
    ],
    image: {
      src: 'images/spine board.png',
      alt: 'Spine Board'
    }
  },
  {
    id: 'spider-straps',
    name: 'Spider Straps',
    price: 'AED 30',
    description:
      'Color-coded immobilization straps for securing patients to spine boards. Designed for fast application and safe emergency transport.',
    keyFeatures: [
      'Heavy-duty nylon with quick-release buckles',
      'Universal fit for most spine boards',
      'Waterproof and reusable',
      'Color-coded for rapid use in emergencies'
    ],
    images: [
      {
        src: 'images/spider straps.png',
        alt: 'Spider Straps'
      },
      {
        src: 'images/spiderstraps2.png',
        alt: 'Spider Straps - Detail View'
      }
    ]
  },
  {
    id: 'yxh-3b-automatic-ambulance-stretcher',
    name: 'YXH-3B Automatic Ambulance Stretcher',
    price: 'AED 1,150',
    category: 'transport',
    description:
      'Professional automatic loading stretcher for ambulances, featuring adjustable backrest and lightweight aluminum frame. Folds automatically and locks securely in vehicles.',
    keyFeatures: [
      'Automatic foldable legs & locking system',
      'Adjustable backrest (up to 75°)',
      'Strong aluminum build with cushioned mattress',
      'Max load: 159kg',
      'Smooth wheels with brakes'
    ],
    image: {
      src: 'images/aumbalance stretcher.png',
      alt: 'YXH-3B Automatic Ambulance Stretcher'
    }
  },
  {
    id: 'ambulance-chair-stretcher',
    name: 'Ambulance Chair Stretcher (Chair-Type)',
    price: 'AED 2,200',
    category: 'transport',
    description:
      'Convertible stretcher that transforms into a chair for narrow spaces like stairways and corridors. Ideal for hospitals, emergency teams & rescue operations.',
    keyFeatures: [
      'Converts from stretcher to chair',
      'Lightweight aluminum alloy frame',
      'Adjustable backrest: 85°',
      'Foldable design with wheels',
      'Load capacity: 159kg'
    ],
    image: {
      src: 'images/aumbalance chair stretcher.png',
      alt: 'Ambulance Chair Stretcher'
    }
  },
  {
    id: 'scoop-stretcher',
    name: 'Scoop Stretcher (Split Type)',
    price: 'AED 390',
    description:
      'Adjustable aluminum scoop stretcher designed to transfer patients with fractures without lifting or rolling. Splits into two halves to prevent spinal movement.',
    keyFeatures: [
      'High-strength lightweight aluminum',
      'Adjustable length for body size',
      'Splits and locks securely for immobilization',
      'Supports 159kg',
      'Ideal for ambulances, rescue & hospitals'
    ],
    image: {
      src: 'images/scoop stretcher.png',
      alt: 'Scoop Stretcher'
    }
  },
  {
    id: 'stair-stretcher-evac-chair',
    name: 'Stair Stretcher / Evacuation Chair',
    price: 'AED 650',
    description:
      'Foldable rescue chair for safely transporting patients up and down stairs during emergencies and evacuations.',
    keyFeatures: [
      'Sturdy aluminum frame with wheels',
      'Lightweight & foldable for storage',
      'Designed for stair climbing',
      'Load capacity: 159kg',
      'Ideal for EMS, hospitals & fire rescue'
    ],
    image: {
      src: 'images/stair stretcher.png',
      alt: 'Stair Stretcher'
    }
  },
  {
    id: 'rolling-splint-medium',
    name: 'Rolling Splint – Medium',
    price: 'AED 17',
    category: 'medical',
    description:
      'Flexible emergency splint for immobilizing fractured or injured arms/legs. Lightweight & compact, ideal for trauma response and first aid kits.',
    keyFeatures: [
      'Flexible, portable & reusable',
      'Moldable to injured limb',
      'Easy to clean',
      'Size: 61cm × 11cm'
    ],
    images: [
      {
        src: 'images/rolling splint.png',
        alt: 'Rolling Splint – Medium'
      },
      {
        src: 'images/rollingsplint2.png',
        alt: 'Rolling Splint – Medium - In Use'
      }
    ]
  },
  {
    id: 'rolling-splint-small',
    name: 'Rolling Splint – Small',
    price: 'AED 16',
    category: 'medical',
    description:
      'Compact splint for children or smaller limbs. Perfect for sprains and fractures during sports or emergencies.',
    keyFeatures: [
      'Lightweight, durable & reusable',
      'Easy application in seconds',
      'Ideal for first aid & outdoor kits',
      'Size: 46cm × 11cm'
    ],
    images: [
      {
        src: 'images/rolling splint.png',
        alt: 'Rolling Splint – Small'
      },
      {
        src: 'images/rollingsplint2.png',
        alt: 'Rolling Splint – Small - In Use'
      }
    ]
  },
  {
    id: 'emergency-thermal-blanket',
    name: 'Emergency Thermal Blanket',
    price: 'AED 7',
    category: 'medical',
    description:
      'Emergency survival blanket reflecting 90% body heat to prevent hypothermia. Waterproof, windproof & compact—perfect for rescue, outdoor emergencies and first-aid kits.',
    keyFeatures: [
      'Retains body warmth',
      'Waterproof & tear-resistant foil',
      'Ultra-light & portable',
      'Size: 210 × 160cm (Silver/Gold)'
    ],
    images: [
      {
        src: 'images/thermal blanket.png',
        alt: 'Emergency Thermal Blanket'
      },
      {
        src: 'images/emergencythermal2.png',
        alt: 'Emergency Thermal Blanket - Packaged View'
      }
    ]
  },
  {
    id: 'portable-suction-unit',
    name: 'Portable Suction Unit (Battery-Powered)',
    price: 'AED 450',
    description:
      'Rechargeable emergency suction machine for ambulances, home, or clinical use. Efficiently clears mucus and secretions.',
    keyFeatures: [
      'High suction power with low noise',
      'Overflow-protection design',
      'Compact, lightweight & portable',
      '12V DC battery operation (~30 min)'
    ],
    image: {
      src: 'images/suction.png',
      alt: 'Portable Suction Unit'
    }
  },
  {
    id: 'head-immobilizer',
    name: 'Head Immobilizer',
    price: 'AED 140',
    description:
      'Adjustable foam head support for spine boards and trauma stretchers, ensuring patient safety during transport.',
    keyFeatures: [
      'Compatible with standard spine boards',
      'Adjustable hook-and-loop straps',
      'Waterproof, easy-to-clean surface',
      'Large ear openings for monitoring'
    ],
    images: [
      {
        src: 'images/head imbolizer.png',
        alt: 'Head Immobilizer'
      },
      {
        src: 'images/headimbolizer2.png',
        alt: 'Head Immobilizer - Side View'
      }
    ]
  },
  {
    id: 'iv-hook-single',
    name: 'IV Hook – Single',
    price: 'AED 90',
    description:
      'Durable single IV bag hanger for emergency use in ambulances or hospitals.',
    keyFeatures: [
      'Secure single-line IV support',
      'Rust-resistant aluminum frame',
      'Easy ceiling or stretcher mounting',
      'Compact & lightweight'
    ],
    image: {
      src: 'images/hook single.png',
      alt: 'IV Hook – Single'
    }
  },
  {
    id: 'iv-hook-double',
    name: 'IV Hook – Double',
    price: 'AED 110',
    description:
      'Double IV bag hanger for simultaneous infusions during emergency care.',
    keyFeatures: [
      'Holds two IV bags securely',
      'Durable, rust-resistant aluminum',
      'Easy mounting on ambulances or hospital beds',
      'Compact and portable'
    ],
    image: {
      src: 'images/hook double.png',
      alt: 'IV Hook – Double'
    }
  },
  {
    id: 'oxygen-cylinder-10l',
    name: 'Oxygen Cylinder – 10L',
    price: 'AED 250',
    category: 'oxygen',
    description:
      'High-pressure aluminum oxygen cylinder for emergency or clinical use, complete with pin-index valve and valve guard.',
    keyFeatures: [
      'Premium aluminum construction',
      'Safety-tested 225 bar pressure',
      'Compact, portable, and reliable',
      'Ideal for ambulances and healthcare'
    ],
    image: {
      src: 'images/oxygen 10L.png',
      alt: '10L Oxygen Cylinder'
    }
  },
  {
    id: 'oxygen-cylinder-2l-set',
    name: 'Oxygen Cylinder – 2L (Complete Set)',
    price: 'AED 240',
    category: 'oxygen',
    description:
      'Portable 2L steel oxygen cylinder kit with regulator, mask, and carrying box for home or ambulance use.',
    keyFeatures: [
      'High-purity oxygen delivery',
      'Lightweight & portable',
      'Durable steel construction',
      'Safety valves and pressure gauges included'
    ],
    image: {
      src: 'images/oxygen set.png',
      alt: '2L Oxygen Cylinder Set'
    }
  },
  {
    id: 'emergency-first-aid-bag',
    name: 'Emergency First Aid Bag (Empty)',
    price: 'AED 180',
    category: 'medical',
    description:
      'Compact trauma response bag for EMTs, paramedics, or doctors, perfect for organizing emergency medical supplies.',
    keyFeatures: [
      'Durable, water-resistant materials',
      'Multiple compartments with padded dividers',
      'Adjustable shoulder strap and top handle',
      'Reflective accents for low-light visibility'
    ],
    image: {
      src: 'images/emergency bag.png',
      alt: 'Emergency First Aid Bag'
    }
  },
  {
    id: 'stair-chair',
    name: 'Stair Chair',
    price: 'AED 500',
    description:
      'Foldable emergency evacuation chair with wheels for safe patient transport on stairs.',
    keyFeatures: [
      'Lightweight aluminum frame',
      'Foldable for compact storage',
      'Safety belts included',
      'Maximum weight capacity: 160 kg'
    ],
    image: {
      src: 'images/stair chair.png',
      alt: 'Stair Chair'
    }
  },
  {
    id: 'vacuum-splint-set',
    name: 'Vacuum Splint Set',
    price: 'AED 600',
    description:
      'Medical immobilization splints for arms, legs, or full body support with vacuum pump for rapid fixation.',
    keyFeatures: [
      'Durable TPU material',
      'Stabilizes injured limbs within seconds',
      'Vacuum guarantee >72 hours',
      'MRI/CT/X-ray compatible'
    ],
    images: [
      {
        src: 'images/vaccum splint set.png',
        alt: 'Vacuum Splint Set'
      },
      {
        src: 'images/vaccumsplint2.png',
        alt: 'Vacuum Splint Set - Components View'
      }
    ]
  },
  {
    id: 'oxygen-regulator',
    name: 'Oxygen Regulator',
    price: 'AED 90',
    category: 'oxygen',
    description:
      'Adjustable medical oxygen pressure regulator with gauge for safe cylinder use in hospitals or home care.',
    keyFeatures: [
      'Accurate oxygen flow control (0–15 LPM)',
      'Chrome-plated brass for durability',
      'Safety valve included',
      'Compatible with standard oxygen cylinders'
    ],
    image: {
      src: 'images/oxygen regulator.png',
      alt: 'Oxygen Regulator'
    }
  },
  {
    id: 'ked-extrication-device',
    name: 'KED Extrication Device',
    price: 'AED 340',
    category: 'medical',
    description:
      'Adjustable spine immobilizer vest for car rescue and trauma care, ensuring safe extrication of patients.',
    keyFeatures: [
      'Hard bamboo board for spinal fixation',
      'Color-coded safety belts for fast application',
      'High-density sponge pads for comfort',
      'Nylon covering, easy to clean'
    ],
    image: {
      src: 'images/ked.png',
      alt: 'KED Extrication Device'
    }
  },
  {
    id: 'wall-mounted-sphygmomanometer',
    name: 'Wall-Mounted Sphygmomanometer',
    price: 'AED 150',
    description:
      'Professional blood pressure monitor for clinics and hospitals (aneroid type).',
    keyFeatures: [
      'Large high-contrast dial for clear readings',
      'Durable analog mechanism',
      'Wall-mounted or floor-standing',
      'Adjustable tilting bracket for flexible viewing'
    ],
    image: {
      src: 'images/wall.png',
      alt: 'Wall-Mounted Sphygmomanometer'
    }
  },
  {
    id: 'foldable-stretcher',
    name: 'Foldable Stretcher',
    price: 'AED 155',
    category: 'transport',
    description:
      'Lightweight aluminum emergency rescue stretcher with handles for safe patient transport.',
    keyFeatures: [
      'Foldable design for storage & transport',
      'Strong aluminum frame',
      'Durable nylon fabric bed',
      'Includes two adjustable safety straps'
    ],
    image: {
      src: 'images/foldable stretcher.png',
      alt: 'Foldable Stretcher'
    }
  },
  {
    id: 'guedel-airway-set',
    name: 'Guedel Airway Set',
    price: 'AED 80',
    description:
      'Color-coded Guedel cannulas for adult and pediatric airway management.',
    keyFeatures: [
      'Multiple sizes (40–100 mm)',
      'Smooth curved design for comfort',
      'Made of non-toxic medical-grade PE',
      'Single-use and disposable'
    ],
    image: {
      src: 'images/guided airwell.png',
      alt: 'Guedel Airway Set'
    }
  },
  {
    id: 'air-nebulizer-machine',
    name: 'Air Nebulizer Machine',
    price: 'AED 250',
    description:
      'Portable compressor nebulizer for asthma and respiratory therapy with adult & child mask.',
    keyFeatures: [
      'Quiet operation (<50 dB)',
      'Fine mist drug delivery',
      'Compact and lightweight',
      'Comes with tubing, mouthpiece, and filter'
    ],
    image: {
      src: 'images/air nose.png',
      alt: 'Air Nebulizer Machine'
    }
  },
  {
    id: 'ambu-bag-manual-resuscitator',
    name: 'AMBU Bag – Manual Resuscitator (Adult, Child, Infant Sizes)',
    price: 'AED 65',
    category: 'medical',
    description:
      'Critical manual ventilation device for emergency CPR and respiratory support. Available in adult, child, and infant sizes for patients of all ages. Includes reservoir bag, one-way valve, and face mask for safe, efficient oxygen delivery.',
    keyFeatures: [
      'Versatile sizes for all ages',
      'Reservoir bag maintains positive pressure',
      'One-way valve prevents backflow',
      'Ergonomic and portable',
      'Sterile single-use packaging'
    ],
    image: {
      src: 'images/ambu bag.png',
      alt: 'AMBU Bag Set'
    }
  },
  {
    id: 'air-splint-set',
    name: 'Air Splint Set – 5-Piece Inflatable Immobilization Kit',
    price: 'AED 200',
    category: 'medical',
    description:
      'Inflatable emergency splints designed to immobilize injured limbs quickly. Suitable for arm, leg, wrist, and ankle injuries. Lightweight and portable for pre-hospital and first aid use.',
    keyFeatures: [
      'Dynamic splints for full limb immobilization',
      'Reusable & durable PVC material',
      'Easy inflation with compact carry bag',
      'Trusted by paramedics, doctors, and caregivers'
    ],
    image: {
      src: 'images/air splint.png',
      alt: 'Air Splint Set'
    }
  },
  {
    id: 'cpr-board',
    name: 'CPR Board – Rigid Backboard for CPR',
    price: 'AED 120',
    category: 'medical',
    description:
      'Provides a firm surface for effective chest compressions during CPR. Portable, lightweight, and ideal for hospitals, ambulances, and training sessions.',
    keyFeatures: [
      'Stable and non-slip surface',
      'Ergonomic handles for easy transport',
      'Durable, hygienic, and lightweight',
      'Perfect for training and emergency use'
    ],
    image: {
      src: 'images/cpr board.png',
      alt: 'CPR Board'
    }
  },
  {
    id: 'fire-blanket',
    name: 'Fire Blanket – Emergency Flame Retardant Blanket',
    price: 'AED 30',
    category: 'medical',
    description:
      'Protects individuals from flames and helps smother small fires. Suitable for home, car, or workplace safety.',
    keyFeatures: [
      'Fire-resistant woven wool or fiberglass',
      'Compact and portable pouch',
      'Quick pull-tab deployment',
      'Single-use, durable, and easy to store'
    ],
    image: {
      src: 'images/fire blanket.png',
      alt: 'Fire Blanket'
    }
  },
  {
    id: 'advanced-automatic-loading-stretcher',
    name: 'Advanced & Enhanced Automatic Loading Stretcher',
    price: 'AED 1350',
    description:
      'Heavy-duty ambulance stretcher with foldaway legs and automatic height adjustment. Engineered for safe, efficient patient transport in hospitals, clinics, and emergency response.',
    keyFeatures: [
      'Strong aluminum alloy construction',
      'Ergonomic handles for height adjustment',
      'Lightweight, durable, and antiseptic',
      'Designed for demanding emergency environments'
    ],
    image: {
      src: 'images/automatic chair.png',
      alt: 'Advanced Automatic Loading Stretcher'
    }
  },





//here new products start
{
  id: 'led-light-bar-4w-22x4w',
  name: '4W LED Emergency Light Bar with 100W Siren (22x4W LEDs, Waterproof, 12V DC)',
  price: 'AED 800',
  description:
    'The TBD-GA-8300HSPK+CJB-100E LED Emergency Light Bar & Siren System is designed for ambulances, police cars, fire trucks, and rescue teams. It combines powerful lighting and a 100W siren with 7 sound options for maximum visibility and alerting. Built to withstand harsh conditions, it ensures reliable performance in critical operations.',
  keyFeatures: [
    'High-Intensity Lighting: 22x4W LED modules + 2 alley lights, totaling 90 LEDs',
    'Versatile Sound Options: Integrated 100W siren with 7 customizable sounds',
    'Two-Way Light Control: Flexible operation for optimal functionality',
    'Magnetic Mounting: Quick, secure installation without drilling',
    'Waterproof Design: Works in -40°C to +60°C weather conditions',
    'Durable Construction: PC, aluminum alloy, and iron materials',
    'User-Friendly Interface: Volume control, microphone port, and indicators included'
  ],
  image: {
    src: 'images/light police.png',
    alt: '4W LED Emergency Light Bar with 100W Siren'
  }
},
{
  id: 'led-light-bar-slim-20x4w',
  name: 'Slim LED Emergency Light Bar with 100W Siren (20x4W LEDs, Red/Blue, Waterproof, 12V DC)',
  price: 'AED 1,000',
  description:
    'The TBD-GA-5200H+CJB-100E system offers bright, energy-efficient lighting and a 100W siren with 5 sound options. Compact, waterproof, and easy to install via magnetic mounting, ideal for emergency vehicles.',
  keyFeatures: [
    'High-Intensity Lighting: 20x4W LED modules, totaling 80 LEDs',
    'Versatile Sound Options: 100W siren with 5 selectable sounds',
    'Two-Way Light Control: Easy-to-use operation',
    'Magnetic Mounting: Secure attachment without permanent installation',
    'Waterproof Design: Reliable in -40°C to +60°C conditions',
    'Durable Construction: PC, aluminum alloy, and iron',
    'User-Friendly Interface: Volume switch, microphone port, and indicators'
  ],
  image: {
    src: 'images/emergency with speakers.png',
    alt: 'Slim LED Emergency Light Bar with 100W Siren'
  }
},
{
  id: 'led-light-bar-98-leds',
  name: 'LED Emergency Light Bar with 100W Siren (98 LEDs, Red/Blue, Waterproof, 12V DC)',
  price: 'AED 900',
  description:
    'The TBD-GA-5300M+CJB-100E provides 98 high-intensity LEDs for superior illumination and a 100W siren with 7 sound options. Compact, magnetic, and weatherproof for emergency vehicle use.',
  keyFeatures: [
    'High-Intensity Lighting: 98 LEDs in 10x9 + 2x4 modules',
    'Versatile Sound Options: 100W siren with 7 customizable sounds',
    'Two-Way Light Control: Flexible operation for all situations',
    'Magnetic Mounting: Quick installation without drilling',
    'Waterproof Design: Performs in -40°C to +60°C',
    'Durable Construction: PC, aluminum alloy, and iron',
    'User-Friendly Interface: Indicators, volume control, and MIC port'
  ],
  image: {
    src: 'images/police 4w.png',
    alt: 'LED Emergency Light Bar with 98 LEDs'
  }
},
{
  id: 'led-light-bar-80-leds',
  name: 'LED Emergency Light Bar with 100W Siren (80 LEDs, Magnetic Mount, Waterproof, 12V DC)',
  price: 'AED 700',
  description:
    'The TBD-GA-8401HSPK+CJB-100E features 80 high-intensity LEDs and a 100W siren with 7 sound options. Magnetic mount and durable construction make it ideal for emergency vehicles in any condition.',
  keyFeatures: [
    'High-Intensity Lighting: 80 LEDs for visibility in emergencies',
    'Versatile Sound Options: 100W siren with 7 customizable sounds',
    'Two-Way Light Control: Simple and flexible operation',
    'Magnetic Mounting: Secure attachment without permanent installation',
    'Waterproof Design: Operates from -40°C to +60°C',
    'Durable Construction: PC, aluminum alloy, and iron',
    'User-Friendly Interface: Volume switch, MIC port, and indicators'
  ],
  image: {
    src: 'images/police 80leds.png',
    alt: 'LED Emergency Light Bar with 80 LEDs'
  }
},
{
  id: 'led-warning-light-square-60',
  name: 'Big Square LED Warning Light (60 LEDs, Flashing, Waterproof, 12V DC)',
  price: 'AED 90 each',
  description:
    'The LED-29HT Warning Light is a high-visibility, durable signaling device suitable for trucks, trailers, construction equipment, and emergency vehicles. Features flashing mode and robust construction.',
  keyFeatures: [
    'Bright and Effective Lighting: 60x1W LEDs',
    'Flashing Mode: Enhances alertness in hazardous areas',
    'Waterproof Design: Works in -40°C to +60°C',
    'Durable Construction: PC and aluminum alloy',
    'Easy Installation: Mounts securely using screws',
    'Versatile Use: Ideal for industrial and emergency vehicles'
  ],
  image: {
    src: 'images/led 60.png',
    alt: 'Big Square LED Warning Light'
  }
},
{
  id: 'led-warning-light-rectangle-88',
  name: 'Rectangle Small LED-19 Warning Light (88 LEDs, Flashing, Waterproof, 12V DC)',
  price: 'AED 50 pair',
  description:
    'The LED-19 Warning Light delivers 88 high-intensity LEDs with flashing mode, ensuring safety for trucks, trailers, construction equipment, and emergency vehicles.',
  keyFeatures: [
    'Bright and Effective Lighting: 88x0.15W LEDs',
    'Flashing Mode: Enhanced visibility in hazardous conditions',
    'Waterproof Design: Functional in -40°C to +60°C',
    'Durable Construction: PC and aluminum alloy',
    'Easy Installation: Mounts via screws',
    'Versatile Use: Perfect for industrial and emergency applications'
  ],
  image: {
    src: 'images/led rectangle.png',
    alt: 'Rectangle Small LED-19 Warning Light'
  }
},
{
  id: 'cjb-100e-yd-100-siren',
  name: 'CJB-100E+YD-100 Professional Siren & Speaker System (100W, 7 Sounds, Waterproof, 12V/24V)',
  price: 'AED 250',
  description:
    'The CJB-100E+YD-100 siren system provides powerful audio signaling for ambulances, police, fire trucks, and emergency vehicles, with dual voltage operation and 7 sound options.',
  keyFeatures: [
    'High-Power Siren: 100W with 7 customizable sounds',
    'Dual Voltage Compatibility: Operates on 12V and 24V systems',
    'Waterproof Design: Performs in -40°C to +60°C',
    'User-Friendly Controls: Volume switch, MIC port, two-way light control',
    'Durable Construction: Iron and ABS materials',
    'Easy Installation: Comes with screws and brackets'
  ],
  image: {
    src: 'images/speakers.png',
    alt: 'CJB-100E+YD-100 Professional Siren & Speaker System'
  }
},
{
  id: 'led-light-bar-392-leds',
  name: 'Red/Blue LED Emergency Light Bar with Built-in Speaker & 100W Siren (392 LEDs, Flashing, Waterproof, Dual Voltage)',
  price: 'AED 600',
  description:
    'The TBD-GA-2000L features 392 high-intensity 0.15W LEDs and optional siren up to 200W. Dual voltage operation and waterproof design make it ideal for emergency vehicles.',
  keyFeatures: [
    'Bright and Effective Lighting: 392 LEDs',
    'Flashing Mode: Enhances alertness in emergencies',
    'Waterproof Design: Reliable in rain, snow, or extreme temperatures',
    'Dual Voltage Compatibility: Works with 12V and 24V systems',
    'Durable Construction: PC and aluminum alloy',
    'Versatile Use: Perfect for ambulances, police, fire trucks, and rescue vehicles'
  ],
  image: {
    src: 'images/392 leds.png',
    alt: 'Red/Blue LED Emergency Light Bar with 392 LEDs'
  }
  },
  {
    id: 'mt-740-2as-oxygen-backpack',
    name: 'MT-740-2AS Portable Oxygen Cylinder Backpack (2L Aluminum, CGA870-M Valve)',
    price: 'AED 400',
  category: 'oxygen',
  description:
    'Lightweight, portable oxygen cylinder in a durable backpack for home care, travel, and emergency use. Features a 2L aluminum tank and ergonomic straps.',
    keyFeatures: [
      'Portable Design: Durable backpack for easy mobility',
      'High-Capacity Tank: 2L aluminum cylinder',
      'User-Friendly Regulator: YR-108-870-115 for precise flow control',
      'Comfortable Carrying: Padded, ergonomic shoulder straps',
      'Compact Size: Ideal for travel and emergency use',
      'Durable Construction: High-quality materials ensure longevity',
      'Safety-Compliant: CE and ISO certifications'
    ],
  image: {
    src: 'images/oxygen backpack.png',
    alt: 'MT-740-2AS Portable Oxygen Cylinder Backpack'
  }
  },
  {
    id: 'r-86-2-oxygen-regulator',
    name: 'R-86-2 Float-Type Tube-Flow Oxygen Regulator (1–10 L/min, CGA540/RH Inlet)',
    price: 'AED 150',
  category: 'oxygen',
  description:
    'Precise oxygen regulator for medical and industrial applications. Float-type mechanism ensures accurate flow from 1–10 L/min.',
    keyFeatures: [
      'Precise Flow Control: Stable oxygen delivery',
      'High Accuracy: Grade 4 certified',
      'Wide Metering Range: 1–10 L/min',
      'Durable Construction: Stainless steel and brass',
      'Universal Compatibility: Standard CGA540/RH inlet',
      'Medical & Industrial Use: Suitable for hospitals, clinics, labs, and industrial applications'
    ],
  image: {
    src: 'images/oxygen regulator2.png',
    alt: 'R-86-2 Float-Type Tube-Flow Oxygen Regulator'
  }
  },
  {
    id: 'lyx-ac11-flowmeter',
    name: 'LYX-AC11 Float-Type Oxygen Flowmeter (0–15 L/min, Class 4 Accuracy, Reusable Humidifier)',
    price: 'AED 80',
  category: 'oxygen',
  description:
    'Reliable medical oxygen flowmeter with reusable 170ml humidifier for precise oxygen therapy delivery.',
    keyFeatures: [
      'Precise Flow Control: Float-type mechanism',
      'High Accuracy: Class 4 certified',
      'Durable Construction: Chrome-plated brass/zinc alloy body',
      'Reusable Humidifier: 170ml bottle included',
      'Universal Compatibility: Standard connection thread',
      'Medical Grade: CE-listed for hospital use',
      'Convenient Accessories: Disposable nasal cannulas included'
    ],
  image: {
    src: 'images/oxygen flowmeter.png',
    alt: 'LYX-AC11 Float-Type Oxygen Flowmeter'
  }
  },
  {
    id: 'steel-oxygen-cylinder-10l',
    name: '10 Liter Steel Oxygen Cylinder (140mm OD, QF-7E Valve, Plastic Handles)',
    price: 'AED 250',
  category: 'oxygen',
  description:
    'Robust 10L steel cylinder for medical and industrial oxygen storage. Features durable construction, plastic handles, and ISO-certified standards.',
    keyFeatures: [
      'High Capacity: 10 liters of oxygen',
      'Durable Construction: 4.5mm thick steel wall',
      'Standard Dimensions: 140mm OD, 830mm height',
      'Lightweight Design: 13.6 kg',
      'QF-7E Valve: Reliable oxygen delivery',
      'Plastic Handles: Comfortable carrying',
      'Certified Quality: ISO 9809-3'
    ],
  image: {
    src: 'images/oxygen cylinder.png',
    alt: '10 Liter Steel Oxygen Cylinder'
  }
  },
  {
    id: 'british-standard-gas-outlets',
    name: 'British Standard Medical Gas Outlets (ISO 32, Wall/Pendant Mounting, O₂, AIR, VAC)',
    price: 'AED 130',
    category: 'oxygen',
  description:
    'High-quality medical gas outlets compliant with EN ISO 9170-1/2 for hospitals and clinics. Supports oxygen, air, and vacuum.',
    keyFeatures: [
      'Compliance with Standards: EN ISO 9170-1/2, HTM 02-01',
      'Wide Gas Compatibility: O₂, AIR, VAC, N₂O, N₂, CO₂',
      'ISO 32 Color-Coding: Easy identification',
      'High-Quality Construction: 100mm copper pipelines',
      'Thorough Testing: Flow-tested and leak-tested',
      'Flexible Mounting Options: Wall, bead head, pendant'
    ],
  image: {
    src: 'images/british gas.png',
    alt: 'British Standard Medical Gas Outlets'
  }
  },
  {
    id: 'bs-type-vacuum-regulator',
    name: 'BS-Type Suction Vacuum Regulator with Safety Trap',
    price: 'AED 270',
  description:
    'Industrial-grade vacuum regulator with integrated safety trap, ensuring precise and safe vacuum control.',
    keyFeatures: [
      'BS Standard Compliance: Meets industrial/lab standards',
      'Safety Trap Integration: Prevents backflow of liquids/contaminants',
      'Durable Construction: Stainless steel body',
      'Precise Pressure Control: Maintains accurate vacuum levels',
      'Easy Installation: Compatible with standard vacuum fittings',
      'Compact Design: Space-saving and efficient'
    ],
  image: {
    src: 'images/vaccuum regulator.png',
    alt: 'BS-Type Suction Vacuum Regulator with Safety Trap'
  }
  },
  {
    id: 'mt-st-1l-suction-jar',
    name: 'Reusable 1L Suction Jar/Canister with Wall Slides (MT-ST-1L)',
    price: 'AED 80',
  description:
    'BPA-free, leak-proof suction jar for liquids, dust, and debris collection. Optional wall slides for secure mounting.',
    keyFeatures: [
      'Reusable and Leak-Proof: Safe repeated use',
      '1 Liter Capacity: Collect liquids, dust, or debris',
      'BPA-Free Material: Safe for use',
      'Optional Wall Slides: Secure wall mounting',
      'Versatile Usage: Household, industrial, laboratory',
      'Lightweight and Portable: Easy handling'
    ],
  image: {
    src: 'images/suction jar.png',
    alt: 'Reusable 1L Suction Jar/Canister'
  }
  },
  {
    id: 'mt-sm-suction-motor',
    name: '12V Suction Motor with BD-04V Diaphragm Vacuum Pump (MT-SM)',
    price: 'AED 70',
  description:
    'Compact and robust 12V DC suction motor with BD-04V diaphragm pump. Achieves up to -80 kPa vacuum and 18 LPM flow rate.',
    keyFeatures: [
      '12V DC Operation: Compatible with low-voltage sources',
      'BD-04V Diaphragm Pump: Strong, consistent suction',
      'High Performance: -80 kPa vacuum, 18 LPM flow',
      'Robust Construction: Industrial/lab-grade durability',
      'Standard Connections: Easy integration',
      'Portable Design: Suitable for stationary and mobile use',
      'Wide Applications: Industrial, lab, general vacuum tasks'
    ],
  image: {
    src: 'images/suction motor.png',
    alt: '12V Suction Motor with BD-04V Diaphragm Vacuum Pump'
  }
  },
  {
    id: 'comprehensive-first-aid-kit',
    name: 'Comprehensive Red Plastic First Aid Kit with Essential Medical Supplies',
    price: 'AED 100',
    category: 'medical',
  description:
    'Complete first aid kit with bandages, scissors, forceps, gauze, and other medical essentials for home, car, or travel emergencies.',
    keyFeatures: [
      'Comprehensive Supplies: Bandages, gauze, triangular bandages, ice packs, scissors, tweezers, adhesive tapes, and more',
      'Durable Red Plastic Case: Easy visibility and portability',
      'Compact Design: Convenient storage for home, car, or travel',
      'Ready for Emergencies: Ideal for families, offices, or travel kits',
      'High-Quality Components: Sterile, reliable, and reusable where applicable'
    ],
  image: {
    src: 'images/mid kit.png',
    alt: 'Comprehensive Red Plastic First Aid Kit'
  }
},
// New Stretchers & Patient Transport Products
{
  id: 'stretcher-base',
  name: 'Stretcher Base',
  price: 'AED 240',
  category: 'medical',
  description: 'Standard stretcher base designed for patient transport in medical facilities and ambulances.',
  keyFeatures: [
    'Dimensions: 87 × 7 × 5 cm',
    'Net Weight: 35 kg',
    'Durable construction for reliable patient transport',
    'Compatible with standard stretcher systems'
  ],
  image: {
    src: 'images/stretcherbase.png',
    alt: 'Stretcher Base'
  }
},
{
  id: 'stretcher-base-advanced',
  name: 'Stretcher Base – Advanced',
  price: 'AED 900',
  category: 'medical',
  description: 'Advanced stretcher base with enhanced features for professional medical transport.',
  keyFeatures: [
    'Dimensions: 208 × 63.5 × 44 cm',
    'Net Weight: 30 kg',
    'Load Bearing: < 159 kg',
    'Advanced locking and adjustment mechanisms',
    'Professional-grade construction'
  ],
  image: {
    src: 'images/stretcherbaseadvance.png',
    alt: 'Stretcher Base – Advanced'
  }
},
{
  id: 'vacuum-stretcher',
  name: 'Vacuum Stretcher',
  price: 'AED 1100',
  category: 'transport',
  description: 'Vacuum stretcher system for secure patient immobilization during transport.',
  keyFeatures: [
    'Dimensions: 80 × 88 × 80 cm',
    'Net Weight: 9 kg',
    'Load Bearing: < 159 kg',
    'Vacuum technology for secure patient positioning',
    'Lightweight and portable design'
  ],
  image: {
    src: 'images/vacuumstretcher.png',
    alt: 'Vacuum Stretcher'
  }
},
{
  id: 'basket-stretcher',
  name: 'Basket Stretcher',
  price: 'AED 1050',
  category: 'transport',
  description: 'Basket stretcher designed for rescue operations and difficult terrain patient transport.',
  keyFeatures: [
    'Size: 218 × 62 × 16 cm',
    'Load Bearing: < 200 kg',
    'Net Weight: 16 kg',
    'Ideal for rescue and evacuation operations',
    'Durable construction for outdoor use'
  ],
  image: {
    src: 'images/basketstretcher.png',
    alt: 'Basket Stretcher'
  }
},
{
  id: 'spine-board-new',
  name: 'Spine Board',
  price: 'AED 360',
  category: 'transport',
  description: 'Foldable emergency spine board for full-body immobilization during patient transport.',
  keyFeatures: [
    'Size: 218 × 62 × 16 cm',
    'Load Bearing: < 200 kg',
    'Net Weight: 16 kg',
    'X-ray translucent material',
    'Essential for spinal injury management'
  ],
  image: {
    src: 'images/spineboard2.png',
    alt: 'Spine Board'
  }
},
// Suction & Oxygen Equipment
{
  id: 'gas-outlet',
  name: 'Gas Outlet',
  price: 'AED 130',
  category: 'oxygen',
  description: 'Medical gas outlet system supporting multiple gas types for hospital and ambulance use.',
  keyFeatures: [
    'Gas Types: O₂ / AIR / VAC',
    'Standard medical gas connections',
    'Reliable and safe operation',
    'Essential for medical facilities'
  ],
  image: {
    src: 'images/gasoutlet.png',
    alt: 'Gas Outlet'
  }
},
{
  id: 'manual-suction',
  name: 'Manual Suction (Child / Adult)',
  price: 'AED 100',
  category: 'medical',
  description: 'Manual suction unit for emergency airway management in pediatric and adult patients.',
  keyFeatures: [
    'Dimensions: 41 × 52 × 44 cm',
    'Net Weight: 10 kg (25 pcs)',
    'Suction Capacity: Max 3000 mL',
    'Suitable for child and adult use',
    'Portable and easy to operate'
  ],
  image: {
    src: 'images/manualsuction(adultchild).png',
    alt: 'Manual Suction (Child / Adult)'
  }
},
{
  id: 'portable-suction-unit-new',
  name: 'Portable Suction Unit',
  price: 'AED 280',
  category: 'medical',
  description: 'Portable electric suction unit for emergency medical use in ambulances and medical facilities.',
  keyFeatures: [
    'Voltage: AC 220V ±10%, 50Hz ±2%, 12V DC',
    'Input Power: 90 VA',
    'Size: 35 × 26 × 29 cm',
    'Dual power supply capability',
    'Compact and portable design'
  ],
  image: {
    src: 'images/suctionport.png',
    alt: 'Portable Suction Unit'
  }
},
// Emergency & First Aid Supplies
{
  id: 'cervical-collar',
  name: 'Cervical Collar',
  price: 'AED 20',
  category: 'transport',
  description: 'Adjustable cervical collar for neck immobilization in emergency situations.',
  keyFeatures: [
    'Material: 100% Cotton',
    'Adjustable size for proper fit',
    'Essential for spinal injury management',
    'Comfortable and secure',
    'Single-use or reusable options'
  ],
  image: {
    src: 'images/cervicularcolar.png',
    alt: 'Cervical Collar'
  }
},
  {
    id: 'cpr-mask',
    name: 'CPR Mask',
    price: 'AED 35',
    category: 'medical',
    description: 'CPR mask with one-way valve for safe rescue breathing during cardiopulmonary resuscitation.',
  keyFeatures: [
    'Material: 100% PVC',
    'Adjustable size',
    'One-way valve prevents backflow',
    'Transparent design for monitoring',
    'Essential CPR equipment'
  ],
  image: {
    src: 'images/cprmask.png',
    alt: 'CPR Mask'
  }
},
  {
    id: 'burn-kit',
    name: 'Burn Kit',
    price: 'AED 40',
    category: 'medical',
    description: 'Comprehensive burn treatment kit for emergency first aid and burn care.',
  keyFeatures: [
    'Complete burn treatment supplies',
    'Sterile dressings and bandages',
    'Essential for emergency burn care',
    'Compact and portable',
    'Ready for immediate use'
  ],
  image: {
    src: 'images/burnkit.png',
    alt: 'Burn Kit'
  }
},
// Medical Waste Management
{
  id: 'sharps-container',
  name: 'Sharps Container',
  price: 'AED 60',
  category: 'medical',
  description: 'Medical sharps container for safe disposal of needles and sharp medical instruments.',
  keyFeatures: [
    'Capacity: 5.0 L',
    'Size: 24.5 × 20 × 16.5 cm',
    'Puncture-resistant construction',
    'Compliant with medical waste regulations',
    'Secure lid prevents accidental exposure'
  ],
  image: {
    src: 'images/sharpsconatiner.png',
    alt: 'Sharps Container'
  }
},
// Monitoring & Diagnostic Equipment
{
  id: 'blood-glucose-monitor',
  name: 'Blood Glucose Monitor',
  price: 'AED 40',
  category: 'medical',
  description: 'Portable blood glucose monitoring system with test strips for diabetes management.',
  keyFeatures: [
    'Includes 50 test strips',
    'Accurate and reliable readings',
    'Easy to use design',
    'Compact and portable',
    'Essential for diabetes care'
  ],
  image: {
    src: 'images/bloodglucosemonitor.png',
    alt: 'Blood Glucose Monitor'
  }
},
{
  id: 'blood-pressure-monitor-wall',
  name: 'Blood Pressure Monitor (Wall Mounted)',
  price: 'AED 130',
  category: 'medical',
  description: 'Wall-mounted blood pressure monitor for medical facilities and ambulances.',
  keyFeatures: [
    'Bladder Material: PVC (Latex available)',
    'Measurement Range: 0 to 300 mmHg',
    'Accuracy: +/-3 mmHg',
    'Weight: 850 g',
    'Professional medical-grade device'
  ],
  image: {
    src: 'images/bloodpresurewall.png',
    alt: 'Blood Pressure Monitor (Wall Mounted)'
  }
},
{
  id: 'stethoscope',
  name: 'Stethoscope',
  price: 'AED 40',
  category: 'medical',
  description: 'Professional stethoscope for auscultation and medical diagnosis.',
  keyFeatures: [
    'High-quality acoustic performance',
    'Comfortable earpieces',
    'Dual-head chest piece',
    'Essential diagnostic tool',
    'Professional medical equipment'
  ],
  image: {
    src: 'images/stethscope.png',
    alt: 'Stethoscope'
  }
},
// Ambulance & Facility Accessories
{
  id: 'intercom',
  name: 'Intercom',
  price: 'AED 145',
  category: 'ambulance',
  description: 'Intercom system for communication in ambulances and medical facilities.',
  keyFeatures: [
    'Working Voltage: DC 12V',
    'Current: 300 mA',
    'Material: High-quality ABS',
    'Clear communication system',
    'Essential for ambulance operations'
  ],
  image: {
    src: 'images/intercom.png',
    alt: 'Intercom'
  }
},
{
  id: 'sliding-window',
  name: 'Sliding Window',
  price: 'AED 275',
  category: 'ambulance',
  description: 'Sliding window system for ambulances and medical vehicles.',
  keyFeatures: [
    'Wall Thickness: 30–50 mm',
    'Dimensions: 650 × 350 mm',
    'Weight: 6 kg',
    'Durable construction',
    'Smooth sliding mechanism'
  ],
  image: {
    src: 'images/slidingwindow.png',
    alt: 'Sliding Window'
  }
},
{
  id: 'ventilation-fan',
  name: 'Ventilation Fan',
  price: 'AED 145',
  category: 'ambulance',
  description: 'Ventilation fan system for ambulance air circulation and climate control.',
  keyFeatures: [
    'Voltage: 12 VDC',
    'Current: 4.3 A',
    'Airflow: 1100 m³/h',
    'Duty Type: S1',
    'Weight: 3.44 kg'
  ],
  image: {
    src: 'images/ventilationfan.png',
    alt: 'Ventilation Fan'
  }
},
{
  id: 'led-ceiling-light',
  name: 'LED Ceiling Light',
  price: 'AED 25',
  category: 'ambulance',
  description: 'LED ceiling light for ambulances and medical facilities.',
  keyFeatures: [
    'Power: 18 W',
    'Energy-efficient LED technology',
    'Bright and reliable illumination',
    'Long-lasting performance',
    'Essential for medical vehicle lighting'
  ],
  image: {
    src: 'images/ledcirlinglight.png',
    alt: 'LED Ceiling Light'
  }
}];


// Add category to products and convert image to images array
const products = detailedProducts.map(product => {
  // Convert image to images array format
  if (product.image && !product.images) {
    product.images = [product.image];
  }
  
  // Add category if missing - categorize into 4 categories
  if (!product.category) {
    const nameLower = product.name.toLowerCase();
    const descLower = product.description.toLowerCase();
    const idLower = product.id.toLowerCase();
    
    // Oxygen System (check first before medical category)
    if (nameLower.includes('oxygen') || 
        (nameLower.includes('flowmeter') && (nameLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (nameLower.includes('regulator') && (nameLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (nameLower.includes('cylinder') && (nameLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (nameLower.includes('backpack') && (nameLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (nameLower.includes('gas') && (nameLower.includes('outlet') || nameLower.includes('o₂') || nameLower.includes('o2'))) ||
        idLower.includes('oxygen') || 
        (idLower.includes('flowmeter') && (idLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (idLower.includes('regulator') && (idLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (idLower.includes('cylinder') && (idLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (idLower.includes('backpack') && (idLower.includes('oxygen') || descLower.includes('oxygen'))) ||
        (idLower.includes('gas') && (idLower.includes('outlet') || idLower.includes('oxygen'))) ||
        (descLower.includes('oxygen') && (descLower.includes('cylinder') || descLower.includes('regulator') || descLower.includes('flowmeter') || descLower.includes('backpack') || descLower.includes('delivery'))) ||
        (descLower.includes('o₂') || descLower.includes('o2')) ||
        (descLower.includes('gas outlet') && descLower.includes('oxygen'))) {
      product.category = 'oxygen';
    }
    // Warning Lights and Facility Accessories
    else if (nameLower.includes('led') || nameLower.includes('light') || nameLower.includes('siren') || 
        nameLower.includes('warning') || nameLower.includes('intercom') || nameLower.includes('window') || 
        nameLower.includes('ventilation') || nameLower.includes('fan') || nameLower.includes('ceiling') ||
        idLower.includes('led') || idLower.includes('light') || idLower.includes('siren') ||
        descLower.includes('led') || descLower.includes('light') || descLower.includes('siren') ||
        descLower.includes('emergency vehicle') || (descLower.includes('ambulance') && (descLower.includes('light') || descLower.includes('siren')))) {
      product.category = 'ambulance';
    }
    // Medical Equipment & Monitoring Devices
    else if (nameLower.includes('blood') || nameLower.includes('pressure') || nameLower.includes('glucose') || 
             nameLower.includes('stethoscope') || nameLower.includes('monitor') || nameLower.includes('suction') || 
             nameLower.includes('sphygmomanometer') ||
             nameLower.includes('iv hook') || nameLower.includes('sharps') || nameLower.includes('guedel') ||
             nameLower.includes('ambu bag') || nameLower.includes('nebulizer') || nameLower.includes('airway') ||
             nameLower.includes('first aid') || nameLower.includes('burn kit') || nameLower.includes('fire blanket') ||
             nameLower.includes('thermal blanket') || nameLower.includes('cpr mask') || nameLower.includes('cpr board') ||
             nameLower.includes('air splint') || nameLower.includes('rolling splint') || nameLower.includes('stretcher base') ||
             nameLower.includes('ked') || nameLower.includes('extrication') ||
             idLower.includes('suction') || idLower.includes('blood') || idLower.includes('stethoscope') || idLower.includes('sharps') ||
             idLower.includes('iv-hook') || idLower.includes('guedel') || idLower.includes('ambu') ||
             idLower.includes('first-aid') || idLower.includes('burn-kit') || idLower.includes('fire-blanket') ||
             idLower.includes('thermal-blanket') || idLower.includes('cpr-mask') || idLower.includes('cpr-board') ||
             idLower.includes('air-splint') || idLower.includes('rolling-splint') || idLower.includes('stretcher-base') ||
             idLower.includes('ked') || idLower.includes('extrication') ||
             descLower.includes('blood pressure') || descLower.includes('glucose') || descLower.includes('suction') ||
             descLower.includes('monitoring') || descLower.includes('diagnostic') ||
             descLower.includes('first aid') || descLower.includes('burn kit') || descLower.includes('fire blanket') ||
             descLower.includes('cpr board') || descLower.includes('splint') || descLower.includes('stretcher base')) {
      product.category = 'medical';
    }
    // Patient Transport & Emergency Care (default - stretchers, splints, immobilization, emergency care)
    else {
      product.category = 'transport';
    }
  }
  return product;
});

// DOM Elements
const homePage = document.getElementById('homePage');
const categoryPage = document.getElementById('categoryPage');
const productPage = document.getElementById('productPage');
const catalogEl = document.getElementById('catalog');
const productDetail = document.getElementById('productDetail');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');
const backToHome = document.getElementById('backToHome');
const backToCategory = document.getElementById('backToCategory');
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

// State Management
let currentCategory = null;
let currentProduct = null;
let filteredProducts = [...products];
let cart = [];

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
  
  // Reset page title and meta description for SEO
  document.title = 'KhanYounis | Medical Equipment UAE | Ambulance Supplies & Emergency Medical Equipment Dubai';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = 'KhanYounis offers quality medical equipment, ambulance supplies, emergency medical devices, stretchers, oxygen cylinders, first aid kits, and healthcare products in UAE. Fast delivery across Dubai, Abu Dhabi, and all Emirates.';
  }
  
  // Update URL
  if (window.history && window.history.pushState) {
    window.history.pushState({page: 'home'}, '', '/');
  }
  
  filteredProducts = products;
  renderProducts();
}

function showCategoryPage(category) {
  homePage.classList.add('hidden');
  categoryPage.classList.remove('hidden');
  productPage.classList.add('hidden');
  currentCategory = category;
  currentProduct = null;
  
  const categoryNames = {
    transport: 'Patient Transport & Emergency Care',
    medical: 'Medical Equipment & Monitoring Devices',
    ambulance: 'Warning Lights and Facility Accessories',
    oxygen: 'Oxygen System'
  };
  
  const categoryDescriptions = {
    transport: 'Stretchers, spine boards, cervical collars, chairs, and patient transport equipment',
    medical: 'Blood pressure monitors, stethoscopes, glucose monitors, suction units, first aid kits, burn kits, and diagnostic devices',
    ambulance: 'LED lights, sirens, intercoms, sliding windows, ventilation fans, and ambulance accessories',
    oxygen: 'Oxygen cylinders, regulators, flowmeters, backpacks, and complete oxygen delivery systems'
  };
  
  const categoryName = categoryNames[category] || 'Category';
  const categoryDesc = categoryDescriptions[category] || 'Browse products in this category';
  
  if (categoryTitle) categoryTitle.textContent = categoryName;
  if (categoryDescription) categoryDescription.textContent = categoryDesc;
  
  // Update page title for SEO
  document.title = `${categoryName} | KhanYounis Medical Equipment UAE`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = `${categoryName} - ${categoryDesc}. Quality medical equipment available in UAE. Fast delivery across Dubai, Abu Dhabi, and all Emirates.`;
  }
  
  // Update URL hash for better SEO and browser history
  if (window.history && window.history.pushState) {
    window.history.pushState({category, page: 'category'}, '', `#${category}`);
  }
  
  filteredProducts = products.filter(p => p.category === category);
  renderProducts();
}

function showProductPage(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  homePage.classList.add('hidden');
  categoryPage.classList.add('hidden');
  productPage.classList.remove('hidden');
  currentProduct = product;
  
  // Preserve current category for back navigation, or set it from product
  if (!currentCategory && product.category) {
    currentCategory = product.category;
  }
  
  // Update page title for SEO
  document.title = `${product.name} | KhanYounis Medical Equipment UAE`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = `${product.name} - ${product.description}. Available in UAE. Fast delivery across Dubai, Abu Dhabi, and all Emirates.`;
  }
  
  // Update URL hash for better SEO and browser history
  if (window.history && window.history.pushState) {
    window.history.pushState({productId, page: 'product', category: currentCategory || product.category}, '', `#${productId}`);
  }
  
  renderProductDetail(product);
}

function renderProductDetail(product) {
  const featureList = product.keyFeatures?.map((item) => `<li>${item}</li>`).join('') ?? '';
  const images = product.images && product.images.length > 0 ? product.images : (product.image ? [product.image] : []);
  const mainImage = images[0] || { src: '', alt: product.name };
  const hasMultipleImages = images.length > 1;
  
  // Add Product Schema for SEO
  const allImages = images.map(img => img.src ? `https://khanounis.com/${img.src}` : '').filter(Boolean);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": allImages.length > 0 ? allImages : (mainImage.src ? `https://khanounis.com/${mainImage.src}` : ""),
    "brand": {
      "@type": "Brand",
      "name": "KhanYounis"
    },
    "offers": {
      "@type": "Offer",
      "price": normalizePriceNumber(product.price),
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KhanYounis Medical Equipment"
      }
    },
    "category": product.category
  };
  
  // Remove existing product schema if any
  const existingSchema = document.querySelector('script[data-product-schema]');
  if (existingSchema) existingSchema.remove();
  
  // Add new product schema
  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.setAttribute('data-product-schema', 'true');
  schemaScript.textContent = JSON.stringify(productSchema);
  document.head.appendChild(schemaScript);
  
  // Update page title for SEO
  document.title = `${product.name} - ${formatCurrency(product.price)} | KhanYounis Medical Equipment UAE`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = `${product.name} - ${product.description.substring(0, 120)}... Available in UAE. ${formatCurrency(product.price)}. Fast delivery across Dubai, Abu Dhabi, and all Emirates.`;
  }
  
  // Build gallery HTML
  let galleryHTML = `
    <div class="gallery-main">
      <img id="gallery-main-img" src="${mainImage.src}" alt="${mainImage.alt || product.name} - Medical Equipment UAE" loading="eager" decoding="async">
      ${hasMultipleImages ? `
        <button type="button" class="gallery-nav gallery-prev" aria-label="Previous image">‹</button>
        <button type="button" class="gallery-nav gallery-next" aria-label="Next image">›</button>
      ` : ''}
    </div>
  `;
  
  // Add thumbnails if multiple images
  if (hasMultipleImages) {
    const thumbsHTML = images.map((img, index) => `
      <div class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img src="${img.src}" alt="${img.alt || product.name} - Image ${index + 1}" loading="lazy" decoding="async">
    </div>
  `).join('');
  
    galleryHTML += `<div class="gallery-thumbs">${thumbsHTML}</div>`;
  }

  productDetail.innerHTML = `
    <div class="product-detail-content">
      <div class="product-gallery">
        ${galleryHTML}
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="product-price" itemprop="price" content="${normalizePriceNumber(product.price)}">${formatCurrency(product.price)}</p>
        <p class="product-description">${product.description}</p>
        <ul class="product-features">
          ${featureList}
        </ul>
        <div class="product-actions">
          <button type="button" class="add-to-cart-btn large">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  
  // Setup gallery navigation if multiple images
  if (hasMultipleImages) {
    let currentImageIndex = 0;
    const mainImg = productDetail.querySelector('#gallery-main-img');
    const prevBtn = productDetail.querySelector('.gallery-prev');
    const nextBtn = productDetail.querySelector('.gallery-next');
    const thumbs = productDetail.querySelectorAll('.gallery-thumb');
    const galleryMain = productDetail.querySelector('.gallery-main');
    
    const updateMainImage = (index) => {
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      currentImageIndex = index;
      
      const img = images[index];
      mainImg.src = img.src;
      mainImg.alt = img.alt || product.name;
      
      // Update active thumbnail
      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
      });
      
      // Scroll active thumbnail into view on mobile
      if (thumbs[index] && window.innerWidth <= 768) {
        thumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    };
    
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateMainImage(currentImageIndex - 1);
      });
      prevBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateMainImage(currentImageIndex - 1);
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateMainImage(currentImageIndex + 1);
      });
      nextBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateMainImage(currentImageIndex + 1);
      });
    }
    
    // Thumbnail click handlers
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateMainImage(index);
      });
      thumb.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateMainImage(index);
      });
    });
    
    // Touch swipe support for mobile gallery
    if (galleryMain) {
      let touchStartX = 0;
      let touchEndX = 0;
      
      galleryMain.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      galleryMain.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });
      
      const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            // Swipe left - next image
            updateMainImage(currentImageIndex + 1);
          } else {
            // Swipe right - previous image
            updateMainImage(currentImageIndex - 1);
          }
        }
      };
    }
    
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (productDetail.contains(document.activeElement) || (galleryMain && galleryMain.contains(document.activeElement))) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          updateMainImage(currentImageIndex - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          updateMainImage(currentImageIndex + 1);
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup on page change
    const cleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    
    // Store cleanup function for later use if needed
    if (galleryMain) {
      galleryMain._cleanup = cleanup;
    }
  }
  
  const addToCartBtn = productDetail.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
    addToCart(product, 1);
  });
  }
}

const buildCard = (product) => {
  const card = document.createElement('article');
  card.className = 'card';
  
  const featureList = product.keyFeatures
    ?.map((item) => `<li>${item}</li>`)
    .join('') ?? '';
  
  const mainImage = product.images?.[0] || product.image || { src: '', alt: product.name };

  card.innerHTML = `
    <div class="card-inner">
      <figure>
        <img src="${mainImage.src}" alt="${mainImage.alt || product.name}" loading="lazy" decoding="async" style="cursor: pointer;">
      </figure>
      <div class="details">
        <h3 style="cursor: pointer;">${product.name}</h3>
        <p class="description">${product.description}</p>
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

  card.querySelector('button').addEventListener('click', () => {
    addToCart(product, 1);
  });

  card.querySelector('img').addEventListener('click', () => {
    // Preserve current category when navigating to product
    if (currentCategory) {
      // Category is already set
    } else if (product.category) {
      currentCategory = product.category;
    }
    showProductPage(product.id);
  });
  
  card.querySelector('h3').addEventListener('click', () => {
    // Preserve current category when navigating to product
    if (currentCategory) {
      // Category is already set
    } else if (product.category) {
      currentCategory = product.category;
    }
    showProductPage(product.id);
  });

  return card;
};

const renderProducts = () => {
  catalogEl.innerHTML = '';
  if (!filteredProducts.length) {
    catalogEl.innerHTML = '<p>No products match your search.</p>';
    return;
  }
  filteredProducts.forEach((product) => catalogEl.appendChild(buildCard(product)));
};

// Update cart quantity function
function updateCartQuantity(itemIndex, newQuantity) {
  if (itemIndex < 0 || itemIndex >= cart.length) return;
  
  // Enforce minimum quantity of 1
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  
  // Optional: enforce maximum quantity (uncomment and set max if needed)
  // const maxQuantity = 99;
  // if (newQuantity > maxQuantity) {
  //   newQuantity = maxQuantity;
  // }
  
  cart[itemIndex].quantity = newQuantity;
  renderCart();
  
  // Show feedback for quantity changes
  const item = cart[itemIndex];
  showToast(`${item.name} quantity updated to ${newQuantity}.`);
}

const renderCart = () => {
  if (!cartList) return;
  cartList.innerHTML = '';
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
  
  if (!cart.length) {
    cartList.innerHTML = '<li class="cart-item">Cart is empty.</li>';
    if (cartTotal) cartTotal.innerHTML = '<span>Total:</span><span>AED 0</span>';
    return;
  }

  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    const itemSubtotal = normalizePriceNumber(item.price) * item.quantity;
    const isMinQuantity = item.quantity <= 1;
    
    li.innerHTML = `
      <header>
        <span>${item.name}</span>
        <span>${formatCurrency(itemSubtotal)}</span>
      </header>
      <p>${item.description}</p>
      <div class="cart-item-controls">
        <div class="cart-qty-controls" role="group" aria-label="Quantity controls">
          <button 
            type="button" 
            class="cart-qty-btn cart-qty-decrease" 
            aria-label="Decrease quantity"
            ${isMinQuantity ? 'disabled' : ''}
            data-item-index="${idx}">
            −
          </button>
          <span class="cart-qty-value" aria-live="polite">${item.quantity}</span>
          <button 
            type="button" 
            class="cart-qty-btn cart-qty-increase" 
            aria-label="Increase quantity"
            data-item-index="${idx}">
            +
          </button>
        </div>
        <button type="button" class="cart-remove-btn" aria-label="Remove ${item.name} from cart">Remove</button>
      </div>
    `;
    
    // Quantity control event listeners
    const decreaseBtn = li.querySelector('.cart-qty-decrease');
    const increaseBtn = li.querySelector('.cart-qty-increase');
    
    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', () => {
      if (item.quantity > 1) {
          updateCartQuantity(idx, item.quantity - 1);
        }
      });
    }
    
    if (increaseBtn) {
      increaseBtn.addEventListener('click', () => {
        updateCartQuantity(idx, item.quantity + 1);
      });
    }
    
    // Remove button
    const removeBtn = li.querySelector('.cart-remove-btn');
    if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      cart.splice(idx, 1);
      renderCart();
        showToast('Item removed from cart.');
    });
    }

    cartList.appendChild(li);
  });

  const total = cart.reduce(
    (sum, item) => sum + normalizePriceNumber(item.price) * item.quantity,
    0
  );
  if (cartTotal) cartTotal.innerHTML = `<span>Total:</span><span>${formatCurrency(total)}</span>`;
};

const addToCart = (product, qty) => {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });
  renderCart();
  showToast(`${product.name} added to cart.`);
};

// Category card click handlers
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    showCategoryPage(category);
  });
});

// Back button handlers - Smart navigation based on current page
function handleBackToHome() {
  // Navigate back to home page
  if (window.history && window.history.pushState) {
    window.history.pushState({page: 'home'}, '', '/');
  }
  showHomePage();
}

function handleBackToCategory() {
  // Navigate back to the category page
  if (currentCategory) {
    if (window.history && window.history.pushState) {
      window.history.pushState({category: currentCategory, page: 'category'}, '', `#${currentCategory}`);
    }
    showCategoryPage(currentCategory);
  } else {
    // Fallback to home if no category is set
    handleBackToHome();
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
  // When user uses browser back/forward buttons, restore the appropriate view
  const hash = window.location.hash.replace('#', '');
  
  if (!hash || hash === '') {
    showHomePage();
  } else {
    // Check if it's a valid category
    const validCategories = ['transport', 'medical', 'ambulance', 'oxygen'];
    if (validCategories.includes(hash)) {
      showCategoryPage(hash);
    } else {
      // Try to find product by ID
      const product = products.find(p => p.id === hash);
      if (product) {
        showProductPage(product.id);
      } else {
        showHomePage();
      }
    }
  }
});

// Back button from category page - goes to home
backToHome?.addEventListener('click', (e) => {
  e.preventDefault();
  handleBackToHome();
});

// Back button from product page - goes to category
backToCategory?.addEventListener('click', (e) => {
  e.preventDefault();
  handleBackToCategory();
});

// Search functionality - search across both categories
searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase().trim();
  if (term) {
    // Search across all products in both categories
    filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.keyFeatures?.some((k) => k.toLowerCase().includes(term))
    );
    
    // Always show search results from both categories
    const wasOnHomePage = !homePage.classList.contains('hidden');
    
    // Show search results page
    homePage.classList.add('hidden');
    categoryPage.classList.remove('hidden');
    productPage.classList.add('hidden');
    currentCategory = null; // Clear category filter to show results from both categories
    if (categoryTitle) categoryTitle.textContent = 'Search Results';
    if (categoryDescription) categoryDescription.textContent = `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} matching "${searchInput.value}"`;
      renderProducts();
    } else {
    // Clear search - return to appropriate page
    if (currentCategory) {
      showCategoryPage(currentCategory);
    } else {
      showHomePage();
    }
  }
});

checkoutForm.addEventListener('submit', (event) => {
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
        `${item.name} (Qty ${item.quantity})\nFeatures: ${item.keyFeatures.join('; ')}`
    )
    .join('\n\n');
  
  const total = cart.reduce(
    (sum, item) => sum + normalizePriceNumber(item.price) * item.quantity,
    0
  );

  const templateParams = {
    customer_name: customerName.value.trim(),
    phone_number: customerPhone.value.trim(),
    notes: customerNotes.value.trim(),
    order_summary: orderLines,
    order_total: formatCurrency(total)
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

contactBtn.addEventListener('click', () => {
  window.location.href = 'mailto:Kygtrading1@gmail.com?subject=MedEqup%20Inquiry';
});

yearSpan.textContent = new Date().getFullYear();

// Cart toggle functionality
// Cart overlay for mobile
let cartOverlay = null;

function createCartOverlay() {
  if (window.innerWidth <= 980) {
    if (!cartOverlay) {
      cartOverlay = document.createElement('div');
      cartOverlay.className = 'cart-overlay';
      cartOverlay.addEventListener('click', closeCart);
      document.body.appendChild(cartOverlay);
    }
  }
}

function openCart() {
  if (!cartPanel) return;
  
  // On mobile, ensure cart is visible
  if (window.innerWidth <= 980) {
    cartPanel.style.display = 'flex';
    cartPanel.style.visibility = 'visible';
    cartPanel.style.opacity = '1';
    // Force reflow
    cartPanel.offsetHeight;
  }
  
  cartPanel.classList.remove('hidden');
  if (mainLayout) mainLayout.classList.add('cart-open');
  
  createCartOverlay();
  if (cartOverlay) {
    cartOverlay.classList.add('active');
  }
  
  // Prevent body scroll when cart is open on mobile
  if (window.innerWidth <= 980) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }
}

function closeCart() {
  if (!cartPanel) return;
  
  cartPanel.classList.add('hidden');
  if (mainLayout) mainLayout.classList.remove('cart-open');
  
  if (cartOverlay) {
    cartOverlay.classList.remove('active');
  }
  
  // Restore body scroll
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

cartToggleBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

// Close cart on window resize if needed
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    if (cartOverlay) {
      cartOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }
});

// Performance: Debounce function for scroll/resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Background Video Carousel - Optimized Implementation
const BackgroundVideoCarousel = {
  // Video sources array
  videoSources: [
    'videos/266539_small.mp4',
    'videos/6015-187893769_small.mp4',
    'videos/63838-508272954_small.mp4',
    'videos/7714379-uhd_3840_2160_30fps.mp4',
    'videos/hero-video.mp4',
  ],
  
  // Configuration
  config: {
    rotationDuration: 8000, // 8 seconds per video
    transitionDuration: 1500, // 1.5 seconds fade transition
    fallbackImage: 'images/logo.png'
  },
  
  // State
  currentIndex: 0,
  videos: [],
  rotationInterval: null,
  container: null,
  fallbackImage: null,
  autoplayBlocked: false,
  
  /**
   * Initialize the video carousel
   */
  init() {
    this.container = document.querySelector('.hero-video-container');
    this.fallbackImage = document.querySelector('.hero-fallback');
    
    if (!this.container || this.videoSources.length === 0) {
      this.showFallback();
      return;
    }
    
    // Create and setup first video
    this.createVideo(0);
    this.preloadNextVideo(1);
    
    // Try to play first video
    this.playCurrentVideo().catch(() => {
      // Autoplay blocked - show fallback
      this.handleAutoplayBlocked();
    });
    
    // Start rotation
    this.startRotation();
    
    // Handle visibility changes
    this.setupVisibilityHandlers();
  },
  
  /**
   * Create a video element
   */
  createVideo(index) {
    if (this.videos[index]) {
      return this.videos[index];
    }
    
    const video = document.createElement('video');
    video.className = 'hero-video';
    video.muted = true;
    video.autoplay = false; // We'll control playback manually
    video.loop = false; // Loop handled by cycling videos
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('x5-playsinline', ''); // For Android browsers
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'false');
    video.setAttribute('preload', index === 0 ? 'auto' : 'none'); // Only preload first
    // Mobile optimization attributes
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('muted', 'true');
    // Ensure proper object-fit behavior
    video.style.objectFit = 'cover';
    video.style.objectPosition = 'center center';
    
    const source = document.createElement('source');
    source.src = this.videoSources[index];
    source.type = 'video/mp4';
    video.appendChild(source);
    
    // Error handling
    video.addEventListener('error', () => {
      console.warn(`Video ${index} failed to load:`, this.videoSources[index]);
      if (index === this.currentIndex) {
        this.nextVideo();
      }
    });
    
    // When video ends, cycle to next (backup in case rotation interval fails)
    video.addEventListener('ended', () => {
      if (index === this.currentIndex && !this.autoplayBlocked) {
        this.nextVideo();
      }
    });
    
    // Ensure video is ready before playing
    video.addEventListener('canplay', () => {
      if (index === this.currentIndex && video.classList.contains('active')) {
        video.play().catch(() => {});
      }
    }, { once: true });
    
    this.container.appendChild(video);
    this.videos[index] = video;
    
    return video;
  },
  
  /**
   * Preload the next video (lazy loading)
   */
  preloadNextVideo(nextIndex) {
    if (nextIndex >= this.videoSources.length) {
      nextIndex = 0; // Loop back to first
    }
    
    // Only preload if video doesn't exist yet
    if (!this.videos[nextIndex]) {
      const video = this.createVideo(nextIndex);
      video.setAttribute('preload', 'metadata'); // Light preload
      video.load();
    }
  },
  
  /**
   * Play the current video
   */
  async playCurrentVideo() {
    const video = this.videos[this.currentIndex];
    if (!video) return;
    
    // Ensure video is ready
    if (video.readyState < 2) {
      video.load();
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Video load timeout')), 5000);
        video.addEventListener('canplay', () => {
          clearTimeout(timeout);
          resolve();
        }, { once: true });
        video.addEventListener('error', () => {
          clearTimeout(timeout);
          reject(new Error('Video load error'));
        }, { once: true });
      }).catch(() => {
        // If video fails to load, skip to next
        if (this.currentIndex === this.videos.length - 1) {
          this.currentIndex = -1; // Will become 0 after increment
        }
        this.nextVideo();
        return;
      });
    }
    
    // Reset video to start
    video.currentTime = 0;
    video.classList.add('active');
    
    try {
      await video.play();
    } catch (error) {
      // Autoplay blocked
      throw error;
    }
  },
  
  /**
   * Switch to next video with smooth transition
   */
  nextVideo() {
    const currentVideo = this.videos[this.currentIndex];
    if (currentVideo) {
      currentVideo.classList.remove('active');
      currentVideo.pause();
      currentVideo.currentTime = 0; // Reset to start
    }
    
    // Move to next video
    this.currentIndex = (this.currentIndex + 1) % this.videoSources.length;
    
    // Preload the video after next
    const nextNextIndex = (this.currentIndex + 1) % this.videoSources.length;
    this.preloadNextVideo(nextNextIndex);
    
    // Play new video
    this.playCurrentVideo().catch(() => {
      // If play fails, try next video
      if (!this.autoplayBlocked) {
        setTimeout(() => this.nextVideo(), 500);
      }
    });
  },
  
  /**
   * Start automatic rotation
   */
  startRotation() {
    this.stopRotation();
    
    this.rotationInterval = setInterval(() => {
      this.nextVideo();
    }, this.config.rotationDuration);
  },
  
  /**
   * Stop automatic rotation
   */
  stopRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
      this.rotationInterval = null;
    }
  },
  
  /**
   * Handle autoplay blocked scenario
   */
  handleAutoplayBlocked() {
    this.autoplayBlocked = true;
    this.stopRotation();
    this.showFallback();
    
    // Try to enable videos on user interaction
    const enableVideos = () => {
      this.autoplayBlocked = false;
      this.hideFallback();
      this.playCurrentVideo().then(() => {
        this.startRotation();
      });
      document.removeEventListener('click', enableVideos);
      document.removeEventListener('touchstart', enableVideos);
    };
    
    document.addEventListener('click', enableVideos, { once: true });
    document.addEventListener('touchstart', enableVideos, { once: true });
  },
  
  /**
   * Show fallback image
   */
  showFallback() {
    if (this.fallbackImage) {
      this.fallbackImage.style.display = 'block';
      // Use requestAnimationFrame to ensure display change is applied before class
      requestAnimationFrame(() => {
        this.fallbackImage.classList.add('show');
      });
    }
    // Hide video container
    if (this.container) {
      this.container.style.opacity = '0';
    }
  },
  
  /**
   * Hide fallback image
   */
  hideFallback() {
    if (this.fallbackImage) {
      this.fallbackImage.classList.remove('show');
      // Hide after transition
      setTimeout(() => {
        if (!this.fallbackImage.classList.contains('show')) {
          this.fallbackImage.style.display = 'none';
        }
      }, 1000);
    }
    if (this.container) {
      this.container.style.opacity = '1';
    }
  },
  
  /**
   * Setup visibility change handlers for performance
   */
  setupVisibilityHandlers() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopRotation();
        this.videos.forEach(video => {
          if (!video.classList.contains('active')) {
            video.pause();
          }
        });
      } else {
        if (!this.autoplayBlocked) {
          this.startRotation();
          this.playCurrentVideo().catch(() => {});
        }
      }
    });
    
    // Pause videos when page is blurred
    window.addEventListener('blur', () => {
      this.stopRotation();
    });
    
    window.addEventListener('focus', () => {
      if (!this.autoplayBlocked && !document.hidden) {
        this.startRotation();
      }
    });
  },
  
  /**
   * Cleanup method
   */
  destroy() {
    this.stopRotation();
    this.videos.forEach(video => {
      video.pause();
      video.remove();
    });
    this.videos = [];
  }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  if (window.emailjs) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } else {
    console.warn('EmailJS SDK failed to load.');
  }
  
  // Initialize video carousel
  BackgroundVideoCarousel.init();
  
  // Handle initial page load with hash (e.g., direct link or refresh)
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    // Check if it's a valid category
    const validCategories = ['transport', 'medical', 'ambulance', 'oxygen'];
    if (validCategories.includes(hash)) {
      showCategoryPage(hash);
    } else {
      // Try to find product by ID
      const product = products.find(p => p.id === hash);
      if (product) {
        showProductPage(product.id);
      } else {
        showHomePage();
      }
    }
  } else {
    // Show home page initially
    showHomePage();
  }
});

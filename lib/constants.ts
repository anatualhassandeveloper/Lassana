export const COMPANY = {
  name: "Lassana Food Machinery",
  shortName: "Lassana",
  tagline: "Quality Food Machinery for Your Business",
  description:
    "Lassana Food Machinery is a trusted supplier of commercial food equipment in Accra, Ghana, providing reliable and efficient machines for restaurants, bakeries, cafés, and food businesses.",
  location: {
    city: "ACCRA",
    area: "Post Office Area",
    country: "Ghana",
    full: "Post Office Area, Accra, Ghana",
  },
  phone: {
    primary: "0509055598",
    secondary: "0257515277",
  },
  email: "alhassanhamza270@gmail.com",
  whatsapp: "233509055598",
  hours: {
    weekdays: "Mon – Fri: 8:00 AM – 6:00 PM",
    saturday: "Sat: 9:00 AM – 4:00 PM",
    sunday: "Sun: Closed",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Post+Office+Area,+Accra,+Ghana",
  social: {
    whatsapp: "https://wa.me/233509055598",
    tiktok: "https://www.tiktok.com/@monterokitchen1",
  },
} as const;

export const STATS = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Machines Sold", value: 270, suffix: "+" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" },
] as const;

export const PRODUCTS = [
  {
    id: "dough-mixer",
    title: "Dough Mixer",
    description:
      "Heavy-duty Gredelli spiral mixers for bakeries and commercial kitchens. Digital controls, stainless steel bowl, consistent results every batch.",
    image: "/products/dough-mixer.png",
  },
  {
    id: "planetary-mixer-20l",
    title: "Planetary Food Mixer — 20 Liters",
    description:
      "20L planetary mixer with fully stainless steel bowl. 1.1kW, 220V. Includes whisk, beater, and dough hook. High efficiency, low noise, and easy to operate.",
    image: "/products/planetary-mixer-20l.png",
  },
  {
    id: "planetary-mixer-30l",
    title: "Planetary Cake Mixer — 30 Liters (BRESCIA)",
    description:
      "30L BRESCIA planetary mixer with fully stainless steel bowl. 1.5kW, 220V. Includes whisk, beater, and dough hook. Durable and reliable for bakeries and restaurants.",
    image: "/products/planetary-mixer-30l.png",
  },
  {
    id: "popcorn-machine",
    title: "Popcorn Machine",
    description:
      "Commercial countertop popcorn machines with heated display cabinet for cinemas, events, concessions, and retail food operations.",
    image: "/products/popcorn-machine.png",
  },
  {
    id: "popcorn-machine-double",
    title: "Double Chamber Popcorn Machine",
    description:
      "Commercial dual-chamber popcorn machine with two kettles, heated display cabinets, and separate warmer controls. High output for cinemas, events, and concession stands.",
    image: "/products/popcorn-machine-double.png",
  },
  {
    id: "shawarma-machine",
    title: "Shawarma Machine",
    description:
      "Professional stainless steel vertical broilers with infrared heat zones for restaurants, fast-food outlets, and shawarma stands.",
    image: "/products/shawarma-machine.png",
  },
  {
    id: "pastry-warmer",
    title: "Pastry Warmer",
    description:
      "Mario warming showcase display cabinets with curved glass front and chrome racks — keeps pastries fresh and visible for cafés and bakeries.",
    image: "/products/pastry-warmer.png",
  },
  {
    id: "food-display-warmer",
    title: "Hot Food Display Warmer",
    description:
      "3-tier commercial food display warmer with sliding glass doors, chrome wire shelves, and interior lighting. Keeps burgers, pastries, and hot food fresh and visible.",
    image: "/products/food-display-warmer.png",
  },
  {
    id: "panini-press",
    title: "Panini & Shawarma Toaster Press",
    description:
      "Commercial stainless steel double grill press with ribbed cast iron plates and dual temperature controls — ideal for panini, shawarma wraps, sandwiches, and grilled snacks.",
    image: "/products/panini-press.png",
  },
  {
    id: "gas-deep-fryer",
    title: "Gas Deep Fryer — 2 Tank 28 Liters",
    description:
      "Commercial 2-tank gas fryer with 28L total capacity. Stainless steel body, fast heating burners, removable baskets, and drainage taps. Ideal for restaurants, fast food, and catering.",
    image: "/products/gas-deep-fryer.png",
  },
  {
    id: "juice-dispenser-8l",
    title: "Manual Juice Dispenser — 8 Liters",
    description:
      "Single-tank manual juice dispenser with 8L capacity. Food-grade stainless steel and PC container, easy dispensing tap, removable drip tray. Perfect for hotels, cafeterias, and events.",
    image: "/products/juice-dispenser-8l.png",
  },
  {
    id: "juice-dispenser-16l",
    title: "Manual Juice Dispenser — 2 in 1 (16 Liters)",
    description:
      "2-tank manual juice dispenser with 8L per tank, 16L total. Stainless steel and durable PC tanks, smooth manual taps, removable drip trays. Ideal for restaurants and catering.",
    image: "/products/juice-dispenser-16l.png",
  },
  {
    id: "juice-dispenser-24l",
    title: "Manual Juice Dispenser — 3 in 1 (24 Liters)",
    description:
      "3-tank manual juice dispenser with 8L per tank, 24L total capacity. Food-grade materials, easy dispensing, removable drip trays, sturdy stable base. Built for high-volume service.",
    image: "/products/juice-dispenser-24l.png",
  },
  {
    id: "bain-marie",
    title: "Food Bain Marie with Shelves",
    description:
      "Commercial stainless steel bain marie with four food wells, glass display shelf, temperature controls, and storage cabinet — ideal for buffets, cafeterias, and food service.",
    image: "/products/bain-marie.png",
  },
  {
    id: "bone-saw-machine",
    title: "Bone Saw Machine / Meat Cutter Model J210",
    description:
      "Commercial bone saw and meat cutter with stainless steel work table, adjustable blade guide, and heavy-duty motor — built for butcheries, meat shops, and food processing.",
    image: "/products/bone-saw-machine.png",
  },
  {
    id: "charcoal-griller",
    title: "Charcoal Griller with Rotisserie",
    description:
      "Modern barrel-style charcoal grill with rotisserie spit, stainless steel grates, warming rack, side wheels, and storage shelf. Perfect for restaurants, events, and outdoor catering.",
    image: "/products/charcoal-griller.png",
  },
  {
    id: "gas-griddle-fryer",
    title: "3 in 1 Gas Griddle with Fryer",
    description:
      "High-performance griddle and fryer combo with 3 independent gas burners, large flat griddle surface, built-in fryer basket, grease drawer, and stainless steel body — ideal for restaurants, fast food, and street food businesses.",
    image: "/products/gas-griddle-fryer.png",
  },
  {
    id: "gas-baking-oven",
    title: "Gas Baking Oven — 2 Deck 4 Trays",
    description:
      "Commercial gas baking oven with 2 decks and 4 trays. 0.1kW, gas powered, size 1330×890×1430mm. Powerful, durable, and efficient for bakeries, restaurants, and food businesses.",
    image: "/products/gas-baking-oven.png",
  },
  {
    id: "bread-moulder",
    title: "Bread Moulder",
    description:
      "Commercial tabletop bread moulder with dough infeed chute, rolling mechanism, and adjustable outfeed guides. Durable construction, smooth operation — ideal for bakeries and bread production.",
    image: "/products/bread-moulder.png",
  },
  {
    id: "waffle-maker",
    title: "Single Electric Waffle Maker",
    description:
      "Commercial single-plate electric waffle maker with stainless steel body, non-stick plates, adjustable temperature control, and timer. Fast heating — ideal for cafés, restaurants, and food businesses.",
    image: "/products/waffle-maker.png",
  },
  {
    id: "soft-ice-cream-machine",
    title: "Soft Ice Cream Machine — 3 Flavor",
    description:
      "Commercial soft-serve ice cream machine with 3-flavor output. 1800W, 220V, 16–22L/hr capacity, size 71.5×48×72cm. White and gold edition — perfect for cafés, ice cream shops, and restaurants.",
    image: "/products/soft-ice-cream-machine.png",
  },
  {
    id: "gas-rice-steamer",
    title: "Gas Rice Steamer",
    description:
      "Commercial gas rice steamer with 10 trays (4kg per tray), gas pressure 2.0 KPA, and even steam distribution. Stainless steel body, fast heating — ideal for restaurants, hotels, and catering services.",
    image: "/products/gas-rice-steamer.png",
  },
  {
    id: "sugarcane-juicer",
    title: "Sugarcane Juicer",
    description:
      "Commercial stainless steel sugarcane juicers in tabletop and mobile floor-standing models. High extraction efficiency, easy to clean, juice tap and drip tray — perfect for juice bars, cafés, and street vendors.",
    image: "/products/sugarcane-juicer.png",
  },
  {
    id: "keyo-charcoal-grill",
    title: "KEYO Charcoal Grill",
    description:
      "Professional trolley-style charcoal grill with built-in thermometer, adjustable charcoal height crank, front-access charcoal door, foldable side shelves, tool hooks, and bottom storage shelf. Wheels for easy mobility — ideal for outdoor catering and events.",
    image: "/products/keyo-charcoal-grill.png",
  },
  {
    id: "heated-food-display-warmer",
    title: "Heated Food Display Warmer",
    description:
      "Countertop heated display warmer with curved glass front, 2 shelves + stainless steel base tray, built-in LED light, and adjustable temperature (30–90°C). Size 460×360×660mm — ideal for restaurants, cafés, bakeries, and food courts.",
    image: "/products/heated-food-display-warmer.png",
  },
  {
    id: "shawarma-machine-2-burner",
    title: "Shawarma Machine — 2 Burner, 2 Rod",
    description:
      "Gas-powered shawarma machine with 2 independent ceramic burners and 2 vertical stainless steel rods. Stainless steel drip trays, independent heat controls, size 600×480×700mm, 28kg — ideal for shawarma shops, restaurants, and food trucks.",
    image: "/products/shawarma-machine-2-burner.png",
  },
  {
    id: "stainless-steel-table",
    title: "Stainless Steel Table — 1500mm",
    description:
      "Commercial stainless steel 304 work table with backsplash and bottom storage shelf. Heavy-duty, rust-resistant, high load capacity. Size 1500×600×900mm — ideal for restaurants, kitchens, catering, bakeries, and food processing.",
    image: "/products/stainless-steel-table.png",
  },
  {
    id: "stainless-steel-table-1800",
    title: "Stainless Steel Table — 1800mm",
    description:
      "Commercial stainless steel 304 work table with backsplash and bottom storage shelf. Heavy-duty, rust-resistant, high load capacity. Size 1800×600×900mm — ideal for restaurants, kitchens, catering, bakeries, and food processing.",
    image: "/products/stainless-steel-table-1800.png",
  },
  {
    id: "cotton-candy-machine",
    title: "Cotton Candy Machine",
    description:
      "Commercial cotton candy machine with 10kg capacity, 1kW power, 110–220V. Fast heating, easy to clean, temperature control. Size 520×520×506mm — perfect for parties, events, carnivals, schools, and businesses.",
    image: "/products/cotton-candy-machine.png",
  },
  {
    id: "juice-dispenser-cold-3in1",
    title: "3 in 1 Juice Dispenser — Cold Only",
    description:
      "Refrigerated cold juice dispenser with 3 containers (18L each), push tap dispensing, 5–10°C cooling. 300W, 220–240V, stainless steel and PC construction. Size 650×400×680mm, 32kg — ideal for restaurants, hotels, cafés, and juice bars.",
    image: "/products/juice-dispenser-cold-3in1.png",
  },
  {
    id: "noodle-making-machine",
    title: "Noodle Making Machine",
    description:
      "Commercial tabletop noodle making machine with grooved cutting roller, brush roller, and adjustable red tension knobs. Stainless steel construction, electric motor — ideal for noodle shops, restaurants, and food processing.",
    image: "/products/noodle-making-machine.png",
  },
  {
    id: "electric-food-dehydrator-20-trays",
    title: "Electric Food Dehydrator — 20 Trays",
    description:
      "Commercial electric food dehydrator with 20 trays, 2 fans, 1500W, 70L capacity. Stainless steel 304, tray spacing 3cm, temperature 30–90°C. Size 405×460×700mm — ideal for fruits, vegetables, herbs, meats, and food processing.",
    image: "/products/electric-food-dehydrator-20-trays.png",
  },
  {
    id: "foodsense-bain-marie-3-pan",
    title: "Foodsense Electric Bain Marie — 3 Pan",
    description:
      "Commercial Foodsense 3-pan electric bain marie with stainless steel construction, individual lids, and adjustable temperature control with power and heating indicators — ideal for buffets, cafeterias, catering, and food service.",
    image: "/products/foodsense-bain-marie-3-pan.png",
  },
  {
    id: "electric-bain-marie-4-pot",
    title: "Electric Bain Marie — 4 Pot",
    description:
      "Commercial 4-pot electric bain marie with stainless steel construction, individual lids, adjustable thermostat (30–110°C), power and heat indicators, and front drain tap — ideal for buffets, cafeterias, catering, and food service.",
    image: "/products/electric-bain-marie-4-pot.png",
  },
  {
    id: "commercial-juice-extractor",
    title: "Commercial Juice Extractor",
    description:
      "Heavy-duty stainless steel centrifugal juice extractor with pulp discharge spout, secure top lid, and easy-clean design. High extraction efficiency — ideal for juice bars, cafés, restaurants, and health food businesses.",
    image: "/products/commercial-juice-extractor.png",
  },
  {
    id: "commercial-meat-grinder",
    title: "Commercial Meat Grinder",
    description:
      "Heavy-duty stainless steel electric meat grinder with large top feeding tray, meat pusher, interchangeable grinding plates, and locking hand wheel. Powerful motor — ideal for butcheries, meat shops, restaurants, and food processing.",
    image: "/products/commercial-meat-grinder.png",
  },
  {
    id: "commercial-gas-range-6-burner",
    title: "Commercial Gas Range — 6 Burner, Double Oven",
    description:
      "Professional stainless steel gas range with 6 burners, cast iron grates, and double oven compartments. Independent burner and oven controls — ideal for restaurants, hotels, catering kitchens, and commercial food service.",
    image: "/products/commercial-gas-range-6-burner.png",
  },
  {
    id: "commercial-gas-range-4-burner",
    title: "Commercial Gas Range — 4 Burner with Oven",
    description:
      "Heavy-duty stainless steel gas range with 4 burners, cast iron grates, integrated oven, electric ignition, and heat-resistant control knobs — ideal for restaurants, cafeterias, catering, and commercial kitchens.",
    image: "/products/commercial-gas-range-4-burner.png",
  },
  {
    id: "industrial-gas-stove-single-burner",
    title: "Industrial Gas Stove — Single Burner",
    description:
      "Heavy-duty stainless steel single-burner gas stove with high-pressure cast iron burner, triple-valve flame control, and sturdy legs. Size 60×60×40 cm — ideal for restaurants, catering, food processing, and high-heat commercial cooking.",
    image: "/products/industrial-gas-stove-single-burner.png",
  },
  {
    id: "industrial-gas-stove-double-burner",
    title: "Industrial Gas Stove — Double Burner",
    description:
      "Heavy-duty stainless steel double-burner gas stove with two high-pressure cast iron burners and six independent orange-valve controls for precise flame adjustment. Size 120×60×40 cm — ideal for restaurants, catering, and high-volume commercial cooking.",
    image: "/products/industrial-gas-stove-double-burner.png",
  },
  {
    id: "commercial-double-bowl-sink",
    title: "Commercial Double Bowl Sink — Stainless Steel",
    description:
      "Freestanding stainless steel double-bowl sink with integrated backsplash, dual gooseneck faucets, deep basins, and sturdy tubular legs with adjustable feet — ideal for restaurants, food processing, catering, and commercial kitchens.",
    image: "/products/commercial-double-bowl-sink.png",
  },
] as const;

export const FEATURES = [
  {
    id: "quality",
    title: "Quality Equipment",
    description:
      "Commercial-grade machinery sourced and tested to meet the demands of professional food operations.",
    icon: "ShieldCheck" as const,
  },
  {
    id: "affordable",
    title: "Affordable Prices",
    description:
      "Competitive pricing without compromising on durability, performance, or after-sales support.",
    icon: "BadgeDollarSign" as const,
  },
  {
    id: "support",
    title: "Reliable Support",
    description:
      "Expert guidance from selection through installation, maintenance, and ongoing technical assistance.",
    icon: "Headphones" as const,
  },
  {
    id: "delivery",
    title: "Fast Delivery",
    description:
      "Efficient logistics across Accra and Ghana to get your equipment operational without delay.",
    icon: "Truck" as const,
  },
] as const;

export const GALLERY_IMAGES = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    alt: "Commercial kitchen equipment installation",
    span: "col-span-2 row-span-2",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    alt: "Industrial bakery machinery",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1600607686527-6fb886054dcb?w=800&q=80",
    alt: "Professional food preparation equipment",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    alt: "Commercial stainless steel kitchen",
    span: "col-span-1 row-span-2",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    alt: "Restaurant kitchen machinery",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Commercial food service setup",
    span: "col-span-2 row-span-1",
  },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

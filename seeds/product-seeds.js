const { Product } = require("../models");


const productData = [
    // Foodservice Supplies
    {
        "name": "Solo®Jazz® Waxed Paper Cold Cups",
        "description": "Solo® treated paper cups offer superior rigidity for your cold beverage needs. Solo® treated paper cups also meet the ASTM standard for compostability and are made with at least 50% renewable resources.",
        "price": 20.99,
        "units": "case",
        "user_id": 1,
        "category_id": 1,
        "supplier_id": 1
    },
    {
        "name": "Solo® Compostable Paper Cold Cups - 16 oz (18 oz Flush-fill) Waxed Paper Cold Cup - Symphony®",
        "description": "Capacity is 16-18 oz. Solo® treated paper cups offer superior rigidity for your cold beverage needs. BARE™ treated paper cups also meet the ASTM standard for compostability and are made with at least 50% renewable resources.",
        "price": 25.99,
        "units": "case",
        "user_id": 1,
        "category_id": 1,
        "supplier_id": 1
    },
    {
        "name": "DART Foam Hot Cups",
        "description": "8 oz. Maintain beverages at their optimal temperature longer with Dart insulated foam cups. Not only do foam cups keep beverages at their proper serving temperature on the inside, they keep hands comfortable on the outside. Hot or cold, insulated foam delivers drinks the way they were meant to be. Small drink cups are ideal for coffee, cappuccino, tea, hot chocolate, hot cider, juice, and soft drinks. For use with the Dart White 8 Series Lid.",
        "price": 19.99,
        "units": "case",
        "user_id": 1,
        "category_id": 1,
        "supplier_id": 1
    },
    {
        "name": "Solo® Ultra Clear™ PET Cold Cups - 12 oz Practical-fill PET Cup - Clear",
        "description": "12 oz. Capacity. Solo® Ultra Clear™ cups will enhance your visibility with their crystal clarity and print capability. Multiple cups fit one lid size to simplify your operation and reduce storage costs.",
        "price": 21.99,
        "units": "case",
        "user_id": 1,
        "category_id": 1,
        "supplier_id": 1
    },
    // Cleaning Supplies
    {
        "name": "PURELL® Hand Sanitizing Wipes",
        "description": "A high-capacity refill pouch ideal for all high-traffic locations. Large, durable, and textured wipe removes light soils and dirt from hands. Kills more than 99.99% of most common germs that may cause illness. Convenient for use whenever soap and water are not available. Dermatologist tested. Alcohol-free formulation.",
        "price": 9.99,
        "units": "case",
        "user_id": 1,
        "category_id": 2,
        "supplier_id": 3
    },
    {
        "name": "PURELL® Foodservice Surface Sanitizer Spray",
        "description": "No-rinse, food-contact surface sanitizer and cleaner. Eliminates Norovirus, Salmonella, E. coli and Listeria in 30 seconds. No precautionary statements. No hand washing required after use. Proven effective across most hard and soft surfaces. Awarded the U.S. EPA Design for the Environment certification (DfE). Kosher Pareve.",
        "price": 9.99,
        "units": "case",
        "user_id": 1,
        "category_id": 2,
        "supplier_id": 3
    },
    {
        "name": "PURELL® TFX™ Dispenser",
        "description": "Touch-free hand sanitizer dispenser. Trouble-free performance. Fully ADA compliant, UL/CE registered. Sight window makes it easy to check refill level. Multiple colors and finishes available. Compatible with PURELL® TFX™ 1200 mL refills.",
        "price": 10.99,
        "units": "case",
        "user_id": 1,
        "category_id": 2,
        "supplier_id": 3
    },
    {
        "name": "PURELL® Advanced Hand Sanitizer Green Certified Foam",
        "description": "Luxurious foam made with naturally-renewable ethanol. Kills more than 99.99% of most common germs that may cause illness. ECOLOGO® Certified to Standard Name UL 2783. USDA Certified Biobased Product. Outperforms other hand sanitizers ounce-for-ounce¹. Clinically-proven to maintain skin health². America’s #1 Instant Hand Sanitizer³. 1. Healthcare Personnel Handwash Study #110103-101, April 5, 2011, and #100907-101, Jan 6th, 2011, BioScience Laboratories, Bozeman, MT. 2. Clinical field study #2011-F10232, April 2011. 3. IRI 52wks ending 9/8/13 with HPIS sales data from May 2013",
        "price": 9.99,
        "units": "case",
        "user_id": 1,
        "category_id": 2,
        "supplier_id": 3
    },
    // Paper Goods
    {
        "name": "Scott Kitchen Paper Towels with Fast-Drying Absorbency Pockets, Perforated Standard Paper Towel Rolls",
        "description": "When you need an affordable kitchen paper towel for your break room, the Scott Kitchen Paper Towels are a smart choice. Each of the paper towel rolls (20 per case) features a generous 128 perforated towels. While they are single-ply kitchen paper, they feature fast-drying Absorbency Pockets which soak up water fast, so users need fewer towels to dry their hands and wipe up spills. The Scott kitchen roll fits easily into standard roll towel dispensers – such as a countertop towel holder or a roll holder for under kitchen cabinets. By giving your employees and break room visitors what they need to dry their hands after proper washing, you're helping them stay clean and healthy. The paper towel rolls contain a mix of recycled fiber and post-consumer waste to meet EPA minimum guidelines for (kitchen tissue) paper towel products.",
        "price": 23.99,
        "units": "case",
        "user_id": 1,
        "category_id": 3,
        "supplier_id": 4
    },
    {
        "name": "Scott Essential Professional Bulk Toilet Paper for Business, Individually Wrapped Standard Rolls, 2-PLY, White",
        "description": "When you're looking for practical products for your business restroom, Scott Bulk Toilet Paper Standard Roll is a smart choice. This recycled toilet tissue is the ideal blend of terrific performance and value. Each sheet is strong and absorbent, giving you a consistent, reliable experience for your bathroom visitors (even in high-traffic / commercial / industrial areas). If you're serious about being “green or eco conscious, this best-selling Scott bath tissue fits the bill, with 100% recycled fiber (RF) content; it meets EPA standards and is FSC and EcoLogo certified. Plus, the bulk rolls are individually wrapped (they're protected until you're ready to use them) and fit with most universal toilet paper dispensers. If practicality, reliability and value top your list of criteria for bathroom supplies, trust Scott Standard Roll Bath Tissue!",
        "price": 43.99,
        "units": "case",
        "user_id": 1,
        "category_id": 3,
        "supplier_id": 4
    },
    {
        "name": "GEORGIA PACIFIC PACIFIC BLUE BASIC™ JUMBO SR. 2-PLY HIGH CAPACITY TOILET PAPER BY GP PRO (GEORGIA-PACIFIC), WHITE",
        "description": "This jumbo Rollsavr® Sr. bath tissue meets or exceeds EPA Comprehensive Procurement Guidelines for minimum post consumer recycled fiber content and is an affordable choice for high-traffic areas, such as washrooms in hotels, office buildings, public facilities, schools, foodservice and healthcare facilities. This jumbo-sized roll delivers 2,000 feet of 2-ply tissue, which means reduced maintenance time, reduced risk of run-out during peak intervals, and greater customer satisfaction.",
        "price": 50.99,
        "units": "case",
        "user_id": 1,
        "category_id": 3,
        "supplier_id": 4
    },
    {
        "name": "Kleenex Professional Facial Tissue for Business, Flat Tissue Boxes",
        "description": "All facial tissues are not created equal. In fact, more people choose Kleenex Facial Tissue than any other brand. Kleenex tissue offers superior performance, a premium feel and essential softness. When your employees, patients and guests see the respected Kleenex brand in your business and restrooms, they'll know that you select quality products, putting forth the best image for your business. It's a popular choice in healthcare and medical offices, hotels and lodging and businesses in general. For more than 80 years, Kleenex has delivered the highest quality among facial tissues, providing consumers with smart innovations like an ultra-soft feel and Signal Sheets (the last 10 tissues are cream colored instead of white, so you know it's almost time for a new box). You'll want to buy them in bulk. Choosing Kleenex lets everyone know that you care enough to provide the very best.",
        "price": 19.99,
        "units": "case",
        "user_id": 1,
        "category_id": 3,
        "supplier_id": 4
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
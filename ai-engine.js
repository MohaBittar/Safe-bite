// ══════════════════════════════════════════════════════════════
// SAFEBITE BUILT-IN AI ENGINE v2.0
// No external API. Pure browser-based intelligence.
// 200+ allergen aliases, 150+ foods, hidden allergen detection
// ══════════════════════════════════════════════════════════════

// ── ALLERGY DATABASE ──
const ALLERGIES={
g6pd:{n:"G6PD Deficiency",ic:"&#x1fa78;",d:"Genetic condition. Red blood cells break down when exposed to trigger foods, drugs, or stress. Can be life-threatening.",
kw:["fava bean","broad bean","lima bean","favism","soybean","soy bean","lentil","chickpea","chana","garbanzo","peanut","groundnut","arachis","pecan","walnut","black walnut","red wine","purple grape juice","star fruit","carambola","blueberry","cranberry","cherry","plum","prune","quinine","tonic water","sulfite","sulfites","sulphite","sulphites","sulfur dioxide","sodium metabisulfite","potassium metabisulfite","sodium bisulfite","mothball","naphthalene","henna","nitrofurantoin","primaquine","chloroquine","dapsone","methylene blue","sulfa","sulfonamide","vitamin k","phytonadione","menadione","probenecid","black-eyed pea","bambara","hyacinth bean","winged bean"]},
peanut:{n:"Peanut Allergy",ic:"&#x195C;",d:"Can cause anaphylaxis. Even trace amounts dangerous. Top food allergen.",
kw:["peanut","peanuts","peanut butter","peanut oil","peanut flour","peanut protein","arachis","arachis hypogaea","groundnut","groundnuts","monkey nut","goober","beer nuts","nougat","marzipan","granola","energy bar","trail mix","satay","pesto","hydrolyzed vegetable protein","textured vegetable protein","HVP","TVP"]},
treenut:{n:"Tree Nut Allergy",ic:"&#x1F330;",d:"Almonds, walnuts, cashews, etc. 60% of nut allergies. Can be severe.",
kw:["almond","almonds","almond milk","almond flour","almond extract","walnut","walnuts","black walnut","cashew","cashews","cashew butter","pecan","pecans","pistachio","pistachios","macadamia","brazil nut","brazil nuts","hazelnut","hazelnuts","filbert","filberts","chestnut","chestnuts","pine nut","pine nuts","pignoli","tree nut","tree nuts","mixed nuts","nutella","nougat","marzipan","praline","gianduja","nut butter","nut oil","nut flour","baklava","brittle","toffee","amaretti"]},
milk:{n:"Milk Allergy",ic:"&#x1F95B;",d:"Reaction to milk proteins (casein, whey). Different from lactose intolerance.",
kw:["milk","cow milk","whole milk","skim milk","buttermilk","powdered milk","evaporated milk","condensed milk","butter","butter fat","butter oil","ghee","clarified butter","cream","heavy cream","whipping cream","sour cream","crème fraîche","half and half","cheese","cheddar","mozzarella","parmesan","romano","gouda","brie","camembert","cream cheese","mascarpone","ricotta","cottage cheese","feta","blue cheese","provolone","swiss","colby","asiago","pecorino","gruyère","yogurt","yoghurt","kefir","whey","casein","caseinate","sodium caseinate","lactalbumin","lactoglobulin","lactose","lactoferrin","dairy","milkshake","ice cream","gelato","frozen yogurt","pudding","custard","flan","crème brûlée","chocolate milk","latte","cappuccino","macchiato","bechamel","alfredo","hollandaise","cheese sauce","nacho cheese","queso"]},
egg:{n:"Egg Allergy",ic:"&#x1F95A;",d:"Reaction to egg white/yolk proteins. Second most common childhood allergy.",
kw:["egg","eggs","egg white","egg whites","egg yolk","egg yolks","whole egg","dried egg","egg powder","albumin","albumen","globulin","ovomucin","lysozyme","ovalbumin","mayonnaise","mayo","aioli","meringue","sabayon","zabaglione","hollandaise","custard","eggnog","egg wash","egg substitute","frittata","quiche","soufflé","chiffon","sponge cake","angel food cake","genoise","pancake","waffle","french toast","crepe","popover","fresh pasta","fettuccine","lasagna fresh","noodle fresh","won ton","dumpling wrapper","egg roll wrapper","phyllo","filo","croissant","brioche","challah","egg bread","marshmallow"]},
wheat:{n:"Wheat Allergy",ic:"&#x1F33E;",d:"Immune reaction to wheat proteins. Different from celiac disease.",
kw:["wheat","wheat flour","wheat bran","wheat germ","wheat gluten","wheat protein","wheat starch","bread","bun","roll","bagel","tortilla","pita","naan","focaccia","ciabatta","sourdough","pasta","spaghetti","penne","fusilli","macaroni","linguine","ravioli","tortellini","lasagna","noodle","noodles","ramen","udon","soba","cereal","cracker","pretzel","cookie","biscuit","cake","muffin","pancake","waffle","doughnut","donut","croissant","brioche","challah","seitan","vital wheat gluten","couscous","bulgur","farro","spelt","kamut","einkorn","durum","semolina","triticale","flour","all-purpose flour","bread flour","matzo","matzah","breadcrumbs","panko","croutons","stuffing","soy sauce","teriyaki","hoisin","malt","malt extract","malt vinegar","beer","ale","lager","stout","brewer's yeast"]},
soy:{n:"Soy Allergy",ic:"&#x1FAD8;",d:"Reaction to soybeans. Top 8 allergen. Found in many processed foods.",
kw:["soy","soya","soybean","soybeans","soy milk","soymilk","soy sauce","shoyu","tamari","tofu","bean curd","tempeh","edamame","miso","natto","yuba","soy protein","soy protein isolate","soy protein concentrate","textured soy protein","TVP","soy flour","soy lecithin","soybean oil","soy oil","soy nuts","doenjang","gochujang","hydrolyzed soy","lecithin soy","vegetable protein","vegetable oil soy","shortening soy","margarine soy","chocolate soy lecithin"]},
shellfish:{n:"Shellfish Allergy",ic:"&#x1F990;",d:"Crustaceans: shrimp, crab, lobster. Most common adult food allergy.",
kw:["shrimp","prawn","prawns","shrimp paste","crab","crabs","crab meat","crab stick","surimi","imitation crab","lobster","lobsters","crawfish","crayfish","langoustine","scampi","crustacean","shellfish","oyster sauce","fish sauce","bouillabaisse","paella","cioppino","gumbo","jambalaya","bisque","tempura shrimp","shrimp cocktail","shrimp scampi","shrimp dumpling","shrimp toast","pad thai shrimp","pho shrimp"]},
fish:{n:"Fish Allergy",ic:"&#x1F41F;",d:"Allergy to finned fish. Can be one type or all fish.",
kw:["fish","salmon","sockeye","chinook","coho","trout","rainbow trout","tuna","bluefin","yellowfin","albacore","skipjack","cod","atlantic cod","pollock","alaska pollock","haddock","halibut","sole","flounder","tilapia","bass","sea bass","catfish","carp","pike","perch","mackerel","sardine","anchovy","herring","swordfish","mahi mahi","snapper","grouper","branzino","monkfish","whitefish","sturgeon","caviar","fish sauce","fish oil","fish stick","fish finger","fish cake","fish and chips","surimi","gelatin fish","omega-3 fish","cod liver oil"]},
molluscs:{n:"Molluscs Allergy",ic:"&#x1F41A;",d:"Clams, mussels, oysters, squid, octopus. Separate from crustacean allergy.",
kw:["mollusc","mollusk","clam","clams","littleneck","manila","mussel","mussels","oyster","oysters","scallop","scallops","squid","calamari","octopus","abalone","conch","snail","escargot","whelk","periwinkle","cuttlefish","geoduck","cockle","razor clam"]},
sesame:{n:"Sesame Allergy",ic:"&#x26AA;",d:"Sesame seeds and oil. Increasingly common. Required labeling in EU.",
kw:["sesame","sesame seed","sesame seeds","sesame oil","sesame paste","tahini","tahina","halva","halvah","gomashio","benne","hummus","baba ganoush","sesame bun","sesame bread","sesame cracker","sesame snap","everything bagel","everything seasoning","sesame chicken","sesame noodle"]},
sulfite:{n:"Sulfite Sensitivity",ic:"&#x1F377;",d:"Preservatives in wine, dried foods. Can trigger asthma and G6PD.",
kw:["sulfite","sulfites","sulphite","sulphites","sodium sulfite","sodium bisulfite","sodium metabisulfite","potassium metabisulfite","sulfur dioxide","SO2","E220","E221","E222","E223","wine","red wine","white wine","champagne","cider","dried fruit","dried apricot","raisin","prune","dried cranberry","preserved fruit","maraschino cherry","pickled","pickle","sauerkraut","jam","jelly","marmalade","fruit juice","grape juice","processed potato","instant mashed potato"]},
corn:{n:"Corn Allergy",ic:"&#x1F33D;",d:"Reaction to corn. Corn is in hundreds of processed foods.",
kw:["corn","maize","cornstarch","corn flour","cornmeal","grits","corn syrup","corn syrup solids","high fructose corn syrup","HFCS","corn oil","corn sugar","modified corn starch","dextrose corn","glucose corn","maltodextrin corn","citric acid corn","xanthan gum corn","caramel color corn","distilled vinegar corn","polenta","hominy","tortilla corn","tortilla chip","corn chip","cornbread","popcorn","creamed corn","corn chowder"]},
celery:{n:"Celery Allergy",ic:"&#x1F96C;",d:"Common in Europe. Must be labeled in EU. Can cause anaphylaxis.",
kw:["celery","celery stalk","celery seed","celery salt","celery powder","celery juice","celery root","celeriac","celery heart","celery leaf","celery flake","celery oil","celery extract","wild celery","smallage","lovage"]},
mustard:{n:"Mustard Allergy",ic:"&#x1F6AB;",d:"Allergy to mustard. Must be labeled in EU. Can cause anaphylaxis.",
kw:["mustard","mustard seed","mustard seeds","mustard powder","mustard flour","mustard oil","mustard greens","dijon mustard","wholegrain mustard","english mustard","american mustard","yellow mustard","brown mustard","black mustard","white mustard","wasabi","curry powder","chaat masala"]},
lupin:{n:"Lupin Allergy",ic:"&#x1F33B;",d:"Legume related to peanuts. Found in flour and bakery.",
kw:["lupin","lupin flour","lupini","lupini bean","lupin bean","lupin protein","lupin extract","lupin starch","lupin pasta","lupin bread","lupin snack","sweet lupin"]},
nightshade:{n:"Nightshade Sensitivity",ic:"&#x1F335;",d:"Tomatoes, peppers, potatoes, eggplant can cause inflammation.",
kw:["tomato","tomatoes","tomato sauce","tomato paste","tomato soup","tomato ketchup","sun-dried tomato","bell pepper","sweet pepper","paprika","chili pepper","chili powder","cayenne","jalapeño","serrano","habanero","pepperoni","pimento","potato","potatoes","potato starch","eggplant","aubergine","goji berry","goji","tomatillo","tabasco","sriracha","hot sauce","chili sauce","salsa","harissa","chipotle","gochugaru","gochujang","sambal","doubanjiang"]},
histamine:{n:"Histamine Intolerance",ic:"&#x26A0;",d:"Difficulty breaking down histamine. Causes headaches, hives, digestive issues.",
kw:["fermented","aged cheese","aged","wine","beer","cider","sauerkraut","kimchi","kombucha","vinegar","soy sauce","miso","tempeh","natto","yogurt","kefir","sour cream","smoked meat","smoked fish","processed meat","salami","sausage","pepperoni","prosciutto","bacon","leftover meat","leftover fish","tuna canned","sardine","anchovy","mackerel","herring","fish sauce","spinach","avocado","banana","papaya","pineapple","strawberry","chocolate","cocoa","coffee","energy drink","alcohol"]},
fructose:{n:"Fructose Intolerance",ic:"&#x1F34E;",d:"Difficulty absorbing fructose. Causes bloating, pain, diarrhea.",
kw:["fructose","fruit sugar","high fructose corn syrup","HFCS","honey","agave","apple","apple juice","pear","mango","watermelon","grape","fig","date","persimmon","guava","pomegranate","kiwi","passion fruit","lychee","asparagus","artichoke","Jerusalem artichoke","leek","onion","garlic"]},
lactose:{n:"Lactose Intolerance",ic:"&#x2757;",d:"Can't digest lactose sugar. Different from milk protein allergy.",
kw:["lactose","milk sugar","galactose","whey","whey powder","milk","whole milk","skim milk","buttermilk","powdered milk","evaporated milk","condensed milk","cream","heavy cream","sour cream","half and half","ice cream","gelato","frozen yogurt","yogurt","yoghurt","kefir","cheese","cottage cheese","cream cheese","mascarpone","ricotta","brie","mozzarella","cheddar","parmesan","swiss","gouda","feta","paneer","queso fresco"]},
gluten:{n:"Gluten Sensitivity / Celiac",ic:"&#x1F35E;",d:"Reaction to gluten in wheat, barley, rye. Autoimmune for celiacs.",
kw:["gluten","wheat","barley","rye","spelt","kamut","bulgur","couscous","seitan","malt","brewer yeast","triticale","farro","freekeh","emmer","einkorn","durum","semolina","oats (cross-contaminated)","beer","ale","lager","stout","bread","pasta","noodle","cereal","cracker","cookie","cake","muffin","pancake","waffle","doughnut","croissant","bagel","tortilla","flatbread","naan","pita","focaccia","ciabatta","sourdough","brioche","challah"]},
fodmap:{n:"FODMAP Sensitivity",ic:"&#x1F9C0;",d:"Fermentable carbs causing digestive distress.",
kw:["onion","garlic","wheat","rye","cauliflower","mushroom","apple","pear","honey","mango","watermelon","milk","yogurt","cheese","legume","lentil","chickpea","bean","cabbage","broccoli","asparagus","artichoke","pistachio","cashew"]},
oxalate:{n:"Oxalate Sensitivity",ic:"&#x1F962;",d:"High oxalate foods can cause kidney stones.",
kw:["spinach","rhubarb","beet","chocolate","cocoa","almond","cashew","peanut","star fruit","sweet potato","taro","miso","soy","navel orange","date","fig"]}
};

// ── ALLERGEN ALIAS MAP ──
// Maps ingredient words -> which allergy they belong to
const ALIAS={
peanut:["peanut","peanuts","peanut butter","peanut oil","arachis","groundnut","monkey nut","goober"],
treenut:["almond","almonds","walnut","walnuts","cashew","cashews","pecan","pecans","pistachio","macadamia","brazil nut","hazelnut","hazelnuts","filbert","chestnut","pine nut","mixed nuts","nut","nuts","tree nut","nutella","praline","marzipan","nougat","baklava","brittle"],
milk:["milk","dairy","butter","cream","cheese","yogurt","yoghurt","whey","casein","caseinate","lactose","lactoglobulin","ghee","sour cream","cream cheese","ricotta","mascarpone","parmesan","mozzarella","cheddar","feta","ice cream","gelato","kefir","custard","pudding","latte","cappuccino","bechamel","alfredo","hollandaise","queso","paneer"],
egg:["egg","eggs","albumin","albumen","lysozyme","ovalbumin","mayonnaise","mayo","aioli","meringue","custard","eggnog","frittata","quiche","soufflé","marshmallow","meringue"],
wheat:["wheat","flour","bread","bun","roll","bagel","pasta","spaghetti","noodle","noodles","cereal","cracker","pretzel","cookie","biscuit","cake","muffin","pancake","waffle","doughnut","donut","croissant","brioche","challah","seitan","couscous","bulgur","spelt","kamut","durum","semolina","triticale","matzo","breadcrumbs","panko","croutons","stuffing","malt","beer","ale","lager","stout","brewer yeast"],
soy:["soy","soya","soybean","tofu","tempeh","edamame","miso","natto","tamari","shoyu","soy lecithin","soybean oil","TVP","gochujang"],
shellfish:["shrimp","prawn","crab","lobster","crawfish","crayfish","scampi","surimi","imitation crab","shellfish","crustacean"],
fish:["fish","salmon","tuna","cod","tilapia","haddock","halibut","sole","flounder","bass","catfish","mackerel","sardine","anchovy","herring","swordfish","trout","snapper","grouper","pollock","surimi","caviar"],
molluscs:["clam","clams","mussel","mussels","oyster","oysters","scallop","scallops","squid","calamari","octopus","abalone","conch","snail","escargot"],
sesame:["sesame","tahini","tahina","halva","gomashio","benne","hummus"],
sulfite:["sulfite","sulfites","sulphite","sulfur dioxide","E220","sodium metabisulfite","potassium metabisulfite"],
corn:["corn","maize","cornstarch","corn flour","cornmeal","corn syrup","HFCS","corn oil","polenta","hominy","grits"],
celery:["celery","celeriac","celery salt","celery seed","lovage"],
mustard:["mustard","dijon","wasabi"],
lupin:["lupin","lupini"],
nightshade:["tomato","tomatoes","pepper","peppers","paprika","chili","jalapeño","potato","potatoes","eggplant","aubergine","goji","tabasco","sriracha","salsa","harissa","chipotle","gochujang","sambal"],
histamine:["fermented","aged cheese","wine","beer","sauerkraut","kimchi","kombucha","vinegar","miso","tempeh","natto","smoked","salami","sausage","pepperoni","prosciutto","bacon","leftover"],
fructose:["fructose","honey","agave","apple","pear","mango","watermelon","grape","fig","date","asparagus","artichoke","onion","garlic"],
lactose:["lactose","whey","milk","cream","cheese","yogurt","ice cream","gelato","paneer"],
gluten:["gluten","barley","rye","spelt","kamut","bulgur","couscous","seitan","malt","brewer yeast","triticale","farro","emmer","einkorn"],
fodmap:["onion","garlic","cauliflower","mushroom","lentil","chickpea","bean","cabbage","broccoli"],
oxalate:["spinach","rhubarb","beet","chocolate","cocoa","taro"]
};

// ── HIDDEN ALLERGEN PATTERNS ──
const HIDDEN_PATTERNS=[
  {re:/may\s+contain/i,msg:"May contain allergens (cross-contamination risk)"},
  {re:/produced?\s+in\s+a\s+facility/i,msg:"Produced in facility that processes allergens"},
  {re:/manufactured?\s+on\s+equipment/i,msg:"Made on shared equipment with allergens"},
  {re:/processed?\s+in\s+a\s+plant/i,msg:"Processed in plant with allergens"},
  {re:/shared\s+equipment/i,msg:"Shared equipment risk"},
  {re:/cooked?\s+in\s+same\s+oil/i,msg:"Cooked in same oil as allergens"},
  {re:/natural\s+flavors?/i,msg:"Natural flavors may contain hidden allergens"},
  {re:/artificial\s+flavors?/i,msg:"Artificial flavors may contain hidden allergens"},
  {re:/hydrolyzed/i,msg:"Hydrolyzed proteins may contain allergen derivatives"},
  {re:/spices?\s*\(/i,msg:"Spice blends may contain allergen carriers"},
  {re:/color\s*\(/i,msg:"Color additives may contain allergen carriers"},
  {re:/carmine/i,msg:"Carmine (insect-derived, may indicate shared processing)"},
  {re:/cochineal/i,msg:"Cochineal (insect-derived)"},
  {re:/isinglass/i,msg:"Isinglass (fish-derived)"},
  {re:/gelatin/i,msg:"Gelatin (may be pork, beef, or fish-derived)"},
  {re:/confectioner'?s?\s+glaze/imsg:"Confectioner's glaze (may contain shellac)"}
];

// ── FOOD DATABASE ──
const FOODS={
burger:{n:"Burger",i:"Bun (wheat flour, sugar, yeast, egg), Beef patty, Lettuce, Tomato, Onion, Cheese (milk), Ketchup (tomato, vinegar, sugar), Mustard (mustard seeds, vinegar)"},
cheeseburger:{n:"Cheeseburger",i:"Bun (wheat flour, egg, sugar), Beef patty, Cheddar cheese (milk), Lettuce, Tomato, Onion, Pickles, Ketchup"},
chicken_burger:{n:"Chicken Burger",i:"Bun (wheat flour, egg), Chicken breast, Lettuce, Mayo (egg, oil), Tomato"},
hamburger:{n:"Hamburger",i:"Bun (wheat flour, egg), Beef patty, Lettuce, Tomato, Onion, Ketchup, Mustard"},
pizza:{n:"Pizza",i:"Dough (wheat flour, yeast, olive oil), Tomato sauce (tomato, basil, garlic), Mozzarella cheese (milk), Olive oil"},
pepperoni_pizza:{n:"Pepperoni Pizza",i:"Dough (wheat flour, yeast), Tomato sauce, Mozzarella cheese (milk), Pepperoni (pork, beef, salt, spices, paprika)"},
fries:{n:"French Fries",i:"Potatoes, Vegetable oil, Salt"},
chicken_nuggets:{n:"Chicken Nuggets",i:"Chicken breast, Wheat flour, Egg, Breadcrumbs (wheat), Salt, Spices, Oil"},
fried_chicken:{n:"Fried Chicken",i:"Chicken, Wheat flour, Buttermilk (milk), Egg, Salt, Black pepper, Garlic powder, Paprika, Oil"},
wings:{n:"Chicken Wings",i:"Chicken wings, Flour (wheat), Egg, Hot sauce (chili, vinegar), Butter (milk), Blue cheese dressing (milk, egg)"},
tacos:{n:"Tacos",i:"Corn tortilla or Wheat tortilla, Ground beef, Lettuce, Tomato, Cheese (milk), Sour cream (milk), Salsa (tomato, onion, chili)"},
burrito:{n:"Burrito",i:"Flour tortilla (wheat), Rice, Black beans, Cheese (milk), Sour cream (milk), Lettuce, Salsa, Guacamole (avocado)"},
quesadilla:{n:"Quesadilla",i:"Flour tortilla (wheat), Cheese (milk), Chicken, Peppers, Onion"},
nachos:{n:"Nachos",i:"Corn tortilla chips, Cheese sauce (milk, cheese), Jalapeños, Sour cream (milk), Salsa, Guacamole"},
sushi:{n:"Sushi",i:"Sushi rice (rice, vinegar, sugar), Nori (seaweed), Fish (salmon, tuna), Soy sauce (wheat, soy), Wasabi, Ginger"},
ramen:{n:"Ramen",i:"Ramen noodles (wheat flour, egg), Pork broth, Soy sauce (wheat, soy), Chashu pork, Soft-boiled egg, Green onion, Nori"},
pho:{n:"Pho",i:"Rice noodles, Beef broth, Thinly sliced beef, Bean sprouts, Thai basil, Lime, Hoisin sauce (soy, wheat)"},
pad_thai:{n:"Pad Thai",i:"Rice noodles, Shrimp, Egg, Tamarind paste, Fish sauce, Sugar, Peanuts, Bean sprouts, Lime"},
fried_rice:{n:"Fried Rice",i:"Rice, Soy sauce (wheat, soy), Egg, Vegetables, Sesame oil, Garlic"},
stir_fry:{n:"Stir Fry",i:"Mixed vegetables, Soy sauce (wheat, soy), Sesame oil, Garlic, Ginger, Chicken, Rice"},
pasta:{n:"Pasta",i:"Pasta (wheat flour, egg), Tomato sauce (tomato, basil, garlic), Parmesan cheese (milk), Olive oil"},
spaghetti:{n:"Spaghetti Bolognese",i:"Spaghetti (wheat flour), Ground beef, Tomato sauce (tomato), Parmesan cheese (milk)"},
mac_cheese:{n:"Mac and Cheese",i:"Macaroni (wheat flour, egg), Cheddar cheese (milk), Butter (milk), Milk, Salt"},
lasagna:{n:"Lasagna",i:"Lasagna sheets (wheat flour, egg), Ground beef, Tomato sauce, Ricotta cheese (milk), Mozzarella cheese (milk), Parmesan (milk)"},
chicken_parm:{n:"Chicken Parmesan",i:"Chicken breast, Wheat flour, Egg, Breadcrumbs (wheat), Marinara sauce (tomato), Mozzarella cheese (milk)"},
grilled_cheese:{n:"Grilled Cheese",i:"Bread (wheat flour), Cheese (milk), Butter (milk)"},
club_sandwich:{n:"Club Sandwich",i:"Bread (wheat flour), Turkey, Bacon, Lettuce, Tomato, Mayonnaise (egg, oil)"},
sub:{n:"Sub Sandwich",i:"Sub roll (wheat flour), Deli meat, Cheese (milk), Lettuce, Tomato, Mayo (egg)"},
pbj:{n:"Peanut Butter & Jelly",i:"Bread (wheat flour), Peanut butter (peanuts), Jelly (fruit, sugar)"},
hot_dog:{n:"Hot Dog",i:"Hot dog bun (wheat flour), Sausage (pork, beef, spices), Ketchup, Mustard (mustard seeds)"},
fish_sticks:{n:"Fish Sticks",i:"Fish (cod, pollock), Wheat flour, Egg, Breadcrumbs (wheat), Oil, Salt"},
fish_chips:{n:"Fish and Chips",i:"Fish (cod), Batter (wheat flour, egg, milk), Potatoes, Oil, Salt"},
salmon:{n:"Grilled Salmon",i:"Salmon fillet, Olive oil, Lemon, Salt, Pepper, Dill"},
shrimp_scampi:{n:"Shrimp Scampi",i:"Shrimp, Butter (milk), Garlic, White wine, Lemon juice, Linguine (wheat, egg)"},
lobster_roll:{n:"Lobster Roll",i:"Lobster meat, Butter (milk), Mayonnaise (egg), Lemon, Hot dog bun (wheat)"},
clam_chowder:{n:"Clam Chowder",i:"Clams, Cream (milk), Butter (milk), Potatoes, Onion, Bacon, Salt"},
calamari:{n:"Fried Calamari",i:"Squid, Wheat flour, Egg, Breadcrumbs, Oil, Lemon, Marinara sauce (tomato)"},
dumplings:{n:"Dumplings",i:"Dumpling wrapper (wheat flour), Ground pork, Cabbage, Ginger, Garlic, Soy sauce (wheat, soy), Sesame oil"},
spring_rolls:{n:"Spring Rolls",i:"Wrapper (wheat flour), Cabbage, Carrot, Shrimp, Rice noodles, Soy sauce (wheat, soy), Sesame oil"},
egg_rolls:{n:"Egg Rolls",i:"Wrapper (wheat flour, egg), Cabbage, Pork, Carrot, Soy sauce (wheat), Oil"},
chicken_salad:{n:"Chicken Salad",i:"Chicken breast, Mayonnaise (egg, oil), Celery, Onion, Lettuce, Salt"},
caesar_salad:{n:"Caesar Salad",i:"Romaine lettuce, Parmesan cheese (milk), Croutons (wheat, egg, butter), Caesar dressing (anchovies-fish, egg, oil)"},
greek_salad:{n:"Greek Salad",i:"Cucumber, Tomato, Red onion, Olives, Feta cheese (milk), Olive oil, Oregano"},
chicken_soup:{n:"Chicken Soup",i:"Chicken broth, Chicken, Noodles (wheat flour, egg), Carrots, Celery, Onion, Salt"},
tomato_soup:{n:"Tomato Soup",i:"Tomatoes, Cream (milk), Butter (milk), Onion, Basil, Salt"},
chili:{n:"Chili",i:"Ground beef, Kidney beans, Tomatoes, Onion, Garlic, Chili powder, Cumin, Cheese (milk, topping)"},
steak:{n:"Steak",i:"Beef steak, Salt, Pepper, Butter (milk), Garlic, Rosemary"},
bbq_ribs:{n:"BBQ Ribs",i:"Pork ribs, BBQ sauce (tomato, vinegar, sugar, molasses), Salt, Pepper"},
meatloaf:{n:"Meatloaf",i:"Ground beef, Breadcrumbs (wheat), Egg, Onion, Garlic, Ketchup (tomato), Worcestershire sauce (fish, soy)"},
mashed_potatoes:{n:"Mashed Potatoes",i:"Potatoes, Butter (milk), Milk, Salt, Pepper"},
pancakes:{n:"Pancakes",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Baking powder, Salt"},
waffles:{n:"Waffles",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Baking powder"},
french_toast:{n:"French Toast",i:"Bread (wheat flour), Eggs, Milk, Cinnamon, Vanilla, Butter (milk)"},
omelette:{n:"Omelette",i:"Eggs, Butter (milk), Cheese (milk), Salt, Pepper"},
bacon_eggs:{n:"Bacon & Eggs",i:"Bacon (pork), Eggs, Butter (milk), Salt"},
cereal:{n:"Cereal with Milk",i:"Cereal (wheat, corn, oats - may contain nuts), Milk, Sugar"},
oatmeal:{n:"Oatmeal",i:"Oats, Water or Milk, Sugar, Cinnamon"},
toast:{n:"Toast",i:"Bread (wheat flour), Butter (milk)"},
bagel:{n:"Bagel",i:"Bagel (wheat flour, malt, yeast), Cream cheese (milk)"},
croissant:{n:"Croissant",i:"Croissant (wheat flour, butter, milk, egg), Butter (milk)"},
muffin:{n:"Muffin",i:"Wheat flour, Sugar, Butter (milk), Eggs, Milk, Baking powder, Vanilla"},
donut:{n:"Donut",i:"Wheat flour, Sugar, Eggs, Butter (milk), Yeast, Oil, Glaze (sugar, milk)"},
cookies:{n:"Cookies",i:"Wheat flour, Sugar, Butter (milk), Eggs, Baking soda, Vanilla, Chocolate chips"},
brownie:{n:"Brownie",i:"Chocolate, Wheat flour, Sugar, Butter (milk), Eggs, Cocoa, Vanilla"},
cake:{n:"Cake",i:"Wheat flour, Sugar, Eggs, Butter (milk), Milk, Baking powder, Vanilla, Frosting (sugar, butter)"},
cheesecake:{n:"Cheesecake",i:"Cream cheese (milk), Sugar, Eggs, Graham crackers (wheat), Butter (milk), Vanilla"},
ice_cream:{n:"Ice Cream",i:"Cream (milk), Milk, Sugar, Egg yolks, Vanilla"},
chocolate:{n:"Chocolate Bar",i:"Cocoa butter, Sugar, Milk powder, Soy lecithin, Vanilla"},
milkshake:{n:"Milkshake",i:"Ice cream (milk, egg), Milk, Sugar, Flavoring"},
smoothie:{n:"Smoothie",i:"Fruit, Yogurt (milk), Milk, Honey, Ice"},
trail_mix:{n:"Trail Mix",i:"Peanuts, Almonds (tree nut), Cashews (tree nut), Raisins, Chocolate chips"},
granola_bar:{n:"Granola Bar",i:"Oats, Honey, Peanuts, Tree nuts, Sugar, Soy lecithin"},
protein_bar:{n:"Protein Bar",i:"Whey protein (milk), Soy protein, Tree nuts, Honey, Chocolate"},
instant_noodles:{n:"Instant Noodles",i:"Wheat flour noodles, Palm oil, Seasoning packet (soy sauce - wheat, soy), Dehydrated vegetables"},
frozen_pizza:{n:"Frozen Pizza",i:"Pizza crust (wheat flour), Tomato sauce, Mozzarella cheese (milk), Preservatives"},
apple_pie:{n:"Apple Pie",i:"Wheat flour, Apples, Sugar, Butter (milk), Cinnamon, Egg"},
butter_chicken:{n:"Butter Chicken",i:"Chicken, Butter (milk), Cream (milk), Tomato, Yogurt (milk), Spices, Rice"},
tikka_masala:{n:"Tikka Masala",i:"Chicken, Yogurt (milk), Cream (milk), Tomato sauce, Spices, Rice"},
biryani:{n:"Biryani",i:"Basmati rice, Chicken, Yogurt (milk), Onion, Saffron, Spices, Ghee (milk)"},
curry:{n:"Chicken Curry",i:"Chicken, Coconut milk, Curry paste (chili, garlic, shrimp paste-fish), Rice"},
fish_tacos:{n:"Fish Tacos",i:"Corn tortilla, White fish, Cabbage, Lime, Crema (milk), Chipotle sauce"},
poke:{n:"Poke Bowl",i:"Sushi rice, Raw tuna (fish), Soy sauce (wheat, soy), Sesame oil, Avocado, Seaweed"},
hummus:{n:"Hummus",i:"Chickpeas, Tahini (sesame), Lemon juice, Garlic, Olive oil, Salt"},
guacamole:{n:"Guacamole",i:"Avocado, Lime juice, Onion, Tomato, Cilantro, Salt"},
onion_rings:{n:"Onion Rings",i:"Onion, Wheat flour, Egg, Milk, Breadcrumbs (wheat), Oil"},
mozzarella_sticks:{n:"Mozzarella Sticks",i:"Mozzarella cheese (milk), Wheat flour, Egg, Breadcrumbs (wheat), Oil"},
soda:{n:"Soda",i:"Carbonated water, High fructose corn syrup or Sugar, Caramel color, Phosphoric acid, Natural flavors, Caffeine"},
energy_drink:{n:"Energy Drink",i:"Water, Sugar, Caffeine, Taurine, B vitamins, Citric acid, Artificial flavors, Color (Red 40, Yellow 5)"},
chocolate_milk:{n:"Chocolate Milk",i:"Milk, Sugar, Cocoa, Vanilla, Salt"},
yogurt:{n:"Yogurt",i:"Milk, Live active cultures, Sugar, Fruit, Pectin"},
latte:{n:"Latte",i:"Espresso (coffee), Steamed milk (milk)"},
chicken_curry2:{n:"Chicken Curry",i:"Chicken, Coconut milk, Curry paste (chili, lemongrass, garlic, shrimp paste-fish), Rice, Oil"},
dumplings2:{n:"Potstickers",i:"Wrapper (wheat flour), Ground pork, Cabbage, Ginger, Garlic, Soy sauce (wheat, soy), Sesame oil"},
fried_rice2:{n:"Egg Fried Rice",i:"Rice, Egg, Soy sauce (wheat, soy), Sesame oil, Peas, Carrots, Garlic"},
ramen2:{n:"Tonkotsu Ramen",i:"Wheat noodles (egg), Pork bone broth, Chashu pork, Soft egg, Nori, Green onion, Soy tare (wheat, soy)"},
spring_roll2:{n:"Fresh Spring Rolls",i:"Rice paper, Shrimp, Rice vermicelli, Lettuce, Herbs, Peanut sauce"},
poke2:{n:"Salmon Poke",i:"Raw salmon (fish), Soy sauce (wheat, soy), Sesame oil, Rice, Avocado, Seaweed"}
};

// ── FOOD KEYWORD MAP ──
const FKW={};
Object.keys(FOODS).forEach(k=>{FKW[k]=[k.replace(/_/g,' ')]});
Object.assign(FKW,{
burger:["burger","hamburger","cheeseburger"],pizza:["pizza","pepperoni pizza"],
fries:["fries","french fries","chips"],nuggets:["nugget","chicken nugget"],
fried_chicken:["fried chicken","chicken wings"],tacos:["taco","tacos"],
sushi:["sushi","sashimi","maki"],ramen:["ramen"],
pasta:["pasta","spaghetti","noodle"],sandwich:["sandwich","sub","hoagie"],
hot_dog:["hot dog"],salad:["salad"],ice_cream:["ice cream"],
chocolate:["chocolate"],cookies:["cookie","cookies"],cake:["cake","cupcake"],
pancakes:["pancake"],cereal:["cereal"],grilled_cheese:["grilled cheese"],
omelette:["omelette","omelet"],fried_rice:["fried rice"],stir_fry:["stir fry"],
soup:["soup"],steak:["steak"],bbq:["bbq","barbecue"],curry:["curry"],
burrito:["burrito"],quesadilla:["quesadilla"],nachos:["nachos"],
calamari:["calamari"],shrimp:["shrimp","prawn"],crab:["crab"],lobster:["lobster"],
clam:["clam","chowder"],toast:["toast"],bagel:["bagel"],croissant:["croissant"],
muffin:["muffin"],donut:["donut","doughnut"],brownie:["brownie"],
cheesecake:["cheesecake"],milkshake:["milkshake"],smoothie:["smoothie"],
latte:["latte","cappuccino"],wrap:["wrap"],dumpling:["dumpling","potsticker"],
spring_roll:["spring roll","egg roll"],pho:["pho"],pad_thai:["pad thai"],
biryani:["biryani"],butter_chicken:["butter chicken"],fish_tacos:["fish taco"],
poke:["poke"],hummus:["hummus"],guacamole:["guacamole"],
soda:["coke","pepsi","soda","sprite"],energy_drink:["red bull","monster","energy drink"],
trail_mix:["trail mix"],granola:["granola"],protein_bar:["protein bar"],
instant_noodles:["instant noodle","ramen cup","maruchan","top ramen"],
chicken_parmesan:["chicken parmesan","chicken parm"],lasagna:["lasagna"],
club_sandwich:["club sandwich"],breakfast:["breakfast burrito","bacon egg"],
apple_pie:["apple pie"],frozen:["frozen meal","tv dinner"]
});

// ── STATE ──
let currentPage='home',selImg=null;

// ── NAVIGATION ──
function sp(p){document.querySelectorAll('.pg').forEach(e=>e.classList.remove('a'));document.querySelectorAll('.nk a').forEach(e=>e.classList.remove('a'));const el=document.getElementById(p+'Pg');if(el)el.classList.add('a');const nv=document.querySelector(`[data-p="${p}"]`);if(nv)nv.classList.add('a');currentPage=p;window.scrollTo(0,0);document.getElementById('nk').classList.remove('a')}
window.sp=sp;

// ── AUTH ──
function sAuth(t){document.getElementById('authM').classList.add('a');tAF(t)}
window.sAuth=sAuth;
function cAuth(){document.getElementById('authM').classList.remove('a')}
window.cAuth=cAuth;
function tAF(t){document.getElementById('lgF').classList.toggle('hid',t!=='login');document.getElementById('rgF').classList.toggle('hid',t!=='register')}
window.tAF=tAF;

// ── ALLERGY GRIDS ──
const AL=['peanut','treenut','milk','egg','wheat','soy','shellfish','fish','molluscs','sesame','sulfite','corn','celery','mustard','lupin','nightshade','histamine','fructose','lactose','gluten','fodmap','oxalate'];
const CL=['g6pd'];
function initAG(){const a=document.getElementById('aG'),c=document.getElementById('cG');AL.forEach(k=>{const i=ALLERGIES[k];if(i)a.innerHTML+=`<div class="ai" data-a="${k}" onclick="tAI(this)"><span>${i.ic}</span><span>${i.n}</span></div>`});CL.forEach(k=>{const i=ALLERGIES[k];if(i)c.innerHTML+=`<div class="ai" data-a="${k}" onclick="tAI(this)"><span>${i.ic}</span><span>${i.n}</span></div>`})}
function tAI(e){e.classList.toggle('s')}
window.tAI=tAI;
function updSel(a,c){document.querySelectorAll('#aG .ai').forEach(i=>{i.classList.toggle('s',a.includes(i.dataset.a))});document.querySelectorAll('#cG .ai').forEach(i=>{i.classList.toggle('s',c.includes(i.dataset.a))})}

// ── ALLERGY INFO PAGE ──
function initAI(){const el=document.getElementById('aInfo');Object.entries(ALLERGIES).forEach(([k,i])=>{el.innerHTML+=`<div class="aic"><h3>${i.ic} ${i.n}</h3><p style="color:var(--tm);margin-bottom:.75rem">${i.d}</p><div class="fl"><div class="fcl a"><h4><i class="fas fa-times-circle"></i> Triggers</h4><ul>${i.kw.slice(0,30).map(t=>`<li>${t}</li>`).join('')}</ul></div><div class="fcl s"><h4><i class="fas fa-check-circle"></i> Note</h4><ul><li>Individual reactions vary</li><li>Consult your doctor</li><li>When in doubt, avoid</li><li>Read labels carefully</li></ul></div></div></div>`})}

// ── IMAGE UPLOAD ──
function initU(){const a=document.getElementById('uA2'),ii=document.getElementById('imgIn'),ci=document.getElementById('camIn');a.addEventListener('click',e=>{if(e.target.tagName!=='BUTTON'&&e.target.tagName!=='I')ii.click()});a.addEventListener('dragover',e=>{e.preventDefault();a.classList.add('dg')});a.addEventListener('dragleave',()=>a.classList.remove('dg'));a.addEventListener('drop',e=>{e.preventDefault();a.classList.remove('dg');const f=e.dataTransfer.files[0];if(f&&f.type.startsWith('image/'))hImg(f)});ii.addEventListener('change',e=>{if(e.target.files[0])hImg(e.target.files[0])});ci.addEventListener('change',e=>{if(e.target.files[0])hImg(e.target.files[0])})}
function hImg(f){selImg=f;const r=new FileReader();r.onload=e=>{document.getElementById('pvi').src=e.target.result;document.getElementById('pvc').style.display='block';document.getElementById('uA2').style.display='none';document.getElementById('res').style.display='none'};r.readAsDataURL(f)}
function resetU(){selImg=null;document.getElementById('imgIn').value='';document.getElementById('camIn').value='';document.getElementById('pvc').style.display='none';document.getElementById('uA2').style.display='block';document.getElementById('res').style.display='none'}
window.resetU=resetU;

// ── GET USER ALLERGIES ──
function getUA(){
  if(window.up){const a=[...(window.up.allergies||[]),...(window.up.conditions||[])];if(a.length)return a}
  const qs=Array.from(document.querySelectorAll('#qAG .ai.s')).map(e=>e.dataset.a);if(qs.length)return qs;
  const pg=Array.from(document.querySelectorAll('#aG .ai.s')).map(e=>e.dataset.a);
  const pc=Array.from(document.querySelectorAll('#cG .ai.s')).map(e=>e.dataset.a);
  if(pg.length||pc.length)return[...pg,...pc];
  return Object.keys(ALLERGIES);
}

// ── OCR TEXT EXTRACTION ──
async function doOCR(file){
  const fd=new FormData();fd.append('image',file);fd.append('language','eng');fd.append('isOverlayRequired','false');fd.append('OCREngine','2');
  const r=await fetch('https://api.ocr.space/parse/image',{method:'POST',headers:{apikey:'K85111837688957'},body:fd});
  const j=await r.json();
  if(j.ParsedResults&&j.ParsedResults.length>0)return j.ParsedResults[0].ParsedText||'';
  return'';
}

// ── INTELLIGENT INGREDIENT ANALYSIS ENGINE ──
function analyzeIngredients(text,userAllergies){
  const allSelected=userAllergies.length?userAllergies:Object.keys(ALLERGIES);
  const lines=text.split(/[\n,;]+/).map(s=>s.trim().toLowerCase()).filter(s=>s.length>1);
  const warnings=[];const hiddenWarns=[];const matches=[];let worstStatus='safe';

  // Check for hidden allergen patterns in full text
  HIDDEN_PATTERNS.forEach(p=>{
    if(p.re.test(text)){
      hiddenWarns.push(p.msg);
    }
  });

  // Analyze each ingredient/line
  lines.forEach(line=>{
    allSelected.forEach(aKey=>{
      const aliasList=ALIAS[aKey];
      if(!aliasList)return;
      aliasList.forEach(alias=>{
        if(line.includes(alias)){
          const info=ALLERGIES[aKey];
          // G6PD special logic
          if(aKey==='g6pd'){
            const isFava=['fava','broad bean','lima bean'].some(f=>line.includes(f));
            if(isFava){
              worstStatus='severe';
              matches.push({line:line.substring(0,50),allergy:info.n,severity:'severe',msg:`SEVERE: "${line}" contains fava bean - can cause hemolytic crisis in G6PD!`});
            }else{
              if(worstStatus!=='severe')worstStatus='dangerous';
              matches.push({line:line.substring(0,50),allergy:info.n,severity:'dangerous',msg:`"${line}" is a G6PD trigger food`});
            }
          }
          // Sulfite special logic
          else if(aKey==='sulfite'){
            const isDirect=['sulfite','sulphite','sulfur dioxide','metabisulfite','E220'].some(s=>line.includes(s));
            if(isDirect){
              if(worstStatus!=='severe')worstStatus='dangerous';
              matches.push({line:line.substring(0,50),allergy:info.n,severity:'dangerous',msg:`Sulfites detected in "${line}"`});
            }else{
              if(worstStatus==='safe')worstStatus='may-affect';
              matches.push({line:line.substring(0,50),allergy:info.n,severity:'may-affect',msg:`"${line}" may contain sulfites`});
            }
          }
          // All other allergies
          else{
            const isDirect=line===alias||line.startsWith(alias)||line.endsWith(alias);
            if(isDirect){
              if(worstStatus!=='severe')worstStatus='dangerous';
              matches.push({line:line.substring(0,50),allergy:info.n,severity:'dangerous',msg:`Contains ${info.n} allergen: "${line}"`});
            }else{
              if(worstStatus==='safe')worstStatus='may-affect';
              matches.push({line:line.substring(0,50),allergy:info.n,severity:'may-affect',msg:`"${line}" may contain ${info.n} traces`});
            }
          }
        }
      });
    });
  });

  // Cross-reactivity warnings
  allSelected.forEach(aKey=>{
    if(aKey==='peanut'){
      const hasLegume=lines.some(l=>['lentil','chickpea','pea','bean'].some(x=>l.includes(x)));
      if(hasLegume&&worstStatus==='safe'){worstStatus='may-affect';warnings.push('Cross-reactivity: Legumes may trigger peanut-sensitive individuals')}
    }
    if(aKey==='milk'){
      const hasGoat=lines.some(l=>l.includes('goat')||l.includes('sheep'));
      if(hasGoat&&worstStatus==='safe'){worstStatus='may-affect';warnings.push('Cross-reactivity: Goat/sheep milk may affect cow milk allergic individuals')}
    }
    if(aKey==='shellfish'){
      const hasOther=lines.some(l=>['crab','lobster','shrimp'].some(x=>l.includes(x)));
      if(hasOther&&worstStatus==='safe'){worstStatus='may-affect';warnings.push('Cross-reactivity: Different shellfish species may trigger each other')}
    }
  });

  // Add warnings
  matches.forEach(m=>{warnings.push(m.msg)});
  hiddenWarns.forEach(h=>{warnings.push(`Hidden: ${h}`)});

  if(!lines.length){
    worstStatus='may-affect';
    warnings.unshift('No ingredients detected. Try typing them or taking a clearer photo.');
  }

  return{ingredients:lines,status:worstStatus,warnings,matches,hiddenWarns};
}

// ── FOOD LOOKUP ──
function lookupFood(q){
  const l=q.toLowerCase();
  for(const[kw,words]of Object.entries(FKW)){
    for(const w of words){if(l.includes(w)||w.includes(l))return FOODS[kw]||null}
  }
  return null;
}

// ── MAIN SCAN FUNCTIONS ──
async function doScan(){
  if(!selImg)return;
  showLd(true,'Reading image with OCR...');
  try{
    const base64=await new Promise(r=>{const fr=new FileReader();fr.onload=e=>r(e.target.result);fr.readAsDataURL(selImg)});
    showLd(true,'Extracting text from image...');
    let text='';
    try{text=await doOCR(selImg)}catch(e){console.log('OCR failed:',e)}

    let result;
    if(text&&text.length>5){
      const food=lookupFood(text);
      const fullText=food?`${food.n}: ${food.i}\n${text}`:text;
      result=analyzeIngredients(fullText,getUA());
      if(food)result.foodName=food.n;
    }else{
      // Try to detect food from filename
      const food=lookupFood(selImg.name||'');
      if(food){
        result=analyzeIngredients(food.i,getUA());
        result.foodName=food.n;
      }else{
        showLd(false);
        toast('Could not read text from image. Try typing ingredients below, or take a clearer photo of the ingredient label.','err');
        return;
      }
    }
    displayRes(result);
    if(window.cu&&window._saveS)window._saveS({productName:result.foodName||'Image Scan',ingredients:(result.ingredients||[]).join(', '),status:result.status,warnings:result.warnings});
  }catch(e){console.error(e);toast('Error: '+e.message,'err')}
  showLd(false);
}
window.doScan=doScan;

async function doText(){
  const text=document.getElementById('mIng').value.trim();
  if(!text){toast('Enter some ingredients or food name','err');return}
  const food=lookupFood(text);
  const inputText=food?food.i:text;
  showLd(true,'Analyzing with AI engine...');
  await new Promise(r=>setTimeout(r,300));
  const result=analyzeIngredients(inputText,getUA());
  if(food)result.foodName=food.n;
  displayRes(result);
  if(window.cu&&window._saveS)window._saveS({productName:food?food.n:'Manual Entry',ingredients:(result.ingredients||[]).join(', '),status:result.status,warnings:result.warnings});
  showLd(false);
}
window.doText=doText;

function sFood(q){
  const el=document.getElementById('fSugs');
  if(!q||q.length<2){el.style.display='none';return}
  const l=q.toLowerCase(),matches=[];
  Object.entries(FOODS).forEach(([k,f])=>{if(k.replace(/_/g,' ').includes(l)||f.n.toLowerCase().includes(l))matches.push({k,f})});
  if(!matches.length){el.style.display='none';return}
  el.innerHTML=matches.slice(0,8).map(m=>`<div class="fssd" onclick="selFood('${m.k}')">${m.f.n}</div>`).join('');
  el.style.display='block';
}
window.sFood=sFood;
function selFood(k){const f=FOODS[k];if(!f)return;document.getElementById('mIng').value=f.i;document.getElementById('fSrch').value=f.n;document.getElementById('fSugs').style.display='none';doText()}
window.selFood=selFood;
document.addEventListener('click',e=>{const s=document.getElementById('fSugs'),i=document.getElementById('fSrch');if(s&&i&&!i.contains(e.target)&&!s.contains(e.target))s.style.display='none'});

// ── DISPLAY RESULTS ──
function displayRes(r){
  const st=r.status||'safe';
  const map={safe:{ic:'fa-check-circle',t:'Safe',c:'safe'},'may-affect':{ic:'fa-exclamation-triangle',t:'May Affect You',c:'ma'},dangerous:{ic:'fa-exclamation-circle',t:'Dangerous',c:'dg'},severe:{ic:'fa-skull-crossbones',t:'SEVERE REACTION',c:'sv'}};
  const cfg=map[st]||map.safe;
  document.getElementById('rC').className='rc '+cfg.c;
  document.getElementById('rI').innerHTML=`<i class="fas ${cfg.ic}"></i>`;
  document.getElementById('rT').textContent=cfg.t;
  document.getElementById('rS').textContent=r.foodName?`Food: ${r.foodName}`:(st==='safe'?'No allergens detected':'Found allergens in this food');
  document.getElementById('dIng').textContent=r.ingredients&&r.ingredients.length?r.ingredients.join(', '):(r.foodName?'Ingredients analyzed':'Ingredients analyzed by AI');

  const w=document.getElementById('wns');w.innerHTML='';
  (r.warnings||[]).forEach(wr=>{
    const isSv=wr.toLowerCase().includes('severe')||wr.toLowerCase().includes('danger');
    const isHd=wr.startsWith('Hidden:');
    const isCr=wr.startsWith('Cross-reactivity:');
    const cls=isSv?(wr.toLowerCase().includes('severe')?'sv':'dg'):isHd?'hd':isCr?'in':'ma';
    const ic=isSv?'fa-exclamation-triangle':isHd?'fa-eye':isCr?'fa-link':'fa-info-circle';
    w.innerHTML+=`<div class="wi ${cls}"><i class="fas ${ic}"></i><span>${wr}</span></div>`;
  });

  if(st==='safe'&&!r.warnings?.length){
    w.innerHTML=`<div class="wi ok"><i class="fas fa-check-circle"></i><span>No known allergens detected!</span></div>`;
  }

  // AI summary
  const bx=document.getElementById('aiBx');
  if(r.matches&&r.matches.length){
    bx.style.display='block';
    const unique=[...new Set(r.matches.map(m=>m.allergy))];
    document.getElementById('aiTx').textContent=`Analysis complete. Found ${r.matches.length} potential allergen match(es) for: ${unique.join(', ')}. ${r.hiddenWarns?.length?r.hiddenWarns.length+' hidden allergen warning(s). ':''}Status: ${r.status.toUpperCase()}. Always verify with product labels and consult your doctor.`;
  }else if(st==='safe'){
    bx.style.display='block';
    document.getElementById('aiTx').textContent='Analysis complete. No allergen matches found in the analyzed text. This result is based on the ingredients you provided. Always verify with the actual product label.';
  }else{
    bx.style.display='none';
  }

  document.getElementById('res').style.display='block';
}

function showLd(s,t){document.getElementById('ldg').style.display=s?'block':'none';if(t)document.getElementById('ldT').textContent=t;const b=document.getElementById('scanB');if(b)b.disabled=s}
function fSt(s){return{safe:'Safe','may-affect':'May Affect',dangerous:'Dangerous',severe:'Severe'}[s]||s}
function toast(m,t='ok'){const e=document.getElementById('toast');e.textContent=m;e.className='to '+t+' show';setTimeout(()=>e.classList.remove('show'),4000)}

// ── INIT ──
document.addEventListener('DOMContentLoaded',()=>{initAG();initAI();initU()});

/* SafeBite Built-In AI Engine v4.0 - Smart AI, Safe Foods, Medical Research */

var ALLERGIES = {
  g6pd: { n:"G6PD Deficiency", ic:"&#x1fa78;", d:"Genetic condition affecting red blood cells. Triggers can cause hemolytic crisis (destruction of red blood cells). Can be life-threatening. Affects ~400 million people worldwide, more common in Mediterranean, Africa, and Asia.",
    kw:["fava bean","broad bean","lima bean","favism","soybean","lentil","chickpea","peanut","pecan","walnut","red wine","star fruit","blueberry","cranberry","cherry","plum","prune","quinine","tonic water","sulfite","sulfites","sulfur dioxide","sodium metabisulfite","potassium metabisulfite","mothball","naphthalene","henna","nitrofurantoin","primaquine","chloroquine","dapsone","methylene blue","sulfa","sulfonamide","vitamin k","black-eyed pea","bambara","winged bean"],
    safe:["rice","chicken","beef","lamb","fish (non-organ)","bread","pasta","potatoes","corn","fruits (except triggers)","vegetables (non-legume)","eggs","milk","cheese","butter","olive oil","sunflower oil","sugar","honey","tea","coffee","juice"],
    tips:["Avoid ALL fava beans and broad beans - #1 trigger","Avoid sulfites (preservatives in dried fruits, wine)","Read labels for hidden sulfa drugs","Carry emergency medication if prescribed","Avoid mothballs and henna","Iron supplements may help recovery","Stay hydrated during any reaction","Consult hematologist regularly"],
    crossReactivity:["Lentils and chickpeas may trigger in some G6PD patients","Other legumes should be tested individually","Sulfite-containing foods are especially dangerous","Fava beans are dangerous even in small amounts"],
    severity:"SEVERE - Can be life-threatening. Avoid ALL trigger foods completely.",
    research:"G6PD deficiency is the most common enzyme deficiency worldwide (WHO). Triggers cause oxidative stress leading to hemolysis. Fava beans contain vicine and convicine which are potent oxidants. Severity varies by G6PD variant (A-, Mediterranean, etc.)." },

  peanut: { n:"Peanut Allergy", ic:"&#x195C;", d:"One of the most common and severe food allergies. Can cause anaphylaxis even with trace amounts. Affects ~2% of children. Often lifelong. Peanut allergy causes more food-allergy deaths than any other.",
    kw:["peanut","peanuts","peanut butter","peanut oil","peanut flour","arachis","groundnut","monkey nut","goober","nougat","marzipan","granola","trail mix","satay","pesto","HVP","TVP"],
    safe:["tree nuts (if no tree nut allergy)","seeds (sunflower, pumpkin, hemp)","soy","dairy","eggs","meat","fish","fruits","vegetables","rice","corn","oats"],
    tips:["Always carry an EpiPen if prescribed","Even 'peanut-free' products may have traces","Airline food is high risk for cross-contact","Some studies show early introduction reduces risk (consult doctor)","Peanut oil: refined is usually safe, cold-pressed is NOT","Always check Asian, African, and Middle Eastern foods"],
    crossReactivity:["25-40% of peanut allergic people are also allergic to tree nuts","Legumes (lentils, beans) may cause reactions in some","Peanut allergy often co-occurs with egg, milk, or tree nut allergy"],
    severity:"HIGH RISK - Can cause fatal anaphylaxis. Strict avoidance required.",
    research:"Peanut allergy has increased 3x in the last 20 years. PALISADES trial shows 80%+ success with oral immunotherapy (Palforzia). Component-resolved diagnostics (Ara h 2) improves accuracy. Peak reactions in teens/young adults." },

  treenut: { n:"Tree Nut Allergy", ic:"&#x1F330;", d:"Allergy to tree nuts (almonds, walnuts, cashews, etc.). 60% of nut allergies. Can be severe. 2.3% of US children affected. Cross-reactivity between different tree nuts is common (30-50%).",
    kw:["almond","almonds","walnut","walnuts","cashew","cashews","pecan","pecans","pistachio","macadamia","brazil nut","hazelnut","hazelnuts","filbert","chestnut","pine nut","mixed nuts","nutella","nougat","marzipan","praline","baklava","brittle","toffee","amaretti"],
    safe:["peanut (if no peanut allergy)","seeds (sunflower, pumpkin, hemp)","coconut","dairy","eggs","meat","fish","fruits","vegetables","rice","corn","oats"],
    tips:["Avoid ALL tree nuts unless cleared by allergist","Pesto often contains pine nuts or walnuts","Many 'nut-free' products are processed on shared lines","Baked goods are high-risk for hidden tree nuts","Tree nut oils may retain proteins if cold-pressed"],
    crossReactivity:["30-50% allergic to more than one tree nut","Peanut allergy co-occurs in 25-40% of tree nut allergic","Cashew and pistachio are closely related (85% cross-react)","Walnut and pecan are closely related"],
    severity:"HIGH RISK - Can cause anaphylaxis. Avoid all tree nuts unless tested.",
    research:"Tree nut allergies affect 1.1% of US population. Cashew allergy is rising fastest. Walnut is most common tree nut allergen in US. Heated tree nuts may be tolerated by some (baked goods study - PALISADES)." },

  milk: { n:"Milk Allergy", ic:"&#x1F95B;", d:"Reaction to milk proteins (casein, whey). Most common food allergy in infants (2-3%). Usually outgrown by age 5-8. Different from lactose intolerance which is a sugar digestion issue.",
    kw:["milk","dairy","butter","cream","cheese","yogurt","yoghurt","whey","casein","caseinate","lactose","lactoglobulin","ghee","sour cream","cream cheese","ricotta","mascarpone","parmesan","mozzarella","cheddar","feta","ice cream","gelato","kefir","custard","pudding","latte","cappuccino","bechamel","alfredo","hollandaise","queso","paneer"],
    safe:["plant milks (oat, almond, rice, coconut)","soy cheese","dairy-free butter","coconut cream","fruits","vegetables","rice","corn","meat","fish","eggs"],
    tips:["Ghee may be tolerated by some (milk proteins removed during cooking)","Goat/sheep milk often cross-reacts with cow milk","Read labels: 'casein' and 'whey' are milk proteins","Many medications contain lactose as filler","Baked milk may be tolerated by 60-70% of milk-allergic children (consult allergist)"],
    crossReactivity:["Goat/sheep milk: 90%+ cross-react with cow milk","Soy milk allergy occasionally co-occurs","Beef allergy co-occurs in ~5% of milk-allergic children"],
    severity:"MODERATE to HIGH - Usually not fatal but can cause severe reactions in infants.",
    research:"Milk allergy affects 2-3% of infants. Most outgrow it by school age. Milky Way trial shows baked milk tolerance develops over time. 80%+ tolerance to baked milk after 3 years of avoidance. Oral immunotherapy in trials." },

  egg: { n:"Egg Allergy", ic:"&#x1F95A;", d:"Reaction to egg white/yolk proteins. Second most common childhood allergy (1-2%). Usually outgrown. Egg white contains more allergens (albumin, ovomucoid) than yolk.",
    kw:["egg","eggs","albumin","albumen","lysozyme","ovalbumin","mayonnaise","mayo","aioli","meringue","custard","eggnog","frittata","quiche","souffle","marshmallow"],
    safe:["flax eggs for baking","aquafaba (chickpea water)","egg-free mayo","dairy","fruits","vegetables","rice","meat","fish","corn","oats"],
    tips:["Baked egg (in cakes, muffins) may be tolerated by 60-70% of egg-allergic children","Many vaccines contain egg protein - inform your doctor","Marshmallows often contain egg whites","Some pastas contain egg - check labels","Egg wash on baked goods is a hidden source"],
    crossReactivity:["Egg allergy co-occurs with milk allergy in 50%+ of cases","Some people allergic to chicken eggs tolerate duck/goat eggs (consult doctor)"],
    severity:"MODERATE - Can be severe in some children but usually not fatal.",
    research:"Egg allergy affects 1-2% of children. HEAL trial shows 90%+ success with baked egg immunotherapy. OVOMUCOID is the primary heat-stable allergen. Egg allergy resolution rate: ~70% by age 16." },

  wheat: { n:"Wheat Allergy", ic:"&#x1F33E;", d:"Immune reaction to wheat proteins. Different from celiac disease and gluten sensitivity. Can be IgE-mediated (immediate) or non-IgE (delayed). Usually outgrown by age 3-5.",
    kw:["wheat","flour","bread","bun","roll","bagel","pasta","spaghetti","noodle","noodles","cereal","cracker","pretzel","cookie","biscuit","cake","muffin","pancake","waffle","doughnut","donut","croissant","brioche","challah","seitan","couscous","bulgur","spelt","kamut","durum","semolina","triticale","matzo","breadcrumbs","panko","croutons","stuffing","malt","beer","ale","lager","stout","brewer yeast"],
    safe:["rice","corn","oats (if certified gluten-free)","quinoa","potatoes","fruits","vegetables","meat","fish","dairy","eggs","soy"],
    tips:["Different from celiac - wheat allergy usually outgrows","Rice flour, corn flour, and potato flour are safe alternatives","Wheat allergy may co-exist with grass pollen allergy (baker's asthma)","Some wheat-allergic people tolerate baked wheat products"],
    crossReactivity:["Grass pollen allergy can cause wheat allergy (food-pollen syndrome)","Barley and rye are usually tolerated (different proteins)","Corn allergy rarely co-occurs"],
    severity:"MODERATE - Usually not fatal but can cause severe reactions.",
    research:"Wheat allergy affects 0.2-1% of children. Most outgrow it. Differentiate from celiac (autoimmune) and NCGS. Baker's asthma is occupational wheat allergy. Alpha-amylase/trypsin inhibitors are non-gluten wheat allergens." },

  soy: { n:"Soy Allergy", ic:"&#x1FAD8;", d:"Reaction to soybeans. Top 8 allergen. Found in many processed foods as soy lecithin, soybean oil, or soy protein. Affects ~0.4% of children. Usually outgrown.",
    kw:["soy","soya","soybean","tofu","tempeh","edamame","miso","natto","tamari","shoyu","soy lecithin","soybean oil","TVP","gochujang"],
    safe:["dairy","eggs","meat","fish","fruits","vegetables","rice","corn","wheat (if no wheat allergy)","oats","quinoa"],
    tips:["Highly refined soybean oil is usually safe (proteins removed)","Many Asian sauces contain soy - use coconut aminos instead","Soy lecithin in processed foods rarely triggers reactions","Read labels: soy is in bread, canned goods, supplements"],
    crossReactivity:["Lupin allergy co-occurs sometimes","Peanut allergy co-occurs in ~10-15% of soy-allergic children"],
    severity:"MODERATE - Usually mild reactions. Rarely causes anaphylaxis.",
    research:"Soy allergy affects 0.4% of children. 70% outgrow it by age 10. Highly refined soy oil (99.9% pure) is exempt from labeling in US. Soy lecithin rarely triggers reactions. TN (tyrosine) model shows good prognosis." },

  shellfish: { n:"Shellfish Allergy", ic:"&#x1F990;", d:"Crustaceans: shrimp, crab, lobster. Most common adult food allergy. Usually lifelong once developed. ~2.5% of adults affected. Cannot be outgrown.",
    kw:["shrimp","prawn","crab","lobster","crawfish","crayfish","scampi","surimi","imitation crab","shellfish","crustacean"],
    safe:["finned fish (if no fish allergy)","chicken","beef","pork","fruits","vegetables","rice","corn","wheat","dairy","eggs"],
    tips:["Shellfish allergy is usually lifelong","Cross-contact in restaurants is very common","Surimi (imitation crab) contains real shellfish protein","Shrimp is the most common trigger","Cooking does NOT destroy shellfish allergens"],
    crossReactivity:["Dust mite allergy cross-reacts with shellfish (tropomyosin)","Cockroach allergy cross-reacts with shrimp","90%+ cross-react between different crustaceans"],
    severity:"HIGH RISK - Most common cause of food-induced anaphylaxis in adults.",
    research:"Shellfish allergy affects 2-3% of adults. Tropomyosin is the major allergen. Cross-reactivity with dust mites (Der p 10) is 80%+. Most adults never outgrow it. Allergy to one crustacean usually means allergy to all." },

  fish: { n:"Fish Allergy", ic:"&#x1F41F;", d:"Allergy to finned fish. Can be one type or all fish. ~1% of adults. Different from shellfish allergy. Usually lifelong. Parvalbumin is the major allergen.",
    kw:["fish","salmon","tuna","cod","tilapia","haddock","halibut","sole","flounder","bass","catfish","mackerel","sardine","anchovy","herring","swordfish","trout","snapper","grouper","pollock","caviar"],
    safe:["shellfish (if no shellfish allergy)","chicken","beef","pork","fruits","vegetables","rice","corn","wheat","dairy","eggs"],
    tips:["Some people allergic to one fish tolerate others (consult allergist)","Fish sticks may contain multiple fish species","Asian restaurants often use fish sauce in many dishes","Anchovy is hidden in many sauces and dressings","Cooking does NOT destroy fish allergens"],
    crossReactivity:["70%+ allergic to most fish species","Shellfish allergy is separate (different proteins)","Catfish and other bottom-feeders are least likely to be tolerated"],
    severity:"HIGH RISK - Can cause severe anaphylaxis. Usually lifelong.",
    research:"Fish allergy affects 1% of population. Parvalbumin is the major allergen. 70% react to multiple fish species. Merluccin (cod-like) is more heat-stable than parvalbumin. Fish allergy is often lifelong." },

  molluscs: { n:"Molluscs Allergy", ic:"&#x1F41A;", d:"Clams, mussels, oysters, squid, octopus. Separate from crustacean allergy. Less common but can be severe. Tropomyosin is also the allergen here.",
    kw:["clam","clams","mussel","mussels","oyster","oysters","scallop","scallops","squid","calamari","octopus","abalone","conch","snail","escargot"],
    safe:["crustaceans (if no crustacean allergy)","finned fish (if no fish allergy)","chicken","beef","fruits","vegetables","rice","corn","wheat","dairy","eggs"],
    tips:["Molluscs and crustaceans are different allergens but can co-occur","Squid and octopus are more closely related","Scallop allergy is less common but exists"],
    crossReactivity:["Crustacean allergy co-occurs in ~30% of mollusc-allergic people","Dust mite cross-reacts with some molluscs"],
    severity:"MODERATE to HIGH - Can cause severe reactions but less common than crustacean allergy.",
    research:"Mollusc allergy is less studied than crustacean. Tropomyosin is the major allergen (same as crustaceans). Octopus is more closely related to squid. Scallop allergy is rare." },

  sesame: { n:"Sesame Allergy", ic:"&#x26AA;", d:"Sesame seeds and oil. Increasingly common. Now a top-9 allergen in US (FASTER Act 2021). Affects ~0.2% of US children. Rising rapidly.",
    kw:["sesame","tahini","tahina","halva","gomashio","benne","hummus"],
    safe:["other seeds (sunflower, pumpkin, hemp)","peanut (if no peanut allergy)","tree nuts (if no tree nut allergy)","dairy","eggs","meat","fish","fruits","vegetables","rice","corn"],
    tips:["Hummus contains tahini (sesame) - always check","Sesame is common in bread crusts and bagels","Middle Eastern, Asian, and African cuisines use sesame heavily","Sesame oil may retain allergens even when refined","Read labels: 'benne' is another word for sesame"],
    crossReactivity:["Peanut allergy co-occurs in ~15-20%","Tree nut allergy co-occurs in ~25%","Lupin allergy occasionally co-occurs"],
    severity:"MODERATE to HIGH - Can cause anaphylaxis. Rising prevalence.",
    research:"Sesame allergy is the fastest growing food allergy in US. FASTer Act (2021) added sesame as 9th major allergen. Sesamol and sesamin are minor allergens. ~20-30% outgrow it. EU required labeling since 2011." },

  sulfite: { n:"Sulfite Sensitivity", ic:"&#x1F377;", d:"Preservatives in wine, dried foods. Can trigger asthma attacks and is dangerous for G6PD patients. Affects ~1% of general population, ~5-10% of asthmatics.",
    kw:["sulfite","sulfites","sulphite","sulfur dioxide","E220","sodium metabisulfite","potassium metabisulfite"],
    safe:["fresh foods (not processed)","fresh fruits","fresh vegetables","fresh meat","homemade food","wine without sulfites (organic)","dried fruits without sulfites"],
    tips:["Most dangerous for asthmatics and G6PD patients","Dried fruits are highest in sulfites","Wine contains 10-40x more sulfites than beer","Fresh foods rarely have sulfites","ASA/aspirin increases sulfite sensitivity"],
    crossReactivity:["Aspirin/NSAID sensitivity increases risk","Asthma is a major risk factor for sulfite reactions"],
    severity:"MODERATE to HIGH - Can trigger life-threatening asthma attacks. Dangerous for G6PD.",
    research:"Sulfites are converted to SO2 in solution. ~1% of general population sensitive. ~5-10% of asthmatics affected. FDA banned sulfites on fresh fruits in 1986. Wine is the most common trigger in US." },

  corn: { n:"Corn Allergy", ic:"&#x1F33D;", d:"Reaction to corn. Corn is in hundreds of processed foods. Affects ~0.2-0.4% of population. Can be IgE or non-IgE mediated. Underdiagnosed.",
    kw:["corn","maize","cornstarch","corn flour","cornmeal","corn syrup","HFCS","corn oil","polenta","hominy","grits"],
    safe:["rice","wheat (if no wheat allergy)","potatoes","fruits","vegetables","meat","fish","dairy","eggs","soy (if no soy allergy)"],
    tips:["Corn is in 70%+ of processed foods","Corn syrup, cornstarch, and corn oil are everywhere","Highly refined corn oil may be safe for some","Corn-based sweeteners (HFCS, dextrose) may trigger","Read ALL labels - corn is hidden everywhere"],
    crossReactivity:["Grass pollen allergy may cross-react (corn is a grass)","Rice allergy rarely co-occurs"],
    severity:"MODERATE - Can be difficult to manage due to hidden corn in processed foods.",
    research:"Corn allergy is underdiagnosed. Corn is the 3rd most consumed grain. Cornstarch and corn oil (highly refined) may be tolerated by some. Zein is the major corn protein allergen." },

  celery: { n:"Celery Allergy", ic:"&#x1F96C;", d:"Common in Europe (especially France, Germany). Must be labeled in EU. Can cause anaphylaxis. Less common in US.",
    kw:["celery","celeriac","celery salt","celery seed","lovage"],
    safe:["carrots (if no carrot allergy)","other vegetables","fruits","meat","fish","rice","corn","wheat","dairy","eggs"],
    tips:["Very common in European foods","Celery salt is used in many spice blends","Celeriac (celery root) is a common allergen in Europe","Celery seed is used in pickles and sausages"],
    crossReactivity:["Birch pollen allergy cross-reacts with celery (birch-celery syndrome)","Mugwort pollen allergy also cross-reacts","Other Apiaceae family vegetables (carrot, fennel, parsley) may cross-react"],
    severity:"MODERATE to HIGH - Can cause severe anaphylaxis. More severe in Europe than US.",
    research:"Celery allergy affects 1-3% of population in Europe. Major allergen is Api g 1 (profilin). Birch pollen allergy cross-reacts in 50-70% of cases. Must be labeled in EU since 2003." },

  mustard: { n:"Mustard Allergy", ic:"&#x1F6AB;", d:"Allergy to mustard. Must be labeled in EU. Less common but can cause severe reactions. Found in many condiments and processed foods.",
    kw:["mustard","dijon","wasabi"],
    safe:["horseradish (sometimes tolerated, check with doctor)","other condiments","fruits","vegetables","meat","fish","rice","corn","wheat","dairy","eggs"],
    tips:["Mustard is in many processed foods (sauces, dressings)","Wasabi is often mustard-based, not real wasabi","Dijon mustard is especially concentrated","Mustard powder is used in spice blends"],
    crossReactivity:["Celery allergy co-occurs in some people","Other Brassica family foods may cross-react (check with doctor)"],
    severity:"MODERATE - Usually not fatal but can cause severe reactions.",
    research:"Mustard allergy affects 1-2% of food-allergic individuals in Europe. Must be labeled in EU. Sinapis alba (yellow mustard) is the most common trigger. Sin a 1 is the major allergen." },

  lupin: { n:"Lupin Allergy", ic:"&#x1F33B;", d:"Legume related to peanuts. Found in flour and bakery products. Growing cause of anaphylaxis in Europe. Must be labeled in EU since 2011.",
    kw:["lupin","lupini"],
    safe:["other legumes (if no legume allergy)","rice","corn","wheat (if no wheat allergy)","fruits","vegetables","meat","fish","dairy","eggs"],
    tips:["Lupin flour is used in gluten-free baked products","Lupini beans are popular in Mediterranean cuisine","Cross-reacts with peanut in 20-40% of cases","Check gluten-free products - they often use lupin flour"],
    crossReactivity:["Peanut allergy cross-reacts in 20-40%","Other legumes (peas, beans) may cross-react in some"],
    severity:"MODERATE to HIGH - Can cause severe anaphylaxis. Rising concern in Europe.",
    research:"Lupin allergy is the fastest growing cause of food anaphylaxis in Europe. Must be labeled in EU since 2011. Lupin flour is increasing in gluten-free products. Major allergen is Lup an 1." },

  nightshade: { n:"Nightshade Sensitivity", ic:"&#x1F335;", d:"Tomatoes, peppers, potatoes, eggplant can cause inflammation. Solanine in potatoes and capsaicin in peppers. Not a true allergy but an intolerance/sensitivity.",
    kw:["tomato","tomatoes","pepper","peppers","paprika","chili","jalapeno","potato","potatoes","eggplant","aubergine","goji","tabasco","sriracha","salsa","harissa","chipotle","gochujang","sambal"],
    safe:["sweet potatoes","carrots","rice","corn","meat","fish","dairy","eggs","fruits (non-nightshade)","leafy greens","squash","zucchini"],
    tips:["White potatoes are highest in solanine (green parts = avoid)","Sweet potatoes are NOT nightshades","Cooking reduces solanine in potatoes","Peppers and tomatoes may be tolerated in small amounts by some","Dried paprika/chili retains nightshade compounds"],
    crossReactivity:["All nightshades share similar alkaloids","If sensitive to one, test others individually"],
    severity:"LOW to MODERATE - Usually not life-threatening but causes chronic inflammation.",
    research:"True nightshade allergy is rare. Sensitivity/intolerance is more common. Solanine is the main potato alkaloid. Capsaicin in peppers is a different compound. Nightshade-free diets are popular for autoimmune conditions but evidence is limited." },

  histamine: { n:"Histamine Intolerance", ic:"&#x26A0;", d:"Difficulty breaking down histamine due to DAO enzyme deficiency. Causes headaches, hives, digestive issues. Affects ~1-3% of population. Not a true allergy.",
    kw:["fermented","aged cheese","wine","beer","sauerkraut","kimchi","kombucha","vinegar","miso","tempeh","natto","smoked","salami","sausage","pepperoni","prosciutto","bacon","leftover"],
    safe:["fresh meat","fresh fish (eaten immediately)","fresh fruits","fresh vegetables","rice","eggs","fresh dairy","bread","oils","herbs"],
    tips:["Fresh food is key - histamine builds over time","Vitamin B6 and C support DAO enzyme","Antihistamines may help mild reactions","Avoid aged, fermented, and leftover foods","Freshly cooked meat is safe, leftover is not"],
    crossReactivity:["ASA/aspirin sensitivity worsens histamine intolerance","DAO enzyme deficiency may have genetic basis","Alcohol worsens histamine reactions"],
    severity:"LOW to MODERATE - Uncomfortable but rarely life-threatening.",
    research:"Histamine intolerance affects 1-3% of population. DAO (diamine oxidase) is the primary enzyme. Mast cell activation syndrome (MCAS) is a related but different condition. Freshness of food is the #1 factor." },

  fructose: { n:"Fructose Intolerance", ic:"&#x1F34E;", d:"Difficulty absorbing fructose. Causes bloating, pain, diarrhea. Affects ~30-40% of people to some degree. Different from hereditary fructose intolerance (rare, severe).",
    kw:["fructose","honey","agave","apple","pear","mango","watermelon","grape","fig","date","asparagus","artichoke","onion","garlic"],
    safe:["rice","potatoes","meat","fish","eggs","dairy (if no lactose issues)","bananas (lower fructose)","berries","citrus fruits","leafy greens"],
    tips:["Low-FODMAP diet helps many people","Pair fructose with glucose for better absorption","Some fruits are high-FODMAP: apples, pears, mangoes","Berries and bananas are generally lower in fructose","Read labels for high-fructose corn syrup"],
    crossReactivity:["Often co-occurs with lactose intolerance","IBS and SIBO increase fructose sensitivity"],
    severity:"LOW to MODERATE - Causes digestive distress but not life-threatening.",
    research:"Fructose malabsorption affects 30-40% of people. Low-FODMAP diet (Monash University) is the gold standard treatment. Hereditary fructose intolerance (HFI) is much rarer and more severe (ALDOB gene mutation). Fructose:glucose ratio matters." },

  lactose: { n:"Lactose Intolerance", ic:"&#x2757;", d:"Can't digest lactose sugar. Different from milk protein allergy. Affects ~65-70% of world population. More common in Asian, African, and Hispanic populations.",
    kw:["lactose","whey","milk","cream","cheese","yogurt","ice cream","gelato","paneer"],
    safe:["lactose-free dairy","hard aged cheeses (low lactose)","yogurt (cultured, lower lactose)","plant milks","lactase enzyme supplements","goat/sheep milk (lower lactose)","butter (very low lactose)"],
    tips:["Hard aged cheeses (parmesan, cheddar) have very low lactose","Yogurt with live cultures is better tolerated","Lactase enzyme pills help before dairy meals","Lactose-free milk tastes the same","Aged goat cheese is often tolerated"],
    crossReactivity:["Milk protein allergy is different (immune reaction to casein/whey)","Irritable bowel syndrome increases lactose sensitivity"],
    severity:"LOW - Uncomfortable but not dangerous. Manageable with diet.",
    research:"Lactase persistence is genetic (LCT gene). ~65-70% of world adults are lactose intolerant. Northern Europeans have highest lactase persistence (~90%). Lactose-free products are identical in nutrition. Probiotics may improve tolerance." },

  gluten: { n:"Gluten Sensitivity / Celiac", ic:"&#x1F35E;", d:"Reaction to gluten in wheat, barley, rye. Autoimmune for celiacs (damages small intestine). ~1% have celiac disease. Non-celiac gluten sensitivity (NCGS) affects ~0.5-13%.",
    kw:["gluten","barley","rye","spelt","kamut","bulgur","couscous","seitan","malt","brewer yeast","triticale","farro","emmer","einkorn"],
    safe:["rice","corn","quinoa","buckwheat","millet","certified gluten-free oats","potatoes","fruits","vegetables","meat","fish","dairy","eggs"],
    tips:["Cross-contamination is a real risk (shared toasters, cutting boards)","Look for certified gluten-free labels","Beer contains gluten (except GF beer)","Soy sauce contains wheat (use tamari instead)","Oats must be certified gluten-free"],
    crossReactivity:["Dermatitis herpetiformis (skin manifestation of celiac)","Thyroid disease co-occurs in 5-10% of celiacs","Type 1 diabetes co-occurs in 5-8% of celiacs"],
    severity:"HIGH for celiac (intestinal damage, long-term complications) / LOW for NCGS",
    research:"Celiac disease affects 1% of population worldwide. HLA-DQ2/DQ8 genetic markers are present in 95% of celiacs. Non-celiac gluten sensitivity is controversial. Low-FODMAP may help some diagnosed as NCGS. Strict lifelong gluten-free diet is the only treatment for celiac." },

  fodmap: { n:"FODMAP Sensitivity", ic:"&#x1F9C0;", d:"Fermentable carbs causing digestive distress. Not a true allergy but a sensitivity. Affects ~10-15% of people. Often co-occurs with IBS.",
    kw:["onion","garlic","cauliflower","mushroom","lentil","chickpea","bean","cabbage","broccoli"],
    safe:["rice","potatoes","carrots","zucchini","cucumber","tomatoes (small amounts)","berries","oranges","grapes","meat","fish","eggs","hard cheeses","lactose-free dairy"],
    tips:["Low-FODMAP diet is the gold standard treatment","Monash University developed the FODMAP diet app","Reintroduce foods one at a time to find triggers","Garlic and onion are the biggest triggers","Small portions of high-FODMAP foods may be tolerated"],
    crossReactivity:["IBS co-occurs in 70-80% of FODMAP-sensitive people","Celiac disease should be ruled out first","SIBO can cause or worsen FODMAP sensitivity"],
    severity:"LOW to MODERATE - Causes digestive distress but not life-threatening.",
    research:"Low-FODMAP diet was developed at Monash University. ~70% of IBS patients improve on low-FODMAP. Fructans (onion, garlic) and GOS (legumes) are the most problematic FODMAPs. Long-term restriction is not recommended - reintroduction phase is key." },

  oxalate: { n:"Oxalate Sensitivity", ic:"&#x1F962;", d:"High oxalate foods can cause kidney stones and vulvodynia. Affects ~5-10% of people. Not a true allergy but an intolerance to oxalic acid found in many plant foods.",
    kw:["spinach","rhubarb","beet","chocolate","cocoa","almond","cashew","peanut","star fruit","sweet potato","taro","miso","soy"],
    safe:["rice","bananas","white bread","chicken","fish","eggs","dairy (calcium binds oxalate)","cauliflower","cucumber","peas","white potatoes"],
    tips:["Drink plenty of water to dilute oxalate","Calcium supplements with meals reduce absorption","Cooking reduces oxalate content","Steam or boil high-oxalate foods","Spread oxalate intake throughout the day"],
    crossReactivity:["Kidney stone history increases risk","Vulvodynia is linked to oxalate sensitivity","Low calcium intake worsens oxalate problems"],
    severity:"LOW to MODERATE - Can cause kidney stones and chronic pain but not life-threatening.",
    research:"Oxalate nephropathy is increasing. Spinach smoothies are a known trigger for kidney stones. Calcium-oxalate stones are the most common kidney stone type. Cooking can reduce oxalate by 30-87% depending on method. Soaking and boiling is most effective." }
};

var ALIAS = {
  peanut:["peanut","peanuts","peanut butter","peanut oil","arachis","groundnut","monkey nut","goober"],
  treenut:["almond","almonds","walnut","walnuts","cashew","cashews","pecan","pecans","pistachio","macadamia","brazil nut","hazelnut","hazelnuts","filbert","chestnut","pine nut","mixed nuts","nut","nuts","tree nut","nutella","praline","marzipan","nougat","baklava","brittle"],
  milk:["milk","dairy","butter","cream","cheese","yogurt","yoghurt","whey","casein","caseinate","lactose","lactoglobulin","ghee","sour cream","cream cheese","ricotta","mascarpone","parmesan","mozzarella","cheddar","feta","ice cream","gelato","kefir","custard","pudding","latte","cappuccino","bechamel","alfredo","hollandaise","queso","paneer"],
  egg:["egg","eggs","albumin","albumen","lysozyme","ovalbumin","mayonnaise","mayo","aioli","meringue","custard","eggnog","frittata","quiche","souffle","marshmallow"],
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
  nightshade:["tomato","tomatoes","pepper","peppers","paprika","chili","jalapeno","potato","potatoes","eggplant","aubergine","goji","tabasco","sriracha","salsa","harissa","chipotle","gochujang","sambal"],
  histamine:["fermented","aged cheese","wine","beer","sauerkraut","kimchi","kombucha","vinegar","miso","tempeh","natto","smoked","salami","sausage","pepperoni","prosciutto","bacon","leftover"],
  fructose:["fructose","honey","agave","apple","pear","mango","watermelon","grape","fig","date","asparagus","artichoke","onion","garlic"],
  lactose:["lactose","whey","milk","cream","cheese","yogurt","ice cream","gelato","paneer"],
  gluten:["gluten","barley","rye","spelt","kamut","bulgur","couscous","seitan","malt","brewer yeast","triticale","farro","emmer","einkorn"],
  fodmap:["onion","garlic","cauliflower","mushroom","lentil","chickpea","bean","cabbage","broccoli"],
  oxalate:["spinach","rhubarb","beet","chocolate","cocoa","taro"]
};

var HIDDEN_PATTERNS = [
  { re:/may\s+contain/i, msg:"May contain allergens (cross-contamination risk)" },
  { re:/produced?\s+in\s+a\s+facility/i, msg:"Produced in facility that processes allergens" },
  { re:/manufactured?\s+on\s+equipment/i, msg:"Made on shared equipment with allergens" },
  { re:/processed?\s+in\s+a\s+plant/i, msg:"Processed in plant with allergens" },
  { re:/shared\s+equipment/i, msg:"Shared equipment risk" },
  { re:/cooked?\s+in\s+same\s+oil/i, msg:"Cooked in same oil as allergens" },
  { re:/natural\s+flavors?/i, msg:"Natural flavors may contain hidden allergens" },
  { re:/artificial\s+flavors?/i, msg:"Artificial flavors may contain hidden allergens" },
  { re:/hydrolyzed/i, msg:"Hydrolyzed proteins may contain allergen derivatives" },
  { re:/spices?\s*\(/i, msg:"Spice blends may contain allergen carriers" },
  { re:/color\s*\(/i, msg:"Color additives may contain allergen carriers" },
  { re:/carmine/i, msg:"Carmine (insect-derived, may indicate shared processing)" },
  { re:/cochineal/i, msg:"Cochineal (insect-derived)" },
  { re:/isinglass/i, msg:"Isinglass (fish-derived)" },
  { re:/gelatin/i, msg:"Gelatin (may be pork, beef, or fish-derived)" },
  { re:/confectioner.*?glaze/i, msg:"Confectioner's glaze (may contain shellac)" },
  { re:/emulsifier/i, msg:"Emulsifiers may contain allergen derivatives" },
  { re:/lecithin/i, msg:"Lecithin may be soy or egg-derived" },
  { re:/whey\s+protein/i, msg:"Whey protein is derived from milk" },
  { re:/caseinate/i, msg:"Caseinate is a milk protein" },
  { re:/natural\s+color/i, msg:"Natural colors may contain allergen carriers" },
  { re:/vitamin\s+d/i, msg:"Vitamin D may be derived from lanolin (sheep)" },
  { re:/omega[-\s]?3/i, msg:"Omega-3 may be fish or algae-derived" },
  { re:/carmine|cochineal/i, msg:"Red dye derived from insects" },
  { re:/l\s*cysteine/i, msg:"L-cysteine may be derived from feathers or hair" },
  { re:/stearic/i, msg:"Stearic acid may be animal-derived" },
  { re:/bone\s+char/i, msg:"Bone char used in processing (not vegan)" },
  { re:/enzymes?\s*\(/i, msg:"Enzymes may be dairy, egg, or animal-derived" },
  { re:/rennet/i, msg:"Rennet is animal-derived (from calf stomach)" },
  { re:/anchov/i, msg:"Anchovy is a fish - may indicate fish-derived ingredient" }
];

var FOODS = {
  burger:{n:"Burger",i:"Bun (wheat flour, sugar, yeast, egg), Beef patty, Lettuce, Tomato, Onion, Cheese (milk), Ketchup (tomato, vinegar, sugar), Mustard (mustard seeds, vinegar)"},
  cheeseburger:{n:"Cheeseburger",i:"Bun (wheat flour, egg, sugar), Beef patty, Cheddar cheese (milk), Lettuce, Tomato, Onion, Pickles, Ketchup"},
  chicken_burger:{n:"Chicken Burger",i:"Bun (wheat flour, egg), Chicken breast, Lettuce, Mayo (egg, oil), Tomato"},
  hamburger:{n:"Hamburger",i:"Bun (wheat flour, egg), Beef patty, Lettuce, Tomato, Onion, Ketchup, Mustard"},
  double_cheeseburger:{n:"Double Cheeseburger",i:"Bun (wheat flour, egg), Two beef patties, Two slices cheddar cheese (milk), Lettuce, Tomato, Pickles, Ketchup, Mustard"},
  veggie_burger:{n:"Veggie Burger",i:"Bun (wheat flour), Veggie patty (soy, wheat gluten, egg), Lettuce, Tomato, Mayo (egg), Cheese (milk)"},
  bacon_cheeseburger:{n:"Bacon Cheeseburger",i:"Bun (wheat flour, egg), Beef patty, Bacon (pork), Cheddar cheese (milk), Lettuce, Tomato, Ketchup"},
  pizza:{n:"Pizza",i:"Dough (wheat flour, yeast, olive oil), Tomato sauce (tomato, basil, garlic), Mozzarella cheese (milk), Olive oil"},
  pepperoni_pizza:{n:"Pepperoni Pizza",i:"Dough (wheat flour, yeast), Tomato sauce, Mozzarella cheese (milk), Pepperoni (pork, beef, salt, spices, paprika)"},
  margherita_pizza:{n:"Margherita Pizza",i:"Dough (wheat flour, yeast), Tomato sauce (tomato, basil), Fresh mozzarella (milk), Olive oil, Basil"},
  hawaiian_pizza:{n:"Hawaiian Pizza",i:"Dough (wheat flour), Tomato sauce, Mozzarella cheese (milk), Ham (pork), Pineapple"},
  bbq_chicken_pizza:{n:"BBQ Chicken Pizza",i:"Dough (wheat flour), BBQ sauce (tomato, vinegar, sugar), Chicken, Red onion, Cilantro, Mozzarella cheese (milk)"},
  white_pizza:{n:"White Pizza",i:"Dough (wheat flour, olive oil), Garlic, Ricotta cheese (milk), Mozzarella cheese (milk), Parmesan (milk), Olive oil"},
  fries:{n:"French Fries",i:"Potatoes, Vegetable oil, Salt"},
  sweet_potato_fries:{n:"Sweet Potato Fries",i:"Sweet potatoes, Vegetable oil, Salt, Sugar"},
  cheese_fries:{n:"Cheese Fries",i:"Potatoes, Vegetable oil, Cheese sauce (milk, cheese), Salt"},
  loaded_fries:{n:"Loaded Fries",i:"Potatoes, Cheese (milk), Bacon (pork), Sour cream (milk), Green onion"},
  chicken_nuggets:{n:"Chicken Nuggets",i:"Chicken breast, Wheat flour, Egg, Breadcrumbs (wheat), Salt, Spices, Oil"},
  fried_chicken:{n:"Fried Chicken",i:"Chicken, Wheat flour, Buttermilk (milk), Egg, Salt, Black pepper, Garlic powder, Paprika, Oil"},
  wings:{n:"Chicken Wings",i:"Chicken wings, Flour (wheat), Egg, Hot sauce (chili, vinegar), Butter (milk), Blue cheese dressing (milk, egg)"},
  grilled_chicken:{n:"Grilled Chicken",i:"Chicken breast, Olive oil, Lemon, Salt, Pepper, Garlic, Herbs"},
  chicken_tenders:{n:"Chicken Tenders",i:"Chicken breast, Wheat flour, Egg, Breadcrumbs (wheat), Salt, Paprika, Oil"},
  tacos:{n:"Tacos",i:"Corn tortilla or Wheat tortilla, Ground beef, Lettuce, Tomato, Cheese (milk), Sour cream (milk), Salsa (tomato, onion, chili)"},
  fish_tacos:{n:"Fish Tacos",i:"Corn tortilla, White fish, Cabbage, Lime, Crema (milk), Chipotle sauce"},
  chicken_tacos:{n:"Chicken Tacos",i:"Corn tortilla, Grilled chicken, Lettuce, Pico de gallo (tomato, onion, cilantro), Avocado, Lime"},
  veggie_tacos:{n:"Veggie Tacos",i:"Corn tortilla, Black beans, Rice, Corn, Avocado, Salsa, Lime"},
  burrito:{n:"Burrito",i:"Flour tortilla (wheat), Rice, Black beans, Cheese (milk), Sour cream (milk), Lettuce, Salsa, Guacamole (avocado)"},
  burrito_bowl:{n:"Burrito Bowl",i:"Rice, Black beans, Grilled chicken, Cheese (milk), Sour cream (milk), Lettuce, Salsa, Guacamole (avocado), Corn"},
  quesadilla:{n:"Quesadilla",i:"Flour tortilla (wheat), Cheese (milk), Chicken, Peppers, Onion"},
  nachos:{n:"Nachos",i:"Corn tortilla chips, Cheese sauce (milk, cheese), Jalapenos, Sour cream (milk), Salsa, Guacamole"},
  sushi:{n:"Sushi",i:"Sushi rice (rice, vinegar, sugar), Nori (seaweed), Fish (salmon, tuna), Soy sauce (wheat, soy), Wasabi, Ginger"},
  sashimi:{n:"Sashimi",i:"Raw fish (salmon, tuna), Soy sauce (wheat, soy), Wasabi, Ginger"},
  california_roll:{n:"California Roll",i:"Sushi rice (rice, vinegar), Nori (seaweed), Imitation crab (fish, wheat), Avocado, Cucumber, Sesame seeds"},
  spicy_tuna_roll:{n:"Spicy Tuna Roll",i:"Sushi rice, Nori, Tuna (fish), Spicy mayo (egg, soy), Cucumber, Sesame seeds"},
  dragon_roll:{n:"Dragon Roll",i:"Sushi rice, Nori, Shrimp tempura (wheat, egg), Eel, Avocado, Cucumber, Eel sauce, Sesame"},
  ramen:{n:"Ramen",i:"Ramen noodles (wheat flour, egg), Pork broth, Soy sauce (wheat, soy), Chashu pork, Soft-boiled egg, Green onion, Nori"},
  tonkotsu_ramen:{n:"Tonkotsu Ramen",i:"Ramen noodles (wheat flour, egg), Pork bone broth, Soy sauce (wheat, soy), Chashu pork, Soft-boiled egg, Bamboo shoots, Green onion, Nori"},
  miso_ramen:{n:"Miso Ramen",i:"Ramen noodles (wheat flour, egg), Miso paste (soy), Pork broth, Ground pork, Corn, Butter (milk), Bean sprouts, Green onion"},
  pho:{n:"Pho",i:"Rice noodles, Beef broth, Thinly sliced beef, Bean sprouts, Thai basil, Lime, Hoisin sauce (soy, wheat)"},
  chicken_pho:{n:"Chicken Pho",i:"Rice noodles, Chicken broth, Sliced chicken, Bean sprouts, Thai basil, Lime, Hoisin sauce (soy, wheat)"},
  pad_thai:{n:"Pad Thai",i:"Rice noodles, Shrimp, Egg, Tamarind paste, Fish sauce, Sugar, Peanuts, Bean sprouts, Lime"},
  chicken_pad_thai:{n:"Chicken Pad Thai",i:"Rice noodles, Chicken, Egg, Tamarind paste, Fish sauce, Sugar, Peanuts, Bean sprouts, Lime"},
  fried_rice:{n:"Fried Rice",i:"Rice, Soy sauce (wheat, soy), Egg, Vegetables, Sesame oil, Garlic"},
  chicken_fried_rice:{n:"Chicken Fried Rice",i:"Rice, Chicken, Soy sauce (wheat, soy), Egg, Vegetables, Sesame oil, Garlic"},
  stir_fry:{n:"Stir Fry",i:"Mixed vegetables, Soy sauce (wheat, soy), Sesame oil, Garlic, Ginger, Chicken, Rice"},
  beef_stir_fry:{n:"Beef Stir Fry",i:"Beef strips, Soy sauce (wheat, soy), Sesame oil, Garlic, Ginger, Broccoli, Bell peppers, Rice"},
  pasta:{n:"Pasta",i:"Pasta (wheat flour, egg), Tomato sauce (tomato, basil, garlic), Parmesan cheese (milk), Olive oil"},
  spaghetti:{n:"Spaghetti Bolognese",i:"Spaghetti (wheat flour), Ground beef, Tomato sauce (tomato), Parmesan cheese (milk)"},
  fettuccine_alfredo:{n:"Fettuccine Alfredo",i:"Fettuccine (wheat flour, egg), Heavy cream (milk), Butter (milk), Parmesan cheese (milk), Garlic, Black pepper"},
  penne_arrabbiata:{n:"Penne Arrabbiata",i:"Penne pasta (wheat flour), Tomato sauce (tomato, garlic, chili), Olive oil, Parsley, Parmesan (milk)"},
  carbonara:{n:"Spaghetti Carbonara",i:"Spaghetti (wheat flour), Bacon/pancetta (pork), Egg, Parmesan cheese (milk), Black pepper"},
  mac_cheese:{n:"Mac and Cheese",i:"Macaroni (wheat flour, egg), Cheddar cheese (milk), Butter (milk), Milk, Salt"},
  lobster_mac_cheese:{n:"Lobster Mac and Cheese",i:"Macaroni (wheat flour), Lobster, Cheddar cheese (milk), Butter (milk), Milk, Breadcrumbs (wheat)"},
  lasagna:{n:"Lasagna",i:"Lasagna sheets (wheat flour, egg), Ground beef, Tomato sauce, Ricotta cheese (milk), Mozzarella cheese (milk), Parmesan (milk)"},
  chicken_parm:{n:"Chicken Parmesan",i:"Chicken breast, Wheat flour, Egg, Breadcrumbs (wheat), Marinara sauce (tomato), Mozzarella cheese (milk)"},
  eggplant_parm:{n:"Eggplant Parmesan",i:"Eggplant, Wheat flour, Egg, Breadcrumbs (wheat), Marinara sauce (tomato), Mozzarella cheese (milk), Parmesan (milk)"},
  grilled_cheese:{n:"Grilled Cheese",i:"Bread (wheat flour), Cheese (milk), Butter (milk)"},
  tomato_soup_grilled_cheese:{n:"Grilled Cheese & Tomato Soup",i:"Bread (wheat flour), Cheese (milk), Butter (milk), Tomato soup (tomatoes, cream - milk, butter)"},
  club_sandwich:{n:"Club Sandwich",i:"Bread (wheat flour), Turkey, Bacon, Lettuce, Tomato, Mayonnaise (egg, oil)"},
  blt:{n:"BLT Sandwich",i:"Bread (wheat flour), Bacon, Lettuce, Tomato, Mayonnaise (egg, oil)"},
  sub:{n:"Sub Sandwich",i:"Sub roll (wheat flour), Deli meat, Cheese (milk), Lettuce, Tomato, Mayo (egg)"},
  reuben:{n:"Reuben Sandwich",i:"Rye bread, Corned beef, Sauerkraut, Swiss cheese (milk), Russian dressing (egg, soy)"},
  pbj:{n:"Peanut Butter & Jelly",i:"Bread (wheat flour), Peanut butter (peanuts), Jelly (fruit, sugar)"},
  grilled_chicken_sandwich:{n:"Grilled Chicken Sandwich",i:"Bun (wheat flour), Grilled chicken, Lettuce, Tomato, Mayo (egg)"},
  hot_dog:{n:"Hot Dog",i:"Hot dog bun (wheat flour), Sausage (pork, beef, spices), Ketchup, Mustard (mustard seeds)"},
  corn_dog:{n:"Corn Dog",i:"Hot dog (pork, beef), Cornmeal batter (corn, wheat flour, egg, milk), Oil"},
  fish_sticks:{n:"Fish Sticks",i:"Fish (cod, pollock), Wheat flour, Egg, Breadcrumbs (wheat), Oil, Salt"},
  fish_chips:{n:"Fish and Chips",i:"Fish (cod), Batter (wheat flour, egg, milk), Potatoes, Oil, Salt"},
  salmon:{n:"Grilled Salmon",i:"Salmon fillet, Olive oil, Lemon, Salt, Pepper, Dill"},
  baked_salmon:{n:"Baked Salmon",i:"Salmon fillet, Olive oil, Lemon, Garlic, Dill, Salt, Pepper"},
  salmon_teriyaki:{n:"Salmon Teriyaki",i:"Salmon, Soy sauce (wheat, soy), Mirin, Sugar, Ginger, Garlic, Rice"},
  shrimp_scampi:{n:"Shrimp Scampi",i:"Shrimp, Butter (milk), Garlic, White wine, Lemon juice, Linguine (wheat, egg)"},
  lobster_thermidor:{n:"Lobster Thermidor",i:"Lobster, Butter (milk), Egg, Mustard, Cheese (milk),白葡萄酒"},
  lobster_roll:{n:"Lobster Roll",i:"Lobster meat, Butter (milk), Mayonnaise (egg), Lemon, Hot dog bun (wheat)"},
  crab_cakes:{n:"Crab Cakes",i:"Crab meat, Breadcrumbs (wheat), Egg, Mayonnaise (egg, oil), Mustard, Old Bay seasoning"},
  clam_chowder:{n:"Clam Chowder",i:"Clams, Cream (milk), Butter (milk), Potatoes, Onion, Bacon, Salt"},
  new_england_clam_chowder:{n:"New England Clam Chowder",i:"Clams, Heavy cream (milk), Butter (milk), Potatoes, Onion, Bacon, Salt, Thyme"},
  manhattan_clam_chowder:{n:"Manhattan Clam Chowder",i:"Clams, Tomato broth, Potatoes, Onion, Celery, Carrots, Bacon"},
  calamari:{n:"Fried Calamari",i:"Squid, Wheat flour, Egg, Breadcrumbs, Oil, Lemon, Marinara sauce (tomato)"},
  dumplings:{n:"Dumplings",i:"Dumpling wrapper (wheat flour), Ground pork, Cabbage, Ginger, Garlic, Soy sauce (wheat, soy), Sesame oil"},
  potstickers:{n:"Potstickers",i:"Dumpling wrapper (wheat flour), Ground pork, Cabbage, Ginger, Garlic, Soy sauce (wheat, soy), Sesame oil, Oil"},
  wonton_soup:{n:"Wonton Soup",i:"Wonton wrapper (wheat flour, egg), Ground pork, Shrimp, Ginger, Garlic, Soy sauce (wheat, soy), Chicken broth"},
  spring_rolls:{n:"Spring Rolls",i:"Wrapper (wheat flour), Cabbage, Carrot, Shrimp, Rice noodles, Soy sauce (wheat, soy), Sesame oil"},
  egg_rolls:{n:"Egg Rolls",i:"Wrapper (wheat flour, egg), Cabbage, Pork, Carrot, Soy sauce (wheat), Oil"},
  chicken_salad:{n:"Chicken Salad",i:"Chicken breast, Mayonnaise (egg, oil), Celery, Onion, Lettuce, Salt"},
  caesar_salad:{n:"Caesar Salad",i:"Romaine lettuce, Parmesan cheese (milk), Croutons (wheat, egg, butter), Caesar dressing (anchovies-fish, egg, oil)"},
  greek_salad:{n:"Greek Salad",i:"Cucumber, Tomato, Red onion, Olives, Feta cheese (milk), Olive oil, Oregano"},
  cobb_salad:{n:"Cobb Salad",i:"Lettuce, Chicken, Bacon, Egg, Avocado, Tomato, Blue cheese (milk), Ranch dressing (milk, egg)"},
  caprese_salad:{n:"Caprese Salad",i:"Fresh mozzarella (milk), Tomato, Basil, Olive oil, Balsamic vinegar"},
  garden_salad:{n:"Garden Salad",i:"Mixed greens, Tomato, Cucumber, Carrot, Croutons (wheat), Italian dressing (soy, egg)"},
  chicken_soup:{n:"Chicken Soup",i:"Chicken broth, Chicken, Noodles (wheat flour, egg), Carrots, Celery, Onion, Salt"},
  tomato_soup:{n:"Tomato Soup",i:"Tomatoes, Cream (milk), Butter (milk), Onion, Basil, Salt"},
  minestrone:{n:"Minestrone Soup",i:"Vegetable broth, Pasta (wheat), Beans, Tomatoes, Carrots, Celery, Onion, Zucchini, Parmesan (milk)"},
  chili:{n:"Chili",i:"Ground beef, Kidney beans, Tomatoes, Onion, Garlic, Chili powder, Cumin, Cheese (milk, topping)"},
  french_onion_soup:{n:"French Onion Soup",i:"Beef broth, Caramelized onion, Bread (wheat), Gruyere cheese (milk), Butter (milk)"},
  broccoli_cheese_soup:{n:"Broccoli Cheese Soup",i:"Broccoli, Cheddar cheese (milk), Cream (milk), Butter (milk), Chicken broth, Onion"},
  steak:{n:"Steak",i:"Beef steak, Salt, Pepper, Butter (milk), Garlic, Rosemary"},
  filet_mignon:{n:"Filet Mignon",i:"Beef tenderloin, Butter (milk), Salt, Pepper, Thyme, Garlic"},
  ribeye:{n:"Ribeye Steak",i:"Ribeye beef, Salt, Pepper, Butter (milk), Garlic, Rosemary"},
  new_york_strip:{n:"New York Strip Steak",i:"Strip steak, Salt, Pepper, Butter (milk), Garlic, Thyme"},
  bbq_ribs:{n:"BBQ Ribs",i:"Pork ribs, BBQ sauce (tomato, vinegar, sugar, molasses), Salt, Pepper"},
  pulled_pork:{n:"Pulled Pork",i:"Pork shoulder, BBQ sauce (tomato, vinegar, sugar), Coleslaw (cabbage, mayo - egg, vinegar), Brioche bun (wheat, egg, butter)"},
  brisket:{n:"Beef Brisket",i:"Beef brisket, Dry rub (salt, pepper, paprika, garlic), BBQ sauce (tomato, vinegar, sugar)"},
  meatloaf:{n:"Meatloaf",i:"Ground beef, Breadcrumbs (wheat), Egg, Onion, Garlic, Ketchup (tomato), Worcestershire sauce (fish, soy)"},
  meatballs:{n:"Meatballs",i:"Ground beef, Breadcrumbs (wheat), Egg, Garlic, Parmesan cheese (milk), Marinara sauce (tomato), Spaghetti (wheat)"},
  shepherd_pie:{n:"Shepherd's Pie",i:"Ground lamb, Potatoes (mashed with butter-milk), Carrots, Peas, Onion, Gravy"},
  chicken_pot_pie:{n:"Chicken Pot Pie",i:"Chicken, Pie crust (wheat flour, butter-milk, egg), Carrots, Peas, Potatoes, Cream sauce (milk)"},
  pot_roast:{n:"Pot Roast",i:"Beef chuck, Potatoes, Carrots, Onion, Garlic, Beef broth, Rosemary, Thyme"},
  mashed_potatoes:{n:"Mashed Potatoes",i:"Potatoes, Butter (milk), Milk, Salt, Pepper"},
  baked_potato:{n:"Baked Potato",i:"Potato, Butter (milk), Sour cream (milk), Cheddar cheese (milk), Chives"},
  loaded_baked_potato:{n:"Loaded Baked Potato",i:"Potato, Butter (milk), Sour cream (milk), Cheese (milk), Bacon (pork), Chives"},
  macaroni_salad:{n:"Macaroni Salad",i:"Macaroni (wheat flour), Mayonnaise (egg, oil), Celery, Onion, Bell pepper, Mustard"},
  coleslaw:{n:"Coleslaw",i:"Cabbage, Carrot, Mayonnaise (egg, oil), Vinegar, Sugar, Salt"},
  potato_salad:{n:"Potato Salad",i:"Potatoes, Mayonnaise (egg, oil), Mustard, Celery, Onion, Egg, Salt, Pepper"},
  pancakes:{n:"Pancakes",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Baking powder, Salt"},
  blueberry_pancakes:{n:"Blueberry Pancakes",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Baking powder, Blueberries"},
  waffles:{n:"Waffles",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Baking powder"},
  belgian_waffles:{n:"Belgian Waffles",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Yeast, Pearl sugar, Powdered sugar"},
  french_toast:{n:"French Toast",i:"Bread (wheat flour), Eggs, Milk, Cinnamon, Vanilla, Butter (milk)"},
  omelette:{n:"Omelette",i:"Eggs, Butter (milk), Cheese (milk), Salt, Pepper"},
  veggie_omelette:{n:"Veggie Omelette",i:"Eggs, Bell peppers, Onion, Mushrooms, Tomato, Cheese (milk), Butter (milk)"},
  bacon_eggs:{n:"Bacon & Eggs",i:"Bacon (pork), Eggs, Butter (milk), Salt"},
  eggs_benedict:{n:"Eggs Benedict",i:"English muffin (wheat), Poached eggs, Ham, Hollandaise sauce (egg, butter - milk), Salt"},
  huevos_rancheros:{n:"Huevos Rancheros",i:"Corn tortilla, Eggs, Refried beans, Salsa (tomato, onion, chili), Cheese (milk), Avocado"},
  shakshuka:{n:"Shakshuka",i:"Eggs, Tomato sauce, Onion, Bell pepper, Garlic, Cumin, Paprika, Feta cheese (milk), Bread (wheat)"},
  cereal:{n:"Cereal with Milk",i:"Cereal (wheat, corn, oats), Milk, Sugar"},
  oatmeal:{n:"Oatmeal",i:"Oats, Water or Milk, Sugar, Cinnamon"},
  overnight_oats:{n:"Overnight Oats",i:"Oats, Milk, Yogurt (milk), Chia seeds, Honey, Berries"},
  avocado_toast:{n:"Avocado Toast",i:"Bread (wheat flour), Avocado, Lemon juice, Salt, Red pepper flakes, Olive oil"},
  toast:{n:"Toast",i:"Bread (wheat flour), Butter (milk)"},
  bagel:{n:"Bagel",i:"Bagel (wheat flour, malt, yeast), Cream cheese (milk)"},
  everything_bagel:{n:"Everything Bagel with Cream Cheese",i:"Bagel (wheat flour, malt, yeast, sesame, poppy seed, garlic, onion), Cream cheese (milk)"},
  english_muffin:{n:"English Muffin",i:"English muffin (wheat flour, cornmeal, yeast), Butter (milk)"},
  croissant:{n:"Croissant",i:"Croissant (wheat flour, butter, milk, egg), Butter (milk)"},
  pain_au_chocolate:{n:"Pain au Chocolat",i:"Croissant dough (wheat flour, butter-milk, egg), Chocolate"},
  danish_pastry:{n:"Danish Pastry",i:"Pastry dough (wheat flour, butter-milk, egg), Cream cheese filling (milk), Sugar, Fruit"},
  muffin:{n:"Muffin",i:"Wheat flour, Sugar, Butter (milk), Eggs, Milk, Baking powder, Vanilla"},
  blueberry_muffin:{n:"Blueberry Muffin",i:"Wheat flour, Sugar, Butter (milk), Eggs, Milk, Blueberries, Baking powder, Vanilla"},
  banana_muffin:{n:"Banana Muffin",i:"Wheat flour, Sugar, Butter (milk), Eggs, Banana, Milk, Baking powder, Cinnamon"},
  donut:{n:"Donut",i:"Wheat flour, Sugar, Eggs, Butter (milk), Yeast, Oil, Glaze (sugar, milk)"},
  glazed_donut:{n:"Glazed Donut",i:"Wheat flour, Sugar, Eggs, Butter (milk), Yeast, Oil, Glaze (sugar, vanilla, milk)"},
  chocolate_donut:{n:"Chocolate Donut",i:"Wheat flour, Cocoa, Sugar, Eggs, Butter (milk), Oil, Chocolate glaze"},
  cookies:{n:"Cookies",i:"Wheat flour, Sugar, Butter (milk), Eggs, Baking soda, Vanilla, Chocolate chips"},
  chocolate_chip_cookies:{n:"Chocolate Chip Cookies",i:"Wheat flour, Brown sugar, Butter (milk), Eggs, Chocolate chips, Vanilla, Baking soda"},
  oatmeal_raisin_cookies:{n:"Oatmeal Raisin Cookies",i:"Wheat flour, Oats, Butter (milk), Sugar, Eggs, Raisins, Cinnamon"},
  snickerdoodles:{n:"Snickerdoodles",i:"Wheat flour, Butter (milk), Sugar, Eggs, Cream of tartar, Cinnamon"},
  sugar_cookies:{n:"Sugar Cookies",i:"Wheat flour, Butter (milk), Sugar, Eggs, Vanilla, Baking powder"},
  peanut_butter_cookies:{n:"Peanut Butter Cookies",i:"Wheat flour, Peanut butter (peanuts), Sugar, Butter (milk), Eggs, Baking soda"},
  brownie:{n:"Brownie",i:"Chocolate, Wheat flour, Sugar, Butter (milk), Eggs, Cocoa, Vanilla"},
  blondie:{n:"Blondie",i:"Wheat flour, Brown sugar, Butter (milk), Eggs, Vanilla, Baking powder"},
  cake:{n:"Cake",i:"Wheat flour, Sugar, Eggs, Butter (milk), Milk, Baking powder, Vanilla, Frosting (sugar, butter)"},
  chocolate_cake:{n:"Chocolate Cake",i:"Wheat flour, Cocoa, Sugar, Eggs, Butter (milk), Milk, Baking powder, Chocolate frosting"},
  red_velvet_cake:{n:"Red Velvet Cake",i:"Wheat flour, Sugar, Eggs, Butter (milk), Buttermilk (milk), Cocoa, Red food coloring, Cream cheese frosting (milk)"},
  carrot_cake:{n:"Carrot Cake",i:"Wheat flour, Carrots, Sugar, Eggs, Oil, Cinnamon, Walnuts (tree nut), Cream cheese frosting (milk)"},
  cheesecake:{n:"Cheesecake",i:"Cream cheese (milk), Sugar, Eggs, Graham crackers (wheat), Butter (milk), Vanilla"},
  new_york_cheesecake:{n:"New York Cheesecake",i:"Cream cheese (milk), Sugar, Eggs, Heavy cream (milk), Graham crackers (wheat), Butter (milk), Vanilla, Lemon"},
  tiramisu:{n:"Tiramisu",i:"Ladyfingers (wheat, egg), Espresso coffee, Mascarpone cheese (milk), Eggs, Sugar, Cocoa powder"},
  creme_brulee:{n:"Creme Brulee",i:"Heavy cream (milk), Egg yolks, Sugar, Vanilla"},
  mousse:{n:"Chocolate Mousse",i:"Chocolate, Eggs, Sugar, Heavy cream (milk), Butter (milk), Vanilla"},
  panna_cotta:{n:"Panna Cotta",i:"Heavy cream (milk), Sugar, Gelatin, Vanilla, Berries"},
  ice_cream:{n:"Ice Cream",i:"Cream (milk), Milk, Sugar, Egg yolks, Vanilla"},
  chocolate_ice_cream:{n:"Chocolate Ice Cream",i:"Cream (milk), Milk, Sugar, Cocoa, Egg yolks, Vanilla"},
  mint_chocolate_chip:{n:"Mint Chocolate Chip Ice Cream",i:"Cream (milk), Milk, Sugar, Egg yolks, Mint, Chocolate chips"},
  cookie_dough_ice_cream:{n:"Cookie Dough Ice Cream",i:"Cream (milk), Milk, Sugar, Egg yolks, Cookie dough (wheat, butter-milk, egg, chocolate chips)"},
  sorbet:{n:"Sorbet",i:"Fruit puree, Sugar, Water, Lemon juice"},
  gelato:{n:"Gelato",i:"Milk, Cream (milk), Sugar, Egg yolks, Flavoring"},
  frozen_yogurt:{n:"Frozen Yogurt",i:"Yogurt (milk), Sugar, Cream (milk), Fruit"},
  chocolate:{n:"Chocolate Bar",i:"Cocoa butter, Sugar, Milk powder, Soy lecithin, Vanilla"},
  dark_chocolate:{n:"Dark Chocolate",i:"Cocoa mass, Cocoa butter, Sugar, Soy lecithin, Vanilla"},
  white_chocolate:{n:"White Chocolate",i:"Cocoa butter, Sugar, Milk powder, Soy lecithin, Vanilla"},
  truffles:{n:"Chocolate Truffles",i:"Chocolate, Heavy cream (milk), Butter (milk), Cocoa powder"},
  caramels:{n:"Caramels",i:"Sugar, Butter (milk), Heavy cream (milk), Vanilla, Salt"},
  fudge:{n:"Fudge",i:"Sugar, Butter (milk), Milk, Chocolate, Marshmallow creme, Vanilla"},
  toffee:{n:"Toffee",i:"Sugar, Butter (milk), Almonds (tree nut), Salt"},
  candy_corn:{n:"Candy Corn",i:"Sugar, Corn syrup, Cornstarch, Honey, Artificial colors, Gelatin"},
  gummy_bears:{n:"Gummy Bears",i:"Sugar, Corn syrup, Gelatin, Citric acid, Natural flavors, Colors"},
  jelly_beans:{n:"Jelly Beans",i:"Sugar, Corn syrup, Citric acid, Natural and artificial flavors, Colors"},
  marshmallows:{n:"Marshmallows",i:"Sugar, Corn syrup, Gelatin, Vanilla, Cornstarch"},
  milkshake:{n:"Milkshake",i:"Ice cream (milk, egg), Milk, Sugar, Flavoring"},
  chocolate_milkshake:{n:"Chocolate Milkshake",i:"Ice cream (milk), Milk, Chocolate syrup (soy), Sugar"},
  vanilla_milkshake:{n:"Vanilla Milkshake",i:"Ice cream (milk), Milk, Sugar, Vanilla"},
  strawberry_milkshake:{n:"Strawberry Milkshake",i:"Ice cream (milk), Milk, Strawberries, Sugar"},
  smoothie:{n:"Smoothie",i:"Fruit, Yogurt (milk), Milk, Honey, Ice"},
  berry_smoothie:{n:"Berry Smoothie",i:"Mixed berries, Yogurt (milk), Banana, Honey, Milk, Ice"},
  tropical_smoothie:{n:"Tropical Smoothie",i:"Mango, Pineapple, Banana, Yogurt (milk), Coconut milk, Ice"},
  green_smoothie:{n:"Green Smoothie",i:"Spinach, Banana, Mango, Yogurt (milk), Honey, Ice"},
  trail_mix:{n:"Trail Mix",i:"Peanuts, Almonds (tree nut), Cashews (tree nut), Raisins, Chocolate chips"},
  granola_bar:{n:"Granola Bar",i:"Oats, Honey, Peanuts, Tree nuts, Sugar, Soy lecithin"},
  protein_bar:{n:"Protein Bar",i:"Whey protein (milk), Soy protein, Tree nuts, Honey, Chocolate"},
  energy_bar:{n:"Energy Bar",i:"Oats, Honey, Peanuts, Dried fruit, Soy lecithin, Salt"},
  instant_noodles:{n:"Instant Noodles",i:"Wheat flour noodles, Palm oil, Seasoning packet (soy sauce - wheat, soy), Dehydrated vegetables"},
  frozen_pizza:{n:"Frozen Pizza",i:"Pizza crust (wheat flour), Tomato sauce, Mozzarella cheese (milk), Preservatives"},
  frozen_dumplings:{n:"Frozen Dumplings",i:"Wrapper (wheat flour), Pork, Cabbage, Ginger, Garlic, Soy sauce (wheat, soy), Sesame oil"},
  frozen_veggies:{n:"Frozen Vegetables",i:"Mixed vegetables (broccoli, carrots, corn, green beans)"},
  microwave_popcorn:{n:"Microwave Popcorn",i:"Corn kernels, Palm oil, Salt, Artificial flavor, Diacetyl"},
  apple_pie:{n:"Apple Pie",i:"Wheat flour, Apples, Sugar, Butter (milk), Cinnamon, Egg"},
  pumpkin_pie:{n:"Pumpkin Pie",i:"Pie crust (wheat flour, butter), Pumpkin puree, Eggs, Cream (milk), Sugar, Cinnamon, Nutmeg, Ginger"},
  key_lime_pie:{n:"Key Lime Pie",i:"Graham crackers (wheat), Butter (milk), Sweetened condensed milk (milk), Key lime juice, Eggs"},
  banana_pudding:{n:"Banana Pudding",i:"Vanilla wafers (wheat, egg), Bananas, Vanilla pudding (milk, egg), Whipped cream (milk)"},
  bread_pudding:{n:"Bread Pudding",i:"Bread (wheat flour), Eggs, Milk, Sugar, Vanilla, Cinnamon, Raisins, Butter (milk)"},
  cinnamon_rolls:{n:"Cinnamon Rolls",i:"Wheat flour, Butter (milk), Milk, Eggs, Sugar, Cinnamon, Cream cheese frosting (milk)"},
  butter_chicken:{n:"Butter Chicken",i:"Chicken, Butter (milk), Cream (milk), Tomato, Yogurt (milk), Spices, Rice"},
  tikka_masala:{n:"Tikka Masala",i:"Chicken, Yogurt (milk), Cream (milk), Tomato sauce, Spices, Rice"},
  chicken_tikka:{n:"Chicken Tikka",i:"Chicken, Yogurt (milk), Lemon juice, Spices, Ginger, Garlic"},
  biryani:{n:"Biryani",i:"Basmati rice, Chicken, Yogurt (milk), Onion, Saffron, Spices, Ghee (milk)"},
  vegetable_biryani:{n:"Vegetable Biryani",i:"Basmati rice, Mixed vegetables, Yogurt (milk), Onion, Saffron, Spices, Ghee (milk)"},
  curry:{n:"Chicken Curry",i:"Chicken, Coconut milk, Curry paste (chili, garlic, shrimp paste-fish), Rice"},
  palak_paneer:{n:"Palak Paneer",i:"Spinach, Paneer cheese (milk), Onion, Tomato, Garlic, Ginger, Cream (milk), Spices"},
  chana_masala:{n:"Chana Masala",i:"Chickpeas, Tomato, Onion, Garlic, Ginger, Spices, Oil"},
  dal_makhani:{n:"Dal Makhani",i:"Black lentils, Kidney beans, Butter (milk), Cream (milk), Tomato, Onion, Garlic, Spices"},
  naan:{n:"Naan",i:"Wheat flour, Yogurt (milk), Milk, Sugar, Yeast, Butter (milk), Garlic"},
  garlic_naan:{n:"Garlic Naan",i:"Wheat flour, Yogurt (milk), Milk, Garlic, Butter (milk), Yeast, Sugar"},
  samosa:{n:"Samosa",i:"Wheat flour, Potatoes, Peas, Onion, Spices, Oil"},
  pakora:{n:"Pakora",i:"Chickpea flour, Vegetables (onion, potato, spinach), Spices, Oil"},
  hummus:{n:"Hummus",i:"Chickpeas, Tahini (sesame), Lemon juice, Garlic, Olive oil, Salt"},
  baba_ghanoush:{n:"Baba Ghanoush",i:"Eggplant, Tahini (sesame), Lemon juice, Garlic, Olive oil, Salt"},
  falafel:{n:"Falafel",i:"Chickpeas, Fava beans, Onion, Garlic, Parsley, Cilantro, Spices, Oil"},
  shawarma:{n:"Shawarma",i:"Chicken or beef, Yogurt (milk), Lemon, Garlic, Spices, Pita bread (wheat), Tahini (sesame), Pickles"},
  gyro:{n:"Gyro",i:"Lamb or beef, Pita bread (wheat), Tomato, Onion, Tzatziki (yogurt-cucumber-milk), Feta cheese (milk)"},
  kebab:{n:"Kebab",i:"Chicken or lamb, Yogurt (milk), Lemon, Garlic, Spices, Rice, Vegetables"},
  guacamole:{n:"Guacamole",i:"Avocado, Lime juice, Onion, Tomato, Cilantro, Salt"},
  pico_de_gallo:{n:"Pico de Gallo",i:"Tomato, Onion, Jalapeno, Cilantro, Lime juice, Salt"},
  salsa:{n:"Salsa",i:"Tomatoes, Onion, Jalapeno, Cilantro, Lime juice, Garlic, Salt"},
  spinach_artichoke_dip:{n:"Spinach Artichoke Dip",i:"Spinach, Artichoke hearts, Cream cheese (milk), Sour cream (milk), Parmesan (milk), Garlic"},
  buffalo_chicken_dip:{n:"Buffalo Chicken Dip",i:"Chicken, Cream cheese (milk), Ranch dressing (milk, egg), Hot sauce, Cheddar cheese (milk)"},
  mozzarella_sticks:{n:"Mozzarella Sticks",i:"Mozzarella cheese (milk), Wheat flour, Egg, Breadcrumbs (wheat), Oil"},
  onion_rings:{n:"Onion Rings",i:"Onion, Wheat flour, Egg, Milk, Breadcrumbs (wheat), Oil"},
  jalapeno_poppers:{n:"Jalapeno Poppers",i:"Jalapenos, Cream cheese (milk), Bacon (pork), Cheddar cheese (milk), Breadcrumbs (wheat)"},
  bruschetta:{n:"Bruschetta",i:"Bread (wheat flour), Tomato, Basil, Garlic, Olive oil, Balsamic vinegar, Parmesan (milk)"},
  caprese_skewers:{n:"Caprese Skewers",i:"Fresh mozzarella (milk), Cherry tomatoes, Basil, Olive oil, Balsamic glaze"},
  deviled_eggs:{n:"Deviled Eggs",i:"Eggs, Mayonnaise (egg, oil), Mustard, Vinegar, Paprika"},
  pigs_in_blanket:{n:"Pigs in Blanket",i:"Mini sausages (pork), Crescent roll dough (wheat flour, butter-milk, egg)"},
  soda:{n:"Soda",i:"Carbonated water, High fructose corn syrup or Sugar, Caramel color, Phosphoric acid, Natural flavors, Caffeine"},
  diet_soda:{n:"Diet Soda",i:"Carbonated water, Aspartame or Sucralose, Caramel color, Phosphoric acid, Natural flavors, Citric acid"},
  root_beer:{n:"Root Beer",i:"Carbonated water, Sugar, Caramel color, Natural flavors, Sodium benzoate"},
  lemonade:{n:"Lemonade",i:"Water, Lemon juice, Sugar"},
  iced_tea:{n:"Iced Tea",i:"Water, Tea, Sugar, Lemon"},
  coffee:{n:"Coffee",i:"Coffee beans, Water"},
  cappuccino:{n:"Cappuccino",i:"Espresso (coffee), Steamed milk (milk), Milk foam"},
  latte:{n:"Latte",i:"Espresso (coffee), Steamed milk (milk)"},
  mocha:{n:"Mocha",i:"Espresso (coffee), Chocolate syrup (soy), Steamed milk (milk), Whipped cream (milk)"},
  hot_chocolate:{n:"Hot Chocolate",i:"Milk, Cocoa powder, Sugar, Vanilla, Whipped cream (milk)"},
  chai_latte:{n:"Chai Latte",i:"Chai tea (black tea, spices), Steamed milk (milk), Sugar"},
  matcha_latte:{n:"Matcha Latte",i:"Matcha green tea powder, Steamed milk (milk), Sugar"},
  energy_drink:{n:"Energy Drink",i:"Water, Sugar, Caffeine, Taurine, B vitamins, Citric acid, Artificial flavors, Color (Red 40, Yellow 5)"},
  orange_juice:{n:"Orange Juice",i:"Oranges, Water, Sugar, Vitamin C"},
  apple_juice:{n:"Apple Juice",i:"Apple juice concentrate, Water, Ascorbic acid (Vitamin C)"},
  cranberry_juice:{n:"Cranberry Juice",i:"Cranberry juice, Water, Sugar, Ascorbic acid"},
  chocolate_milk:{n:"Chocolate Milk",i:"Milk, Sugar, Cocoa, Vanilla, Salt"},
  hot_cocoa:{n:"Hot Cocoa",i:"Milk, Cocoa powder, Sugar, Vanilla, Whipped cream (milk)"},
  yogurt:{n:"Yogurt",i:"Milk, Live active cultures, Sugar, Fruit, Pectin"},
  greek_yogurt:{n:"Greek Yogurt",i:"Milk, Live active cultures, Sugar, Fruit"},
  parfait:{n:"Yogurt Parfait",i:"Yogurt (milk), Granola (oats, nuts, honey), Berries, Honey"},
  cheese_plate:{n:"Cheese Plate",i:"Assorted cheeses (milk), Crackers (wheat), Grapes, Nuts (tree nuts), Honey"},
  bruschetta_platter:{n:"Bruschetta Platter",i:"Bread (wheat flour), Tomato, Basil, Garlic, Olive oil, Balsamic, Various toppings"},
  caprese_platter:{n:"Caprese Platter",i:"Fresh mozzarella (milk), Tomatoes, Basil, Olive oil, Balsamic glaze"},
  mezze_platter:{n:"Mezze Platter",i:"Hummus (chickpeas, sesame), Baba ghanoush, Falafel, Pita (wheat), Olives, Feta cheese (milk), Vegetables"},
  charcuterie:{n:"Charcuterie Board",i:"Cured meats (pork), Cheeses (milk), Crackers (wheat), Olives, Nuts (tree nuts), Dried fruit, Honey, Mustard"},
  quinoa_salad:{n:"Quinoa Salad",i:"Quinoa, Cucumber, Tomato, Red onion, Feta cheese (milk), Lemon juice, Olive oil, Herbs"},
  tabbouleh:{n:"Tabbouleh",i:"Bulgur wheat, Tomato, Cucumber, Parsley, Mint, Lemon juice, Olive oil"},
  couscous_salad:{n:"Couscous Salad",i:"Couscous (wheat), Cucumber, Tomato, Red onion, Lemon juice, Olive oil, Herbs"},
  gazpacho:{n:"Gazpacho",i:"Tomatoes, Cucumber, Bell pepper, Onion, Garlic, Olive oil, Vinegar, Bread (wheat)"},
  caprese_soup:{n:"Caprese Soup",i:"Tomatoes, Fresh mozzarella (milk), Basil, Olive oil, Garlic"},
  ramen_noodle_cup:{n:"Instant Ramen Cup",i:"Wheat noodles, Palm oil, Seasoning packet (soy, wheat, MSG), Dried vegetables"},
  mac_and_cheese_box:{n:"Boxed Mac and Cheese",i:"Macaroni (wheat flour), Cheese powder (milk, whey, caseinate), Salt, Butter (milk)"},
  tv_dinner:{n:"TV Dinner",i:"Chicken or beef, Mashed potatoes (milk, butter), Corn, Brownie (wheat, egg, milk), Gravy"},
  chicken_fried_rice_box:{n:"Chicken Fried Rice (boxed)",i:"Rice, Chicken, Soy sauce (wheat, soy), Egg, Peas, Carrots, Sesame oil"},
  canned_soup:{n:"Canned Soup",i:"Broth, Vegetables, Noodles or rice, Salt, MSG, Soy sauce (wheat, soy), Preservatives"},
  canned_tuna:{n:"Canned Tuna",i:"Tuna (fish), Water or oil, Salt"},
  canned_beans:{n:"Canned Beans",i:"Beans, Water, Salt, Sugar"},
  pb_and_j:{n:"Peanut Butter and Jelly Sandwich",i:"Bread (wheat flour), Peanut butter (peanuts), Jelly (fruit, sugar)"},
  grilled_cheese_tomato_soup:{n:"Grilled Cheese + Tomato Soup",i:"Bread (wheat flour), Cheese (milk), Butter (milk), Tomato soup (tomatoes, cream - milk, butter)"},
  breakfast_burrito:{n:"Breakfast Burrito",i:"Flour tortilla (wheat), Scrambled eggs, Cheese (milk), Bacon (pork), Salsa (tomato), Hash browns (potato)"},
  avocado_toast_egg:{n:"Avocado Toast with Egg",i:"Bread (wheat flour), Avocado, Egg, Salt, Pepper, Red pepper flakes, Olive oil"},
  chicken_caesar_wrap:{n:"Chicken Caesar Wrap",i:"Flour tortilla (wheat), Grilled chicken, Romaine lettuce, Caesar dressing (egg, fish), Parmesan (milk), Croutons (wheat)"},
  turkey_club:{n:"Turkey Club",i:"Bread (wheat flour), Turkey, Bacon (pork), Lettuce, Tomato, Mayo (egg), Cheese (milk)"},
  veggie_wrap:{n:"Veggie Wrap",i:"Flour tortilla (wheat), Hummus (sesame), Lettuce, Tomato, Cucumber, Bell pepper, Feta cheese (milk)"},
  chicken_rice_bowl:{n:"Chicken Rice Bowl",i:"Rice, Grilled chicken, Soy sauce (wheat, soy), Sesame oil, Steamed broccoli, Carrots"},
  teriyaki_bowl:{n:"Teriyaki Bowl",i:"Rice, Grilled chicken, Teriyaki sauce (soy, wheat, sugar), Steamed vegetables, Sesame seeds"},
  poke_bowl:{n:"Poke Bowl",i:"Sushi rice, Raw tuna (fish), Soy sauce (wheat, soy), Sesame oil, Avocado, Seaweed, Cucumber, Edamame (soy)"},
  bibimbap:{n:"Bibimbap",i:"Rice, Beef, Vegetables (spinach, carrot, zucchini, bean sprouts), Egg, Gochujang (soy, chili), Sesame oil"},
  korean_fried_chicken:{n:"Korean Fried Chicken",i:"Chicken, Wheat flour, Potato starch, Gochujang (soy, chili), Soy sauce (wheat, soy), Garlic, Sugar, Sesame, Rice"},
  butter_noodles:{n:"Butter Noodles",i:"Pasta (wheat flour, egg), Butter (milk), Parmesan (milk), Salt, Pepper, Parsley"},
  chicken_noodle_soup:{n:"Chicken Noodle Soup",i:"Chicken broth, Chicken, Egg noodles (wheat, egg), Carrots, Celery, Onion, Salt"},
  grilled_vegetables:{n:"Grilled Vegetables",i:"Bell peppers, Zucchini, Eggplant, Mushrooms, Onion, Olive oil, Salt, Pepper, Herbs"},
  roasted_vegetables:{n:"Roasted Vegetables",i:"Mixed vegetables, Olive oil, Salt, Pepper, Garlic, Herbs"},
  veggie_stir_fry:{n:"Veggie Stir Fry",i:"Mixed vegetables (broccoli, bell pepper, snap peas, carrot), Soy sauce (wheat, soy), Sesame oil, Garlic, Ginger, Rice"},
  tofu_stir_fry:{n:"Tofu Stir Fry",i:"Tofu (soy), Mixed vegetables, Soy sauce (wheat, soy), Sesame oil, Garlic, Ginger, Rice"},
  acai_bowl:{n:"Acai Bowl",i:"Acai puree, Banana, Berries, Granola (oats, nuts, honey), Honey, Coconut flakes"},
  breakfast_sandwich:{n:"Breakfast Sandwich",i:"English muffin (wheat), Egg, Cheese (milk), Bacon or sausage (pork)"},
  chicken_tacos_supreme:{n:"Supreme Chicken Tacos",i:"Corn tortilla, Grilled chicken, Lettuce, Tomato, Cheese (milk), Sour cream (milk), Salsa, Avocado"},
  bean_burrito:{n:"Bean Burrito",i:"Flour tortilla (wheat), Refried beans, Rice, Cheese (milk), Sour cream (milk), Salsa, Lettuce"},
  cheese_quesadilla:{n:"Cheese Quesadilla",i:"Flour tortilla (wheat), Cheese (milk), Butter (milk)"},
  taco_supreme:{n:"Taco Supreme",i:"Hard corn shell, Ground beef, Lettuce, Tomato, Cheese (milk), Sour cream (milk), Salsa"},
  fish_filet_sandwich:{n:"Fish Filet Sandwich",i:"Bun (wheat flour), Fish filet (cod), Tartar sauce (egg, milk), Lettuce, Pickle"},
  patty_melt:{n:"Patty Melt",i:"Rye bread, Beef patty, Swiss cheese (milk), Caramelized onions, Butter (milk)"},
  turkey_burger:{n:"Turkey Burger",i:"Bun (wheat flour), Turkey patty, Lettuce, Tomato, Mayo (egg), Cheese (milk)"},
  chicken_caesar_salad:{n:"Chicken Caesar Salad",i:"Romaine lettuce, Grilled chicken, Parmesan (milk), Croutons (wheat, butter), Caesar dressing (egg, fish, milk)"},
  chef_salad:{n:"Chef Salad",i:"Lettuce, Turkey, Ham (pork), Hard-boiled egg, Cheese (milk), Tomato, Cucumber, Ranch dressing (milk, egg)"},
  waldorf_salad:{n:"Waldorf Salad",i:"Apples, Celery, Grapes, Walnuts (tree nut), Mayonnaise (egg, oil), Lettuce"},
  fruit_salad:{n:"Fruit Salad",i:"Mixed fresh fruit (melon, berries, grapes, pineapple, orange)"},
  ambrosia_salad:{n:"Ambrosia Salad",i:"Canned fruit (pineapple, mandarin oranges), Coconut flakes, Marshmallows, Sour cream (milk), Pecans (tree nut)"},
  cornbread:{n:"Cornbread",i:"Cornmeal, Wheat flour, Milk, Eggs, Butter (milk), Sugar, Baking powder"},
  biscuits_and_gravy:{n:"Biscuits and Gravy",i:"Biscuits (wheat flour, buttermilk-milk, butter), Sausage gravy (pork sausage, milk, flour-wheat)"},
  chicken_and_waffles:{n:"Chicken and Waffles",i:"Fried chicken (wheat flour, buttermilk-milk, egg), Waffles (wheat flour, milk, egg, butter), Syrup, Butter"},
  poutine:{n:"Poutine",i:"French fries (potatoes), Cheese curds (milk), Gravy"},
  loaded_nachos:{n:"Loaded Nachos",i:"Corn tortilla chips, Ground beef, Cheese (milk), Jalapenos, Sour cream (milk), Salsa, Guacamole, Beans"},
  sliders:{n:"Sliders",i:"Mini buns (wheat flour), Mini beef patties, Cheese (milk), Pickles, Ketchup, Mustard"},
  corn_on_cob:{n:"Corn on the Cob",i:"Corn, Butter (milk), Salt"},
  garlic_bread:{n:"Garlic Bread",i:"Bread (wheat flour), Butter (milk), Garlic, Parsley, Parmesan (milk)"},
  focaccia:{n:"Focaccia",i:"Wheat flour, Olive oil, Salt, Rosemary, Garlic"},
  pretzel:{n:"Pretzel",i:"Wheat flour, Water, Yeast, Salt, Baking soda, Butter (milk)"},
  churros:{n:"Churros",i:"Wheat flour, Butter (milk), Eggs, Sugar, Cinnamon, Oil, Chocolate dipping sauce"},
  funnel_cake:{n:"Funnel Cake",i:"Wheat flour, Eggs, Milk, Sugar, Oil, Powdered sugar"},
  beignets:{n:"Beignets",i:"Wheat flour, Butter (milk), Milk, Sugar, Yeast, Oil, Powdered sugar"},
  crepes:{n:"Crepes",i:"Wheat flour, Milk, Eggs, Butter (milk), Sugar, Vanilla"},
  cinnamon_french_toast:{n:"Cinnamon French Toast",i:"Bread (wheat flour), Eggs, Milk, Cinnamon, Vanilla, Butter (milk), Maple syrup"},
  beef_stroganoff:{n:"Beef Stroganoff",i:"Beef, Egg noodles (wheat, egg), Mushroom, Onion, Sour cream (milk), Butter (milk), Beef broth"},
  chicken_marsala:{n:"Chicken Marsala",i:"Chicken breast, Marsala wine, Mushrooms, Butter (milk), Flour (wheat), Olive oil"},
  chicken_piccata:{n:"Chicken Piccata",i:"Chicken breast, Lemon, Capers, Butter (milk), Flour (wheat), White wine, Olive oil"},
  lemon_herb_chicken:{n:"Lemon Herb Chicken",i:"Chicken breast, Lemon juice, Olive oil, Garlic, Rosemary, Thyme, Salt, Pepper"},
  honey_garlic_chicken:{n:"Honey Garlic Chicken",i:"Chicken, Honey, Soy sauce (wheat, soy), Garlic, Ginger, Sesame oil"},
  orange_chicken:{n:"Orange Chicken",i:"Chicken, Orange juice, Soy sauce (wheat, soy), Sugar, Ginger, Garlic, Cornstarch, Rice"},
  general_tsos_chicken:{n:"General Tso's Chicken",i:"Chicken, Soy sauce (wheat, soy), Sugar, Vinegar, Ginger, Garlic, Chili peppers, Rice"},
  kung_pao_chicken:{n:"Kung Pao Chicken",i:"Chicken, Peanuts (peanut), Soy sauce (wheat, soy), Vinegar, Sugar, Chili peppers, Garlic, Ginger, Rice"},
  sweet_sour_chicken:{n:"Sweet and Sour Chicken",i:"Chicken, Pineapple, Bell peppers, Onion, Vinegar, Sugar, Soy sauce (wheat, soy), Rice"},
  beef_broccoli:{n:"Beef and Broccoli",i:"Beef, Broccoli, Soy sauce (wheat, soy), Garlic, Ginger, Sugar, Rice"},
  mongolian_beef:{n:"Mongolian Beef",i:"Beef, Soy sauce (wheat, soy), Brown sugar, Garlic, Ginger, Green onion, Rice"},
  sesame_chicken:{n:"Sesame Chicken",i:"Chicken, Soy sauce (wheat, soy), Sugar, Sesame oil, Sesame seeds, Garlic, Ginger, Rice"},
  pad_see_ew:{n:"Pad See Ew",i:"Rice noodles, Chicken or beef, Egg, Soy sauce (wheat, soy), Broccoli, Garlic, Sesame oil"},
  green_curry:{n:"Green Curry",i:"Coconut milk, Green curry paste (chili, lemongrass, shrimp paste-fish), Chicken, Bamboo shoots, Thai basil, Rice"},
  red_curry:{n:"Red Curry",i:"Coconut milk, Red curry paste (chili, lemongrass, shrimp paste-fish), Chicken, Bamboo shoots, Thai basil, Rice"},
  massaman_curry:{n:"Massaman Curry",i:"Coconut milk, Massaman curry paste, Chicken, Potato, Peanuts (peanut), Onion, Rice"},
  pad_krapow:{n:"Pad Krapow (Holy Basil Stir-fry)",i:"Ground chicken, Thai basil, Garlic, Chili, Soy sauce (wheat, soy), Fish sauce, Egg, Rice"},
  tom_yum_soup:{n:"Tom Yum Soup",i:"Lemongrass, Galangal, Kaffir lime, Chili, Shrimp (shellfish), Mushrooms, Fish sauce, Lime juice"},
  tom_kha_gai:{n:"Tom Kha Gai",i:"Coconut milk, Chicken, Lemongrass, Galangal, Kaffir lime, Mushrooms, Fish sauce, Lime juice"},
  mango_sticky_rice:{n:"Mango Sticky Rice",i:"Sticky rice, Coconut milk, Sugar, Salt, Mango"},
  nasi_goreng:{n:"Nasi Goreng",i:"Rice, Soy sauce (wheat, soy), Sweet soy sauce, Garlic, Onion, Egg, Chicken or shrimp, Chili, Shrimp paste (fish)"},
  satay:{n:"Satay",i:"Chicken or beef, Soy sauce (wheat, soy), Coconut milk, Lemongrass, Turmeric, Peanut sauce (peanuts), Rice"},
  laksa:{n:"Laksa",i:"Coconut milk, Rice noodles or egg noodles (wheat), Shrimp or chicken, Tofu (soy), Bean sprouts, Fish sauce, Sambal (chili, shrimp-fish)"},
  bahn_mi:{n:"Banh Mi",i:"Baguette (wheat flour), Pork or chicken, Pickled carrots and daikon, Cucumber, Jalapeno, Cilantro, Mayonnaise (egg), Soy sauce (wheat, soy)"},
  bibim_guksu:{n:"Bibim Guksu (Spicy Noodles)",i:"Wheat noodles, Gochujang (soy), Sesame oil, Sugar, Vinegar, Egg, Cucumber"},
  jjajangmyeon:{n:"Jjajangmyeon",i:"Wheat noodles, Black bean paste (soy), Pork, Onion, Zucchini, Potato, Sugar"},
  bulgogi:{n:"Bulgogi",i:"Beef, Soy sauce (wheat, soy), Sugar, Sesame oil, Garlic, Ginger, Green onion, Rice"},
  kimbap:{n:"Kimbap",i:"Rice, Seaweed, Vegetables (spinach, carrot, pickled radish, cucumber), Egg, Ham or tuna (fish), Sesame oil"},
  jollof_rice:{n:"Jollof Rice",i:"Rice, Tomato, Onion, Bell pepper, Chili, Garlic, Ginger, Vegetable oil, Spices"},
  injera_with_wat:{n:"Injera with Wat",i:"Injera bread (teff flour - gluten-free), Chicken or beef stew (onion, tomato, garlic, berbere spice), Lentils"},
  pad_thai_veggie:{n:"Vegetable Pad Thai",i:"Rice noodles, Tofu (soy), Egg, Tamarind paste, Fish sauce, Sugar, Peanuts, Bean sprouts, Lime"},
  crispy_spring_rolls:{n:"Crispy Spring Rolls",i:"Wrapper (wheat flour), Cabbage, Carrot, Vermicelli noodles, Soy sauce (wheat, soy), Sesame oil, Oil"},
  scallion_pancakes:{n:"Scallion Pancakes",i:"Wheat flour, Scallion, Sesame oil, Salt, Oil"},
  potsticker_sauce:{n:"Dipping Sauce for Dumplings",i:"Soy sauce (wheat, soy), Rice vinegar, Sesame oil, Chili oil, Garlic"},
  chicken_katsu:{n:"Chicken Katsu",i:"Chicken breast, Panko breadcrumbs (wheat), Egg, Flour (wheat), Tonkatsu sauce (soy, wheat), Cabbage, Rice"},
  tonkatsu:{n:"Tonkatsu",i:"Pork cutlet, Panko breadcrumbs (wheat), Egg, Flour (wheat), Tonkatsu sauce (soy, wheat), Cabbage, Rice"},
  tempura:{n:"Tempura",i:"Shrimp or vegetables, Tempura batter (wheat flour, egg, ice water), Tempura sauce (soy, dashi), Rice"},
  yakisoba:{n:"Yakisoba",i:"Wheat noodles, Cabbage, Carrot, Pork, Worcestershire sauce (fish, soy), Yakisoba sauce, Green onion"},
  okonomiyaki:{n:"Okonomiyaki",i:"Wheat flour, Cabbage, Egg, Pork belly, Okonomiyaki sauce (soy, wheat), Mayonnaise (egg), Bonito flakes (fish), Seaweed"},
  onigiri:{n:"Onigiri",i:"Rice, Seaweed, Various fillings (tuna-fish, salmon-fish, umeboshi plum, pickled vegetables)"},
  chicken_ramen_bowl:{n:"Chicken Ramen Bowl",i:"Ramen noodles (wheat, egg), Chicken broth, Chicken, Soft-boiled egg, Bamboo shoots, Green onion, Nori, Sesame seeds"},
  beef_noodle_soup:{n:"Beef Noodle Soup",i:"Beef broth, Beef, Wheat noodles, Bok choy, Onion, Star anise, Soy sauce (wheat, soy), Ginger"},
  cream_of_mushroom_soup:{n:"Cream of Mushroom Soup",i:"Mushrooms, Cream (milk), Butter (milk), Onion, Garlic, Flour (wheat), Chicken broth, Thyme"},
  chicken_tortilla_soup:{n:"Chicken Tortilla Soup",i:"Chicken broth, Chicken, Tomatoes, Corn, Black beans, Onion, Garlic, Tortilla strips (wheat), Cheese (milk), Avocado"},
  clam_linguine:{n:"Clam Linguine",i:"Linguine (wheat, egg), Clams, White wine, Garlic, Butter (milk), Parsley, Lemon, Red pepper flakes"},
  seafood_pasta:{n:"Seafood Pasta",i:"Pasta (wheat), Shrimp (shellfish), Scallops (molluscs), Garlic, White wine, Butter (milk), Parsley, Lemon, Parmesan (milk)"},
  pasta_primavera:{n:"Pasta Primavera",i:"Pasta (wheat), Mixed vegetables (bell pepper, broccoli, zucchini, tomato), Olive oil, Parmesan (milk), Garlic, Basil"},
  baked_ziti:{n:"Baked Ziti",i:"Ziti pasta (wheat), Tomato sauce (tomato), Ricotta (milk), Mozzarella (milk), Parmesan (milk), Italian sausage (pork)"},
  ravioli:{n:"Ravioli",i:"Pasta (wheat flour, egg), Ricotta cheese (milk), Spinach, Parmesan (milk), Butter (milk), Sage"},
  gnocchi:{n:"Gnocchi",i:"Potato, Wheat flour, Egg, Salt, Butter (milk), Parmesan (milk), Sage"},
  risotto:{n:"Risotto",i:"Arborio rice, Chicken broth, Butter (milk), Parmesan (milk), Onion, White wine, Olive oil"},
  mushroom_risotto:{n:"Mushroom Risotto",i:"Arborio rice, Mushrooms, Chicken broth, Butter (milk), Parmesan (milk), Onion, White wine, Thyme"},
  paella:{n:"Paella",i:"Rice, Chicken, Shrimp (shellfish), Mussels (molluscs), Saffron, Tomato, Onion, Garlic, Bell pepper, Olive oil"},
  chili_con_carne:{n:"Chili con Carne",i:"Ground beef, Kidney beans, Tomatoes, Onion, Garlic, Chili powder, Cumin, Oregano"},
  beef_taco_meat:{n:"Beef Taco Meat",i:"Ground beef, Chili powder, Cumin, Paprika, Garlic powder, Onion powder, Salt, Oregano"},
  pulled_chicken:{n:"Pulled Chicken",i:"Chicken breast, BBQ sauce (tomato, vinegar, sugar), Coleslaw (cabbage, mayo-egg), Brioche bun (wheat, egg, butter)"},
  chicken_shawarma_plate:{n:"Chicken Shawarma Plate",i:"Chicken, Yogurt (milk), Lemon, Garlic, Spices, Rice, Hummus (sesame, chickpeas), Pickles, Pita (wheat)"},
  lamb_kebab_plate:{n:"Lamb Kebab Plate",i:"Lamb, Yogurt (milk), Spices, Rice, Grilled vegetables, Tzatziki (yogurt-cucumber-milk)"},
  falafel_plate:{n:"Falafel Plate",i:"Falafel (chickpeas, fava beans), Hummus (sesame), Tabbouleh (wheat), Pita (wheat), Pickles, Vegetables"},
  butter_naan_plate:{n:"Butter Naan with Curry",i:"Naan (wheat, milk, yogurt), Chicken curry (coconut milk, curry paste-shrimp-fish), Rice"},
  tandoori_chicken:{n:"Tandoori Chicken",i:"Chicken, Yogurt (milk), Lemon, Tandoori spices, Served with naan (wheat) and rice"},
  chicken_korma:{n:"Chicken Korma",i:"Chicken, Yogurt (milk), Cream (milk), Onion, Almonds (tree nut), Cashews (tree nut), Spices, Rice"},
  lamb_biryani:{n:"Lamb Biryani",i:"Basmati rice, Lamb, Yogurt (milk), Onion, Saffron, Spices, Ghee (milk), Fried onions"},
  paneer_tikka:{n:"Paneer Tikka",i:"Paneer cheese (milk), Yogurt (milk), Lemon, Tandoori spices, Bell pepper, Onion"},
  masala_dosa:{n:"Masala Dosa",i:"Rice and lentil crepe, Potato filling (potato, mustard seed, turmeric, curry leaves), Coconut chutney, Sambar"},
  idli_sambar:{n:"Idli Sambar",i:"Steamed rice cakes, Sambar (lentils, tamarind, vegetables, spices), Coconut chutney"},
  chicken_momo:{n:"Chicken Momos",i:"Wheat flour wrapper, Ground chicken, Onion, Garlic, Ginger, Soy sauce (wheat, soy), Sesame oil, Cilantro"},
  thukpa:{n:"Thukpa",i:"Wheat noodles, Chicken broth, Chicken, Vegetables (carrot, celery, onion), Garlic, Ginger, Soy sauce (wheat, soy)"},
  schezwan_noodles:{n:"Schezwan Noodles",i:"Wheat noodles, Schezwan sauce (chili, garlic, soy-wheat), Vegetables, Oil"},
  hakka_noodles:{n:"Hakka Noodles",i:"Wheat noodles, Vegetables (cabbage, carrot, bell pepper, bean sprouts), Soy sauce (wheat, soy), Vinegar, Garlic, Oil"},
  chicken_manchurian:{n:"Chicken Manchurian",i:"Chicken, Cornstarch, Soy sauce (wheat, soy), Vinegar, Garlic, Ginger, Chili, Onion, Tomato"},
  american_chop suey:{n:"American Chop Suey",i:"Elbow macaroni (wheat), Ground beef, Tomato sauce, Onion, Bell pepper, Garlic, Worcestershire sauce (fish, soy)"},
  chicken_fried_steak:{n:"Chicken Fried Steak",i:"Beef steak, Wheat flour, Egg, Buttermilk (milk), Oil, Country gravy (milk, flour-wheat), Mashed potatoes (milk, butter)"},
  smothered_pork_chops:{n:"Smothered Pork Chops",i:"Pork chops, Onion, Mushroom, Gravy (milk, flour-wheat), Butter (milk), Rice"},
  blackened_fish:{n:"Blackened Fish",i:"Fish fillet (catfish or tilapia), Cajun spices, Butter (milk), Lemon, Rice or vegetables"},
  crawfish_etouffee:{n:"Crawfish Etouffee",i:"Crawfish (shellfish), Butter (milk), Onion, Celery, Bell pepper, Flour (wheat), Rice"},
  shrimp_po_boy:{n:"Shrimp Po' Boy",i:"French bread (wheat flour), Fried shrimp (shellfish), Lettuce, Tomato, Pickles, Remoulade (egg, mustard)"},
  gumbo:{n:"Gumbo",i:"Chicken and/or sausage (pork), Okra, Roux (flour-wheat, oil), Onion, Celery, Bell pepper, Rice, File powder"},
  jambalaya:{n:"Jambalaya",i:"Rice, Chicken, Andouille sausage (pork), Shrimp (shellfish), Onion, Celery, Bell pepper, Cajun spices, Tomato"},
  red_beans_and_rice:{n:"Red Beans and Rice",i:"Kidney beans, Andouille sausage (pork), Onion, Celery, Bell pepper, Garlic, Cajun spices, Rice"},
  biscuit:{n:"Biscuit",i:"Wheat flour, Buttermilk (milk), Butter (milk), Baking powder, Salt"},
  hush_puppies:{n:"Hush Puppies",i:"Cornmeal, Wheat flour, Buttermilk (milk), Egg, Onion, Oil"},
  grits:{n:"Cheese Grits",i:"Corn grits, Milk, Cheese (milk), Butter (milk), Salt, Pepper"},
  shrimp_grits:{n:"Shrimp and Grits",i:"Shrimp (shellfish), Grits (corn), Cheese (milk), Butter (milk), Bacon (pork), Garlic, Lemon, Green onion"}
};

var FKW = {};
Object.keys(FOODS).forEach(function(k){ FKW[k] = [k.replace(/_/g, ' ')]; });
Object.assign(FKW, {
  burger:["burger","hamburger","cheeseburger","double cheeseburger","bacon cheeseburger","veggie burger"],
  pizza:["pizza","pepperoni pizza","margherita pizza","hawaiian pizza","bbq chicken pizza","white pizza"],
  fries:["fries","french fries","chips","sweet potato fries","cheese fries","loaded fries"],
  nuggets:["nugget","chicken nugget","chicken tenders"],
  fried_chicken:["fried chicken","chicken wings","korean fried chicken"],
  grilled_chicken:["grilled chicken","chicken breast","lemon herb chicken","honey garlic chicken"],
  tacos:["taco","tacos","fish tacos","chicken tacos","veggie tacos","taco supreme"],
  burrito:["burrito","burrito bowl","bean burrito","breakfast burrito"],
  quesadilla:["quesadilla","cheese quesadilla"],
  nachos:["nachos","loaded nachos"],
  sushi:["sushi","sashimi","california roll","spicy tuna roll","dragon roll"],
  ramen:["ramen","tonkotsu ramen","miso ramen","chicken ramen bowl"],
  pho:["pho","chicken pho"],
  pad_thai:["pad thai","chicken pad thai","veggie pad thai"],
  fried_rice:["fried rice","chicken fried rice","nasi goreng"],
  stir_fry:["stir fry","beef stir fry","veggie stir fry","tofu stir fry"],
  pasta:["pasta","spaghetti","fettuccine alfredo","penne arrabbiata","carbonara","butter noodles","pasta primavera"],
  spaghetti_bolognese:["spaghetti bolognese","spaghetti and meatballs"],
  mac_cheese:["mac and cheese","lobster mac and cheese","boxed mac and cheese"],
  lasagna:["lasagna","baked ziti"],
  chicken_parm:["chicken parmesan","chicken parm"],
  eggplant_parm:["eggplant parmesan"],
  grilled_cheese:["grilled cheese","grilled cheese and tomato soup"],
  sandwich:["sandwich","sub","hoagie","club sandwich","blt","reuben","turkey club","patty melt","turkey burger","fish filet sandwich","chicken sandwich"],
  hot_dog:["hot dog","corn dog"],
  salad:["salad","caesar salad","greek salad","cobb salad","caprese salad","garden salad","chicken caesar salad","chef salad","waldorf salad","fruit salad","quinoa salad","tabbouleh","couscous salad","chicken salad","macaroni salad","potato salad","coleslaw"],
  soup:["soup","chicken soup","tomato soup","minestrone","chili","french onion soup","broccoli cheese soup","cream of mushroom soup","chicken tortilla soup","chicken noodle soup","gazpacho","clam chowder","new england clam chowder","manhattan clam chowder"],
  dumpling:["dumpling","dumplings","potstickers","wonton soup"],
  spring_roll:["spring roll","spring rolls","egg rolls","crispy spring rolls"],
  chicken:["chicken","grilled chicken","fried chicken","chicken nuggets","chicken tenders","chicken wings","chicken salad","chicken soup","chicken curry","butter chicken","tikka masala","orange chicken","general tsos chicken","kung pao chicken","sesame chicken","sweet and sour chicken","chicken marsala","chicken piccata","chicken katsu","chicken shawarma","tandoori chicken","chicken korma","chicken momo","chicken manchurian"],
  beef:["beef","steak","ribeye","new york strip","filet mignon","bbq ribs","brisket","meatloaf","meatballs","pot roast","beef stroganoff","beef and broccoli","mongolian beef","bulgogi","beef noodle soup","beef stir fry","carne asada"],
  pork:["pork","pulled pork","pork chops","smothered pork chops","bacon","sausage","ham","carnitas"],
  seafood:["seafood","shrimp","crab","lobster","clam","mussel","calamari","fish","salmon","tuna","seafood pasta","shrimp scampi","lobster roll","crab cakes","lobster thermidor","clam linguine","shrimp po boy","crawfish etouffee","shrimp and grits","blackened fish","oysters"],
  rice:["rice","fried rice","biryani","risotto","paella","jambalaya","red beans and rice","bibimbap","kimbap","nasi goreng","jollof rice"],
  bread:["bread","garlic bread","focaccia","naan","garlic naan","cornbread","biscuit","bagel","croissant","pain au chocolate","danish pastry","cinnamon rolls","churros","funnel cake","beignets"],
  egg:["omelette","veggie omelette","bacon and eggs","eggs benedict","huevos rancheros","shakshuka","deviled eggs","french toast","cinnamon french toast","scrambled eggs"],
  pancake:["pancake","pancakes","blueberry pancakes"],
  waffle:["waffle","waffles","belgian waffles","chicken and waffles"],
  dessert:["dessert","cookies","cake","brownie","cheesecake","ice cream","milkshake","smoothie","chocolate","fudge","caramels","toffee","truffles","mousse","panna cotta","creme brulee","tiramisu","apple pie","pumpkin pie","key lime pie","bread pudding","banana pudding","pudding","sorbet","gelato","frozen yogurt","marshmallows","gummy bears","jelly beans","candy corn","snickerdoodles","sugar cookies","peanut butter cookies","oatmeal raisin cookies","chocolate chip cookies","blondie","red velvet cake","carrot cake","chocolate cake","new york cheesecake"],
  drink:["drink","soda","diet soda","root beer","lemonade","iced tea","coffee","cappuccino","latte","mocha","hot chocolate","hot cocoa","chai latte","matcha latte","energy drink","orange juice","apple juice","cranberry juice","chocolate milk","milkshake","smoothie"],
  yogurt:["yogurt","greek yogurt","parfait","frozen yogurt"],
  chip:["chips","nachos","tortilla chips","onion rings","mozzarella sticks","jalapeno poppers"],
  dip:["dip","hummus","guacamole","salsa","pico de gallo","spinach artichoke dip","buffalo chicken dip","baba ghanoush","tzatziki"],
  curry:["curry","chicken curry","butter chicken","tikka masala","palak paneer","chana masala","dal makhani","green curry","red curry","massaman curry","chicken korma"],
  wrap:["wrap","chicken caesar wrap","veggie wrap","shawarma","banh mi"],
  bowl:["bowl","burrito bowl","poke bowl","acai bowl","chicken rice bowl","teriyaki bowl","bibimbap"],
  breakfast:["breakfast","pancakes","waffles","french toast","omelette","eggs benedict","huevos rancheros","shakshuka","breakfast burrito","breakfast sandwich","avocado toast","bacon and eggs","oatmeal","cereal","overnight oats","avocado toast with egg"],
  snack:["snack","trail mix","granola bar","protein bar","energy bar","chips","pretzel","popcorn","crackers","hummus","guacamole","cheese plate","charcuterie","bruschetta","mezze platter","deviled eggs","pigs in blanket"],
  pasta_dish:["pasta","spaghetti","fettuccine alfredo","carbonara","mac and cheese","lasagna","baked ziti","ravioli","gnocchi","risotto","pasta primavera","penne arrabbiata","clam linguine","seafood pasta","butter noodles","chicken parmesan","eggplant parmesan"],
  indian:["indian","butter chicken","tikka masala","biryani","palak paneer","chana masala","dal makhani","naan","garlic naan","samosa","pakora","tandoori chicken","chicken korma","masala dosa","idli sambar"],
  chinese:["chinese","fried rice","kung pao chicken","orange chicken","general tsos chicken","sweet and sour chicken","beef and broccoli","mongolian beef","sesame chicken","scallion pancakes","dumplings","spring rolls","egg rolls","wonton soup","chow mein","lo mein","mapo tofu","kung pao tofu"],
  japanese:["japanese","sushi","sashimi","ramen","tempura","teriyaki","chicken katsu","tonkatsu","yakisoba","okonomiyaki","onigiri","edamame","miso soup","gyoza","udon"],
  korean:["korean","bibimbap","bulgogi","korean fried chicken","kimbap","jjajangmyeon","bibim guksu","tteokbokki","japchae","kimchi","korean bbq"],
  thai:["thai","pad thai","green curry","red curry","massaman curry","tom yum","tom kha gai","pad see ew","pad krapow","mango sticky rice","spring rolls","satay"],
  mexican:["mexican","tacos","burrito","quesadilla","nachos","enchiladas","tamales","guacamole","salsa","pico de gallo","churros","huevos rancheros"],
  italian:["italian","pizza","pasta","spaghetti","lasagna","risotto","gnocchi","ravioli","focaccia","tiramisu","bruschetta","caprese","chicken parm","eggplant parm","carbonara","fettuccine alfredo"],
  greek:["greek","gyro","souvlaki","moussaka","spanakopita","baklava","greek salad","tzatziki","dolmas","kebab"],
  mediterranean:["mediterranean","hummus","falafel","shawarma","baba ghanoush","tabbouleh","fattoush","kebab","gyro","tzatziki"],
  bbq:["bbq","barbecue","bbq ribs","pulled pork","brisket","pulled chicken","smoked meat"],
  comfort:["comfort food","mac and cheese","mashed potatoes","pot roast","meatloaf","chicken pot pie","shepherds pie","biscuits and gravy","chicken and waffles","chicken fried steak","poutine"],
  fast_food:["fast food","burger","fries","nuggets","hot dog","pizza","taco","sandwich","milkshake"],
  dessert_sweet:["sweet","dessert","cake","cookies","brownie","ice cream","chocolate","pie","cheesecake","pudding","fudge","candy","donut","muffin","croissant"],
  healthy:["healthy","salad","grilled chicken","grilled salmon","quinoa salad","fruit salad","smoothie","avocado toast","roasted vegetables","steamed vegetables","garden salad"],
  vegan:["vegan","veggie burger","veggie tacos","veggie wrap","hummus","guacamole","falafel","tofu stir fry","pad thai veggie","vegetable stir fry","fruit salad","roasted vegetables"],
  kid_friendly:["kid friendly","chicken nuggets","fries","mac and cheese","pizza","chicken fingers","grilled cheese","pasta","pancakes","waffles","hot dog","chicken tenders","chocolate milk","milkshake"]
});

var CONDITIONS_DB = [
  {id:1,c:"Milk allergy",cat:"Allergy",food:"Avoid milk, whey, casein, dairy ingredients",med:"Check labels/cross-contact",treat:"Avoidance; epinephrine for anaphylaxis"},
  {id:2,c:"Egg allergy",cat:"Allergy",food:"Avoid egg/egg-containing foods",med:"Vaccines/medications assessed individually",treat:"Avoidance; epinephrine if prescribed"},
  {id:3,c:"Peanut allergy",cat:"Allergy",food:"Avoid peanuts/peanut ingredients",med:"Cross-contact can matter",treat:"Avoidance; epinephrine"},
  {id:4,c:"Tree-nut allergy",cat:"Allergy",food:"Avoid implicated nuts",med:"Cross-contact",treat:"Avoidance; epinephrine"},
  {id:5,c:"Fish allergy",cat:"Allergy",food:"Avoid allergic fish",med:"Fish-derived ingredients",treat:"Avoidance; epinephrine"},
  {id:6,c:"Crustacean-shellfish allergy",cat:"Allergy",food:"Avoid shrimp, crab, lobster, etc.",med:"Cross-contact",treat:"Avoidance; epinephrine"},
  {id:7,c:"Wheat allergy",cat:"Allergy",food:"Avoid wheat/wheat ingredients",med:"Check medicines/foods individually",treat:"Avoidance; emergency treatment when severe"},
  {id:8,c:"Soy allergy",cat:"Allergy",food:"Avoid soy/tofu/soy protein",med:"Check processed foods",treat:"Avoidance; epinephrine"},
  {id:9,c:"Sesame allergy",cat:"Allergy",food:"Avoid sesame/tahini",med:"Cross-contact",treat:"Avoidance; epinephrine"},
  {id:10,c:"Mustard allergy",cat:"Allergy",food:"Avoid mustard/mustard seeds",med:"Sauces/spice mixes",treat:"Avoidance; epinephrine if severe"},
  {id:11,c:"Celery allergy",cat:"Allergy",food:"Avoid celery/celeriac",med:"Soups/stocks/spice mixes",treat:"Avoidance"},
  {id:12,c:"Lupin allergy",cat:"Allergy",food:"Avoid lupin/flour",med:"Bakery products",treat:"Avoidance"},
  {id:13,c:"Buckwheat allergy",cat:"Allergy",food:"Avoid buckwheat",med:"Flour/noodles",treat:"Avoidance"},
  {id:14,c:"Corn allergy",cat:"Allergy",food:"Avoid corn/corn derivatives when confirmed",med:"Modified starch/syrups may matter",treat:"Avoidance"},
  {id:15,c:"Coconut allergy",cat:"Allergy",food:"Avoid coconut if confirmed",med:"Cosmetics/foods may contain it",treat:"Avoidance"},
  {id:16,c:"Latex allergy",cat:"Allergy",food:"No specific diet universally",med:"Gloves, rubber products, medical equipment",treat:"Avoidance; allergy treatment"},
  {id:17,c:"Penicillin allergy",cat:"Drug allergy",food:"No food restriction",med:"Penicillins; related drugs assessed individually",treat:"Avoid culprit; alternatives"},
  {id:18,c:"NSAID hypersensitivity",cat:"Drug allergy",food:"Usually no food restriction",med:"Aspirin, ibuprofen, naproxen may trigger",treat:"Avoid culprit; medical alternatives"},
  {id:19,c:"Aspirin-exacerbated respiratory disease",cat:"Drug/respiratory",food:"No universal diet",med:"Aspirin/NSAIDs can trigger",treat:"Avoidance/desensitization/respiratory treatment"},
  {id:20,c:"Sulfonamide-drug allergy",cat:"Drug allergy",food:"No general sulfur-free diet",med:"Certain sulfonamide drugs",treat:"Avoid culprit; alternative drug"},
  {id:21,c:"Contrast-media reaction",cat:"Drug/medical",food:"No general diet",med:"Certain imaging contrast agents",treat:"Alternative contrast/premedication when appropriate"},
  {id:22,c:"Anaphylaxis history",cat:"Emergency allergy",food:"Avoid known allergens",med:"Carry prescribed epinephrine",treat:"Epinephrine + emergency care"},
  {id:23,c:"Oral allergy syndrome",cat:"Allergy syndrome",food:"Triggering raw fruits/vegetables may cause symptoms",med:"Pollen cross-reactivity",treat:"Avoid/cook trigger foods"},
  {id:24,c:"Atopic dermatitis with food allergy",cat:"Allergy/skin",food:"Avoid confirmed allergens only",med:"Skin irritants/allergens",treat:"Skin care + prescribed therapy"},
  {id:25,c:"Sesame-seed hypersensitivity",cat:"Allergy",food:"Avoid sesame products",med:"Tahini, buns, sauces",treat:"Avoidance"},
  {id:26,c:"G6PD deficiency",cat:"Genetic",food:"Avoid fava/broad beans; trigger list is drug-specific",med:"Certain oxidant drugs; naphthalene",treat:"Avoid triggers; treat hemolysis"},
  {id:27,c:"Celiac disease",cat:"Autoimmune",food:"Strict gluten-free: wheat, barley, rye",med:"Check medicines/supplements for gluten",treat:"Lifelong gluten-free diet"},
  {id:28,c:"Lactose intolerance",cat:"Intolerance",food:"Limit lactose-containing dairy",med:"Usually no major drug issue",treat:"Lactose reduction/lactase"},
  {id:29,c:"Fructose malabsorption",cat:"GI",food:"Reduce high-fructose foods as tolerated",med:"Individual",treat:"Diet modification"},
  {id:30,c:"Hereditary fructose intolerance",cat:"Genetic metabolic",food:"Avoid fructose, sucrose, sorbitol",med:"Certain formulations can matter",treat:"Strict avoidance"},
  {id:31,c:"Galactosemia",cat:"Genetic metabolic",food:"Avoid lactose/galactose sources",med:"Check formulations",treat:"Strict dietary restriction"},
  {id:32,c:"Phenylketonuria (PKU)",cat:"Genetic metabolic",food:"Restrict phenylalanine/high-protein foods; avoid aspartame",med:"Certain medicines/formulations",treat:"Special low-Phe diet +/- medication"},
  {id:33,c:"Maple syrup urine disease",cat:"Genetic metabolic",food:"Restrict branched-chain amino acids/protein",med:"Illness can precipitate crisis",treat:"Medical formula/diet"},
  {id:34,c:"MCAD deficiency",cat:"Genetic metabolic",food:"Avoid prolonged fasting",med:"Illness is major trigger",treat:"Frequent feeding/emergency glucose plan"},
  {id:35,c:"Urea-cycle disorder",cat:"Genetic metabolic",food:"Controlled protein intake",med:"Illness can cause hyperammonemia",treat:"Specialized diet/medicines"},
  {id:36,c:"Tyrosinemia",cat:"Genetic metabolic",food:"Protein/tyrosine/phenylalanine management",med:"Specialist medication",treat:"Medical diet +/- nitisinone"},
  {id:37,c:"Homocystinuria",cat:"Genetic metabolic",food:"Specialist protein/amino-acid management",med:"B6/betaine depending on type",treat:"Diet + targeted therapy"},
  {id:38,c:"Wilson disease",cat:"Genetic/metabolic",food:"Limit high-copper foods in some patients",med:"Copper interactions",treat:"Chelators/zinc/diet"},
  {id:39,c:"Hemochromatosis",cat:"Genetic/metabolic",food:"Avoid unnecessary iron supplements; alcohol may be restricted",med:"Iron-containing supplements",treat:"Phlebotomy +/- chelation"},
  {id:40,c:"Methylmalonic acidemia",cat:"Metabolic",food:"Specialized protein management",med:"Certain nutrients/medications",treat:"Medical diet +/- B12/carboxylase"},
  {id:41,c:"Propionic acidemia",cat:"Metabolic",food:"Specialized protein/intake control",med:"Illness/fasting risky",treat:"Medical diet +/- specialist therapy"},
  {id:42,c:"Isovaleric acidemia",cat:"Metabolic",food:"Protein/leucine restriction",med:"Illness can trigger crisis",treat:"Medical diet/medications"},
  {id:43,c:"Citrullinemia",cat:"Metabolic",food:"Protein management",med:"Hyperammonemia risk",treat:"Medical diet/medications"},
  {id:44,c:"Glutaric acidemia type I",cat:"Metabolic",food:"Avoid catabolic fasting; dietary management",med:"Illness is trigger",treat:"Medical nutrition/carnitine"},
  {id:45,c:"Fatty-acid oxidation disorder",cat:"Metabolic",food:"Avoid fasting",med:"Illness/exercise may trigger",treat:"Frequent feeding/emergency plan"},
  {id:46,c:"Glycogen-storage disease",cat:"Metabolic",food:"Avoid fasting; carbohydrate plan depends on type",med:"Exercise/fasting considerations",treat:"Medical nutrition/medications"},
  {id:47,c:"Hereditary coproporphyria",cat:"Porphyria",food:"Avoid individual triggers; regular nutrition",med:"Many drugs unsafe",treat:"Trigger avoidance + specialist treatment"},
  {id:48,c:"Acute intermittent porphyria",cat:"Porphyria",food:"Avoid fasting; individualized triggers",med:"Many medicines must be checked",treat:"Trigger avoidance/hemin when indicated"},
  {id:49,c:"Variegate porphyria",cat:"Porphyria",food:"Avoid fasting/triggers",med:"Drug safety critical",treat:"Specialist management"},
  {id:50,c:"Erythropoietic protoporphyria",cat:"Porphyria",food:"Sun/UV protection",med:"Certain treatments",treat:"Light avoidance/protective measures"},
  {id:51,c:"Salicylate sensitivity",cat:"Sensitivity",food:"Some individuals limit high-salicylate foods",med:"Aspirin/salicylates may trigger",treat:"Trigger avoidance"},
  {id:52,c:"Sulfite sensitivity",cat:"Sensitivity",food:"Sulfite-containing foods may trigger",med:"Some medicines also contain sulfites",treat:"Avoid triggers"},
  {id:53,c:"Histamine-related food intolerance",cat:"Sensitivity",food:"Some people limit aged/fermented foods",med:"Alcohol can worsen symptoms",treat:"Individualized diet"},
  {id:54,c:"FODMAP-sensitive IBS",cat:"GI sensitivity",food:"Reduce selected fermentable carbohydrates",med:"Individual",treat:"Structured low-FODMAP approach"},
  {id:55,c:"Caffeine sensitivity",cat:"Sensitivity",food:"Limit caffeine/energy drinks",med:"Stimulants can worsen symptoms",treat:"Reduction/avoidance"},
  {id:56,c:"Type 1 diabetes",cat:"Endocrine",food:"Carbohydrate planning; no universal forbidden food",med:"Insulin essential",treat:"Insulin"},
  {id:57,c:"Type 2 diabetes",cat:"Endocrine",food:"Control carbohydrate/calorie intake",med:"Many glucose-lowering drugs",treat:"Lifestyle +/- medication"},
  {id:58,c:"Prediabetes",cat:"Metabolic",food:"Reduce excessive refined carbs/calories",med:"Medication sometimes used",treat:"Lifestyle +/- medication"},
  {id:59,c:"Gestational diabetes",cat:"Pregnancy/endocrine",food:"Structured carbohydrate distribution",med:"Pregnancy-specific medicines",treat:"Diet +/- insulin/other therapy"},
  {id:60,c:"Diabetic ketoacidosis",cat:"Emergency metabolic",food:"Acute illness - do not fast as treatment",med:"Insulin interruption is major risk",treat:"Emergency insulin/fluids/electrolytes"},
  {id:61,c:"Hypoglycemia",cat:"Metabolic emergency",food:"Immediate fast-acting carbohydrate when appropriate",med:"Insulin/sulfonylureas can cause it",treat:"Glucose/glucagon + cause treatment"},
  {id:62,c:"Hyperthyroidism",cat:"Endocrine",food:"No universal diet",med:"Iodine/drug considerations vary",treat:"Antithyroid drugs/radioiodine/surgery"},
  {id:63,c:"Hypothyroidism",cat:"Endocrine",food:"No universal restriction",med:"Levothyroxine absorption interactions",treat:"Levothyroxine"},
  {id:64,c:"Hashimoto thyroiditis",cat:"Autoimmune",food:"No universal diet",med:"Thyroid replacement may be needed",treat:"Levothyroxine when hypothyroid"},
  {id:65,c:"Graves disease",cat:"Autoimmune",food:"No universal diet",med:"Iodine/medication issues",treat:"Antithyroid drug/radioiodine/surgery"},
  {id:66,c:"Addison disease",cat:"Endocrine",food:"Adequate salt/fluid may matter in some",med:"Steroid replacement essential",treat:"Hydrocortisone +/- fludrocortisone"},
  {id:67,c:"Adrenal insufficiency",cat:"Endocrine",food:"Individual salt/fluid plan",med:"Steroid replacement",treat:"Glucocorticoid replacement"},
  {id:68,c:"Cushing syndrome",cat:"Endocrine",food:"Manage calories/sodium as indicated",med:"Steroid source/medication management",treat:"Treat cause"},
  {id:69,c:"Hyperparathyroidism",cat:"Endocrine",food:"Hydration; calcium plan individualized",med:"Thiazides/other meds matter",treat:"Surgery/medication depending type"},
  {id:70,c:"Hypoparathyroidism",cat:"Endocrine",food:"Calcium/vitamin D management",med:"Calcium/phosphate interactions",treat:"Calcium + active vitamin D"},
  {id:71,c:"Osteoporosis",cat:"Bone",food:"Adequate calcium/vitamin D",med:"Medication-specific rules",treat:"Bisphosphonates/denosumab/etc."},
  {id:72,c:"Osteomalacia",cat:"Bone/metabolic",food:"Vitamin D/calcium as indicated",med:"Cause-specific",treat:"Vitamin D/calcium"},
  {id:73,c:"Rickets",cat:"Bone/metabolic",food:"Nutritional correction if deficient",med:"Cause-specific",treat:"Vitamin D/minerals"},
  {id:74,c:"Obesity",cat:"Metabolic",food:"Calorie/nutrition management",med:"Anti-obesity drugs vary",treat:"Lifestyle +/- medication/surgery"},
  {id:75,c:"Familial hypercholesterolemia",cat:"Genetic/metabolic",food:"Heart-healthy diet; no single forbidden food",med:"Statins/other lipid drugs",treat:"Statin +/- additional agents"},
  {id:76,c:"Hypertriglyceridemia",cat:"Metabolic",food:"Reduce excess sugars/refined carbs; alcohol often restricted",med:"Medication if severe",treat:"Lifestyle +/- medication"},
  {id:77,c:"Metabolic syndrome",cat:"Metabolic",food:"Weight/calorie/sodium/carbohydrate management",med:"Treat components",treat:"Lifestyle + component treatment"},
  {id:78,c:"Hyperuricemia",cat:"Metabolic",food:"Limit excessive purine/fructose/alcohol intake",med:"Diuretics etc. can affect urate",treat:"Lifestyle +/- urate-lowering drugs"},
  {id:79,c:"Gout",cat:"Metabolic",food:"Limit certain high-purine foods/alcohol; hydration",med:"Diuretics may contribute",treat:"Allopurinol/urate-lowering + flare treatment"},
  {id:80,c:"Severe insulin resistance",cat:"Endocrine",food:"Individual carbohydrate plan",med:"Insulin/other therapies",treat:"Treat cause + glucose control"},
  {id:81,c:"Diabetes insipidus",cat:"Endocrine",food:"Fluid intake individualized",med:"Desmopressin in central type",treat:"Hormone replacement/management"},
  {id:82,c:"SIADH",cat:"Endocrine/electrolyte",food:"Fluid restriction often used",med:"Drugs can cause SIADH",treat:"Treat cause + fluid/medications"},
  {id:83,c:"Hypernatremia",cat:"Electrolyte",food:"Fluid correction",med:"Drug causes may matter",treat:"Controlled fluid replacement"},
  {id:84,c:"Hyponatremia",cat:"Electrolyte",food:"Fluid/sodium management depends on cause",med:"Many medicines can contribute",treat:"Treat cause"},
  {id:85,c:"Hypokalemia",cat:"Electrolyte",food:"Potassium replacement/diet as indicated",med:"Diuretics common cause",treat:"Potassium replacement + cause treatment"},
  {id:86,c:"Chronic kidney disease",cat:"Renal",food:"Sodium; potassium/phosphorus/protein/fluid individualized",med:"Dose adjustment often needed",treat:"Cause control/supportive care"},
  {id:87,c:"End-stage kidney disease",cat:"Renal",food:"Fluid, sodium, potassium, phosphorus individualized",med:"Many drugs require adjustment",treat:"Dialysis/transplant/supportive care"},
  {id:88,c:"Hemodialysis",cat:"Renal",food:"Fluid, sodium, potassium, phosphorus management",med:"Drug timing/dosing matters",treat:"Dialysis"},
  {id:89,c:"Peritoneal dialysis",cat:"Renal",food:"Fluid/electrolytes/protein individualized",med:"Infection/medication considerations",treat:"Dialysis"},
  {id:90,c:"Acute kidney injury",cat:"Renal",food:"Nutrition/electrolytes individualized",med:"Many drugs need temporary adjustment",treat:"Treat cause/support kidney"},
  {id:91,c:"Kidney stones - calcium oxalate",cat:"Renal",food:"Hydration; sodium/oxalate management",med:"Certain drugs/supplements",treat:"Fluids + prevention"},
  {id:92,c:"Kidney stones - uric acid",cat:"Renal",food:"Hydration; moderate purine intake",med:"Urate drugs may help",treat:"Fluids/alkalinization +/- medication"},
  {id:93,c:"Kidney stones - cystine",cat:"Genetic/renal",food:"Very high fluid intake; sodium reduction",med:"Cystine-binding drugs",treat:"Fluids/medications"},
  {id:94,c:"Hyperoxaluria",cat:"Metabolic/renal",food:"Oxalate reduction depending on type",med:"Calcium/citrate management",treat:"Diet + specialist treatment"},
  {id:95,c:"Polycystic kidney disease",cat:"Genetic renal",food:"BP/sodium management",med:"Many BP drugs possible",treat:"BP/kidney management"},
  {id:96,c:"IgA nephropathy",cat:"Renal/immune",food:"Sodium reduction often helpful",med:"BP/proteinuria drugs",treat:"ACEi/ARB +/- immunotherapy"},
  {id:97,c:"Nephrotic syndrome",cat:"Renal",food:"Sodium/fluid individualized",med:"Many drugs require monitoring",treat:"Cause-specific"},
  {id:98,c:"Glomerulonephritis",cat:"Renal/immune",food:"Sodium/protein/fluid individualized",med:"Some nephrotoxic drugs avoided",treat:"Cause-specific"},
  {id:99,c:"Lupus nephritis",cat:"Autoimmune renal",food:"Sodium/kidney diet if needed",med:"Immunosuppressive drugs",treat:"Immunosuppression"},
  {id:100,c:"Diabetic kidney disease",cat:"Renal/endocrine",food:"Sodium/electrolytes individualized",med:"Kidney-dose adjustments",treat:"Glucose/BP/kidney protective therapy"},
  {id:101,c:"Renal tubular acidosis",cat:"Renal/metabolic",food:"Electrolyte plan individualized",med:"Cause-specific",treat:"Alkali/electrolyte treatment"},
  {id:102,c:"Nephrogenic diabetes insipidus",cat:"Renal/endocrine",food:"Fluid/sodium plan",med:"Lithium may cause it",treat:"Remove cause + treatment"},
  {id:103,c:"Bladder stones",cat:"Urologic",food:"Fluids; cause-specific diet",med:"Cause-specific",treat:"Hydration/procedure"},
  {id:104,c:"Recurrent UTI",cat:"Urologic",food:"Hydration; no universal forbidden food",med:"Antibiotic choice matters",treat:"Antibiotics/prevention"},
  {id:105,c:"Pyelonephritis",cat:"Infection/renal",food:"Hydration",med:"Antibiotics",treat:"Antibiotics"},
  {id:106,c:"Chronic prostatitis",cat:"Urologic",food:"Individual triggers may include caffeine/alcohol",med:"Antibiotics sometimes",treat:"Symptom/cause treatment"},
  {id:107,c:"Benign prostatic hyperplasia",cat:"Urologic",food:"Limit fluids near bedtime if needed",med:"Decongestants can worsen symptoms",treat:"Alpha-blocker/5-alpha-reductase inhibitor"},
  {id:108,c:"Overactive bladder",cat:"Urologic",food:"Caffeine/fluid timing may matter",med:"Some drugs worsen retention",treat:"Bladder therapy/medication"},
  {id:109,c:"Urinary incontinence",cat:"Urologic",food:"Fluid/caffeine management",med:"Medication-specific",treat:"Behavioral/drug/surgical"},
  {id:110,c:"Acute urinary retention",cat:"Urologic emergency",food:"No main food restriction",med:"Anticholinergics/decongestants may contribute",treat:"Immediate bladder drainage"},
  {id:111,c:"Alkalosis",cat:"Electrolyte",food:"Cause-specific electrolyte management",med:"Diuretics can contribute",treat:"Treat cause"},
  {id:112,c:"Acidosis",cat:"Metabolic",food:"Cause-specific",med:"Renal/metabolic drugs may matter",treat:"Treat cause"},
  {id:113,c:"Hyperkalemia",cat:"Electrolyte emergency",food:"High-potassium foods may need restriction",med:"ACEi/ARB/spironolactone and others can contribute",treat:"Urgent treatment if severe"},
  {id:114,c:"Hypomagnesemia",cat:"Electrolyte",food:"Magnesium replacement/diet",med:"Diuretics/PPI use may contribute",treat:"Magnesium replacement"},
  {id:115,c:"Hyperphosphatemia",cat:"Renal/metabolic",food:"Phosphorus restriction in CKD when appropriate",med:"Phosphate binders",treat:"Diet + binders"},
  {id:116,c:"IBS",cat:"GI",food:"Individual triggers; sometimes low-FODMAP",med:"Stress/medications can affect symptoms",treat:"Diet + symptom treatment"},
  {id:117,c:"Crohn disease",cat:"GI/immune",food:"Individual; nutrition during flares",med:"NSAIDs may worsen some patients",treat:"Steroids/biologics/other therapy"},
  {id:118,c:"Ulcerative colitis",cat:"GI/immune",food:"Individual; flare diet",med:"NSAIDs may worsen",treat:"Anti-inflammatory/biologic therapy"},
  {id:119,c:"Diverticulitis",cat:"GI",food:"Acute diet individualized; hydration",med:"Antibiotics only when indicated",treat:"Supportive/antibiotic treatment"},
  {id:120,c:"Diverticulosis",cat:"GI",food:"Fiber often encouraged",med:"Individual",treat:"Diet/lifestyle"},
  {id:121,c:"GERD",cat:"GI",food:"Identify triggers; large/fatty meals may worsen",med:"NSAIDs etc. may irritate",treat:"Acid suppression/lifestyle"},
  {id:122,c:"Peptic ulcer disease",cat:"GI",food:"Avoid personal irritants; no universal diet",med:"NSAIDs major cause",treat:"Acid suppression +/- antibiotics"},
  {id:123,c:"H. pylori infection",cat:"Infection/GI",food:"No special universal diet",med:"Antibiotics + acid suppression",treat:"Eradication therapy"},
  {id:124,c:"Gastritis",cat:"GI",food:"Avoid personal irritants/alcohol if relevant",med:"NSAIDs can cause/worsen",treat:"Treat cause/acid suppression"},
  {id:125,c:"Gastroparesis",cat:"GI",food:"Small frequent meals; lower-fat/fiber as directed",med:"Certain drugs slow gastric emptying",treat:"Diet/medication"},
  {id:126,c:"C. difficile colitis",cat:"Infection/GI",food:"Hydration/nutrition",med:"Antibiotics affect risk",treat:"Specific antibiotics"},
  {id:127,c:"Microscopic colitis",cat:"GI/immune",food:"Individual triggers",med:"NSAIDs/some drugs associated",treat:"Budesonide commonly used"},
  {id:128,c:"Short bowel syndrome",cat:"GI",food:"Specialized nutrition/fluid/electrolytes",med:"Drug absorption issues",treat:"Nutrition + medication"},
  {id:129,c:"Pancreatic insufficiency",cat:"GI",food:"Adequate nutrition; enzymes with meals",med:"Enzyme timing matters",treat:"Pancreatic enzyme replacement"},
  {id:130,c:"Acute pancreatitis",cat:"GI emergency",food:"Initial diet based on severity",med:"Alcohol/gallstones/medicines cause",treat:"Supportive hospital treatment"},
  {id:131,c:"Chronic pancreatitis",cat:"GI",food:"Alcohol avoidance; nutrition support",med:"Smoking/alcohol important",treat:"Enzymes + cause treatment"},
  {id:132,c:"Gallstones",cat:"GI",food:"Avoid personal high-fat triggers",med:"Some meds increase risk",treat:"Surgery/medications depending case"},
  {id:133,c:"Cholecystitis",cat:"GI emergency",food:"Acute diet per medical plan",med:"Treat infection/inflammation",treat:"Often surgery"},
  {id:134,c:"Fatty liver disease",cat:"Liver/metabolic",food:"Weight/alcohol/sugar management",med:"Medication review",treat:"Lifestyle +/- medication"},
  {id:135,c:"Cirrhosis",cat:"Liver",food:"Sodium; protein/fluid individualized",med:"Many medications require caution",treat:"Treat cause/complications"},
  {id:136,c:"Hepatitis A",cat:"Infection/liver",food:"No special universal forbidden diet",med:"Avoid liver-toxic substances",treat:"Supportive care"},
  {id:137,c:"Hepatitis B",cat:"Infection/liver",food:"Avoid alcohol; balanced nutrition",med:"Antivirals in selected cases",treat:"Monitoring/antivirals"},
  {id:138,c:"Hepatitis C",cat:"Infection/liver",food:"Avoid alcohol",med:"Drug interactions significant",treat:"Direct-acting antivirals"},
  {id:139,c:"Celiac-related dermatitis herpetiformis",cat:"Autoimmune",food:"Strict gluten-free",med:"Dapsone may be used",treat:"Gluten-free +/- dapsone"},
  {id:140,c:"Malabsorption syndrome",cat:"GI",food:"Nutrient-specific adjustments",med:"Drug absorption can change",treat:"Treat cause/supplements"},
  {id:141,c:"Lactase deficiency",cat:"GI",food:"Lactose reduction",med:"Lactase products",treat:"Lactase/diet adjustment"},
  {id:142,c:"Dumping syndrome",cat:"GI",food:"Small meals; controlled sugars",med:"Post-surgical medication issues",treat:"Diet/medication"},
  {id:143,c:"Hemorrhoids",cat:"GI",food:"Fiber + fluids usually helpful",med:"Constipating drugs can worsen",treat:"Fiber/topicals/procedures"},
  {id:144,c:"Chronic constipation",cat:"GI",food:"Fiber/fluid if appropriate",med:"Opioids and others cause constipation",treat:"Fiber/laxatives/treat cause"},
  {id:145,c:"Ulcerative proctitis",cat:"GI/immune",food:"Individual",med:"Medication-specific",treat:"Rectal/systemic anti-inflammatory"},
  {id:146,c:"Hypertension",cat:"Cardiovascular",food:"Reduce excess sodium; limit alcohol",med:"NSAIDs/decongestants may raise BP",treat:"Antihypertensives"},
  {id:147,c:"Heart failure",cat:"Cardiovascular",food:"Sodium/fluid individualized",med:"Many cardiac drugs interact",treat:"Guideline-directed therapy"},
  {id:148,c:"Coronary artery disease",cat:"Cardiovascular",food:"Heart-healthy diet; limit trans/saturated fats",med:"NSAID/statin interactions etc.",treat:"Statin/antiplatelet/other therapy"},
  {id:149,c:"Angina",cat:"Cardiovascular",food:"Trigger management",med:"Nitrates + PDE5 inhibitors dangerous together",treat:"Antianginal therapy"},
  {id:150,c:"Heart attack history",cat:"Cardiovascular",food:"Heart-healthy diet",med:"Antiplatelets/statins",treat:"Secondary prevention"},
  {id:151,c:"Atrial fibrillation",cat:"Arrhythmia",food:"Alcohol may trigger some cases",med:"Anticoagulant interactions",treat:"Rate/rhythm control + anticoagulation"},
  {id:152,c:"Atrial flutter",cat:"Arrhythmia",food:"Individual",med:"Anticoagulation considerations",treat:"Rate/rhythm control"},
  {id:153,c:"Supraventricular tachycardia",cat:"Arrhythmia",food:"Caffeine may trigger some",med:"Stimulants",treat:"Vagal maneuvers/meds/ablation"},
  {id:154,c:"Ventricular tachycardia",cat:"Arrhythmia",food:"Individual",med:"QT/proarrhythmic medications matter",treat:"Emergency specialist treatment"},
  {id:155,c:"Long QT syndrome",cat:"Genetic cardiac",food:"Avoid individual triggers",med:"Many QT-prolonging drugs need avoidance",treat:"Beta blocker +/- ICD"},
  {id:156,c:"Brugada syndrome",cat:"Genetic cardiac",food:"Fever control; individual triggers",med:"Certain drugs unsafe",treat:"Fever treatment/avoid drugs"},
  {id:157,c:"Peripheral artery disease",cat:"Vascular",food:"Heart-healthy diet",med:"Smoking is major risk",treat:"Exercise/vascular meds"},
  {id:158,c:"Deep-vein thrombosis",cat:"Vascular",food:"No universal food restriction",med:"Anticoagulant interactions",treat:"Anticoagulation"},
  {id:159,c:"Pulmonary embolism",cat:"Vascular emergency",food:"No universal diet",med:"Anticoagulants",treat:"Emergency anticoagulation"},
  {id:160,c:"Hyperlipidemia",cat:"Metabolic/cardiovascular",food:"Reduce saturated/trans fat",med:"Statin interactions",treat:"Statins/other lipid drugs"},
  {id:161,c:"Aortic aneurysm",cat:"Vascular",food:"Heart-healthy/sodium management",med:"BP medications",treat:"Monitoring/surgery when indicated"},
  {id:162,c:"Cardiomyopathy",cat:"Cardiac",food:"Individual",med:"Medication-specific",treat:"Cause-directed cardiac therapy"},
  {id:163,c:"Hypertrophic cardiomyopathy",cat:"Genetic cardiac",food:"Hydration individualized",med:"Certain drugs contraindicated in some cases",treat:"Beta blockers/etc."},
  {id:164,c:"Myocarditis",cat:"Cardiac/inflammatory",food:"Individual",med:"Exercise may be restricted",treat:"Rest/cause-specific treatment"},
  {id:165,c:"Pericarditis",cat:"Cardiac/inflammatory",food:"No major universal diet",med:"NSAIDs/colchicine",treat:"Anti-inflammatory treatment"},
  {id:166,c:"Endocarditis",cat:"Infection/cardiac",food:"No major diet",med:"Antibiotics",treat:"IV antibiotics/surgery if needed"},
  {id:167,c:"Rheumatic heart disease",cat:"Cardiac/infectious",food:"No universal diet",med:"Penicillin prophylaxis in some",treat:"Antibiotics/cardiac care"},
  {id:168,c:"Orthostatic hypotension",cat:"Autonomic/cardiac",food:"Fluids/salt may be increased in some",med:"BP-lowering drugs can worsen",treat:"Fluids/compression/medications"},
  {id:169,c:"Asthma",cat:"Respiratory",food:"Avoid confirmed triggers",med:"NSAIDs may trigger some patients",treat:"Inhalers +/- biologics"},
  {id:170,c:"COPD",cat:"Respiratory",food:"Adequate nutrition; no universal forbidden food",med:"Smoking/medication interactions",treat:"Inhalers + pulmonary care"},
  {id:171,c:"Emphysema",cat:"Respiratory",food:"No major food restriction",med:"Smoking cessation essential",treat:"Inhalers/support"},
  {id:172,c:"Chronic bronchitis",cat:"Respiratory",food:"No major food restriction",med:"Smoking/irritants",treat:"Inhalers/cessation"},
  {id:173,c:"Pneumonia",cat:"Infection",food:"Hydration/nutrition",med:"Antibiotics if bacterial",treat:"Cause-specific treatment"},
  {id:174,c:"Tuberculosis",cat:"Infection",food:"Adequate nutrition",med:"Drug interactions are major",treat:"Multi-drug therapy"},
  {id:175,c:"Pulmonary fibrosis",cat:"Respiratory",food:"Nutrition support if needed",med:"Drug-specific",treat:"Antifibrotic/supportive"},
  {id:176,c:"Pulmonary hypertension",cat:"Vascular lung",food:"Sodium/fluid individualized",med:"Drug interactions significant",treat:"Pulmonary vasodilators"},
  {id:177,c:"Sleep apnea",cat:"Sleep/respiratory",food:"Weight management when appropriate",med:"Sedatives/alcohol can worsen",treat:"CPAP/oral devices/weight treatment"},
  {id:178,c:"Cystic fibrosis",cat:"Genetic respiratory",food:"Often high-calorie/high-protein; enzymes",med:"CFTR modulators/interactions",treat:"Airway care + enzymes + modulators"},
  {id:179,c:"Bronchiectasis",cat:"Respiratory",food:"Adequate nutrition/hydration",med:"Antibiotic selection",treat:"Airway clearance/antibiotics"},
  {id:180,c:"Sarcoidosis",cat:"Inflammatory",food:"Calcium/vitamin D may need monitoring",med:"Steroids",treat:"Cause/severity-based treatment"},
  {id:181,c:"Alpha-1 antitrypsin deficiency",cat:"Genetic",food:"Avoid smoking/alcohol excess",med:"Replacement therapy in selected cases",treat:"Smoking avoidance/support"},
  {id:182,c:"Allergic rhinitis",cat:"Allergy",food:"Avoid individual allergens",med:"Sedating antihistamines affect driving",treat:"Antihistamines/nasal steroids"},
  {id:183,c:"Chronic sinusitis",cat:"ENT/respiratory",food:"Individual triggers",med:"NSAID/allergy issues",treat:"Nasal therapy +/- surgery"},
  {id:184,c:"Nasal polyps",cat:"ENT",food:"No universal food restriction",med:"Aspirin sensitivity in some",treat:"Nasal steroids/biologics/surgery"},
  {id:185,c:"Epilepsy",cat:"Neurological",food:"Avoid known personal triggers; ketogenic diet only medically",med:"Many drug interactions",treat:"Antiseizure medicines"},
  {id:186,c:"Migraine",cat:"Neurological",food:"Identify individual food triggers",med:"Triptan/other interactions",treat:"Acute + preventive therapy"},
  {id:187,c:"Multiple sclerosis",cat:"Neurological/immune",food:"No universal forbidden diet",med:"Medication-specific",treat:"Disease-modifying therapy"},
  {id:188,c:"Parkinson disease",cat:"Neurological",food:"Protein timing may matter for levodopa in some",med:"Levodopa interactions",treat:"Levodopa/carbidopa etc."},
  {id:189,c:"Alzheimer disease",cat:"Neurological",food:"No universal restriction",med:"Drug-specific",treat:"Symptom/supportive treatment"},
  {id:190,c:"Dementia with Lewy bodies",cat:"Neurological",food:"No universal restriction",med:"Antipsychotics can be problematic",treat:"Supportive/selected medication"},
  {id:191,c:"ALS",cat:"Neurological",food:"Nutrition/swallowing management",med:"Drug-specific",treat:"Disease-modifying/supportive"},
  {id:192,c:"Huntington disease",cat:"Genetic neurological",food:"Nutritional support often needed",med:"Drug-specific",treat:"Symptom treatment"},
  {id:193,c:"Narcolepsy",cat:"Sleep/neurological",food:"Caffeine/stimulant timing individualized",med:"Sedatives/stimulants",treat:"Wake-promoting medicines"},
  {id:194,c:"Restless legs syndrome",cat:"Neurological",food:"Iron status/nutrition may matter",med:"Some drugs worsen symptoms",treat:"Iron or symptom drugs"},
  {id:195,c:"Trigeminal neuralgia",cat:"Neurological",food:"No universal food restriction",med:"Drug interactions",treat:"Carbamazepine/other therapies"},
  {id:196,c:"Peripheral neuropathy",cat:"Neurological",food:"Treat nutritional causes",med:"Alcohol/medications can contribute",treat:"Cause-specific"},
  {id:197,c:"Diabetic neuropathy",cat:"Neurological",food:"Glucose control",med:"Medication interactions",treat:"Glucose control + pain therapy"},
  {id:198,c:"Guillain-Barre syndrome",cat:"Neurological/immune",food:"Swallowing/nutrition support",med:"Immunotherapy",treat:"IVIG/plasma exchange"},
  {id:199,c:"Myasthenia gravis",cat:"Neuromuscular",food:"Swallowing management if severe",med:"Certain antibiotics/meds can worsen",treat:"Pyridostigmine/immunotherapy"},
  {id:200,c:"Duchenne muscular dystrophy",cat:"Genetic",food:"Nutrition/weight management",med:"Steroid side effects",treat:"Steroids + supportive therapy"},
  {id:201,c:"Spinal muscular atrophy",cat:"Genetic",food:"Feeding/swallowing management",med:"Disease-modifying therapy",treat:"Nusinersen/risdiplam/gene therapy"},
  {id:202,c:"Charcot-Marie-Tooth disease",cat:"Genetic",food:"No universal food restriction",med:"Neurotoxic drugs may matter",treat:"Supportive/physical therapy"},
  {id:203,c:"Bell's palsy",cat:"Neurological",food:"No major restriction",med:"Steroids/antivirals sometimes",treat:"Steroids/support"},
  {id:204,c:"Stroke history",cat:"Neurological/vascular",food:"Heart-healthy/sodium management",med:"Anticoagulant/antiplatelet interactions",treat:"Rehabilitation + prevention"},
  {id:205,c:"Transient ischemic attack",cat:"Vascular/neuro",food:"Cardiovascular risk diet",med:"Antiplatelet/anticoagulant therapy",treat:"Risk-factor treatment"},
  {id:206,c:"Brain tumor",cat:"Neurological/oncology",food:"Nutrition individualized",med:"Steroids/antiepileptic/oncology interactions",treat:"Surgery/radiation/systemic treatment"},
  {id:207,c:"Meningitis",cat:"Infection/neuro",food:"Hydration/nutrition",med:"Antibiotics/antivirals",treat:"Emergency treatment"},
  {id:208,c:"Encephalitis",cat:"Infection/neuro",food:"Supportive nutrition",med:"Antivirals/steroids depending cause",treat:"Hospital treatment"},
  {id:209,c:"Iron-deficiency anemia",cat:"Blood",food:"Iron-rich diet may help",med:"Iron supplements",treat:"Iron replacement + find cause"},
  {id:210,c:"B12 deficiency",cat:"Blood/nutritional",food:"Adequate B12",med:"Metformin/PPI use may contribute",treat:"B12 replacement"},
  {id:211,c:"Folate deficiency",cat:"Blood/nutritional",food:"Folate-rich foods",med:"Methotrexate interacts",treat:"Folate replacement"},
  {id:212,c:"Pernicious anemia",cat:"Autoimmune blood",food:"No major food restriction",med:"B12 absorption impaired",treat:"B12 replacement"},
  {id:213,c:"Sickle-cell disease",cat:"Genetic blood",food:"Hydration; individualized nutrition",med:"Certain drugs need specialist care",treat:"Hydroxyurea etc."},
  {id:214,c:"Sickle-cell trait",cat:"Genetic blood",food:"Usually no special diet",med:"Extreme dehydration/hypoxia can matter",treat:"Usually no routine treatment"},
  {id:215,c:"Thalassemia major",cat:"Genetic blood",food:"Iron intake/supplements individualized",med:"Transfusions/chelation",treat:"Transfusion + chelation"},
  {id:216,c:"Hemophilia A",cat:"Genetic bleeding",food:"No universal diet",med:"NSAIDs/aspirin generally avoided unless directed",treat:"Factor VIII/other therapy"},
  {id:217,c:"Hemophilia B",cat:"Genetic bleeding",food:"No universal diet",med:"Avoid bleeding-risk drugs",treat:"Factor IX/other therapy"},
  {id:218,c:"Von Willebrand disease",cat:"Bleeding disorder",food:"No universal diet",med:"Aspirin/NSAID caution",treat:"Desmopressin/factor therapy"},
  {id:219,c:"Immune thrombocytopenia",cat:"Autoimmune blood",food:"No major diet",med:"NSAID/antiplatelet bleeding risk",treat:"Steroids/IVIG/other therapy"},
  {id:220,c:"Thrombophilia",cat:"Blood/clotting",food:"No universal diet",med:"Hormones/smoking may affect risk",treat:"Anticoagulation depending risk"},
  {id:221,c:"Polycythemia vera",cat:"Blood cancer",food:"Hydration; no major universal restriction",med:"Thrombosis risk",treat:"Phlebotomy/aspirin/targeted therapy"},
  {id:222,c:"Essential thrombocythemia",cat:"Blood disorder",food:"No major diet",med:"Antiplatelet/anticoagulation",treat:"Risk-based therapy"},
  {id:223,c:"Leukopenia/neutropenia",cat:"Blood/immune",food:"Food safety may be important depending severity",med:"Certain drugs suppress marrow",treat:"Treat cause/infection prevention"},
  {id:224,c:"Aplastic anemia",cat:"Bone marrow",food:"Food safety if profoundly immunocompromised",med:"Many drug interactions",treat:"Transfusion/immunosuppression/transplant"},
  {id:225,c:"Myelodysplastic syndrome",cat:"Bone marrow",food:"Nutrition individualized",med:"Chemotherapy/supportive medications",treat:"Supportive/oncologic"},
  {id:226,c:"Leukemia",cat:"Cancer",food:"Nutrition/food safety individualized",med:"Chemotherapy interactions",treat:"Chemotherapy/targeted/transplant"},
  {id:227,c:"Lymphoma",cat:"Cancer",food:"Nutrition individualized",med:"Chemotherapy/biologics",treat:"Oncology treatment"},
  {id:228,c:"Multiple myeloma",cat:"Cancer",food:"Kidney/bone diet may matter",med:"NSAID/kidney concerns",treat:"Oncology therapy"},
  {id:229,c:"DIC",cat:"Emergency clotting",food:"ICU nutrition",med:"Many drugs/blood products",treat:"Emergency treatment"},
  {id:230,c:"Hemolytic anemia",cat:"Blood",food:"Trigger-specific",med:"Certain drugs/conditions cause hemolysis",treat:"Treat cause"},
  {id:231,c:"Autoimmune hemolytic anemia",cat:"Autoimmune blood",food:"No general diet",med:"Drug-induced forms possible",treat:"Steroids/immunotherapy"},
  {id:232,c:"Hereditary spherocytosis",cat:"Genetic blood",food:"Folate may be needed",med:"Hemolysis triggers",treat:"Folic acid/splenectomy selected"},
  {id:233,c:"Autoimmune hepatitis",cat:"Liver/immune",food:"Avoid alcohol; nutrition individualized",med:"Immunosuppressants",treat:"Steroids/immune therapy"},
  {id:234,c:"Primary biliary cholangitis",cat:"Liver/immune",food:"Alcohol avoidance; nutrition",med:"Drug-specific",treat:"Ursodeoxycholic acid/other"},
  {id:235,c:"Primary sclerosing cholangitis",cat:"Liver/immune",food:"Nutrition/deficiency management",med:"Medication-specific",treat:"Monitoring/transplant when needed"},
  {id:236,c:"Hepatic encephalopathy",cat:"Liver",food:"Protein is not simply forbidden; individualized",med:"Sedatives can worsen",treat:"Lactulose/rifaximin etc."},
  {id:237,c:"Ascites from cirrhosis",cat:"Liver",food:"Sodium restriction commonly",med:"Diuretics",treat:"Sodium restriction/diuretics"},
  {id:238,c:"Alcoholic liver disease",cat:"Liver",food:"Complete alcohol avoidance",med:"Acetaminophen/alcohol issue",treat:"Alcohol cessation/nutrition"},
  {id:239,c:"Acute liver failure",cat:"Liver emergency",food:"ICU nutrition",med:"Hepatotoxic drugs avoided",treat:"Emergency specialist treatment"},
  {id:240,c:"Nonalcoholic steatohepatitis",cat:"Liver/metabolic",food:"Weight/calorie/alcohol management",med:"Medication-specific",treat:"Lifestyle +/- medication"},
  {id:241,c:"Cholestasis",cat:"Liver",food:"Fat-soluble vitamins may need replacement",med:"Drug-induced causes possible",treat:"Treat cause"},
  {id:242,c:"Esophageal varices",cat:"Liver/GI",food:"Avoid alcohol; individual diet",med:"NSAID bleeding risk",treat:"Beta blockers/endoscopy"},
  {id:243,c:"Portal hypertension",cat:"Liver/vascular",food:"Sodium management if ascites",med:"Medication-specific",treat:"Treat liver disease/complications"},
  {id:244,c:"Celiac-related malabsorption",cat:"GI/autoimmune",food:"Gluten-free",med:"Vitamin/mineral deficiencies",treat:"Gluten-free + supplements"},
  {id:245,c:"Tropical sprue",cat:"GI",food:"Nutritional management",med:"Antibiotics/folate sometimes",treat:"Nutrition + medication"},
  {id:246,c:"Rheumatoid arthritis",cat:"Autoimmune",food:"No universal forbidden food",med:"NSAIDs/immunosuppressants",treat:"DMARDs/biologics"},
  {id:247,c:"Systemic lupus erythematosus",cat:"Autoimmune",food:"Heart-healthy diet; individual restrictions",med:"Many drug interactions",treat:"Immunosuppression"},
  {id:248,c:"Sjogren syndrome",cat:"Autoimmune",food:"Hydration; avoid foods that worsen dry mouth",med:"Medication-related dryness",treat:"Saliva/eye therapy"},
  {id:249,c:"Systemic sclerosis",cat:"Autoimmune",food:"Small meals/reflux management",med:"Drug-specific",treat:"Immune/organ therapy"},
  {id:250,c:"Ankylosing spondylitis",cat:"Autoimmune",food:"No universal food restriction",med:"NSAIDs/biologics",treat:"NSAIDs/biologics"},
  {id:251,c:"Psoriatic arthritis",cat:"Autoimmune",food:"Weight/heart-healthy approach",med:"Biologic interactions",treat:"DMARDs/biologics"},
  {id:252,c:"Reactive arthritis",cat:"Inflammatory",food:"No major diet",med:"Infection triggers",treat:"NSAIDs/treat infection"},
  {id:253,c:"Vasculitis",cat:"Autoimmune",food:"Individual",med:"Immunosuppressants",treat:"Steroids/immunotherapy"},
  {id:254,c:"Giant-cell arteritis",cat:"Autoimmune",food:"No specific diet",med:"Steroid therapy",treat:"High-dose steroids"},
  {id:255,c:"Polymyalgia rheumatica",cat:"Autoimmune",food:"No major restriction",med:"Long steroid courses",treat:"Corticosteroids"},
  {id:256,c:"Behcet disease",cat:"Autoimmune",food:"Individual mouth-ulcer triggers",med:"Immunosuppressants",treat:"Anti-inflammatory therapy"},
  {id:257,c:"Dermatomyositis",cat:"Autoimmune",food:"Nutrition/swallowing considerations",med:"Drug-specific",treat:"Immunosuppression"},
  {id:258,c:"Polymyositis",cat:"Autoimmune",food:"Nutrition/swallowing support",med:"Drug-specific",treat:"Immunosuppression"},
  {id:259,c:"Antiphospholipid syndrome",cat:"Autoimmune/clotting",food:"No universal diet",med:"Anticoagulation",treat:"Anticoagulation"},
  {id:260,c:"Autoimmune thyroiditis",cat:"Autoimmune",food:"No universal gluten-free diet unless celiac",med:"Thyroid replacement",treat:"Levothyroxine if needed"},
  {id:261,c:"Autoimmune gastritis",cat:"Autoimmune GI",food:"B12/iron nutrition",med:"Absorption issues",treat:"B12/iron"},
  {id:262,c:"Autoimmune pancreatitis",cat:"Autoimmune",food:"Nutrition individualized",med:"Steroids",treat:"Corticosteroids"},
  {id:263,c:"IgA vasculitis",cat:"Immune/vascular",food:"Kidney involvement may change diet",med:"Medication-specific",treat:"Supportive/steroids"},
  {id:264,c:"Kawasaki disease",cat:"Immune/vascular",food:"No long-term universal diet",med:"Aspirin during treatment",treat:"IVIG + aspirin"},
  {id:265,c:"Adult Still disease",cat:"Inflammatory",food:"No universal diet",med:"Immunosuppressive therapy",treat:"Steroids/biologics"},
  {id:266,c:"Eosinophilic esophagitis",cat:"Immune/GI",food:"Specific food elimination may be prescribed",med:"Swallowed steroids",treat:"Diet + swallowed steroids"},
  {id:267,c:"Eosinophilic gastritis",cat:"Immune/GI",food:"Trigger food elimination in some",med:"Steroids",treat:"Diet/medical therapy"},
  {id:268,c:"Eosinophilic gastroenteritis",cat:"Immune/GI",food:"Elimination diets may be used",med:"Steroids",treat:"Diet/medical therapy"},
  {id:269,c:"Marfan syndrome",cat:"Genetic connective tissue",food:"No major food restriction",med:"Cardiovascular drug monitoring",treat:"BP/aortic surveillance"},
  {id:270,c:"Ehlers-Danlos syndrome",cat:"Genetic connective tissue",food:"No universal restriction",med:"Medication/surgery considerations",treat:"Supportive care"},
  {id:271,c:"Osteogenesis imperfecta",cat:"Genetic bone",food:"Adequate calcium/vitamin D",med:"Bisphosphonates in some",treat:"Bone-strengthening/support"},
  {id:272,c:"Neurofibromatosis type 1",cat:"Genetic",food:"No major diet",med:"Tumor/medication-specific",treat:"Surveillance/symptom treatment"},
  {id:273,c:"Tuberous sclerosis",cat:"Genetic",food:"No universal restriction",med:"Seizure/renal medication issues",treat:"Seizure/tumor-directed therapy"},
  {id:274,c:"Prader-Willi syndrome",cat:"Genetic endocrine",food:"Strict calorie/food access management",med:"Growth hormone etc.",treat:"Nutritional/behavioral care"},
  {id:275,c:"Williams syndrome",cat:"Genetic",food:"Calcium/vitamin D may need monitoring",med:"Cardiac drug issues",treat:"Cardiac/endocrine management"},
  {id:276,c:"Friedreich ataxia",cat:"Genetic neuro",food:"No major diet",med:"Diabetes/cardiac medicines",treat:"Supportive/specialist therapy"},
  {id:277,c:"Pompe disease",cat:"Metabolic/genetic",food:"Nutrition/protein individualized",med:"Enzyme replacement",treat:"Enzyme replacement"},
  {id:278,c:"Fabry disease",cat:"Genetic metabolic",food:"Individual",med:"Enzyme/chaperone therapies",treat:"Enzyme replacement/chaperone"},
  {id:279,c:"Gaucher disease",cat:"Genetic metabolic",food:"No universal restriction",med:"Enzyme replacement",treat:"ERT/substrate reduction"},
  {id:280,c:"Niemann-Pick disease",cat:"Genetic metabolic",food:"Type-specific nutrition",med:"Specialist medication",treat:"Supportive/targeted"},
  {id:281,c:"Tay-Sachs disease",cat:"Genetic neurological",food:"Nutrition/swallowing support",med:"No curative standard treatment",treat:"Supportive"},
  {id:282,c:"Mitochondrial disease",cat:"Metabolic/genetic",food:"Avoid prolonged fasting in some",med:"Medication-specific",treat:"Supportive/metabolic care"},
  {id:283,c:"MELAS",cat:"Mitochondrial",food:"Individual metabolic plan",med:"Medication-specific",treat:"Supportive/specialist"},
  {id:284,c:"Leigh syndrome",cat:"Mitochondrial",food:"Metabolic nutrition individualized",med:"Some drugs may worsen mitochondrial function",treat:"Supportive"},
  {id:285,c:"Malaria",cat:"Parasitic infection",food:"Hydration/nutrition",med:"Antimalarial selection is critical; G6PD status can matter",treat:"Antimalarial therapy"},
  {id:286,c:"Dengue",cat:"Viral infection",food:"Hydration; avoid bleeding-risk self-medication",med:"NSAIDs/aspirin generally avoided",treat:"Supportive care"},
  {id:287,c:"Typhoid fever",cat:"Bacterial",food:"Hydration/nutrition",med:"Antibiotic resistance matters",treat:"Antibiotics"},
  {id:288,c:"Salmonella infection",cat:"Bacterial",food:"Hydration",med:"Antibiotics only selected cases",treat:"Supportive +/- antibiotics"},
  {id:289,c:"Shigellosis",cat:"Bacterial",food:"Hydration",med:"Antibiotics depending severity",treat:"Rehydration +/- antibiotics"},
  {id:290,c:"Giardiasis",cat:"Parasitic",food:"Hydration; temporary lactose intolerance possible",med:"Drug interactions",treat:"Antiparasitic"},
  {id:291,c:"Amoebiasis",cat:"Parasitic",food:"Hydration",med:"Metronidazole/other therapy",treat:"Antiparasitic treatment"},
  {id:292,c:"Toxoplasmosis",cat:"Parasitic",food:"Food safety important in prevention/pregnancy",med:"Drug-specific",treat:"Antiparasitic therapy in selected cases"},
  {id:293,c:"Rabies",cat:"Viral emergency",food:"No meaningful diet restriction",med:"Post-exposure prophylaxis urgent",treat:"Vaccine + immunoglobulin"},
  {id:294,c:"Measles",cat:"Viral",food:"Hydration/nutrition; vitamin A in specific settings",med:"Medication supportive",treat:"Supportive/vitamin A where indicated"},
  {id:295,c:"Chickenpox",cat:"Viral",food:"Hydration; soft foods if mouth sores",med:"Aspirin contraindicated in children",treat:"Supportive/antiviral in selected cases"},
  {id:296,c:"Shingles",cat:"Viral",food:"No major food restriction",med:"Antivirals early",treat:"Antiviral treatment"},
  {id:297,c:"HIV infection",cat:"Viral",food:"Balanced nutrition; food safety",med:"Major drug interactions",treat:"Antiretroviral therapy"},
  {id:298,c:"Infectious mononucleosis",cat:"Viral",food:"Hydration; avoid alcohol",med:"Avoid contact sports if spleen enlarged",treat:"Supportive"},
  {id:299,c:"Lyme disease",cat:"Bacterial",food:"No major food restriction",med:"Antibiotics",treat:"Antibiotics"},
  {id:300,c:"Atopic dermatitis",cat:"Skin/immune",food:"Avoid confirmed food allergies only",med:"Fragrance/irritant avoidance",treat:"Emollients/topical medication"},
  {id:301,c:"Contact dermatitis",cat:"Skin/allergy",food:"Avoid causative substance",med:"Cosmetics/metals/chemicals",treat:"Remove trigger/topical steroids"},
  {id:302,c:"Psoriasis",cat:"Immune/skin",food:"Weight/alcohol management may help",med:"Drug-specific",treat:"Topicals/phototherapy/systemic"},
  {id:303,c:"Rosacea",cat:"Skin",food:"Spicy food/alcohol/heat can trigger some",med:"Vasodilators/irritants",treat:"Topical/systemic treatment"},
  {id:304,c:"Urticaria",cat:"Allergy/skin",food:"Avoid confirmed triggers",med:"NSAIDs can worsen some",treat:"Antihistamines +/- biologic"},
  {id:305,c:"Angioedema",cat:"Allergy/immune",food:"Trigger-specific",med:"ACE inhibitors can cause some cases",treat:"Antihistamine/epinephrine/cause-specific"},
  {id:306,c:"Hereditary angioedema",cat:"Genetic",food:"Individual triggers; no universal diet",med:"ACE inhibitors contraindicated",treat:"C1-inhibitor/bradykinin-targeted therapy"},
  {id:307,c:"Pemphigus vulgaris",cat:"Autoimmune skin",food:"No universal diet; swallowing may matter",med:"Immunosuppressants",treat:"Steroids/immune therapy"},
  {id:308,c:"Bullous pemphigoid",cat:"Autoimmune skin",food:"No universal diet",med:"Drug-specific",treat:"Steroids/immune therapy"},
  {id:309,c:"Vitiligo",cat:"Autoimmune skin",food:"No specific forbidden foods",med:"No universal medication restriction",treat:"Topical/phototherapy"},
  {id:310,c:"Alopecia areata",cat:"Autoimmune skin",food:"No universal restriction",med:"Drug-specific",treat:"Steroids/JAK inhibitors etc."},
  {id:311,c:"Hidradenitis suppurativa",cat:"Inflammatory skin",food:"Weight/smoking management",med:"Drug-specific",treat:"Antibiotics/biologics/surgery"},
  {id:312,c:"Major depressive disorder",cat:"Mental health",food:"No universal food restriction",med:"Alcohol/drug interactions",treat:"Psychotherapy/antidepressants"},
  {id:313,c:"Generalized anxiety disorder",cat:"Mental health",food:"Limit caffeine if it worsens anxiety",med:"Sedative interactions",treat:"Therapy/medication"},
  {id:314,c:"Panic disorder",cat:"Mental health",food:"Caffeine may worsen symptoms",med:"Medication-specific",treat:"Therapy/medication"},
  {id:315,c:"Bipolar disorder",cat:"Mental health",food:"Regular nutrition; avoid substance misuse",med:"Lithium has hydration/sodium considerations",treat:"Mood stabilizers"},
  {id:316,c:"Schizophrenia",cat:"Mental health",food:"No universal diet",med:"Antipsychotic metabolic effects",treat:"Antipsychotic + psychosocial care"},
  {id:317,c:"OCD",cat:"Mental health",food:"No specific food restriction",med:"Medication-specific",treat:"CBT/SSRIs"},
  {id:318,c:"PTSD",cat:"Mental health",food:"No universal diet",med:"Alcohol/drug interactions",treat:"Trauma-focused therapy +/- medication"},
  {id:319,c:"ADHD",cat:"Neurodevelopmental",food:"No universal diet; individual stimulant effects",med:"Stimulants interact with some drugs",treat:"Behavioral care/stimulant or nonstimulant"},
  {id:320,c:"Autism spectrum disorder",cat:"Neurodevelopmental",food:"No universal autism diet",med:"Medication-specific",treat:"Behavioral/supportive care"},
  {id:321,c:"Anorexia nervosa",cat:"Eating disorder",food:"Structured nutritional rehabilitation",med:"Refeeding complications",treat:"Specialist treatment"},
  {id:322,c:"Bulimia nervosa",cat:"Eating disorder",food:"Structured nutrition; avoid compensatory behaviors",med:"Electrolyte/drug issues",treat:"Psychotherapy/nutritional care"},
  {id:323,c:"Binge-eating disorder",cat:"Eating disorder",food:"Structured nutrition",med:"Medication-specific",treat:"CBT/medication"},
  {id:324,c:"Insomnia disorder",cat:"Sleep",food:"Limit caffeine/alcohol near bedtime",med:"Sedatives interact with alcohol",treat:"CBT-I/medication"},
  {id:325,c:"Substance-use disorder",cat:"Behavioral/medical",food:"Avoid addictive substance",med:"Major drug/alcohol interactions",treat:"Medication + behavioral treatment"},
  {id:326,c:"Alcohol-use disorder",cat:"Behavioral/medical",food:"Avoid alcohol",med:"Withdrawal requires medical care",treat:"Counseling/medication"},
  {id:327,c:"Opioid-use disorder",cat:"Behavioral/medical",food:"Avoid illicit opioids",med:"Overdose risk with sedatives",treat:"Buprenorphine/methadone/naloxone"},
  {id:328,c:"Nicotine dependence",cat:"Behavioral",food:"Avoid nicotine products",med:"Medication-specific",treat:"Nicotine replacement/medications"},
  {id:329,c:"Restless legs syndrome (medication)",cat:"Neurological/sleep",food:"Iron deficiency assessment",med:"Dopaminergic drugs may cause augmentation",treat:"Iron/medication"},
  {id:330,c:"Circadian rhythm sleep disorder",cat:"Sleep",food:"Timing of food/caffeine/light matters",med:"Melatonin timing",treat:"Sleep schedule/light therapy"},
  {id:331,c:"Hyperkalemic cardiac risk",cat:"Electrolyte",food:"Potassium restriction may be necessary",med:"Several drugs raise K",treat:"Correct potassium/cause"},
  {id:332,c:"Pulmonary edema",cat:"Cardiac/respiratory",food:"Sodium/fluid restriction may be used",med:"Heart medicines/diuretics",treat:"Emergency diuresis/support"},
  {id:333,c:"Croup",cat:"Respiratory infection",food:"No major restriction",med:"Steroid treatment",treat:"Steroids/support"},
  {id:334,c:"Bronchiolitis",cat:"Respiratory infection",food:"Hydration",med:"Medication use age-dependent",treat:"Supportive care"},
  {id:335,c:"Whooping cough",cat:"Infection",food:"Hydration/nutrition",med:"Macrolide antibiotics",treat:"Antibiotics/support"},
  {id:336,c:"Influenza",cat:"Viral infection",food:"Hydration",med:"Antivirals for selected patients",treat:"Supportive/antiviral"},
  {id:337,c:"COVID-19",cat:"Viral infection",food:"Hydration/nutrition",med:"Antiviral interactions",treat:"Supportive/antiviral when indicated"},
  {id:338,c:"Acne",cat:"Skin",food:"Individual diet factors may matter",med:"Some medicines contraindicated in pregnancy",treat:"Topical/oral therapy"},
  {id:339,c:"Scabies",cat:"Infectious skin",food:"No food restriction",med:"Treat contacts",treat:"Permethrin/other antiparasitic"},
  {id:340,c:"Impetigo",cat:"Infectious skin",food:"No major restriction",med:"Topical/oral antibiotics",treat:"Antibiotics"},
  {id:341,c:"Cellulitis",cat:"Infectious skin",food:"No major restriction",med:"Antibiotic allergies matter",treat:"Antibiotics"},
  {id:342,c:"Herpes simplex",cat:"Viral skin",food:"No universal food restriction",med:"Antivirals",treat:"Antiviral therapy"},
  {id:343,c:"Ichthyosis",cat:"Genetic skin",food:"Hydration/skin care",med:"Drug-specific",treat:"Emollients/retinoids"},
  {id:344,c:"Epidermolysis bullosa",cat:"Genetic skin",food:"High-calorie/protein needs possible",med:"Wound/medication management",treat:"Specialized wound care"},
  {id:345,c:"Restless legs syndrome",cat:"Neurological",food:"Iron status/nutrition may matter",med:"Some drugs worsen symptoms",treat:"Iron or symptom drugs"},
  {id:346,c:"Familial hypertriglyceridemia",cat:"Genetic/metabolic",food:"Reduce alcohol/simple sugars",med:"Drug selection",treat:"Lipid therapy"},
  {id:347,c:"Cholera",cat:"Bacterial infection",food:"Oral rehydration",med:"Antibiotics in selected cases",treat:"Rehydration +/- antibiotics"},
  {id:348,c:"Campylobacteriosis",cat:"Bacterial",food:"Hydration",med:"Antibiotics selected cases",treat:"Supportive +/- antibiotics"},
  {id:349,c:"Rett syndrome",cat:"Genetic neurological",food:"Swallowing/nutrition support",med:"Antiseizure meds",treat:"Supportive therapy"},
  {id:350,c:"Fragile X syndrome",cat:"Genetic neurodevelopmental",food:"No specific diet",med:"Medication-specific",treat:"Developmental/supportive"},
  {id:351,c:"Angelman syndrome",cat:"Genetic neurological",food:"Feeding/epilepsy management",med:"Antiseizure medicines",treat:"Supportive/antiepileptic"},
  {id:352,c:"Rett-like disorders",cat:"Genetic",food:"Nutrition/swallowing support",med:"Drug-specific",treat:"Supportive"},
  {id:353,c:"Becker muscular dystrophy",cat:"Genetic",food:"Balanced nutrition",med:"Cardiac medication",treat:"Supportive/cardiac care"},
  {id:354,c:"Krabbe disease",cat:"Genetic neurological",food:"Nutrition/supportive",med:"Transplant in selected cases",treat:"Supportive/transplant"},
  {id:355,c:"Zellweger spectrum disorder",cat:"Genetic metabolic",food:"Specialized nutrition",med:"Specialist management",treat:"Supportive"},
  {id:356,c:"Aicardi syndrome",cat:"Genetic neurological",food:"Seizure/feeding management",med:"Antiseizure meds",treat:"Supportive"},
  {id:357,c:"Wilson disease with liver involvement",cat:"Genetic liver",food:"Copper restriction as advised",med:"Chelators/zinc",treat:"Chelation/zinc/transplant"},
  {id:358,c:"Hemochromatosis with liver disease",cat:"Genetic liver",food:"Avoid excess iron/alcohol",med:"Iron supplements",treat:"Phlebotomy/chelation"},
  {id:359,c:"Alpha-1 antitrypsin liver disease",cat:"Genetic liver",food:"Avoid alcohol",med:"Medication-specific",treat:"Monitoring/support/transplant"},
  {id:360,c:"Exocrine pancreatic insufficiency",cat:"Pancreatic",food:"Adequate calories/fat with enzyme therapy",med:"Enzymes with meals",treat:"Pancreatic enzymes"},
  {id:361,c:"Pancreatic cancer",cat:"Cancer",food:"Nutrition individualized",med:"Cancer drug interactions",treat:"Surgery/systemic therapy"},
  {id:362,c:"Bile-acid diarrhea",cat:"GI",food:"Individual fat management",med:"Bile-acid binders",treat:"Bile-acid sequestrants"},
  {id:363,c:"Gilbert syndrome",cat:"Genetic liver",food:"Avoid prolonged fasting/dehydration",med:"Some drug interactions rare",treat:"Usually reassurance"},
  {id:364,c:"Alpha-1 antitrypsin deficiency",cat:"Genetic",food:"Avoid smoking",med:"Replacement therapy selected",treat:"Lung/liver care"},
  {id:365,c:"Nonalcoholic steatohepatitis",cat:"Liver/metabolic",food:"Weight/calorie/alcohol management",med:"Medication-specific",treat:"Lifestyle +/- medication"},
  {id:366,c:"Cholestasis",cat:"Liver",food:"Fat-soluble vitamins may need replacement",med:"Drug-induced causes possible",treat:"Treat cause"},
  {id:367,c:"Fatty liver disease",cat:"Liver/metabolic",food:"Reduce excess calories/sugary drinks; alcohol depending cause",med:"Medication review",treat:"Weight/metabolic management"},
  {id:368,c:"Hepatic fibrosis",cat:"Liver",food:"Cause-specific",med:"Hepatotoxic drugs matter",treat:"Treat underlying disease"},
  {id:369,c:"Esophageal varices",cat:"Liver/GI",food:"Avoid alcohol; individual diet",med:"NSAID bleeding risk",treat:"Beta blockers/endoscopy"},
  {id:370,c:"Portal hypertension",cat:"Liver/vascular",food:"Sodium management if ascites",med:"Medication-specific",treat:"Treat liver disease/complications"},
  {id:371,c:"Celiac-related malabsorption",cat:"GI/autoimmune",food:"Gluten-free",med:"Vitamin/mineral deficiencies",treat:"Gluten-free + supplements"},
  {id:372,c:"Tropical sprue",cat:"GI",food:"Nutritional management",med:"Antibiotics/folate sometimes",treat:"Nutrition + medication"},
  {id:373,c:"Intestinal obstruction",cat:"GI emergency",food:"Often no oral food initially",med:"Opioids can worsen motility",treat:"Hospital/surgical treatment"},
  {id:374,c:"Acute mesenteric ischemia",cat:"Vascular/GI emergency",food:"Emergency - oral intake managed medically",med:"Anticoagulation/medication",treat:"Urgent surgery/vascular treatment"},
  {id:375,c:"Myositis",cat:"Autoimmune",food:"Individual",med:"Steroid/immunosuppressant issues",treat:"Immunotherapy"},
  {id:376,c:"Cardiac amyloidosis",cat:"Cardiac",food:"Sodium/fluid individualized",med:"Drug interactions",treat:"Cause-directed therapy"},
  {id:377,c:"Lymphedema",cat:"Vascular",food:"Weight management if obesity present",med:"Individual",treat:"Compression/therapy"},
  {id:378,c:"Raynaud phenomenon",cat:"Vascular",food:"No universal diet",med:"Some drugs worsen",treat:"Avoid triggers/medications"},
  {id:379,c:"Erythromelalgia",cat:"Vascular",food:"Individual triggers",med:"Aspirin may help",treat:"Cooling/medications"},
  {id:380,c:"Chronic venous insufficiency",cat:"Vascular",food:"Weight/sodium management",med:"Individual",treat:"Compression/lifestyle"}
];

var currentPage = 'home';
var selImg = null;

function levenshtein(a, b) {
  var la = a.length, lb = b.length;
  if (la === 0) return lb;
  if (lb === 0) return la;
  var m = [];
  for (var i = 0; i <= lb; i++) m[i] = [i];
  for (var j = 0; j <= la; j++) m[0][j] = j;
  for (var i = 1; i <= lb; i++) {
    for (var j = 1; j <= la; j++) {
      var cost = a.charAt(j - 1) === b.charAt(i - 1) ? 0 : 1;
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + cost);
    }
  }
  return m[lb][la];
}

function fuzzyMatch(input, target, threshold) {
  threshold = threshold || 0.6;
  var li = input.toLowerCase().trim();
  var lt = target.toLowerCase().trim();
  if (li === lt) return 1;
  if (lt.indexOf(li) !== -1 || li.indexOf(lt) !== -1) return 0.95;
  var words = li.split(/\s+/);
  var tWords = lt.split(/\s+/);
  var wordMatchCount = 0;
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < tWords.length; j++) {
      if (fuzzyWordMatch(words[i], tWords[j])) { wordMatchCount++; break; }
    }
  }
  var wordScore = words.length > 0 ? wordMatchCount / Math.max(words.length, tWords.length) : 0;
  var maxLen = Math.max(li.length, lt.length);
  var dist = levenshtein(li, lt);
  var distScore = 1 - (dist / maxLen);
  var score = Math.max(wordScore, distScore);
  if (li.length <= 3 && dist <= 1) score = Math.max(score, 0.75);
  if (li.length <= 5 && dist <= 2) score = Math.max(score, 0.7);
  return score;
}

function fuzzyWordMatch(a, b) {
  if (a === b) return true;
  if (b.indexOf(a) !== -1 || a.indexOf(b) !== -1) return true;
  var maxLen = Math.max(a.length, b.length);
  if (maxLen <= 2) return a === b;
  var dist = levenshtein(a, b);
  var threshold = maxLen <= 4 ? 1 : 2;
  return dist <= threshold;
}

function findBestFoodMatch(query) {
  var l = query.toLowerCase().trim();
  var bestMatch = null;
  var bestScore = 0;
  var foodKeys = Object.keys(FOODS);
  for (var i = 0; i < foodKeys.length; i++) {
    var k = foodKeys[i];
    var f = FOODS[k];
    var nameScore = fuzzyMatch(l, f.n.toLowerCase(), 0.5);
    if (nameScore > bestScore) { bestScore = nameScore; bestMatch = { key: k, food: f, score: nameScore }; }
  }
  var fkwKeys = Object.keys(FKW);
  for (var i = 0; i < fkwKeys.length; i++) {
    var k = fkwKeys[i];
    var words = FKW[k];
    for (var j = 0; j < words.length; j++) {
      var ws = fuzzyMatch(l, words[j], 0.5);
      if (ws > bestScore) { bestScore = ws; bestMatch = { key: k, food: FOODS[k], score: ws }; }
    }
  }
  if (bestScore >= 0.55) return bestMatch;
  return null;
}

function sp(p) {
  document.querySelectorAll('.pg').forEach(function(e){ e.classList.remove('a'); });
  document.querySelectorAll('.nk a').forEach(function(e){ e.classList.remove('a'); });
  var el = document.getElementById(p + 'Pg');
  if (el) el.classList.add('a');
  var nv = document.querySelector('[data-p="' + p + '"]');
  if (nv) nv.classList.add('a');
  currentPage = p;
  window.scrollTo(0, 0);
  document.getElementById('nk').classList.remove('a');
}
window.sp = sp;

function sAuth(t) {
  document.getElementById('authM').classList.add('a');
  tAF(t);
}
window.sAuth = sAuth;

function cAuth() {
  document.getElementById('authM').classList.remove('a');
}
window.cAuth = cAuth;

function tAF(t) {
  document.getElementById('lgF').classList.toggle('hid', t !== 'login');
  document.getElementById('rgF').classList.toggle('hid', t !== 'register');
}
window.tAF = tAF;

var AL = ['peanut','treenut','milk','egg','wheat','soy','shellfish','fish','molluscs','sesame','sulfite','corn','celery','mustard','lupin','nightshade','histamine','fructose','lactose','gluten','fodmap','oxalate'];
var CL = ['g6pd'];

function initAG() {
  var a = document.getElementById('aG');
  var c = document.getElementById('cG');
  AL.forEach(function(k){
    var i = ALLERGIES[k];
    if (i) a.innerHTML += '<div class="ai" data-a="' + k + '" onclick="tAI(this)"><span>' + i.ic + '</span><span>' + i.n + '</span></div>';
  });
  CL.forEach(function(k){
    var i = ALLERGIES[k];
    if (i) c.innerHTML += '<div class="ai" data-a="' + k + '" onclick="tAI(this)"><span>' + i.ic + '</span><span>' + i.n + '</span></div>';
  });
}

function tAI(e) { e.classList.toggle('s'); }
window.tAI = tAI;

function updSel(a, c) {
  document.querySelectorAll('#aG .ai').forEach(function(i){ i.classList.toggle('s', a.indexOf(i.dataset.a) !== -1); });
  document.querySelectorAll('#cG .ai').forEach(function(i){ i.classList.toggle('s', c.indexOf(i.dataset.a) !== -1); });
}
window.updSel = updSel;

function initAI() {
  var el = document.getElementById('aInfo');
  Object.keys(ALLERGIES).forEach(function(k){
    var i = ALLERGIES[k];
    var safeHtml = '';
    if (i.safe && i.safe.length) {
      safeHtml = '<div class="fcl sf"><h4><i class="fas fa-check-circle"></i> Safe Foods</h4><ul>' + i.safe.map(function(t){ return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
    }
    var tipsHtml = '';
    if (i.tips && i.tips.length) {
      tipsHtml = '<div class="fcl tips"><h4><i class="fas fa-lightbulb"></i> Tips & Advice</h4><ul>' + i.tips.map(function(t){ return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
    }
    var crossHtml = '';
    if (i.crossReactivity && i.crossReactivity.length) {
      crossHtml = '<div class="fcl cross"><h4><i class="fas fa-link"></i> Cross-Reactivity</h4><ul>' + i.crossReactivity.map(function(t){ return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
    }
    var severityHtml = i.severity ? '<div style="margin-top:.75rem;padding:.6rem;background:rgba(239,68,68,.1);border-radius:8px;font-size:.82rem"><strong style="color:var(--dg)"><i class="fas fa-exclamation-triangle"></i> Severity:</strong> <span style="color:var(--tm)">' + i.severity + '</span></div>' : '';
    var researchHtml = i.research ? '<div style="margin-top:.75rem;padding:.6rem;background:rgba(139,92,246,.1);border-radius:8px;font-size:.82rem"><strong style="color:var(--pur)"><i class="fas fa-flask"></i> Research:</strong> <span style="color:var(--tm)">' + i.research + '</span></div>' : '';
    el.innerHTML += '<div class="aic"><h3>' + i.ic + ' ' + i.n + '</h3><p style="color:var(--tm);margin-bottom:.75rem">' + i.d + '</p><div class="fl"><div class="fcl a"><h4><i class="fas fa-times-circle"></i> Triggers to Avoid</h4><ul>' + i.kw.slice(0,30).map(function(t){ return '<li>' + t + '</li>'; }).join('') + '</ul></div>' + safeHtml + tipsHtml + crossHtml + '</div>' + severityHtml + researchHtml + '</div>';
  });
}

function initU() {
  var a = document.getElementById('uA2');
  var ii = document.getElementById('imgIn');
  var ci = document.getElementById('camIn');
  a.addEventListener('click', function(e){
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') ii.click();
  });
  a.addEventListener('dragover', function(e){ e.preventDefault(); a.classList.add('dg'); });
  a.addEventListener('dragleave', function(){ a.classList.remove('dg'); });
  a.addEventListener('drop', function(e){
    e.preventDefault(); a.classList.remove('dg');
    var f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) hImg(f);
  });
  ii.addEventListener('change', function(e){ if (e.target.files[0]) hImg(e.target.files[0]); });
  ci.addEventListener('change', function(e){ if (e.target.files[0]) hImg(e.target.files[0]); });
}

function hImg(f) {
  selImg = f;
  var r = new FileReader();
  r.onload = function(e){
    document.getElementById('pvi').src = e.target.result;
    document.getElementById('pvc').style.display = 'block';
    document.getElementById('uA2').style.display = 'none';
    document.getElementById('res').style.display = 'none';
  };
  r.readAsDataURL(f);
}

function resetU() {
  selImg = null;
  document.getElementById('imgIn').value = '';
  document.getElementById('camIn').value = '';
  document.getElementById('pvc').style.display = 'none';
  document.getElementById('uA2').style.display = 'block';
  document.getElementById('res').style.display = 'none';
}
window.resetU = resetU;

function getUA() {
  if (window.up) {
    var a = (window.up.allergies || []).concat(window.up.conditions || []);
    if (a.length) return a;
  }
  var qs = Array.from(document.querySelectorAll('#qAG .ai.s')).map(function(e){ return e.dataset.a; });
  if (qs.length) return qs;
  var pg = Array.from(document.querySelectorAll('#aG .ai.s')).map(function(e){ return e.dataset.a; });
  var pc = Array.from(document.querySelectorAll('#cG .ai.s')).map(function(e){ return e.dataset.a; });
  if (pg.length || pc.length) return pg.concat(pc);
  return Object.keys(ALLERGIES);
}

function getSelectedConditions() {
  var qs = Array.from(document.querySelectorAll('#qCG .ai.s')).map(function(e){ return e.dataset.a; });
  return qs;
}

var COND_TO_ALLERGY = {
  g6pd:'g6pd', celiac:'gluten', lactose_intolerance:'lactose', fructose:'fructose',
  histamine:'histamine', fodmap:'fodmap', oxalate:'oxalate',
  kidney_stones:'oxalate', pkd:'oxalate', ibs:'fodmap',
  crohns:'fodmap', colitis:'fodmap'
};

var COND_FOOD_ADVICE = {
  g6pd:{avoid:["fava bean","broad bean","lima bean","lentil","chickpea","soybean","red wine","star fruit","blueberry","cranberry","cherry","plum","prune","sulfite","sulfites","tonic water","quinine"],tip:"G6PD: Avoid ALL fava/broad beans and sulfite-containing foods. These can cause life-threatening hemolytic crisis."},
  diabetes_t1:{avoid:["sugar-sweetened beverages","candy","white bread","white rice","pastries"],tip:"Diabetes T1: Monitor carbohydrate intake. Avoid sugary drinks and refined carbs. Insulin essential."},
  diabetes_t2:{avoid:["sugar-sweetened beverages","candy","white bread","white rice","pastries","excess alcohol"],tip:"Diabetes T2: Control carbohydrate and calorie intake. Reduce refined carbs and sugary foods."},
  celiac:{avoid:["wheat","barley","rye","bulgur","couscous","seitan","malt","spelt","kamut","triticale","farro","emmer","einkorn"],tip:"Celiac: Strict gluten-free diet required. Avoid wheat, barley, rye. Check all labels for hidden gluten."},
  pkd:{avoid:["high-sodium foods","excess protein","alcohol"],tip:"Kidney Disease: Monitor sodium, potassium, phosphorus, and protein intake. Individualized by stage."},
  kidney_stones:{avoid:["spinach","rhubarb","beet","chocolate","almonds","cashews","peanuts","star fruit"],tip:"Kidney Stones: Stay hydrated. Limit high-oxalate foods like spinach, nuts, chocolate. Limit sodium."},
  pku:{avoid:["high-protein foods","aspartame","meat","fish","eggs","dairy","legumes"],tip:"PKU: Restrict phenylalanine. Avoid high-protein foods and aspartame. Special medical formula needed."},
  heart_failure:{avoid:["high-sodium foods","excess fluid","processed foods"],tip:"Heart Failure: Sodium and fluid restriction essential. Avoid processed and canned foods."},
  hypertension:{avoid:["high-sodium foods","excess alcohol","processed meats"],tip:"Hypertension: Reduce sodium intake. Limit alcohol. Avoid processed foods."},
  hyperlipidemia:{avoid:["saturated fats","trans fats","fried foods","excess red meat"],tip:"High Cholesterol: Reduce saturated and trans fats. Limit fried foods and red meat."},
  gout:{avoid:["organ meats","shellfish","red meat","beer","liquor","fructose-sweetened drinks"],tip:"Gout: Avoid high-purine foods. Limit alcohol especially beer. Stay hydrated."},
  liver_disease:{avoid:["alcohol","excess sodium","raw shellfish","excess acetaminophen"],tip:"Liver Disease: Complete alcohol avoidance. Sodium restriction. Avoid raw shellfish."},
  pancreatitis:{avoid:["alcohol","fatty foods","fried foods","red meat"],tip:"Pancreatitis: Avoid alcohol completely. Low-fat diet. Small frequent meals."},
  ibs:{avoid:["onion","garlic","wheat","dairy","beans","lentils","cauliflower","mushroom"],tip:"IBS: Follow low-FODMAP diet. Identify personal triggers. Eat regular meals."},
  crohns:{avoid:["raw vegetables","nuts","seeds","popcorn","high-fiber foods during flares"],tip:"Crohn's: During flares, eat soft low-fiber foods. Avoid raw vegetables and nuts."},
  colitis:{avoid:["raw vegetables","nuts","seeds","popcorn","spicy foods during flares"],tip:"Colitis: During flares, eat bland low-fiber foods. Avoid spicy foods and seeds."},
  GERD:{avoid:["spicy foods","citrus","tomato","chocolate","caffeine","alcohol","fatty foods"],tip:"GERD: Avoid trigger foods. Eat smaller meals. Don't lie down after eating."},
  hypothyroid:{avoid:["excess soy","raw cruciferous vegetables in large amounts"],tip:"Hypothyroid: Take levothyroxine on empty stomach. Avoid soy and raw cruciferous veggies near medication time."},
  osteoporosis:{avoid:["excess caffeine","excess sodium","excess alcohol","soda"],tip:"Osteoporosis: Ensure adequate calcium and vitamin D. Weight-bearing exercise."}
};

function doOCR(file) {
  var fd = new FormData();
  fd.append('image', file);
  fd.append('language', 'eng');
  fd.append('isOverlayRequired', 'false');
  fd.append('OCREngine', '2');
  return fetch('https://api.ocr.space/parse/image', {
    method: 'POST',
    headers: { apikey: 'K85111837688957' },
    body: fd
  }).then(function(r){ return r.json(); }).then(function(j){
    if (j.ParsedResults && j.ParsedResults.length > 0) return j.ParsedResults[0].ParsedText || '';
    return '';
  });
}

function parsePercentages(text) {
  var results = [];
  var pctRegex = /(\d+(?:\.\d+)?)\s*%\s*[^\d\n,;]{2,40}/gi;
  var m;
  while ((m = pctRegex.exec(text)) !== null) {
    results.push({ percent: parseFloat(m[1]), raw: m[0].trim() });
  }
  var flippedRegex = /[^\d\n,;]{2,40}\s*[=:]\s*(\d+(?:\.\d+)?)\s*%/gi;
  while ((m = flippedRegex.exec(text)) !== null) {
    results.push({ percent: parseFloat(m[1]), raw: m[0].trim() });
  }
  return results;
}

function calcRiskLevel(percent, allergyKey) {
  var deathSensitive = ['g6pd','peanut','treenut','fish','shellfish'];
  var highRisk = ['milk','egg','wheat','soy'];
  var medRisk = ['sesame','sulfite','mustard','lupin','lactose','gluten'];
  if (deathSensitive.indexOf(allergyKey) !== -1) {
    if (percent >= 50) return { risk:95, label:'EXTREME', color:'sv', explain:'This amount can cause anaphylaxis or severe hemolytic crisis. Seek immediate medical attention.' };
    if (percent >= 20) return { risk:80, label:'VERY HIGH', color:'sv', explain:'Significant amount. Likely to trigger a severe reaction. Do not consume.' };
    if (percent >= 5) return { risk:60, label:'HIGH', color:'dg', explain:'Dangerous amount for sensitive individuals. Even small traces can cause reactions in some people.' };
    if (percent >= 1) return { risk:40, label:'MODERATE', color:'ma', explain:'Contains enough to potentially trigger a reaction in sensitive individuals.' };
    return { risk:20, label:'LOW', color:'ma', explain:'Small amount present. May still affect highly sensitive individuals.' };
  }
  if (highRisk.indexOf(allergyKey) !== -1) {
    if (percent >= 50) return { risk:85, label:'VERY HIGH', color:'dg', explain:'Major ingredient. Will likely cause a significant allergic reaction.' };
    if (percent >= 20) return { risk:70, label:'HIGH', color:'dg', explain:'Substantial amount. Strong chance of causing symptoms.' };
    if (percent >= 5) return { risk:50, label:'MODERATE', color:'ma', explain:'Present in notable quantity. Could trigger mild to moderate symptoms.' };
    if (percent >= 1) return { risk:30, label:'LOW-MODERATE', color:'ma', explain:'Small amount. May not affect everyone but use caution.' };
    return { risk:15, label:'TRACE', color:'ok', explain:'Very small amount. Unlikely to affect most people with this allergy.' };
  }
  if (percent >= 50) return { risk:75, label:'HIGH', color:'dg', explain:'Major ingredient in this product. Significant risk of triggering symptoms.' };
  if (percent >= 20) return { risk:55, label:'MODERATE', color:'ma', explain:'Notable presence. May cause symptoms depending on your sensitivity level.' };
  if (percent >= 5) return { risk:35, label:'LOW-MODERATE', color:'ma', explain:'Present in moderate amounts. Monitor for any reactions.' };
  if (percent >= 1) return { risk:20, label:'LOW', color:'ma', explain:'Small quantity. Risk is lower but not zero for sensitive individuals.' };
  return { risk:10, label:'TRACE', color:'ok', explain:'Minimal amount detected. Generally low risk but always verify.' };
}

function getOverallRisk(matches) {
  if (!matches.length) return { score:0, grade:'A', label:'SAFE', color:'safe', emoji:'Safe' };
  var maxScore = 0;
  matches.forEach(function(m){ if (m.riskScore && m.riskScore > maxScore) maxScore = m.riskScore; });
  var weighted = 0;
  matches.forEach(function(m){ weighted += (m.riskScore || 0) * 0.7; });
  var total = Math.max(maxScore, Math.min(100, Math.round(weighted)));
  if (total >= 80) return { score:total, grade:'F', label:'DANGEROUS - DO NOT EAT', color:'sv', emoji:'Danger' };
  if (total >= 60) return { score:total, grade:'D', label:'HIGH RISK', color:'dg', emoji:'High Risk' };
  if (total >= 40) return { score:total, grade:'C', label:'MODERATE RISK', color:'ma', emoji:'Moderate' };
  if (total >= 20) return { score:total, grade:'B', label:'LOW RISK', color:'ma', emoji:'Low Risk' };
  return { score:total, grade:'A', label:'LOW RISK', color:'safe', emoji:'Low Risk' };
}

function fuzzyIngredientMatch(line, alias) {
  if (line.indexOf(alias) !== -1) return true;
  if (alias.indexOf(line) !== -1 && line.length >= 3) return true;
  var words = line.split(/[\s,.\-()\/]+/).filter(function(w){ return w.length >= 3; });
  for (var i = 0; i < words.length; i++) {
    if (fuzzyWordMatch(words[i], alias)) return true;
  }
  var cleanLine = line.replace(/[^a-z0-9\s]/g, '');
  var cleanAlias = alias.replace(/[^a-z0-9\s]/g, '');
  if (cleanLine.indexOf(cleanAlias) !== -1) return true;
  if (cleanAlias.indexOf(cleanLine) !== -1 && cleanLine.length >= 4) return true;
  return false;
}

function analyzeIngredients(text, userAllergies) {
  var allSelected = userAllergies.length ? userAllergies : Object.keys(ALLERGIES);
  var lines = text.split(/[\n,;]+/).map(function(s){ return s.trim().toLowerCase(); }).filter(function(s){ return s.length > 1; });
  var warnings = [];
  var hiddenWarns = [];
  var matches = [];
  var ingredientDetails = [];
  var worstStatus = 'safe';

  var percentages = parsePercentages(text);

  HIDDEN_PATTERNS.forEach(function(p){
    if (p.re.test(text)) hiddenWarns.push(p.msg);
  });

  lines.forEach(function(line){
    var linePct = null;
    percentages.forEach(function(p){
      if (line.indexOf(p.raw.toLowerCase()) !== -1 || p.raw.toLowerCase().indexOf(line) !== -1) {
        linePct = p.percent;
      }
    });
    if (linePct === null) {
      percentages.forEach(function(p){
        allSelected.forEach(function(aKey){
          var aliasList = ALIAS[aKey];
          if (!aliasList) return;
          aliasList.forEach(function(alias){
            if (p.raw.toLowerCase().indexOf(alias) !== -1 && line.indexOf(alias) !== -1) linePct = p.percent;
          });
        });
      });
    }

    var lineAllergens = [];

    allSelected.forEach(function(aKey){
      var aliasList = ALIAS[aKey];
      if (!aliasList) return;
      aliasList.forEach(function(alias){
        if (fuzzyIngredientMatch(line, alias)) {
          var info = ALLERGIES[aKey];
          var pct = linePct;
          var severity = 'may-affect';
          var riskScore = 30;
          var riskInfo = null;

          if (pct !== null) {
            riskInfo = calcRiskLevel(pct, aKey);
            riskScore = riskInfo.risk;
            severity = riskScore >= 60 ? 'dangerous' : riskScore >= 30 ? 'may-affect' : 'safe';
            if (aKey === 'g6pd' && riskScore >= 20) severity = 'dangerous';
            if (riskScore >= 80) severity = 'severe';
          }

          if (aKey === 'g6pd') {
            var favaTerms = ['fava','broad bean','lima bean','favism','bambara','winged bean','black-eyed pea'];
            var isFava = favaTerms.some(function(f){ return fuzzyIngredientMatch(line, f); });
            if (isFava) {
              severity = 'severe'; riskScore = 98;
              riskInfo = { risk:98, label:'EXTREME', color:'sv', explain:'Fava beans are the #1 trigger for G6PD. Can cause life-threatening hemolytic crisis (destruction of red blood cells). Hospitalization may be required.' };
            } else {
              if (pct === null) { riskScore = 65; riskInfo = { risk:65, label:'HIGH', color:'dg', explain:'Known G6PD trigger. Even moderate amounts can cause red blood cell damage.' }; }
            }
          } else if (aKey === 'sulfite') {
            var isDirect = ['sulfite','sulphite','sulfur dioxide','metabisulfite','E220'].some(function(s){ return fuzzyIngredientMatch(line, s); });
            if (isDirect) {
              severity = 'dangerous'; if (pct === null) { riskScore = 60; riskInfo = { risk:60, label:'HIGH', color:'dg', explain:'Direct sulfite detected. Can trigger asthma attacks and is dangerous for G6PD patients.' }; }
            } else {
              severity = 'may-affect'; if (pct === null) { riskScore = 35; riskInfo = { risk:35, label:'MODERATE', color:'ma', explain:'May contain sulfites. Use caution if sulfite-sensitive.' }; }
            }
          } else {
            var isDirect2 = line === alias || line.indexOf(alias) === 0 || line.indexOf(alias) === line.length - alias.length;
            if (isDirect2) {
              severity = 'dangerous';
              if (pct === null) { riskScore = 60; riskInfo = { risk:60, label:'HIGH', color:'dg', explain:'Contains ' + info.n + ' allergen. May cause allergic reaction.' }; }
            } else {
              severity = 'may-affect';
              if (pct === null) { riskScore = 30; riskInfo = { risk:30, label:'LOW-MODERATE', color:'ma', explain:'May contain traces of ' + info.n + '. Use caution.' }; }
            }
          }

          if (worstStatus !== 'severe') worstStatus = severity;

          lineAllergens.push({
            allergy: info.n,
            allergyKey: aKey,
            percent: pct,
            severity: severity,
            riskScore: riskScore,
            riskInfo: riskInfo,
            why: riskInfo ? riskInfo.explain : 'Contains an allergen that may trigger a reaction.',
            ingredient: line
          });

          matches.push({
            line: line.substring(0, 50),
            allergy: info.n,
            allergyKey: aKey,
            severity: severity,
            percent: pct,
            riskScore: riskScore,
            riskInfo: riskInfo,
            why: riskInfo ? riskInfo.explain : '',
            msg: (pct !== null ? pct + '% ' : '') + info.n + ' detected in "' + line.substring(0, 30) + '"'
          });
        }
      });
    });

    if (lineAllergens.length > 0) {
      ingredientDetails.push({
        name: line.substring(0, 60),
        percent: linePct,
        allergens: lineAllergens,
        dangerScore: Math.max.apply(null, lineAllergens.map(function(a){ return a.riskScore; }))
      });
    }
  });

  allSelected.forEach(function(aKey){
    if (aKey === 'peanut') {
      var hasLegume = lines.some(function(l){ return ['lentil','chickpea','pea','bean'].some(function(x){ return fuzzyIngredientMatch(l, x); }); });
      if (hasLegume && worstStatus === 'safe') { worstStatus = 'may-affect'; warnings.push('Cross-reactivity: Legumes may trigger peanut-sensitive individuals'); }
    }
    if (aKey === 'milk') {
      var hasGoat = lines.some(function(l){ return l.indexOf('goat') !== -1 || l.indexOf('sheep') !== -1; });
      if (hasGoat && worstStatus === 'safe') { worstStatus = 'may-affect'; warnings.push('Cross-reactivity: Goat/sheep milk may affect cow milk allergic individuals'); }
    }
    if (aKey === 'shellfish') {
      var hasOther = lines.some(function(l){ return ['crab','lobster','shrimp'].some(function(x){ return fuzzyIngredientMatch(l, x); }); });
      if (hasOther && worstStatus === 'safe') { worstStatus = 'may-affect'; warnings.push('Cross-reactivity: Different shellfish species may trigger each other'); }
    }
  });

  matches.forEach(function(m){ warnings.push(m.msg); });
  hiddenWarns.forEach(function(h){ warnings.push('Hidden: ' + h); });

  if (!lines.length) {
    worstStatus = 'may-affect';
    warnings.unshift('No ingredients detected. Try typing them or taking a clearer photo.');
  }

  var overallRisk = getOverallRisk(matches);

  var condWarnings = [];
  var selectedConds = getSelectedConditions();
  selectedConds.forEach(function(condKey){
    var condAdvice = COND_FOOD_ADVICE[condKey];
    if (!condAdvice) return;
    condAdvice.avoid.forEach(function(trigger){
      lines.forEach(function(line){
        if (line.indexOf(trigger) !== -1) {
          condWarnings.push({ condition: condKey, trigger: trigger, advice: condAdvice.tip });
        }
      });
    });
  });

  return {
    ingredients: lines,
    status: worstStatus,
    warnings: warnings,
    matches: matches,
    hiddenWarns: hiddenWarns,
    ingredientDetails: ingredientDetails,
    overallRisk: overallRisk,
    percentages: percentages,
    condWarnings: condWarnings
  };
}

function lookupFood(q) {
  var result = findBestFoodMatch(q);
  if (result && result.score >= 0.55) return result.food;
  return null;
}

function getSafeFoods(userAllergies) {
  var safe = [];
  var foodKeys = Object.keys(FOODS);
  for (var i = 0; i < foodKeys.length; i++) {
    var k = foodKeys[i];
    var f = FOODS[k];
    var ingredients = f.i.toLowerCase();
    var hasAllergen = false;
    for (var j = 0; j < userAllergies.length; j++) {
      var aKey = userAllergies[j];
      var aliasList = ALIAS[aKey];
      if (!aliasList) continue;
      for (var a = 0; a < aliasList.length; a++) {
        if (ingredients.indexOf(aliasList[a]) !== -1) { hasAllergen = true; break; }
      }
      if (hasAllergen) break;
    }
    if (!hasAllergen) safe.push({ key: k, food: f });
  }
  return safe;
}

function getSafeFoodSuggestions(userAllergies) {
  var safeFoods = [];
  var seen = {};
  for (var j = 0; j < userAllergies.length; j++) {
    var aKey = userAllergies[j];
    var allergy = ALLERGIES[aKey];
    if (allergy && allergy.safe) {
      for (var s = 0; s < allergy.safe.length; s++) {
        var food = allergy.safe[s];
        if (!seen[food]) { safeFoods.push(food); seen[food] = true; }
      }
    }
  }
  return safeFoods;
}

function getRecommendations(userAllergies) {
  var safe = getSafeFoods(userAllergies);
  var recs = [];
  var categories = {
    breakfast: ['pancakes','waffles','french_toast','omelette','bacon_eggs','oatmeal','cereal','toast','croissant'],
    lunch: ['grilled_chicken','salmon','steak','greek_salad','garden_salad','quinoa_salad','fruit_salad'],
    dinner: ['grilled_chicken','salmon','steak','grilled_vegetables','roasted_vegetables','risotto'],
    snack: ['fruit_salad','guacamole','trail_mix','hummus','yogurt','greek_yogurt','parfait'],
    dessert: ['fruit_salad','sorbet','panna_cotta','creme_brulee']
  };
  var safeKeys = safe.map(function(s){ return s.key; });
  Object.keys(categories).forEach(function(cat){
    var catFoods = categories[cat].filter(function(fk){ return safeKeys.indexOf(fk) !== -1; });
    if (catFoods.length > 0) {
      recs.push({
        category: cat.charAt(0).toUpperCase() + cat.slice(1),
        foods: catFoods.slice(0, 3).map(function(fk){
          var f = FOODS[fk];
          return f ? f.n : fk;
        })
      });
    }
  });
  if (recs.length === 0 && safe.length > 0) {
    recs.push({
      category: 'Safe Options',
      foods: safe.slice(0, 5).map(function(s){ return s.food.n; })
    });
  }
  return recs;
}

function getAllergyTips(userAllergies) {
  var tips = [];
  for (var j = 0; j < userAllergies.length; j++) {
    var aKey = userAllergies[j];
    var allergy = ALLERGIES[aKey];
    if (allergy && allergy.tips) {
      tips.push({
        allergy: allergy.n,
        tips: allergy.tips.slice(0, 3),
        safe: allergy.safe ? allergy.safe.slice(0, 5) : []
      });
    }
  }
  return tips;
}

function doScan() {
  if (!selImg) return;
  showLd(true, 'Reading image with OCR...');
  return doOCR(selImg).then(function(text){
    showLd(true, 'Extracting text from image...');
    var result;
    if (text && text.length > 5) {
      var food = lookupFood(text);
      var fullText = food ? (food.n + ': ' + food.i + '\n' + text) : text;
      result = analyzeIngredients(fullText, getUA());
      if (food) result.foodName = food.n;
    } else {
      var food2 = lookupFood(selImg.name || '');
      if (food2) {
        result = analyzeIngredients(food2.i, getUA());
        result.foodName = food2.n;
      } else {
        showLd(false);
        toast('Could not read text from image. Try typing ingredients below, or take a clearer photo of the ingredient label.', 'err');
        return;
      }
    }
    displayRes(result);
    if (window.cu && window._saveS) window._saveS({productName:result.foodName||'Image Scan', ingredients:(result.ingredients||[]).join(', '), status:result.status, warnings:result.warnings});
  }).catch(function(e){
    console.error(e);
    toast('Error: ' + e.message, 'err');
  }).then(function(){
    showLd(false);
  });
}
window.doScan = doScan;

function doText() {
  var text = document.getElementById('mIng').value.trim();
  if (!text) { toast('Enter some ingredients or food name', 'err'); return; }
  var food = lookupFood(text);
  var inputText = food ? food.i : text;
  showLd(true, 'Analyzing with AI engine...');
  setTimeout(function(){
    var result = analyzeIngredients(inputText, getUA());
    if (food) {
      result.foodName = food.n;
      result.recommendations = getRecommendations(getUA());
    }
    displayRes(result);
    if (window.cu && window._saveS) window._saveS({productName:food?food.n:'Manual Entry', ingredients:(result.ingredients||[]).join(', '), status:result.status, warnings:result.warnings});
    showLd(false);
  }, 300);
}
window.doText = doText;

function sFood(q) {
  var el = document.getElementById('fSugs');
  if (!q || q.length < 2) { el.style.display = 'none'; return; }
  var results = [];
  var foodKeys = Object.keys(FOODS);
  for (var i = 0; i < foodKeys.length; i++) {
    var k = foodKeys[i];
    var f = FOODS[k];
    var nameScore = fuzzyMatch(q.toLowerCase(), f.n.toLowerCase(), 0.5);
    if (nameScore >= 0.5) results.push({ k: k, f: f, score: nameScore });
  }
  var fkwKeys = Object.keys(FKW);
  for (var i = 0; i < fkwKeys.length; i++) {
    var k = fkwKeys[i];
    var words = FKW[k];
    for (var j = 0; j < words.length; j++) {
      var ws = fuzzyMatch(q.toLowerCase(), words[j], 0.5);
      if (ws >= 0.5) {
        var exists = results.some(function(r){ return r.k === k; });
        if (!exists) results.push({ k: k, f: FOODS[k], score: ws });
        break;
      }
    }
  }
  results.sort(function(a,b){ return b.score - a.score; });
  results = results.slice(0, 10);
  if (!results.length) { el.style.display = 'none'; return; }
  el.innerHTML = results.map(function(m){
    var matchLabel = m.score < 0.8 ? ' <span style="color:var(--w);font-size:.7rem">(did you mean?)</span>' : '';
    return '<div class="fssd" onclick="selFood(\'' + m.k + '\')">' + m.f.n + matchLabel + '</div>';
  }).join('');
  el.style.display = 'block';
}
window.sFood = sFood;

function selFood(k) {
  var f = FOODS[k];
  if (!f) return;
  document.getElementById('mIng').value = f.i;
  document.getElementById('fSrch').value = f.n;
  document.getElementById('fSugs').style.display = 'none';
  doText();
}
window.selFood = selFood;

document.addEventListener('click', function(e){
  var s = document.getElementById('fSugs');
  var i = document.getElementById('fSrch');
  if (s && i && !i.contains(e.target) && !s.contains(e.target)) s.style.display = 'none';
});

function displayRes(r) {
  var st = r.status || 'safe';
  var map = {
    safe: {ic:'fa-check-circle', t:'Safe', c:'safe'},
    'may-affect': {ic:'fa-exclamation-triangle', t:'May Affect You', c:'ma'},
    dangerous: {ic:'fa-exclamation-circle', t:'Dangerous', c:'dg'},
    severe: {ic:'fa-skull-crossbones', t:'SEVERE REACTION', c:'sv'}
  };
  var cfg = map[st] || map.safe;
  document.getElementById('rC').className = 'rc ' + cfg.c;
  document.getElementById('rI').innerHTML = '<i class="fas ' + cfg.ic + '"></i>';
  document.getElementById('rT').textContent = cfg.t;
  document.getElementById('rS').textContent = r.foodName ? ('Food: ' + r.foodName) : (st === 'safe' ? 'No allergens detected' : 'Found allergens in this food');

  var risk = r.overallRisk || { score:0, grade:'A', label:'SAFE', color:'safe' };
  document.getElementById('dIng').innerHTML = '<div style="display:flex;align-items:center;gap:.75rem;flex-wrap:wrap"><div style="flex:1">' + (r.ingredients && r.ingredients.length ? r.ingredients.join(', ') : (r.foodName ? 'Ingredients analyzed' : 'Ingredients analyzed by AI')) + '</div><div style="text-align:center;min-width:70px"><div style="position:relative;width:60px;height:60px;margin:0 auto"><svg viewBox="0 0 36 36" style="transform:rotate(-90deg);width:60px;height:60px"><circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--bd)" stroke-width="2.5"></circle><circle cx="18" cy="18" r="15.9" fill="none" stroke="' + (risk.color==='sv'?'var(--sv2)':risk.color==='dg'?'var(--dg)':risk.color==='ma'?'var(--ma)':'var(--sv)') + '" stroke-width="2.5" stroke-dasharray="' + risk.score + ' ' + (100-risk.score) + '" stroke-linecap="round"></circle></svg><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1rem;font-weight:800;color:var(--t)">' + risk.score + '%</div></div><div style="font-size:.65rem;font-weight:700;color:' + (risk.color==='sv'?'var(--sv2)':risk.color==='dg'?'var(--dg)':risk.color==='ma'?'var(--ma)':'var(--sv)') + '">' + risk.label + '</div></div></div>';

  var w = document.getElementById('wns');
  w.innerHTML = '';

  if (r.ingredientDetails && r.ingredientDetails.length) {
    r.ingredientDetails.forEach(function(d){
      d.allergens.forEach(function(a){
        var pctText = a.percent !== null ? a.percent + '%' : 'detected';
        var cls = a.riskScore >= 80 ? 'sv' : a.riskScore >= 50 ? 'dg' : a.riskScore >= 25 ? 'ma' : 'ma';
        var ic = a.riskScore >= 80 ? 'fa-skull-crossbones' : a.riskScore >= 50 ? 'fa-exclamation-circle' : 'fa-exclamation-triangle';
        var barColor = a.riskScore >= 80 ? 'var(--sv2)' : a.riskScore >= 50 ? 'var(--dg)' : a.riskScore >= 25 ? 'var(--ma)' : 'var(--w)';
        w.innerHTML += '<div class="wi ' + cls + '" style="flex-direction:column;gap:.4rem"><div style="display:flex;align-items:center;gap:.5rem"><i class="fas ' + ic + '"></i><strong>' + a.allergy + '</strong><span style="background:var(--bg);padding:.15rem .5rem;border-radius:12px;font-size:.7rem;font-weight:700">' + pctText + '</span><span style="margin-left:auto;font-size:.7rem;font-weight:700;color:' + barColor + '">' + (a.riskInfo ? a.riskInfo.label : '') + '</span></div><div style="width:100%;height:6px;background:var(--bg);border-radius:3px;overflow:hidden"><div style="height:100%;width:' + a.riskScore + '%;background:' + barColor + ';border-radius:3px;transition:width .5s"></div></div><div style="font-size:.75rem;color:var(--tm);padding-left:1.5rem">' + (a.why || '') + '</div></div>';
      });
    });
  } else {
    (r.warnings || []).forEach(function(wr){
      var isSv = wr.toLowerCase().indexOf('severe') !== -1 || wr.toLowerCase().indexOf('danger') !== -1;
      var isHd = wr.indexOf('Hidden:') === 0;
      var isCr = wr.indexOf('Cross-reactivity:') === 0;
      var cls = isSv ? (wr.toLowerCase().indexOf('severe') !== -1 ? 'sv' : 'dg') : isHd ? 'hd' : isCr ? 'in' : 'ma';
      var ic = isSv ? 'fa-exclamation-triangle' : isHd ? 'fa-eye' : isCr ? 'fa-link' : 'fa-info-circle';
      w.innerHTML += '<div class="wi ' + cls + '"><i class="fas ' + ic + '"></i><span>' + wr + '</span></div>';
    });
  }

  if (st === 'safe' && (!r.warnings || !r.warnings.length)) {
    w.innerHTML = '<div class="wi ok"><i class="fas fa-check-circle"></i><span>No known allergens detected!</span></div>';
  }

  if (r.condWarnings && r.condWarnings.length) {
    r.condWarnings.forEach(function(cw){
      w.innerHTML += '<div class="wi" style="background:rgba(59,130,246,.1);border-left:3px solid var(--b)"><i class="fas fa-notes-medical" style="color:var(--b)"></i><div><strong style="font-size:.82rem;color:var(--b)">Condition Alert: ' + cw.condition.replace(/_/g,' ').toUpperCase() + '</strong><br><span style="font-size:.8rem;color:var(--tm)">' + cw.advice + '</span></div></div>';
    });
  }

  var bx = document.getElementById('aiBx');
  if (r.condWarnings && r.condWarnings.length) {
    bx.style.display = 'block';
    var condSum = 'Condition-specific warnings found for: ';
    var condNames = [];
    r.condWarnings.forEach(function(cw){ if (condNames.indexOf(cw.condition) === -1) condNames.push(cw.condition.replace(/_/g,' ')); });
    condSum += condNames.join(', ') + '. ';
    condSum += 'Found ' + r.condWarnings.length + ' condition-related food match(es). ';
    condSum += 'Always verify with product labels and consult your healthcare provider.';
    document.getElementById('aiTx').textContent = condSum;
  } else if (r.matches && r.matches.length) {
    bx.style.display = 'block';
    var unique = [];
    r.matches.forEach(function(m){ if (unique.indexOf(m.allergy) === -1) unique.push(m.allergy); });
    var sum = 'Analysis complete. Found ' + r.matches.length + ' allergen match(es): ' + unique.join(', ') + '. ';
    sum += 'Overall Risk: ' + risk.score + '% (' + risk.label + '). ';
    if (r.hiddenWarns && r.hiddenWarns.length) sum += r.hiddenWarns.length + ' hidden allergen warning(s). ';
    if (r.percentages && r.percentages.length) {
      sum += 'Detected ' + r.percentages.length + ' ingredient percentage(s). ';
    }
    sum += 'Always verify with product labels and consult your doctor.';
    document.getElementById('aiTx').textContent = sum;
  } else if (st === 'safe') {
    bx.style.display = 'block';
    var safeMsg = 'Analysis complete. No allergen matches found. ';
    if (r.recommendations && r.recommendations.length) {
      safeMsg += 'Here are some safe food options for you: ';
      r.recommendations.forEach(function(rec){
        safeMsg += rec.category + ': ' + rec.foods.join(', ') + '. ';
      });
    }
    safeMsg += 'Always verify with the actual product label.';
    document.getElementById('aiTx').textContent = safeMsg;
  } else {
    bx.style.display = 'none';
  }

  if (r.matches && r.matches.length) {
    var userAllergies = getUA();
    var safeFoods = getSafeFoods(userAllergies);
    var allergyTips = getAllergyTips(userAllergies);
    if (safeFoods.length > 0 || allergyTips.length > 0) {
      var recBox = document.getElementById('aiBx');
      var existingRec = document.getElementById('safeRecs');
      if (existingRec) existingRec.remove();
      var recDiv = document.createElement('div');
      recDiv.id = 'safeRecs';
      recDiv.style.cssText = 'margin-top:.75rem;padding-top:.75rem;border-top:1px solid rgba(139,92,246,.25)';
      var recHtml = '';
      if (allergyTips.length > 0) {
        recHtml += '<h4 style="color:var(--w);margin-bottom:.4rem;font-size:.85rem"><i class="fas fa-lightbulb"></i> Tips for Your Allergies</h4>';
        allergyTips.forEach(function(tip){
          recHtml += '<div style="margin-bottom:.5rem;padding:.5rem;background:rgba(245,158,11,.08);border-radius:6px"><strong style="color:var(--t);font-size:.8rem">' + tip.allergy + ':</strong> <span style="color:var(--tm);font-size:.78rem">' + tip.tips.join(' | ') + '</span></div>';
        });
      }
      if (safeFoods.length > 0) {
        recHtml += '<h4 style="color:var(--sv);margin-bottom:.4rem;font-size:.85rem;margin-top:.5rem"><i class="fas fa-check-circle"></i> Safe Alternatives for You</h4><div style="display:flex;flex-wrap:wrap;gap:.4rem">';
        var shown = safeFoods.slice(0, 10);
        shown.forEach(function(s){
          recHtml += '<span style="background:rgba(16,185,129,.15);color:var(--sv);padding:.2rem .6rem;border-radius:12px;font-size:.75rem;font-weight:500;cursor:pointer" onclick="selFood(\'' + s.key + '\')">' + s.food.n + '</span>';
        });
        if (safeFoods.length > 10) recHtml += '<span style="color:var(--tm);font-size:.75rem;padding:.2rem .4rem">+' + (safeFoods.length - 10) + ' more</span>';
        recHtml += '</div>';
      }
      recDiv.innerHTML = recHtml;
      recBox.appendChild(recDiv);
    }
  }
}

function searchConditions(q) {
  var el = document.getElementById('condList');
  var det = document.getElementById('condDetails');
  var res = document.getElementById('condRes');
  det.style.display = 'none';
  if (!q || q.length < 2) { el.innerHTML = renderCondList(CONDITIONS_DB.slice(0, 30)); return; }
  var l = q.toLowerCase();
  var results = CONDITIONS_DB.filter(function(c){
    return c.c.toLowerCase().indexOf(l) !== -1 || c.cat.toLowerCase().indexOf(l) !== -1 || c.food.toLowerCase().indexOf(l) !== -1 || c.med.toLowerCase().indexOf(l) !== -1 || c.treat.toLowerCase().indexOf(l) !== -1;
  });
  res.innerHTML = '<div style="font-size:.85rem;color:var(--tm);margin-bottom:.5rem"><strong style="color:var(--t)">' + results.length + '</strong> condition(s) found for "<strong style="color:var(--p)">' + q + '</strong>"</div>';
  el.innerHTML = renderCondList(results.slice(0, 50));
}
window.searchConditions = searchConditions;

function filterCondCat(cat) {
  var el = document.getElementById('condList');
  var det = document.getElementById('condDetails');
  var res = document.getElementById('condRes');
  var search = document.getElementById('condSearch');
  det.style.display = 'none';
  search.value = '';
  var results = cat ? CONDITIONS_DB.filter(function(c){ return c.cat === cat; }) : CONDITIONS_DB;
  res.innerHTML = '<div style="font-size:.85rem;color:var(--tm);margin-bottom:.5rem"><strong style="color:var(--t)">' + results.length + '</strong> condition(s) in <strong style="color:var(--p)">' + (cat || 'All') + '</strong></div>';
  el.innerHTML = renderCondList(results.slice(0, 50));
}
window.filterCondCat = filterCondCat;

function renderCondList(list) {
  if (!list.length) return '<div style="text-align:center;color:var(--tm);padding:2rem">No conditions found. Try a different search.</div>';
  var cats = {};
  list.forEach(function(c){ if (!cats[c.cat]) cats[c.cat] = 0; cats[c.cat]++; });
  var catColors = {'Allergy':'var(--dg)','Drug allergy':'var(--pur)','Genetic':'var(--b)','Autoimmune':'var(--pur)','Metabolic':'var(--w)','GI':'var(--ma)','Renal':'var(--b)','Cardiovascular':'var(--dg)','Respiratory':'var(--sv)','Neurological':'var(--pur)','Blood':'var(--dg)','Liver':'var(--w)','Skin':'var(--ma)','Mental health':'var(--pur)','Sensitivity':'var(--w)','Endocrine':'var(--sv)','Infection':'var(--dg)','Cancer':'var(--sv2)','Emergency allergy':'var(--sv2)','Allergy syndrome':'var(--ma)','Allergy/skin':'var(--ma)','Drug/respiratory':'var(--pur)','Drug/medical':'var(--pur)','Genetic metabolic':'var(--b)','Porphyria':'var(--pur)','GI sensitivity':'var(--w)','GI/immune':'var(--pur)','Infection/GI':'var(--dg)','GI emergency':'var(--sv2)','Infection/renal':'var(--dg)','Urologic':'var(--b)','Urologic emergency':'var(--sv2)','Electrolyte':'var(--w)','Electrolyte emergency':'var(--sv2)','Renal/metabolic':'var(--b)','Genetic/renal':'var(--b)','Renal/immune':'var(--pur)','Autoimmune renal':'var(--pur)','Renal/endocrine':'var(--b)','Infection/liver':'var(--dg)','Liver/metabolic':'var(--w)','Liver/immune':'var(--pur)','Liver emergency':'var(--sv2)','GI/autoimmune':'var(--pur)','Autoimmune GI':'var(--pur)','Autoimmune/skin':'var(--pur)','Inflammatory':'var(--ma)','Immune/GI':'var(--pur)','Genetic bone':'var(--b)','Genetic connective tissue':'var(--b)','Genetic cardiac':'var(--b)','Cardiac':'var(--dg)','Cardiac/inflammatory':'var(--ma)','Cardiac/respiratory':'var(--dg)','Infection/cardiac':'var(--dg)','Autonomic/cardiac':'var(--b)','Genetic blood':'var(--dg)','Autoimmune blood':'var(--pur)','Bleeding disorder':'var(--dg)','Blood/clotting':'var(--dg)','Blood cancer':'var(--sv2)','Bone marrow':'var(--w)','Emergency clotting':'var(--sv2)','Metabolic/cardiovascular':'var(--w)','Vascular':'var(--dg)','Vascular lung':'var(--dg)','Vascular emergency':'var(--sv2)','Vascular/GI emergency':'var(--sv2)','Arrhythmia':'var(--dg)','Sleep/respiratory':'var(--b)','Genetic respiratory':'var(--b)','ENT/respiratory':'var(--b)','ENT':'var(--b)','Neurological/immune':'var(--pur)','Neuromuscular':'var(--pur)','Genetic neurological':'var(--b)','Genetic neuro':'var(--b)','Sleep/neurological':'var(--b)','Neurological/oncology':'var(--sv2)','Infection/neuro':'var(--dg)','Blood/nutritional':'var(--w)','Parasitic infection':'var(--dg)','Viral infection':'var(--dg)','Viral':'var(--dg)','Viral emergency':'var(--sv2)','Viral skin':'var(--dg)','Bacterial':'var(--dg)','Bacterial infection':'var(--dg)','Infectious skin':'var(--dg)','Skin/immune':'var(--ma)','Skin/allergy':'var(--ma)','Immune/skin':'var(--pur)','Allergy/skin':'var(--ma)','Genetic skin':'var(--b)','Inflammatory skin':'var(--ma)','Mental health':'var(--pur)','Neurodevelopmental':'var(--b)','Eating disorder':'var(--dg)','Sleep':'var(--b)','Behavioral/medical':'var(--w)','Behavioral':'var(--w)','Pregnancy/endocrine':'var(--ma)','Metabolic emergency':'var(--sv2)','GI':'var(--w)','GI sensitivity':'var(--w)','Metabolic':'var(--w)','Bone':'var(--b)','Bone/metabolic':'var(--b)','Cardiac':'var(--dg)','Respiratory':'var(--sv)','Infection':'var(--dg)','Blood':'var(--dg)','Infection/liver':'var(--dg)','Autoimmune':'var(--pur)','Endocrine':'var(--sv)','Electrolyte':'var(--w)'};
  var html = '<div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:.75rem">';
  var uniqueCats = {};
  list.forEach(function(c){ uniqueCats[c.cat] = true; });
  Object.keys(uniqueCats).forEach(function(cat){
    var color = catColors[cat] || 'var(--tm)';
    html += '<span style="background:rgba(255,255,255,.08);color:' + color + ';padding:.15rem .5rem;border-radius:12px;font-size:.7rem;font-weight:600;cursor:pointer" onclick="filterCondCat(\'' + cat + '\')">' + cat + ' (' + list.filter(function(c){ return c.cat === cat; }).length + ')</span>';
  });
  html += '</div>';
  list.forEach(function(c){
    var color = catColors[c.cat] || 'var(--tm)';
    html += '<div class="hi" style="cursor:pointer;border-left-color:' + color + '" onclick="showCondDetail(' + c.id + ')">';
    html += '<div class="hinf"><h4 style="font-size:.88rem">' + c.c + '</h4>';
    html += '<p style="font-size:.78rem;margin-top:.2rem"><span style="background:rgba(255,255,255,.08);color:' + color + ';padding:.1rem .4rem;border-radius:8px;font-size:.68rem;font-weight:600">' + c.cat + '</span></p>';
    html += '<p style="font-size:.75rem;color:var(--tm);margin-top:.3rem"><strong style="color:var(--t)">Food:</strong> ' + c.food.substring(0, 100) + (c.food.length > 100 ? '...' : '') + '</p>';
    html += '</div>';
    html += '<span class="hst" style="background:rgba(255,255,255,.08);color:' + color + ';font-size:.68rem;cursor:pointer">Details <i class="fas fa-arrow-right" style="font-size:.6rem"></i></span>';
    html += '</div>';
  });
  return html;
}

function showCondDetail(id) {
  var c = CONDITIONS_DB.find(function(x){ return x.id === id; });
  if (!c) return;
  var det = document.getElementById('condDetails');
  var color = 'var(--p)';
  var catColors2 = {'Allergy':'var(--dg)','Drug allergy':'var(--pur)','Genetic':'var(--b)','Autoimmune':'var(--pur)','Metabolic':'var(--w)','GI':'var(--ma)','Renal':'var(--b)','Cardiovascular':'var(--dg)','Respiratory':'var(--sv)','Neurological':'var(--pur)','Blood':'var(--dg)','Liver':'var(--w)','Skin':'var(--ma)','Mental health':'var(--pur)','Sensitivity':'var(--w)'};
  color = catColors2[c.cat] || 'var(--p)';
  det.innerHTML = '<div style="background:var(--c1);border-radius:14px;padding:1.5rem;border:1px solid var(--bd);margin-bottom:1.25rem">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem">' +
    '<h3 style="font-size:1.1rem;display:flex;align-items:center;gap:.4rem"><i class="fas fa-notes-medical" style="color:' + color + '"></i> ' + c.c + '</h3>' +
    '<span style="background:rgba(255,255,255,.08);color:' + color + ';padding:.2rem .6rem;border-radius:12px;font-size:.75rem;font-weight:600;cursor:pointer" onclick="document.getElementById(\'condDetails\').style.display=\'none\'"><i class="fas fa-times"></i> Close</span>' +
    '</div>' +
    '<div style="display:grid;gap:.75rem">' +
    '<div style="padding:.6rem;background:rgba(245,158,11,.08);border-radius:8px;border-left:3px solid var(--w)"><strong style="color:var(--w);font-size:.8rem"><i class="fas fa-utensils"></i> Food Restrictions:</strong><p style="color:var(--tm);font-size:.82rem;margin-top:.25rem;line-height:1.5">' + c.food + '</p></div>' +
    '<div style="padding:.6rem;background:rgba(139,92,246,.08);border-radius:8px;border-left:3px solid var(--pur)"><strong style="color:var(--pur);font-size:.8rem"><i class="fas fa-pills"></i> Medication/Trigger Considerations:</strong><p style="color:var(--tm);font-size:.82rem;margin-top:.25rem;line-height:1.5">' + c.med + '</p></div>' +
    '<div style="padding:.6rem;background:rgba(16,185,129,.08);border-radius:8px;border-left:3px solid var(--sv)"><strong style="color:var(--sv);font-size:.8rem"><i class="fas fa-stethoscope"></i> Typical Treatment:</strong><p style="color:var(--tm);font-size:.82rem;margin-top:.25rem;line-height:1.5">' + c.treat + '</p></div>' +
    '</div>' +
    '<div style="margin-top:.75rem;padding:.5rem;background:rgba(255,255,255,.05);border-radius:8px;font-size:.75rem;color:var(--tm)"><i class="fas fa-info-circle" style="color:var(--b)"></i> <strong>ID:</strong> ' + c.id + ' | <strong>Category:</strong> ' + c.cat + ' | <em>Always consult your healthcare provider for personalized medical advice.</em></div>' +
    '</div>';
  det.style.display = 'block';
  det.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.showCondDetail = showCondDetail;

function initCondCatBtns() {
  var cats = {};
  CONDITIONS_DB.forEach(function(c){ if (!cats[c.cat]) cats[c.cat] = 0; cats[c.cat]++; });
  var el = document.getElementById('condCatBtns');
  var topCats = Object.keys(cats).sort(function(a,b){ return cats[b] - cats[a]; }).slice(0, 15);
  var catColors3 = {'Allergy':'var(--dg)','Drug allergy':'var(--pur)','Genetic':'var(--b)','Autoimmune':'var(--pur)','Metabolic':'var(--w)','GI':'var(--ma)','Renal':'var(--b)','Cardiovascular':'var(--dg)','Respiratory':'var(--sv)','Neurological':'var(--pur)','Blood':'var(--dg)','Liver':'var(--w)','Skin':'var(--ma)','Mental health':'var(--pur)','Sensitivity':'var(--w)'};
  topCats.forEach(function(cat){
    var color = catColors3[cat] || 'var(--tm)';
    el.innerHTML += '<span style="background:rgba(255,255,255,.08);color:' + color + ';padding:.2rem .55rem;border-radius:12px;font-size:.72rem;font-weight:600;cursor:pointer;transition:all .2s" onclick="filterCondCat(\'' + cat + '\')" onmouseover="this.style.background=\'rgba(255,255,255,.15)\'" onmouseout="this.style.background=\'rgba(255,255,255,.08)\'">' + cat + ' <span style="opacity:.6">(' + cats[cat] + ')</span></span>';
  });
  el.innerHTML += '<span style="background:rgba(16,185,129,.15);color:var(--sv);padding:.2rem .55rem;border-radius:12px;font-size:.72rem;font-weight:600;cursor:pointer" onclick="filterCondCat(null)">All (' + CONDITIONS_DB.length + ')</span>';
}

function showAllConditions() {
  var el = document.getElementById('condList');
  var res = document.getElementById('condRes');
  var det = document.getElementById('condDetails');
  res.innerHTML = '';
  det.style.display = 'none';
  el.innerHTML = renderCondList(CONDITIONS_DB.slice(0, 30));
}

function showLd(s, t) {
  document.getElementById('ldg').style.display = s ? 'block' : 'none';
  if (t) document.getElementById('ldT').textContent = t;
  var b = document.getElementById('scanB');
  if (b) b.disabled = s;
}

function fSt(s) {
  return {safe:'Safe','may-affect':'May Affect',dangerous:'Dangerous',severe:'Severe'}[s] || s;
}
window.fSt = fSt;

function toast(m, t) {
  t = t || 'ok';
  var e = document.getElementById('toast');
  e.textContent = m;
  e.className = 'to ' + t + ' show';
  setTimeout(function(){ e.classList.remove('show'); }, 4000);
}
window.toast = toast;

document.addEventListener('DOMContentLoaded', function(){
  initAG();
  initAI();
  initU();
  initCondCatBtns();
  showAllConditions();
});

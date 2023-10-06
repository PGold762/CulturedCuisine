const { Chinese } = require('../models');

// Chinese Recipes Data
const chinesedata = [

{
    "title": "Chinese",
	"recipes": [
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 98,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 305.98,
			"combinedIngredients": "",
			"extendedIngredients": [
				{
					"id": 2048,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "apple-cider-vinegar.jpg",
					"consistency": "LIQUID",
					"name": "apple cider vinegar",
					"nameClean": "apple cider vinegar",
					"original": "1 tsp. (5ml) of organic apple cider vinegar",
					"originalName": "tsp. of organic apple cider vinegar",
					"amount": 5.0,
					"unit": "ml",
					"meta": [
						"organic"
					],
					"measures": {
						"us": {
							"amount": 0.171,
							"unitShort": "fl. oz",
							"unitLong": "fl. ozs"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1 teaspoon crushed black pepper",
					"originalName": "crushed black pepper",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"black",
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10012023,
					"aisle": "Ethnic Foods",
					"image": "black-sesame-seeds-or-chia-seeds.png",
					"consistency": "SOLID",
					"name": "sesame seeds",
					"nameClean": "black sesame seeds",
					"original": "1 1/2 tablespoons black sesame seeds",
					"originalName": "black sesame seeds",
					"amount": 1.5,
					"unit": "tablespoons",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "3 carrots",
					"originalName": "carrots",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1034053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "extra virgin olive oil",
					"nameClean": "extra virgin olive oil",
					"original": "1/4 C extra virgin olive oil + 7-8 Tbsp for frying",
					"originalName": "extra virgin olive oil + 7-8 Tbsp for frying",
					"amount": 0.25,
					"unit": "C",
					"meta": [
						"for frying"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "Cs"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						}
					}
				},
				{
					"id": 11109,
					"aisle": "Produce",
					"image": "cabbage.jpg",
					"consistency": "SOLID",
					"name": "cabbage",
					"nameClean": "cabbage",
					"original": "1/2 green cabbage",
					"originalName": "green cabbage",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1082047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "kosher salt",
					"nameClean": "kosher salt",
					"original": "1/2 teaspoon kosher salt",
					"originalName": "kosher salt",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 9218,
					"aisle": "Produce",
					"image": "mandarin-or-tangerines-or-clementines.jpg",
					"consistency": "SOLID",
					"name": "satsuma mandarins",
					"nameClean": "mandarin oranges",
					"original": "6-8 fresh satsuma mandarins",
					"originalName": "fresh satsuma mandarins",
					"amount": 6.0,
					"unit": "",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11112,
					"aisle": "Produce",
					"image": "red-cabbage.png",
					"consistency": "SOLID",
					"name": "cabbage",
					"nameClean": "red cabbage",
					"original": "1/2 red cabbage",
					"originalName": "red cabbage",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 5064,
					"aisle": "Meat",
					"image": "cooked-chicken-breast.png",
					"consistency": "SOLID",
					"name": "chicken breasts roasted",
					"nameClean": "cooked chicken breast",
					"original": "3 chicken breasts (bone in, preferably organic) roasted and shredded",
					"originalName": "chicken breasts (bone in, preferably organic) roasted and shredded",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"shredded",
						"bone in",
						"organic",
						"(, preferably )"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10111251,
					"aisle": "Produce",
					"image": "romaine.jpg",
					"consistency": "SOLID",
					"name": "romaine lettuce hearts",
					"nameClean": "romaine",
					"original": "2 bunches romaine lettuce hearts",
					"originalName": "romaine lettuce hearts",
					"amount": 2.0,
					"unit": "bunches",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "bunches",
							"unitLong": "bunches"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "bunches",
							"unitLong": "bunches"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "6 scallions",
					"originalName": "scallions",
					"amount": 6.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "3 tablespoons sesame oil",
					"originalName": "sesame oil",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 93640,
					"aisle": "Canned and Jarred",
					"image": "pickle-juice.jpg",
					"consistency": "SOLID",
					"name": "juice of 1 mandarin (cut crosswise then tablespoon into jar over a strainer)",
					"nameClean": "pickle juice",
					"original": "juice of 1 mandarin (cut crosswise then tablespoon into jar over a strainer)",
					"originalName": "juice of mandarin (cut crosswise then tablespoon into jar over a strainer)",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"(cut crosswise then tablespoon into jar over a strainer)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 12023,
					"aisle": "Ethnic Foods",
					"image": "sesame-seeds.png",
					"consistency": "SOLID",
					"name": "sesame seeds",
					"nameClean": "sesame seeds",
					"original": "3 tablespoons white sesame seeds",
					"originalName": "white sesame seeds",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [
						"white"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 99005,
					"aisle": "Health Foods",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "xylitol",
					"nameClean": "xylitol",
					"original": "1 1/2 tablespoons xylitol (I use Epic Dental brand)",
					"originalName": "xylitol (I use Epic Dental brand)",
					"amount": 1.5,
					"unit": "tablespoons",
					"meta": [
						"(I use Epic Dental brand)"
					],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				}
			],
			"id": 644826,
			"title": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "http://www.foodista.com/recipe/ZSNGMXBF/gluten-free-dairy-free-sugar-free-chinese-chicken-salad",
			"image": "https://spoonacular.com/recipeImages/644826-556x370.jpg",
			"imageType": "jpg",
			"summary": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad is a <b>gluten free and dairy free</b> main course. This recipe serves 6 and costs $3.06 per serving. One serving contains <b>364 calories</b>, <b>31g of protein</b>, and <b>15g of fat</b>. If you have scallions, pepper, kosher salt, and a few other ingredients on hand, you can make it. This recipe from Foodista has 3 fans. Not a lot of people really liked this Chinese dish. From preparation to the plate, this recipe takes about <b>45 minutes</b>. With a spoonacular <b>score of 94%</b>, this dish is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-1364955\">Gluten Free Dairy Free Sugar Free Chinese Chicken Salad</a>, <a href=\"https://spoonacular.com/recipes/thousand-island-dressing-gluten-free-corn-free-dairy-free-soy-free-nut-free-gum-free-and-refined-sugar-free-512186\">Thousand Island Dressing (Gluten-Free, Corn-Free, Dairy-Free, Soy-Free, Nut-Free, Gum-Free and Refined Sugar-Free)</a>, and <a href=\"https://spoonacular.com/recipes/skinny-double-chocolate-muffins-vegan-gluten-free-dairy-free-egg-free-and-refined-sugar-free-1149614\">Skinny Double Chocolate Muffins-Vegan, Gluten Free, Dairy Free, Egg Free and Refined Sugar Free</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"salad",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "<ol><li>For the salad:</li><li>Finely slice the red, and green cabbage.</li><li>Remove ends and finely slice romaine lettuce.</li><li>Trim ends of scallions (white and green side) and finely slice.</li><li>Peel and grate carrots, or put into a mini food processor to finely chop.</li><li>Peel clementines then remove pith from slices.</li><li>Add all the ingredients into a large serving bowl.</li><li>For the dressing:</li><li>Add all the ingredients into a glass jar and shake until well blended, or whisk all the ingredients in a mixing bowl.</li><li>Pour dressing over salad, toss to combine well.</li><li>If making ahead, dress the salad just before serving.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "For the salad:Finely slice the red, and green cabbage.",
							"ingredients": [
								{
									"id": 11109,
									"name": "green cabbage",
									"localizedName": "green cabbage",
									"image": "cabbage.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Remove ends and finely slice romaine lettuce.Trim ends of scallions (white and green side) and finely slice.Peel and grate carrots, or put into a mini food processor to finely chop.Peel clementines then remove pith from slices.",
							"ingredients": [
								{
									"id": 10111251,
									"name": "romaine",
									"localizedName": "romaine",
									"image": "romaine"
								},
								{
									"id": 9433,
									"name": "clementine",
									"localizedName": "clementine",
									"image": "mandarin-or-tangerines-or-clementines.jpg"
								},
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						}
					]
				},
				{
					"name": "Add all the ingredients into a large serving bowl.For the dressing",
					"steps": [
						{
							"number": 1,
							"step": "Add all the ingredients into a glass jar and shake until well blended, or whisk all the ingredients in a mixing bowl.",
							"ingredients": [
								{
									"id": 0,
									"name": "shake",
									"localizedName": "shake",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 405907,
									"name": "mixing bowl",
									"localizedName": "mixing bowl",
									"image": "mixing-bowl.jpg"
								},
								{
									"id": 404661,
									"name": "whisk",
									"localizedName": "whisk",
									"image": "whisk.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Pour dressing over salad, toss to combine well.If making ahead, dress the salad just before serving.",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-644826"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 15,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 35,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 271.36,
			"extendedIngredients": [
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "•2 carrots, cut into thin pieces",
					"originalName": "carrots, cut into thin pieces",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"cut into thin pieces"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 5062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breasts",
					"nameClean": "chicken breast",
					"original": "2 lbs boneless chicken breasts, cut into strips",
					"originalName": "boneless chicken breasts, cut into strips",
					"amount": 2.0,
					"unit": "lbs",
					"meta": [
						"boneless",
						"cut into strips"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 907.185,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2048,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "apple-cider-vinegar.jpg",
					"consistency": "LIQUID",
					"name": "cider vinegar",
					"nameClean": "apple cider vinegar",
					"original": "•3 tbsp cider vinegar",
					"originalName": "cider vinegar",
					"amount": 3.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 20027,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "corn starch",
					"nameClean": "corn starch",
					"original": "•2 tbsp corn starch (+ 2 tbsp water mixed together)",
					"originalName": "corn starch (+ 2 tbsp water mixed together)",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [
						"mixed"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 20027,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "cornstarch",
					"nameClean": "corn starch",
					"original": "•2 tbsp cornstarch",
					"originalName": "cornstarch",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 99296,
					"aisle": "Health Foods",
					"image": "edamame.png",
					"consistency": "SOLID",
					"name": "edamame",
					"nameClean": "edamame",
					"original": "•1 cup edamame",
					"originalName": "edamame",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 148.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 99296,
					"aisle": "Health Foods",
					"image": "shelled-edamame.jpg",
					"consistency": "SOLID",
					"name": "edamame",
					"nameClean": "edamame",
					"original": "•1 cup edamame",
					"originalName": "edamame",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 148.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "egg",
					"nameClean": "egg",
					"original": "•1 beaten egg",
					"originalName": "beaten egg",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"beaten"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 20081,
					"aisle": "Baking",
					"image": "flour.png",
					"consistency": "SOLID",
					"name": "flour",
					"nameClean": "wheat flour",
					"original": "•½ cup flour",
					"originalName": "flour",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 62.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "•1 medium size onion, cut into strips",
					"originalName": "onion, cut into strips",
					"amount": 1.0,
					"unit": "medium size",
					"meta": [
						"cut into strips"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium size",
							"unitLong": "medium size"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium size",
							"unitLong": "medium size"
						}
					}
				},
				{
					"id": 9273,
					"aisle": "Beverages",
					"image": "pineapple-juice.jpg",
					"consistency": "LIQUID",
					"name": "pineapple juice",
					"nameClean": "pineapple juice",
					"original": "•1/4 cup pineapple juice (optional if available)",
					"originalName": "pineapple juice (optional if available)",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"(optional if available)"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 59.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "•2 tbsp soy sauce",
					"originalName": "soy sauce",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "•3 tbsp sugar",
					"originalName": "sugar",
					"amount": 3.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "Vegetable Oil",
					"originalName": "Vegetable Oil",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "•1 cup of water",
					"originalName": "of water",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 638369,
			"title": "Korean Sweet n Sour Chicken",
			"readyInMinutes": 30,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/6458DTC4/chicken-tangsuyuk-sweet-n-sour-chicken",
			"image": "https://spoonacular.com/recipeImages/638369-556x370.jpg",
			"imageType": "jpg",
			"summary": "Korean Sweet n Sour Chicken requires roughly <b>30 minutes</b> from start to finish. One serving contains <b>604 calories</b>, <b>56g of protein</b>, and <b>22g of fat</b>. This recipe serves 4 and costs $2.71 per serving. A mixture of sugar, soy sauce, cider vinegar, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 2 fans. This recipe is typical of Chinese cuisine. It works well as a main course. It is a good option if you're following a <b>dairy free</b> diet. With a spoonacular <b>score of 78%</b>, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/korean-sweet-n-sour-chicken-1229083\">Korean Sweet n Sour Chicken</a>, <a href=\"https://spoonacular.com/recipes/korean-cabbage-wraps-with-sweet-and-sour-cucumber-salad-301159\">Korean Cabbage Wraps with Sweet-and-Sour Cucumber Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-korean-bbq-short-rib-dogs-with-sweet-peach-relish-spicy-korean-slaw-549399\">Grilled Korean BBQ Short Rib Dogs with Sweet Peach Relish + Spicy Korean Slaw</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "<ol><li>Cut the chicken into thin strips, about 1 or 2-inch pieces. Add soy sauce to the chicken for a short marination; mix well and set aside.</li><li>Cut the vegetables into large bite-sized pieces. Set aside until the sauce is ready and thickened.</li><li>Make batter by mixing the flour, cornstarch, water and beaten egg. Add more flour until a thick consistency is reached. Dip the marinated chicken strips into the batter.</li><li>Bring vegetable oil to medium high heat. Deep fry each of the strips for about 3, 4 min for each batch or until browned and cooked through. When finished, place on paper towel-lined dish to remove excess oil. Once the first round of frying is done, heat the oil and re-fry the batch for the 2nd time to make it really crispy (optional).</li><li>To make the sauce bring the following ingredients in a saucepan: one cup of water along 3 tbsp vinegar, 3 tbsp sugar, and 2 tbsp of soy sauce. Bring to a rapid boil and then add the mixture of cornstarch and water. Add desired vegetables and let simmer for about 5 minutes or until it thickens.</li><li>On a large plate, add the fried chicken strips, then pour over the sauce/vegetable mixture and serve while warm.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Cut the chicken into thin strips, about 1 or 2-inch pieces.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Add soy sauce to the chicken for a short marination; mix well and set aside.",
							"ingredients": [
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Cut the vegetables into large bite-sized pieces. Set aside until the sauce is ready and thickened.Make batter by mixing the flour, cornstarch, water and beaten egg.",
							"ingredients": [
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add more flour until a thick consistency is reached. Dip the marinated chicken strips into the batter.Bring vegetable oil to medium high heat. Deep fry each of the strips for about 3, 4 min for each batch or until browned and cooked through. When finished, place on paper towel-lined dish to remove excess oil. Once the first round of frying is done, heat the oil and re-fry the batch for the 2nd time to make it really crispy (optional).To make the sauce bring the following ingredients in a saucepan: one cup of water along 3 tbsp vinegar, 3 tbsp sugar, and 2 tbsp of soy sauce. Bring to a rapid boil and then add the mixture of cornstarch and water.",
							"ingredients": [
								{
									"id": 1015062,
									"name": "chicken tenders",
									"localizedName": "chicken tenders",
									"image": "chicken-tenders-or-fingers.png"
								},
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 2053,
									"name": "vinegar",
									"localizedName": "vinegar",
									"image": "vinegar-(white).jpg"
								},
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "dip",
									"localizedName": "dip",
									"image": ""
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 405895,
									"name": "paper towels",
									"localizedName": "paper towels",
									"image": "paper-towels.jpg"
								},
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add desired vegetables and let simmer for about 5 minutes or until it thickens.On a large plate, add the fried chicken strips, then pour over the sauce/vegetable mixture and serve while warm.",
							"ingredients": [
								{
									"id": 1015062,
									"name": "chicken tenders",
									"localizedName": "chicken tenders",
									"image": "chicken-tenders-or-fingers.png"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/korean-sweet-n-sour-chicken-638369"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 44,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 6,
			"healthScore": 23,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 228.79,
			"extendedIngredients": [
				{
					"id": 19350,
					"aisle": "Baking",
					"image": "corn-syrup.png",
					"consistency": "SOLID",
					"name": "corn syrup",
					"nameClean": "corn syrup",
					"original": "1 teaspoon light corn syrup",
					"originalName": "light corn syrup",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"light"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 5139,
					"aisle": "Meat",
					"image": "duck.png",
					"consistency": "SOLID",
					"name": "duck",
					"nameClean": "whole duck",
					"original": "1 (8 -10 lb.) Duck",
					"originalName": "Duck",
					"amount": 8.0,
					"unit": "lb",
					"meta": [],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 3.629,
							"unitShort": "kgs",
							"unitLong": "kgs"
						}
					}
				},
				{
					"id": 1002002,
					"aisle": "Ethnic Foods",
					"image": "chinese-five-spice-powder.png",
					"consistency": "SOLID",
					"name": "five spice powder",
					"nameClean": "chinese five spice",
					"original": "1/4 teaspoon five spice powder",
					"originalName": "five spice powder",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 6175,
					"aisle": "Ethnic Foods",
					"image": "dark-sauce.jpg",
					"consistency": "SOLID",
					"name": "hoisin sauce",
					"nameClean": "hoisin sauce",
					"original": "Hoisin sauce",
					"originalName": "Hoisin sauce",
					"amount": 12.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 19296,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "honey.png",
					"consistency": "LIQUID",
					"name": "honey",
					"nameClean": "honey",
					"original": "1 teaspoon honey",
					"originalName": "honey",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1022053,
					"aisle": "Ethnic Foods",
					"image": "rice-vinegar.png",
					"consistency": "LIQUID",
					"name": "rice wine vinegar",
					"nameClean": "rice vinegar",
					"original": "1 teaspoon rice wine vinegar",
					"originalName": "rice wine vinegar",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "2 teaspoons salt",
					"originalName": "salt",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "Scallions",
					"originalName": "Scallions",
					"amount": 12.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1 gallon boiling water",
					"originalName": "boiling water",
					"amount": 1.0,
					"unit": "gallon",
					"meta": [
						"boiling"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "gallon",
							"unitLong": "gallon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "gallon",
							"unitLong": "gallon"
						}
					}
				},
				{
					"id": 2032,
					"aisle": "Spices and Seasonings",
					"image": "white-pepper.png",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "white pepper",
					"original": "1/4 teaspoon white pepper",
					"originalName": "white pepper",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [
						"white"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				}
			],
			"id": 631888,
			"title": "A Christmas With Peking Duck",
			"readyInMinutes": 45,
			"servings": 12,
			"sourceUrl": "http://www.foodista.com/recipe/3NYBNQQD/a-christmas-with-peking-duck",
			"image": "https://spoonacular.com/recipeImages/631888-556x370.jpg",
			"imageType": "jpg",
			"summary": "Need a <b>gluten free and dairy free main course</b>? A Christmas With Peking Duck could be a great recipe to try. This recipe serves 12 and costs $2.29 per serving. One serving contains <b>1230 calories</b>, <b>35g of protein</b>, and <b>119g of fat</b>. 6 people have made this recipe and would make it again. If you have rice wine vinegar, honey, water, and a few other ingredients on hand, you can make it. It is perfect for <b>Christmas</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. It is a <b>reasonably priced</b> recipe for fans of Chinese food. All things considered, we decided this recipe <b>deserves a spoonacular score of 73%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/a-christmas-with-peking-duck-1349441\">A Christmas With Peking Duck</a>, <a href=\"https://spoonacular.com/recipes/beijing-roast-duck-peking-duck-pancakes-and-merlot-wine-pairing-1043855\">Beijing Roast Duck (Peking Duck Pancakes) and Merlot Wine Pairing</a>, and <a href=\"https://spoonacular.com/recipes/peking-duck-1211875\">Peking Duck</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [
				"christmas"
			],
			"instructions": "<ol><li>Rinse duck and remove innards. Cut skin around neck and remove tail.</li><li>Hang duck neck-side-up over a large pot. Boil water.</li><li>Pour boiling water over the duck until skin is puffed up. Remove boiled water from pot.</li><li>Combine salt, white pepper, five spice powder and 2 tsp of hoison sauce.</li><li>Brush mixture on the outside and inside of the duck to marinate it.</li><li>Let mixture dry - about 2 hours.</li><li>Combine corn syrup, honey, rice vinegar and brush outside of the duck. Let duck air dry for 12-24 hours.</li><li>Preheat oven to 450 degrees. Roast duck for 40 minutes.</li><li>Let meat rest for 15 minutes after cooking. Cut the meat into thin slices and enjoy. Serve with Bao, Chinese pan cakes add hosin sauce and scallions.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Rinse duck and remove innards.",
							"ingredients": [
								{
									"id": 5139,
									"name": "whole duck",
									"localizedName": "whole duck",
									"image": "duck.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Cut skin around neck and remove tail.Hang duck neck-side-up over a large pot. Boil water.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 5139,
									"name": "whole duck",
									"localizedName": "whole duck",
									"image": "duck.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Pour boiling water over the duck until skin is puffed up.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 5139,
									"name": "whole duck",
									"localizedName": "whole duck",
									"image": "duck.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Remove boiled water from pot.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 5,
							"step": "Combine salt, white pepper, five spice powder and 2 tsp of hoison sauce.",
							"ingredients": [
								{
									"id": 1002002,
									"name": "chinese five spice",
									"localizedName": "chinese five spice",
									"image": "chinese-five-spice-powder.png"
								},
								{
									"id": 2032,
									"name": "white pepper",
									"localizedName": "white pepper",
									"image": "white-pepper.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Brush mixture on the outside and inside of the duck to marinate it.",
							"ingredients": [
								{
									"id": 5139,
									"name": "whole duck",
									"localizedName": "whole duck",
									"image": "duck.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Let mixture dry - about 2 hours.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 120,
								"unit": "minutes"
							}
						},
						{
							"number": 8,
							"step": "Combine corn syrup, honey, rice vinegar and brush outside of the duck.",
							"ingredients": [
								{
									"id": 1022053,
									"name": "rice vinegar",
									"localizedName": "rice vinegar",
									"image": "rice-vinegar.png"
								},
								{
									"id": 19350,
									"name": "corn syrup",
									"localizedName": "corn syrup",
									"image": "corn-syrup.png"
								},
								{
									"id": 19296,
									"name": "honey",
									"localizedName": "honey",
									"image": "honey.png"
								},
								{
									"id": 5139,
									"name": "whole duck",
									"localizedName": "whole duck",
									"image": "duck.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Let duck air dry for 12-24 hours.Preheat oven to 450 degrees. Roast duck for 40 minutes.",
							"ingredients": [
								{
									"id": 5139,
									"name": "whole duck",
									"localizedName": "whole duck",
									"image": "duck.png"
								}
							],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 1480,
								"unit": "minutes"
							}
						},
						{
							"number": 10,
							"step": "Let meat rest for 15 minutes after cooking.",
							"ingredients": [
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 11,
							"step": "Cut the meat into thin slices and enjoy.",
							"ingredients": [
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Serve with Bao, Chinese pan cakes add hosin sauce and scallions.",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/a-christmas-with-peking-duck-631888"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 4,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 8,
			"healthScore": 61,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 125.93,
			"extendedIngredients": [
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "1 Tbsp olive oil or sesame oil",
					"originalName": "olive oil or sesame oil",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 tsp ginger, minced",
					"originalName": "ginger, minced",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 Tbsp garlic, minced",
					"originalName": "garlic, minced",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms.png",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "1 cup mushrooms, chopped",
					"originalName": "mushrooms, chopped",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 96.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms-white.jpg",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "1 cup mushrooms, chopped",
					"originalName": "mushrooms, chopped",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 96.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 10011168,
					"aisle": "Produce",
					"image": "baby-corn.jpg",
					"consistency": "SOLID",
					"name": "baby corns",
					"nameClean": "baby corn",
					"original": "6-7 baby corns, cut in round disks",
					"originalName": "baby corns, cut in round disks",
					"amount": 6.0,
					"unit": "",
					"meta": [
						"cut in round disks"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "green onions white part",
					"nameClean": "spring onions",
					"original": "1/4 cup green onions white part, chopped (Keep the chopped green part of green onions for garnishing)",
					"originalName": "green onions white part, chopped (Keep the chopped green part of green onions for garnishing)",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"chopped",
						"for garnishing",
						"(Keep the green part of green onions )"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 25.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "size carrot",
					"nameClean": "carrot",
					"original": "1 size carrot, chopped in small pieces",
					"originalName": "size carrot, chopped in small pieces",
					"amount": 1.0,
					"unit": "small",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "yellow-bell-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "bell pepper",
					"original": "1 small size bell pepper, chopped in small pieces",
					"originalName": "bell pepper, chopped in small pieces",
					"amount": 1.0,
					"unit": "small size",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small size",
							"unitLong": "small size"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small size",
							"unitLong": "small size"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "bell-pepper-orange.png",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "bell pepper",
					"original": "1 small size bell pepper, chopped in small pieces",
					"originalName": "bell pepper, chopped in small pieces",
					"amount": 1.0,
					"unit": "small size",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small size",
							"unitLong": "small size"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small size",
							"unitLong": "small size"
						}
					}
				},
				{
					"id": 16424,
					"aisle": "Ethnic Foods",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "lower sodium soy sauce",
					"original": "1 Tbsp low sodium soy sauce",
					"originalName": "low sodium soy sauce",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [
						"low sodium"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "black pepper",
					"original": "Black pepper to taste",
					"originalName": "Black pepper to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"black",
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 12023,
					"aisle": "Ethnic Foods",
					"image": "sesame-seeds.png",
					"consistency": "SOLID",
					"name": "sesame seeds",
					"nameClean": "sesame seeds",
					"original": "1 tsp sesame seeds",
					"originalName": "sesame seeds",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				}
			],
			"id": 660231,
			"title": "Skinny Veggie Fried Rice",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/S53BXV6Z/skinny-veggie-fried-rice",
			"image": "https://spoonacular.com/recipeImages/660231-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you have approximately <b>45 minutes</b> to spend in the kitchen, Skinny Veggie Fried Rice might be a spectacular <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe to try. This recipe serves 2 and costs $1.26 per serving. One portion of this dish contains about <b>5g of protein</b>, <b>9g of fat</b>, and a total of <b>157 calories</b>. It works well as a Chinese hor d'oeuvre. This recipe is liked by 8 foodies and cooks. A mixture of sesame oil, bell pepper, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. With a spoonacular <b>score of 92%</b>, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/skinny-veggie-fried-rice-1315153\">Skinny Veggie Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/skinny-veggie-fried-rice-1326473\">Skinny Veggie Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/skinny-chicken-fried-rice-1273519\">Skinny Chicken Fried Rice</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "Heat a wok or skillet on med-high and add 1 tsp oil. To it add minced ginger and 1 tsp minced garlic. Saute until fragrant but not burnt. Add mushroom pieces. Cook until tender for 5-6 minutes. Keep mushrooms along with any juices aside in a bowl.\nHeat wok again add 1 tsp oil. To it add remaining garlic. Saute until fragrant and add all the vegetables. Stir it all together on high flame. Add salt, black pepper and splash of soy sauce. Toss to coat and let them cook for few more minutes until they get tender but not soft. You want veggies to be cooked but with a little crunch. Now add the cold already cooked rice and stir it so it all gets mixed together. Do with a gentle hand. Let the rice get warm at med- high flame.Add the remaining 1 tsp oil along with salt, black pepper and soy sauce. Add the mushrooms and tofu(if using). Mix it all together. Toss and taste.\nGarnish with chopped green parts of green onions and sesame seeds.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Heat a wok or skillet on med-high and add 1 tsp oil. To it add minced ginger and 1 tsp minced garlic.",
							"ingredients": [
								{
									"id": 0,
									"name": "minced garlic",
									"localizedName": "minced garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404666,
									"name": "wok",
									"localizedName": "wok",
									"image": "wok.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Saute until fragrant but not burnt.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Add mushroom pieces. Cook until tender for 5-6 minutes. Keep mushrooms along with any juices aside in a bowl.",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							],
							"length": {
								"number": 6,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Heat wok again add 1 tsp oil. To it add remaining garlic.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404666,
									"name": "wok",
									"localizedName": "wok",
									"image": "wok.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Saute until fragrant and add all the vegetables. Stir it all together on high flame.",
							"ingredients": [
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Add salt, black pepper and splash of soy sauce. Toss to coat and let them cook for few more minutes until they get tender but not soft. You want veggies to be cooked but with a little crunch. Now add the cold already cooked rice and stir it so it all gets mixed together. Do with a gentle hand.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 10220445,
									"name": "cooked rice",
									"localizedName": "cooked rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Let the rice get warm at med- high flame.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Add the remaining 1 tsp oil along with salt, black pepper and soy sauce.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Add the mushrooms and tofu(if using).",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 16213,
									"name": "tofu",
									"localizedName": "tofu",
									"image": "tofu.png"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Mix it all together. Toss and taste.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Garnish with chopped green parts of green onions and sesame seeds.",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 12023,
									"name": "sesame seeds",
									"localizedName": "sesame seeds",
									"image": "sesame-seeds.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/skinny-veggie-fried-rice-660231"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 13,
			"healthScore": 6,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 63.6,
			"extendedIngredients": [
				{
					"id": 11090,
					"aisle": "Produce",
					"image": "broccoli.jpg",
					"consistency": "SOLID",
					"name": "broccoli",
					"nameClean": "broccoli",
					"original": "1 cup broccoli",
					"originalName": "broccoli",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 88.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "1 tbsp butter",
					"originalName": "butter",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "1/3 cup thinly sliced carrots",
					"originalName": "thinly sliced carrots",
					"amount": 0.33333334,
					"unit": "cup",
					"meta": [
						"thinly sliced"
					],
					"measures": {
						"us": {
							"amount": 0.33333334,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 42.667,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10220445,
					"aisle": "Pasta and Rice",
					"image": "cooked-white-rice.png",
					"consistency": "SOLID",
					"name": "rice",
					"nameClean": "cooked rice",
					"original": "2 cups cooked rice",
					"originalName": "cooked rice",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 316.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10220445,
					"aisle": "Pasta and Rice",
					"image": "uncooked-white-rice.png",
					"consistency": "SOLID",
					"name": "rice",
					"nameClean": "cooked rice",
					"original": "2 cups cooked rice",
					"originalName": "cooked rice",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 316.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10220445,
					"aisle": "Pasta and Rice",
					"image": "rice-white-long-grain-or-basmatii-cooked.jpg",
					"consistency": "SOLID",
					"name": "rice",
					"nameClean": "cooked rice",
					"original": "2 cups cooked rice",
					"originalName": "cooked rice",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 316.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "egg",
					"nameClean": "egg",
					"original": "1 egg",
					"originalName": "egg",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 clove garlic, minced",
					"originalName": "garlic, minced",
					"amount": 1.0,
					"unit": "clove",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 tbsp minced ginger",
					"originalName": "minced ginger",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11052,
					"aisle": "Produce",
					"image": "green-beans-or-string-beans.jpg",
					"consistency": "SOLID",
					"name": "green beans",
					"nameClean": "green beans",
					"original": "½ cup green beans",
					"originalName": "green beans",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 55.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "½ cup peas",
					"originalName": "peas",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 72.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "½ cup peas",
					"originalName": "peas",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 72.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "½ cup peas",
					"originalName": "peas",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 72.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "1 ½ tbsp sesame oil",
					"originalName": "sesame oil",
					"amount": 1.5,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "soy sauce to taste",
					"originalName": "soy sauce to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "dash of sugar",
					"originalName": "sugar",
					"amount": 1.0,
					"unit": "dash",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "dash",
							"unitLong": "dash"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "dash",
							"unitLong": "dash"
						}
					}
				}
			],
			"id": 642138,
			"title": "Easy Vegetable Fried Rice",
			"readyInMinutes": 20,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/H78BYQPP/easy-vegetable-fried-rice",
			"image": "https://spoonacular.com/recipeImages/642138-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Easy Vegetable Fried Rice can be made <b>in approximately 20 minutes</b>. This hor d'oeuvre has <b>236 calories</b>, <b>7g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 4. For <b>64 cents per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of green beans, soy sauce, carrots, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. 13 people were impressed by this recipe. It is brought to you by Foodista. This recipe is typical of Chinese cuisine. Overall, this recipe earns a <b>solid spoonacular score of 47%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/quick-and-easy-vegetable-fried-rice-1688135\">Quick and easy vegetable fried rice</a>, <a href=\"https://spoonacular.com/recipes/quick-and-easy-vegetable-fried-rice-1332007\">Quick and easy vegetable fried rice</a>, and <a href=\"https://spoonacular.com/recipes/quick-and-easy-vegetable-fried-rice-679854\">Quick and easy vegetable fried rice</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "<ol><li>First blanch the raw green vegetables by sticking them in a pot of boiling water for a couple of minutes and then draining them. If you're using frozen vegetables, follow the package cooking instructions, but stop shy of three minutes of cooking time so they don't get mushy.</li><li>In large pan or wok, heat your sesame oil over medium heat. Throw in the garlic and ginger and fry that up for about a minute. Add the carrots and stir quickly for a minute or two. Then add the rice.</li><li>Now add soy sauce based on your saltiness preference.</li><li>Let that sizzle while you whip your egg in a small bowl. Move your rice to the edges of the pan so you have an empty space in the middle. Add the egg and scramble it up. When it looks close to being cooked, stir the rice back into the middle of the pan.</li><li>Next, throw in the broccoli and peas or other blanched vegetables of your choice. Add the sugar and stir for a couple minutes, then add the butter. Once the butter is melted through, let the rice sit there. Let it sizzle a bit.</li><li>That's it! Serve your fried rice.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "First blanch the raw green vegetables by sticking them in a pot of boiling water for a couple of minutes and then draining them. If you're using frozen vegetables, follow the package cooking instructions, but stop shy of three minutes of cooking time so they don't get mushy.In large pan or wok, heat your sesame oil over medium heat. Throw in the garlic and ginger and fry that up for about a minute.",
							"ingredients": [
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								},
								{
									"id": 404666,
									"name": "wok",
									"localizedName": "wok",
									"image": "wok.png"
								}
							],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Add the carrots and stir quickly for a minute or two. Then add the rice.Now add soy sauce based on your saltiness preference.",
							"ingredients": [
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Let that sizzle while you whip your egg in a small bowl. Move your rice to the edges of the pan so you have an empty space in the middle.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Add the egg and scramble it up. When it looks close to being cooked, stir the rice back into the middle of the pan.Next, throw in the broccoli and peas or other blanched vegetables of your choice.",
							"ingredients": [
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 11090,
									"name": "broccoli",
									"localizedName": "broccoli",
									"image": "broccoli.jpg"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Add the sugar and stir for a couple minutes, then add the butter. Once the butter is melted through, let the rice sit there.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Let it sizzle a bit.That's it!",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Serve your fried rice.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/easy-vegetable-fried-rice-642138"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 4,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 37,
			"healthScore": 1,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 26.28,
			"extendedIngredients": [
				{
					"id": 10219,
					"aisle": "Meat",
					"image": "meat-ground.jpg",
					"consistency": "SOLID",
					"name": "ground pork",
					"nameClean": "ground pork",
					"original": "200g ground pork (slightly fatty, not lean)",
					"originalName": "ground pork (slightly fatty, not lean)",
					"amount": 200.0,
					"unit": "g",
					"meta": [
						"lean",
						"(slightly fatty, not )"
					],
					"measures": {
						"us": {
							"amount": 7.055,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 200.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11590,
					"aisle": "Ethnic Foods",
					"image": "water-chestnuts.png",
					"consistency": "SOLID",
					"name": "water chestnuts",
					"nameClean": "canned water chestnuts",
					"original": "100g canned water chestnuts (or chopped spinach/cabbage)",
					"originalName": "canned water chestnuts (or chopped spinach/cabbage)",
					"amount": 100.0,
					"unit": "g",
					"meta": [
						"canned",
						"chopped",
						"(or spinach/cabbage)"
					],
					"measures": {
						"us": {
							"amount": 3.527,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 100.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1012047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "sea salt",
					"nameClean": "coarse sea salt",
					"original": "1 teaspoon sea salt",
					"originalName": "sea salt",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "1 teaspoon fine sugar",
					"originalName": "fine sugar",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"fine"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "ground pepper",
					"nameClean": "black pepper",
					"original": "1/2 teaspoon ground black pepper",
					"originalName": "ground black pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10216124,
					"aisle": "Ethnic Foods",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "light soy sauce",
					"original": "2 teaspoons light soy sauce",
					"originalName": "light soy sauce",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"light"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "2 teaspoons sesame oil",
					"originalName": "sesame oil",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 43479,
					"aisle": "Alcoholic Beverages",
					"image": "vinegar-(white).jpg",
					"consistency": "SOLID",
					"name": "shaoxing huatiao wine",
					"nameClean": "shaoxing wine",
					"original": "1 tablespoon Shaoxing Huatiao wine",
					"originalName": "Shaoxing Huatiao wine",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 43479,
					"aisle": "Alcoholic Beverages",
					"image": "fish-sauce.jpg",
					"consistency": "SOLID",
					"name": "shaoxing huatiao wine",
					"nameClean": "shaoxing wine",
					"original": "1 tablespoon Shaoxing Huatiao wine",
					"originalName": "Shaoxing Huatiao wine",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 43479,
					"aisle": "Alcoholic Beverages",
					"image": "sake.png",
					"consistency": "SOLID",
					"name": "shaoxing huatiao wine",
					"nameClean": "shaoxing wine",
					"original": "1 tablespoon Shaoxing Huatiao wine",
					"originalName": "Shaoxing Huatiao wine",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "2 to 3 tablespoons of chopped scallions (spring onions)",
					"originalName": "chopped scallions (spring onions)",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"chopped",
						"(spring onions)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10118368,
					"aisle": "Ethnic Foods",
					"image": "rice-paper.jpg",
					"consistency": "SOLID",
					"name": "dumpling wrappers",
					"nameClean": "spring roll wrappers",
					"original": "25 to 30 store bought dumpling wrappers (the round kind, not the square wanton or spring roll wrappers)",
					"originalName": "store bought dumpling wrappers (the round kind, not the square wanton or spring roll wrappers)",
					"amount": 25.0,
					"unit": "",
					"meta": [
						"store bought",
						"(the round kind, not the square wanton or spring roll wrappers)"
					],
					"measures": {
						"us": {
							"amount": 25.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 25.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 20081,
					"aisle": "Baking",
					"image": "flour.png",
					"consistency": "SOLID",
					"name": "flour to dust",
					"nameClean": "wheat flour",
					"original": "Plain flour to dust",
					"originalName": "Plain flour to dust",
					"amount": 24.0,
					"unit": "servings",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 24.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "4 to 6 tablespoons vegetable oil (for 2 batches of cooking)",
					"originalName": "vegetable oil (for 2 batches of cooking)",
					"amount": 4.0,
					"unit": "tablespoons",
					"meta": [
						"(for 2 batches of cooking)"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "2/3 cups water (for 2 batches of cooking)",
					"originalName": "water (for 2 batches of cooking)",
					"amount": 0.6666667,
					"unit": "cups",
					"meta": [
						"(for 2 batches of cooking)"
					],
					"measures": {
						"us": {
							"amount": 0.6666667,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 157.725,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 638693,
			"title": "Chinese Potstickers",
			"readyInMinutes": 45,
			"servings": 24,
			"sourceUrl": "https://www.foodista.com/recipe/GNBC6TDX/chinese-potstickers",
			"image": "https://spoonacular.com/recipeImages/638693-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you have approximately <b>45 minutes</b> to spend in the kitchen, Chinese Potstickers might be an excellent <b>dairy free</b> recipe to try. This recipe makes 24 servings with <b>135 calories</b>, <b>4g of protein</b>, and <b>5g of fat</b> each. For <b>26 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. A couple people really liked this hor d'oeuvre. This recipe is typical of Chinese cuisine. This recipe from Foodista requires vegetable oil, flour to dust, scallions, and sugar. 37 people have tried and liked this recipe. Overall, this recipe earns a <b>rather bad spoonacular score of 23%</b>. Try <a href=\"https://spoonacular.com/recipes/chinese-potstickers-534151\">Chinese Potstickers</a>, <a href=\"https://spoonacular.com/recipes/chinese-potstickers-92059\">Chinese Potstickers</a>, and <a href=\"https://spoonacular.com/recipes/chinese-dumplings-and-potstickers-40758\">Chinese Dumplings And Potstickers</a> for similar recipes.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "Place 200g of ground pork in a large mixing bowl. If preferred, pork may be substituted with ground chicken.\nAdd 1 teaspoon of sea salt, 1 teaspoon of fine sugar, add 1/2 teaspoon of ground black pepper, 2 teaspoons of light soy sauce, 2 teaspoons of sesame oil and 1 tablespoon of Shaoxing Huatiao wine.\nPlace 100g of canned water chestnuts in a chopper/blender. Chop the water chestnuts to small pieces. Add the chopped water chestnuts to the pork mixture. If preferred, use spinach or cabbage in place of water chestnuts.\nAdd 2 to 3 tablespoons of finely chopped scallions or spring onions to the pork mixture. Combine all the filling ingredients well.\nThaw the dumpling wrappers if they are frozen. Keep them well covered until they are ready to be used.\nDust a dish generously with flour. This will hold the dumplings once they are made.\nDust the table generously with flour. Carefully separate the sheets of dumpling wrappers and lay them on the table. Fill each wrapper with about 1.5 teaspoons of the prepared pork filling.\nPrepare a bowl of water. Dip finger into the water and lightly wet the rim of each dumpling wrapper.\nBring the dumpling wrapper together till the opposite ends meet. Gently push the filling into the wrapper and pinch the top tip of the dumpling wrapper to seal it.\nFrom the centre of the dumpling, fold a pleat on ONE side and bring it to the other side of the dumpling. Fold towards the centre of the dumpling. Pinch to seal it.\nRepeat and create a 2nd pleat. Be mindful to pinch tight to seal the dumpling well. Repeat and create a 3rd pleat. Each side should have 3 pleats.\nRepeat the same pleating on the other end of the dumpling. Always ensure that the pleats face the centre of the dumpling.\nPlace all prepared dumplings in a well floured dish ensuring that they do not touch each other. Set aside till ready to cook. They can also be frozen at this stage.\nTo cook the potstickers, add 2 to 3 tablespoons of vegetable oil to a very hot frying pan. The potstickers should be cooked in at least 2 batches.\nWhen the oil is hot, add the dumplings ensuring that the flat surfaces face down. Pan fry till the bottoms of the dumplings are a nice golden brown.\nAdd 1/3 cup of water to the pan. Cover the pan immediately and let the steam cook the dumplings for 4 to 5 minutes.\nOnce the water has evaporated, remove the cover and let the dumplings sit in the hot pan for another minute for its base to crisp up again. These are now Chinese potstickers.\nGently transfer the potstickers to a plate. Serve immediately.\nThese Chinese potstickers are best served with a vinegar dip made with balsamic or black chinese vinegar and thinly sliced ginger. Soy sauce, chili oil or sesame oil may also be added to the dipping sauce.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Place 200g of ground pork in a large mixing bowl. If preferred, pork may be substituted with ground chicken.",
							"ingredients": [
								{
									"id": 5332,
									"name": "ground chicken",
									"localizedName": "ground chicken",
									"image": "meat-ground.jpg"
								},
								{
									"id": 10219,
									"name": "ground pork",
									"localizedName": "ground pork",
									"image": "meat-ground.jpg"
								},
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": [
								{
									"id": 405907,
									"name": "mixing bowl",
									"localizedName": "mixing bowl",
									"image": "mixing-bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Add 1 teaspoon of sea salt, 1 teaspoon of fine sugar, add 1/2 teaspoon of ground black pepper, 2 teaspoons of light soy sauce, 2 teaspoons of sesame oil and 1 tablespoon of Shaoxing Huatiao wine.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "ground black pepper",
									"localizedName": "ground black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 10216124,
									"name": "light soy sauce",
									"localizedName": "light soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 1012047,
									"name": "sea salt",
									"localizedName": "sea salt",
									"image": "salt.jpg"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 14084,
									"name": "wine",
									"localizedName": "wine",
									"image": "red-wine.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Place 100g of canned water chestnuts in a chopper/blender. Chop the water chestnuts to small pieces.",
							"ingredients": [
								{
									"id": 11590,
									"name": "canned water chestnuts",
									"localizedName": "canned water chestnuts",
									"image": "water-chestnuts.png"
								},
								{
									"id": 11590,
									"name": "water chestnuts",
									"localizedName": "water chestnuts",
									"image": "water-chestnuts.png"
								}
							],
							"equipment": [
								{
									"id": 404726,
									"name": "blender",
									"localizedName": "blender",
									"image": "blender.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Add the chopped water chestnuts to the pork mixture. If preferred, use spinach or cabbage in place of water chestnuts.",
							"ingredients": [
								{
									"id": 11590,
									"name": "water chestnuts",
									"localizedName": "water chestnuts",
									"image": "water-chestnuts.png"
								},
								{
									"id": 11109,
									"name": "cabbage",
									"localizedName": "cabbage",
									"image": "cabbage.jpg"
								},
								{
									"id": 10011457,
									"name": "spinach",
									"localizedName": "spinach",
									"image": "spinach.jpg"
								},
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add 2 to 3 tablespoons of finely chopped scallions or spring onions to the pork mixture.",
							"ingredients": [
								{
									"id": 11291,
									"name": "spring onions",
									"localizedName": "spring onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Combine all the filling ingredients well.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Thaw the dumpling wrappers if they are frozen. Keep them well covered until they are ready to be used.",
							"ingredients": [
								{
									"id": 10018368,
									"name": "dumpling wrappers",
									"localizedName": "dumpling wrappers",
									"image": "puff-pastry-squares.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Dust a dish generously with flour. This will hold the dumplings once they are made.",
							"ingredients": [
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Dust the table generously with flour. Carefully separate the sheets of dumpling wrappers and lay them on the table. Fill each wrapper with about 1.5 teaspoons of the prepared pork filling.",
							"ingredients": [
								{
									"id": 10018368,
									"name": "dumpling wrappers",
									"localizedName": "dumpling wrappers",
									"image": "puff-pastry-squares.jpg"
								},
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								},
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Prepare a bowl of water. Dip finger into the water and lightly wet the rim of each dumpling wrapper.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "dip",
									"localizedName": "dip",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 11,
							"step": "Bring the dumpling wrapper together till the opposite ends meet. Gently push the filling into the wrapper and pinch the top tip of the dumpling wrapper to seal it.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 12,
							"step": "From the centre of the dumpling, fold a pleat on ONE side and bring it to the other side of the dumpling. Fold towards the centre of the dumpling. Pinch to seal it.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 13,
							"step": "Repeat and create a 2nd pleat. Be mindful to pinch tight to seal the dumpling well. Repeat and create a 3rd pleat. Each side should have 3 pleats.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 14,
							"step": "Repeat the same pleating on the other end of the dumpling. Always ensure that the pleats face the centre of the dumpling.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 15,
							"step": "Place all prepared dumplings in a well floured dish ensuring that they do not touch each other. Set aside till ready to cook. They can also be frozen at this stage.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 16,
							"step": "To cook the potstickers, add 2 to 3 tablespoons of vegetable oil to a very hot frying pan. The potstickers should be cooked in at least 2 batches.",
							"ingredients": [
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 17,
							"step": "When the oil is hot, add the dumplings ensuring that the flat surfaces face down. Pan fry till the bottoms of the dumplings are a nice golden brown.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 18,
							"step": "Add 1/3 cup of water to the pan. Cover the pan immediately and let the steam cook the dumplings for 4 to 5 minutes.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						},
						{
							"number": 19,
							"step": "Once the water has evaporated, remove the cover and let the dumplings sit in the hot pan for another minute for its base to crisp up again. These are now Chinese potstickers.",
							"ingredients": [
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "base",
									"localizedName": "base",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 20,
							"step": "Gently transfer the potstickers to a plate.",
							"ingredients": [
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 21,
							"step": "Serve immediately.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 22,
							"step": "These Chinese potstickers are best served with a vinegar dip made with balsamic or black chinese vinegar and thinly sliced ginger. Soy sauce, chili oil or sesame oil may also be added to the dipping sauce.",
							"ingredients": [
								{
									"id": 0,
									"name": "dipping sauce",
									"localizedName": "dipping sauce",
									"image": ""
								},
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								},
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 1014053,
									"name": "chili oil",
									"localizedName": "chili oil",
									"image": "chili-oil.jpg"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 2053,
									"name": "vinegar",
									"localizedName": "vinegar",
									"image": "vinegar-(white).jpg"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 0,
									"name": "dip",
									"localizedName": "dip",
									"image": ""
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/chinese-potstickers-638693"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 11,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 14,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 213.5,
			"extendedIngredients": [
				{
					"id": 93803,
					"aisle": "Ethnic Foods",
					"image": "dry-udon-noodles.png",
					"consistency": "SOLID",
					"name": "chow mein noodles",
					"nameClean": "chow mein noodles",
					"original": "16 ounces (454 gram) package of chow mein noodles",
					"originalName": "16 ounces package of chow mein noodles",
					"amount": 454.0,
					"unit": "gram",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.001,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 454.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 6194,
					"aisle": "Canned and Jarred",
					"image": "chicken-broth.png",
					"consistency": "LIQUID",
					"name": "chicken broth",
					"nameClean": "chicken broth",
					"original": "1/4 cup chicken broth",
					"originalName": "chicken broth",
					"amount": 0.25,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 58.75,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "1 teaspoon sugar",
					"originalName": "sugar",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 6176,
					"aisle": "Ethnic Foods",
					"image": "oyster-sauce.jpg",
					"consistency": "LIQUID",
					"name": "oyster sauce",
					"nameClean": "oyster sauce",
					"original": "4 tablespoons oyster sauce",
					"originalName": "oyster sauce",
					"amount": 4.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "1 1/2 tablespoons soy sauce",
					"originalName": "soy sauce",
					"amount": 1.5,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1/2 cup water",
					"originalName": "water",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 118.294,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "2 tablespoons vegetable oil",
					"originalName": "vegetable oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "2 tablespoons minced garlic",
					"originalName": "minced garlic",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "2 tablespoons minced ginger",
					"originalName": "minced ginger",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 5096,
					"aisle": "Meat",
					"image": "chicken-thighs.png",
					"consistency": "SOLID",
					"name": "chicken thighs",
					"nameClean": "boneless skinless chicken thighs",
					"original": "5 boneless, skinless chicken thighs, cut into bite sized pieces",
					"originalName": "boneless, skinless chicken thighs, cut into bite sized pieces",
					"amount": 5.0,
					"unit": "",
					"meta": [
						"boneless",
						"skinless",
						"cut into bite sized pieces"
					],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 onion, chopped",
					"originalName": "onion, chopped",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11821,
					"aisle": "Produce",
					"image": "red-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "red pepper",
					"original": "1 red pepper, sliced into thin strips",
					"originalName": "red pepper, sliced into thin strips",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"red",
						"sliced into thin strips"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "2 large carrots, cut into matchsticks",
					"originalName": "carrots, cut into matchsticks",
					"amount": 2.0,
					"unit": "large",
					"meta": [
						"cut into matchsticks"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 10011300,
					"aisle": "Produce",
					"image": "sugar-snap-peas.jpg",
					"consistency": "SOLID",
					"name": "sugar snap peas",
					"nameClean": "sugar snap peas",
					"original": "1 cup sugar snap peas, sliced lengthwise",
					"originalName": "sugar snap peas, sliced lengthwise",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"sliced lengthwise"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 98.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 638714,
			"title": "Chinese Style Chicken and Noodle Stir Fry",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "https://www.foodista.com/recipe/8F8C33VG/chinese-style-chicken-and-noodle-stir-fry",
			"image": "https://spoonacular.com/recipeImages/638714-556x370.jpg",
			"imageType": "jpg",
			"summary": "Chinese Style Chicken and Noodle Stir Fry takes about <b>45 minutes</b> from beginning to end. One portion of this dish contains around <b>31g of protein</b>, <b>10g of fat</b>, and a total of <b>469 calories</b>. This recipe serves 6. For <b>$2.13 per serving</b>, this recipe <b>covers 20%</b> of your daily requirements of vitamins and minerals. 2 people found this recipe to be scrumptious and satisfying. This recipe from Foodista requires chicken thighs, garlic, bell pepper, and carrots. It works well as a Chinese main course. It is a good option if you're following a <b>dairy free</b> diet. With a spoonacular <b>score of 52%</b>, this dish is good. <a href=\"https://spoonacular.com/recipes/chinese-style-chicken-and-noodle-stir-fry-1371811\">Chinese Style Chicken and Noodle Stir Fry</a>, <a href=\"https://spoonacular.com/recipes/chinese-noodle-and-vegetable-stir-fry-for-one-109773\">Chinese Noodle and Vegetable Stir Fry (For One)</a>, and <a href=\"https://spoonacular.com/recipes/chinese-broccoli-beef-noodle-stir-fry-602181\">Chinese Broccoli Beef Noodle Stir Fry</a> are very similar to this recipe.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "Soak noodles in hot water until softened, about 5 minutes. Drain and set aside.\nIn a small bowl, combine chicken broth, sugar, oyster sauce, soy sauce and water. Set aside.\nHeat oil in a wok over medium high heat. When hot, add garlic and ginger. Cook until fragrant , about 30 seconds, then add chicken and cook until done.\nAdd vegetables and cook until tender crisp, about 4 -5 minutes, then add chicken broth mixture.\nStir in drained noodles and cook until heated through, about 2 minutes. Enjoy!",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Soak noodles in hot water until softened, about 5 minutes.",
							"ingredients": [
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Drain and set aside.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 3,
							"step": "In a small bowl, combine chicken broth, sugar, oyster sauce, soy sauce and water. Set aside.",
							"ingredients": [
								{
									"id": 6194,
									"name": "chicken broth",
									"localizedName": "chicken broth",
									"image": "chicken-broth.png"
								},
								{
									"id": 6176,
									"name": "oyster sauce",
									"localizedName": "oyster sauce",
									"image": "oyster-sauce.jpg"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 4,
							"step": "Heat oil in a wok over medium high heat. When hot, add garlic and ginger. Cook until fragrant , about 30 seconds, then add chicken and cook until done.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404666,
									"name": "wok",
									"localizedName": "wok",
									"image": "wok.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Add vegetables and cook until tender crisp, about 4 -5 minutes, then add chicken broth mixture.",
							"ingredients": [
								{
									"id": 6194,
									"name": "chicken broth",
									"localizedName": "chicken broth",
									"image": "chicken-broth.png"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Stir in drained noodles and cook until heated through, about 2 minutes. Enjoy!",
							"ingredients": [
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/chinese-style-chicken-and-noodle-stir-fry-638714"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 10,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 9,
			"healthScore": 6,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 166.83,
			"extendedIngredients": [
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "eggs",
					"nameClean": "egg",
					"original": "4 large eggs",
					"originalName": "eggs",
					"amount": 4.0,
					"unit": "large",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 10719335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "granulated sugar",
					"nameClean": "granulated sugar",
					"original": "1/3 cup granulated sugar",
					"originalName": "granulated sugar",
					"amount": 0.33333334,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.33333334,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 66.667,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10719335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "granulated sugar",
					"nameClean": "granulated sugar",
					"original": "1/2 cup granulated sugar",
					"originalName": "granulated sugar",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 100.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 9316,
					"aisle": "Produce",
					"image": "strawberries.png",
					"consistency": "SOLID",
					"name": "strawberries",
					"nameClean": "strawberries",
					"original": "strawberries",
					"originalName": "strawberries",
					"amount": 6.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1052050,
					"aisle": "Baking",
					"image": "vanilla.jpg",
					"consistency": "SOLID",
					"name": "vanilla",
					"nameClean": "vanilla",
					"original": "1 tsp vanilla",
					"originalName": "vanilla",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1011077,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "milk.png",
					"consistency": "LIQUID",
					"name": "milk",
					"nameClean": "whole milk",
					"original": "2 cups whole milk",
					"originalName": "whole milk",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"whole"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 488.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 638717,
			"title": "Chinese Steamed Flan",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "http://www.foodista.com/recipe/GNDGXPZK/chinese-steamed-flan",
			"image": "https://spoonacular.com/recipeImages/638717-556x370.jpg",
			"imageType": "jpg",
			"summary": "Chinese Steamed Flan is a dessert that serves 6. Watching your figure? This gluten free and lacto ovo vegetarian recipe has <b>252 calories</b>, <b>8g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.67 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 9 would say it hit the spot. It is a <b>rather inexpensive</b> recipe for fans of Chinese food. It is brought to you by Foodista. Head to the store and pick up strawberries, granulated sugar, milk, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 47%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/how-to-cook-leche-flan-steamed-crme-caramel-478107\">How to cook: Leche flan (steamed crème caramel)</a>, <a href=\"https://spoonacular.com/recipes/chinese-steamed-fish-40745\">Chinese Steamed Fish</a>, and <a href=\"https://spoonacular.com/recipes/ma-lai-go-chinese-steamed-cake-1075533\">Ma Lai Go Chinese Steamed Cake</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"dessert"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "<ol><li>For caramel:</li><li>Spread sugar evenly in the bottom of a heavy saucepan and place over medium-low heat. It may take several minutes before the sugar begins to melt. Without stirring, watch the sugar closely as it begins to liquefy at the edges.  It will slowly turn from a yellow to a golden and finally to a brown caramel sauce.</li><li>When the liquefied sugar is turning from golden to brown, immediately remove the saucepan from the heat. Watch carefully!  (If you miss this point, the sugar will quickly turn too dark and you will have to start all over again).  Immediately pour liquid caramel into 6 3-1/2 inch ramekins and swirl to cover bottom evenly. The caramel hardens rapidly, so work quickly.  Set aside.</li><li>For flan:</li><li>Place 2 inches of water on the bottom portion of steamer.  Cover and allow water to come to a boil.  In the meantime, heat milk and sugar in a saucepan until just warmed and sugar has dissolved.  Whisk eggs and vanilla in a large bowl until blended.  Slowly pour warmed milk into the eggs, beating until well combined.  Scoop off foam and discard.  Ladle into prepared ramekins and place into steamer.</li><li>Turn down heat  this is very important  to medium and steam for 15 minutes.  Remove and allow to cool.  Once cool, cover and refrigerate overnight.  When ready to serve, carefully run a knife around the inside each ramekin to loosen the flan. Place a plate on top of the flan and invert until flan pops out.  Serve with sliced strawberries.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "For caramel",
					"steps": []
				},
				{
					"name": "Spread sugar evenly in the bottom of a heavy saucepan and place over medium-low heat. It may take several minutes before the sugar begins to melt. Without stirring, watch the sugar closely as it begins to liquefy at the edges.  It will slowly turn from a yellow to a golden and finally to a brown caramel sauce.When the liquefied sugar is turning from golden to brown, immediately remove the saucepan from the heat. Watch carefully!  (If you miss this point, the sugar will quickly turn too dark and you will have to start all over again).  Immediately pour liquid caramel into 6 3-1/2 inch ramekins and swirl to cover bottom evenly. The caramel hardens rapidly, so work quickly.  Set aside.For flan",
					"steps": [
						{
							"number": 1,
							"step": "Place 2 inches of water on the bottom portion of steamer.  Cover and allow water to come to a boil.  In the meantime, heat milk and sugar in a saucepan until just warmed and sugar has dissolved.",
							"ingredients": [
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 1077,
									"name": "milk",
									"localizedName": "milk",
									"image": "milk.png"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Whisk eggs and vanilla in a large bowl until blended.  Slowly pour warmed milk into the eggs, beating until well combined.  Scoop off foam and discard.  Ladle into prepared ramekins and place into steamer.Turn down heat  this is very important  to medium and steam for 15 minutes.",
							"ingredients": [
								{
									"id": 1052050,
									"name": "vanilla",
									"localizedName": "vanilla",
									"image": "vanilla.jpg"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								},
								{
									"id": 1077,
									"name": "milk",
									"localizedName": "milk",
									"image": "milk.png"
								}
							],
							"equipment": [
								{
									"id": 404781,
									"name": "ramekin",
									"localizedName": "ramekin",
									"image": "ramekin.jpg"
								},
								{
									"id": 404630,
									"name": "ladle",
									"localizedName": "ladle",
									"image": "ladle.jpg"
								},
								{
									"id": 404661,
									"name": "whisk",
									"localizedName": "whisk",
									"image": "whisk.png"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Remove and allow to cool.  Once cool, cover and refrigerate overnight.  When ready to serve, carefully run a knife around the inside each ramekin to loosen the flan.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404781,
									"name": "ramekin",
									"localizedName": "ramekin",
									"image": "ramekin.jpg"
								},
								{
									"id": 404745,
									"name": "knife",
									"localizedName": "knife",
									"image": "chefs-knife.jpg"
								}
							]
						},
						{
							"number": 4,
							"step": "Place a plate on top of the flan and invert until flan pops out.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Serve with sliced strawberries.",
							"ingredients": [
								{
									"id": 9316,
									"name": "strawberries",
									"localizedName": "strawberries",
									"image": "strawberries.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/chinese-steamed-flan-638717"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 5,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 37,
			"healthScore": 0,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 24.89,
			"extendedIngredients": [
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "wonton-wrappers.jpg",
					"consistency": "SOLID",
					"name": "won ton wrappers",
					"nameClean": "wonton wrappers",
					"original": "24 won ton wrappers",
					"originalName": "won ton wrappers",
					"amount": 24.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 24.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "won ton wrappers",
					"nameClean": "wonton wrappers",
					"original": "24 won ton wrappers",
					"originalName": "won ton wrappers",
					"amount": 24.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 24.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11265,
					"aisle": "Produce",
					"image": "portabello-mushrooms.jpg",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "portobello mushrooms",
					"original": "8 oz. mushrooms (your choice – I used half whites & half baby portobellos)",
					"originalName": "mushrooms (your choice – I used half whites & half baby portobellos)",
					"amount": 8.0,
					"unit": "oz",
					"meta": [
						"(your choice - I used half whites & half baby portobellos)"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 226.796,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "1 Tbs. tamari or soy sauce",
					"originalName": "tamari or soy sauce",
					"amount": 1.0,
					"unit": "Tbs",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbs",
							"unitLong": "Tb"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbs",
							"unitLong": "Tb"
						}
					}
				},
				{
					"id": 1016168,
					"aisle": "Condiments",
					"image": "hot-sauce-or-tabasco.png",
					"consistency": "LIQUID",
					"name": "sriracha hot sauce",
					"nameClean": "sriracha",
					"original": "1 tsp. sriracha hot sauce",
					"originalName": "sriracha hot sauce",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "1 tsp. grated fresh ginger",
					"originalName": "grated fresh ginger",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [
						"fresh",
						"grated"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 tsp. fresh garlic (pressed through a garlic press)",
					"originalName": "fresh garlic (pressed through a garlic press)",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [
						"fresh",
						"pressed",
						"( through a garlic press)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "2 scallions, white & green parts, roughly chopped",
					"originalName": "scallions, white & green parts, roughly chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"white",
						"green",
						"roughly chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 20027,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "little cornstarch",
					"nameClean": "corn starch",
					"original": "A little cornstarch",
					"originalName": "A little cornstarch",
					"amount": 24.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 24.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "little vegetable oil",
					"nameClean": "vegetable oil",
					"original": "A little vegetable oil",
					"originalName": "A little vegetable oil",
					"amount": 24.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 24.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1 cup water, divided",
					"originalName": "water, divided",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"divided"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 664650,
			"title": "Vegetarian Chinese Pot Stickers",
			"readyInMinutes": 45,
			"servings": 24,
			"sourceUrl": "https://www.foodista.com/recipe/KF58KP4Y/vegan-vegetarian-pot-stickers",
			"image": "https://spoonacular.com/recipeImages/664650-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Vegetarian Chinese Pot Stickers might be a super <b>dairy free</b> recipe to try. This recipe serves 24 and costs 25 cents per serving. This hor d'oeuvre has <b>153 calories</b>, <b>1g of protein</b>, and <b>14g of fat</b> per serving. A couple people made this recipe, and 37 would say it hit the spot. If you have scallions, mushrooms, garlic, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. This recipe is typical of Chinese cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so super. Similar recipes are <a href=\"https://spoonacular.com/recipes/chinese-chicken-pot-stickers-162423\">Chinese Chicken Pot Stickers</a>, <a href=\"https://spoonacular.com/recipes/chinese-pork-dumplings-pot-stickers-91987\">Chinese Pork Dumplings (Pot Stickers)</a>, and <a href=\"https://spoonacular.com/recipes/pot-stickers-1459233\">Pot Stickers</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "Add all of the ingredients (except the wrappers, cornstarch, oil, and water) to the bowl of a food processor. Pulse until the mushrooms are finely minced and all of the ingredients are well combined. It will help if youve given the mushrooms a bit of a rough chop first, or if you use pre-sliced mushrooms.\nPlace a won ton wrapper on your work surface, turned so that it appears to be a diamond shape.\nPlace a teaspoon of filling in the middle of the wrapper.\nDip a fingertip into the bowl of water and trace along the two edges farthest from you. Bring up the end closest to you, fold over the filling, and pinch the edges together to seal. Make sure youve gently pressed the wrapper around the filling so there are no air pockets.\nStand up your little triangle pocket so that the filling side sits on your work surface. Fold the top point down, away from you, and pinch. Now, give the edges on either side of that fold 2 little pleats and pinch. Your pot sticker will now look like it has wings. Place it on a large plate thats been dusted with a bit of cornstarch, to prevent sticking.  (Traditionally, pot stickers are made with round dumpling wrappers, so if you have them, you can skip the part about folding the top point down.)\nHeat the skillet over medium-high heat. Brush just a few drops of oil onto the hot pan surface, and place 12 of the pot stickers, upright, into the pan. Allow the bottoms to brown. Carefully add 1/2 cup water to the pan and cover it quickly. Cook for about 3-4 minutes, or until all of the water has been absorbed. Remove the pot stickers immediately to another plate to keep warm, and repeat the procedure with the rest of the uncooked ones.\n*Feel like you have to have meat? Substitute 4 oz. of ground chicken (or pork, if you must) for half of the mushrooms, just dont run it through the food processor. Mix the processed ingredients with the ground chicken thoroughly and fill the wrappers as before. Add a full cup of water (instead of 1/2 cup) to the pan, and steam until the water evaporates, about 5-6 minutes.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Add all of the ingredients (except the wrappers, cornstarch, oil, and water) to the bowl of a food processor. Pulse until the mushrooms are finely minced and all of the ingredients are well combined. It will help if youve given the mushrooms a bit of a rough chop first, or if you use pre-sliced mushrooms.",
							"ingredients": [
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								},
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Place a won ton wrapper on your work surface, turned so that it appears to be a diamond shape.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Place a teaspoon of filling in the middle of the wrapper.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Dip a fingertip into the bowl of water and trace along the two edges farthest from you. Bring up the end closest to you, fold over the filling, and pinch the edges together to seal. Make sure youve gently pressed the wrapper around the filling so there are no air pockets.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "dip",
									"localizedName": "dip",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 5,
							"step": "Stand up your little triangle pocket so that the filling side sits on your work surface. Fold the top point down, away from you, and pinch. Now, give the edges on either side of that fold 2 little pleats and pinch. Your pot sticker will now look like it has wings.",
							"ingredients": [
								{
									"id": 5100,
									"name": "chicken wings",
									"localizedName": "chicken wings",
									"image": "chicken-wings.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 6,
							"step": "Place it on a large plate thats been dusted with a bit of cornstarch, to prevent sticking.  (Traditionally, pot stickers are made with round dumpling wrappers, so if you have them, you can skip the part about folding the top point down.)",
							"ingredients": [
								{
									"id": 10018368,
									"name": "dumpling wrappers",
									"localizedName": "dumpling wrappers",
									"image": "puff-pastry-squares.jpg"
								},
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								},
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 7,
							"step": "Heat the skillet over medium-high heat.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 8,
							"step": "Brush just a few drops of oil onto the hot pan surface, and place 12 of the pot stickers, upright, into the pan. Allow the bottoms to brown. Carefully add 1/2 cup water to the pan and cover it quickly. Cook for about 3-4 minutes, or until all of the water has been absorbed.",
							"ingredients": [
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						},
						{
							"number": 9,
							"step": "Remove the pot stickers immediately to another plate to keep warm, and repeat the procedure with the rest of the uncooked ones.",
							"ingredients": [
								{
									"id": 99034,
									"name": "potstickers",
									"localizedName": "potstickers",
									"image": "chinese-dumplings-or-gyoza.jpg"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 10,
							"step": "*Feel like you have to have meat? Substitute 4 oz. of ground chicken (or pork, if you must) for half of the mushrooms, just dont run it through the food processor.",
							"ingredients": [
								{
									"id": 5332,
									"name": "ground chicken",
									"localizedName": "ground chicken",
									"image": "meat-ground.jpg"
								},
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						},
						{
							"number": 11,
							"step": "Mix the processed ingredients with the ground chicken thoroughly and fill the wrappers as before.",
							"ingredients": [
								{
									"id": 5332,
									"name": "ground chicken",
									"localizedName": "ground chicken",
									"image": "meat-ground.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Add a full cup of water (instead of 1/2 cup) to the pan, and steam until the water evaporates, about 5-6 minutes.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 6,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/vegetarian-chinese-pot-stickers-664650"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 1,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 13,
			"healthScore": 1,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 42.31,
			"extendedIngredients": [
				{
					"id": 15141,
					"aisle": "Canned and Jarred",
					"image": "lump-crabmeat.png",
					"consistency": "SOLID",
					"name": "crabmeat",
					"nameClean": "cooked crabmeat",
					"original": "1 can 6 oz. white crabmeat, drained and chopped",
					"originalName": "6 oz. white crabmeat, drained and chopped",
					"amount": 1.0,
					"unit": "can",
					"meta": [
						"white",
						"drained",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 1186,
					"aisle": "Cheese",
					"image": "cream-cheese.jpg",
					"consistency": "LIQUID",
					"name": "cream cheese",
					"nameClean": "block style cream cheese",
					"original": "4 oz. fat free cream cheese, softened",
					"originalName": "fat free cream cheese, softened",
					"amount": 4.0,
					"unit": "oz",
					"meta": [
						"fat free",
						"softened"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 113.398,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4641,
					"aisle": "Condiments",
					"image": "mayonnaise.png",
					"consistency": "LIQUID",
					"name": "reduced fat mayonnaise",
					"nameClean": "light mayonnaise",
					"original": "2 tablespoons reduced fat mayonnaise",
					"originalName": "reduced fat mayonnaise",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "1/4 tsp. soy sauce",
					"originalName": "soy sauce",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1/4 tsp. garlic, minced",
					"originalName": "garlic, minced",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2026,
					"aisle": "Spices and Seasonings",
					"image": "onion-powder.jpg",
					"consistency": "SOLID",
					"name": "onion powder",
					"nameClean": "onion powder",
					"original": "1/4 tsp. onion powder",
					"originalName": "onion powder",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "ground pepper",
					"nameClean": "black pepper",
					"original": "fresh ground pepper to taste",
					"originalName": "fresh ground pepper to taste",
					"amount": 12.0,
					"unit": "servings",
					"meta": [
						"fresh",
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "won ton wrappers",
					"nameClean": "wonton wrappers",
					"original": "12 won ton wrappers",
					"originalName": "won ton wrappers",
					"amount": 12.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "wonton-wrappers.jpg",
					"consistency": "SOLID",
					"name": "won ton wrappers",
					"nameClean": "wonton wrappers",
					"original": "12 won ton wrappers",
					"originalName": "won ton wrappers",
					"amount": 12.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 640323,
			"title": "Crab Wontons",
			"readyInMinutes": 45,
			"servings": 12,
			"sourceUrl": "https://www.foodista.com/recipe/ZM4M52TG/crab-wontons",
			"image": "https://spoonacular.com/recipeImages/640323-556x370.jpg",
			"imageType": "jpg",
			"summary": "Crab Wontons might be just the <b>Chinese</b> recipe you are searching for. This recipe makes 12 servings with <b>47 calories</b>, <b>4g of protein</b>, and <b>1g of fat</b> each. For <b>42 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>45 minutes</b>. 13 people were glad they tried this recipe. It is a good option if you're following a <b>pescatarian</b> diet. If you have ground pepper, cream cheese, garlic, and a few other ingredients on hand, you can make it. It works well as a hor d'oeuvre. It is brought to you by Foodista. With a spoonacular <b>score of 28%</b>, this dish is rather bad. <a href=\"https://spoonacular.com/recipes/crab-rangoon-crab-cream-cheese-filled-wontons-1208267\">Crab Rangoon (Crab & Cream Cheese filled Wontons)</a>, <a href=\"https://spoonacular.com/recipes/crab-rangoon-crab-cream-cheese-filled-wontons-682128\">Crab Rangoon (Crab & Cream Cheese filled Wontons)</a>, and <a href=\"https://spoonacular.com/recipes/crab-wontons-419538\">Crab Wontons</a> are very similar to this recipe.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"pescatarian"
			],
			"occasions": [],
			"instructions": "Preheat oven to 350F. Spray a mini muffin tin with nonstick cooking spray.\nIn a medium bowl, combine crab meat, cream cheese, mayonaise, soy sauce, garlic, onion powder,and pepper.  Mix until well combined.\nPlace 1 won ton wrapper in each 12 mini muffin cups. The edges of the won ton wrappers will extend beyond the mini muffin tin cups and may need to be folded slightly. Fill the center of each won ton cup with crab mixture.\nBake 15 to 20 minutes or until edges of cups are golden brown and filling is heated through.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Preheat oven to 350F. Spray a mini muffin tin with nonstick cooking spray.",
							"ingredients": [
								{
									"id": 4679,
									"name": "cooking spray",
									"localizedName": "cooking spray",
									"image": "cooking-spray.png"
								}
							],
							"equipment": [
								{
									"id": 405905,
									"name": "mini muffin tray",
									"localizedName": "mini muffin tray",
									"image": "mini-muffin-tray.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg",
									"temperature": {
										"number": 350.0,
										"unit": "Fahrenheit"
									}
								}
							]
						},
						{
							"number": 2,
							"step": "In a medium bowl, combine crab meat, cream cheese, mayonaise, soy sauce, garlic, onion powder,and pepper.",
							"ingredients": [
								{
									"id": 1017,
									"name": "cream cheese",
									"localizedName": "cream cheese",
									"image": "cream-cheese.jpg"
								},
								{
									"id": 2026,
									"name": "onion powder",
									"localizedName": "onion powder",
									"image": "onion-powder.jpg"
								},
								{
									"id": 10015136,
									"name": "crabmeat",
									"localizedName": "crabmeat",
									"image": "crabmeat.jpg"
								},
								{
									"id": 4025,
									"name": "mayonnaise",
									"localizedName": "mayonnaise",
									"image": "mayonnaise.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 1002030,
									"name": "pepper",
									"localizedName": "pepper",
									"image": "pepper.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Mix until well combined.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Place 1 won ton wrapper in each 12 mini muffin cups. The edges of the won ton wrappers will extend beyond the mini muffin tin cups and may need to be folded slightly. Fill the center of each won ton cup with crab mixture.",
							"ingredients": [
								{
									"id": 10018368,
									"name": "wonton wrappers",
									"localizedName": "wonton wrappers",
									"image": "wonton-wrappers.jpg"
								},
								{
									"id": 15136,
									"name": "crab",
									"localizedName": "crab",
									"image": "crabmeat.jpg"
								}
							],
							"equipment": [
								{
									"id": 405905,
									"name": "mini muffin tray",
									"localizedName": "mini muffin tray",
									"image": "mini-muffin-tray.jpg"
								},
								{
									"id": 404676,
									"name": "muffin liners",
									"localizedName": "muffin liners",
									"image": "muffin-or-cupcake-forms.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Bake 15 to 20 minutes or until edges of cups are golden brown and filling is heated through.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/crab-wontons-640323"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 116,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 6,
			"healthScore": 100,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 1855.16,
			"extendedIngredients": [
				{
					"id": 10219,
					"aisle": "Meat",
					"image": "meat-ground.jpg",
					"consistency": "SOLID",
					"name": "ground pork",
					"nameClean": "ground pork",
					"original": "1 pound ground pork",
					"originalName": "ground pork",
					"amount": 1.0,
					"unit": "pound",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "1/2 cup fresh ginger, minced",
					"originalName": "fresh ginger, minced",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"fresh",
						"minced"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 48.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11119,
					"aisle": "Produce",
					"image": "napa-cabbage.jpg",
					"consistency": "SOLID",
					"name": "napa cabbage",
					"nameClean": "napa cabbage",
					"original": "2 heads Napa Cabbage, shredded and chopped",
					"originalName": "Napa Cabbage, shredded and chopped",
					"amount": 2.0,
					"unit": "heads",
					"meta": [
						"shredded",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "heads",
							"unitLong": "heads"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "heads",
							"unitLong": "heads"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "5 cloves fresh garlic, minced",
					"originalName": "fresh garlic, minced",
					"amount": 5.0,
					"unit": "cloves",
					"meta": [
						"fresh",
						"minced"
					],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms.png",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "1 cup wild mushrooms, chopped finely",
					"originalName": "wild mushrooms, chopped finely",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"wild",
						"chopped",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 96.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms-white.jpg",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "1 cup wild mushrooms, chopped finely",
					"originalName": "wild mushrooms, chopped finely",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"wild",
						"chopped",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 96.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 20027,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "corn starch",
					"nameClean": "corn starch",
					"original": "1 tablespoon corn starch (plus extra for plating)",
					"originalName": "corn starch (plus extra for plating)",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"for plating",
						"(plus extra )"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "1 tablespoon sugar",
					"originalName": "sugar",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1 1/2 tablespoons salt",
					"originalName": "salt",
					"amount": 1.5,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "warm water",
					"nameClean": "water",
					"original": "1 cup warm water, in shallow bowl",
					"originalName": "warm water, in shallow bowl",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "wonton wrappers",
					"nameClean": "wonton wrappers",
					"original": "2 packages wonton wrappers",
					"originalName": "wonton wrappers",
					"amount": 2.0,
					"unit": "packages",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "wonton-wrappers.jpg",
					"consistency": "SOLID",
					"name": "wonton wrappers",
					"nameClean": "wonton wrappers",
					"original": "2 packages wonton wrappers",
					"originalName": "wonton wrappers",
					"amount": 2.0,
					"unit": "packages",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "2 quarts salted water for boiling",
					"originalName": "salted water for boiling",
					"amount": 2.0,
					"unit": "quarts",
					"meta": [
						"salted",
						"boiling",
						"for "
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "qts",
							"unitLong": "quarts"
						},
						"metric": {
							"amount": 1.893,
							"unitShort": "l",
							"unitLong": "liters"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "1/2 cup chopped scallions (optional)",
					"originalName": "chopped scallions (optional)",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 50.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 632826,
			"title": "Asian Dumplings",
			"readyInMinutes": 45,
			"servings": 1,
			"sourceUrl": "https://www.foodista.com/recipe/GHLSX3K3/asian-dumplings",
			"image": "https://spoonacular.com/recipeImages/632826-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Asian Dumplings can be made <b>in around 45 minutes</b>. This hor d'oeuvre has <b>4274 calories</b>, <b>192g of protein</b>, and <b>114g of fat</b> per serving. This recipe serves 1 and costs $18.55 per serving. 6 people found this recipe to be yummy and satisfying. Head to the store and pick up water, salt, sugar, and a few other things to make it today. It is a good option if you're following a <b>dairy free</b> diet. It is a <b>pricey</b> recipe for fans of Chinese food. It is brought to you by Foodista. With a spoonacular <b>score of 88%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/seriously-asian-all-about-dumplings-10036\">Seriously Asian: All About Dumplings</a>, <a href=\"https://spoonacular.com/recipes/asian-dumplings-558806\">Asian Dumplings</a>, and <a href=\"https://spoonacular.com/recipes/asian-shrimp-dumplings-45968\">Asian Shrimp Dumplings</a> for similar recipes.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "In a large bowl, combine first 8 ingredients (pork through salt, and scallions, if desired). Mix well.\nOn a plate, place one wonton wrapper and wet the edges with warm water.\nPlace one spoonful of the pork mixture in the center of the wonton.\nFold wonton wrapper in half, over the mixture (use more warm water if nec.)\nPick up the dumpling and using water, pinch the ends together (make a seal)\nPlace on a plate that has been dusted with cornstarch.\nRepeat until mixture is completely distributed.\nDust cornstarch on each layer of dumplings so they don't stick together.\nTo cook: Bring the salted water to boil in a large pot.\nPlace dumplings in boiling water, being careful not to overcrowd.\nBoil for 2-3 minutes. The dumpling centers will turn slightly opaque.\nRemove dumplings with slotted spoon.\nServe immediately with soy sauce or see recommended sauce.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a large bowl, combine first 8 ingredients (pork through salt, and scallions, if desired).",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Mix well.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 3,
							"step": "On a plate, place one wonton wrapper and wet the edges with warm water.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Place one spoonful of the pork mixture in the center of the wonton.",
							"ingredients": [
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Fold wonton wrapper in half, over the mixture (use more warm water if nec.)",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Pick up the dumpling and using water, pinch the ends together (make a seal)",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Place on a plate that has been dusted with cornstarch.",
							"ingredients": [
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Repeat until mixture is completely distributed.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Dust cornstarch on each layer of dumplings so they don't stick together.",
							"ingredients": [
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "To cook: Bring the salted water to boil in a large pot.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 11,
							"step": "Place dumplings in boiling water, being careful not to overcrowd.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Boil for 2-3 minutes. The dumpling centers will turn slightly opaque.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 13,
							"step": "Remove dumplings with slotted spoon.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404636,
									"name": "slotted spoon",
									"localizedName": "slotted spoon",
									"image": "slotted-spoon.jpg"
								}
							]
						},
						{
							"number": 14,
							"step": "Serve immediately with soy sauce or see recommended sauce.",
							"ingredients": [
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/asian-dumplings-632826"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 20,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 7,
			"healthScore": 45,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 390.43,
			"extendedIngredients": [
				{
					"id": 16063,
					"aisle": "Canned and Jarred",
					"image": "black-eyed-peas.jpg",
					"consistency": "SOLID",
					"name": "pea-mond dressing",
					"nameClean": "blackeyed peas",
					"original": "Pea-mond Dressing",
					"originalName": "Pea-mond Dressing",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1022053,
					"aisle": "Ethnic Foods",
					"image": "rice-vinegar.png",
					"consistency": "LIQUID",
					"name": "rice wine vinegar",
					"nameClean": "rice vinegar",
					"original": "1/4 cup rice wine vinegar",
					"originalName": "rice wine vinegar",
					"amount": 0.25,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 63.75,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 10116098,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "peanut-butter.png",
					"consistency": "SOLID",
					"name": "smooth peanut butter",
					"nameClean": "creamy peanut butter",
					"original": "1 tablespoon smooth peanut butter",
					"originalName": "smooth peanut butter",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 12195,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "nut-butter.png",
					"consistency": "SOLID",
					"name": "smooth almond butter",
					"nameClean": "nut butter",
					"original": "1 tablespoon smooth almond butter",
					"originalName": "smooth almond butter",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 12195,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "almond-butter.jpg",
					"consistency": "SOLID",
					"name": "smooth almond butter",
					"nameClean": "nut butter",
					"original": "1 tablespoon smooth almond butter",
					"originalName": "smooth almond butter",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "1 tablespoon chopped fresh ginger",
					"originalName": "chopped fresh ginger",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 98839,
					"aisle": "Ethnic Foods",
					"image": "chile-chipotle.jpg",
					"consistency": "SOLID",
					"name": "adobo chipotle pepper juice",
					"nameClean": "chipotle chiles",
					"original": "2 teaspoons adobo chipotle pepper juice",
					"originalName": "adobo chipotle pepper juice",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 98839,
					"aisle": "Ethnic Foods",
					"image": "chile-chipotle.jpg",
					"consistency": "SOLID",
					"name": "adobo chipotle pepper puree",
					"nameClean": "chipotle chiles",
					"original": "1 teaspoon adobo chipotle pepper puree",
					"originalName": "adobo chipotle pepper puree",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "1 tablespoon soy sauce",
					"originalName": "soy sauce",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 19296,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "honey.png",
					"consistency": "LIQUID",
					"name": "honey",
					"nameClean": "honey",
					"original": "2 tablespoons honey",
					"originalName": "honey",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "2 teaspoons toasted sesame oil",
					"originalName": "toasted sesame oil",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"toasted"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1014582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "canola oil",
					"nameClean": "canola oil",
					"original": "1/2 cup canola oil",
					"originalName": "canola oil",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 112.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1102047,
					"aisle": "Spices and Seasonings",
					"image": "salt-and-pepper.jpg",
					"consistency": "SOLID",
					"name": "salt and pepper",
					"nameClean": "salt and pepper",
					"original": "Salt and freshly ground pepper",
					"originalName": "Salt and freshly ground pepper",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"freshly ground"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 21052,
					"aisle": "Produce",
					"image": "mixed-greens-or-mesclun.jpg",
					"consistency": "SOLID",
					"name": "salad",
					"nameClean": "mesclun",
					"original": "Salad",
					"originalName": "Salad",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11119,
					"aisle": "Produce",
					"image": "napa-cabbage.jpg",
					"consistency": "SOLID",
					"name": "napa cabbage",
					"nameClean": "napa cabbage",
					"original": "1/2 head Napa cabbage, shredded",
					"originalName": "Napa cabbage, shredded",
					"amount": 0.5,
					"unit": "head",
					"meta": [
						"shredded"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "head",
							"unitLong": "heads"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "head",
							"unitLong": "heads"
						}
					}
				},
				{
					"id": 10111251,
					"aisle": "Produce",
					"image": "romaine.jpg",
					"consistency": "SOLID",
					"name": "romaine lettuce",
					"nameClean": "romaine",
					"original": "1/2 head romaine lettuce, shredded",
					"originalName": "romaine lettuce, shredded",
					"amount": 0.5,
					"unit": "head",
					"meta": [
						"shredded"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "head",
							"unitLong": "heads"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "head",
							"unitLong": "heads"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "2 carrots, shredded",
					"originalName": "carrots, shredded",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"shredded"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11300,
					"aisle": "Produce",
					"image": "snow-peas.jpg",
					"consistency": "SOLID",
					"name": "snow peas",
					"nameClean": "snow peas",
					"original": "1/4 pound snow peas, julienned",
					"originalName": "snow peas, julienned",
					"amount": 0.25,
					"unit": "pound",
					"meta": [
						"julienned"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 113.398,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro leaves",
					"nameClean": "cilantro",
					"original": "1/4 cup coarsely chopped fresh cilantro leaves",
					"originalName": "coarsely chopped fresh cilantro leaves",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"fresh",
						"coarsely chopped"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "green onion",
					"nameClean": "spring onions",
					"original": "1/4 cup thinly sliced green onion",
					"originalName": "thinly sliced green onion",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"thinly sliced"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 25.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 99246,
					"aisle": "Meat",
					"image": "rotisserie-chicken.png",
					"consistency": "SOLID",
					"name": "rotisserie chicken",
					"nameClean": "rotisserie chicken",
					"original": "2 cups shredded rotisserie chicken",
					"originalName": "shredded rotisserie chicken",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"shredded"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 473.176,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 16092,
					"aisle": "Nuts",
					"image": "peanuts.png",
					"consistency": "SOLID",
					"name": "roasted peanuts",
					"nameClean": "roasted peanuts",
					"original": "1/2 cup chopped roasted peanuts",
					"originalName": "chopped roasted peanuts",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 73.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2064,
					"aisle": "Spices and Seasonings",
					"image": "mint.jpg",
					"consistency": "SOLID",
					"name": "mint leaves",
					"nameClean": "mint",
					"original": "1/4 cup chopped fresh mint leaves",
					"originalName": "chopped fresh mint leaves",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 11.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1014053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "chili-oil.jpg",
					"consistency": "LIQUID",
					"name": "chili oil",
					"nameClean": "chili oil",
					"original": "Chili oil, optional",
					"originalName": "Chili oil, optional",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 9159,
					"aisle": "Produce",
					"image": "lime.jpg",
					"consistency": "SOLID",
					"name": "lime",
					"nameClean": "lime",
					"original": "lime halves, for garnish",
					"originalName": "lime , for garnish",
					"amount": 1.0,
					"unit": "halves",
					"meta": [
						"for garnish"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "halves",
							"unitLong": "halve"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "halves",
							"unitLong": "halve"
						}
					}
				}
			],
			"id": 638642,
			"title": "Chinese Chicken Salad With Chipotle Dressing",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/JHBGMT48/bobby-flays-chinese-chicken-salad-with-chile-pea-mond-dressing",
			"image": "https://spoonacular.com/recipeImages/638642-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Chinese Chicken Salad With Chipotle Dressing is ready <b>in roughly 45 minutes</b> and is definitely a tremendous <b>gluten free and dairy free</b> option for lovers of Chinese food. For <b>$3.9 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. This main course has <b>780 calories</b>, <b>51g of protein</b>, and <b>46g of fat</b> per serving. This recipe serves 4. 7 people were impressed by this recipe. Head to the store and pick up romaine lettuce, carrots, mint leaves, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/chinese-chicken-salad-with-sesame-dressing-1226459\">Chinese Chicken Salad with Sesame Dressing</a>, <a href=\"https://spoonacular.com/recipes/chinese-chicken-salad-with-sesame-dressing-510753\">Chinese Chicken Salad with Sesame Dressing</a>, and <a href=\"https://spoonacular.com/recipes/doms-chinese-chicken-salad-dressing-143924\">Dom's Chinese Chicken Salad Dressing</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"salad",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "Dressing:\nWhisk together the vinegar, peanut & almond butters, ginger, chipotle pepper puree, soy sauce, honey, sesame oil, and canola oil in a medium bowl. Season with salt and pepper, to taste.\nSalad:\nCombine cabbage, lettuce, carrots, snow peas, cilantro, and green onion in a large bowl. Add the dressing and toss to combine.\nTransfer to a serving platter and top with the shredded chicken, chopped peanuts, and mint. Drizzle with chili oil, if desired.  Garnish with lime halves.",
			"analyzedInstructions": [
				{
					"name": "Dressing",
					"steps": [
						{
							"number": 1,
							"step": "Whisk together the vinegar, peanut & almond butters, ginger, chipotle pepper puree, soy sauce, honey, sesame oil, and canola oil in a medium bowl. Season with salt and pepper, to taste.",
							"ingredients": [
								{
									"id": 98839,
									"name": "chipotle chiles",
									"localizedName": "chipotle chiles",
									"image": "chile-chipotle.jpg"
								},
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								},
								{
									"id": 1014582,
									"name": "canola oil",
									"localizedName": "canola oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 2053,
									"name": "vinegar",
									"localizedName": "vinegar",
									"image": "vinegar-(white).jpg"
								},
								{
									"id": 12061,
									"name": "almonds",
									"localizedName": "almonds",
									"image": "almonds.jpg"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 16091,
									"name": "peanuts",
									"localizedName": "peanuts",
									"image": "peanuts.png"
								},
								{
									"id": 19296,
									"name": "honey",
									"localizedName": "honey",
									"image": "honey.png"
								}
							],
							"equipment": [
								{
									"id": 404661,
									"name": "whisk",
									"localizedName": "whisk",
									"image": "whisk.png"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						}
					]
				},
				{
					"name": "Salad",
					"steps": [
						{
							"number": 1,
							"step": "Combine cabbage, lettuce, carrots, snow peas, cilantro, and green onion in a large bowl.",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 11300,
									"name": "snow peas",
									"localizedName": "snow peas",
									"image": "snow-peas.jpg"
								},
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 11109,
									"name": "cabbage",
									"localizedName": "cabbage",
									"image": "cabbage.jpg"
								},
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								},
								{
									"id": 11252,
									"name": "lettuce",
									"localizedName": "lettuce",
									"image": "iceberg-lettuce.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Add the dressing and toss to combine.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Transfer to a serving platter and top with the shredded chicken, chopped peanuts, and mint.",
							"ingredients": [
								{
									"id": 1005114,
									"name": "shredded chicken",
									"localizedName": "shredded chicken",
									"image": "rotisserie-chicken.png"
								},
								{
									"id": 16091,
									"name": "peanuts",
									"localizedName": "peanuts",
									"image": "peanuts.png"
								},
								{
									"id": 2064,
									"name": "mint",
									"localizedName": "mint",
									"image": "mint.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Drizzle with chili oil, if desired.",
							"ingredients": [
								{
									"id": 1014053,
									"name": "chili oil",
									"localizedName": "chili oil",
									"image": "chili-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Garnish with lime halves.",
							"ingredients": [
								{
									"id": 9159,
									"name": "lime",
									"localizedName": "lime",
									"image": "lime.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/chinese-chicken-salad-with-chipotle-dressing-638642"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 12,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 262,
			"healthScore": 45,
			"creditsText": "afrolems.com",
			"sourceName": "afrolems.com",
			"pricePerServing": 151.08,
			"extendedIngredients": [
				{
					"id": 6172,
					"aisle": "Canned and Jarred",
					"image": "chicken-broth.png",
					"consistency": "LIQUID",
					"name": "chicken stock",
					"nameClean": "chicken stock",
					"original": "2 cups of chicken stock",
					"originalName": "chicken stock",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 480.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 99186,
					"aisle": "Meat",
					"image": "diced-ham.jpg",
					"consistency": "SOLID",
					"name": "seasoning cubes",
					"nameClean": "diced ham",
					"original": "Seasoning cubes",
					"originalName": "Seasoning cubes",
					"amount": 2.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 9176,
					"aisle": "Produce",
					"image": "mango.jpg",
					"consistency": "SOLID",
					"name": "mango",
					"nameClean": "mango",
					"original": "3 slices of mango cubed",
					"originalName": "mango cubed",
					"amount": 3.0,
					"unit": "slices",
					"meta": [
						"cubed"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "slice",
							"unitLong": "slices"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "slice",
							"unitLong": "slices"
						}
					}
				},
				{
					"id": 20444,
					"aisle": "Pasta and Rice",
					"image": "uncooked-white-rice.png",
					"consistency": "SOLID",
					"name": "rice",
					"nameClean": "rice",
					"original": "1 cup of rice",
					"originalName": "rice",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 185.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11583,
					"aisle": "Frozen",
					"image": "broccoli-carrots-cauliflower-mix.png",
					"consistency": "SOLID",
					"name": "vegetables",
					"nameClean": "mixed vegetables",
					"original": "1 cup of chopped vegetables",
					"originalName": "chopped vegetables",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 182.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11583,
					"aisle": "Frozen",
					"image": "mixed-vegetables.png",
					"consistency": "SOLID",
					"name": "vegetables",
					"nameClean": "mixed vegetables",
					"original": "1 cup of chopped vegetables",
					"originalName": "chopped vegetables",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 182.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "scotch-bonnet-chile.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet pepper",
					"nameClean": "habanero chili",
					"original": "1 scotch bonnet pepper",
					"originalName": "scotch bonnet pepper",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "habanero-pepper.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet pepper",
					"nameClean": "habanero chili",
					"original": "1 scotch bonnet pepper",
					"originalName": "scotch bonnet pepper",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 716311,
			"title": "Mango Fried Rice",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "http://www.afrolems.com/2015/05/02/mango-fried-rice/",
			"image": "https://spoonacular.com/recipeImages/716311-556x370.jpg",
			"imageType": "jpg",
			"summary": "Mango Fried Rice is a Chinese main course. This recipe makes 2 servings with <b>486 calories</b>, <b>16g of protein</b>, and <b>4g of fat</b> each. For <b>$1.51 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. Several people made this recipe, and 262 would say it hit the spot. Head to the store and pick up scotch bonnet pepper, seasoning cubes, rice, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Afrolems. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Overall, this recipe earns a <b>great spoonacular score of 94%</b>. <a href=\"https://spoonacular.com/recipes/mango-pork-fried-rice-176007\">Mango-Pork Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/thai-beef-mango-fried-rice-1326163\">Thai Beef & Mango Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/thai-chicken-and-mango-fried-rice-509300\">Thai Chicken and Mango Fried Rice</a> are very similar to this recipe.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "Wash your rice and bring to boil on medium heat with very little water as you are still going to cook it in chicken stock.Once the rice is slightly soft and the initial water has dried up, reduce the heat and pour in the chicken stock and cook till the chicken stock is all absorbed and has dried up. The chicken stock if freshly made will have some oil from the chicken so your rice does not need oil.Increase the heat and stir in the chopped vegetables and pepper. Add your seasoning cube.Finally stir in your cubed mango and serve warm with any protein of your choice. I’d say chicken but it’s up to you.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Wash your rice and bring to boil on medium heat with very little water as you are still going to cook it in chicken stock.Once the rice is slightly soft and the initial water has dried up, reduce the heat and pour in the chicken stock and cook till the chicken stock is all absorbed and has dried up. The chicken stock if freshly made will have some oil from the chicken so your rice does not need oil.Increase the heat and stir in the chopped vegetables and pepper.",
							"ingredients": [
								{
									"id": 6172,
									"name": "chicken stock",
									"localizedName": "chicken stock",
									"image": "chicken-broth.png"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 1002030,
									"name": "pepper",
									"localizedName": "pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Add your seasoning cube.Finally stir in your cubed mango and serve warm with any protein of your choice. I’d say chicken but it’s up to you.",
							"ingredients": [
								{
									"id": 0,
									"name": "seasoning cube",
									"localizedName": "seasoning cube",
									"image": "stock-cube.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 9176,
									"name": "mango",
									"localizedName": "mango",
									"image": "mango.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/mango-fried-rice-716311"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 23,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 9,
			"healthScore": 46,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 214.28,
			"extendedIngredients": [
				{
					"id": 1034053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "extra virgin olive oil",
					"nameClean": "extra virgin olive oil",
					"original": "2 tablespoons extra virgin olive oil",
					"originalName": "extra virgin olive oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "4 garlic cloves, minced",
					"originalName": "garlic cloves, minced",
					"amount": 4.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11962,
					"aisle": "Spices and Seasonings",
					"image": "dried-arbol-chiles.jpg",
					"consistency": "SOLID",
					"name": "chili peppers",
					"nameClean": "dried arbol chile",
					"original": "2 smalls fresh red chili peppers, seeded and finely chopped﻿",
					"originalName": "s fresh red chili peppers, seeded and finely chopped",
					"amount": 2.0,
					"unit": "small",
					"meta": [
						"fresh",
						"red",
						"seeded",
						"finely",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "small",
							"unitLong": "smalls"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "small",
							"unitLong": "smalls"
						}
					}
				},
				{
					"id": 12087,
					"aisle": "Nuts",
					"image": "cashews.jpg",
					"consistency": "SOLID",
					"name": "cashew nuts",
					"nameClean": "cashews",
					"original": "1 cup raw cashew nuts",
					"originalName": "raw cashew nuts",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"raw"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 129.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10012108,
					"aisle": "Baking",
					"image": "shredded-coconut.jpg",
					"consistency": "SOLID",
					"name": "coconut",
					"nameClean": "unsweetened shredded coconut",
					"original": "1 1/4 cups dry unsweetened shredded coconut, lightly toasted",
					"originalName": "dry unsweetened shredded coconut, lightly toasted",
					"amount": 1.25,
					"unit": "cups",
					"meta": [
						"shredded",
						"unsweetened",
						"dry",
						"lightly toasted"
					],
					"measures": {
						"us": {
							"amount": 1.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 116.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 93628,
					"aisle": "Baking",
					"image": "stevia.png",
					"consistency": "SOLID",
					"name": "stevia powder",
					"nameClean": "stevia",
					"original": "1/2 teaspoon stevia powder (or sweetener)",
					"originalName": "stevia powder (or sweetener)",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"(or sweetener)"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93767,
					"aisle": "Condiments",
					"image": "dark-sauce.jpg",
					"consistency": "LIQUID",
					"name": "bragg liquid aminos",
					"nameClean": "braggs liquid aminos",
					"original": "4 tablespoons Nama Shoyu (soy sauce) or Bragg liquid Aminos",
					"originalName": "Nama Shoyu (soy sauce) or Bragg liquid Aminos",
					"amount": 4.0,
					"unit": "tablespoons",
					"meta": [
						"(soy sauce)"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2048,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "apple-cider-vinegar.jpg",
					"consistency": "LIQUID",
					"name": "apple cider vinegar",
					"nameClean": "apple cider vinegar",
					"original": "2 tablespoons apple cider vinegar (or rice vinegar)",
					"originalName": "apple cider vinegar (or rice vinegar)",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"(or rice vinegar)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 12220,
					"aisle": "Health Foods",
					"image": "flax-seeds.png",
					"consistency": "SOLID",
					"name": "flax egg",
					"nameClean": "ground flaxseed",
					"original": "1 flax egg (made with 1 Tbsp. ground flax seed& 3 Tbsp. wa",
					"originalName": "flax egg (made with 1 Tbsp. ground flax seed& 3 Tbsp. wa",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"with 1 tbsp. ground flax seed& 3 tbsp. wa"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10211052,
					"aisle": "Produce",
					"image": "green-beans-or-string-beans.jpg",
					"consistency": "SOLID",
					"name": "green beans",
					"nameClean": "fresh green beans",
					"original": "2 1/2 cups fresh green beans, cut in half",
					"originalName": "fresh green beans, cut in half",
					"amount": 2.5,
					"unit": "cups",
					"meta": [
						"fresh",
						"cut in half"
					],
					"measures": {
						"us": {
							"amount": 2.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 275.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 93636,
					"aisle": "Produce",
					"image": "bok-choy.jpg",
					"consistency": "SOLID",
					"name": "regular bok choy",
					"nameClean": "baby bok choy",
					"original": "8 ounces baby bok choy or regular bok choy (shredded",
					"originalName": "baby bok choy or regular bok choy (shredded",
					"amount": 8.0,
					"unit": "ounces",
					"meta": [
						"shredded"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 226.796,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 20040,
					"aisle": "Pasta and Rice",
					"image": "uncooked-brown-rice.png",
					"consistency": "SOLID",
					"name": "brown rice",
					"nameClean": "brown rice",
					"original": "1 cup uncooked brown rice (make recipe below)",
					"originalName": "uncooked brown rice (make recipe below)",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"uncooked",
						"(make recipe below)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 190.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1029159,
					"aisle": "Produce",
					"image": "lime-wedge.jpg",
					"consistency": "SOLID",
					"name": "lime wedges",
					"nameClean": "lime wedge",
					"original": "lime wedges for serving",
					"originalName": "lime wedges for serving",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"for serving"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 663150,
			"title": "Thai Savory Brown Fried Rice",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/7C3JZV44/thai-savory-brown-fried-rice",
			"image": "https://spoonacular.com/recipeImages/663150-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many Chinese recipes, so give Thai Savory Brown Fried Rice a try. One portion of this dish contains around <b>14g of protein</b>, <b>41g of fat</b>, and a total of <b>641 calories</b>. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs <b>$2.14 per serving</b>. 9 people found this recipe to be yummy and satisfying. It is brought to you by Foodista. If you have bragg liquid aminos, apple cider vinegar, green beans, and a few other ingredients on hand, you can make it. It works well as a main course. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/savory-slow-cooker-brown-rice-and-lentils-525366\">Savory Slow Cooker Brown Rice and Lentils</a>, <a href=\"https://spoonacular.com/recipes/savory-indian-pancakes-with-lentils-brown-rice-and-cabbage-630342\">Savory Indian Pancakes with Lentils, Brown Rice and Cabbage</a>, and <a href=\"https://spoonacular.com/recipes/savory-indian-pancakes-with-lentils-brown-rice-and-cabbage-1197333\">Savory Indian Pancakes with Lentils, Brown Rice and Cabbage</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "Make my Perfect Brown Rice recipe below.  While brown \nrice is cooking prepare rest of meal.\n\nPERFECT BROWN RICE\n1 cup uncooked brown rice\n1 tsp. olive oil\n2 cups filtered water\n2 basil leaves (optional)\n\n\nFix brown rice by cooking in 1 tsp. olive oil until lightly browned. Place 2 basil leaves on top of rice and add 2 cups water all at once. Quickly put on lid and bring to boil. Turn down heat to simmer until all water has evaporated (around 40 minutes).\nHeat oil in a wok or large frying pan.  Add the garlic and cook on medium until lightly golden.  Watch carefully so you do not burn garlic.\nAdd the red chili peppers, cashew nuts and toasted coconut.  Mix together stevia, Nama Shoyu and apple cider vinegar together.  Cook over medium heat for 1 minutes.\nPush stir-fry to one side of pan and add flax on opposite end.  Cook and stir the flax egg for about a minute and then incorporate into stir-fry mixture.\nAdd the green beans, bok choy and brown rice to stir-fry.  Cook and stir on medium for another minute.  Bok Choy will be wilted, but green beans will still be a bit crunchy.\nSpoon into serving dish and add lime wedge on side for squeezing over rice.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Make my Perfect Brown Rice recipe below.  While brown",
							"ingredients": [
								{
									"id": 20040,
									"name": "brown rice",
									"localizedName": "brown rice",
									"image": "uncooked-brown-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "rice is cooking prepare rest of meal.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "PERFECT BROWN RICE",
							"ingredients": [
								{
									"id": 20040,
									"name": "brown rice",
									"localizedName": "brown rice",
									"image": "uncooked-brown-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "1 cup uncooked brown rice",
							"ingredients": [
								{
									"id": 20040,
									"name": "brown rice",
									"localizedName": "brown rice",
									"image": "uncooked-brown-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "1 tsp. olive oil",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "2 cups filtered water",
							"ingredients": [
								{
									"id": 0,
									"name": "filtered water",
									"localizedName": "filtered water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "2 basil leaves (optional)",
							"ingredients": [
								{
									"id": 2044,
									"name": "fresh basil",
									"localizedName": "fresh basil",
									"image": "fresh-basil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Fix brown rice by cooking in 1 tsp. olive oil until lightly browned.",
							"ingredients": [
								{
									"id": 20040,
									"name": "brown rice",
									"localizedName": "brown rice",
									"image": "uncooked-brown-rice.png"
								},
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Place 2 basil leaves on top of rice and add 2 cups water all at once. Quickly put on lid and bring to boil. Turn down heat to simmer until all water has evaporated (around 40 minutes).",
							"ingredients": [
								{
									"id": 2044,
									"name": "fresh basil",
									"localizedName": "fresh basil",
									"image": "fresh-basil.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 40,
								"unit": "minutes"
							}
						},
						{
							"number": 10,
							"step": "Heat oil in a wok or large frying pan.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404666,
									"name": "wok",
									"localizedName": "wok",
									"image": "wok.png"
								}
							]
						},
						{
							"number": 11,
							"step": "Add the garlic and cook on medium until lightly golden.  Watch carefully so you do not burn garlic.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Add the red chili peppers, cashew nuts and toasted coconut.",
							"ingredients": [
								{
									"id": 11962,
									"name": "arbol chile",
									"localizedName": "arbol chile",
									"image": "dried-arbol-chiles.jpg"
								},
								{
									"id": 12087,
									"name": "cashews",
									"localizedName": "cashews",
									"image": "cashews.jpg"
								},
								{
									"id": 12104,
									"name": "coconut",
									"localizedName": "coconut",
									"image": "coconut.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 13,
							"step": "Mix together stevia, Nama Shoyu and apple cider vinegar together.  Cook over medium heat for 1 minutes.",
							"ingredients": [
								{
									"id": 2048,
									"name": "apple cider vinegar",
									"localizedName": "apple cider vinegar",
									"image": "apple-cider-vinegar.jpg"
								},
								{
									"id": 93628,
									"name": "stevia",
									"localizedName": "stevia",
									"image": "stevia.png"
								},
								{
									"id": 16123,
									"name": "shoyu",
									"localizedName": "shoyu",
									"image": "soy-sauce.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 1,
								"unit": "minutes"
							}
						},
						{
							"number": 14,
							"step": "Push stir-fry to one side of pan and add flax on opposite end.  Cook and stir the flax egg for about a minute and then incorporate into stir-fry mixture.",
							"ingredients": [
								{
									"id": 10112220,
									"name": "flax egg",
									"localizedName": "flax egg",
									"image": ""
								},
								{
									"id": 10012220,
									"name": "flaxseed",
									"localizedName": "flaxseed",
									"image": "flax-seeds.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 15,
							"step": "Add the green beans, bok choy and brown rice to stir-fry.  Cook and stir on medium for another minute.  Bok Choy will be wilted, but green beans will still be a bit crunchy.",
							"ingredients": [
								{
									"id": 11052,
									"name": "green beans",
									"localizedName": "green beans",
									"image": "green-beans-or-string-beans.jpg"
								},
								{
									"id": 20040,
									"name": "brown rice",
									"localizedName": "brown rice",
									"image": "uncooked-brown-rice.png"
								},
								{
									"id": 11116,
									"name": "bok choy",
									"localizedName": "bok choy",
									"image": "bok-choy.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 16,
							"step": "Spoon into serving dish and add lime wedge on side for squeezing over rice.",
							"ingredients": [
								{
									"id": 1029159,
									"name": "lime wedge",
									"localizedName": "lime wedge",
									"image": "lime-wedge.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/thai-savory-brown-fried-rice-663150"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": true,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 4,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3689,
			"healthScore": 75,
			"creditsText": "Full Belly Sisters",
			"license": "CC BY-SA 3.0",
			"sourceName": "Full Belly Sisters",
			"pricePerServing": 112.39,
			"extendedIngredients": [
				{
					"id": 11090,
					"aisle": "Produce",
					"image": "broccoli.jpg",
					"consistency": "SOLID",
					"name": "broccoli",
					"nameClean": "broccoli",
					"original": "2 cups cooked broccoli, chopped small",
					"originalName": "cooked broccoli, chopped small",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"cooked",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 176.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11135,
					"aisle": "Produce",
					"image": "cauliflower.jpg",
					"consistency": "SOLID",
					"name": "cauliflower",
					"nameClean": "cauliflower",
					"original": "1 head of cauliflower, raw",
					"originalName": "cauliflower, raw",
					"amount": 1.0,
					"unit": "head",
					"meta": [
						"raw"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "head",
							"unitLong": "head"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "head",
							"unitLong": "head"
						}
					}
				},
				{
					"id": 4047,
					"aisle": "Baking",
					"image": "oil-coconut.jpg",
					"consistency": "LIQUID",
					"name": "t coconut oil",
					"nameClean": "coconut oil",
					"original": "1 + 1 T coconut oil or butter",
					"originalName": "1 T coconut oil or butter",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 20041,
					"aisle": "Pasta and Rice",
					"image": "rice-brown-cooked.png",
					"consistency": "SOLID",
					"name": "brown rice",
					"nameClean": "cooked brown rice",
					"original": "3 cups of cooked brown rice, cold",
					"originalName": "cooked brown rice, cold",
					"amount": 3.0,
					"unit": "cups",
					"meta": [
						"cold",
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 585.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "5 cloves of garlic, chopped",
					"originalName": "garlic, chopped",
					"amount": 5.0,
					"unit": "cloves",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 4517,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "t grapeseed oil",
					"nameClean": "grape seed oil",
					"original": "1 + 1 T grapeseed oil",
					"originalName": "1 T grapeseed oil",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 16424,
					"aisle": "Ethnic Foods",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "lower sodium soy sauce",
					"original": "3T reduced-sodium soy sauce",
					"originalName": "reduced-sodium soy sauce",
					"amount": 3.0,
					"unit": "T",
					"meta": [
						"reduced-sodium"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen peas",
					"originalName": "frozen peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen peas",
					"originalName": "frozen peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen peas",
					"originalName": "frozen peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "salt, to taste",
					"originalName": "salt, to taste",
					"amount": 8.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "additional scallion tops",
					"nameClean": "spring onions",
					"original": "additional chopped scallion tops for garnish",
					"originalName": "additional chopped scallion tops for garnish",
					"amount": 8.0,
					"unit": "servings",
					"meta": [
						"chopped",
						"for garnish"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "7 scallions, chopped (keep white/light green ends separate from dark green tops)",
					"originalName": "scallions, chopped (keep white/light green ends separate from dark green tops)",
					"amount": 7.0,
					"unit": "",
					"meta": [
						"dark",
						"green",
						"chopped",
						"(keep white/light ends separate from tops)"
					],
					"measures": {
						"us": {
							"amount": 7.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 7.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "2t toasted sesame oil",
					"originalName": "toasted sesame oil",
					"amount": 2.0,
					"unit": "t",
					"meta": [
						"toasted"
					],
					"measures": {
						"us": {
							"amount": 0.643,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.643,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 12023,
					"aisle": "Ethnic Foods",
					"image": "sesame-seeds.png",
					"consistency": "SOLID",
					"name": "sesame seeds",
					"nameClean": "sesame seeds",
					"original": "toasted sesame seeds, optional",
					"originalName": "toasted sesame seeds, optional",
					"amount": 8.0,
					"unit": "servings",
					"meta": [
						"toasted"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 716426,
			"title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
			"readyInMinutes": 30,
			"servings": 8,
			"sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
			"image": "https://spoonacular.com/recipeImages/716426-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "<ol><li><span></span>Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"</li><li>Heat 1T butter and 1T oil in a large skillet over medium heat. Add garlic and the white and light green pieces of scallion. Sauté about a minute.</li><li>Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.</li><li>Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. Let it sit for about two minutes—so the rice can get toasted and a little crispy. Add the peas and broccoli and stir again. Drizzle soy sauce and toasted sesame oil over rice.</li><li>Cook for another minute or so and turn off heat. Add chopped scallion tops and toss.</li><li>I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.</li><li>Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
							"ingredients": [
								{
									"id": 10011135,
									"name": "cauliflower florets",
									"localizedName": "cauliflower florets",
									"image": "cauliflower.jpg"
								},
								{
									"id": 10111135,
									"name": "cauliflower rice",
									"localizedName": "cauliflower rice",
									"image": "cauliflower.jpg"
								},
								{
									"id": 11135,
									"name": "cauliflower",
									"localizedName": "cauliflower",
									"image": "cauliflower.jpg"
								},
								{
									"id": 20028,
									"name": "couscous",
									"localizedName": "couscous",
									"image": "couscous-cooked.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
							"ingredients": [
								{
									"id": 11135,
									"name": "cauliflower",
									"localizedName": "cauliflower",
									"image": "cauliflower.jpg"
								},
								{
									"id": 0,
									"name": "spread",
									"localizedName": "spread",
									"image": ""
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
							"ingredients": [
								{
									"id": 4047,
									"name": "coconut oil",
									"localizedName": "coconut oil",
									"image": "oil-coconut.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 0,
									"name": "spread",
									"localizedName": "spread",
									"image": ""
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 6,
							"step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Add the peas and broccoli and stir again.",
							"ingredients": [
								{
									"id": 11090,
									"name": "broccoli",
									"localizedName": "broccoli",
									"image": "broccoli.jpg"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
							"ingredients": [
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
							"ingredients": [
								{
									"id": 12023,
									"name": "sesame seeds",
									"localizedName": "sesame seeds",
									"image": "sesame-seeds.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 0,
									"name": "sandwich bread",
									"localizedName": "sandwich bread",
									"image": "white-bread.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 14,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 3,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 118.01,
			"extendedIngredients": [
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1/4 teaspoon Black pepper",
					"originalName": "Black pepper",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11109,
					"aisle": "Produce",
					"image": "cabbage.jpg",
					"consistency": "SOLID",
					"name": "cabbage",
					"nameClean": "cabbage",
					"original": "1 1/2 cups Cabbage",
					"originalName": "Cabbage",
					"amount": 1.5,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 105.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "chili sesame oil",
					"nameClean": "sesame oil",
					"original": "Chili sesame oil, which is very very hot",
					"originalName": "Chili sesame oil, which is very very hot",
					"amount": 6.0,
					"unit": "servings",
					"meta": [
						"hot"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "mushrooms soaked in warm 2 teaspoons ginger root",
					"nameClean": "ginger",
					"original": "3 Dried mushrooms soaked in warm 2 teaspoons Ginger root grated",
					"originalName": "Dried mushrooms soaked in warm 2 teaspoons Ginger root grated",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"dried",
						"grated"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "to 4 green onions",
					"nameClean": "spring onions",
					"original": "3 To 4 green onions chopped",
					"originalName": "To 4 green onions chopped",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10023572,
					"aisle": "Meat",
					"image": "fresh-ground-beef.jpg",
					"consistency": "SOLID",
					"name": "ground beef",
					"nameClean": "ground chuck",
					"original": "3/4 pound ground beef (or pork)",
					"originalName": "ground beef (or pork)",
					"amount": 0.75,
					"unit": "pound",
					"meta": [
						"(or pork)"
					],
					"measures": {
						"us": {
							"amount": 0.75,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 340.194,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1004582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "salad oil",
					"nameClean": "salad oil",
					"original": "Salad oil",
					"originalName": "Salad oil",
					"amount": 6.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "sesame oil",
					"nameClean": "sesame oil",
					"original": "1 tablespoon sesame oil",
					"originalName": "sesame oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "kikkoman soy sauce",
					"nameClean": "soy sauce",
					"original": "1 tablespoon Kikkoman soy sauce",
					"originalName": "Kikkoman soy sauce",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "kkikkoman soy sauce",
					"nameClean": "soy sauce",
					"original": "Kkikkoman soy sauce",
					"originalName": "Kkikkoman soy sauce",
					"amount": 6.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 14084,
					"aisle": "Alcoholic Beverages",
					"image": "red-wine.jpg",
					"consistency": "LIQUID",
					"name": "cooking wine",
					"nameClean": "wine",
					"original": "1 tablespoon Cooking wine",
					"originalName": "Cooking wine",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "wonton-wrappers.jpg",
					"consistency": "SOLID",
					"name": "gy a wrappers",
					"nameClean": "wonton wrappers",
					"original": "Gyoza wrappers",
					"originalName": "Gy a wrappers",
					"amount": 1.0,
					"unit": "oz",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "oz",
							"unitLong": "ounce"
						},
						"metric": {
							"amount": 28.35,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "gy a wrappers",
					"nameClean": "wonton wrappers",
					"original": "Gyoza wrappers",
					"originalName": "Gy a wrappers",
					"amount": 1.0,
					"unit": "oz",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "oz",
							"unitLong": "ounce"
						},
						"metric": {
							"amount": 28.35,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 648475,
			"title": "Japanese Gyoza Pot Stickers",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "http://www.foodista.com/recipe/VVK5NQ7C/japanese-gyoza-pot-stickers",
			"image": "https://spoonacular.com/recipeImages/648475-556x370.jpg",
			"imageType": "jpg",
			"summary": "Japanese Gyoza Pot Stickers takes roughly <b>45 minutes</b> from beginning to end. This recipe makes 6 servings with <b>450 calories</b>, <b>13g of protein</b>, and <b>42g of fat</b> each. For <b>$1.18 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. 2 people have made this recipe and would make it again. This recipe from Foodista requires pepper, cabbage, gy a wrappers, and mushrooms soaked in warm 2 teaspoons ginger root. Only a few people really liked this hor d'oeuvre. This recipe is typical of Chinese cuisine. It is a good option if you're following a <b>dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 33%</b>, which is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/japanese-gyoza-pot-stickers-1371819\">Japanese Gyoza Pot Stickers</a>, <a href=\"https://spoonacular.com/recipes/gyoza-recipe-japanese-pork-and-shrimp-pot-stickers-17702\">Gyoza Recipe (japanese Pork And Shrimp Pot Stickers)</a>, and <a href=\"https://spoonacular.com/recipes/gyoza-pot-stickers-93878\">Gyoza ( Pot Stickers)</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "<ol><li>Chop cabbage fine, place in colander and pour boiling water over the cabbage. Cool to touch, then squeeze cabbage well to get the water out. In a bowl mix cabbage, chopped green onions, chopped mushrooms and grated ginger. Mix ground beef, wine, soy sauce, sesame oil and black pepper together with vegetables; mix well. Place a small amount of filling (about 1 teaspoon) in center of gyoza wrapping and fold in half. Pleat edge to seal. If edges won't stick together, dampen the inside edge with a little water, then pleat. Put 2 tablespoon salad oil in </li><li>Then, at edge of pan, pour in a little water, up to 1/4 of the depth of the pot-stickers. Cover, turn heat to low and simmer until water is gone. Serve with dipping sauce as appetizer, or with hot rice as entree.</li><li>^^^^^^^^^^^^^^^^^^^^^^^^ ^ no way Jose!</li><li>SAUCE:Mix soy sauce with chili sesame oil. Use a proportion of 10 parts soy sauce to 1 part oil; if you use a 5 to 1 proportion it may be a little hot for most people. The authentic sauce is a 2 to 1 proportion.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Chop cabbage fine, place in colander and pour boiling water over the cabbage. Cool to touch, then squeeze cabbage well to get the water out. In a bowl mix cabbage, chopped green onions, chopped mushrooms and grated ginger.",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 11109,
									"name": "cabbage",
									"localizedName": "cabbage",
									"image": "cabbage.jpg"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404639,
									"name": "colander",
									"localizedName": "colander",
									"image": "colander.jpg"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Mix ground beef, wine, soy sauce, sesame oil and black pepper together with vegetables; mix well.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 10023572,
									"name": "ground beef",
									"localizedName": "ground beef",
									"image": "fresh-ground-beef.jpg"
								},
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 14084,
									"name": "wine",
									"localizedName": "wine",
									"image": "red-wine.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Place a small amount of filling (about 1 teaspoon) in center of gyoza wrapping and fold in half. Pleat edge to seal. If edges won't stick together, dampen the inside edge with a little water, then pleat. Put 2 tablespoon salad oil in Then, at edge of pan, pour in a little water, up to 1/4 of the depth of the pot-stickers. Cover, turn heat to low and simmer until water is gone.",
							"ingredients": [
								{
									"id": 1004582,
									"name": "salad oil",
									"localizedName": "salad oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						}
					]
				},
				{
					"name": "Serve with dipping sauce as appetizer, or with hot rice as entree.^^^^^^^^^^^^^^^^^^^^^^^^ ^ no way Jose!SAUCE",
					"steps": [
						{
							"number": 1,
							"step": "Mix soy sauce with chili sesame oil. Use a proportion of 10 parts soy sauce to 1 part oil; if you use a 5 to 1 proportion it may be a little hot for most people. The authentic sauce is a 2 to 1 proportion.",
							"ingredients": [
								{
									"id": 4058,
									"name": "sesame oil",
									"localizedName": "sesame oil",
									"image": "sesame-oil.png"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/japanese-gyoza-pot-stickers-648475"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 41,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 8,
			"healthScore": 53,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 617.9,
			"extendedIngredients": [
				{
					"id": 10011457,
					"aisle": "Produce",
					"image": "spinach.jpg",
					"consistency": "SOLID",
					"name": "spinach",
					"nameClean": "spinach",
					"original": "250g fresh spinach, cleaned",
					"originalName": "fresh spinach, cleaned",
					"amount": 250.0,
					"unit": "g",
					"meta": [
						"fresh",
						"cleaned"
					],
					"measures": {
						"us": {
							"amount": 8.818,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 250.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms.png",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "4 large mushrooms (about 400g), stems separated from caps",
					"originalName": "large mushrooms (about , stems separated from caps",
					"amount": 400.0,
					"unit": "g",
					"meta": [
						"separated"
					],
					"measures": {
						"us": {
							"amount": 14.11,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 400.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms-white.jpg",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "4 large mushrooms (about 400g), stems separated from caps",
					"originalName": "large mushrooms (about , stems separated from caps",
					"amount": 400.0,
					"unit": "g",
					"meta": [
						"separated"
					],
					"measures": {
						"us": {
							"amount": 14.11,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 400.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "½ Tbs butter",
					"originalName": "butter",
					"amount": 0.5,
					"unit": "Tbs",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "½ onion, chopped",
					"originalName": "onion, chopped",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1036,
					"aisle": "Cheese",
					"image": "ricotta.png",
					"consistency": "SOLID",
					"name": "ricotta cheese",
					"nameClean": "ricotta cheese",
					"original": "250g ricotta cheese",
					"originalName": "ricotta cheese",
					"amount": 250.0,
					"unit": "g",
					"meta": [],
					"measures": {
						"us": {
							"amount": 8.818,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 250.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1004,
					"aisle": "Cheese",
					"image": "blue-cheese.png",
					"consistency": "SOLID",
					"name": "cheese",
					"nameClean": "blue cheese",
					"original": "50 g blue cheese",
					"originalName": "blue cheese",
					"amount": 50.0,
					"unit": "g",
					"meta": [
						"blue"
					],
					"measures": {
						"us": {
							"amount": 1.764,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 50.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "¼ tsp black pepper",
					"originalName": "black pepper",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11156,
					"aisle": "Produce",
					"image": "fresh-chives.jpg",
					"consistency": "SOLID",
					"name": "chives",
					"nameClean": "chives",
					"original": "Fresh chives, chopped",
					"originalName": "Fresh chives, chopped",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 18079,
					"aisle": "Pasta and Rice",
					"image": "breadcrumbs.jpg",
					"consistency": "SOLID",
					"name": "breadcrumbs",
					"nameClean": "breadcrumbs",
					"original": "2 Tbs homemade breadcrumbs",
					"originalName": "homemade breadcrumbs",
					"amount": 2.0,
					"unit": "Tbs",
					"meta": [
						"homemade"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						}
					}
				},
				{
					"id": 1033,
					"aisle": "Cheese",
					"image": "parmesan.jpg",
					"consistency": "SOLID",
					"name": "parmesan cheese",
					"nameClean": "parmesan",
					"original": "2 Tbs Parmesan cheese, grated",
					"originalName": "Parmesan cheese, grated",
					"amount": 2.0,
					"unit": "Tbs",
					"meta": [
						"grated"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "2 Tbs olive oil",
					"originalName": "olive oil",
					"amount": 2.0,
					"unit": "Tbs",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						}
					}
				},
				{
					"id": 93803,
					"aisle": "Ethnic Foods",
					"image": "dry-udon-noodles.png",
					"consistency": "SOLID",
					"name": "rice pasta",
					"nameClean": "chow mein noodles",
					"original": "400g Chow Mein Noodles or rice pasta",
					"originalName": "Chow Mein Noodles or rice pasta",
					"amount": 400.0,
					"unit": "g",
					"meta": [],
					"measures": {
						"us": {
							"amount": 14.11,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 400.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "3 cloves garlic, crushed",
					"originalName": "garlic, crushed",
					"amount": 3.0,
					"unit": "cloves",
					"meta": [
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 1056,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "sour-cream.jpg",
					"consistency": "SOLID",
					"name": "cream",
					"nameClean": "sour cream",
					"original": "2 Tbs sour cream",
					"originalName": "sour cream",
					"amount": 2.0,
					"unit": "Tbs",
					"meta": [
						"sour"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbs",
							"unitLong": "Tbs"
						}
					}
				},
				{
					"id": 1012047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "sea salt",
					"nameClean": "coarse sea salt",
					"original": "¼ tsp sea salt",
					"originalName": "sea salt",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11297,
					"aisle": "Produce",
					"image": "parsley.jpg",
					"consistency": "SOLID",
					"name": "parsley",
					"nameClean": "parsley",
					"original": "Parsley for sprinkling, chopped",
					"originalName": "Parsley for sprinkling, chopped",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"chopped",
						"for sprinkling, "
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 662054,
			"title": "Stuffed mushrooms and Chow Mein noodles",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/JFLYX2JY/stuffed-mushrooms-and-chow-mein-noodles",
			"image": "https://spoonacular.com/recipeImages/662054-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many main course recipes, so give Stuffed mushrooms and Chow Mein noodles a try. This recipe makes 2 servings with <b>1345 calories</b>, <b>62g of protein</b>, and <b>49g of fat</b> each. For <b>$6.18 per serving</b>, this recipe <b>covers 51%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 8 fans. Only a few people really liked this Chinese dish. Head to the store and pick up pepper, olive oil, chives, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 88%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/chicken-chow-mein-with-noodles-111260\">Chicken Chow Mein With Noodles</a>, <a href=\"https://spoonacular.com/recipes/easy-chicken-chow-mein-noodles-841416\">Easy Chicken Chow Mein Noodles</a>, and <a href=\"https://spoonacular.com/recipes/turkey-casserole-with-chow-mein-noodles-381477\">Turkey Casserole with Chow Mein Noodles</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [],
			"occasions": [],
			"instructions": "Blanch the spinach in a very little water in the microwave oven for 3 minutes on MAX. Drain and coarsely chop. Chop mushroom stems in a blender.\nMelt the butter over low heat, add the onion and cook for 1 minute. Add chopped mushroom stems, and saut for 4-5 minutes, stirring often.\nAdd chopped spinach; stir well and saut 2 more minutes. Remove from the heat.\nMix and combine with a fork in a separate bowl ricotta, blue cheese, chives and pepper into a fine mixture, almost a paste.\nAdd chopped stalks and spinach mixture, stir and combine thoroughly.\nUsing a small teaspoon, place mounds of filling on the top of each mushroom cap, pressing slightly to get it down into the cavity.\nMix breadcrumbs and grated Parmesan cheese, sprinkle evenly over each mushroom. Drizzle each filled cap with olive oil.\nPlace the mushroom caps on a baking sheet lined with parchment paper or silicon sheet, and bake in the oven at 180C for 20 minutes or until the cheese browns a little. Allow to cool for 5 minutes or so before serving.\nMeanwhile cook the Chow Mein or rice noodles as directed on the package; drain.\nMix and combine garlic, sour cream and salt and stir into the cooked pasta.\nSprinkle with chopped parsley and served with stuffed mushrooms.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Blanch the spinach in a very little water in the microwave oven for 3 minutes on MAX.",
							"ingredients": [
								{
									"id": 10011457,
									"name": "spinach",
									"localizedName": "spinach",
									"image": "spinach.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404762,
									"name": "microwave",
									"localizedName": "microwave",
									"image": "microwave.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Drain and coarsely chop. Chop mushroom stems in a blender.",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								}
							],
							"equipment": [
								{
									"id": 404726,
									"name": "blender",
									"localizedName": "blender",
									"image": "blender.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Melt the butter over low heat, add the onion and cook for 1 minute.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 1,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add chopped mushroom stems, and saut for 4-5 minutes, stirring often.",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add chopped spinach; stir well and saut 2 more minutes.",
							"ingredients": [
								{
									"id": 10011457,
									"name": "spinach",
									"localizedName": "spinach",
									"image": "spinach.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Remove from the heat.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Mix and combine with a fork in a separate bowl ricotta, blue cheese, chives and pepper into a fine mixture, almost a paste.",
							"ingredients": [
								{
									"id": 1004,
									"name": "blue cheese",
									"localizedName": "blue cheese",
									"image": "blue-cheese.png"
								},
								{
									"id": 1036,
									"name": "ricotta cheese",
									"localizedName": "ricotta cheese",
									"image": "ricotta.png"
								},
								{
									"id": 11156,
									"name": "chives",
									"localizedName": "chives",
									"image": "fresh-chives.jpg"
								},
								{
									"id": 1002030,
									"name": "pepper",
									"localizedName": "pepper",
									"image": "pepper.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 8,
							"step": "Add chopped stalks and spinach mixture, stir and combine thoroughly.",
							"ingredients": [
								{
									"id": 10011457,
									"name": "spinach",
									"localizedName": "spinach",
									"image": "spinach.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Using a small teaspoon, place mounds of filling on the top of each mushroom cap, pressing slightly to get it down into the cavity.",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 19142,
									"name": "mounds bar",
									"localizedName": "mounds bar",
									"image": "almond-joy.png"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Mix breadcrumbs and grated Parmesan cheese, sprinkle evenly over each mushroom.",
							"ingredients": [
								{
									"id": 1032,
									"name": "grated parmesan cheese",
									"localizedName": "grated parmesan cheese",
									"image": "parmesan.jpg"
								},
								{
									"id": 18079,
									"name": "breadcrumbs",
									"localizedName": "breadcrumbs",
									"image": "breadcrumbs.jpg"
								},
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Drizzle each filled cap with olive oil.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Place the mushroom caps on a baking sheet lined with parchment paper or silicon sheet, and bake in the oven at 180C for 20 minutes or until the cheese browns a little. Allow to cool for 5 minutes or so before serving.",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 1041009,
									"name": "cheese",
									"localizedName": "cheese",
									"image": "cheddar-cheese.png"
								}
							],
							"equipment": [
								{
									"id": 404770,
									"name": "baking paper",
									"localizedName": "baking paper",
									"image": "baking-paper.jpg"
								},
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg",
									"temperature": {
										"number": 180.0,
										"unit": "Celsius"
									}
								}
							],
							"length": {
								"number": 25,
								"unit": "minutes"
							}
						},
						{
							"number": 13,
							"step": "Meanwhile cook the Chow Mein or rice noodles as directed on the package; drain.",
							"ingredients": [
								{
									"id": 20133,
									"name": "rice noodles",
									"localizedName": "rice noodles",
									"image": "dried-rice-noodles.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 14,
							"step": "Mix and combine garlic, sour cream and salt and stir into the cooked pasta.",
							"ingredients": [
								{
									"id": 20421,
									"name": "cooked pasta",
									"localizedName": "cooked pasta",
									"image": "fusilli.jpg"
								},
								{
									"id": 1056,
									"name": "sour cream",
									"localizedName": "sour cream",
									"image": "sour-cream.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 15,
							"step": "Sprinkle with chopped parsley and served with stuffed mushrooms.",
							"ingredients": [
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 11297,
									"name": "parsley",
									"localizedName": "parsley",
									"image": "parsley.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/stuffed-mushrooms-and-chow-mein-noodles-662054"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 5,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 4,
			"healthScore": 3,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 56.03,
			"extendedIngredients": [
				{
					"id": 93756,
					"aisle": "Meat",
					"image": "black-forest-ham.jpg",
					"consistency": "SOLID",
					"name": "deli forest ham",
					"nameClean": "black forest ham",
					"original": "3 Deli Sliced Black Forest Ham",
					"originalName": "Deli Sliced Black Forest Ham",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"black",
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10010151,
					"aisle": "Meat",
					"image": "ham.png",
					"consistency": "SOLID",
					"name": "deli honey ham",
					"nameClean": "ham slices",
					"original": "3 Deli Sliced Honey Ham",
					"originalName": "Deli Sliced Honey Ham",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 7259,
					"aisle": "Meat",
					"image": "deli-turkey.jpg",
					"consistency": "SOLID",
					"name": "deli turkey",
					"nameClean": "deli turkey",
					"original": "3 Deli Sliced Smoked Turkey",
					"originalName": "Deli Sliced Smoked Turkey",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"smoked",
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 18368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "egg roll wraps",
					"nameClean": "egg roll wrappers",
					"original": "8 Egg Roll Wraps",
					"originalName": "Egg Roll Wraps",
					"amount": 8.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10819297,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "strawberry-jam.png",
					"consistency": "SOLID",
					"name": "strawberry jam",
					"nameClean": "strawberry jam",
					"original": "5 tablespoons Strawberry Jam",
					"originalName": "Strawberry Jam",
					"amount": 5.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10819297,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "strawberry-jam.png",
					"consistency": "SOLID",
					"name": "strawberry jam",
					"nameClean": "strawberry jam",
					"original": "5 tablespoons Strawberry Jam",
					"originalName": "Strawberry Jam",
					"amount": 5.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1040,
					"aisle": "Cheese",
					"image": "Swiss-cheese.jpg",
					"consistency": "SOLID",
					"name": "deli baby swiss cheese",
					"nameClean": "swiss cheese",
					"original": "3 Deli Sliced Baby Swiss Cheese",
					"originalName": "Deli Sliced Baby Swiss Cheese",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 652354,
			"title": "Monte Cristo Egg Rolls",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "http://www.foodista.com/recipe/WBB6376N/monte-cristo-egg-rolls",
			"image": "https://spoonacular.com/recipeImages/652354-556x370.jpg",
			"imageType": "jpg",
			"summary": "Monte Cristo Egg Rolls might be a good recipe to expand your hor d'oeuvre recipe box. This recipe makes 6 servings with <b>168 calories</b>, <b>8g of protein</b>, and <b>5g of fat</b> each. For <b>56 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe is typical of Chinese cuisine. It is brought to you by Foodista. 4 people found this recipe to be yummy and satisfying. Head to the store and pick up deli forest ham, deli honey ham, deli turkey, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 38%</b>, which is not so super. Similar recipes include <a href=\"https://spoonacular.com/recipes/monte-cristo-egg-rolls-1375809\">Monte Cristo Egg Rolls</a>, <a href=\"https://spoonacular.com/recipes/monte-cristo-egg-rolls-1405757\">Monte Cristo Egg Rolls</a>, and <a href=\"https://spoonacular.com/recipes/monte-cristo-558318\">Monte Cristo</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [],
			"occasions": [],
			"instructions": "<ol><li>Chop the meat and cheese into small pieces and place into a mixing bowl, add the jam and stir to combine. Lay out the egg roll wraps with 1 corner facing you; place about 2 Tbs. of the filling just above the bottom corner. Fold this bottom corner up over the filling, then fold in each side of the egg roll wrap then roll it up. When you roll up to the other corner use a little water on your finger and spread on the wrapper to seal the roll and corner together. Deep fry at 320 degrees, for about 3 minutes or until crispy and golden brown. Serve warm as is or sprinkle with powder sugar, i</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Chop the meat and cheese into small pieces and place into a mixing bowl, add the jam and stir to combine.",
							"ingredients": [
								{
									"id": 1041009,
									"name": "cheese",
									"localizedName": "cheese",
									"image": "cheddar-cheese.png"
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 19297,
									"name": "jam",
									"localizedName": "jam",
									"image": "strawberry-jam.png"
								}
							],
							"equipment": [
								{
									"id": 405907,
									"name": "mixing bowl",
									"localizedName": "mixing bowl",
									"image": "mixing-bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Lay out the egg roll wraps with 1 corner facing you; place about 2 Tbs. of the filling just above the bottom corner. Fold this bottom corner up over the filling, then fold in each side of the egg roll wrap then roll it up. When you roll up to the other corner use a little water on your finger and spread on the wrapper to seal the roll and corner together. Deep fry at 320 degrees, for about 3 minutes or until crispy and golden brown.",
							"ingredients": [
								{
									"id": 18368,
									"name": "egg roll wrappers",
									"localizedName": "egg roll wrappers",
									"image": "puff-pastry-squares.jpg"
								},
								{
									"id": 0,
									"name": "spread",
									"localizedName": "spread",
									"image": ""
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Serve warm as is or sprinkle with powder sugar, i",
							"ingredients": [
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/monte-cristo-egg-rolls-652354"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 18,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 81,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 321.68,
			"extendedIngredients": [
				{
					"id": 10020444,
					"aisle": "Pasta and Rice",
					"image": "rice-white-long-grain-or-basmatii-cooked.jpg",
					"consistency": "SOLID",
					"name": "basmati rice - 2",
					"nameClean": "basmati rice",
					"original": "cup Basmati Rice - 2",
					"originalName": "Basmati Rice - 2",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 185.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "yellow-bell-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell peppers - i used half of and colour",
					"nameClean": "bell pepper",
					"original": "Bell peppers - I used half of red and yellow colour",
					"originalName": "Bell peppers - I used half of red and yellow colour",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"red",
						"yellow"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "bell-pepper-orange.png",
					"consistency": "SOLID",
					"name": "bell peppers - i used half of and colour",
					"nameClean": "bell pepper",
					"original": "Bell peppers - I used half of red and yellow colour",
					"originalName": "Bell peppers - I used half of red and yellow colour",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"red",
						"yellow"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrot",
					"nameClean": "carrot",
					"original": "Carrot - 1 cut into thin strips",
					"originalName": "Carrot cut into thin strips",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"cut into thin strips"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 93711,
					"aisle": "Produce",
					"image": "yellow-wax-beans.png",
					"consistency": "SOLID",
					"name": "beans - ½",
					"nameClean": "wax beans",
					"original": "cup Beans - ½",
					"originalName": "Beans - ½",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas - ¼",
					"nameClean": "petite peas",
					"original": "cup Green peas - ¼",
					"originalName": "Green peas - ¼",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas - ¼",
					"nameClean": "petite peas",
					"original": "cup Green peas - ¼",
					"originalName": "Green peas - ¼",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas - ¼",
					"nameClean": "petite peas",
					"original": "cup Green peas - ¼",
					"originalName": "Green peas - ¼",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11168,
					"aisle": "Produce",
					"image": "corn.png",
					"consistency": "SOLID",
					"name": "corn - ¼",
					"nameClean": "corn",
					"original": "cup Corn - ¼",
					"originalName": "Corn - ¼",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 154.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11109,
					"aisle": "Produce",
					"image": "cabbage.jpg",
					"consistency": "SOLID",
					"name": "cabbage - ¼",
					"nameClean": "cabbage",
					"original": "cup Cabbage - ¼ finely grated",
					"originalName": "Cabbage - ¼ finely grated",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"finely grated"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 70.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onions - 1",
					"nameClean": "onion",
					"original": "small Onions - 1 finely sliced",
					"originalName": "Onions - 1 finely sliced",
					"amount": 1.0,
					"unit": "small",
					"meta": [
						"finely sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						}
					}
				},
				{
					"id": 10093754,
					"aisle": "Ethnic Foods",
					"image": "ginger-garlic-paste.png",
					"consistency": "SOLID",
					"name": "ginger garlic paste n",
					"nameClean": "ginger garlic paste",
					"original": "Ginger garlic paste - 1 tbspn",
					"originalName": "Ginger garlic paste n",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11819,
					"aisle": "Produce",
					"image": "red-chili.jpg",
					"consistency": "SOLID",
					"name": "chillies to 3 depending on your taste",
					"nameClean": "chili pepper",
					"original": "Green chillies - 2 to 3 depending on your taste",
					"originalName": "Green chillies to 3 depending on your taste",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soya sauce n",
					"nameClean": "soy sauce",
					"original": "Soya sauce - 1 tbspn",
					"originalName": "Soya sauce n",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11549,
					"aisle": "Canned and Jarred",
					"image": "tomato-sauce-or-pasta-sauce.jpg",
					"consistency": "SOLID",
					"name": "chilli sauce/tomato sauce n",
					"nameClean": "canned tomato sauce",
					"original": "Chilli sauce/tomato sauce - 1 tbspn",
					"originalName": "Chilli sauce/tomato sauce n",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 12087,
					"aisle": "Nuts",
					"image": "cashews.jpg",
					"consistency": "SOLID",
					"name": "cashews and raisins",
					"nameClean": "cashews",
					"original": "Cashews and raisins",
					"originalName": "Cashews and raisins",
					"amount": 2.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil spoons",
					"nameClean": "cooking oil",
					"original": "Oil - 3 spoons",
					"originalName": "Oil spoons",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1102047,
					"aisle": "Spices and Seasonings",
					"image": "salt-and-pepper.jpg",
					"consistency": "SOLID",
					"name": "salt and pepper",
					"nameClean": "salt and pepper",
					"original": "Salt and pepper to taste",
					"originalName": "Salt and pepper to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 664553,
			"title": "Vegetable Fried Rice",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/TNCSDDXY/vegetable-fried-rice",
			"image": "https://spoonacular.com/recipeImages/664553-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Vegetable Fried Rice can be made <b>in approximately 45 minutes</b>. For <b>$3.22 per serving</b>, you get a main course that serves 2. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>777 calories</b>, <b>25g of protein</b>, and <b>18g of fat</b> per serving. 2 people have tried and liked this recipe. It is a <b>pretty expensive</b> recipe for fans of Chinese food. A mixture of basmati rice - 2, salt and pepper, peas - ¼, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. Overall, this recipe earns an <b>awesome spoonacular score of 81%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/veg-fried-rice-how-to-make-vegetable-fried-rice-rice-s-1218263\">veg fried rice , how to make vegetable fried rice | rice s</a>, <a href=\"https://spoonacular.com/recipes/veg-fried-rice-how-to-make-vegetable-fried-rice-rice-s-1227723\">veg fried rice , how to make vegetable fried rice | rice s</a>, and <a href=\"https://spoonacular.com/recipes/veg-fried-rice-how-to-make-vegetable-fried-rice-rice-s-1222461\">veg fried rice , how to make vegetable fried rice | rice s</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "Cook the basmati rice with 4 cups water..\nMeanwhile, in a saucepan add the oil and fry the onions..\nOnce they turn soft and translucent add the ginger garlic paste and green chillies and saute for a minute..\nThen add all the vegetables,salt and pepper..\nSprinkle very little water and allow the veggies to cook for two minutes..\nThey should be half cooked..\nNow add the soya sauce and chilli sauce..\nNow add the cooked rice to this vegetable mixture and stir this mixture for a minute or two in low flame..\nRoast some cashews and raisins in ghee and also add them..\nIf you dont like the sweet taste you can omit the raisins..\nFried rice is ready..\nIt tastes good when served with gobi Manchurian..\nOr just tomato sauce and raita will do..",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Cook the basmati rice with 4 cups water..",
							"ingredients": [
								{
									"id": 10020444,
									"name": "basmati rice",
									"localizedName": "basmati rice",
									"image": "rice-white-long-grain-or-basmatii-cooked.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Meanwhile, in a saucepan add the oil and fry the onions..",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Once they turn soft and translucent add the ginger garlic paste and green chillies and saute for a minute..",
							"ingredients": [
								{
									"id": 10093754,
									"name": "ginger garlic paste",
									"localizedName": "ginger garlic paste",
									"image": "ginger-garlic-paste.png"
								},
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Then add all the vegetables,salt and pepper..",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Sprinkle very little water and allow the veggies to cook for two minutes..",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "They should be half cooked..",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Now add the soya sauce and chilli sauce..",
							"ingredients": [
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Now add the cooked rice to this vegetable mixture and stir this mixture for a minute or two in low flame..",
							"ingredients": [
								{
									"id": 10220445,
									"name": "cooked rice",
									"localizedName": "cooked rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Roast some cashews and raisins in ghee and also add them..",
							"ingredients": [
								{
									"id": 12087,
									"name": "cashews",
									"localizedName": "cashews",
									"image": "cashews.jpg"
								},
								{
									"id": 9299,
									"name": "raisins",
									"localizedName": "raisins",
									"image": "raisins.jpg"
								},
								{
									"id": 93632,
									"name": "ghee",
									"localizedName": "ghee",
									"image": "ghee.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "If you dont like the sweet taste you can omit the raisins..",
							"ingredients": [
								{
									"id": 9299,
									"name": "raisins",
									"localizedName": "raisins",
									"image": "raisins.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Fried rice is ready..",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "It tastes good when served with gobi Manchurian..",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 13,
							"step": "Or just tomato sauce and raita will do..",
							"ingredients": [
								{
									"id": 11549,
									"name": "tomato sauce",
									"localizedName": "tomato sauce",
									"image": "tomato-sauce-or-pasta-sauce.jpg"
								},
								{
									"id": 1011116,
									"name": "raita",
									"localizedName": "raita",
									"image": "raita-or-tzaziki.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/vegetable-fried-rice-664553"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 88,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 71,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 677.79,
			"extendedIngredients": [
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "eggs",
					"nameClean": "egg",
					"original": "2 eggs",
					"originalName": "eggs",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "clove garlic, minced fine",
					"originalName": "garlic, minced fine",
					"amount": 1.0,
					"unit": "clove",
					"meta": [
						"minced",
						"fine"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						}
					}
				},
				{
					"id": 11333,
					"aisle": "Produce",
					"image": "green-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "green pepper",
					"original": "1/2 green pepper, chopped",
					"originalName": "green pepper, chopped",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"green",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "• Oil for fry",
					"originalName": "Oil for fry",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"for fry"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "big onion",
					"nameClean": "onion",
					"original": "1 big onion, sliced",
					"originalName": "big onion, sliced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "yellow-bell-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "bell pepper",
					"original": "Pepper to taste",
					"originalName": "Pepper to taste",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "bell-pepper-orange.png",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "bell pepper",
					"original": "Pepper to taste",
					"originalName": "Pepper to taste",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 10010219,
					"aisle": "Meat",
					"image": "pork-tenderloin-raw.png",
					"consistency": "SOLID",
					"name": "pork",
					"nameClean": "pork",
					"original": "1 pound lean pork, sliced",
					"originalName": "lean pork, sliced",
					"amount": 1.0,
					"unit": "pound",
					"meta": [
						"lean",
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 20444,
					"aisle": "Pasta and Rice",
					"image": "uncooked-white-rice.png",
					"consistency": "SOLID",
					"name": "rice",
					"nameClean": "rice",
					"original": "2 cups rice",
					"originalName": "rice",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 370.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "• Salt to taste",
					"originalName": "Salt to taste",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "2 1/2 tablespoons soy sauce",
					"originalName": "soy sauce",
					"amount": 2.5,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "2 teaspoons sugar",
					"originalName": "sugar",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 tomato, diced",
					"originalName": "tomato, diced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "4 cups water",
					"originalName": "water",
					"amount": 4.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 946.352,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 663104,
			"title": "Thai Fried Rice",
			"readyInMinutes": 45,
			"servings": 1,
			"sourceUrl": "http://www.foodista.com/recipe/C8D432DB/thai-fried-rice",
			"image": "https://spoonacular.com/recipeImages/663104-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Thai Fried Rice might be a recipe you should try. This recipe serves 1. For <b>$6.78 per serving</b>, this recipe <b>covers 68%</b> of your daily requirements of vitamins and minerals. This main course has <b>2953 calories</b>, <b>122g of protein</b>, and <b>122g of fat</b> per serving. This recipe from Foodista has 2 fans. Only a few people really liked this Chinese dish. If you have water, salt, soy sauce, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/thai-fried-rice-35966\">Thai Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/thai-fried-rice-1234777\">Thai Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/thai-fried-rice-10071\">Thai Fried Rice</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "<ol><li>Saute garlic in oil. Add sliced pork; cook until brown. Add onion, tomato, and green pepper; fry slightly. Cook rice in water; add to fried mixture. Add eggs and fry. Continue stirring until eggs are cooked. Add soy sauce, salt, sugar, and pepper. Yields 6-8 servings.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Saute garlic in oil.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Add sliced pork; cook until brown.",
							"ingredients": [
								{
									"id": 10010219,
									"name": "pork",
									"localizedName": "pork",
									"image": "pork-tenderloin-raw.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Add onion, tomato, and green pepper; fry slightly. Cook rice in water; add to fried mixture.",
							"ingredients": [
								{
									"id": 11333,
									"name": "green pepper",
									"localizedName": "green pepper",
									"image": "green-pepper.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add eggs and fry. Continue stirring until eggs are cooked.",
							"ingredients": [
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add soy sauce, salt, sugar, and pepper. Yields 6-8 servings.",
							"ingredients": [
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 1002030,
									"name": "pepper",
									"localizedName": "pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/thai-fried-rice-663104"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 8,
			"healthScore": 6,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 62.13,
			"extendedIngredients": [
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1 bunch cilantro, stems discarded",
					"originalName": "cilantro, stems discarded",
					"amount": 1.0,
					"unit": "bunch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "3 cloves garlic",
					"originalName": "garlic",
					"amount": 3.0,
					"unit": "cloves",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 10112061,
					"aisle": "Baking",
					"image": "almonds.jpg",
					"consistency": "SOLID",
					"name": "almonds",
					"nameClean": "sliced almonds",
					"original": "1 heaping Tbsp sliced almonds",
					"originalName": "heaping Tbsp sliced almonds",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 9160,
					"aisle": "Produce",
					"image": "lime-juice.png",
					"consistency": "LIQUID",
					"name": "juice of lime",
					"nameClean": "lime juice",
					"original": "juice of lime, divided",
					"originalName": "juice of lime, divided",
					"amount": 12.0,
					"unit": "",
					"meta": [
						"divided"
					],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "olive oil",
					"originalName": "olive oil",
					"amount": 12.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1102047,
					"aisle": "Spices and Seasonings",
					"image": "salt-and-pepper.jpg",
					"consistency": "SOLID",
					"name": "salt & pepper",
					"nameClean": "salt and pepper",
					"original": "salt & pepper",
					"originalName": "salt & pepper",
					"amount": 12.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 18368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "egg roll wrappers",
					"nameClean": "egg roll wrappers",
					"original": "12 egg roll wrappers",
					"originalName": "egg roll wrappers",
					"amount": 12.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11821,
					"aisle": "Produce",
					"image": "red-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "red pepper",
					"original": "1 red bell pepper, small dice",
					"originalName": "red bell pepper, small dice",
					"amount": 1.0,
					"unit": "small",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						}
					}
				},
				{
					"id": 11168,
					"aisle": "Produce",
					"image": "corn.png",
					"consistency": "SOLID",
					"name": "corn",
					"nameClean": "corn",
					"original": "1/2 cup corn",
					"originalName": "corn",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 77.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 16015,
					"aisle": "Pasta and Rice",
					"image": "black-beans.jpg",
					"consistency": "SOLID",
					"name": "black beans",
					"nameClean": "black beans",
					"original": "1/2 cup black beans, rinsed and drained",
					"originalName": "black beans, rinsed and drained",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"rinsed",
						"drained"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 86.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 660707,
			"title": "Southwest Egg Rolls with Cilantro Lime Pesto",
			"readyInMinutes": 45,
			"servings": 12,
			"sourceUrl": "https://www.foodista.com/recipe/CM34KFZM/southwest-egg-rolls",
			"image": "https://spoonacular.com/recipeImages/660707-556x370.jpg",
			"imageType": "jpg",
			"summary": "Southwest Egg Rolls with Cilantro Lime Pesto could be just the <b>dairy free</b> recipe you've been looking for. This recipe makes 12 servings with <b>192 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b> each. For <b>62 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 8 foodies and cooks. It works well as a Chinese hor d'oeuvre. If you have cilantro, juice of lime, black beans, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>good spoonacular score of 52%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/southwest-egg-rolls-with-avocado-lime-ranch-592841\">Southwest Egg Rolls with Avocado-Lime Ranch</a>, <a href=\"https://spoonacular.com/recipes/baked-buffalo-chicken-egg-rolls-with-cilantro-lime-ranch-1517169\">Baked Buffalo Chicken Egg Rolls with Cilantro Lime Ranch</a>, and <a href=\"https://spoonacular.com/recipes/southwest-quesadilla-with-cilantro-lime-sour-cream-295853\">Southwest Quesadilla with Cilantro-Lime Sour Cream</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "Oven at 385 degrees.\nMake the pesto: In a small food processor add the garlic and almonds. Pulse until finely chopped. Add the cilantro leaves and about 3-4 Tbsp olive oil, the amount is really a preference of how loose or thick you like the pesto. Start with a little and add a little at a time until you reach the consistency of your preference. Stir in the juice of 1/2 a lime. If you are making this ahead of time...place in a bowl and drizzle just enough olive oil on top to coat, this keeps the air from getting to the cilantro. Cover with plastic wrap and refrigerate.\nSaut the peppers with a drizzle of olive oil in a pan over medium high heat for just a couple minutes. Mix the peppers, corn and black beans in a bowl.\nLay out the egg roll wrappers. Smear some of the cilantro lime pesto on the end closest to you, leaving about an inch of the wrapper on the very end.\nAdd a spoon full of the veggies along the line of pesto. Brush the ends of the wrapper with water, this will help seal the egg roll. Fold the end nearest you over the veggies and the two\nsides fold in as well.\nRoll up the wrapper to the end. Place seam side down on a lined baking sheet that his been brushed with a bit of olive oil to prevent sticking.\nBrush the egg rolls lightly with olive oil as well, this will help get that golden color. Bake for approx 18 minutes, or until golden and crispy.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Oven at 385 degrees.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Make the pesto: In a small food processor add the garlic and almonds. Pulse until finely chopped.",
							"ingredients": [
								{
									"id": 12061,
									"name": "almonds",
									"localizedName": "almonds",
									"image": "almonds.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 93698,
									"name": "pesto",
									"localizedName": "pesto",
									"image": "basil-pesto.png"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the cilantro leaves and about 3-4 Tbsp olive oil, the amount is really a preference of how loose or thick you like the pesto. Start with a little and add a little at a time until you reach the consistency of your preference. Stir in the juice of 1/2 a lime. If you are making this ahead of time...place in a bowl and drizzle just enough olive oil on top to coat, this keeps the air from getting to the cilantro. Cover with plastic wrap and refrigerate.",
							"ingredients": [
								{
									"id": 11165,
									"name": "fresh cilantro",
									"localizedName": "fresh cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 1019016,
									"name": "juice",
									"localizedName": "juice",
									"image": "apple-juice.jpg"
								},
								{
									"id": 93698,
									"name": "pesto",
									"localizedName": "pesto",
									"image": "basil-pesto.png"
								},
								{
									"id": 9159,
									"name": "lime",
									"localizedName": "lime",
									"image": "lime.jpg"
								},
								{
									"id": 10018364,
									"name": "wrap",
									"localizedName": "wrap",
									"image": "flour-tortilla.jpg"
								}
							],
							"equipment": [
								{
									"id": 404730,
									"name": "plastic wrap",
									"localizedName": "plastic wrap",
									"image": "plastic-wrap.jpg"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 4,
							"step": "Saut the peppers with a drizzle of olive oil in a pan over medium high heat for just a couple minutes.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 10111333,
									"name": "peppers",
									"localizedName": "peppers",
									"image": "green-pepper.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Mix the peppers, corn and black beans in a bowl.",
							"ingredients": [
								{
									"id": 16015,
									"name": "black beans",
									"localizedName": "black beans",
									"image": "black-beans.jpg"
								},
								{
									"id": 10111333,
									"name": "peppers",
									"localizedName": "peppers",
									"image": "green-pepper.jpg"
								},
								{
									"id": 11168,
									"name": "corn",
									"localizedName": "corn",
									"image": "corn.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 6,
							"step": "Lay out the egg roll wrappers. Smear some of the cilantro lime pesto on the end closest to you, leaving about an inch of the wrapper on the very end.",
							"ingredients": [
								{
									"id": 18368,
									"name": "egg roll wrappers",
									"localizedName": "egg roll wrappers",
									"image": "puff-pastry-squares.jpg"
								},
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 93698,
									"name": "pesto",
									"localizedName": "pesto",
									"image": "basil-pesto.png"
								},
								{
									"id": 9159,
									"name": "lime",
									"localizedName": "lime",
									"image": "lime.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Add a spoon full of the veggies along the line of pesto.",
							"ingredients": [
								{
									"id": 93698,
									"name": "pesto",
									"localizedName": "pesto",
									"image": "basil-pesto.png"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Brush the ends of the wrapper with water, this will help seal the egg roll. Fold the end nearest you over the veggies and the two",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "sides fold in as well.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Roll up the wrapper to the end.",
							"ingredients": [
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Place seam side down on a lined baking sheet that his been brushed with a bit of olive oil to prevent sticking.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								}
							]
						},
						{
							"number": 12,
							"step": "Brush the egg rolls lightly with olive oil as well, this will help get that golden color.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 13,
							"step": "Bake for approx 18 minutes, or until golden and crispy.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 18,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/southwest-egg-rolls-with-cilantro-lime-pesto-660707"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 10,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 4,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 257.61,
			"extendedIngredients": [
				{
					"id": 11043,
					"aisle": "Produce",
					"image": "bean-sprouts.jpg",
					"consistency": "SOLID",
					"name": "bean sprouts",
					"nameClean": "bean sprouts",
					"original": "8 oz. bean sprouts, washed n patted dry",
					"originalName": "bean sprouts, washed n patted dry",
					"amount": 8.0,
					"unit": "oz",
					"meta": [
						"dry",
						"washed"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 226.796,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "2 carrots, shredded or grated",
					"originalName": "carrots, shredded or grated",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"shredded",
						"grated"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 93735,
					"aisle": "Seafood",
					"image": "crabmeat.jpg",
					"consistency": "SOLID",
					"name": "imitation crab",
					"nameClean": "imitation crab",
					"original": "1 lb imitation crab (or the real thing)",
					"originalName": "imitation crab (or the real thing)",
					"amount": 1.0,
					"unit": "lb",
					"meta": [
						"(or the real thing)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 15270,
					"aisle": "Seafood",
					"image": "shrimp.png",
					"consistency": "SOLID",
					"name": "shrimp",
					"nameClean": "shrimp",
					"original": "1/2 lb medium shrimp, shelled & deveined",
					"originalName": "shrimp, shelled & deveined",
					"amount": 0.5,
					"unit": "lb",
					"meta": [
						"shelled",
						"deveined"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 226.796,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves, finely minced (1 tbsp garlic powder)",
					"originalName": "garlic cloves, finely minced (1 tbsp garlic powder)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"finely minced",
						"(1 tbsp garlic powder)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "light-brown-sugar.jpg",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 tsp brown sugar",
					"originalName": "brown sugar",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "dark-brown-sugar.png",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 tsp brown sugar",
					"originalName": "brown sugar",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "green onions",
					"nameClean": "spring onions",
					"original": "2 green onions, finely chopped (green part only)",
					"originalName": "green onions, finely chopped (green part only)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"finely chopped",
						"(green part only)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 18368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "egg roll wrappers",
					"nameClean": "egg roll wrappers",
					"original": "20 (6 or 8-inch) egg roll wrappers",
					"originalName": "20 or 8-inch) egg roll wrappers",
					"amount": 120.0,
					"unit": "8-inch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 120.0,
							"unitShort": "8-inch",
							"unitLong": "8-inchs"
						},
						"metric": {
							"amount": 120.0,
							"unitShort": "8-inch",
							"unitLong": "8-inchs"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "egg",
					"nameClean": "egg",
					"original": "1 beaten egg, for egg wash",
					"originalName": "beaten egg, for egg wash",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"beaten",
						"for egg wash"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "vegetable oil, for frying",
					"originalName": "vegetable oil, for frying",
					"amount": 6.0,
					"unit": "servings",
					"meta": [
						"for frying"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "salt and ground pepper",
					"nameClean": "black pepper",
					"original": "1 tsp salt and ground pepper",
					"originalName": "salt and ground pepper",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 98962,
					"aisle": "Ethnic Foods",
					"image": "fish-sauce.jpg",
					"consistency": "LIQUID",
					"name": "chili sauce",
					"nameClean": "sweet chili sauce",
					"original": "1 cup sweet chili sauce",
					"originalName": "sweet chili sauce",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"sweet"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 255.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 659906,
			"title": "Shrimp & Crab Egg Rolls",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "https://www.foodista.com/recipe/GH36G6M3/shrimp-crab-egg-rolls",
			"image": "https://spoonacular.com/recipeImages/659906-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many Chinese recipes, so give Shrimp & Crab Egg Rolls a try. For <b>$2.58 per serving</b>, you get a hor d'oeuvre that serves 6. One serving contains <b>313 calories</b>, <b>16g of protein</b>, and <b>4g of fat</b>. This recipe is liked by 3 foodies and cooks. It is brought to you by Foodista. If you have shrimp, egg, vegetable oil, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 43%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/shrimp-and-crab-salad-rolls-42721\">Shrimp and Crab Salad Rolls</a>, <a href=\"https://spoonacular.com/recipes/shrimp-and-crab-salad-rolls-1298139\">Shrimp and Crab Salad Rolls</a>, and <a href=\"https://spoonacular.com/recipes/shrimp-and-crab-salad-rolls-1374383\">Shrimp and Crab Salad Rolls</a>.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free",
				"pescatarian"
			],
			"occasions": [],
			"instructions": "8 oz. bean sprouts, washed n patted dry\n2 carrots, shredded or grated\n1 lb imitation crab (or the real thing)\n1/2 lb medium sized shrimp, shelled & deveined\n2 garlic cloves, finely minced (1 tbsp garlic powder)\n1 tsp brown sugar\n2 green onions, finely chopped (green part only)\n20 (6 or 8-inch) egg roll wrappers\n1 beaten egg, for egg wash\nvegetable oil, for frying\n1 tsp salt and ground pepper\n1 cup sweet chili sauce",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "8 oz. bean sprouts, washed n patted dry",
							"ingredients": [
								{
									"id": 11043,
									"name": "bean sprouts",
									"localizedName": "bean sprouts",
									"image": "bean-sprouts.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "2 carrots, shredded or grated",
							"ingredients": [
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "1 lb imitation crab (or the real thing)",
							"ingredients": [
								{
									"id": 93735,
									"name": "imitation crab",
									"localizedName": "imitation crab",
									"image": "crabmeat.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "1/2 lb medium sized shrimp, shelled & deveined",
							"ingredients": [
								{
									"id": 15270,
									"name": "shrimp",
									"localizedName": "shrimp",
									"image": "shrimp.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "2 garlic cloves, finely minced (1 tbsp garlic powder)",
							"ingredients": [
								{
									"id": 10211215,
									"name": "whole garlic cloves",
									"localizedName": "whole garlic cloves",
									"image": "garlic.jpg"
								},
								{
									"id": 1022020,
									"name": "garlic powder",
									"localizedName": "garlic powder",
									"image": "garlic-powder.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "1 tsp brown sugar",
							"ingredients": [
								{
									"id": 19334,
									"name": "brown sugar",
									"localizedName": "brown sugar",
									"image": "dark-brown-sugar.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "2 green onions, finely chopped (green part only)",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "20 (6 or 8-inch) egg roll wrappers",
							"ingredients": [
								{
									"id": 18368,
									"name": "egg roll wrappers",
									"localizedName": "egg roll wrappers",
									"image": "puff-pastry-squares.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "1 beaten egg, for egg wash",
							"ingredients": [
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "vegetable oil, for frying",
							"ingredients": [
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "1 tsp salt and ground pepper",
							"ingredients": [
								{
									"id": 1002030,
									"name": "ground black pepper",
									"localizedName": "ground black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "1 cup sweet chili sauce",
							"ingredients": [
								{
									"id": 98962,
									"name": "sweet chili sauce",
									"localizedName": "sweet chili sauce",
									"image": "fish-sauce.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/shrimp-crab-egg-rolls-659906"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 152,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 14,
			"healthScore": 100,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 2014.86,
			"extendedIngredients": [
				{
					"id": 10023572,
					"aisle": "Meat",
					"image": "fresh-ground-beef.jpg",
					"consistency": "SOLID",
					"name": "ground beef",
					"nameClean": "ground chuck",
					"original": "1 pound ground pork or ground beef",
					"originalName": "ground pork or ground beef",
					"amount": 1.0,
					"unit": "pound",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 15270,
					"aisle": "Seafood",
					"image": "shrimp.png",
					"consistency": "SOLID",
					"name": "shrimps",
					"nameClean": "shrimp",
					"original": "1 cup shrimps,minced",
					"originalName": "shrimps,minced",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1/2 cup onion, minced",
					"originalName": "onion, minced",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 80.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrots",
					"nameClean": "carrot",
					"original": "1/2 cup carrots, minced",
					"originalName": "carrots, minced",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 64.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1/8 cup garlic, minced",
					"originalName": "garlic, minced",
					"amount": 0.125,
					"unit": "cup",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 0.125,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 17.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1/2 teaspoon salt",
					"originalName": "salt",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1/2 teaspoon black pepper",
					"originalName": "black pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "egg",
					"nameClean": "egg",
					"original": "1 egg, beaten",
					"originalName": "egg, beaten",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"beaten"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 6176,
					"aisle": "Ethnic Foods",
					"image": "oyster-sauce.jpg",
					"consistency": "LIQUID",
					"name": "oyster sauce",
					"nameClean": "oyster sauce",
					"original": "1 tablespoon oyster sauce",
					"originalName": "oyster sauce",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 6179,
					"aisle": "Ethnic Foods",
					"image": "asian-fish-sauce.jpg",
					"consistency": "LIQUID",
					"name": "fish sauce",
					"nameClean": "fish sauce",
					"original": "1 tablespoon Fish Sauce",
					"originalName": "Fish Sauce",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "wonton-wrappers.jpg",
					"consistency": "SOLID",
					"name": "lumpia wrappers",
					"nameClean": "wonton wrappers",
					"original": "Lumpia Wrappers (I use 125 mmx125mm size)",
					"originalName": "Lumpia Wrappers (I use mmx125mm size)",
					"amount": 125.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 125.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 125.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10018368,
					"aisle": "Ethnic Foods",
					"image": "puff-pastry-squares.jpg",
					"consistency": "SOLID",
					"name": "lumpia wrappers",
					"nameClean": "wonton wrappers",
					"original": "Lumpia Wrappers (I use 125 mmx125mm size)",
					"originalName": "Lumpia Wrappers (I use mmx125mm size)",
					"amount": 125.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 125.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 125.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "2 tablespoons Olive oil for sauteeing",
					"originalName": "Olive oil for sauteeing",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"for sauteeing"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "2 cups Vegetable Oil for frying",
					"originalName": "Vegetable Oil for frying",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"for frying"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 436.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 642863,
			"title": "Filipino Egg Rolls",
			"readyInMinutes": 45,
			"servings": 1,
			"sourceUrl": "https://www.foodista.com/recipe/JHNRHXPC/filipino-egg-rolls",
			"image": "https://spoonacular.com/recipeImages/642863-556x370.jpg",
			"imageType": "jpg",
			"summary": "Filipino Egg Rolls might be a good recipe to expand your hor d'oeuvre recipe box. This dairy free recipe serves 1 and costs <b>$20.15 per serving</b>. One portion of this dish contains around <b>227g of protein</b>, <b>226g of fat</b>, and a total of <b>5264 calories</b>. Head to the store and pick up pepper, garlic, salt, and a few other things to make it today. A couple people really liked this Chinese dish. 14 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 88%</b>, which is excellent. <a href=\"https://spoonacular.com/recipes/filipino-egg-rolls-94117\">Filipino Egg Rolls</a>, <a href=\"https://spoonacular.com/recipes/filipino-egg-rolls-1220693\">Filipino Egg Rolls</a>, and <a href=\"https://spoonacular.com/recipes/pandesal-filipino-breakfast-rolls-1635155\">Pandesal (Filipino Breakfast Rolls)</a> are very similar to this recipe.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "In a pan, saut garlic in olive oil until light brown.\nAdd onions. Saute until almost translucent.\nAdd the ground pork and sprinkle with  tsp salt and  tsp blackpepper. Stir-fry until no more pink color is showing.\nAdd carrots, oyster sauce and fish sauce.  Mix well.\nAdd shrimps and cook until pink then add egg. Mix well and remove from heat. Allow to completely cool down. Drain if necessary. Set aside the sauce.\nThe lumpia wrappers are very tightly packed, so be careful when pulling them apart.  Spoon 1 Tbsp mixture on the lower edge of the wrapper leaving 1 inch edge. Begin to fold egg roll like an envelope: first, fold over the lower 1 inch edge over the filing, then the left edge, then the right edge, then roll up to the top edge. To seal the wrapper just moisten the top edge with water. I used the sauce I got from draining the cooked mixture.\nHeat vegetable oil in a large, deep frying pan over medium high heat. Place egg roll one at a time into hot oil, with the seam down (this will keep it from unraveling) and then quickly turn the egg roll to ensure the skin crisp up and does not stick to other egg rolls in the pan. Adjust heat so that the oil is bubbling gently and not too vigorously around the egg rolls. Each egg roll will take about 5 minutes to cook. Shake the egg roll over the pan to help remove the excess oil. Place egg roll on layers of paper towels to drain.\nServe the lumpia or Filipino egg rolls with your favorite sweet and sour sauce or a spicy vinegar sauce.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a pan, saut garlic in olive oil until light brown.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add onions.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Saute until almost translucent.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add the ground pork and sprinkle with  tsp salt and  tsp blackpepper. Stir-fry until no more pink color is showing.",
							"ingredients": [
								{
									"id": 10219,
									"name": "ground pork",
									"localizedName": "ground pork",
									"image": "meat-ground.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add carrots, oyster sauce and fish sauce.",
							"ingredients": [
								{
									"id": 6176,
									"name": "oyster sauce",
									"localizedName": "oyster sauce",
									"image": "oyster-sauce.jpg"
								},
								{
									"id": 6179,
									"name": "fish sauce",
									"localizedName": "fish sauce",
									"image": "asian-fish-sauce.jpg"
								},
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Mix well.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Add shrimps and cook until pink then add egg.",
							"ingredients": [
								{
									"id": 15270,
									"name": "shrimp",
									"localizedName": "shrimp",
									"image": "shrimp.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Mix well and remove from heat. Allow to completely cool down.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Drain if necessary. Set aside the sauce.",
							"ingredients": [
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "The lumpia wrappers are very tightly packed, so be careful when pulling them apart.  Spoon 1 Tbsp mixture on the lower edge of the wrapper leaving 1 inch edge. Begin to fold egg roll like an envelope: first, fold over the lower 1 inch edge over the filing, then the left edge, then the right edge, then roll up to the top edge. To seal the wrapper just moisten the top edge with water. I used the sauce I got from draining the cooked mixture.",
							"ingredients": [
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Heat vegetable oil in a large, deep frying pan over medium high heat.",
							"ingredients": [
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 12,
							"step": "Place egg roll one at a time into hot oil, with the seam down (this will keep it from unraveling) and then quickly turn the egg roll to ensure the skin crisp up and does not stick to other egg rolls in the pan. Adjust heat so that the oil is bubbling gently and not too vigorously around the egg rolls. Each egg roll will take about 5 minutes to cook. Shake the egg roll over the pan to help remove the excess oil.",
							"ingredients": [
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								},
								{
									"id": 0,
									"name": "shake",
									"localizedName": "shake",
									"image": ""
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 13,
							"step": "Place egg roll on layers of paper towels to drain.",
							"ingredients": [
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": [
								{
									"id": 405895,
									"name": "paper towels",
									"localizedName": "paper towels",
									"image": "paper-towels.jpg"
								}
							]
						},
						{
							"number": 14,
							"step": "Serve the lumpia or Filipino egg rolls with your favorite sweet and sour sauce or a spicy vinegar sauce.",
							"ingredients": [
								{
									"id": 0,
									"name": "sweet and sour sauce",
									"localizedName": "sweet and sour sauce",
									"image": ""
								},
								{
									"id": 2053,
									"name": "vinegar",
									"localizedName": "vinegar",
									"image": "vinegar-(white).jpg"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/filipino-egg-rolls-642863"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 36,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 39,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 219.84,
			"extendedIngredients": [
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen green peas (thawed)",
					"originalName": "frozen green peas (thawed)",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"green",
						"frozen",
						"thawed",
						"()"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen green peas (thawed)",
					"originalName": "frozen green peas (thawed)",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"green",
						"frozen",
						"thawed",
						"()"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen green peas (thawed)",
					"originalName": "frozen green peas (thawed)",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"green",
						"frozen",
						"thawed",
						"()"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 20444,
					"aisle": "Pasta and Rice",
					"image": "uncooked-white-rice.png",
					"consistency": "SOLID",
					"name": "japanese rice",
					"nameClean": "rice",
					"original": "3 cups cooked Japanese rice",
					"originalName": "cooked Japanese rice",
					"amount": 3.0,
					"unit": "cups",
					"meta": [
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 555.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrot",
					"nameClean": "carrot",
					"original": "1 small carrot, finely chopped",
					"originalName": "carrot, finely chopped",
					"amount": 1.0,
					"unit": "small",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves, finely chopped",
					"originalName": "garlic cloves, finely chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 5062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breast",
					"nameClean": "chicken breast",
					"original": "1/4 pound boneless chicken breast, cut into small cubes",
					"originalName": "boneless chicken breast, cut into small cubes",
					"amount": 0.25,
					"unit": "pound",
					"meta": [
						"boneless",
						"cut into small cubes"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 113.398,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "2 tablespoons neutral oil (canola, grapeseed)",
					"originalName": "neutral oil (canola, grapeseed)",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"neutral",
						"(canola, grapeseed)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 99288,
					"aisle": "Condiments",
					"image": "dark-sauce.jpg",
					"consistency": "SOLID",
					"name": "tonkatsu sauce",
					"nameClean": "hp sauce",
					"original": "1 tablespoon tonkatsu sauce (vegetable and fruit sauce. I use Bull-Dog)",
					"originalName": "tonkatsu sauce (vegetable and fruit sauce. I use Bull-Dog)",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"(vegetable and fruit sauce. I use Bull-Dog)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 16124,
					"aisle": "Condiments",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "soy sauce",
					"original": "2 tablespoons soy sauce",
					"originalName": "soy sauce",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1/4 teaspoon freshly ground black pepper",
					"originalName": "freshly ground black pepper",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [
						"black",
						"freshly ground"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1082047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "kosher salt",
					"nameClean": "kosher salt",
					"original": "1/4 teaspoon kosher salt",
					"originalName": "kosher salt",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "eggs",
					"nameClean": "egg",
					"original": "2 eggs",
					"originalName": "eggs",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 648474,
			"title": "Japanese Fried Rice",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/D26LR47Y/japanese-fried-rice",
			"image": "https://spoonacular.com/recipeImages/648474-556x370.jpg",
			"imageType": "jpg",
			"summary": "Japanese Fried Rice is a <b>gluten free and dairy free</b> main course. One portion of this dish contains roughly <b>44g of protein</b>, <b>22g of fat</b>, and a total of <b>1358 calories</b>. This recipe serves 2 and costs $2.2 per serving. 3 people were impressed by this recipe. If you have eggs, garlic cloves, carrot, and a few other ingredients on hand, you can make it. It is a <b>reasonably priced</b> recipe for fans of Chinese food. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 79%</b>, which is solid. <a href=\"https://spoonacular.com/recipes/japanese-fried-rice-1213101\">Japanese Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/japanese-fried-rice-926131\">Japanese Fried Rice – チァ-ハン</a>, and <a href=\"https://spoonacular.com/recipes/japanese-fried-rice-yakimeshi-1785807\">Japanese Fried Rice - Yakimeshi</a> are very similar to this recipe.",
			"cuisines": [
				"Chinese",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "In a pan over medium heat, add oil, garlic and cook for a minute. Add chopped carrots and cook for 2 minutes. Add chicken and cook for 2-3 minutes, until the chicken is cooked through.\nAdd rice and peas and mix well. Add soy sauce, tonkatsu sauce, black pepper and salt, and mix well. Push the rice to one side and break the eggs on the clear side. Slowly scramble the eggs and incorporate with the rice. Serve!",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a pan over medium heat, add oil, garlic and cook for a minute.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add chopped carrots and cook for 2 minutes.",
							"ingredients": [
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add chicken and cook for 2-3 minutes, until the chicken is cooked through.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add rice and peas and mix well.",
							"ingredients": [
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add soy sauce, tonkatsu sauce, black pepper and salt, and mix well. Push the rice to one side and break the eggs on the clear side. Slowly scramble the eggs and incorporate with the rice.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 16124,
									"name": "soy sauce",
									"localizedName": "soy sauce",
									"image": "soy-sauce.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Serve!",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/japanese-fried-rice-648474"
		}
	]
}
];

for (const category of chinesedata) {
	for (const recipe of category.recipes) {
	  recipe.cultureFood = category.cultureFood;
	  recipe.cultureTradition = category.cultureTradition;
	}
  }

// Iterate over each recipe
for (const recipe of americandata[0].recipes) {
	const combinedIngredients = [];
  
	// Iterate over each extended ingredient
	for (const ingredient of recipe.extendedIngredients) {
	  // Push the "original" field data into the combinedIngredients array
	  combinedIngredients.push(ingredient.original);
	}
  
	// Join the combinedIngredients array into a single string
	recipe.combinedIngredients = combinedIngredients.join(', ');
}

const seedChinese = () => Chinese.bulkCreate(chinesedata);

module.exports = seedChinese;
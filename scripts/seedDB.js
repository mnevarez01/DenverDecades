const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
const contentSeed = [
  {
    year: "1858",
    author: "Kim Tompkins",
    title: `Denver is Born`,
    content:
      `In the summer of 1858, a small group of prospectors from Georgia crossed the great plains of the Colorado Territory and made a region-changing discovery at the base of the Rocky Mountains. Gold. And although not much of the precious metal was found, the mere whisper of the word was enough to start a veritable stampede into the region. After all, the California Gold Rush had occurred just nine years earlier.
      It wasn't long before tents, tepees, wagons, lean-tos, and crudely constructed log cabins lined the banks of the South Platte River as prospectors and fortune-seekers poured into the area. They came from all over the country, traveling on foot, in covered wagons, by horseback, and even pushing their belongings in wheelbarrows. Pikes Peak, a 14,000-foot mountain to the south of the mining camp served as both a landmark and a rallying cry for weary travelers. The "Pikes Peak or Bust!" gold rush was in full force.
      However, gold wasn't the only way to strike it rich in the boomtown that was springing up on the banks of the South Platte. Those who arrived early enough could simply stake out a claim of land, lay out city streets, and then sell the lots to those arriving after them. General William H. Larimer didn't arrive early but followed the plan perfectly. He claim-jumped the land on the eastern side of Cherry Creek, laid out a city and, in hopes of gaining political favor, named the city after Kansas Territorial governor James Denver. What he didn't know was that Denver had already resigned.  
      `,
    date: new Date(Date.now())
  },

  {
    year: "1861",
    author: "Kim Tompkins",
    title: `Denver becomes part of the Territory of Colorado`,
    content: `Denver was an organized incorporated territory of the United States that existed from February 28, 1861, until August 1, 1876, when it was admitted to the Union as the State of Colorado. `,
    date: new Date(Date.now())
  },

  {
    year: "1861",
    author: "Kim Tompkins",
    title: `The American Civil War broke out.`,
    content: ` Most Denverites were from the North and their support for the Union drove many Southerners from town, including Denver's first mayor John C. Moore. William Gilpin, Colorado's first territorial governor, organized Colorado's volunteer militia, and sent them south in February 1862 to fight Confederate Texans at the Battle of Glorieta Pass. With resources tied up in the war there was little left over for mines, farms, and infrastructure, and Denver stagnated.`,
    date: new Date(Date.now())
  },
  {
    year: "1864",
    author: "Kim Tompkins",
    title: `the University of Denver is founded`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1870",
    author: "Kim Tompkins",
    title: `Cheyenne-Denver and Kansas-Denver trains begin operating.`,
    content: ``,
    date: new Date(Date.now())
  },

  {
    year: "1871",
    author: "Kim Tompkins",
    title: `The Denver Horse Railroad begins operating.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1873",
    author: "Kim Tompkins",
    title: `Palace Theater Opens.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1875",
    author: "Kim Tompkins",
    title: `East High School opens.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1876",
    author: "Kim Tompkins",
    title: `Denver becomes part of the new State of Colorado.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1881",
    author: "Kim Tompkins",
    title: `City Park is established.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1883",
    author: "Kim Tompkins",
    title: `First Saint Patrick's Day parade is held.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1886",
    author: "Kim Tompkins",
    title: `Ugly Law put into effec.`,
    content: `The unsightly beggar ordinances, in retrospect also dubbed ugly laws.[1] These laws deemed it illegal for "any person, who is diseased, maimed, mutilated or deformed in any way, so as to be an unsightly or disgusting object, to expose himself or herself to public view was illegal.`,
    date: new Date(Date.now())
  },
  {
    year: "1890",
    author: "Kim Tompkins",
    title: `Elich Gardens amusement park opens.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1892",
    author: "Kim Tompkins",
    title: `Evening Post Newspaper goes into print.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1892",
    author: "Kim Tompkins",
    title: `Brown Palace Hotel is built.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1893",
    author: "Kim Tompkins",
    title: `The Denver Depression begins.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1894",
    author: "Kim Tompkins",
    title: `Colorado State Capitol Building opens.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1896",
    author: "Kim Tompkins",
    title: `Denver Zoo is founded.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1902",
    author: "Maria Nevarez",
    title: `Constitutional amendment permits towns of 2,000 to adopt "Home Rule"; Denver becomes home rule city. `,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1902",
    author: "Maria Nevarez",
    title: `Construction of the Moffat Railroad begin. `,
    content: ` David H. Moffat and associates begin construction of Moffat Railroad over the Continental Divide. Completed to Steamboat Springs in 1908 and to Craig in 1913.
    `,
    date: new Date(Date.now())
  },
  {
    year: "1906",
    author: "Maria Nevarez",
    title: `With Ben B. Lindsey as Judge, Denver Juvenile Court opens - the first such court in the United States.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1906",
    author: "Maria Nevarez",
    title: `United States Mint, Denver, issues first coins.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1906",
    author: "Maria Nevarez",
    title: `National Western Stock Show is born`,
    content: `March 12, National Western Stock Show is born with chartering of Western Stock Show Association following successful showing of about 60 head of cattle and horses and a few sheep and hogs in a makeshift tent at Stockyards`,
    date: new Date(Date.now())
  },

  {
    year: "1909",
    author: "Maria Nevarez",
    title: `Colorado attains first rank among states in irrigation area with 2,790,000 acres under irrigation. Gunnison water tunnel completed by Reclamation Service and opened, on September 23, by President William Howard Taft at the tunnel site. Western State Teachers College opens at Gunnison.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1909",
    author: "Maria Nevarez",
    title: `Gunnison water tunnel completed by Reclamation Service and opened, on September 23, by President William Howard Taft at the tunnel site.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1911",
    author: "Maria Nevarez",
    title: `Colorado National Monument west of Grand Junction, created by Presidential order.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1916",
    author: "Maria Nevarez",
    title: `Colorado adopts prohibition.Mining of tungsten causes flurry in the Boulder-Nederland area.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1916",
    author: "Maria Nevarez",
    title: `Mining of tungsten causes flurry in the Boulder-Nederland area.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1917",
    author: "Maria Nevarez",
    title: `April 6: Congress declares war on Germany and many Coloradans volunteer for service. `,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1917",
    author: "Maria Nevarez",
    title: `William F. "Buffalo Bill" Cody, Famous Indian scout, dies and is buried on Lookout Mountain, west of Denver.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1917",
    author: "Maria Nevarez",
    title: `Colorado reaches maximum mineral production, more than $80,000,000.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1919",
    author: "Maria Nevarez",
    title: ` Post-war inflation`,
    content: `Post-war inflation brings higher prices to farmers and producers; prices of farmland high; wages high; boom times everywhere.`,
    date: new Date(Date.now())
  },
  {
    year: "1920",
    author: "Maria Nevarez",
    title: `Employees of Denver Tramway company go on strike. `,
    content: `Aroused by editorials in The Denver Post, strikers raid Post building and do much damage to property.`,
    date: new Date(Date.now())
  },
  {
    year: "1923",
    author: "Maria Nevarez",
    title: `Oil discovered in Wellington field north of Fort Collins; flurry of oil stock promotion follows.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1925",
    author: "Maria Nevarez",
    title: `dams State Teachers College at Alamosa and junior colleges at Grand Junction and Trinidad are opened.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1931",
    author: "Maria Nevarez",
    title: `Population reaches over one million.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1938",
    author: "Maria Nevarez",
    title: `U.S. Lowry Air Force Base established.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1934",
    author: "Maria Nevarez",
    title: `Denver Symphony Orchestra established.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1940",
    author: "Vanessa Pham",
    title: `Miliary Enlistments Soar as the United Sates enters World War II`,
    content: `As the United States enters War World II, Denver recruiting offices are swamped by over 2,000 enlistments during the month of December.`,
    date: new Date(Date.now())
  },
  {
    year: "1942",
    author: "Vanessa Pham",
    title: `The federal government established Amache - Japanese-American camp. `,
    content: `a camp for Japanese-Americans who were interned and relocated from their homes on the West Coast.`,
    date: new Date(Date.now())
  },
  {
    year: "1945",
    author: "Vanessa Pham",
    title: `Military installations and scientific institutions continue to develop while many veterans relocate to Colorado. `,
    content: `The presence of the federal government in Colorado grows and these changes cause a steady increase in population. (Colorado.gov)`,
    date: new Date(Date.now())
  },
  {
    year: "1948",
    author: "Vanessa Pham",
    title: `Mile High Stadium (originally Bears Stadium) opened `,
    content: `becoming the home for the Denver Bears/Zephyrs baseball team, Colorado Rockies, Colorado Rapids, the Denver Gold of the U.S. Football League and the Denver Broncos. In 2001, Mile High Stadium was closed and in 2002 the stadium was demolished. (Wikipedia)`,
    date: new Date(Date.now())
  },
  {
    year: "1951",
    author: "Vanessa Pham",
    title: `Denver Coliseum opens `,
    content: `it has hosted many celebrities and artists including: Elvis Presley, The Grateful Dead, The Who, Frank Sinatra, The Rolling Stones, Led Zeppelin, Steven Wonder, The Jackson 5, Black Sabbath and more. Santana has played the Denver Coliseum six times, securing the title of House Band.`,
    date: new Date(Date.now())
  },
  {
    year: "1952",
    author: "Vanessa Pham",
    title: `American Civil Liberties Union (ACLU), a nonprofit organization,  are headquartered in Denver.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1956",
    author: "Vanessa Pham",
    title: `Rocky Mountain PBS (KRMA-TV) begins broadcasting.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1958",
    author: "Vanessa Pham",
    title: `Air Force Academy is built near Colorado Springs`,
    content: `The first class graduated in June 1959. (Colorado.gov)`,
    date: new Date(Date.now())
  },
  {
    year: "1960",
    author: "Vanessa Pham",
    title: `Colorado gets the Denver Broncos professional football team, which eventually goes on to win three Super Bowls. (Colorado.gov)`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1962",
    author: "Vanessa Pham",
    title: `Disposition of poisonous wastes into a deep well at the Rocky Mountain Arsenal results in earthquakes and hundreds of tremors around the Denver area.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1965",
    author: "Vanessa Pham",
    title: `The Metropolitan State University of Denver (MSU) is established.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1967",
    author: "Vanessa Pham",
    title: `The Denver Rockets become Colorado’s professional American Basketball Association team. In 1974, they were renamed the Denver Nuggets.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1967",
    author: "Vanessa Pham",
    title: `August 9th, a 5.3 Mb earthquake affected the Denver area with a maximum Mercalli intensity of VII (very strong). `,
    content: `This was the largest in a swarm of over 300 similar events that spanned more than a year.`,
    date: new Date(Date.now())
  },
  {
    year: "1968",
    author: "Vanessa Pham",
    title: `William H. McNichols, Jr. became mayor and served until 1983.`,
    content: ` McNichols attended the University of Colorado-Boulder and University of Alabama, though he did not receive a degree from either institution. During WWII, he enlisted in the Army and received three battle stars and the Purple Heart.`,
    date: new Date(Date.now())
  },
  {
    year: "1969",
    author: "Vanessa Pham",
    title: `Chicano Youth Liberation Conference is held in Denver.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1970",
    author: "Vanessa Pham",
    title: `The population of Denver reaches over a half a million people, according to the US Census Bureau.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1972",
    author: "Vanessa Pham",
    title: `A ‘brown cloud’ develops over the Front Range`,
    content: ` Coloradans become concerned over the consequences of pollution and overselling Colorado and reject hosting the 1976 Winter Olympics as a result.`,
    date: new Date(Date.now())
  },
  {
    year: "1974",
    author: "Vanessa Pham",
    title: `University of Colorado Denver established.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1976",
    author: "Vanessa Pham",
    title: `The Big Thompson River floods killing more than 145 people`,
    content: `A cloudburst on the Big Thompson River results in a massive flood in Larimer County, killing more than 145 people.`,
    date: new Date(Date.now())
  },
  {
    year: "1979",
    author: "Vanessa Pham",
    title: ` Denver Firefighters Museum established.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1980",
    author: "Andrew Werner",
    title: `Population reaches 492,365.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1982",
    author: "Andrew Werner",
    title: `16th Street Mall (pedestrian way) opens`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1982",
    author: "Andrew Werner",
    title: `Great American Beer Festival begins`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1982",
    author: "Andrew Werner",
    title: `Christmas Eve storm brought a record of 23.2 feet of snow`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1983",
    author: "Andrew Werner",
    title: `Federico Peña becomes mayor.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1988",
    author: "Andrew Werner",
    title: `Wynkoop Brewing Company in business.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1988",
    author: "Andrew Werner",
    title: `Wynkoop Brewing Company in business.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1988",
    author: "Andrew Werner",
    title: `Wynkoop Brewing Company in business.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1990",
    author: "Andrew Werner",
    title: `Population: 467,610`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1991",
    author: "Andrew Werner",
    title: `Wellington Webb becomes mayor`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1993",
    author: "Andrew Werner",
    title: `Chipotle Mexican Grill in business.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1995",
    author: "Andrew Werner",
    title: `Denver International Airport begins operating`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1995",
    author: "Andrew Werner",
    title: `Coors Field opens`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1995",
    author: "Andrew Werner",
    title: `Colorado Avalanche wins the Stanley Cup`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1997",
    author: "Andrew Werner",
    title: `Denver Broncos win the Super Bowl `,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "1999",
    author: "Andrew Werner",
    title: `Pepsi Center arena and Colorado's Ocean Journey aquarium open. `,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2001",
    author: "Andrew Werner",
    title: `Sports Authority field was opened `,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2003",
    author: "Andrew Werner",
    title: `John Hickenlooper becomes mayor`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2005",
    author: "Andrew Werner",
    title: `Marijuana legalization measure approved.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2008",
    author: "Andrew Werner",
    title: `Blue Mustang was unveiled at Denver International Airport`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2010",
    author: "Andrew Werner",
    title: `B-cycle bike share launched.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2011",
    author: "Andrew Werner",
    title: `Michael Hancock becomes mayor.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2012",
    author: "Andrew Werner",
    title: `Denver Comic Con begins `,
    date: new Date(Date.now())
  },
  {
    year: "2012",
    author: "Andrew Werner",
    title: `Recreational marijuana is legalized.`,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2015",
    author: "Andrew Werner",
    title: `Broncos win the Super Bowl. `,
    content: ``,
    date: new Date(Date.now())
  },
  {
    year: "2020",
    author: "Andrew Werner",
    title: `Denver shuts down due to COVID-19`,
    content: ``,
    date: new Date(Date.now())
  }
]

db.Content
  .remove({})
  .then(() => db.Content.collection.insertMany(contentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const ImageSeed = [
  {
    year: "1870",
    image: "1870.jpg"
  },
  {
    year: "1880",
    image: "1880.jpg"
  },
  {
    year: "1890",
    image: "1890.jpg"
  },
  {
    year: "1900",
    image: "1900.png"
  },
  {
    year: "1910",
    image: "1910.png"
  },
  {
    year: "1870",
    image: "1870.jpg"
  },
  {
    year: "1920",
    image: "1920.jpg"
  },
  {
    year: "1930",
    image: "1930.jpg"
  },
  {
    year: "1940",
    image: "1940.jpg"
  },
  {
    year: "1870",
    image: "1870.jpg"
  },
  {
    year: "1950",
    image: "1950.jpg"
  },
  {
    year: "1870",
    image: "1870.jpg"
  },
  {
    year: "1960",
    image: "1870.jpg"
  },
  {
    year: "1960",
    image: "1870.jpg"
  },
  {
    year: "1970",
    image: "1970.jpg"
  },
  {
    year: "1980",
    image: "1980.jpg"
  },
  {
    year: "1990",
    image: "1990.jpg"
  },
  {
    year: "2000",
    image: "2000.jpg"
  },
  {
    year: "2010",
    image: "2010.jpg"
  },
  {
    year: "2020",
    image: "2020.jpg"
  },
];
db.Images
  .remove({})
  .then(() => db.Images.collection.insertMany(ImageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
const EditSeed = [
  {
    content_id: "5ed405a903a586637cdad0f7",
    userName: "Kim Tompkins",
    date: new Date(Date.now())
  }
];
db.Edit
  .remove({})
  .then(() => db.Edit.collection.insertMany(EditSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

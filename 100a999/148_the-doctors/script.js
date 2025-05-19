// I wanted to avoid using JS but there is no way to "uncheck" a radio button with CSS alone :(

console.clear();

const doctorTemplate = document.querySelector("#tpl-character");
const doctorContainer = document.querySelector("#the-doctors");

const THE_DOCTORS = [
  {
    doctor_id: 1,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/1-avatar.png",
    doctor_name: "The 1st Doctor",
    doctor_title: "The 1st Doctor",
    header_img_url:
      "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/1-bg.png",
    header_img_alt: "The Tardis",
    actor_name: "William Hartnell",
    panel_1_content:
      "The First Doctor appeared to be a frail old man but don't be fooled. He played deadly games with the Celestial Toymaker, he fooled Roman emperors and French revolutionaries and foiled everything the evil Daleks could throw at him.",
    stats: {
      Actor: "William Hartnell",
      "Start Date": "1963-11-23",
      "End Date": "1966-10-29",
      Episodes: 134,
      Seasons: 4,
    },
    characters: {
      companions: [
        "Susan Foreman (Carole Ann Ford)",
        "Barbara Wright (Jacqueline Hill)",
        "Ian Chesterton (William Russell)",
      ],
      enemies: ["Daleks", "Cybermen", "The Master"],
    },
  },
  {
    doctor_id: 2,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/2-avatar.png",
    doctor_name: "The 2nd Doctor",
    doctor_title: "2nd Doctor",
    header_img_url:
      "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/2-avatar.png",
    header_img_alt: "",
    actor_name: "Patrick Troughton",
    panel_1_content:
      " The Second Doctor was very different to his predecessor. A more playful attitude disguised dark undercurrents and a sharp mind. He was famous for freezing the emotionless Cybermen into their ancient tombs but he was forced into exile after being tried for interference by the the Time Lords.",
    stats: {
      Actor: "Patrick Troughton",
      "Start Date": "1966-10-29",
      "End Date": "1969-06-21",
      Episodes: 119,
      Seasons: 3,
    },
    characters: {
      companions: [
        "Jamie McCrimmon (Frazer Hines)",
        "Victoria Waterfield (Deborah Watling)",
        "Zoe Heriot (Wendy Padbury)",
      ],
      enemies: [
        "Daleks",
        "Cybermen",
        "The Great Intelligence",
        "The Ice Warriors",
        "The Yeti",
      ],
    },
  },
  {
    doctor_id: 3,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/3-avatar.png",
    doctor_name: "The 3rd Doctor",
    doctor_title: "The 3rd Doctor",
    header_img_url:
      "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/3-avatar.png",
    header_img_alt: "Third Doctor's world",
    actor_name: "Jon Pertwee",
    panel_1_content:
      "The Third Doctor began his exile on Earth with a new face. He was confident, bold and brash, but with a soft fatherly side. He helped the extra-terrestrial taskforce Unit combat living plastic Autons, Sea Devils and polluted giant green maggots, as well as fellow renegade Time Lord, the Master.",
    stats: {
      Actor: "Jon Pertwee",
      "Start Date": "1970-01-03",
      "End Date": "1974-06-08",
      Episodes: 128,
      Seasons: 5,
    },
    characters: {
      companions: [
        "Liz Shaw (Caroline John)",
        "Jo Grant (Katy Manning)",
        "Sarah Jane Smith (Elisabeth Sladen)",
      ],
      enemies: ["The Master", "Autons", "Sontarans", "Silurians", "Sea Devils"],
    },
  },
  {
    doctor_id: 4,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-4.jpg",
    doctor_name: "The 4th Doctor",
    doctor_title: "4th Doctor",
    header_img_url:
      "https://www.bbc.co.uk/staticarchive/94c5a39081b2c8543f6fde679e2b87d8d99c7cde.jpg",
    header_img_alt: "",
    actor_name: "Tom Baker",
    panel_1_content:
      "From witnessing the genesis of the Daleks to preventing the death of the universe at Logopolis, the Fourth Doctor was an adventurer on an epic scale. It was this incarnation of the Doctor that found and reassembled the Key to Time, and was invested as Lord President of the High Council of Time Lords.",
    stats: {
      Actor: "Tom Baker",
      "Start Date": "1974-12-28",
      "End Date": "1981-03-21",
      Episodes: 172,
      Seasons: 7,
    },
    characters: {
      companions: [
        "Sarah Jane Smith (Elisabeth Sladen)",
        "Harry Sullivan (Ian Marter)",
        "Leela (Louise Jameson)",
        "K9 (John Leeson)",
        "Romana (Mary Tamm / Lalla Ward)",
      ],
      enemies: [
        "Davros",
        "Daleks",
        "Cybermen",
        "Zygons",
        "Sutekh",
        "The Black Guardian",
      ],
    },
  },
  {
    doctor_id: 5,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-5.jpg",
    doctor_name: "The 5th Doctor",
    doctor_title: "5th Doctor",
    header_img_url:
      "https://i.pinimg.com/474x/64/e0/d4/64e0d4bebebbc38357fc0bcfc84bf2af.jpg",
    header_img_alt: "",
    actor_name: "Peter Davison",
    panel_1_content:
      "Clever, considered and kind, the Fifth Doctor's world was one of fascination and science. And it was in this fifth body that the Doctor was reunited with his past selves to fight in the Death Zone on Gallifrey.",
    stats: {
      Actor: "Peter Davison",
      "Start Date": "1982-01-04",
      "End Date": "1984-03-16",
      Episodes: 69,
      Seasons: 3,
    },
    characters: {
      companions: [
        "Adric (Matthew Waterhouse)",
        "Nyssa (Sarah Sutton)",
        "Tegan Jovanka (Janet Fielding)",
        "Vislor Turlough (Mark Strickson)",
        "Peri Brown (Nicola Bryant)",
      ],
      enemies: [
        "The Master",
        "The Mara",
        "Cybermen",
        "Daleks",
        "The Black Guardian",
      ],
    },
  },
  {
    doctor_id: 6,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-6.jpg",
    doctor_name: "The 6th Doctor",
    doctor_title: "6th Doctor",
    header_img_url:
      "https://www.bbc.co.uk/staticarchive/c27277a035209ed1754ec9cc777240e99bc24439.jpg",
    header_img_alt: "",
    actor_name: "Colin Baker",
    panel_1_content:
      "The Sixth Doctor was an explosion of colours, words and emotions. Passionate and sometimes quick to anger, this was a Doctor you did not want to make enemies with. He tangled with the greed of the slimy Sil, and defeated the amoral Gallifreyan scientist known only as the Rani.",
    stats: {
      Actor: "Colin Baker",
      "Start Date": "1984-03-22",
      "End Date": "1986-12-06",
      Episodes: 31,
      Seasons: 3,
    },
    characters: {
      companions: [
        "Peri Brown (Nicola Bryant)",
        "Melanie Bush (Bonnie Langford)",
      ],
      enemies: ["The Master", "Daleks", "Cybermen", "The Rani", "The Valeyard"],
    },
  },
  {
    doctor_id: 7,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-7.jpg",
    doctor_name: "The 7th Doctor",
    doctor_title: "7th Doctor",
    header_img_url:
      "https://www.bbc.co.uk/staticarchive/98644454b97ba5929cf63af27ce83ffb8d0ab72f.jpg",
    header_img_alt: "",
    actor_name: "Sylvester McCoy",
    panel_1_content:
      "The seventh incarnation of the Doctor was both a spoon-playing clown and a master of deep dark secrets. He toppled empires in a single night, entertained in the circus of the Gods of Ragnarok and played chess with the ancient and evil Fenric.",
    stats: {
      Actor: "Sylvester McCoy",
      "Start Date": "1987-09-07",
      "End Date": "1996-05-27",
      Episodes: 42,
      Seasons: 3,
    },
    characters: {
      companions: ["Melanie Bush (Bonnie Langford)", "Ace (Sophie Aldred)"],
      enemies: ["The Master", "The Rani", "Daleks", "Cybermen", "Fenric"],
    },
  },
  {
    doctor_id: 8,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-8.jpg",
    doctor_name: "The 8th Doctor",
    doctor_title: "8th Doctor",
    header_img_url:
      "https://www.bbc.co.uk/staticarchive/2e784be858f2cab52894007fa45d27b9e24f56f5.jpg",
    header_img_alt: "",
    actor_name: "Paul McGann",
    panel_1_content:
      "The Doctor regenerated into his eighth form in a hospital, on December 31, 1999 and teamed up with Grace Holloway to save the world from being pulled inside-out by the Master’s hijacking of the Tardis. Paul McGann has only played the Doctor on screen a handful of times; once in a 1996 Doctor Who film, a special clip for the 50th anniversary in 2013, and also during Jodie Whittaker's final episode in 2022.",
    stats: {
      Actor: "Paul McGann",
      "Start Date": "1996-05-27",
      "End Date": "2013-11-14",
      Episodes: 2,
      Seasons: 0,
    },
    characters: {
      companions: ["Grace Holloway (Daphne Ashbrook)"],
      enemies: ["The Master"],
    },
  },
  {
    doctor_id: "war",
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-9.jpg",
    doctor_name: "The War Doctor",
    doctor_title: "The War Doctor",
    header_img_url:
      "https://imageio.forbes.com/blogs-images/reehines/files/2015/10/John-Hurt-as-the-Doctor.jpg",
    header_img_alt: "",
    actor_name: "John Hurt",
    panel_1_content:
      'Although not technically classed as an official Doctor, The War Doctor\'s origin is explained in the mini-episode "The Night of the Doctor" whereby the eighth Doctor wishes to regenerate as a Warrior, instead of a Doctor. This is confirmed when he regenerates as John Hurt, whose first words are "Doctor no more." He then joins the tenth and eleventh Doctors in an attempt to stop the war on their home planet of Gallifrey.',
    stats: {
      Actor: "John Hurt",
      "Start Date": "2013-11-23",
      "End Date": "2013-11-23",
      Episodes: 2, // "The Day of the Doctor" and a brief cameo in "The Name of the Doctor"
      Seasons: 0,
    },
    characters: {
      companions: [
        "The Moment (Conscience Interface)",
        "Eleventh Doctor",
        "Tenth Doctor",
        "Clara Oswald",
      ],
      enemies: ["Daleks", "The Time Lords", "Zygons"],
    },
  },
  {
    doctor_id: 9,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-10.jpg",
    doctor_name: "The 9th Doctor",
    doctor_title: "9th Doctor",
    header_img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5R0yVdgqTd1CDBf7lYHyfnjKFJakGYD2x80xG_HkacyVvsfg_o2V819NlIcNyrDBuII&usqp=CAU",
    header_img_alt: "",
    actor_name: "Christopher Eccleston",
    panel_1_content:
      "The sole survivor of the Last Great Time War, scarred by the terrible things he’d seen and done, the Ninth Doctor was an intense and emotional incarnation. He took Rose Tyler to see the end of the world, inspired Charles Dickens and showed that for once, everybody could live.",
    stats: {
      Actor: "Christopher Eccleston",
      "Start Date": "2005-03-26",
      "End Date": "2005-06-18",
      Episodes: 13,
      Seasons: 1,
    },
    characters: {
      companions: [
        "Rose Tyler (Billie Piper)",
        "Captain Jack Harkness (John Barrowman)",
      ],
      enemies: [
        "Daleks",
        "The Slitheen",
        "The Autons",
        "The Empty Child",
        "The Emperor Dalek",
      ],
    },
  },
  {
    doctor_id: 10,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-12.jpg",
    doctor_name: "The 10th Doctor",
    doctor_title: "10th Doctor",
    header_img_url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwBDV67xR1eH5HPddF0Z8Pst7TeNgqRIlzY8NyyPQ5FR4l2W4DJdF9yqNa34mNmdkd3n5U8qQ7VO3hJvcVbAZL-AhBY6pBW9-UOkPEtRRigCV2ohuJDStje5gr9GvrHB26oX5i1uMnpy0/s1600/bigfinart2.png",
    header_img_alt: "",
    actor_name: "David Tennant",
    panel_1_content:
      "Waking on Christmas Day in his new form, the Tenth Doctor fought the Sycorax high above London. Travelling with Rose and Mickey he battled Cybermen, werewolves and possibly even the Devil itself.",
    stats: {
      Actor: "David Tennant",
      "Start Date": "2005-12-25",
      "End Date": "2010-01-01",
      Episodes: 47,
      Seasons: 4,
    },
    characters: {
      companions: [
        "Rose Tyler (Billie Piper)",
        "Martha Jones (Freema Agyeman)",
        "Donna Noble (Catherine Tate)",
        "Captain Jack Harkness (John Barrowman)",
      ],
      enemies: [
        "The Master",
        "Daleks",
        "Cybermen",
        "Weeping Angels",
        "The Sontarans",
      ],
    },
  },
  {
    doctor_id: 11,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-13.jpg",
    doctor_name: "The 11th Doctor",
    doctor_title: "11th Doctor",
    header_img_url:
      "https://www.hollywoodreporter.com/wp-content/uploads/2013/11/doctor_who_matt_smith.jpg",
    header_img_alt: "",
    actor_name: "Matt Smith",
    panel_1_content:
      "Born, “still cooking”, into a crashing TARDIS, the Eleventh Doctor hurtled into the life of Amy Pond and fancied a first meal of fish fingers and custard. The Doctor and Amy battled new Daleks in World War Two, Weeping Angels by the thousand and the depression in Vincent van Gogh’s mind.",
    stats: {
      Actor: "Matt Smith",
      "Start Date": "2010-01-01",
      "End Date": "2013-12-25",
      Episodes: 44,
      Seasons: 3,
    },
    characters: {
      companions: [
        "Amy Pond (Karen Gillan)",
        "Rory Williams (Arthur Darvill)",
        "River Song (Alex Kingston)",
        "Clara Oswald (Jenna Coleman)",
      ],
      enemies: [
        "The Silence",
        "The Master",
        "Daleks",
        "Cybermen",
        "Weeping Angels",
        "The Great Intelligence",
      ],
    },
  },
  {
    doctor_id: 12,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-14.jpg",
    doctor_name: "The 12th Doctor",
    doctor_title: "12th Doctor",
    header_img_url:
      "https://www.giantfreakinrobot.com/wp-content/uploads/2022/03/capaldi-2.jpeg",
    header_img_alt: "",
    actor_name: "Peter Capaldi",
    panel_1_content:
      "Peter first appeared as the Doctor briefly in the 50th anniversary special episode and also played minor characters in previous series. Peter's Doctor fought Daleks and Davros, Cybermen, Zygons, the Veil and the Time Lords.",
    stats: {
      Actor: "Peter Capaldi",
      "Start Date": "2013-12-25",
      "End Date": "2017-12-25",
      Episodes: 40,
      Seasons: 3,
    },
    characters: {
      companions: [
        "Clara Oswald (Jenna Coleman)",
        "Bill Potts (Pearl Mackie)",
        "Nardole (Matt Lucas)",
      ],
      enemies: [
        "The Master (Missy)",
        "Daleks",
        "Cybermen",
        "Zygons",
        "The Monks",
      ],
    },
  },
  {
    doctor_id: 13,
    avatar_url:
      "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/dr-who/dr-15.jpg",
    doctor_name: "The 13th Doctor",
    doctor_title: "13th Doctor",
    header_img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWpysNwvZu6NceXfW4xsq5q03fd8A2uCITw&s",
    header_img_alt: "",
    actor_name: "Jodie Whittaker",
    panel_1_content:
      "Jodie was the first woman to play the role and the first words she said when she realised she'd regenerated as a woman were \"Aw, Brilliant!\" Her time in the Tardis involved battles with the Doctor's arch-nemesis, the Master, while huge secrets were revealed about the character's origins.",
    stats: {
      Actor: "Jodie Whittaker",
      "Start Date": "2017-12-25",
      "End Date": "2022-10-23",
      Episodes: 31,
      Seasons: 3,
    },
    characters: {
      companions: [
        "Yasmin Khan (Mandip Gill)",
        "Ryan Sinclair (Tosin Cole)",
        "Graham O'Brien (Bradley Walsh)",
        "Dan Lewis (John Bishop)",
      ],
      enemies: [
        "The Master",
        "Daleks",
        "Cybermen",
        "The Timeless Child",
        "The Flux",
      ],
    },
  },

  {
    doctor_id: 14,
    doctor_name: "The 14th Doctor",
    doctor_title: "14th Doctor",
    header_img_alt: "",
    actor_name: "David Tennant",
    panel_1_content:
      "From recognising his teeth to repeatedly saying \"what!?\", the Doctor's 14th regeneration came as a shock to everyone. It's a new life for the Doctor but with a familiar face. David Tennant returned to play Doctor number 14, looking almost exactly how he did when he was the 10th incarnation of the character. But how has the Doctor regenerated into an old body? All was revealed in a special episode for the sci-fi series' 60th anniversary.",
    stats: {
      Actor: "David Tennant",
      "Start Date": "2022-10-23",
      "End Date": "2023-12-09",
      Episodes: 3,
      Seasons: 1,
    },
    characters: {
      companions: ["Donna Noble", "Melanie Bush", "Rose Noble"],
      enemies: ["Beep the Meep", "The Toymaker", "Wrarth Warriors"],
    },
  },
  {
    doctor_id: 15,
    doctor_name: "The 15th Doctor",
    doctor_title: "15th Doctor",
    header_img_alt: "",
    actor_name: "Ncuti Gatwa",
    panel_1_content:
      "After being struck with a huge laser-beam in his battle with the Toymaker, David Tennant's 14th Doctor bi-regenerated, splitting in two. The new 15th version of the Doctor, played by Ncuti Gatwa begins his first full adventure in time and space, taking on baby-eating goblins, on Christmas Day 2023. Gatwa is the first black actor to play the Doctor for a full series and is the fourth Scottish actor in the role.",
    stats: {
      Actor: "Ncuti Gatwa",
      "Start Date": "2023-12-25",
      "End Date": "TBA",
      Episodes: 4,
      Seasons: 1,
    },
    characters: {
      companions: ["Ruby Sunday", "Belinda Chandra", "Joy"],
      enemies: ["Goblins", "The Trickster", "Midnight Entity"],
    },
  },
];

const ITEMS_PER_ROW = 4; // Number of items in each row
const SPACING = 100; // Distance between items in percentage

// add the doctors data to the HTML

// create and insert a doctor panel
function createDoctorPanel(doctor, index, gapXPercent, gapYPercent) {
  const clone = doctorTemplate.content.cloneNode(true);

  assignIds(clone, doctor);
  setContent(clone, doctor);

  const statsHTML = createDoctorStatsHTML(doctor.stats);
  const navPanels = clone.querySelectorAll("[data-panels] div");
  navPanels[1].appendChild(statsHTML);

  const charactersHTML = createDoctorCharactersHTML(doctor.characters);
  navPanels[2].appendChild(charactersHTML);

  applyPositioning(clone, index, gapXPercent, gapYPercent);

  doctorContainer.append(clone);
}

// assign IDs and attributes
function assignIds(clone, doctor) {
  clone.querySelector("input.panel-1").id = `radio-tab-${doctor.doctor_id}.1`;
  clone.querySelector("input.panel-2").id = `radio-tab-${doctor.doctor_id}.2`;
  clone.querySelector("input.panel-3").id = `radio-tab-${doctor.doctor_id}.3`;
  clone.querySelector(
    "input[name='character']"
  ).id = `radio-char-${doctor.doctor_id}`;
  clone
    .querySelector(".avatar")
    .setAttribute("for", `radio-char-${doctor.doctor_id}`);
  clone.querySelector("article").id = `dr-${doctor.doctor_id}`;
}

// function - set content such as text, images, and avatars
function setContent(clone, doctor) {
  clone
    .querySelector("article")
    .style.setProperty(
      "--bg-img",
      `url(https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/${doctor.doctor_id}-bg.png)`
    );
  const avatarImg = clone.querySelector(".avatar img");
  avatarImg.src = `https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/doctor-who/${doctor.doctor_id}-avatar.png`;
  avatarImg.alt = doctor.doctor_name;

  //clone.querySelector(".btnClose").setAttribute("for", `radio-char-${doctor.doctor_id}`);
  clone.querySelector("h2").textContent = doctor.doctor_name;
  clone.querySelector("h3").textContent = doctor.actor_name;

  const navLabels = clone.querySelectorAll("nav label");
  navLabels[0].setAttribute("for", `radio-tab-${doctor.doctor_id}.1`);
  navLabels[1].setAttribute("for", `radio-tab-${doctor.doctor_id}.2`);
  navLabels[2].setAttribute("for", `radio-tab-${doctor.doctor_id}.3`);

  const navPanels = clone.querySelectorAll("[data-panels] div");
  navPanels[0].id = `radio-tab-${doctor.doctor_id}.1`;
  navPanels[1].id = `radio-tab-${doctor.doctor_id}.2`;
  navPanels[2].id = `radio-tab-${doctor.doctor_id}.3`;

  navPanels[0].textContent = doctor.panel_1_content;
}
// Calculate and apply positions based on index
function applyPositioning(clone, index) {
  const row = Math.floor(index / ITEMS_PER_ROW);
  const col = index % ITEMS_PER_ROW;

  const article = clone.querySelector("article");

  // Fixed gap in pixels (1rem)
  const remGap = 4; // 1rem in pixels
  const fixedGap = remGap; // You can adjust this gap value as needed

  // Calculate offsets for the current item based on its position
  const colOffset = col - (ITEMS_PER_ROW - 1) / 2;
  const rowOffset = row - (ITEMS_PER_ROW - 1) / 2;

  // Apply fixed gap and spacing to determine the position of the item
  const x = colOffset * (SPACING + fixedGap);
  const y = rowOffset * (SPACING + fixedGap);

  // Apply the calculated positions to the article element
  article.style.setProperty("--translate-x", `${x}%`);
  article.style.setProperty("--translate-y", `${y}%`);
}

// Function -  stats HTML
function createDoctorStatsHTML(stats) {
  const fragment = document.createDocumentFragment();
  const h4 = document.createElement("h4");
  h4.textContent = "Statistics";
  fragment.appendChild(h4);

  const ul = document.createElement("ul");
  for (const key in stats) {
    if (stats.hasOwnProperty(key)) {
      const li = document.createElement("li");
      li.textContent = `${key}: ${stats[key]}`;
      ul.appendChild(li);
    }
  }
  fragment.appendChild(ul);
  return fragment;
}

// Function - generate characters HTML
function createDoctorCharactersHTML(characters) {
  const fragment = document.createDocumentFragment();

  // Function - create a section with heading and list, and append it to the fragment
  function createCharacterSection(title, items) {
    const h4 = document.createElement("h4");
    h4.textContent = title;
    fragment.appendChild(h4);
    const ul = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    fragment.appendChild(ul);
  }

  // Create and append "Companions" section
  if (characters.companions && characters.companions.length > 0) {
    createCharacterSection("Companions", characters.companions);
  }
  // Create and append "Enemies" section
  if (characters.enemies && characters.enemies.length > 0) {
    createCharacterSection("Enemies", characters.enemies);
  }
  return fragment;
}

//function - iterate over doctors and create panels
function renderDoctorPanels(doctors) {
  // Wait until layout is calculated
  requestAnimationFrame(() => {
    const remGap = 16; // 1rem in px
    const container = doctorContainer.getBoundingClientRect();
    const gapXPercent = (remGap / container.width) * 100;
    const gapYPercent = (remGap / container.height) * 100;

    doctors.forEach((doctor, index) => {
      createDoctorPanel(doctor, index, gapXPercent, gapYPercent);
    });
  });
}

// Call the main function with THE_DOCTORS array
renderDoctorPanels(THE_DOCTORS);

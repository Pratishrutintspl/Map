// src/data/odishaData.js
import OdishaMap from "../../assests/Odisha/Odisha_districts_map.svg.png";
const pastelColors = [
  "#FDE2FF", "#E3F2FD", "#FFF4D6", "#E8FFEC", "#FFE8E8", "#E2F6FF",
  "#F9E7FF", "#E9FFFA", "#FFF6EA", "#E5ECFF", "#FFE5EF", "#F1FFE3",

  // 🔥 Newly Added Soft Pastel Palette
  "#FFECD9", "#DCF6E8", "#EDE7FF", "#FFE6F2", "#F6FDC3", "#D2E3FC",
  "#D7F2FF", "#FFECD1", "#E1FFE3", "#FFF1F1", "#F7EFFF", "#DFF7FA",
  "#FAF4C0", "#E4D8FF", "#FCDDEC", "#F3FFD9", "#E2F4FF", "#FFDDE2",
  "#D9FFE6", "#FFF7D6", "#E3E0FF", "#FFC8E6", "#D4FCF3", "#FFF2C7",
  "#CFE8FF", "#FFD6DE", "#D8F7FF", "#FFF0DE", "#E5FFD0", "#FAD7FE",
  "#C7F6FF", "#FFE6C5", "#D0FFEA", "#F9DFFD", "#FFF9D4", "#D9EEFF"
];


export const getLightColor = () => pastelColors[Math.floor(Math.random() * pastelColors.length)];

const odishaData = {
  name: "Odisha",
  description:
    "Odisha is known for its rich culture, temples, classical dance (Odissi), beaches, and the world-famous Jagannath Temple.",
  map: OdishaMap,

  formationDay: "1st April 1936",
  oldNames: "Udra, Utkal, Kalinga, Kosala",
  capital: "Bhubaneswar",
  Blocks: "314",
  Tahasil: "317",
  categories: [
    {
         id: "1",
      title: "General Facts",
      color: "#ffffff", // aqua
      items: [
        //  { label: "Blocks", value: "314" },
        //   { label: "Tahasil", value: "317" },
        { label: "Orissa → Odisha", value: "96th Amendment (23rd Sep 2011)" },
        { label: "Oriya → Odia", value: "97th Amendment (23rd Sep 2011)" },
        { label: "Area Rank in India", value: "8th" },
        { label: "In 1936 Odisha have", value: "6 districts" },
        { label: "In 1949 Odisha have", value: "13 districts" },
        { label: "In 1993 Odisha have", value: "30 districts" },
        { label: "Smallest District", value: "Jagatsinghpur" },
        { label: "Largest District", value: "Mayurbhanj" },
        { label: "Odisha have 3 divisions", value: "Central(Cuttack), South(Berhampur), North(Sambalpur)" },
        { label: "Bihar & odisha get Separated from Bengal Residency", value: "22nd Mar 1912" },

      ],
    },

    {
         id: "2",
      title: "Boundary",
      color: "#ffffff", // aqua
      items: [
        {
          label: "Total Boundaries",
          value: "4 (West Bengal, Jharkhand, Chhattisgarh, Andhra Pradesh)"
        },
        {
          label: "West Bengal Border (2)",
          value: "Balasore, Mayurbhanj"
        },
        {
          label: "Jharkhand Border (3)",
          value: "Mayurbhanj, Keonjhar, Sundargarh"
        },
        {
          label: "Chhattisgarh Border (8)",
          value: "Sundargargh, Jharsuguda, Bargarh, Nuapada, Kalahandi, Nabarangpur, Koraput, Malkangiri "
        },
        {
          label: "Andhra Pradesh Border (5)",
          value: "Malkangiri, Koraput, Rayagada, Gajapati, Ganjam "
        },
      ],
    },

    {
         id: "3",
      title: "Symbols Of Odisha",
      color: "#ffffff", // aqua
      items: [
        {
          label: "State Animal",
          value: "Sambar(Deer)"
        },
        {
          label: "State Bird",
          value: "Indian Roller (ଭଦଭଦଳିଆ)"
        },
        {
          label: "State Flower",
          value: "Ashoka"
        },
        {
          label: "State Tree",
          value: "Ashwathha"

        },
        {
          label: "State Fish",
          value: "Mahanadi mahseer"
        },
        {
          label: "State Song",
          value: "Bande Utkala Janani (2020) Kantakabi Laxmikanta Mohapatra"
        },

      ],
    },
    {
         id: "4",
      title: "Population (2011 Census)",
      color: "#ffffff", // aqua
      items: [
        {
          label: "Total Population",
          value: "41,974,218"
        },
        {
          label: "Population Wise Rank",
          value: "11th"
        },
        {
          label: "Highest Population",
          value: "Ganjam"
        },
        {
          label: "Lowest Population",
          value: "Deogarh"
        },
        {
          label: "Male Population",
          value: "21,212,136"
        },
        {
          label: "Female Population",
          value: "20,762,082"
        },
        {
          label: "Population Growth",
          value: "13.97%"
        },
        {
          label: "Dense Population",
          value: "Khorda"
        },
        {
          label: "Highest Sex Ratio",
          value: "Khorda"
        },
        {
          label: "Lowest Sex Ratio",
          value: "Nayagarh"

        },
        {
          label: "According to 2011C ST Population Percentage in Odisha",
          value: "32"

        },
      ],
    },

    {
         id: "5",
      title: "Language",
      color: "#ffffff", // aqua
      items: [
        {
          label: "Official Language",
          value: "Odia (84%)"
        },
        {
          label: "Total Official Language",
          value: "22"
        },
        {
          label: "Total Official Language",
          value: "11"
        },
        {
          label: "Odia is also Classical language on ",
          value: "11th March 2014"
        },

      ],
    },
    // to be continue


    {
      id: "6",
      title: "National Parks",
      color: "#ffffff", // aqua
      items: [
        {
          label: "Similipal National Park ",
          value: " Tiger Reserve 🐯 (Mayurbhanj)"
        },
        {
          label: "BhitaraKanika National Park",
          value: " Saltwater Crocodile, White Crocodile 🐊 (Kendrapada)"
        },
        {
          label: "Bird Sanctuary",
          value: " Chilika"
        },
        {
          label: "Satkosia Tiger Reserve 🐯",
          value: " Angul "
        },
        {
          label: "Hadgarh Wild Life Sanctuary",
          value: " Mayurbhanj & Keonjhar"
        },
        {
          label: "Nandankanan Zoo",
          value: " Bhubaneswar - 1960"
        },
        {
          label: "",
          value: " Sal Tree Covers 33% of the forest odisha"
        },
        {
          label: "",
          value: " Odisha is the 3rd largest produce Of Kendu Leaf(Green Gold)"
        },
        {
          label: "",
          value: "Odisha Forest Development Cor. Pvt. Ltd. come into existence on 1962"
        },
      ],
    },

    {
      id: "7",
      title: "Rivers & Dam",
      color: "#ffffff", // aqua

      items: [
        {
          label: "Hirakud Dam",
          value: "Situated On Mahanadi River - (Sambalpur)"
        },
        {
          label: "Jalput Dam",
          value: "Situated On Machkunda River - (Odisha - A.P Border)"
        },
        {
          label: "Rengali Dam",
          value: "Situated On Brahmani River - (Anugul)"
        },
        {
          label: "Mandira Dam",
          value: "Situated On Sank River - (Sundrargah)"
        },
        {
          label: "Patora Dam",
          value: "Situated On Jonk River - (Nuapada)"
        },
        {
          label: "Odisha's largest Dam ",
          value: " Hirakud (1957) by Neheru"
        },
        {
          label: " ",
          value: " Asia's largest Brackish Water lagon Chilika"
        },
        {
          label: " ",
          value: " Odisha's largest freshwater lake Anshupa"
        },
        {
          label: " ",
          value: " India's largest freshwater lake Ullar"
        },
        {
          label: " ",
          value: " Kanjia Lake ( କାଞ୍ଜିଆ ହ୍ରଦ) is a natural lake on the northern outskirts of Bhubaneswar Nandankana Zoo"

        },
        {
          label: " ",
          value: " Baitarani River Primarily flows through at Keonjhar District"
        },
        {
          label: " ",
          value: " Dam is located near the town of sunabeda in koraput District Upper kolab dam"
        },
        {
          label: " ",
          value: " Balimela dam constructed on Sileru River"
        },
        {
          label: " ",
          value: " Rengali dam constructed on Bramhani River"
        },
        {
          label: " ",
          value: " Mandira dam constructed for industrial water supply on Sankha River"
        },
        {
          label: " ",
          value: " Tampara lakes lies in Ganjam"
        },
        {
          label: " ",
          value: " Horse Shoe Shaped Fresh Water lake Ansupa"
        },
        {
          label: " ",
          value: " The Other name of Sileru River is Machakund"
        }
      ],
    },
    {
      id: "8",
      title: "Ramsar Sites ",
      color: "#ffffff", // aqua
      items: [
        {
          label: "Ramsar Sites Starts on",
          value: "02 Feb 1971"
        },
        {
          label: "Number of sites",
          value: "94"
        },
        {
          label: "First Ramsar Sites",
          value: "Chilika on 1981"
        },
        {
          label: "Highest number of sites",
          value: "Tamilnadu (20)"
        },
        {
          label: "",
          value: "Odisha has six designated Ramsar Sites - Chilika Lake, Bhitarkanika Mangroves, Satkosia Gorge, Hirakud Reservoir, Ansupa Lake, and Tampara Lake"
        },
        {
          label: "",
          value: "India has recently added 3 Ramsar Sites, in August 2024 being Nanjarayan Bird Sanctuary, Kazhuveli Bird Sanctuary (Tamil Nadu), and Tawa Reservoir (Madhya Pradesh)"
        },
      ],
    },
  {
      id: "9",
      title: "Seaports",
      color: "#ffffff", // aqua
      items: [
     
    
         {
          label: "",
          value: "Odisha's coastline is officially measured at 574.71 km1"
        },

        
         {
          label: "Majort Port",
          value: "Paradip Port"
        },
            {
          label: "Minor Port",
          value: "Paradip Port"
        },
      ],
    },
  ]
};

export default odishaData;

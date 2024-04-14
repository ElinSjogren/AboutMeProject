import { defineStore } from 'pinia'


export const useInformationStore = defineStore('infos', {
    state() {
        return {
          educaton:[
            {
               schoolLevel: "High School",
               SchoolName: "Taby Enskilda Gymnasium",
               field: "Natural science",
               period: "3 Years",
               started: 2010
            },
            {
              schoolLevel: "University",
              SchoolName: "Jonkoping University",
              field: "Introduction to programming",
              period: "9 weeks",
              started: 2014
           },
           {
            schoolLevel: "University",
            SchoolName: "Jonkoping University",
            field: "Introduction to computer technology",
            period: "6 weeks",
            started: 2014
          },
          {
            schoolLevel: "University",
            SchoolName: "Jonkoping University",
            field: "Webdeveloper .NET",
            period: "2 years [Ongoing!]",
            started: 2023
          },
          {
            schoolLevel: "University",
            SchoolName: "Dalarna University",
            field: "Introduction to relational databases (PL/SQL)",
            period: "7,5 weeks",
            started: 2022
          },
          {
            schoolLevel: "University",
            SchoolName: "Karlstad University",
            field: "C#.NET",
            period: "7,5 weeks",
            started: 2023
          },
          {
            schoolLevel: "University",
            SchoolName: "Uppsala University",
            field: "Dynamic Web Applications",
            period: "7,5 weeks",
            started: 2023
          },
          ],
          cv:[
            {
              hobbys: ["Paintings", "Family and friends", "Gardening", "My pets", "Food" ],
              introduction: "Hello! Welcome to my resume website. I am so glad that you found me. Here I will give a short presentation while at the same time show what i have learned so far within web development. ",
              personalLife:"My name is Elin Sjögren, I am 30 years old and I live in Gislaved, Sweden with my husband Simon. Right now I am studying Web Development at Campus Värnamo (Jonkoping University) in Sweden. I really enjoyed it so far since one of my favourite things to do on my free time is to be creative and build beautiful things. When I want to relax i mostly do some paintings in aquarelle or on my computer with a drawing tablet. But sometimes i also sculpture mini buildings in wood.",
              recentWorkExperience: [
                {
                  Workplace: "PostNord Gislaved",
                  position: "Mail delivery",
                  duration: "6 months",
                  startyear: 2015,
                },
                {
                  Workplace: "Max Hamburgare",
                  position: "Restaurant assistant",
                  duration: "5 months",
                  startyear: 2016,
                },
                {
                  Workplace: "NT Service Värnamo",
                  position: "Cleaner",
                  duration: "3 years",
                  startyear: 2017,
                },
                {
                  Workplace: "Putsman AB Värnamo",
                  position: "Customer Service and Office Assistent",
                  duration: "Ongoing",
                  startyear: 2020,
                },
              ],

            }
          ],
          imgPaths:["@/assets/paintings/img1.jpg", "@/assets/paintings/img2.jpg", "@/assets/paintings/img3.jpg", "@/assets/paintings/img4.jpg", "@/assets/paintings/img5.jpg", "@/assets/paintings/img6.jpg", "@/assets/paintings/img7.jpg", "@/assets/paintings/img8.jpg", "@/assets/paintings/img9.jpg", "@/assets/paintings/img10.jpg","@/assets/paintings/img11.jpg", "@/assets/paintings/img12.jpg", "@/assets/paintings/img13.jpg", "@/assets/paintings/img14.jpg", "@/assets/paintings/img15.jpg", "@/assets/paintings/img16.jpg", "@/assets/paintings/img17.jpg"]
        }
    },
    getters: {

    },
    actions: {
        
    }
})
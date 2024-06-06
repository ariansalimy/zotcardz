import { CardData, hrmin_to_min } from "./card-data";

// {
//     id: "",
//     name: "",
//     organization: "",
//     category: "",
//     date: {
//         month: 0,
//         day: 0,
//         year: 0
//     },
//     timeStart: 0,
//     timeEnd: 0,
//     description: "",
//     location: "",
//     links: [{kind: "", link: ""}]
// }

const AllSampleEvents: CardData[] = [
    {
        id: "zc",
        name: "ZotCon",
        organization: "ZotCon",
        category: "Club Event",
        date: {
            month: 5,
            day: 12,
            year: 2024
        },
        timeStart: hrmin_to_min(10, 0),
        timeEnd: hrmin_to_min(18, 0),
        description: "A small anime convention held at UCI.",
        location: "UCI Student Center",
        links: [{kind: "Website", link: "https://www.zotcon.org/"}]
    }, 
    {
        id: "dat",
        name: "Design-a-thon",
        organization: "Design at UCI",
        category: "Club Event",
        date: {
            month: 5,
            day: 17,
            year: 2024
        },
        timeStart: hrmin_to_min(15, 0),
        timeEnd: hrmin_to_min(23, 59),
        description: "A hackathon-styled design competition.",
        location: "UCI Student Center and Donald Bren Hall",
        links: [{kind: "Website", link: "https://designatuci.com/designathon/24"}]
    }, 
    {
        id: "vh",
        name: "Venus Hacks",
        organization: "Hack at UCI",
        category: "Club Event",
        date: {
            month: 5,
            day: 24,
            year: 2024
        },
        timeStart: hrmin_to_min(17, 0),
        timeEnd: hrmin_to_min(23, 59),
        description: "A women-centric hackathon held at UCI.",
        location: "UCI Student Center",
        links: [{kind: "Website", link: "https://venushacks.com/"}]
    }, 
    {
        id: "icscom",
        name: "ICS Grad",
        organization: "UCI",
        category: "UCI-Run Event",
        date: {
            month: 6,
            day: 15,
            year: 2024
        },
        timeStart: hrmin_to_min(8, 30),
        timeEnd: hrmin_to_min(11, 0),
        description: "Commencement ceremony for the graduating class of 2024 for the Donald Bren School of Information & Computer Sciences.",
        location: "UCI Bren Events Center",
        links: [{kind: "Website", link: "https://commencement.uci.edu/ceremony/donald-bren-school-of-information-computer-sciences/"}]
    },
    {
        id: "biocom",
        name: "Bio Sci Grad",
        organization: "UCI",
        category: "UCI-Run Event",
        date: {
            month: 6,
            day: 15,
            year: 2024
        },
        timeStart: hrmin_to_min(12, 45),
        timeEnd: hrmin_to_min(15, 15),
        description: "Commencement ceremony for the graduating class of 2024 for the School of Biological Sciences.",
        location: "UCI Bren Events Center",
        links: [{kind: "Website", link: "https://commencement.uci.edu/ceremony/school-of-biological-sciences/"}]
    }, 
    {
        id: "artbuscom",
        name: "Art and Business Grad",
        organization: "UCI",
        category: "UCI-Run Event",
        date: {
            month: 6,
            day: 17,
            year: 2024
        },
        timeStart: hrmin_to_min(8, 30),
        timeEnd: hrmin_to_min(11, 0),
        description: "Commencement ceremony for the graduating class of 2024 for the Claire Trevor School of Arts and the Paul Merage School of Business (Baccalaureate candidates).",
        location: "UCI Bren Events Center",
        links: [{kind: "Website", link: "https://commencement.uci.edu/ceremony/claire-trevor-school-of-arts-paul-merage-school-of-business/"}]
    }, 
    {
        id: "lastspr24",
        name: "End of Spring Quarter 2024",
        organization: "UCI",
        category: "UCI Key Date",
        date: {
            month: 6,
            day: 14,
            year: 2024
        },
        timeStart: hrmin_to_min(0, 0),
        timeEnd: hrmin_to_min(17, 0),
        description: "Official last day of the 2024 Spring Quarter.",
        location: "UCI",
        links: [{kind: "23-24 Academic Calendar", link: "https://www.reg.uci.edu/calendars/quarterly/2023-2024/quarterly23-24.html"}]
    }, 
    {
        id: "spr24grades",
        name: "Spring 24 Grades Release",
        organization: "UCI",
        category: "UCI Key Date",
        date: {
            month: 6,
            day: 20,
            year: 2024
        },
        timeStart: hrmin_to_min(22, 0),
        timeEnd: hrmin_to_min(23, 59),
        description: "Grades for the 2024 Spring Quarter become viewable on StudentAccess",
        location: "UCI",
        links: [{kind: "23-24 Academic Calendar", link: "https://www.reg.uci.edu/calendars/quarterly/2023-2024/quarterly23-24.html"},
            {kind: "StudentAccess", link: "https://www.reg.uci.edu/access/student/welcome/"}
        ]
    }, 
]

export default function getSampleEvents():Record<string, CardData> {
    const sampleEvents: Record<string, CardData> = {};
    for(let cardData of AllSampleEvents) {
        sampleEvents[cardData.id] = cardData;
    }

    return sampleEvents;
}
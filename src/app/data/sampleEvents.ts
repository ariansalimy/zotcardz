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

]

export default function getSampleEvents():Record<string, CardData> {
    const sampleEvents: Record<string, CardData> = {};
    for(let cardData of AllSampleEvents) {
        sampleEvents[cardData.id] = cardData;
    }

    return sampleEvents;
}
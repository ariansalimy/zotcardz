import { CardData } from "./card-data";


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
        id: "1",
        name: "Sample 1",
        organization: "",
        category: "",
        date: {
            month: 0,
            day: 0,
            year: 0
        },
        timeStart: 0,
        timeEnd: 0,
        description: "",
        location: "",
        links: [{kind: "", link: ""}]
    }, 
    {
        id: "2",
        name: "Sample 2",
        organization: "",
        category: "",
        date: {
            month: 0,
            day: 0,
            year: 0
        },
        timeStart: 0,
        timeEnd: 0,
        description: "",
        location: "",
        links: [{kind: "", link: ""}]
    }, 
    {
        id: "3",
        name: "Sample 3",
        organization: "",
        category: "",
        date: {
            month: 0,
            day: 0,
            year: 0
        },
        timeStart: 0,
        timeEnd: 0,
        description: "",
        location: "",
        links: [{kind: "", link: ""}]
    }, 

]

export default function getSampleEvents():Record<string, CardData> {
    const sampleEvents: Record<string, CardData> = {};
    for(let cardData of AllSampleEvents) {
        sampleEvents[cardData.id] = cardData;
    }

    return sampleEvents;
}
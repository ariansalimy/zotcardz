export type CardData = {
    id: string,
    name: string,
    organization: string,
    category: string,
    date: {
        month: number,
        day: number,
        year: number
    },
    timeStart: number, // in minutes
    timeEnd: number, // in minutes
    description: string,
    location: string,
    links: [{
        kind: string, // Like "Volunteer" or "Mentor"
        link: string
    }]
}

export const sampleCard: CardData = {
    id: "!sample1",
    name: "Sample Card",
    organization: "Sample Org",
    category: "Sample Category",
    date: {
        month: 1,
        day: 1,
        year: 2025
    },
    timeStart: hrmin_to_min(12, 0), // in minutes
    timeEnd: hrmin_to_min(15, 0), // in minutes
    description: "Description",
    location: "Sample Location",
    links: [{
        kind: "website", // Like "Volunteer" or "Mentor"
        link: "./"
    }]
}

export const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

export function hrmin_to_min(hours: number, minutes: number): number {
    /*
        Given hours (using 24 hour time) and minutes,
        returns the time in minutes
    */
    return (hours * 60) + minutes;
}

export function min_to_hrmin(minutes: number): {hours: number, minutes: number} {
    /*
        Given the minutes of a time
        returns the time in hours (using 24 hour time) and minutes as an object
    */

    return {
        hours: Math.floor(minutes / 60),
        minutes: minutes % 60
    };
}
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
    links: {
        kind: string, // Like "Volunteer" or "Mentor"
        link: string
    }[]
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

export function hrmin_to_str(hours: number, minutes: number):string {
    /*
        Given hours (using 24 hour time) and minutes,
        returns the time as a string in the format XX:XX XM
    */
   let pmam = "AM";
   if(hours >= 12) {
    pmam = "PM";
   }

   let convHours = hours
   if(hours > 12) {
    convHours -= 12;
   }
   else if(hours === 0) {
    convHours = 12;
   }

   let strMin = minutes.toString();
   if (strMin.length === 1) {
    strMin = "0" + strMin;
   }

   return `${convHours}:${strMin} ${pmam}`
}

export function getMonthString(month: number): string {
    let monthString = "Invalid month";

    if (month === 1) {
        monthString = "January";
    }
    else if (month === 2) {
        monthString = "February";
    }
    else if (month === 3) {
        monthString = "March";
    }
    else if (month === 4) {
        monthString = "April";
    }
    else if (month === 5) {
        monthString = "May"; 
    }
    else if (month === 6) {
        monthString = "June";
    }
    else if (month === 7) {
        monthString = "July";
    }
    else if (month === 8) {
        monthString = "August";
    }
    else if (month === 9) {
        monthString = "September";
    }
    else if (month === 10) {
        monthString = "October";
    }
    else if (month === 11) {
        monthString = "November";
    }
    else if (month === 12) {
        monthString = "December";
    }

    return monthString;
}
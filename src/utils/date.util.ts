import moment from 'moment';

/**
 * Convert String To Date
 * @param dateString: string
 * @param format: string
 * @returns Date format
 * 
 * */ 
export const convertStringToDate = (stringDate: string, format: string): Date | null => {
    
    let dateObject = moment(stringDate, format, true);

    if (dateObject.isValid()) {
        return dateObject.toDate();
    } else {
        console.error('Invalid date format');
        return null;
    }
}

/**
 * Convert String To Date
 * @param dateObject: Date
 * @param format: string
 * @returns Date String format
 * 
 * */ 
export const convertDateToString = (dateObject: Date, format: string): string => {
    let dateString = moment(dateObject).format(format);
    return dateString;
}
export const getYear = (date: string | undefined ) => {
    if (typeof date === 'string') {
        return date.split('-')[0];
    } 

    return 'not found';
};
export const formatDateTime = (dateString) => {
    const parsedDate = new Date(dateString);

    const day = parsedDate.getDate().toString().padStart(2, '0');
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
    const hour = parsedDate.getHours().toString().padStart(2, '0');
    const minutes = parsedDate.getMinutes().toString().padStart(2, '0');

    return `${month}-${day} ${hour}:${minutes}`;
};
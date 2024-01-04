const getFullYear = () => {
    return new Date().getFullYear();
}


const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}

export { getFooterCopy, getFullYear };

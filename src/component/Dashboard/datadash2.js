const alignLabel = (colText) => {
    let rightAlignItems = []
    let leftAlignItems = []
    if (rightAlignItems.includes(colText)) {
        return "right"
    }
    if (leftAlignItems.includes(colText)) {
        return "left"
    }
    return "center"
}

const truncateText = (text, maximumLength) => {
    // to remove extra spaces in the string
    const str = text?.replace(/\s+/g, '');
    return `${str?.trim()?.substring(0, maximumLength)} ...`
}

export{
alignLabel,truncateText
};

export  function filterDataSearch(data, text) {
    {console.log("filtersearch")}
    const ans = data.filter(
        (x) => {
            const textUpper = text.toUpperCase();
            return x.title.toUpperCase().includes(textUpper) || x.topicTags.map((y) => y.name).join(" ").toUpperCase().includes(textUpper);

        })
    return ans;
}

export function filterDataDiff(data, diff) {
    console.log("filterdifficulty")
    if (diff == "all")
        return data;
    const ans = data.filter(
        (x) => {

            return x.difficulty.toUpperCase() == diff.toUpperCase();

        })
    return ans;
}

export function filterDataStatus(data, status) {
    {console.log("filterstatus")}
    if (status== "all")
        return data;
    if(status=="null")
    {
      return data.filter(
        (x) => {

            return x.status == null;

        })  
    }
    const ans = data.filter(
        (x) => {

            return x.status == status;

        })
    return ans;
}
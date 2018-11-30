export default function api(){
    let   path   = "../";
    const apiUri = {
        "company"  : `${path}/public/data/chart.json`,
        "building" : `${path}/public/data/chart.json`
    }

    return {
        apiUri : apiUri
    }
}
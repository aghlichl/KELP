export const fetchAll = () => (
    $.ajax({
        url: "api/businesses"
    })
);

export const searchAll = (name) => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/?name=${name}`,
        name
    })
);

export const fetchBusiness = (id) => {
    console.log(id)
    return(
    $.ajax({
        url: `api/businesses/${id}`
    })
    )
};
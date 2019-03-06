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

export const fetchBusiness = (id) => (
    $.ajax({
        url: `api/businesses/${id}`
    })
);
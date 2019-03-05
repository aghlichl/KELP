export const fetchAll = () => (
    $.ajax({
        url: "api/businesses"
    })
);

export const fetchBusiness = (id) => (
    $.ajax({
        url: `api/businesses/${id}`
    })
);
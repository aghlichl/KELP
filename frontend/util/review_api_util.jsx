export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);

export const deleteReview = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${id}`
    })
);

export const readReview = (reviewId) => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/${reviewId}`
    })
);

export const updateReview = (reviewId, review) => (
    $.ajax({
        method: 'PUT',
        url: `api/reviews/${reviewId}`,
        data: {
            review
        }
    })
);
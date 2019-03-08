export const selectAllBusinesses = state => Object.values(state.entities.businesses);

export const selectBusiness = ({ businesses }, businessId) => {
    return businesses[businessId] || { reviewIds: [], categoryIds: [] };
};

export const selectReviewsForBusiness = ({ reviews }, business) => {
    if(business.reviewIds){
    return business.reviewIds.map(reviewId => reviews[reviewId]);
    }
};
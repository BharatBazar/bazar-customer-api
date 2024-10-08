"use strict";
/*-----------------------------------------------
|| CREATING CUSTOM MESSAGES FOR ALL COMPONENTS
------------------------------------------------
|| Add your all custom messages here right in
|| this file. so any thing need to be change
|| You will everything at one place
------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = exports.comments = exports.award = exports.poll = exports.channel = exports.region = exports.competition = exports.post = exports.specialization = exports.shopMember_message = exports.shop_message = exports.user = void 0;
/**
 * Feedback component custom messages.
 */
exports.user = {
    CREATED: 'Hurray! new user has been created successfully',
    CREATED_DEC: "This user has been created with the some scenario so adding some description.",
    FETCH_ALL: "Hurray, Here is you all users.",
    UPDATED: 'Hurray! Your profile has been successfully updated',
};
exports.shop_message = {
    NO_SHOP: 'Shop does not exist',
    NOT_AUTHENTICATED: 'Shop is not verified yet company will contact you and will verify your shop.',
    AUTHENTICATED: 'Hurray, shop is authenticated.',
};
exports.shopMember_message = {
    PASSWORD_NOT_MATCH: 'Password does not match.',
};
exports.specialization = {
    CREATED: 'Hurray! new specialization has been created successfully',
    CREATED_DEC: "This specialization has been created with the some scenario so adding some description.",
    FETCH_ALL: "Hurray, Here is you all News.",
};
exports.post = {
    CREATED: 'Hurray! new post has been created successfully',
    CREATED_DEC: "This post has been created with the some scenario so adding some description.",
    FETCH_ALL: "Hurray, Here is you all users.",
    ADD_COMMENT: 'You have added comment',
    FETCH_COMMENT: 'Here are your all comments.',
    FETCH_LIKED_BY: 'Here are your all people who liked this post.',
    UPDATED: 'Hurray! Your Post has been successfully updated',
    DELETE_ALL: 'You have been successfully deleted your code.',
};
exports.competition = {
    CREATED: 'Hurray! new competition has been created successfully',
    UPDATED: 'Hurray! new competition has been updated successfully',
    CREATED_DEC: "This competition has been created with the some scenario so adding some description.",
    FETCH_ALL: "Hurray, Here is you all competition.",
    FETCH: 'Here is competition details',
    FETCH_ALL_IMAGES: 'Here is your all images',
    SUBMIT: 'You have submitted you image for this competition',
    LEAD_CREATED: 'lead created successfully',
    LEAD_NOT_CREATED: 'lead has not created',
};
exports.region = {
    FETCH_ALL: "Hurray, Here is you all regions.",
    CREATED: 'Hurray! new region has been created successfully',
    UPDATED: 'Hurray! new region has been updated successfully',
};
exports.channel = {
    FETCH_ALL: "Hurray, Here is you all channels.",
    CREATED: 'Hurray! new channel has been created successfully',
    UPDATED: 'Hurray! new channel has been updated successfully',
};
exports.poll = {
    CREATED: 'Hurray! new poll has been created successfully',
    CREATED_DEC: "This poll has been created with the some scenario so adding some description.",
    FETCH_ALL: "Hurray, Here is you all polls.",
    UPDATED: 'Hurray! Your poll has been successfully updated',
    RESULTS: 'Poll results are ready.',
};
exports.award = {
    CREATED: 'Hurray! new award poll has been created successfully',
    CREATED_DEC: "This award poll has been created with the some scenario so adding some description.",
    FETCH_ALL: "Hurray, Here is you all award polls.",
    UPDATED: 'Hurray! Your award poll has been successfully updated',
    RESULTS: 'Award Poll results are ready.',
};
exports.comments = {
    CREATED: 'Hurray! new comment has been added successfully',
    FETCH_ALL: "Hurray, Here is you all comments.",
    FETCH_REPLIES: 'Hurray , Here are more replies',
};
exports.likes = {
    CHANGED: 'Hurray! Like status has been changed',
    USERS: 'Hurray ! Here are all the users that liked ',
};
//# sourceMappingURL=customMessage.js.map
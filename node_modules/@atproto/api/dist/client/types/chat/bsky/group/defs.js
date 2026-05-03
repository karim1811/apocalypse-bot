"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJoinLinkView = isJoinLinkView;
exports.validateJoinLinkView = validateJoinLinkView;
exports.isGroupPublicView = isGroupPublicView;
exports.validateGroupPublicView = validateGroupPublicView;
exports.isJoinRequestView = isJoinRequestView;
exports.validateJoinRequestView = validateJoinRequestView;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
const is$typed = util_1.is$typed, validate = lexicons_1.validate;
const id = 'chat.bsky.group.defs';
const hashJoinLinkView = 'joinLinkView';
function isJoinLinkView(v) {
    return is$typed(v, id, hashJoinLinkView);
}
function validateJoinLinkView(v) {
    return validate(v, id, hashJoinLinkView);
}
const hashGroupPublicView = 'groupPublicView';
function isGroupPublicView(v) {
    return is$typed(v, id, hashGroupPublicView);
}
function validateGroupPublicView(v) {
    return validate(v, id, hashGroupPublicView);
}
const hashJoinRequestView = 'joinRequestView';
function isJoinRequestView(v) {
    return is$typed(v, id, hashJoinRequestView);
}
function validateJoinRequestView(v) {
    return validate(v, id, hashJoinRequestView);
}
//# sourceMappingURL=defs.js.map
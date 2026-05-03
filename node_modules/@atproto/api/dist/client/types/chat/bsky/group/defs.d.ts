/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult } from '@atproto/lexicon';
import type * as ChatBskyActorDefs from '../actor/defs.js';
export type LinkEnabledStatus = 'enabled' | 'disabled' | (string & {});
export type JoinRule = 'anyone' | 'followedByOwner' | (string & {});
export interface JoinLinkView {
    $type?: 'chat.bsky.group.defs#joinLinkView';
    code: string;
    enabledStatus: LinkEnabledStatus;
    requireApproval: boolean;
    joinRule: JoinRule;
    createdAt: string;
}
export declare function isJoinLinkView<V>(v: V): v is import("../../../../util").$TypedObject<V, "chat.bsky.group.defs", "joinLinkView">;
export declare function validateJoinLinkView<V>(v: V): ValidationResult<JoinLinkView & V>;
export interface GroupPublicView {
    $type?: 'chat.bsky.group.defs#groupPublicView';
    name: string;
    owner: ChatBskyActorDefs.ProfileViewBasic;
    memberCount: number;
    requireApproval: boolean;
}
export declare function isGroupPublicView<V>(v: V): v is import("../../../../util").$TypedObject<V, "chat.bsky.group.defs", "groupPublicView">;
export declare function validateGroupPublicView<V>(v: V): ValidationResult<GroupPublicView & V>;
export interface JoinRequestView {
    $type?: 'chat.bsky.group.defs#joinRequestView';
    convoId: string;
    requestedBy: ChatBskyActorDefs.ProfileViewBasic;
    requestedAt: string;
}
export declare function isJoinRequestView<V>(v: V): v is import("../../../../util").$TypedObject<V, "chat.bsky.group.defs", "joinRequestView">;
export declare function validateJoinRequestView<V>(v: V): ValidationResult<JoinRequestView & V>;
//# sourceMappingURL=defs.d.ts.map
// To parse this data:
//
//   import { Convert, SinglePicture } from "./file";
//
//   const singlePicture = Convert.toSinglePicture(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SinglePicture {
  num_results: number;
  more_available: boolean;
  items: Item[];
  auto_load_more_enabled: boolean;
  showQRModal: boolean;
}

export interface Item {
  taken_at: number;
  pk: number;
  id: string;
  fbid: number;
  device_timestamp: number;
  caption_is_edited: boolean;
  strong_id__: string;
  deleted_reason: number;
  has_shared_to_fb: number;
  has_delayed_metadata: boolean;
  is_quiet_post: boolean;
  mezql_token: string;
  share_count_disabled: boolean;
  is_visual_reply_commenter_notice_enabled: boolean;
  like_and_view_counts_disabled: boolean;
  is_post_live_clips_media: boolean;
  client_cache_key: string;
  integrity_review_decision: string;
  should_request_ads: boolean;
  is_reshare_of_text_post_app_media_in_ig: boolean;
  has_privately_liked: boolean;
  filter_type: number;
  can_see_insights_as_brand: boolean;
  media_type: number;
  code: string;
  caption: Caption;
  sharing_friction_info: SharingFrictionInfo;
  original_media_has_visual_reply_media: boolean;
  fb_user_tags: FbUserTags;
  coauthor_producers: any[];
  invited_coauthor_producers: any[];
  is_in_profile_grid: boolean;
  profile_grid_control_enabled: boolean;
  user: Owner;
  owner: Owner;
  image_versions2: ImageVersions2;
  original_width: number;
  original_height: number;
  media_notes: MediaNotes;
  enable_media_notes_production: boolean;
  product_type: string;
  is_paid_partnership: boolean;
  music_metadata: MusicMetadata;
  organic_tracking_token: string;
  ig_media_sharing_disabled: boolean;
  boost_unavailable_identifier: null;
  boost_unavailable_reason: null;
  boost_unavailable_reason_v2: any[];
  subscribe_cta_visible: boolean;
  is_cutout_sticker_allowed: boolean;
  gen_ai_detection_method: GenAIDetectionMethod;
  fb_aggregated_like_count: number;
  fb_aggregated_comment_count: number;
  has_high_risk_gen_ai_inform_treatment: boolean;
  open_carousel_show_follow_button: boolean;
  is_tagged_media_shared_to_viewer_profile_grid: boolean;
  should_show_author_pog_for_tagged_media_shared_to_profile_grid: boolean;
  is_eligible_for_media_note_recs_nux: boolean;
  is_social_ufi_disabled: boolean;
  is_eligible_for_meta_ai_share: boolean;
  comments: any[];
  can_view_more_preview_comments: boolean;
  preview_comments: any[];
  comment_count: number;
  hide_view_all_comment_entrypoint: boolean;
  inline_composer_display_condition: string;
  is_comments_gif_composer_enabled: boolean;
  comment_inform_treatment: CommentInformTreatment;
  has_liked: boolean;
  like_count: number;
  facepile_top_likers: User[];
  top_likers: string[];
  clips_tab_pinned_user_ids: any[];
  can_viewer_save: boolean;
  can_viewer_reshare: boolean;
  shop_routing_user_id: null;
  is_organic_product_tagging_eligible: boolean;
  igbio_product: null;
  featured_products: any[];
  product_suggestions: any[];
  is_reuse_allowed: boolean;
  is_open_to_public_submission: boolean;
}

export interface Caption {
  bit_flags: number;
  created_at: number;
  created_at_utc: number;
  did_report_as_spam: boolean;
  is_ranked_comment: boolean;
  pk: string;
  share_enabled: boolean;
  content_type: string;
  media_id: number;
  status: string;
  type: number;
  user_id: number;
  strong_id__: string;
  has_translation: boolean;
  text: string;
  user: User;
  is_covered: boolean;
  private_reply_status: number;
}

export interface User {
  pk: number;
  pk_id: string;
  id: string;
  full_name: string;
  is_private: boolean;
  strong_id__: string;
  fbid_v2?: number;
  username: string;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
}

export interface CommentInformTreatment {
  action_type: null;
  should_have_inform_treatment: boolean;
  text: string;
  url: null;
}

export interface FbUserTags {
  in: any[];
}

export interface GenAIDetectionMethod {
  detection_method: string;
}

export interface ImageVersions2 {
  candidates: HDProfilePicURLInfo[];
}

export interface HDProfilePicURLInfo {
  height: number;
  url: string;
  width: number;
}

export interface MediaNotes {
  items: any[];
}

export interface MusicMetadata {
  audio_type: null;
  music_canonical_id: string;
  pinned_media_ids: null;
  music_info: null;
  original_sound_info: null;
}

export interface Owner {
  fbid_v2: number;
  feed_post_reshare_disabled: boolean;
  full_name: string;
  id: string;
  is_private: boolean;
  is_unpublished: boolean;
  pk: number;
  pk_id: string;
  show_account_transparency_details: boolean;
  strong_id__: string;
  third_party_downloads_enabled: number;
  account_type: number;
  account_badges: any[];
  fan_club_info: FanClubInfo;
  friendship_status: FriendshipStatus;
  has_anonymous_profile_picture: boolean;
  hd_profile_pic_url_info: HDProfilePicURLInfo;
  hd_profile_pic_versions: HDProfilePicURLInfo[];
  is_favorite: boolean;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  transparency_product_enabled: boolean;
  username: string;
  latest_reel_media: number;
  eligible_for_text_app_activation_badge: boolean;
  can_see_quiet_post_attribution: boolean;
}

export interface FanClubInfo {
  autosave_to_exclusive_highlight: boolean;
  connected_member_count: number;
  fan_club_id: number;
  fan_club_name: string;
  has_enough_subscribers_for_ssc: boolean;
  is_fan_club_gifting_eligible: boolean;
  is_fan_club_referral_eligible: boolean;
  subscriber_count: number;
  fan_consideration_page_revamp_eligiblity: FanConsiderationPageRevampEligiblity;
}

export interface FanConsiderationPageRevampEligiblity {
  should_show_content_preview: boolean;
  should_show_social_context: boolean;
}

export interface FriendshipStatus {
  following: boolean;
  is_bestie: boolean;
  is_feed_favorite: boolean;
  is_restricted: boolean;
}

export interface SharingFrictionInfo {
  bloks_app_url: null;
  should_have_sharing_friction: boolean;
  sharing_friction_payload: null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toSinglePicture(json: string): SinglePicture {
    return cast(JSON.parse(json), r('SinglePicture'));
  }

  public static singlePictureToJson(value: SinglePicture): string {
    return JSON.stringify(uncast(value, r('SinglePicture')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map(a => {
          return prettyTypeName(a);
        })
        .join(', ')}]`;
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map(a => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  SinglePicture: o(
    [
      { json: 'num_results', js: 'num_results', typ: 0 },
      { json: 'more_available', js: 'more_available', typ: true },
      { json: 'items', js: 'items', typ: a(r('Item')) },
      { json: 'auto_load_more_enabled', js: 'auto_load_more_enabled', typ: true },
      { json: 'showQRModal', js: 'showQRModal', typ: true },
    ],
    false
  ),
  Item: o(
    [
      { json: 'taken_at', js: 'taken_at', typ: 0 },
      { json: 'pk', js: 'pk', typ: 0 },
      { json: 'id', js: 'id', typ: '' },
      { json: 'fbid', js: 'fbid', typ: 0 },
      { json: 'device_timestamp', js: 'device_timestamp', typ: 0 },
      { json: 'caption_is_edited', js: 'caption_is_edited', typ: true },
      { json: 'strong_id__', js: 'strong_id__', typ: '' },
      { json: 'deleted_reason', js: 'deleted_reason', typ: 0 },
      { json: 'has_shared_to_fb', js: 'has_shared_to_fb', typ: 0 },
      { json: 'has_delayed_metadata', js: 'has_delayed_metadata', typ: true },
      { json: 'is_quiet_post', js: 'is_quiet_post', typ: true },
      { json: 'mezql_token', js: 'mezql_token', typ: '' },
      { json: 'share_count_disabled', js: 'share_count_disabled', typ: true },
      {
        json: 'is_visual_reply_commenter_notice_enabled',
        js: 'is_visual_reply_commenter_notice_enabled',
        typ: true,
      },
      { json: 'like_and_view_counts_disabled', js: 'like_and_view_counts_disabled', typ: true },
      { json: 'is_post_live_clips_media', js: 'is_post_live_clips_media', typ: true },
      { json: 'client_cache_key', js: 'client_cache_key', typ: '' },
      { json: 'integrity_review_decision', js: 'integrity_review_decision', typ: '' },
      { json: 'should_request_ads', js: 'should_request_ads', typ: true },
      {
        json: 'is_reshare_of_text_post_app_media_in_ig',
        js: 'is_reshare_of_text_post_app_media_in_ig',
        typ: true,
      },
      { json: 'has_privately_liked', js: 'has_privately_liked', typ: true },
      { json: 'filter_type', js: 'filter_type', typ: 0 },
      { json: 'can_see_insights_as_brand', js: 'can_see_insights_as_brand', typ: true },
      { json: 'media_type', js: 'media_type', typ: 0 },
      { json: 'code', js: 'code', typ: '' },
      { json: 'caption', js: 'caption', typ: r('Caption') },
      { json: 'sharing_friction_info', js: 'sharing_friction_info', typ: r('SharingFrictionInfo') },
      {
        json: 'original_media_has_visual_reply_media',
        js: 'original_media_has_visual_reply_media',
        typ: true,
      },
      { json: 'fb_user_tags', js: 'fb_user_tags', typ: r('FbUserTags') },
      { json: 'coauthor_producers', js: 'coauthor_producers', typ: a('any') },
      { json: 'invited_coauthor_producers', js: 'invited_coauthor_producers', typ: a('any') },
      { json: 'is_in_profile_grid', js: 'is_in_profile_grid', typ: true },
      { json: 'profile_grid_control_enabled', js: 'profile_grid_control_enabled', typ: true },
      { json: 'user', js: 'user', typ: r('Owner') },
      { json: 'owner', js: 'owner', typ: r('Owner') },
      { json: 'image_versions2', js: 'image_versions2', typ: r('ImageVersions2') },
      { json: 'original_width', js: 'original_width', typ: 0 },
      { json: 'original_height', js: 'original_height', typ: 0 },
      { json: 'media_notes', js: 'media_notes', typ: r('MediaNotes') },
      { json: 'enable_media_notes_production', js: 'enable_media_notes_production', typ: true },
      { json: 'product_type', js: 'product_type', typ: '' },
      { json: 'is_paid_partnership', js: 'is_paid_partnership', typ: true },
      { json: 'music_metadata', js: 'music_metadata', typ: r('MusicMetadata') },
      { json: 'organic_tracking_token', js: 'organic_tracking_token', typ: '' },
      { json: 'ig_media_sharing_disabled', js: 'ig_media_sharing_disabled', typ: true },
      { json: 'boost_unavailable_identifier', js: 'boost_unavailable_identifier', typ: null },
      { json: 'boost_unavailable_reason', js: 'boost_unavailable_reason', typ: null },
      { json: 'boost_unavailable_reason_v2', js: 'boost_unavailable_reason_v2', typ: a('any') },
      { json: 'subscribe_cta_visible', js: 'subscribe_cta_visible', typ: true },
      { json: 'is_cutout_sticker_allowed', js: 'is_cutout_sticker_allowed', typ: true },
      {
        json: 'gen_ai_detection_method',
        js: 'gen_ai_detection_method',
        typ: r('GenAIDetectionMethod'),
      },
      { json: 'fb_aggregated_like_count', js: 'fb_aggregated_like_count', typ: 0 },
      { json: 'fb_aggregated_comment_count', js: 'fb_aggregated_comment_count', typ: 0 },
      {
        json: 'has_high_risk_gen_ai_inform_treatment',
        js: 'has_high_risk_gen_ai_inform_treatment',
        typ: true,
      },
      {
        json: 'open_carousel_show_follow_button',
        js: 'open_carousel_show_follow_button',
        typ: true,
      },
      {
        json: 'is_tagged_media_shared_to_viewer_profile_grid',
        js: 'is_tagged_media_shared_to_viewer_profile_grid',
        typ: true,
      },
      {
        json: 'should_show_author_pog_for_tagged_media_shared_to_profile_grid',
        js: 'should_show_author_pog_for_tagged_media_shared_to_profile_grid',
        typ: true,
      },
      {
        json: 'is_eligible_for_media_note_recs_nux',
        js: 'is_eligible_for_media_note_recs_nux',
        typ: true,
      },
      { json: 'is_social_ufi_disabled', js: 'is_social_ufi_disabled', typ: true },
      { json: 'is_eligible_for_meta_ai_share', js: 'is_eligible_for_meta_ai_share', typ: true },
      { json: 'comments', js: 'comments', typ: a('any') },
      { json: 'can_view_more_preview_comments', js: 'can_view_more_preview_comments', typ: true },
      { json: 'preview_comments', js: 'preview_comments', typ: a('any') },
      { json: 'comment_count', js: 'comment_count', typ: 0 },
      {
        json: 'hide_view_all_comment_entrypoint',
        js: 'hide_view_all_comment_entrypoint',
        typ: true,
      },
      {
        json: 'inline_composer_display_condition',
        js: 'inline_composer_display_condition',
        typ: '',
      },
      {
        json: 'is_comments_gif_composer_enabled',
        js: 'is_comments_gif_composer_enabled',
        typ: true,
      },
      {
        json: 'comment_inform_treatment',
        js: 'comment_inform_treatment',
        typ: r('CommentInformTreatment'),
      },
      { json: 'has_liked', js: 'has_liked', typ: true },
      { json: 'like_count', js: 'like_count', typ: 0 },
      { json: 'facepile_top_likers', js: 'facepile_top_likers', typ: a(r('User')) },
      { json: 'top_likers', js: 'top_likers', typ: a('') },
      { json: 'clips_tab_pinned_user_ids', js: 'clips_tab_pinned_user_ids', typ: a('any') },
      { json: 'can_viewer_save', js: 'can_viewer_save', typ: true },
      { json: 'can_viewer_reshare', js: 'can_viewer_reshare', typ: true },
      { json: 'shop_routing_user_id', js: 'shop_routing_user_id', typ: null },
      {
        json: 'is_organic_product_tagging_eligible',
        js: 'is_organic_product_tagging_eligible',
        typ: true,
      },
      { json: 'igbio_product', js: 'igbio_product', typ: null },
      { json: 'featured_products', js: 'featured_products', typ: a('any') },
      { json: 'product_suggestions', js: 'product_suggestions', typ: a('any') },
      { json: 'is_reuse_allowed', js: 'is_reuse_allowed', typ: true },
      { json: 'is_open_to_public_submission', js: 'is_open_to_public_submission', typ: true },
    ],
    false
  ),
  Caption: o(
    [
      { json: 'bit_flags', js: 'bit_flags', typ: 0 },
      { json: 'created_at', js: 'created_at', typ: 0 },
      { json: 'created_at_utc', js: 'created_at_utc', typ: 0 },
      { json: 'did_report_as_spam', js: 'did_report_as_spam', typ: true },
      { json: 'is_ranked_comment', js: 'is_ranked_comment', typ: true },
      { json: 'pk', js: 'pk', typ: '' },
      { json: 'share_enabled', js: 'share_enabled', typ: true },
      { json: 'content_type', js: 'content_type', typ: '' },
      { json: 'media_id', js: 'media_id', typ: 0 },
      { json: 'status', js: 'status', typ: '' },
      { json: 'type', js: 'type', typ: 0 },
      { json: 'user_id', js: 'user_id', typ: 0 },
      { json: 'strong_id__', js: 'strong_id__', typ: '' },
      { json: 'has_translation', js: 'has_translation', typ: true },
      { json: 'text', js: 'text', typ: '' },
      { json: 'user', js: 'user', typ: r('User') },
      { json: 'is_covered', js: 'is_covered', typ: true },
      { json: 'private_reply_status', js: 'private_reply_status', typ: 0 },
    ],
    false
  ),
  User: o(
    [
      { json: 'pk', js: 'pk', typ: 0 },
      { json: 'pk_id', js: 'pk_id', typ: '' },
      { json: 'id', js: 'id', typ: '' },
      { json: 'full_name', js: 'full_name', typ: '' },
      { json: 'is_private', js: 'is_private', typ: true },
      { json: 'strong_id__', js: 'strong_id__', typ: '' },
      { json: 'fbid_v2', js: 'fbid_v2', typ: u(undefined, 0) },
      { json: 'username', js: 'username', typ: '' },
      { json: 'is_verified', js: 'is_verified', typ: true },
      { json: 'profile_pic_id', js: 'profile_pic_id', typ: '' },
      { json: 'profile_pic_url', js: 'profile_pic_url', typ: '' },
    ],
    false
  ),
  CommentInformTreatment: o(
    [
      { json: 'action_type', js: 'action_type', typ: null },
      { json: 'should_have_inform_treatment', js: 'should_have_inform_treatment', typ: true },
      { json: 'text', js: 'text', typ: '' },
      { json: 'url', js: 'url', typ: null },
    ],
    false
  ),
  FbUserTags: o([{ json: 'in', js: 'in', typ: a('any') }], false),
  GenAIDetectionMethod: o([{ json: 'detection_method', js: 'detection_method', typ: '' }], false),
  ImageVersions2: o(
    [{ json: 'candidates', js: 'candidates', typ: a(r('HDProfilePicURLInfo')) }],
    false
  ),
  HDProfilePicURLInfo: o(
    [
      { json: 'height', js: 'height', typ: 0 },
      { json: 'url', js: 'url', typ: '' },
      { json: 'width', js: 'width', typ: 0 },
    ],
    false
  ),
  MediaNotes: o([{ json: 'items', js: 'items', typ: a('any') }], false),
  MusicMetadata: o(
    [
      { json: 'audio_type', js: 'audio_type', typ: null },
      { json: 'music_canonical_id', js: 'music_canonical_id', typ: '' },
      { json: 'pinned_media_ids', js: 'pinned_media_ids', typ: null },
      { json: 'music_info', js: 'music_info', typ: null },
      { json: 'original_sound_info', js: 'original_sound_info', typ: null },
    ],
    false
  ),
  Owner: o(
    [
      { json: 'fbid_v2', js: 'fbid_v2', typ: 0 },
      { json: 'feed_post_reshare_disabled', js: 'feed_post_reshare_disabled', typ: true },
      { json: 'full_name', js: 'full_name', typ: '' },
      { json: 'id', js: 'id', typ: '' },
      { json: 'is_private', js: 'is_private', typ: true },
      { json: 'is_unpublished', js: 'is_unpublished', typ: true },
      { json: 'pk', js: 'pk', typ: 0 },
      { json: 'pk_id', js: 'pk_id', typ: '' },
      {
        json: 'show_account_transparency_details',
        js: 'show_account_transparency_details',
        typ: true,
      },
      { json: 'strong_id__', js: 'strong_id__', typ: '' },
      { json: 'third_party_downloads_enabled', js: 'third_party_downloads_enabled', typ: 0 },
      { json: 'account_type', js: 'account_type', typ: 0 },
      { json: 'account_badges', js: 'account_badges', typ: a('any') },
      { json: 'fan_club_info', js: 'fan_club_info', typ: r('FanClubInfo') },
      { json: 'friendship_status', js: 'friendship_status', typ: r('FriendshipStatus') },
      { json: 'has_anonymous_profile_picture', js: 'has_anonymous_profile_picture', typ: true },
      {
        json: 'hd_profile_pic_url_info',
        js: 'hd_profile_pic_url_info',
        typ: r('HDProfilePicURLInfo'),
      },
      {
        json: 'hd_profile_pic_versions',
        js: 'hd_profile_pic_versions',
        typ: a(r('HDProfilePicURLInfo')),
      },
      { json: 'is_favorite', js: 'is_favorite', typ: true },
      { json: 'is_verified', js: 'is_verified', typ: true },
      { json: 'profile_pic_id', js: 'profile_pic_id', typ: '' },
      { json: 'profile_pic_url', js: 'profile_pic_url', typ: '' },
      { json: 'transparency_product_enabled', js: 'transparency_product_enabled', typ: true },
      { json: 'username', js: 'username', typ: '' },
      { json: 'latest_reel_media', js: 'latest_reel_media', typ: 0 },
      {
        json: 'eligible_for_text_app_activation_badge',
        js: 'eligible_for_text_app_activation_badge',
        typ: true,
      },
      { json: 'can_see_quiet_post_attribution', js: 'can_see_quiet_post_attribution', typ: true },
    ],
    false
  ),
  FanClubInfo: o(
    [
      { json: 'autosave_to_exclusive_highlight', js: 'autosave_to_exclusive_highlight', typ: true },
      { json: 'connected_member_count', js: 'connected_member_count', typ: 0 },
      { json: 'fan_club_id', js: 'fan_club_id', typ: 0 },
      { json: 'fan_club_name', js: 'fan_club_name', typ: '' },
      { json: 'has_enough_subscribers_for_ssc', js: 'has_enough_subscribers_for_ssc', typ: true },
      { json: 'is_fan_club_gifting_eligible', js: 'is_fan_club_gifting_eligible', typ: true },
      { json: 'is_fan_club_referral_eligible', js: 'is_fan_club_referral_eligible', typ: true },
      { json: 'subscriber_count', js: 'subscriber_count', typ: 0 },
      {
        json: 'fan_consideration_page_revamp_eligiblity',
        js: 'fan_consideration_page_revamp_eligiblity',
        typ: r('FanConsiderationPageRevampEligiblity'),
      },
    ],
    false
  ),
  FanConsiderationPageRevampEligiblity: o(
    [
      { json: 'should_show_content_preview', js: 'should_show_content_preview', typ: true },
      { json: 'should_show_social_context', js: 'should_show_social_context', typ: true },
    ],
    false
  ),
  FriendshipStatus: o(
    [
      { json: 'following', js: 'following', typ: true },
      { json: 'is_bestie', js: 'is_bestie', typ: true },
      { json: 'is_feed_favorite', js: 'is_feed_favorite', typ: true },
      { json: 'is_restricted', js: 'is_restricted', typ: true },
    ],
    false
  ),
  SharingFrictionInfo: o(
    [
      { json: 'bloks_app_url', js: 'bloks_app_url', typ: null },
      { json: 'should_have_sharing_friction', js: 'should_have_sharing_friction', typ: true },
      { json: 'sharing_friction_payload', js: 'sharing_friction_payload', typ: null },
    ],
    false
  ),
};

// To parse this data:
//
//   import { Convert, Carousel } from "./file";
//
//   const carousel2 = Convert.toCarousel2(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Carousel {
  num_results: number;
  more_available: boolean;
  items: Item[];
  auto_load_more_enabled: boolean;
  showQRModal: boolean;
}

export interface Item {
  taken_at: number;
  pk: number;
  id: ID;
  fbid: number;
  device_timestamp: number;
  caption_is_edited: boolean;
  strong_id__: ID;
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
  image_versions2: ItemImageVersions2;
  original_width: number;
  original_height: number;
  media_notes: MediaNotes;
  enable_media_notes_production: boolean;
  product_type: string;
  is_paid_partnership: boolean;
  location: Location;
  music_metadata: MusicMetadata;
  organic_tracking_token: string;
  ig_media_sharing_disabled: boolean;
  boost_unavailable_identifier: null;
  boost_unavailable_reason: null;
  boost_unavailable_reason_v2: any[];
  lng: number;
  lat: number;
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
  open_carousel_submission_state: string;
  carousel_media_count: number;
  carousel_media: CarouselMedia[];
  carousel_media_pending_post_count: number;
  is_reuse_allowed: boolean;
  is_open_to_public_submission: boolean;
  carousel_media_ids: number[];
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

export interface CarouselMedia {
  id: string;
  explore_pivot_grid: boolean;
  carousel_parent_id: ID;
  strong_id__: string;
  pk: number;
  commerciality_status: CommercialityStatus;
  taken_at: number;
  product_type: ProductType;
  media_type: number;
  image_versions2: CarouselMediaImageVersions2;
  original_width: number;
  original_height: number;
  preview: string;
  featured_products: any[];
  fb_user_tags: FbUserTags;
  shop_routing_user_id: null;
  sharing_friction_info: SharingFrictionInfo;
  product_suggestions: any[];
  video_versions?: VideoVersion[];
  video_duration?: number;
  has_audio?: boolean;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
}

export enum ID {
  The3389372295421601616_9056047000 = '3389372295421601616_9056047000',
}

export enum CommercialityStatus {
  NotCommercial = 'not_commercial',
}

export interface FbUserTags {
  in: any[];
}

export interface CarouselMediaImageVersions2 {
  candidates: HDProfilePicURLInfo[];
  scrubber_spritesheet_info_candidates?: ScrubberSpritesheetInfoCandidates;
}

export interface HDProfilePicURLInfo {
  height: number;
  url: string;
  width: number;
  scans_profile?: string;
}

export interface ScrubberSpritesheetInfoCandidates {
  default: Default;
}

export interface Default {
  video_length: number;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_duration: number;
  sprite_urls: string[];
  thumbnails_per_row: number;
  total_thumbnail_num_per_sprite: number;
  max_thumbnails_per_sprite: number;
  sprite_width: number;
  sprite_height: number;
  rendered_width: number;
  file_size_kb: number;
}

export enum ProductType {
  CarouselItem = 'carousel_item',
}

export interface SharingFrictionInfo {
  bloks_app_url: null;
  should_have_sharing_friction: boolean;
  sharing_friction_payload: null;
}

export interface VideoVersion {
  height: number;
  id: string;
  type: number;
  url: string;
  width: number;
}

export interface CommentInformTreatment {
  action_type: null;
  should_have_inform_treatment: boolean;
  text: string;
  url: null;
}

export interface GenAIDetectionMethod {
  detection_method: string;
}

export interface ItemImageVersions2 {
  candidates: HDProfilePicURLInfo[];
}

export interface Location {
  address: string;
  city: string;
  external_source: string;
  facebook_places_id: number;
  has_viewer_saved: boolean;
  is_eligible_for_guides: boolean;
  lat: number;
  lng: number;
  name: string;
  pk: number;
  short_name: string;
}

export interface MediaNotes {
  items: any[];
}

export interface MusicMetadata {
  audio_type: string;
  music_canonical_id: string;
  pinned_media_ids: any[];
  music_info: MusicInfo;
  original_sound_info: null;
}

export interface MusicInfo {
  music_canonical_id: null;
  music_asset_info: MusicAssetInfo;
  music_consumption_info: MusicConsumptionInfo;
}

export interface MusicAssetInfo {
  allows_saving: boolean;
  artist_id: string;
  audio_asset_id: string;
  audio_cluster_id: string;
  cover_artwork_thumbnail_uri: string;
  cover_artwork_uri: string;
  dark_message: null;
  dash_manifest: null;
  display_artist: string;
  duration_in_ms: number;
  fast_start_progressive_download_url: string;
  has_lyrics: boolean;
  highlight_start_times_in_ms: number[];
  id: string;
  ig_username: string;
  is_eligible_for_audio_effects: boolean;
  is_explicit: boolean;
  progressive_download_url: string;
  reactive_audio_download_url: null;
  sanitized_title: null;
  subtitle: string;
  title: string;
  web_30s_preview_download_url: string;
  is_eligible_for_vinyl_sticker: boolean;
}

export interface MusicConsumptionInfo {
  allow_media_creation_with_music: boolean;
  audio_asset_start_time_in_ms: number;
  contains_lyrics: null;
  derived_content_id: null;
  display_labels: null;
  formatted_clips_media_count: null;
  ig_artist: User;
  is_bookmarked: boolean;
  is_trending_in_clips: boolean;
  overlap_duration_in_ms: number;
  placeholder_profile_pic_url: string;
  should_allow_music_editing: boolean;
  should_mute_audio: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type: null;
  should_render_soundwave: boolean;
  trend_rank: null;
  previous_trend_rank: null;
  audio_filter_infos: any[];
  audio_muting_info: AudioMutingInfo;
}

export interface AudioMutingInfo {
  allow_audio_editing: boolean;
  mute_audio: boolean;
  mute_reason: null;
  mute_reason_str: string;
  show_muted_audio_toast: boolean;
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
  autosave_to_exclusive_highlight: null;
  connected_member_count: null;
  fan_club_id: null;
  fan_club_name: null;
  has_enough_subscribers_for_ssc: null;
  is_fan_club_gifting_eligible: null;
  is_fan_club_referral_eligible: null;
  subscriber_count: null;
  fan_consideration_page_revamp_eligiblity: null;
}

export interface FriendshipStatus {
  following: boolean;
  is_bestie: boolean;
  is_feed_favorite: boolean;
  is_restricted: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCarousel2(json: string): Carousel {
    return cast(JSON.parse(json), r('Carousel2'));
  }

  public static carousel2ToJson(value: Carousel): string {
    return JSON.stringify(uncast(value, r('Carousel2')), null, 2);
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
  Carousel2: o(
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
      { json: 'id', js: 'id', typ: r('ID') },
      { json: 'fbid', js: 'fbid', typ: 0 },
      { json: 'device_timestamp', js: 'device_timestamp', typ: 0 },
      { json: 'caption_is_edited', js: 'caption_is_edited', typ: true },
      { json: 'strong_id__', js: 'strong_id__', typ: r('ID') },
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
      { json: 'image_versions2', js: 'image_versions2', typ: r('ItemImageVersions2') },
      { json: 'original_width', js: 'original_width', typ: 0 },
      { json: 'original_height', js: 'original_height', typ: 0 },
      { json: 'media_notes', js: 'media_notes', typ: r('MediaNotes') },
      { json: 'enable_media_notes_production', js: 'enable_media_notes_production', typ: true },
      { json: 'product_type', js: 'product_type', typ: '' },
      { json: 'is_paid_partnership', js: 'is_paid_partnership', typ: true },
      { json: 'location', js: 'location', typ: r('Location') },
      { json: 'music_metadata', js: 'music_metadata', typ: r('MusicMetadata') },
      { json: 'organic_tracking_token', js: 'organic_tracking_token', typ: '' },
      { json: 'ig_media_sharing_disabled', js: 'ig_media_sharing_disabled', typ: true },
      { json: 'boost_unavailable_identifier', js: 'boost_unavailable_identifier', typ: null },
      { json: 'boost_unavailable_reason', js: 'boost_unavailable_reason', typ: null },
      { json: 'boost_unavailable_reason_v2', js: 'boost_unavailable_reason_v2', typ: a('any') },
      { json: 'lng', js: 'lng', typ: 3.14 },
      { json: 'lat', js: 'lat', typ: 3.14 },
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
      { json: 'open_carousel_submission_state', js: 'open_carousel_submission_state', typ: '' },
      { json: 'carousel_media_count', js: 'carousel_media_count', typ: 0 },
      { json: 'carousel_media', js: 'carousel_media', typ: a(r('CarouselMedia')) },
      {
        json: 'carousel_media_pending_post_count',
        js: 'carousel_media_pending_post_count',
        typ: 0,
      },
      { json: 'is_reuse_allowed', js: 'is_reuse_allowed', typ: true },
      { json: 'is_open_to_public_submission', js: 'is_open_to_public_submission', typ: true },
      { json: 'carousel_media_ids', js: 'carousel_media_ids', typ: a(0) },
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
  CarouselMedia: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'explore_pivot_grid', js: 'explore_pivot_grid', typ: true },
      { json: 'carousel_parent_id', js: 'carousel_parent_id', typ: r('ID') },
      { json: 'strong_id__', js: 'strong_id__', typ: '' },
      { json: 'pk', js: 'pk', typ: 0 },
      { json: 'commerciality_status', js: 'commerciality_status', typ: r('CommercialityStatus') },
      { json: 'taken_at', js: 'taken_at', typ: 0 },
      { json: 'product_type', js: 'product_type', typ: r('ProductType') },
      { json: 'media_type', js: 'media_type', typ: 0 },
      { json: 'image_versions2', js: 'image_versions2', typ: r('CarouselMediaImageVersions2') },
      { json: 'original_width', js: 'original_width', typ: 0 },
      { json: 'original_height', js: 'original_height', typ: 0 },
      { json: 'preview', js: 'preview', typ: '' },
      { json: 'featured_products', js: 'featured_products', typ: a('any') },
      { json: 'fb_user_tags', js: 'fb_user_tags', typ: r('FbUserTags') },
      { json: 'shop_routing_user_id', js: 'shop_routing_user_id', typ: null },
      { json: 'sharing_friction_info', js: 'sharing_friction_info', typ: r('SharingFrictionInfo') },
      { json: 'product_suggestions', js: 'product_suggestions', typ: a('any') },
      { json: 'video_versions', js: 'video_versions', typ: u(undefined, a(r('VideoVersion'))) },
      { json: 'video_duration', js: 'video_duration', typ: u(undefined, 3.14) },
      { json: 'has_audio', js: 'has_audio', typ: u(undefined, true) },
      { json: 'is_dash_eligible', js: 'is_dash_eligible', typ: u(undefined, 0) },
      { json: 'video_dash_manifest', js: 'video_dash_manifest', typ: u(undefined, '') },
      { json: 'video_codec', js: 'video_codec', typ: u(undefined, '') },
      { json: 'number_of_qualities', js: 'number_of_qualities', typ: u(undefined, 0) },
    ],
    false
  ),
  FbUserTags: o([{ json: 'in', js: 'in', typ: a('any') }], false),
  CarouselMediaImageVersions2: o(
    [
      { json: 'candidates', js: 'candidates', typ: a(r('HDProfilePicURLInfo')) },
      {
        json: 'scrubber_spritesheet_info_candidates',
        js: 'scrubber_spritesheet_info_candidates',
        typ: u(undefined, r('ScrubberSpritesheetInfoCandidates')),
      },
    ],
    false
  ),
  HDProfilePicURLInfo: o(
    [
      { json: 'height', js: 'height', typ: 0 },
      { json: 'url', js: 'url', typ: '' },
      { json: 'width', js: 'width', typ: 0 },
      { json: 'scans_profile', js: 'scans_profile', typ: u(undefined, '') },
    ],
    false
  ),
  ScrubberSpritesheetInfoCandidates: o(
    [{ json: 'default', js: 'default', typ: r('Default') }],
    false
  ),
  Default: o(
    [
      { json: 'video_length', js: 'video_length', typ: 3.14 },
      { json: 'thumbnail_width', js: 'thumbnail_width', typ: 0 },
      { json: 'thumbnail_height', js: 'thumbnail_height', typ: 0 },
      { json: 'thumbnail_duration', js: 'thumbnail_duration', typ: 3.14 },
      { json: 'sprite_urls', js: 'sprite_urls', typ: a('') },
      { json: 'thumbnails_per_row', js: 'thumbnails_per_row', typ: 0 },
      { json: 'total_thumbnail_num_per_sprite', js: 'total_thumbnail_num_per_sprite', typ: 0 },
      { json: 'max_thumbnails_per_sprite', js: 'max_thumbnails_per_sprite', typ: 0 },
      { json: 'sprite_width', js: 'sprite_width', typ: 0 },
      { json: 'sprite_height', js: 'sprite_height', typ: 0 },
      { json: 'rendered_width', js: 'rendered_width', typ: 0 },
      { json: 'file_size_kb', js: 'file_size_kb', typ: 0 },
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
  VideoVersion: o(
    [
      { json: 'height', js: 'height', typ: 0 },
      { json: 'id', js: 'id', typ: '' },
      { json: 'type', js: 'type', typ: 0 },
      { json: 'url', js: 'url', typ: '' },
      { json: 'width', js: 'width', typ: 0 },
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
  GenAIDetectionMethod: o([{ json: 'detection_method', js: 'detection_method', typ: '' }], false),
  ItemImageVersions2: o(
    [{ json: 'candidates', js: 'candidates', typ: a(r('HDProfilePicURLInfo')) }],
    false
  ),
  Location: o(
    [
      { json: 'address', js: 'address', typ: '' },
      { json: 'city', js: 'city', typ: '' },
      { json: 'external_source', js: 'external_source', typ: '' },
      { json: 'facebook_places_id', js: 'facebook_places_id', typ: 0 },
      { json: 'has_viewer_saved', js: 'has_viewer_saved', typ: true },
      { json: 'is_eligible_for_guides', js: 'is_eligible_for_guides', typ: true },
      { json: 'lat', js: 'lat', typ: 3.14 },
      { json: 'lng', js: 'lng', typ: 3.14 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'pk', js: 'pk', typ: 0 },
      { json: 'short_name', js: 'short_name', typ: '' },
    ],
    false
  ),
  MediaNotes: o([{ json: 'items', js: 'items', typ: a('any') }], false),
  MusicMetadata: o(
    [
      { json: 'audio_type', js: 'audio_type', typ: '' },
      { json: 'music_canonical_id', js: 'music_canonical_id', typ: '' },
      { json: 'pinned_media_ids', js: 'pinned_media_ids', typ: a('any') },
      { json: 'music_info', js: 'music_info', typ: r('MusicInfo') },
      { json: 'original_sound_info', js: 'original_sound_info', typ: null },
    ],
    false
  ),
  MusicInfo: o(
    [
      { json: 'music_canonical_id', js: 'music_canonical_id', typ: null },
      { json: 'music_asset_info', js: 'music_asset_info', typ: r('MusicAssetInfo') },
      {
        json: 'music_consumption_info',
        js: 'music_consumption_info',
        typ: r('MusicConsumptionInfo'),
      },
    ],
    false
  ),
  MusicAssetInfo: o(
    [
      { json: 'allows_saving', js: 'allows_saving', typ: true },
      { json: 'artist_id', js: 'artist_id', typ: '' },
      { json: 'audio_asset_id', js: 'audio_asset_id', typ: '' },
      { json: 'audio_cluster_id', js: 'audio_cluster_id', typ: '' },
      { json: 'cover_artwork_thumbnail_uri', js: 'cover_artwork_thumbnail_uri', typ: '' },
      { json: 'cover_artwork_uri', js: 'cover_artwork_uri', typ: '' },
      { json: 'dark_message', js: 'dark_message', typ: null },
      { json: 'dash_manifest', js: 'dash_manifest', typ: null },
      { json: 'display_artist', js: 'display_artist', typ: '' },
      { json: 'duration_in_ms', js: 'duration_in_ms', typ: 0 },
      {
        json: 'fast_start_progressive_download_url',
        js: 'fast_start_progressive_download_url',
        typ: '',
      },
      { json: 'has_lyrics', js: 'has_lyrics', typ: true },
      { json: 'highlight_start_times_in_ms', js: 'highlight_start_times_in_ms', typ: a(0) },
      { json: 'id', js: 'id', typ: '' },
      { json: 'ig_username', js: 'ig_username', typ: '' },
      { json: 'is_eligible_for_audio_effects', js: 'is_eligible_for_audio_effects', typ: true },
      { json: 'is_explicit', js: 'is_explicit', typ: true },
      { json: 'progressive_download_url', js: 'progressive_download_url', typ: '' },
      { json: 'reactive_audio_download_url', js: 'reactive_audio_download_url', typ: null },
      { json: 'sanitized_title', js: 'sanitized_title', typ: null },
      { json: 'subtitle', js: 'subtitle', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'web_30s_preview_download_url', js: 'web_30s_preview_download_url', typ: '' },
      { json: 'is_eligible_for_vinyl_sticker', js: 'is_eligible_for_vinyl_sticker', typ: true },
    ],
    false
  ),
  MusicConsumptionInfo: o(
    [
      { json: 'allow_media_creation_with_music', js: 'allow_media_creation_with_music', typ: true },
      { json: 'audio_asset_start_time_in_ms', js: 'audio_asset_start_time_in_ms', typ: 0 },
      { json: 'contains_lyrics', js: 'contains_lyrics', typ: null },
      { json: 'derived_content_id', js: 'derived_content_id', typ: null },
      { json: 'display_labels', js: 'display_labels', typ: null },
      { json: 'formatted_clips_media_count', js: 'formatted_clips_media_count', typ: null },
      { json: 'ig_artist', js: 'ig_artist', typ: r('User') },
      { json: 'is_bookmarked', js: 'is_bookmarked', typ: true },
      { json: 'is_trending_in_clips', js: 'is_trending_in_clips', typ: true },
      { json: 'overlap_duration_in_ms', js: 'overlap_duration_in_ms', typ: 0 },
      { json: 'placeholder_profile_pic_url', js: 'placeholder_profile_pic_url', typ: '' },
      { json: 'should_allow_music_editing', js: 'should_allow_music_editing', typ: true },
      { json: 'should_mute_audio', js: 'should_mute_audio', typ: true },
      { json: 'should_mute_audio_reason', js: 'should_mute_audio_reason', typ: '' },
      { json: 'should_mute_audio_reason_type', js: 'should_mute_audio_reason_type', typ: null },
      { json: 'should_render_soundwave', js: 'should_render_soundwave', typ: true },
      { json: 'trend_rank', js: 'trend_rank', typ: null },
      { json: 'previous_trend_rank', js: 'previous_trend_rank', typ: null },
      { json: 'audio_filter_infos', js: 'audio_filter_infos', typ: a('any') },
      { json: 'audio_muting_info', js: 'audio_muting_info', typ: r('AudioMutingInfo') },
    ],
    false
  ),
  AudioMutingInfo: o(
    [
      { json: 'allow_audio_editing', js: 'allow_audio_editing', typ: true },
      { json: 'mute_audio', js: 'mute_audio', typ: true },
      { json: 'mute_reason', js: 'mute_reason', typ: null },
      { json: 'mute_reason_str', js: 'mute_reason_str', typ: '' },
      { json: 'show_muted_audio_toast', js: 'show_muted_audio_toast', typ: true },
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
      { json: 'autosave_to_exclusive_highlight', js: 'autosave_to_exclusive_highlight', typ: null },
      { json: 'connected_member_count', js: 'connected_member_count', typ: null },
      { json: 'fan_club_id', js: 'fan_club_id', typ: null },
      { json: 'fan_club_name', js: 'fan_club_name', typ: null },
      { json: 'has_enough_subscribers_for_ssc', js: 'has_enough_subscribers_for_ssc', typ: null },
      { json: 'is_fan_club_gifting_eligible', js: 'is_fan_club_gifting_eligible', typ: null },
      { json: 'is_fan_club_referral_eligible', js: 'is_fan_club_referral_eligible', typ: null },
      { json: 'subscriber_count', js: 'subscriber_count', typ: null },
      {
        json: 'fan_consideration_page_revamp_eligiblity',
        js: 'fan_consideration_page_revamp_eligiblity',
        typ: null,
      },
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
  ID: ['3389372295421601616_9056047000'],
  CommercialityStatus: ['not_commercial'],
  ProductType: ['carousel_item'],
};

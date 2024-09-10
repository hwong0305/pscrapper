// To parse this data:
//
//   import { Convert, Carousel2 } from "./file";
//
//   const carousel2 = Convert.toCarousel2(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Stories {
  data: Data;
  extensions: Extensions;
  status: string;
}

export interface Data {
  reels_media: ReelsMedia[];
}

export interface ReelsMedia {
  __typename: string;
  id: string;
  latest_reel_media: number;
  can_reply: boolean;
  owner: UserClass;
  expiring_at: number;
  can_reshare: boolean;
  seen: number;
  user: UserClass;
  items: Item[];
}

export interface Item {
  edge_story_media_viewers: EdgeStoryMediaViewers;
  __typename: Typename;
  id: string;
  dimensions: Dimensions;
  display_resources: DisplayResource[];
  display_url: string;
  media_preview: string;
  gating_info: null;
  taken_at_timestamp: number;
  expiring_at_timestamp: number;
  story_cta_url: null;
  story_view_count: null;
  is_video: boolean;
  owner: ItemOwner;
  should_log_client_event: boolean;
  tracking_token: string;
  overlay_image_resources?: null;
  video_duration?: number;
  video_resources?: VideoResource[];
  tappable_objects: TappableObject[];
  story_app_attribution: null;
}

export enum Typename {
  GraphStoryImage = 'GraphStoryImage',
  GraphStoryVideo = 'GraphStoryVideo',
}

export interface Dimensions {
  height: number;
  width: number;
}

export interface DisplayResource {
  src: string;
  config_width: number;
  config_height: number;
}

export interface EdgeStoryMediaViewers {
  count: number;
  page_info: PageInfo;
  edges: any[];
}

export interface PageInfo {
  has_next_page: boolean;
  end_cursor: null;
}

export interface ItemOwner {
  id: string;
  profile_pic_url: string;
  username: Username;
}

export enum Username {
  Jaeheeng = 'jaeheeng',
}

export interface TappableObject {
  __typename: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  custom_title: null;
  attribution: null;
  username?: string;
  full_name?: string;
  is_private?: boolean;
}

export interface VideoResource {
  src: string;
  config_width: number;
  config_height: number;
  mime_type: string;
  profile: string;
}

export interface UserClass {
  __typename?: string;
  id: string;
  profile_pic_url: string;
  username: Username;
  followed_by_viewer: boolean;
  requested_by_viewer: boolean;
}

export interface Extensions {
  is_final: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCarousel2(json: string): Stories {
    return cast(JSON.parse(json), r('Carousel2'));
  }

  public static carousel2ToJson(value: Stories): string {
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
      { json: 'data', js: 'data', typ: r('Data') },
      { json: 'extensions', js: 'extensions', typ: r('Extensions') },
      { json: 'status', js: 'status', typ: '' },
    ],
    false
  ),
  Data: o([{ json: 'reels_media', js: 'reels_media', typ: a(r('ReelsMedia')) }], false),
  ReelsMedia: o(
    [
      { json: '__typename', js: '__typename', typ: '' },
      { json: 'id', js: 'id', typ: '' },
      { json: 'latest_reel_media', js: 'latest_reel_media', typ: 0 },
      { json: 'can_reply', js: 'can_reply', typ: true },
      { json: 'owner', js: 'owner', typ: r('UserClass') },
      { json: 'expiring_at', js: 'expiring_at', typ: 0 },
      { json: 'can_reshare', js: 'can_reshare', typ: true },
      { json: 'seen', js: 'seen', typ: 0 },
      { json: 'user', js: 'user', typ: r('UserClass') },
      { json: 'items', js: 'items', typ: a(r('Item')) },
    ],
    false
  ),
  Item: o(
    [
      {
        json: 'edge_story_media_viewers',
        js: 'edge_story_media_viewers',
        typ: r('EdgeStoryMediaViewers'),
      },
      { json: '__typename', js: '__typename', typ: r('Typename') },
      { json: 'id', js: 'id', typ: '' },
      { json: 'dimensions', js: 'dimensions', typ: r('Dimensions') },
      { json: 'display_resources', js: 'display_resources', typ: a(r('DisplayResource')) },
      { json: 'display_url', js: 'display_url', typ: '' },
      { json: 'media_preview', js: 'media_preview', typ: '' },
      { json: 'gating_info', js: 'gating_info', typ: null },
      { json: 'taken_at_timestamp', js: 'taken_at_timestamp', typ: 0 },
      { json: 'expiring_at_timestamp', js: 'expiring_at_timestamp', typ: 0 },
      { json: 'story_cta_url', js: 'story_cta_url', typ: null },
      { json: 'story_view_count', js: 'story_view_count', typ: null },
      { json: 'is_video', js: 'is_video', typ: true },
      { json: 'owner', js: 'owner', typ: r('ItemOwner') },
      { json: 'should_log_client_event', js: 'should_log_client_event', typ: true },
      { json: 'tracking_token', js: 'tracking_token', typ: '' },
      { json: 'overlay_image_resources', js: 'overlay_image_resources', typ: u(undefined, null) },
      { json: 'video_duration', js: 'video_duration', typ: u(undefined, 3.14) },
      { json: 'video_resources', js: 'video_resources', typ: u(undefined, a(r('VideoResource'))) },
      { json: 'tappable_objects', js: 'tappable_objects', typ: a(r('TappableObject')) },
      { json: 'story_app_attribution', js: 'story_app_attribution', typ: null },
    ],
    false
  ),
  Dimensions: o(
    [
      { json: 'height', js: 'height', typ: 0 },
      { json: 'width', js: 'width', typ: 0 },
    ],
    false
  ),
  DisplayResource: o(
    [
      { json: 'src', js: 'src', typ: '' },
      { json: 'config_width', js: 'config_width', typ: 0 },
      { json: 'config_height', js: 'config_height', typ: 0 },
    ],
    false
  ),
  EdgeStoryMediaViewers: o(
    [
      { json: 'count', js: 'count', typ: 0 },
      { json: 'page_info', js: 'page_info', typ: r('PageInfo') },
      { json: 'edges', js: 'edges', typ: a('any') },
    ],
    false
  ),
  PageInfo: o(
    [
      { json: 'has_next_page', js: 'has_next_page', typ: true },
      { json: 'end_cursor', js: 'end_cursor', typ: null },
    ],
    false
  ),
  ItemOwner: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'profile_pic_url', js: 'profile_pic_url', typ: '' },
      { json: 'username', js: 'username', typ: r('Username') },
    ],
    false
  ),
  TappableObject: o(
    [
      { json: '__typename', js: '__typename', typ: '' },
      { json: 'x', js: 'x', typ: 3.14 },
      { json: 'y', js: 'y', typ: 3.14 },
      { json: 'width', js: 'width', typ: 3.14 },
      { json: 'height', js: 'height', typ: 3.14 },
      { json: 'rotation', js: 'rotation', typ: 3.14 },
      { json: 'custom_title', js: 'custom_title', typ: null },
      { json: 'attribution', js: 'attribution', typ: null },
      { json: 'username', js: 'username', typ: u(undefined, '') },
      { json: 'full_name', js: 'full_name', typ: u(undefined, '') },
      { json: 'is_private', js: 'is_private', typ: u(undefined, true) },
    ],
    false
  ),
  VideoResource: o(
    [
      { json: 'src', js: 'src', typ: '' },
      { json: 'config_width', js: 'config_width', typ: 0 },
      { json: 'config_height', js: 'config_height', typ: 0 },
      { json: 'mime_type', js: 'mime_type', typ: '' },
      { json: 'profile', js: 'profile', typ: '' },
    ],
    false
  ),
  UserClass: o(
    [
      { json: '__typename', js: '__typename', typ: u(undefined, '') },
      { json: 'id', js: 'id', typ: '' },
      { json: 'profile_pic_url', js: 'profile_pic_url', typ: '' },
      { json: 'username', js: 'username', typ: r('Username') },
      { json: 'followed_by_viewer', js: 'followed_by_viewer', typ: true },
      { json: 'requested_by_viewer', js: 'requested_by_viewer', typ: true },
    ],
    false
  ),
  Extensions: o([{ json: 'is_final', js: 'is_final', typ: true }], false),
  Typename: ['GraphStoryImage', 'GraphStoryVideo'],
  Username: ['jaeheeng'],
};

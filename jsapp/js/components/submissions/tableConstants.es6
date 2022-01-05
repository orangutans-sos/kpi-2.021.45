import {
  createEnum,
  QUESTION_TYPES,
  META_QUESTION_TYPES,
  ADDITIONAL_SUBMISSION_PROPS,
} from 'js/constants';

export const SUBMISSION_ACTIONS_ID = '__SubmissionActions';

export const VALIDATION_STATUS_ID_PROP = '_validation_status.uid';

// Columns that will be ALWAYS excluded from the view
export const EXCLUDED_COLUMNS = [
  '_xform_id_string',
  '_attachments',
  '_notes',
  '_bamboo_dataset_id',
  // '_status' is always 'submitted_via_web' unless submitted in bulk;
  // in that case, it's 'zip'
  '_status',
  'formhub/uuid',
  '_tags',
  '_geolocation',
  'meta/instanceID',
  'meta/deprecatedID',
  '_validation_status',
];

export const SORT_VALUES = createEnum([
  'ASCENDING',
  'DESCENDING',
]);

// This is the setting object name from `asset.settings`
export const DATA_TABLE_SETTING = 'data-table';
// These are all possible settings of the above
export const DATA_TABLE_SETTINGS = Object.freeze({
  SELECTED_COLUMNS: 'selected-columns',
  FROZEN_COLUMN: 'frozen-column',
  SHOW_GROUP: 'show-group-name',
  TRANSLATION: 'translation-index',
  SHOW_HXL: 'show-hxl-tags',
  SORT_BY: 'sort-by',
});

// TODO: Append this list with transcriptions/translations when they get added (NLP)
export const TABLE_MEDIA_TYPES = createEnum([
  QUESTION_TYPES.image.id,
  QUESTION_TYPES.audio.id,
  QUESTION_TYPES.video.id,
  QUESTION_TYPES.text.id,
  META_QUESTION_TYPES['background-audio'],
]);

export const DEFAULT_DATA_CELL_WIDTH = 140;

export const CELLS_WIDTH_OVERRIDES = {};
CELLS_WIDTH_OVERRIDES[VALIDATION_STATUS_ID_PROP] = 125;
CELLS_WIDTH_OVERRIDES[META_QUESTION_TYPES.start] = 110;
CELLS_WIDTH_OVERRIDES[META_QUESTION_TYPES.end] = 110;
CELLS_WIDTH_OVERRIDES[ADDITIONAL_SUBMISSION_PROPS._id] = 100;
CELLS_WIDTH_OVERRIDES[QUESTION_TYPES.image.id] = 110;
CELLS_WIDTH_OVERRIDES[QUESTION_TYPES.audio.id] = 110;
CELLS_WIDTH_OVERRIDES[QUESTION_TYPES.video.id] = 110;
CELLS_WIDTH_OVERRIDES[META_QUESTION_TYPES['background-audio']] = 110;
Object.freeze(CELLS_WIDTH_OVERRIDES);

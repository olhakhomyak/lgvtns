import { OpaqueToken } from '@angular/core';

import { LANG_EN_TRANS } from './lang-en';
import { LANG_DE_TRANS } from './lang-de';

export const TRANSLATIONS = new OpaqueToken('translations');

export const dictionary = {
    'en': LANG_EN_TRANS,
    'de': LANG_DE_TRANS,
};

export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
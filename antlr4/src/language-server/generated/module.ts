/******************************************************************************
 * This file was generated by langium-cli 0.5.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { Antlr4AstReflection } from './ast';
import { Antlr4Grammar } from './grammar';

export const Antlr4LanguageMetaData: LanguageMetaData = {
    languageId: 'antlr-4',
    fileExtensions: ['.g4'],
    caseInsensitive: false
};

export const Antlr4GeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new Antlr4AstReflection()
};

export const Antlr4GeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => Antlr4Grammar(),
    LanguageMetaData: () => Antlr4LanguageMetaData,
    parser: {}
};

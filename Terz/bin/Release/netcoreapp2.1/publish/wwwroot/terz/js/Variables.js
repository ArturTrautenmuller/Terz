﻿var reportData;
var DataFrames;
var AllDFS;
var Groups = [];
var currentSheet = "1";
var selections = [];
let usingDataFrames;
var formatList = ['number', 'real', 'percent'];
var formatListLabel = ['Numérico', 'Moeda (R$)', 'Percentual (%)'];
var Orientacoes = ['horizontal', 'vertical'];
var OrientacoesLabel = ['Horizontal', 'Vertical'];
var SortTypes = ['numerico','data'];
var SortTypesLabel = ['Numérico','Data'];
var SortOptions = ['none','crescente','decrescente'];
var SortOptionsLabel = ['Nenhum', 'Crescente', 'Decrescente'];
var SortAxis = ['dim', 'mea'];
var SortAxisLabel = ['Dimensão', 'Medida'];
var keepAllData = true;
var browseData;
var browseConfig;
var version;
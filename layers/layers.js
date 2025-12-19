var wms_layers = [];

var format_CILimitedelaCtedIvoire_0 = new ol.format.GeoJSON();
var features_CILimitedelaCtedIvoire_0 = format_CILimitedelaCtedIvoire_0.readFeatures(json_CILimitedelaCtedIvoire_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CILimitedelaCtedIvoire_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CILimitedelaCtedIvoire_0.addFeatures(features_CILimitedelaCtedIvoire_0);
var lyr_CILimitedelaCtedIvoire_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CILimitedelaCtedIvoire_0, 
                style: style_CILimitedelaCtedIvoire_0,
                popuplayertitle: 'CI — Limite de la Côte d\'Ivoire',
                interactive: false,
                title: '<img src="styles/legend/CILimitedelaCtedIvoire_0.png" /> CI — Limite de la Côte d\'Ivoire'
            });
var format_civ_admbnda_adm3_cntig_20160527_1 = new ol.format.GeoJSON();
var features_civ_admbnda_adm3_cntig_20160527_1 = format_civ_admbnda_adm3_cntig_20160527_1.readFeatures(json_civ_admbnda_adm3_cntig_20160527_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_civ_admbnda_adm3_cntig_20160527_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_civ_admbnda_adm3_cntig_20160527_1.addFeatures(features_civ_admbnda_adm3_cntig_20160527_1);
var lyr_civ_admbnda_adm3_cntig_20160527_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_civ_admbnda_adm3_cntig_20160527_1, 
                style: style_civ_admbnda_adm3_cntig_20160527_1,
                popuplayertitle: 'civ_admbnda_adm3_cntig_20160527',
                interactive: false,
                title: '<img src="styles/legend/civ_admbnda_adm3_cntig_20160527_1.png" /> civ_admbnda_adm3_cntig_20160527'
            });
var format_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2 = new ol.format.GeoJSON();
var features_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2 = format_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2.readFeatures(json_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2.addFeatures(features_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2);
var lyr_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2, 
                style: style_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2,
                popuplayertitle: 'fenosci_map — Répartition des ONG dans les districts sanitaires',
                interactive: true,
    title: 'fenosci_map — Répartition des ONG dans les districts sanitaires<br />\
    <img src="styles/legend/fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2_0.png" /> 1 - 2<br />\
    <img src="styles/legend/fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2_1.png" /> 2 - 4<br />\
    <img src="styles/legend/fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2_2.png" /> 4 - 6<br />\
    <img src="styles/legend/fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2_3.png" /> 6 - 8<br />\
    <img src="styles/legend/fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2_4.png" /> 8 - 10<br />\
    <img src="styles/legend/fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2_5.png" /> 10 - 12<br />' });
var format_carte_fenosci_3 = new ol.format.GeoJSON();
var features_carte_fenosci_3 = format_carte_fenosci_3.readFeatures(json_carte_fenosci_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carte_fenosci_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carte_fenosci_3.addFeatures(features_carte_fenosci_3);
cluster_carte_fenosci_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_carte_fenosci_3
});
var lyr_carte_fenosci_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_carte_fenosci_3, 
                style: style_carte_fenosci_3,
                popuplayertitle: 'carte_fenosci',
                interactive: true,
                title: '<img src="styles/legend/carte_fenosci_3.png" /> carte_fenosci'
            });

lyr_CILimitedelaCtedIvoire_0.setVisible(true);lyr_civ_admbnda_adm3_cntig_20160527_1.setVisible(true);lyr_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2.setVisible(true);lyr_carte_fenosci_3.setVisible(true);
var layersList = [lyr_CILimitedelaCtedIvoire_0,lyr_civ_admbnda_adm3_cntig_20160527_1,lyr_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2,lyr_carte_fenosci_3];
lyr_CILimitedelaCtedIvoire_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'admin0RefN': 'admin0RefN', 'admin0AltN': 'admin0AltN', 'admin0Al_1': 'admin0Al_1', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CNTRY_CODE': 'CNTRY_CODE', });
lyr_civ_admbnda_adm3_cntig_20160527_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin3Name': 'admin3Name', 'admin3Pcod': 'admin3Pcod', 'admin3RefN': 'admin3RefN', 'admin3AltN': 'admin3AltN', 'admin3Al_1': 'admin3Al_1', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Rowcacode1': 'Rowcacode1', 'Rowcacode2': 'Rowcacode2', 'Rowcacode3': 'Rowcacode3', });
lyr_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin3Name': 'admin3Name', 'admin2Name': 'admin2Name', 'admin1Name': 'admin1Name', 'DISTRICT SANITAIRE CIBLE': 'District sanitaire', 'NOMBRE D\'ONG IDENTIFIEES': 'Nombre d\'ONG recensées', 'NOM DES ONG': 'NOM DES ONG', });
lyr_carte_fenosci_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'Région': 'Région', 'District sanitaire': 'District sanitaire', 'Commune/Sous-préfecture': 'Commune/Sous-préfecture', 'Sigle de l\'ONG/OSC': 'Sigle de l\'ONG/OSC', 'Année de création': 'Année de création', 'Statut légal': 'Statut légal', 'District sanitaire du siège': 'District sanitaire du siège', 'Nombre estimé de régions couvertes': 'Nombre estimé de régions couvertes', 'Nombre estimé de districts couverts': 'Nombre estimé de districts couverts', 'Nombre estimé de villages/quartiers couverts': 'Nombre estimé de villages/quartiers couverts', 'Domaine(s) d’intervention': 'Domaine(s) d’intervention', 'Types de services fournis': 'Types de services fournis', 'Nombre estimé de bénéficiaires par an': 'Nombre estimé de bénéficiaires par an', 'effectif_total': 'effectif_total', 'Dispositif de gouvernance': 'Dispositif de gouvernance', 'Existence de documents stratégiques': 'Existence de documents stratégiques', 'Principales sources de financement': 'Principales sources de financement', 'Capacité de suivi-évaluation': 'Capacité de suivi-évaluation', 'Collaboration avec le système de santé local': 'Collaboration avec le système de santé local', });
lyr_CILimitedelaCtedIvoire_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'admin0RefN': 'TextEdit', 'admin0AltN': 'TextEdit', 'admin0Al_1': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CNTRY_CODE': 'TextEdit', });
lyr_civ_admbnda_adm3_cntig_20160527_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'admin3Name': 'TextEdit', 'admin3Pcod': 'TextEdit', 'admin3RefN': 'TextEdit', 'admin3AltN': 'TextEdit', 'admin3Al_1': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Rowcacode1': 'TextEdit', 'Rowcacode2': 'TextEdit', 'Rowcacode3': 'TextEdit', });
lyr_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin3Name': 'TextEdit', 'admin2Name': 'TextEdit', 'admin1Name': 'TextEdit', 'DISTRICT SANITAIRE CIBLE': 'TextEdit', 'NOMBRE D\'ONG IDENTIFIEES': 'Range', 'NOM DES ONG': 'TextEdit', });
lyr_carte_fenosci_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'Région': 'TextEdit', 'District sanitaire': 'TextEdit', 'Commune/Sous-préfecture': 'TextEdit', 'Sigle de l\'ONG/OSC': 'TextEdit', 'Année de création': 'TextEdit', 'Statut légal': 'TextEdit', 'District sanitaire du siège': 'TextEdit', 'Nombre estimé de régions couvertes': 'Range', 'Nombre estimé de districts couverts': 'Range', 'Nombre estimé de villages/quartiers couverts': 'TextEdit', 'Domaine(s) d’intervention': 'TextEdit', 'Types de services fournis': 'TextEdit', 'Nombre estimé de bénéficiaires par an': 'TextEdit', 'effectif_total': 'Range', 'Dispositif de gouvernance': 'TextEdit', 'Existence de documents stratégiques': 'TextEdit', 'Principales sources de financement': 'TextEdit', 'Capacité de suivi-évaluation': 'TextEdit', 'Collaboration avec le système de santé local': 'TextEdit', });
lyr_CILimitedelaCtedIvoire_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'admin0RefN': 'no label', 'admin0AltN': 'no label', 'admin0Al_1': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'CNTRY_CODE': 'no label', });
lyr_civ_admbnda_adm3_cntig_20160527_1.set('fieldLabels', {'OBJECTID': 'no label', 'admin3Name': 'no label', 'admin3Pcod': 'no label', 'admin3RefN': 'no label', 'admin3AltN': 'no label', 'admin3Al_1': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Rowcacode1': 'no label', 'Rowcacode2': 'no label', 'Rowcacode3': 'no label', });
lyr_fenosci_mapRpartitiondesONGdanslesdistrictssanitaires_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'admin3Name': 'header label - visible with data', 'admin2Name': 'header label - visible with data', 'admin1Name': 'hidden field', 'DISTRICT SANITAIRE CIBLE': 'header label - visible with data', 'NOMBRE D\'ONG IDENTIFIEES': 'header label - visible with data', 'NOM DES ONG': 'header label - visible with data', });
lyr_carte_fenosci_3.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'altitude': 'hidden field', 'Région': 'no label', 'District sanitaire': 'no label', 'Commune/Sous-préfecture': 'no label', 'Sigle de l\'ONG/OSC': 'no label', 'Année de création': 'no label', 'Statut légal': 'no label', 'District sanitaire du siège': 'no label', 'Nombre estimé de régions couvertes': 'no label', 'Nombre estimé de districts couverts': 'no label', 'Nombre estimé de villages/quartiers couverts': 'no label', 'Domaine(s) d’intervention': 'no label', 'Types de services fournis': 'no label', 'Nombre estimé de bénéficiaires par an': 'no label', 'effectif_total': 'no label', 'Dispositif de gouvernance': 'no label', 'Existence de documents stratégiques': 'no label', 'Principales sources de financement': 'no label', 'Capacité de suivi-évaluation': 'no label', 'Collaboration avec le système de santé local': 'no label', });
lyr_carte_fenosci_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
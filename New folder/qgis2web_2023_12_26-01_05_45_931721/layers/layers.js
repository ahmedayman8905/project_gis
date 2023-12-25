var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SAU_adm1_1 = new ol.format.GeoJSON();
var features_SAU_adm1_1 = format_SAU_adm1_1.readFeatures(json_SAU_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAU_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAU_adm1_1.addFeatures(features_SAU_adm1_1);
var lyr_SAU_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAU_adm1_1, 
                style: style_SAU_adm1_1,
                interactive: false,
    title: 'SAU_adm1<br />\
    <img src="styles/legend/SAU_adm1_1_0.png" /> 1<br />\
    <img src="styles/legend/SAU_adm1_1_1.png" /> 2<br />\
    <img src="styles/legend/SAU_adm1_1_2.png" /> 3<br />\
    <img src="styles/legend/SAU_adm1_1_3.png" /> 4<br />\
    <img src="styles/legend/SAU_adm1_1_4.png" /> 5<br />\
    <img src="styles/legend/SAU_adm1_1_5.png" /> 6<br />\
    <img src="styles/legend/SAU_adm1_1_6.png" /> 7<br />\
    <img src="styles/legend/SAU_adm1_1_7.png" /> 8<br />\
    <img src="styles/legend/SAU_adm1_1_8.png" /> 9<br />\
    <img src="styles/legend/SAU_adm1_1_9.png" /> 10<br />\
    <img src="styles/legend/SAU_adm1_1_10.png" /> 11<br />\
    <img src="styles/legend/SAU_adm1_1_11.png" /> 12<br />\
    <img src="styles/legend/SAU_adm1_1_12.png" /> 13<br />\
    <img src="styles/legend/SAU_adm1_1_13.png" /> <br />'
        });
var format_SAU_roads_2 = new ol.format.GeoJSON();
var features_SAU_roads_2 = format_SAU_roads_2.readFeatures(json_SAU_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAU_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAU_roads_2.addFeatures(features_SAU_roads_2);
var lyr_SAU_roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAU_roads_2, 
                style: style_SAU_roads_2,
                interactive: false,
                title: '<img src="styles/legend/SAU_roads_2.png" /> SAU_roads'
            });
var format_gis_osm_natural_free_1_3 = new ol.format.GeoJSON();
var features_gis_osm_natural_free_1_3 = format_gis_osm_natural_free_1_3.readFeatures(json_gis_osm_natural_free_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_natural_free_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_natural_free_1_3.addFeatures(features_gis_osm_natural_free_1_3);
var lyr_gis_osm_natural_free_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gis_osm_natural_free_1_3, 
                style: style_gis_osm_natural_free_1_3,
                interactive: true,
                title: '<img src="styles/legend/gis_osm_natural_free_1_3.png" /> gis_osm_natural_free_1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SAU_adm1_1.setVisible(true);lyr_SAU_roads_2.setVisible(true);lyr_gis_osm_natural_free_1_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SAU_adm1_1,lyr_SAU_roads_2,lyr_gis_osm_natural_free_1_3];
lyr_SAU_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_SAU_roads_2.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_gis_osm_natural_free_1_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_SAU_adm1_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', });
lyr_SAU_roads_2.set('fieldImages', {'MED_DESCRI': '', 'RTT_DESCRI': '', 'F_CODE_DES': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_gis_osm_natural_free_1_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_SAU_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'header label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_SAU_roads_2.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'header label', });
lyr_gis_osm_natural_free_1_3.set('fieldLabels', {'osm_id': 'inline label', 'code': 'inline label', 'fclass': 'inline label', 'name': 'inline label', });
lyr_gis_osm_natural_free_1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
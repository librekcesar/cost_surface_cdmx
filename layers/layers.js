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
var lyr_cost_surf2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "cost_surf2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cost_surf2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11059629.080939, 2168762.053857, -11013928.289266, 2224328.499054]
                            })
                        });
var format_zonas_cdmx_2 = new ol.format.GeoJSON();
var features_zonas_cdmx_2 = format_zonas_cdmx_2.readFeatures(json_zonas_cdmx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_cdmx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonas_cdmx_2.addFeatures(features_zonas_cdmx_2);
var lyr_zonas_cdmx_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonas_cdmx_2, 
                style: style_zonas_cdmx_2,
                interactive: true,
                title: '<img src="styles/legend/zonas_cdmx_2.png" /> zonas_cdmx'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cost_surf2_1.setVisible(true);lyr_zonas_cdmx_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cost_surf2_1,lyr_zonas_cdmx_2];
lyr_zonas_cdmx_2.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', });
lyr_zonas_cdmx_2.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', });
lyr_zonas_cdmx_2.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'station_name': 'header label', });
lyr_zonas_cdmx_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});